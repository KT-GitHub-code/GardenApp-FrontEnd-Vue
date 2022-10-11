<template>
    <div>
        <div className='container' :key="plant.id" v-for="plant in plants">
        <Plant :plant="plant"/>
        </div>
        <router-link to="/garden/newplant">
            <NewPlant className='container' /> 
        </router-link>
           
    </div>

</template>

<script>
import Plant from './Plant.vue';
import NewPlant from './NewPlant.vue';

export default {
    name: "PlantList",
    props: {
        plants: Array
    },
    components: { Plant, NewPlant }
}
</script>

<style>
a, a:hover, a:focus, a:active {
text-decoration: none;
color: inherit;
}
</style>