const addWebRtc = require('./webrtc');
const addChat = require('./chat');

function initialize(http) {
    const io = require('socket.io')(http);
    addWebRtc(io);
    addChat(io);
}

module.exports = initialize;