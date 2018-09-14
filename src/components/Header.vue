<template>
    <v-toolbar>
        <v-toolbar-title>hello</v-toolbar-title>
        <v-btn flat>View</v-btn>
        <v-btn flat @click="getRecipe">get recipe</v-btn>
    </v-toolbar>
</template>

<script>
    export default {
        data(){
            return{
                // instructions: []
            }
        },
        methods: {
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
                            var list = [info["title"], info["instructions"], info["extendedIngredients"]];
                            // this.instructions.push(list);
                            this.$emit('passed', list)
                        })
                    }

                })

            }
        }
    }
</script>