<template>
    <div>
        <h3 class="display-3">HungryHelper</h3>

        <p class="subheading">
            In America, 1 in 6 people face hunger.
            Yet the average American throws away 300 lbs. of food per year. (NRDC)
            <br>
        </p>

        <div class="font-weight-regular">Begin your journey in lowering food waste by
            finding ways to cook your leftover ingredients!</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        methods: {}
    }
</script>

<style scoped>
    .display-3{
        font-family: 'Concert One', cursive !important;
        font-size: 75px !important;
        color: darkgreen;
        padding-bottom: 12px;
    }
    .subheading{
        font-size: 20px !important;
        margin: 1px !important;
    }
    .font-weight-regular{
        font-weight: bolder !important;
        font-size: 18px !important;

    }

</style>
