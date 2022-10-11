<template>
    <div>
      {{plant.type}} {{plant.id}}
    </div>
</template>

<script>
export default {
  name: 'Plant',
  props: { 
    plant: Object
    
  }
}
</script>