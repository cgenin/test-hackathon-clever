<template>
  <page-container class="camera">
    <div v-show="showbutton" class="grid has-gutter">
      <button-raised type="info" :click="doStart">
        <i class="fa fa-play"></i> Commencer à filmer
      </button-raised>
    </div>
    <div v-show="showvideo" class="grid has-gutter">
      <video muted ref="video"></video>
    </div>
    <div v-show="showimg" class="image-container">
      <img src="" ref="image" class="snap">
    </div>

    <p v-if="showerror" class="error-message"><i class="fa fa-warning"></i>&nbsp;{{errorMsg}}</p>
    <div v-if="showcontrols" class="controls grid">
      <div class="one-fifth"></div>
      <div v-if="showimg" class="buttons">
        <button-fab type="danger" :click="deletePhoto" title="Delete the photo" icon="fa fa-trash">
        </button-fab>
      </div>
      <div v-if="showvideo" class="buttons">
        <button-fab type="success" :click="takePhoto" title="take the photo" icon="fa-camera">
        </button-fab>
      </div>
      <div v-if="showimg" class="buttons">
        <button-fab type="success" :click="downloadPhoto" title="download the photo" icon="fa-floppy-o">
        </button-fab>
      </div>
      <div class="buttons">
        <button-fab type="info" :click="showButton" title="Back" icon="fa-chevron-left">
        </button-fab>
      </div>
      <div class="one-fifth"></div>
    </div>
    <canvas ref="canvas" class="canvas"></canvas>
    <a ref="download" download="test.png" href="#" style="display:none;"></a>
  </page-container>
</template>
<script>
  import PageContainer from '../PageContainer';
  import ButtonRaised from '../ButtonRaised';
  import ButtonFab from '../ButtonFab';

  const getMedia = () => {
    return (navigator.getUserMedia || navigator.webkitGetUserMedia
      || navigator.mozGetUserMedia || navigator.msGetUserMedia).bind(navigator);
  };
  let getVideoWidth = function (video) {
    return video.width || video.videoWidth;
  };
  let getVideoHeight = function (video) {
    return video.height || video.videoHeight;
  };
  export default {
    name: 'cameraPage',
    data() {
      return {
        stream: null,
        errorMsg: '',
        showbutton: false,
        showimg: false,
        showvideo: false,
        showerror: false,
        showcontrols: false
      };
    },
    methods: {
      hideUI() {
        this.$data.showbutton = false;
        this.$data.showimg = false;
        this.$data.showvideo = false;
        this.$data.showerror = false;
        this.$data.showcontrols = false;
      },
      showButton() {
        const { video } = this.$refs;

        video.pause();
        video.src = '';
        if (this.$data.stream) {
          this.$data.stream.getTracks().forEach((track) => track.stop());
          this.$data.stream = null;
        }
        this.hideUI();
        this.$data.showbutton = true;
      },
      showVideo() {
        this.hideUI();
        this.$data.showvideo = true;
        this.$data.showcontrols = true;
      },
      takeSnapShot() {
        const { canvas, video } = this.$refs;
        const context = canvas.getContext('2d');
        const width = getVideoWidth(video);
        const height = getVideoHeight(video);
        if (width && height) {
          canvas.width = width;
          canvas.height = height;
          context.drawImage(video, 0, 0, width, height);
          return canvas.toDataURL('image/png');
        }
        return null;
      },
      downloadPhoto() {
        if (!this.$data.showimg) {
          return;
        }
        const { download } = this.$refs;
        download.click();
      },
      takePhoto() {
        if (this.$data.showimg) {
          return;
        }
        const snap = this.takeSnapShot();
        const { image, video, download } = this.$refs;
        const width = getVideoWidth(video);
        const height = getVideoHeight(video);
        image.setAttribute('src', snap);
        image.width = width;
        image.height = height;
        this.$data.showimg = true;
        this.$data.showvideo = false;
        download.href = snap;
        video.pause();
      },
      deletePhoto() {
        if (!this.$data.showimg) {
          return;
        }
        const { image, video, download } = this.$refs;
        image.setAttribute('src', '');
        this.$data.showimg = false;
        this.$data.showvideo = true;
        download.href = '#';
        video.play();
      },
      doStart() {
        this.$data.showerror = false;
        const { video } = this.$refs;
        const media = getMedia();
        media({ video: true }, (stream) => {
            this.$data.stream = stream;
            try {
              video.src = window.URL.createObjectURL(stream);
            } catch (e) {
              video.srcObject = stream;
            }
            video.play();
            video.onplay = () => {
              this.showVideo();
            };
          },
          (err) => {
            console.error(err);
            this.$data.showerror = true;

            switch (err.name) {
              case 'PermissionDeniedError':
                this.$data.errorMsg = `La permission d'utiliser la caméra a été refusée pour cette application.`
                break;
              default:
                this.$data.errorMsg = `Erreur lors de l'utilisation de la caméra.`;
            }

          });
      }
    },
    mounted() {
      const media = getMedia();
      this.$data.showerror = !media;
      this.$data.showbutton = !this.$data.showerror;
    },
    components: {
      PageContainer, ButtonRaised, ButtonFab
    }
  }
</script>
<style>
  .camera .image-container {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .camera img.snap {
    margin: auto;
    z-index: 10;
  }

  .camera .error-message {
    width: 100%;
    background-color: #ccc;
    color: red;
    font-size: 28px;
    /*padding: 200px 100px;*/
    text-align: center;
  }

  .camera .controls {
    margin-top: 1em;
  }

  .camera .controls .buttons {
    display: flex;
    justify-content: center;
  }

  .camera .canvas {
    position: fixed;
    top: -10000px;
    left: -10000px;
  }

</style>
