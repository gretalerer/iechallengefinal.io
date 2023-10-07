<template>
    <div id="app">
      <header class="header">
        <router-link to="/" class="logo">
          <h1>IE Bank</h1>
        </router-link>
      </header>
  
  
      <nav class="nav">
        <router-link to="/accounts" class="nav-item">
          View Accounts
        </router-link>
  
        <router-link to="/skull" class="nav-item">
          View Skull
        </router-link>
      </nav>
  
  
  
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </template>
  
  <style scoped>
  #app {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 60px;
  }
  
  .header {
    background-color: #F96167;
    padding: 10px 0;
    width: 100%;
    text-align: center;
  }
  
  .logo h1 {
    margin: 0;
    color: #ffffff;
    font-size: 36px;
    text-decoration: none;
  }
  
  .nav {
    background-color: #F9E795;
    padding: 10px 0;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  
  .nav-item {
    margin: 0 20px;
    color: #ffffff;
    text-decoration: none;
    font-size: 18px;
  }
  
  .content {
    margin-top: 20px;
    width: 100%;
  }
  </style>
  