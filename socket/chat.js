const uuid = require('uuid/v1');

function createChat(io) {
    const nfw = io.of('/chat');

    nfw.on('connection', (socket) => {
        const connected = {};
        console.log('user connected to chat');
        socket.on('login', (data) => {
            connected['name'] = data.name;
            if (!connected.id) {
                connected.id = uuid();
            }
            socket.emit('registered', connected);
        });
        socket.on('send', (data) => {
            nfw.emit('show', data);
        });

        socket.on('disconnected', () => {
            connected.id = null;
            connected.name = null;
        });


    })
}

module.exports = createChat;