<template>
  <div v-if="dishList.length" class="menu-list-items">
    <Dish  v-for="(dish, index) in dishList" :key="index" :dish="dish"
      @edit-dish="$emit('editDish', dish)" @delete-dish="$emit('deleteDish', dish._id)"
      @active-dish="$emit('activeDish')" />
  
  </div>
 <p class="menu-list-items" v-else>no results...</p>
</template>
  
<script>
import Dish from './Dish.vue'
export default {
  name: 'Menu',
  components: {
    Dish,
  },
  props: {
    dishList: {
      type: Array,
      default: () => [],
    }
  },
  beforeMount() {
    this.$emit("fetchDishes")
  }
}
</script>

<style>
.menu-list-items {
  background-image: url("https://i.pinimg.com/originals/df/80/8f/df808f6bfc95b04ecfa02502c905ca7e.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  text-align: left;
  margin-top: 70px;
  border-radius: 1rem;
}
p {
  font-size: 90px;
  background-image: none;
}
</style>
