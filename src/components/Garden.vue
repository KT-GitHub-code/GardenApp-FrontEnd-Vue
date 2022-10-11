<template>
    <div>
    <PlantList :plants="plants"/>
    </div>
</template>

<script>
import PlantList from './PlantList.vue';

export default {
    name: "Garden",
    components: { 
        PlantList 
    },

    data() {
    return {
      plants: this.fetchPlants(),
    }
  },

    methods: {
        async fetchPlants() {
        const res = await fetch('http://localhost:8080/api/plants')
        const data = await res.json()
        console.log(data);
        this.plants=data;
        return data
        }
    }
}
</script>