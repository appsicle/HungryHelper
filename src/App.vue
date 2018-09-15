<template>
    <v-app light>
        <v-container>
            <Header></Header>
            <Input></Input>
            <Display></Display>
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
