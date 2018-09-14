<template>
    <v-app light>
        <Header @passed="setValue"></Header>
        <v-container>
            <div v-for="item in instructions">
                <p><strong>{{item[0]}}</strong> <br> Ingredients:
                <div v-for="ingredient in item[2]">
                    <li>{{ingredient["originalString"]}}</li>
                </div>
                <br>
                Instructions: <br> {{item[1]}} <br>
                </p>
            </div>

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
