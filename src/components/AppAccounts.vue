<!-- components/ShopPage.vue -->
<template>
  <div class="shop-page">
    <div class="header">
      <h1>Cat food offering</h1>
    </div>
    <div v-for="(product, index) in products" :key="index" class="product-square">
      <div class="product-content">
        <h3>{{ product.name }}</h3>
        <img :src="product.image" alt="Product Image">
        <p>{{ product.description }}</p>
        <button @click="addToCart(product)" class="choose-button">Choose this one</button>
      </div>
    </div>
    <div v-if="chosenProductMessage" class="thank-you-banner">
      <p>{{ chosenProductMessage }}</p>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

export default {
  data() {
    return {
      products: [
        {
          name: 'Purina Pro Plan',
          image: require('@/assets/purinaproplan.jpeg'),
          description: "Purina Pro Plans carbon footprint is like the energy output of a superstar DJ set. Picture the beats dropping at 5-15 kg CO2e/kg protein for those animal-powered proteins, with the manufacturing process laying down 1-2 kg CO2e/kg cat fuel – thats the equivalent of a small weekend road trip. The packaging brings the cool vibes at 0.5-1 kg CO2e/kg cat fuel, and the ride to your cats bowl is like a smooth cruise at 0.2-0.5 kg CO2e/kg cat fuel. Overall, we're talking about a total performance of 7 to 10 kg of CO2 equivalent per kg of Purina Pro Plan cat fuel.",
        },
        {
          name: 'EcoTreat Vitality',
          image: require('@/assets/ecotreatvitality.jpg'),
          description: "The crafting, wrapping, and cruising phases of EcoTreats VitalBlend are finely tuned for eco-vibes, clocking in at a sleek 1-2 kg CO2e/kg for crafting, a stylish 0.5-1 kg CO2e/kg for wrapping, and a smooth 0.2-0.5 kg CO2e/kg for cruising. And hold up, thanks to the carbon-negative magic of the microalgae squad, the total carbon impact of EcoTreats VitalBlend is turning the pet food game upside down. We're talking a potential swing from net negative vibes to a cool 2-4 kg of CO2 equivalent per kg of pet food.",
        },
        // Repeat similar structure for other products
      ],

      chosenProductMessage: ''

    };
  },

  methods: {
    addToCart(product) {
      const productRef = firebase.database().ref(`products/${product.name}`);
      productRef.transaction((count) => (count || 0) + 1);

      // Update the message to be displayed to the user
      this.chosenProductMessage = `You chose ${product.name}. Thank you for helping us!`;

      // Clear the message after a certain time (e.g., 5 seconds)
      setTimeout(() => {
        this.chosenProductMessage = '';
      }, 5000);
    },
  },
};
</script>

<style scoped>
.shop-page {
  display: flex;
  flex-wrap: wrap; /* Allow items to wrap onto the next line */
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.header {
  width: 100%;
  text-align: center;
  padding: 20px 0;
  background-color: #42b983; /* Choose your desired background color */
  color: white; /* Choose your desired text color */
}

.product-square {
  background-color: #f0f0f0;
  border-radius: 20px;
  margin: 10px;
  width: calc(50% - 20px); /* Set width to half of the container with margins */
  box-sizing: border-box; /* Include padding and border in the width */
}

.product-content {
  padding: 10px;
  text-align: center;
}

img {
  max-width: 100%;
  max-height: 200px;
  margin-bottom: 10px;
}


.choose-button {
  background-color: #42b983;
  color: white;
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

.choose-button:hover {
  background-color: #318d6e;
}

</style>
