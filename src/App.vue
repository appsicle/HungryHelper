<template>
    <v-app light>
        <Header @passed="setValue"></Header>
        <v-container>
            <p v-for="item in instructions">
                {{item[0]}} <br> {{item[1]}}
            </p>

        </v-container>
        <main>

        </main>
    </v-app>
</template>

<script>
    import Header from './components/Header.vue'
    export default {
        components: {
            Header
        },
        data() {
            return {
                instructions: []
            }
        },
        methods: {
            setValue(value){
                this.instructions.push(value);
            }
        }

    }
</script>
