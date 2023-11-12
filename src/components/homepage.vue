<template>
  <div class="split-page">
    <div class="green-side">
      <div class="title">Eden: rethinking consciousness</div>
      <div class="feature-container">
        <div class="feature">
          <h3>Eco-Scoring</h3>
          <p>A unique carbon footprint rating system that quantifies the environmental impact of products by scanning their barcodes, enabling users to make informed, eco-conscious decisions.</p>
        </div>
        <div class="feature">
          <h3>Product Matchmaker</h3>
          <p>A smart recommendation engine that suggests lower-carbon alternatives for everyday products, helping users reduce their environmental footprint effortlessly.</p>
        </div>
        <div class="feature">
          <h3>Eco-Journey Tracking</h3>
          <p>Personalized carbon footprint tracking and progress monitoring to empower users on their path towards a more sustainable and eco-friendly lifestyle.</p>
        </div>
      </div>
    </div>
    <div class="white-side">
      <div class="button-container">
        <router-link to="/accounts" class="begin-button">Begin!</router-link>
        <img src="@/assets/ecofriendly.jpeg" alt="Picture below button" class="picture-below-button">
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Stylish and sophisticated theme */
.split-page {
  display: flex;
  height: 130vh;
}

.green-side {
  flex: 1;
  background-color: #42b983; /* Initial shade of green */
  padding: 20px;
  color: #fff;
}

.white-side {
  flex: 1;
  background-color: #fff;
  padding: 20px;
}

.title {
  font-size: 3em;
  text-align: center;
  margin-bottom: 30px;
  font-family: 'Roboto', sans-serif; /* Use Roboto or another sans-serif font */
}

.feature-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.feature {
  position: relative;
  background-color: rgba(255, 255, 255, 0.9); /* Opaque white background */
  color: #333;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  width: 300px;
  margin-bottom: 20px; /* Adjust the margin as needed */
}

.feature h3 {
  font-size: 2em;
  margin-bottom: 15px;
  color: #42b983;
}

.button-container {
  display: flex;
  flex-direction: column; /* Align items in a column */
  justify-content: center;
  align-items: center; /* Center the items horizontally */
  margin-top: 20px; /* Adjust the margin as needed */
}

.begin-button {
  background-color: #42b983;
  color: #fff;
  padding: 15px 30px;
  font-size: 1.5em;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  transition: background-color 0.3s;
}

.begin-button:hover {
  background-color: #318d6e;
}

.picture-below-button {
  max-width: 70%;
  margin-top: 20px; /* Adjust the margin as needed */
}
</style>
