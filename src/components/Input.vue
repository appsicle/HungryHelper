<template>
    <v-jumbotron>
        <v-container fill-height>
            <v-layout align-center>
                <v-flex>
                    <Header/>

                    <v-layout align-center>
                        <v-flex>
                            <form v-on:submit.prevent>
                                <v-text-field auto-grow
                                              label="What's in your fridge?"
                                              hint="ex: carrots pork lemon corn"
                                              v-model="query"
                                              @keydown.enter="pressedEnter"

                                ></v-text-field>
                            </form>
                            <div class="text-xs-center">
                                <v-btn
                                        slot="activator"
                                        to="/recipes"
                                        color="brown"
                                        @click="getRecipe" style="color:white;font-weight:bold;">Find Recipes
                                </v-btn>
                            </div>
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>
        </v-container>
    </v-jumbotron>
</template>

<script>
    import Header from './Header.vue'

    export default {
        components: {
            Header
        },
        data() {
            return {
                query: ''
            }
        },
        methods: {
            pressedEnter(){
                console.log('tst');
                this.$router.push({path: '/recipes'});
                this.getRecipe();
            },
            getRecipe() {

                // parse data
                var user_input = this.query.replace(/,/g, "").replace(/\n/g, " ").split(" ");
                var ingredients_string = user_input[0];
                for (var i = 1; i < user_input.length; i++) {
                    ingredients_string += ("%2C" + user_input[i])
                }

                // connect to api
                this.$store.commit('reset')
                this.$http.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?ingredients=" + ingredients_string + "&number=15&ranking=1",
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
                            console.log(info["instructions"])
                            if (info["instructions"] != null && info["instructions"] != "Instructions") {
                                var list = [info["title"], info["instructions"], info["extendedIngredients"], info["image"]];
                                this.$store.commit('setRecipeList', list);
                            }


                        })
                    }

                })

            }
        }
    }
</script>



