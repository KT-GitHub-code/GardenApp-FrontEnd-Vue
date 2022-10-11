<template>
    <div :key="plant.id" v-for="plant in plants">
        <Plant :plant="plant"/>
    </div>
</template>

<script>
import Plant from './Plant.vue';

export default {
    name: "PlantList",
    props: {
        plants: Array
    },
    components: { Plant }
}
</script>