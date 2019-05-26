<template>
    <page-container id="form-page">
        <h1>Formulaire test</h1>
        <form @submit="doClick">
            <section class="grid-4 has-gutter">
                <div style="display: flex; align-items: center"><label for="message">Nouveau message : </label></div>
                <div><input id="message" class="formulaire" v-model="message" type="text"></div>
                <div>
                    <button-raised type="primary">Ajouter</button-raised>
                </div>
                <div></div>
            </section>
        </form>
        <div class="messages">
            <table class="table" summary="" v-if="messages.length > 0">
                <thead>
                <td>
                    Message
                </td>
                <td>#</td>
                </thead>
                <tbody>
                <tr :key="index" v-for="(m, index) in messages">
                    <td>
                        <blockquote> {{m.message}}</blockquote>
                    </td>
                    <td>
                        <button-fab type="danger" :click="suppress($event, index)" icon="fa-trash"></button-fab>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </page-container>
</template>
<script>
    import axios from 'axios';
    import ButtonRaised from '../ButtonRaised';
    import ButtonFab from '../ButtonFab';
    import PageContainer from '../PageContainer';

    export default {
        name: 'formPage',
        components: {
            PageContainer, ButtonRaised, ButtonFab
        },
        data() {
            return {
                message: '',
                messages: [],
            }
        },
        mounted() {
            this.load();
        },
        methods: {
            load() {
                axios.get('/api/test')
                    .then(r => r.data)
                    .then(messages => {
                        this.messages = messages;
                    });
            },
            suppress(e, index) {
                return () => {
                    axios.delete(`/api/test/${index}`)
                        .then(() => this.load())

                }
            },
            doClick(evt) {
                evt.preventDefault();
                const { message } = this;
                axios.post('/api/test', { message })
                    .then(() => {
                        this.load();
                        this.message = '';
                    });
            }
        }
    }
</script>
<style>
    #form-page .messages {
        margin-top: 1em;
    }

    #form-page .messages td {
        vertical-align: middle;
    }
</style>
