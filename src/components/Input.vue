<template>
    <div>
        <form action="">
            <v-flex xs6>
                <v-textarea
                        name="title"
                        label="What's in your fridge?"
                        hint="ex: carrots pork lemon rice corn"
                        v-model="query"
                ></v-textarea>
            </v-flex>
        </form>
        <v-btn  slot="activator"
                to="/recipes"
                color="info"
                @click="getRecipe">Submit</v-btn>
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

                // parse data
                var user_input = this.query.replace(/,/g, "").replace(/\n/g, " ").split(" ");
                var ingredients_string = user_input[0];
                for (var i = 1; i < user_input.length; i++) {
                    ingredients_string += ("%2C" + user_input[i])
                }

                // connect to api
                this.$store.commit('reset')
                this.$http.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?ingredients=" + ingredients_string + "&number=10&ranking=1",
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

                            // send important data to state management
                            var info = response.body;
                            var list = [info["title"], info["instructions"], info["extendedIngredients"], info["image"]];
                            this.$store.commit('setRecipeList', list);
                        })
                    }

                })

            }
        }
    }
</script>



