<template>
    <div>
        <div className='container' :key="plant.id" v-for="plant in plants">
        <Plant :plant="plant"/>
        </div>
        <NewPlant className='container'/>    
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