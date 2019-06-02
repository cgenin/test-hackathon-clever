function createWebRtc(io) {
    const nfw = io.of('/webrtc');
    nfw.on('connection', (socket) => {
        console.log('user connected');

        socket.on('offer', (data) => {
            socket.broadcast.emit('offer', data);
        });

        socket.on('initiate', () => {
            nfw.emit('initiate');
        });
        nfw.emit('pong');
    })
}

module.exports = createWebRtc;