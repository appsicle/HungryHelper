<template>
    <div>
        <div class="text-xs-center">

        </div>
        <v-expansion-panel class="app-expansion" mode="out-in">
            <div>
                <v-btn class="search-again"
                       to="/" color="info">Search Again
                </v-btn>
            </div>
            <v-expansion-panel-content
                    v-for="item in instructions"

            >
                <div slot="header">{{item[0]}}</div>
                <ul class="app-list-header" v-for="ingredient in item[2]">
                    <li class="app-list-item">{{ingredient['originalString']}}</li>
                </ul>
                <v-card-text>{{item[1]}}</v-card-text>
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
    .opened {
        padding-bottom: 30px;
    }

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
</style>