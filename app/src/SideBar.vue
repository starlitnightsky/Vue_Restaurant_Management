<template>
  <div class="sidebar-menu">
    <img class="logo"
        src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-logo-template-design-8e2682fc9eedd6214710cd4e14c79152_screen.jpg?ts=1587811145"
        alt="">
    <ul class="filter">
      <li>
        <label for="category">Category Filter:</label>
        <select id="category" @change="(e) => $emit('changeCategoryFilter', e.target.value)">
          <option v-for="option in categoryOptions" :key="option" :value="option">{{ option }}</option>
        </select>
        <label for="availability">Availability Filter:</label>
        <select id="availability" @change="(e) => $emit('changeAvailabilityFilter', e.target.value)">
          <option v-for="option in  availabilityOptions" :key="option" :value="option">{{ option }}</option>
        </select>
      </li>
      <li>
        <button class="btn-add" @click="$emit('createNewDish')">Add Dish</button>

      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    categoryOptions: {
      type: Array,
      required: true
    },
    availabilityOptions: {
      type: Array,
      required: true
    }
  },

};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Alkatra&display=swap');

.sidebar-menu {
  z-index: 49;
  width: 100%;
  padding: 40px 20px;
  border-radius: 1rem;
  height: 100%;
  margin-top: 24px;
  background-color: hsl(46, 88%, 35%);

}

ul {
  list-style: none;
  padding: 0;
}

li {
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  line-height: 2.5;
  color: aliceblue;
  font-size: 1.5rem;
}

#category,
#availability,
.btn-add {
  height: 40px;
  font-size: 20px;
  background-color: #e1dfdc;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
</style>