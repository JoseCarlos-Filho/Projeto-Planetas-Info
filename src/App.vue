<template>
  <header class="cabecalho">
    <h1 class="titulo">Os Planetas</h1>
    <nav>
      <ul class="lista_planetas">
      <!--Lista de links-->
        <li>
          <!-- Tag Router-Link para rotear o link passando como parametro a propriedade
               "name" para o index.js na pasta router, :to faz o v-bind interpolando o 
               o name com o conteudo da string
          -->
          <router-link :to="{ name: 'Mercurio' }">Mercúrio</router-link>
        </li>
        
        <li>
          <router-link :to="{ name: 'Venus' }">Vênus</router-link>
        </li>

        <li>
          <router-link :to="{ name: 'Terra' }">Terra</router-link>
        </li>
        
        <li>
          <router-link :to="{ name: 'Marte' }">Marte</router-link>
        </li>

        <li>
          <router-link :to="{ name: 'Jupiter' }">Júpiter</router-link>
        </li>

        <li>
          <router-link :to="{ name: 'Saturno' }">Saturno</router-link>
        </li>

        <li>
          <router-link :to="{ name: 'Urano' }">Urano</router-link>
        </li>

        <li>
          <router-link :to="{ name: 'Netuno' }">Netuno</router-link>
        </li>

      </ul>
    </nav>
  </header>
   
  <router-view/>
</template>


<style lang="scss">
// @import '~@/scss/variaveis_cores.scss';

@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Manrope&family=Montserrat:wght@100&family=Overpass:wght@400;700&display=swap');

@import '~@/scss/style_Principal.scss';

</style>
