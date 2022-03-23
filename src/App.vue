<template>
  <header class="cabecalho">
    <h1 class="titulo">Os Planetas</h1>
    <nav>
      <ul class="lista_planetas">
        <li>
          <router-link :to="{ name: 'Mercurio' }">Mercúrio</router-link>
        </li>
        <li><a>Vênus</a></li>
        <li><a>
          <router-link :to="{ name: 'Home' }">Terra</router-link>
        </a></li>
        <li><a>Marte</a></li>
        <li><a>Júpiter</a></li>
        <li><a>Saturno</a></li>
        <li><a>Urano</a></li>
        <li><a>Netuno</a></li>
      </ul>
    </nav>
  </header>
   
  <router-view/>
</template>



<style lang="scss">
@import './SCSS/variaveis_cores.scss';

@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Manrope&family=Montserrat:wght@100&family=Overpass:wght@400;700&display=swap');

#app {
  font-family: "Lato", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  background: url("./assets/space-galaxy-universe.png");
  -webkit-background-size: cover;
  background-size: cover;

  color: $cor-fonte-header;
  height: 700px;
  padding: 1.5em;
  text-align: center;
}

.cabecalho {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-items: center;
  padding: 20px 10%;
  border-bottom: 3px solid $cor-boder-bottom;
}

.cabecalho li {
  list-style: none;
  display: inline-block;
  padding: 0px 15px;
}

.cabecalho a {
  font-weight: 500;
  font-size: 15px;
  text-decoration: none;
  color: white;
  cursor: pointer;
}

.cabecalho a:hover {
  padding: 5px 5px;
  border-radius: 8px;
  background: linear-gradient(to right, hsl(100, 0, 30%), hsl(100, 0, 80%));
}

.titulo {
  font-size: 35px;
  font-weight: 700;
  cursor: pointer;
}

</style>
