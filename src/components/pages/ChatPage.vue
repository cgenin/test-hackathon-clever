<template>
    <page-container id="chat">
        <div class="container">
            <div class="connect-user grid-4" v-if="!user">
                <div class="label">
                    <label for="name" class="one-quarter">User name : </label>
                </div>
                <div class="col-2">
                    <input id="name" placeholder="Name" class="formulaire" v-model="name" type="text">
                </div>
                <div>
                    <button-flat type="primary" v-bind:click="connect"><i class="fa fa-comments"></i> Connect
                    </button-flat>
                </div>
            </div>

            <div class="chat-container" v-if="user">
                <div >
                    <button-flat type="danger" v-bind:click="disconnect"><i class="fa fa-stop-circle"></i> Logout
                    </button-flat>
                </div>
                <div class="chat-actions">
                    <form action="#" class="chat-form" @submit="doSubmit($event)">
                        <div class="chat-emotelist scroll-style"></div>
                        <textarea class="chat-textarea scroll-style" name="chat-box" id="chatbox" required
                                  v-model="message"></textarea>
                        <div class="chat-buttons">
                            <div class="chat-button chat-button--emote"><i class="far fa-grin"></i></div>
                            <button class="chat-button chat-button--submit">Chat</button>
                        </div>
                    </form>
                </div>
                <hr>
                <ul class="messages scroll-style">
                    <div class="message" :class="{reverse: user.id === exchange.user.id}" :key="index"
                         v-for="(exchange, index) in messages">
                        <div class="message-username message-username--admin">{{exchange.user.name}}</div>
                        <div class="message-username--admin">:</div>
                        <div class="message-text">{{exchange.message}}</div>
                    </div>

                </ul>
            </div>
        </div>

    </page-container>
</template>
<script>
    import io from 'socket.io-client';
    import PageContainer from '../PageContainer';
    import ButtonFlat from '../ButtonFlat';

    export default {
        name: 'chatPage',
        components: { PageContainer, ButtonFlat },
        data() {
            return {
                user: null,
                socket: null,
                name: '',
                messages: [],
                message: null
            }
        },
        mounted() {
            this.socket = io('/chat').connect();
            this.socket.on('registered', user => {
                this.user = user;
            });
            this.socket.on('show', (data) => {
                this.messages.push(data);
            });
        },
        beforeRouteLeave() {
            if (this.socket) {
                this.socket.close();
                this.socket = null;
                this.messages = [];
            }
        },
        methods: {
            connect() {
                const { name } = this;
                this.socket.emit('login', { name });
            },
            doSubmit(evt) {
                evt.preventDefault();
                const { message, user } = this;
                this.socket.emit('send', { message, user });
            },
            disconnect() {
                this.socket.emit('disconnected');
            },
        }
    }
</script>
<style>
    @import url("https://fonts.googleapis.com/css?family=Lato:400,700&display=swap");

    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    /*
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background: linear-gradient(50deg, #02afaa, #ac92fc);
        }
    */
    #chat .container {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100%;
    }

    #chat .connect-user {
        margin: 1em;
    }

    #chat .connect-user .label {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    #chat .connect-user #name {
        width: 100%;
    }

    .chat-container {
        font-size: 62.5%;
        font-family: "Lato", sans-serif;
        display: flex;
        flex-direction: column-reverse;
        background-color: #1a2b34;
        border-radius: 0.4rem;
        box-shadow: 0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.5);
        overflow: hidden;
        height: 75rem;
        width: 50rem;
    }

    @media (max-width: 450px) {
        .chat-container {
            width: 100vw;
        }
    }

    .chat-actions {
        margin-bottom: 1rem;
    }

    .chat-form {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 1rem;
        position: relative;
    }

    .chat-textarea {
        border-radius: 0.4rem;
        font-size: 1.5rem;
        height: 8rem;
        width: 38rem;
        padding: 0.5rem 1rem;
        padding-right: 4.2rem;
        resize: none;
    }

    @media (max-width: 450px) {
        .chat-textarea {
            width: 100%;
        }
    }

    .chat-emotelist {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(-webkit-min-content, 4.1rem));
        grid-template-columns: repeat(auto-fill, minmax(min-content, 4.1rem));
        grid-auto-rows: 3.2rem;
        grid-column-gap: 0.3rem;
        grid-row-gap: 0.3rem;
        justify-content: center;
        background: #19161b;
        height: 20rem;
        width: 28rem;
        padding: 1.5rem 0.5rem 1rem;
        position: absolute;
        -webkit-transform: translate(-5rem, -21rem) scaleY(0);
        transform: translate(-5rem, -21rem) scaleY(0);
        overflow-y: scroll;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .chat-emotelist--active {
        -webkit-transform: translate(-5rem, -21rem) scaleY(1);
        transform: translate(-5rem, -21rem) scaleY(1);
    }

    .chat-buttons {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-top: 1rem;
        width: 100%;
        padding-right: 1rem;
    }

    .chat-button {
        transition: color 0.2s ease;
    }

    .chat-button--emote {
        position: absolute;
        top: 1.5rem;
        right: 3rem;
        font-size: 3rem;
        font-weight: 800;
        color: black;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .chat-button--submit {
        background: white;
        border: none;
        border-radius: 0.4rem;
        color: #666;
        font-size: 2rem;
        letter-spacing: 0.2rem;
        padding: 1rem;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .chat-button:hover {
        color: #ac92fc;
        cursor: pointer;
    }

    .emote-item {
        list-style: none;
        justify-self: center;
        margin: 0 0.5rem;
    }

    .emote-item:hover {
        cursor: pointer;
    }

    .messages {
        overflow-y: scroll;
    }

    .message {
        font-size: 1.5rem;
        padding: 0.6rem 1rem 1rem;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .message.reverse {
        flex-direction: row-reverse;
    }


    .message:nth-of-type(2n) {
        background-color: #1f1825;
    }

    .message-username {
        color: #02afaa;
        font-weight: 700;
        margin: 0 0.3rem 1rem 0;
    }

    .message-username--admin {
        color: #ac92fc;
    }

    .message-username:hover {
        cursor: pointer;
    }

    .message-text {
        color: #eee;
        margin: .25em;
    }

    ::-moz-selection {
        background-color: #bb006b;
    }

    ::selection {
        background-color: #bb006b;
    }

    .scroll-style::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 0.6rem rgba(0, 0, 0, 0.3);
        border-radius: 10px;
        background-color: transparent;
    }

    .scroll-style::-webkit-scrollbar {
        width: 1.2rem;
        background-color: transparent;
    }

    .scroll-style::-webkit-scrollbar-thumb {
        border-radius: 1rem;
        -webkit-box-shadow: inset 0 0 0.6rem rgba(0, 0, 0, 0.3);
        background-color: #02afaa;
    }

    .scroll-style {
        scrollbar-color: #02afaa transparent;
        scrollbar-width: thin;
    }

</style>
