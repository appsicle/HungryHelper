<template>
    <div>
        <div class="text-xs-center">

        </div>
        <v-expansion-panel class="app-expansion" mode="out-in">
            <div>
                <v-btn class="search-again"
                       to="/" color="brown"
                       style="color:white;font-weight:bold;">Search Again
                </v-btn>
            </div>
            <v-expansion-panel-content
                    v-for="item in instructions"

            >
                <div class="dish-title" slot="header">{{item[0]}}</div>
                <v-card-text class="card-header">INGREDIENTS</v-card-text>
                <ul class="app-list-header" v-for="ingredient in item[2]">
                    <li class="app-list-item">{{ingredient['originalString']}}</li>
                </ul>
                <br>
                <v-card-text class="card-header">DIRECTIONS</v-card-text>
                <v-card-text class="directions-paragraph">{{item[1]}}</v-card-text>
                <v-card-media
                        contain
                        aspect-ratio="1.8"
                        max-height="250px"
                        :src="item[3]"></v-card-media>

            </v-expansion-panel-content>
        </v-expansion-panel>

    </div>
</template>

<script>
    export default {
        computed: {
            instructions() {
                return this.$store.state.recipeList;
            }

        }
    }

</script>


<style scoped>

    .app-expansion {
        margin-top: 30px;
    }

    .app-list-header {
        margin-left: 25px;
    }

    .app-list-item {
        color: black;
    }

    .search-again {
        margin: 15px;
    }

    .card-header {
        padding-top: 2px;
        font-weight: bold;
        font-size: 15px;
        padding-bottom: 0px;
        margin-left: 10px;
        margin-right: 10px;
    }

    .directions-paragraph {
        padding-top: 5px;
        margin-left: 10px;
        margin-right: 10px;

    }

    .dish-title {
        font-weight: bold;
        font-size: 18px;
        padding: 7px;
        margin-left: -5px;
    }
</style>