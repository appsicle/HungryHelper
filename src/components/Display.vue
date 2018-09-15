<!--<template>-->
<!--<v-container>-->
<!--<div v-for="item in instructions">-->
<!--<p><strong>{{item[0]}}</strong> <br> Ingredients:-->
<!--<div v-for="ingredient in item[2]">-->
<!--<li>{{ingredient["originalString"]}}</li>-->
<!--</div>-->
<!--<br>-->
<!--Instructions: <br> {{item[1]}} <br>-->
<!--</p>-->
<!--</div>-->

<!--</v-container>-->
<!--</template>-->

<template>
    <div>
        <div class="text-xs-center">
            <v-btn to="/" color="info">Search Again</v-btn>
        </div>
        <v-expansion-panel>
            <v-expansion-panel-content
                    v-for="item in instructions"
                    :key="item"
            >
                <div slot="header">{{item[0]}}</div>
                <ul class="app-list-header" v-for="ingredient in item[2]" :key="ingredient">
                    <li class="app-list-item">{{ingredient['originalString']}}</li>
                </ul>
                <v-card-text>{{item[1]}}</v-card-text>

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
    .app-list-header {
        margin-left: 25px;
    }

    .app-list-item {
        color: black;
    }
</style>