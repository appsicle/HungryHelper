<template>
    <div>
        <form action="">
            <v-flex xs6>
                <v-textarea
                        name="title"
                        label="WHATS IN YOUR FRIDGE?"
                        hint="ex: carrots pork lemon rice corn"
                        v-model="query"
                ></v-textarea>
            </v-flex>
        </form>
        <v-btn to="/recipes" flat color="success" @click="getRecipe">Submit</v-btn>
        <p>{{query}}</p>
    </div>
</template>
<script>
    export default {

        data() {
            return {
                query: ''
            }
        },
        methods: {
            getRecipe() {
                this.$store.commit('reset')
                this.$http.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients=apples%2Cflour%2Csugar&limitLicense=false&number=2&ranking=1",
                    {
                        headers: {
                            "X-Mashape-Key": "1YEwePZsOkmshgRlK83kandA6m0Rp1Qv3qJjsn3MHTKj6twMXE",
                            "X-Mashape-Host": "spoonacular-recipe-food-nutrition-v1.p.mashape.com"
                        }
                    }).then(response => {
                    var text = [];
                    let dictionary = response.body;
                    for (var key in dictionary) {
                        text.push(dictionary[key]["id"]);
                    }

                    for (var id in text) {
                        this.$http.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/" + text[id] + "/information?includeNutrition=false",
                            {
                                headers: {
                                    "X-Mashape-Key": "1YEwePZsOkmshgRlK83kandA6m0Rp1Qv3qJjsn3MHTKj6twMXE",
                                    "Accept": "application/json"
                                }
                            }).then(response => {
                            var info = response.body;
                            var list = [info["title"], info["instructions"], info["extendedIngredients"]];
                            this.$store.commit('setRecipeList', list);
                        })
                    }

                })

            }
        }
    }
</script>

<style scoped>
    #input-usage .v-input__prepend-outer,
    #input-usage .v-input__append-outer,
    #input-usage .v-input__slot,
    #input-usage .v-messages {
        border: 1px dashed rgba(0, 0, 0, .4);
    }
</style>