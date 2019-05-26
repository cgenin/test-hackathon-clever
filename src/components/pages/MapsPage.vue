<template>
    <page-container id="map-page">
        <h1>Maps</h1>
        <div class="buttons">
            <button-fab type="info" v-bind:click="doShowMap" title="geolocalise ma poistion"
                        icon="fa-map-pin"></button-fab>
        </div>
        <div v-if="showMap" class="grid">
            <div><label>Clique sur le point.</label></div>
        </div>
        <div v-if="showMap" class="grid">
            <!--gmap-map :center="center" :zoom="7" class="maps">
              <gmap-info-window :options="infoOptions" :position="infoWindowPos"
                                :opened="infoWinOpen" :content="infoContent"
                                @closeclick="infoWinOpen=false"></gmap-info-window>
              <gmap-marker :key="index" v-for="(m, index) in markers" :position="m.position"
                           :clickable="true" :draggable="true"
                           @click="doClickPlace(m, index)"></gmap-marker>
            </gmap-map-->
            <l-map
                    style="height: 50vh; width: 50vw"
                    class="maps"
                    :zoom="zoom"
                    :center="center"
            >
                <l-marker :key="index" v-for="(m, index) in markers" :lat-lng="m.position">
                    <l-popup>{{m.label}}</l-popup>
                </l-marker>
                <l-tile-layer :url="url"></l-tile-layer>
            </l-map>

        </div>
        <div v-if="geolocation.error" class="grid">
            <p>{{geolocation.msgError}}</p>
        </div>
        <div v-if="!showMap && geolocation.ok && !geolocation.error" class="grid">
            <l-map
                    style="height: 50vh; width: 50vw"
                    class="maps"
                    :zoom="25"
                    :center="geolocation.position">
                <l-marker :lat-lng="geolocation.position">
                    <l-popup>Ma géolocalisation</l-popup>
                </l-marker>
                <l-tile-layer :url="url"></l-tile-layer>

            </l-map>
        </div>
    </page-container>
</template>
<script>
    import 'leaflet/dist/leaflet.css'
    import { LMap, LMarker, LTileLayer, LPopup } from 'vue2-leaflet';
    import { Icon } from 'leaflet'
    import Vue from 'vue';
    import PageContainer from '../PageContainer';
    import ButtonFab from '../ButtonFab';

    delete Icon.Default.prototype._getIconUrl;

    Icon.Default.mergeOptions({
        iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
        iconUrl: require('leaflet/dist/images/marker-icon.png'),
        shadowUrl: require('leaflet/dist/images/marker-shadow.png')
    });

    export default {
        name: 'mapsPage',
        components: {
            PageContainer, ButtonFab, LMap, LTileLayer, LMarker, LPopup
        },
        data() {
            return {
                showMap: true,
                url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
                center: [10.0, 10.0],
                zoom: 7,
                markers: [
                    { label: 'Place 1', position: [10.0, 10.0] },
                    { label: 'Place 2', position: [11.0, 11.0] },
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
            '$route'(to, from) {
                Vue.$gmapDefaultResizeBus.$emit('resize');
            }
        },
        methods: {
            doShowMap() {
                const newMaps = !this.$data.showMap;
                this.$data.geolocation.error = false;
                this.$data.geolocation.ok = false;
                // Geolocalise la position
                if (!newMaps) {
                    this.$data.geolocation.ok = navigator.geolocation;
                    if (navigator.geolocation) {
                        navigator.geolocation.getCurrentPosition((p) => {
                                const lat = p.coords.latitude;
                                const lng = p.coords.longitude;
                                let position = [lat, lng];
                                console.log(lat + '/' + lng);
                                this.$data.geolocation.position = position;
                                this.$data.showMap = newMaps;
                                this.$data.geolocation.ok = true;
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
            doClickPlace(marker, idx) {
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
    #map-page {
        display: flex;
        flex-direction: column;
    }

    #map-page .buttons {
        display: flex;
        justify-content: center;
        margin: 1em;
    }

    #map-page .maps {
        min-height: 50vh
    }
</style>
