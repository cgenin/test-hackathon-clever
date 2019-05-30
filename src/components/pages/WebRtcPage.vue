<template>
    <page-container id="webrtc">
        <h1>Web rtc</h1>
        <div>
            <button-raised type="info" v-if="!start" :click="doStart">Lancer</button-raised>
            <button-raised type="warning" v-if="start" :click="doStop">Stop</button-raised>
        </div>
        <div class="videos">
            <video class="col1" muted ref="localVideo"></video>
            <video class="col2" autoplay ref="remoteVideo"></video>

        </div>
    </page-container>
</template>
<script>
    import Peer from 'simple-peer'
    import io from 'socket.io-client';
    import PageContainer from '../PageContainer';
    import ButtonRaised from '../ButtonRaised';

    function addToTag(tag, stream) {
        try {
            tag.src = window.URL.createObjectURL(stream);
        } catch (e) {
            tag.srcObject = stream;
        }
    }

    const stunServerConfig = {
        /* iceServers: [
             { urls: 'stun:stun.l.google.com:19302' },
             { urls: 'stun:global.stun.twilio.com:3478?transport=udp' }]

         */
    };

    export default {
        name: 'webrtcpage',
        components: { PageContainer, ButtonRaised },
        data() {
            return {
                socket: null,
                start: false,
                peerConnection: null,
                initiator: false,
                peer: null,
            }
        },
        mounted() {
            this.socket = io.connect({ path: '/webrtc' });
            this.socket.on('pong', () => console.log('ping'))
            this.socket.on('initiate', () => {
                this.startStream();
                this.start = true;
            });

        },
        methods: {
            startStream() {
                if (this.initiator) {
                    // get screen stream
                    navigator.mediaDevices.getUserMedia({
                        video: {
                            mediaSource: 'screen',
                            width: { max: '1920' },
                            height: { max: '1080' },
                            frameRate: { max: '10' }
                        }
                    }).then(this.gotMedia);
                } else {
                    this.gotMedia(null);
                }
            },
            gotMedia(stream) {
                const { remoteVideo, localVideo } = this.$refs;
                const { initiator } = this;

                if (initiator) {
                    this.peer = new Peer({
                        initiator,
                        stream,
                        config: stunServerConfig
                    });
                    addToTag(localVideo, stream);
                    localVideo.play();

                } else {
                    this.peer = new Peer({
                        config: stunServerConfig
                    });
                }

                this.peer.on('signal', (data) => {
                    this.socket.emit('offer', JSON.stringify(data));
                });

                this.socket.on('offer', (data) => {
                    this.peer.signal(JSON.parse(data));
                });

                this.peer.on('stream', (stream) => {
                    // got remote video stream, now let's show it in a video tag

                    addToTag(remoteVideo, stream);
                    remoteVideo.play();
                })
            },
            doStart() {
                this.initiator = true;
                this.socket.emit('initiate');
            },
            doStop() {
                this.peer.destroy();
                this.peer = null;
                this.start = false;

                this.socket.emit('initiate');
            },
        }
    }
</script>
<style>
    #webrtc .videos {
        display: grid;
        grid-template-columns: 50% 50%;
        grid-template-rows: 50vh;
    }

    #webrtc .videos > .col1 {
        grid-column: 1;
        width: 100%;
    }

    #webrtc .videos > .col2 {
        grid-column: 2;
        width: 100%;
    }

</style>