<template>
    <v-app light>
        <v-toolbar>
            <v-toolbar-title>hello</v-toolbar-title>
            <v-btn flat>View</v-btn>
            <v-btn flat @click="runCode">hello</v-btn>

            <v-btn flat @click="getRecipe">get recipe</v-btn>
        </v-toolbar>
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

    export default {

        data() {
            return {
                // text: [];
                instructions: []
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
            },

            getRecipe(){
                this.$http.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients=apples%2Cflour%2Csugar&limitLicense=false&number=2&ranking=1",
                    {
                        headers: {
                            "X-Mashape-Key": "1YEwePZsOkmshgRlK83kandA6m0Rp1Qv3qJjsn3MHTKj6twMXE",
                            "X-Mashape-Host": "spoonacular-recipe-food-nutrition-v1.p.mashape.com"
                        }
                    }).then(response => {
                        var text = [];
                        let dictionary = response.body;
                        for (var key in dictionary){
                            text.push(dictionary[key]["id"]);
                        }

                        for (var id in text){
                            this.$http.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/"+text[id]+"/information?includeNutrition=false",
                                {
                                    headers: {
                                        "X-Mashape-Key": "1YEwePZsOkmshgRlK83kandA6m0Rp1Qv3qJjsn3MHTKj6twMXE",
                                        "Accept": "application/json"
                                    }
                                }).then(response => {
                                    var info = response.body;
                                    var list = [info["title"], info["instructions"]];
                                    this.instructions.push(list);
                            })
                        }

                })




            }



        }
    }
</script>
