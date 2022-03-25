<template>
    <div class="infoTerra">
                <h1>Terra</h1>
                <!-- O atributo "mostra###" é verdadeiro quando selecionado no botão "btn" correspondente.-->
                <p v-if="mostraVisao">
                    Terceiro planeta a partir do Sol e o único planeta conhecido a abrigar vida. 
                    Cerca de 29,2% da superfície da Terra é terra, com os restantes 70,8% cobertos por água. 
                    A distância da Terra ao Sol, as propriedades físicas e a história geológica permitiram 
                    que a vida evoluísse e prosperasse. <br><a href="https://pt.wikipedia.org/wiki/Terra#:~:text=A%20Terra%20%C3%A9%20o%20terceiro,como%20Mundo%20ou%20Planeta%20Azul.">Wikipedia</a>
                </p>

                <p v-if="mostraEstrutura">
                    O interior da Terra, como o de outros planetas terrestres, é dividido em camadas por suas 
                    propriedades químicas ou físicas (reológicas). A camada externa é uma crosta sólida de 
                    silicato quimicamente distinta, que é sustentada por um manto sólido altamente viscoso. 
                    <br><a href="https://pt.wikipedia.org/wiki/Terra#:~:text=A%20Terra%20%C3%A9%20o%20terceiro,como%20Mundo%20ou%20Planeta%20Azul.">Wikipedia</a>
                </p>

                <p v-if="mostraGeologia">
                    A superfície total da Terra é de cerca de 510 milhões de km2. 
                    A crosta continental é constituída por material de menor densidade como as rochas ígneas granito e andesito. 
                    Menos comum é o basalto, uma rocha vulcânica mais densa que é o principal constituinte dos fundos oceânicos. 
                    <br><a href="https://pt.wikipedia.org/wiki/Terra#:~:text=A%20Terra%20%C3%A9%20o%20terceiro,como%20Mundo%20ou%20Planeta%20Azul.">Wikipedia</a>
                </p> 

            </div>
</template>

