<template>
    <v-app light>
        <v-container>
            <Header></Header>
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </v-container>
    </v-app>
</template>

<script>
    import Header from './components/Header.vue'
    import Input from './components/Input.vue'
    import Display from './components/Display.vue'

    export default {
        components: {
            Header,
            Input,
            Display
        },
        data() {
            return {
                instructions: []
            }
        },
        methods: {
            setValue(value) {
                this.instructions.push(value);
            },
            clear() {
                this.instructions = []
            }
        }

    }
</script>

<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .25s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>