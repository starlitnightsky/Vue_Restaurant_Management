<template>
  <div class="form-container">
    <form class="dish-form" @submit.prevent="handleSubmit">
      <h2>{{ value._id ? "Edit" : "Add New" }} Dish</h2>
      <div class="form-control">

        <label for="name">Name:</label>
        <input type="text" id="name" v-model="value.name" required>
        <label for="imageUrl">ImageUrl</label>
        <input type="text" id="imageUrl" v-model="value.imageUrl" required>

        <label for="description">Description:</label>
        <textarea id="description" v-model="value.description" required></textarea>

        <label for="price">Price:</label>
        <input type="number" id="price" v-model.number="value.price">

        <label for="category">Category:</label>
        <select id="category" v-model="value.category">
          <option v-for="option in categoryOptions" :key="option" :value="option">{{ option }}</option>
        </select>
        <label for="availability">Availability:</label>
        <select id="availability" v-model="value.availability">
          <option v-for="option in  availabilityOptions" :key="option" :value="option">{{ option }}</option>
        </select>

        <label for="waitTime">Wait Time:</label>
        <input type="number" id="waitTime" v-model.number="value.waitTime">

      </div>
      <div class="form-actions">
        <button type="submit" class="btn-save">Save</button>
        <button type="button" class="btn-cancel" @click="$emit('cancel')">Cancel</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      name: '',
      description: '',
      price: 0,
      category: '',
      availability: '',
      imageUrl: "",
      waitTime: 0
    },
 
    categoryOptions: {
      type: Array,
      required: true
    },
    availabilityOptions: {
      type: Array,
      required: true
    }
  },

  methods: {
    handleSubmit() {
      this.$emit("save")
    }
  },
}

</script>

<style>
.form-container {
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 50;
  background-color: rgba(255, 255, 255, 0.775);
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: start;
  overflow-y: scroll;
  overflow-x: hidden;
}

.dish-form {
  display: flex;
  flex-direction: column;
  width: 700px;
  background-color: rgb(110, 131, 125);
  z-index: 50;
  margin-top: 20px;
  padding: 50px;
  color: #ced4da;
}


.dish-form h2 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 30px;
  text-align: center;
}

.form-control {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  font-weight: 800;
}

.form-control label {
  font-size: 1.2rem;
  margin-bottom: 10px;
}


.form-control input,
.form-control select,
.form-control textarea {
  border: 1px solid #ced4da;
  border-radius: 5px;
  padding: 10px;
  font-size: 1.2rem;
  margin-bottom: 20px;
  width: 100%;
}

.form-control select {
  appearance: none;
  background-color: #ffffff;
  border: 1px solid #d1d1d1;
  border-radius: 0.25rem;
  box-shadow: none;
  color: #333333;
  cursor: pointer;
  display: block;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 0.5rem 1rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  width: 718px;
}

.form-control select:focus {
  border-color: #4c94ff;
  box-shadow: 0 0 0 0.2rem rgba(76, 148, 255, 0.25);
  outline: 0;
}

.form-control select::-ms-expand {
  display: none;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
}

.btn-save,
.btn-cancel {
  border: none;
  color: white;
  cursor: pointer;
  font-weight: bold;
  padding: 0.5rem;
  border-radius: 0.25rem;
  margin-right: 0.25rem;
}

.btn-save {
  background-color: #f0a830;
}

.btn-cancel {
  background-color: #f0a830;
}

@media (max-width: 750px) {
  .dish-form {
    width: 100%;
    padding: 20px;
  }
}
</style>
  