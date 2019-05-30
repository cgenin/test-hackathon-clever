function initialize(http) {
    const io = require('socket.io')(http, {
        path: '/webrtc'
    });
    io.on('connection', (socket) => {
        console.log('user connected');

        socket.on('offer', (data) => {
            socket.broadcast.emit('offer', data);
        });

        socket.on('initiate', () => {
            io.emit('initiate');
        });
        io.emit('pong');
    })
}

module.exports = initialize;