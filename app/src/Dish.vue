<template>
  <div class="dish-card">
    <h2 class="dish-name">{{ dish.name }}</h2>
    <div class="dish-card-image">
      <img :src="active ? dish.imageUrl : soldOutUrl" alt="dish.name" class="image">
    </div>
    <p class="dish-description">{{ dish.description }}</p>
    <div class="dish-card-content">
      <div class="dish-price field"><strong>Price:</strong> {{ dish.price }}€</div>
      <div class="dish-category field"><strong>Category:</strong> {{ dish.category }}</div>
      <div class="dish-availability field"><strong>Availability:</strong> {{ dish.availability }}</div>
      <div class="dish-time field"><strong>Wait Time:</strong> {{ dish.waitTime }} min</div>
      <div class="dish-quantity field"><strong>Quantity:</strong> {{ dish.quantity }}</div>
    </div>

    <div class="dish-card-actions">
      <button class="btn-edit" @click="$emit('edit-dish',dish)">Edit</button>
      <label class="toggle">
        <input type="checkbox" v-model="active" id="toggle">
        <span class="slider"></span>
      </label>
      <button class="btn-delete" @click="$emit('delete-dish',dish._id)">Delete</button>
    </div>
  </div>
</template>
  
<script>

export default {
  name: 'Dish',
  data() {
    return {
      active: true,
      soldOutUrl: "https://1.bp.blogspot.com/-JMqrm2gn-zs/VHimV4EvDBI/AAAAAAAACC8/qlFcLO1DupM/s1600/sold-out-banner.png"
    }
  },
  
  props: {
    dish: {
      type: Object,
      required: true
    }
  },
}
</script>
  
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fasthand&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Alkatra&display=swap');

.dish-card {
  display: flex;
  flex-direction: column;
  background-color: #e1dfdc;
  background-size: cover;
  flex-basis: 40%;
  border-radius: 1rem;
  box-shadow: 8px 8px 60px 0px rgba(242, 232, 232, 0.939);
  margin-bottom: 60px;
  padding: 15px;
  margin-top: 80px;
  font-family: 'Alkatra', cursive;
}

.dish-description {
  font-size: 2rem;


}

.field {
  margin-bottom: 0.75rem;
}

.dish-card h2 {
  font-size: 3rem;
  margin: 0;
  margin-bottom: 0.8rem;
  color: #ab730a;
}

.dish-card-image {
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
}

.dish-card-image img {
  width: 100%;
  height: 100%;
}

.dish-card-content {
  justify-content: space-between;
  align-items: center;
  padding: 1.5px;

}

.dish-card-content div {
  font-size: 1.2rem;
}

.dish-card-content strong {
  font-weight: bold;
}



.dish-card-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.btn-edit,
.btn-delete {
  border: none;
  padding: 10px 20px;
  color: #ffffff;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
}

.btn-edit {
  background-color: #f07818;

}

.btn-delete {
  background-color: #09264f;

}

/* toogle */
.toggle {
  z-index: 30;
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.toggle input {
  z-index: 30;

  display: none;
}

.slider {
  z-index: 30;

  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .4s;
  border-radius: 34px;
}

.slider:before {
  z-index: 30;

  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: .4s;
  border-radius: 50%;
}

input:checked+.slider {
  z-index: 30;

  background-color: #09264f;
}

input:checked+.slider:before {
  z-index: 30;

  transform: translateX(26px);
}



input:not(:checked)+.slider~.image {
  opacity: 0.4;
}

@media only screen and (max-width:750px) {
  .dish-card {
    display: flex;
    flex-wrap: wrap;
    flex-basis: 90%;
  }
  .dish-card-image{
    width: 100%;
  }
}
</style>
  