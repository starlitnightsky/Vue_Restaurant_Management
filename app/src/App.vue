<template>
  <div class="app" id="app">
    <div class="sidebar">
      
      <SideBar :categoryOptions="categoryOptions" :availabilityOptions="availabilityOptions"
        @changeCategoryFilter="(value) => changeCategoryFilter(value)"
        @changeAvailabilityFilter="(value) => changeAvailabilityFilter(value)" @createNewDish="createNewDish" />
    </div>

    <div class="menu">
      <h1 class="menu-header">Welcome to the Admin panel Digital Menu:</h1>
      <Menu @fetchDishes="getDishes" :dishList="filteredArray" @deleteDish="deleteDish" @editDish="editDish" />
    </div>

    <DishForm v-if="showAddForm" v-model="formData" :categoryOptions="categoryOptions" :availabilityOptions="availabilityOptions"
      @save="(e) => saveDish(e)" @cancel="cancelAddForm" />

  </div>
</template>

<script>
import Menu from './Menu.vue'
import SideBar from './SideBar.vue';
import DishForm from './DishForm.vue';
import axios from "axios"

export default {
  name: "App",
  components: {
    SideBar,
    DishForm,
    Menu
  },

  data() {
    return {
      availabilityFilter: "",
      categoryFilter: "",
      dishes: [],
      showAddForm: false,
      // initializing a value for the form that shows the item details
      formData: {
        name: '',
        description: '',
        price: 0,
        category: '',
        availability: '',
        waitTime: 0,
        imageUrl: "",
        _id: ""
      },

      categoryOptions: ["", "Starter", "Main Course", "Dessert", "Beverage"],
      availabilityOptions: ["", "All Day", "Breakfast", "Lunch", "Dinner"]
    }
  },
  mounted() {
    this.getDishes()
  },
  computed: {
    filteredArray() {
      // Copy of items/dishes to not effect the original list
      let filteredList = [...this.dishes]
      if (this.availabilityFilter) {
        filteredList = filteredList.filter(item => item.availability === this.availabilityFilter)
      } if (this.categoryFilter) {
        filteredList = filteredList.filter(item => item.category === this.categoryFilter)
      }
      return filteredList
    }
  },
  methods: {
  
    changeAvailabilityFilter(value) {
      this.availabilityFilter = value
    },
    changeCategoryFilter(value) {
      this.categoryFilter = value
    },
    // reseting the Form DATA and open the showAddForm
    createNewDish() {
      this.formData = {
        name: '',
        description: '',
        price: 0,
        category: '',
        availability: '',
        waitTime: 0,
        imageUrl: "",
        _id: ""
      },
        this.showAddForm = true
    },
    //getting all dishes
    async getDishes() {
      try {
        const response = await axios.get('http://localhost:9000/dishes');
        this.dishes = response.data.data

      } catch (error) {
        console.log(error)
      }
    },
    // if there is an Id it will update the dish else it will create a new one
    async saveDish() {

      try {
        await axios.put('http://localhost:9000/dishes', this.formData).then(() => this.getDishes());
      } catch (error) {
        console.log(error)
      }
      this.showAddForm = false
    },
    // bringing the form all the data form the dish ,and fill it in the form
    editDish(dish) {
      this.formData = { ...dish }
      this.showAddForm = true
    },
    // sending the ID deleting it
    async deleteDish(id) {
      console.log('deleting dish', id)
      try {
       await axios.delete(`http://localhost:9000/dishes/${id}`);
        // fetching again data
        this.getDishes()
      } catch (error) {
        console.log(error)
      }
    },
    cancelAddForm() {
      this.showAddForm = false
    },
   
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Alkatra&family=Handlee&display=swap');

.app {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.sidebar {
  flex-basis: 20%;
}

.menu {
  flex-basis: 70%;
}

.menu-header{
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Handlee', cursive;
  background-color: antiquewhite;
  height: 100px;
}

.logo {
  width: 140px;
  height: 100px;
  border-radius: 50%;

}

@media only screen and (max-width: 750px) {

   .sidebar {
    position: fixed;
    top: 0;
    margin-top: -25px;
    left: 0;
    width: 94%;
    z-index:100;
  } 

  .menu {
    flex-basis: 100%;
    margin-top: 480px;
  }

  .menu-header {
    display: none;
  }

  .logo {
    width: 100px;
    height: 70px;
  }
}
</style>