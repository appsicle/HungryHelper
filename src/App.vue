<template>
    <v-app light>
        <v-toolbar>
            <v-toolbar-title>hello</v-toolbar-title>
            <v-btn flat>View</v-btn>
            <v-btn flat @click="runCode">hello</v-btn>
            {{text}}
        </v-toolbar>
        <v-container>

        </v-container>
        <main>

        </main>
    </v-app>
</template>

<script>

    export default {

        data() {
            return {
                text: 'asd'
            }
        }
        ,
        methods: {


            runCode() {
                this.$http.get('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/trivia/random', {
                    headers: {
                        "X-Mashape-Key": "1YEwePZsOkmshgRlK83kandA6m0Rp1Qv3qJjsn3MHTKj6twMXE",
                        "X-Mashape-Host": "spoonacular-recipe-food-nutrition-v1.p.mashape.com"
                    }
                }).then(response => {
                    console.log(response.body);
                })
            }

        }
    }
</script>
