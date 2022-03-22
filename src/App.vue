<template>
  <header>
    <h1 class="titulo">Os Planetas</h1>
    <nav class="nav_planetas">
      <ul class="lista_planetas">
        <li>Mercúrio</li>
        <li>Vênus</li>
        <li>Terra</li>
        <li>Marte</li>
        <li>Júpiter</li>
        <li>Saturno</li>
        <li>Urano</li>
        <li>Netuno</li>
      </ul>
    </nav>
  </header>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/> -->
</template>

<style lang="scss">
@import './SCSS/variaveis_cores.scss';

@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Manrope&family=Montserrat:wght@100&family=Overpass:wght@400;700&display=swap');

#app {
  font-family: "Lato", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: url("./assets/space-galaxy-universe.png");
  color: $cor-fonte-header;
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 1em;
  background-size: cover;
  -webkit-background-size: cover;
}
</style>
