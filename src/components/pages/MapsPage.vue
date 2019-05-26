<template>
  <page-container id="map-page">
    <h1>Maps</h1>
    <div class="buttons">
      <button-fab type="info" v-bind:click="doShowMap" title="geolocalise ma poistion" icon="fa-map-pin"></button-fab>
    </div>
    <div v-if="showMap" class="grid">
      <div><label>Clique sur le point.</label></div>
    </div>
    <div v-if="showMap" class="grid">
      <gmap-map :center="center" :zoom="7" class="maps">
        <gmap-info-window :options="infoOptions" :position="infoWindowPos"
                          :opened="infoWinOpen" :content="infoContent"
                          @closeclick="infoWinOpen=false"></gmap-info-window>
        <gmap-marker :key="index" v-for="(m, index) in markers" :position="m.position"
                     :clickable="true" :draggable="true"
                     @click="doClickPlace(m, index)"></gmap-marker>
      </gmap-map>
    </div>
    <div v-if="geolocation.error" class="grid">
      <p>{{geolocation.msgError}}</p>
    </div>
    <div v-if="!showMap && geolocation.ok && !geolocation.error" class="grid">
      <gmap-map :center="geolocation.position" :zoom="25" class="maps">
        <gmap-marker :position="geolocation.position"></gmap-marker>
      </gmap-map>
    </div>
  </page-container>
</template>
<script>
  import * as VueGoogleMaps from 'vue2-google-maps';
  import Vue from 'vue';
  import PageContainer from'../PageContainer';
  import ButtonFab from'../ButtonFab';

  Vue.use(VueGoogleMaps, {
    load: {key: 'AIzaSyCelnh7Qkol3W5ZeULEYXXIr4m-l-dg5pQ'}
  });

  export default{
    name: 'mapsPage',
    components: {
      PageContainer, ButtonFab
    },
    data(){
      return {
        showMap: true,
        center: {lat: 10.0, lng: 10.0},
        markers: [
          {label: 'Place 1', position: {lat: 10.0, lng: 10.0}},
          {label: 'Place 2', position: {lat: 11.0, lng: 11.0}},
        ],
        geolocation: {
          ok: false, position: {}
        },

        infoContent: '',
        infoWindowPos: {
          lat: 0,
          lng: 0
        },
        infoWinOpen: false,
        infoOptions: {
          pixelOffset: {
            width: 0,
            height: -35
          }
        },
      };
    },
    watch: {
      '$route'(to, from){
        Vue.$gmapDefaultResizeBus.$emit('resize');
      }
    },
    methods: {
      doShowMap(){
        const newMaps = !this.$data.showMap;
        this.$data.geolocation.error = false;
        this.$data.geolocation.ok = false;
        // Geolocalise la position
        if (!newMaps) {
          this.$data.geolocation.ok = navigator.geolocation;
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;
                this.$data.geolocation.position = {lat, lng};
                this.$data.showMap = newMaps;

              },
              (err) => {
                console.error(err);
                switch (err.code) {
                  case err.PERMISSION_DENIED:
                    this.$data.geolocation.msgError = 'Vous avez refusé la fonction de géolocalisation.';
                    break;
                  case err.POSITION_UNAVAILABLE:
                    this.$data.geolocation.msgError = `la position n'est pas accessible.`;
                    break;
                  case err.TIMEOUT:
                    this.$data.geolocation.msgError = `Time out de la requête.`;
                    break;
                  default:
                    this.$data.geolocation.msgError = `une erreur inconnue s'est produite.`;
                    break;
                }
                this.$data.geolocation.error = true;
              });
          }
        } else {
          this.$data.showMap = newMaps;
        }
      },
      doClickPlace(marker, idx){
        console.log(idx);

        this.infoWindowPos = marker.position;
        this.infoContent = marker.label;
        this.center = marker.position;

        if (this.currentMidx === idx) {
          this.infoWinOpen = !this.infoWinOpen;
        } else {
          this.infoWinOpen = true;
          this.currentMidx = idx;
        }
      }
    }
  }
</script>
<style>
  #map-page .buttons {
    display: flex;
    justify-content: center;
    margin: 1em;
  }

  #map-page .maps {
    min-height: 50vh
  }
</style>
