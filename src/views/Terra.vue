<template>
    <div class="infoPlaneta">
        
        <div class="planetaTerra">
            <div>
                <img class="terra" src="../assets/terra/Terra-bg.png" v-if="mostraVisao">
                <img class="terra" src="../assets/terra/estrutura-da-terra-bg.png" v-if="mostraEstrutura">
                <img class="terra1" src="../assets/terra/superficie-terra.jpg" v-if="mostraGeologia">
            </div>   
        </div>

        <div class="descricao">
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

            <!-- Botões que pega ação do @click seleciona o atributo "mostra###" e passa como parametro 
                para a função "ver###" mostranto o conteudo referente ao valor booleano setado.-->
            <div class="botoesDescricao">

                    <button type="button" value="" class="btn" 
                    :class="{ active: mostraVisao}" @click="verVisao">Visão Geral</button>

                    <button type="button" value="" class="btn"
                    :class="{ active: mostraEstrutura }" @click="verEstrutura">Estrutura Interna</button>

                    <button type="button" value="" class="btn"
                    :class="{ active: mostraGeologia }" @click="verGeologia">Geologia da Superfície</button>

            </div>
        </div>
    </div>

</template>

<script>
export default {
    data(){
        return {
            mostraVisao: true,
            mostraEstrutura: false,
            mostraGeologia: false,
        };
    },
    methods: {
        
        verVisao() {
            this.mostraVisao = true;
            this.mostraEstrutura = false;
            this.mostraGeologia = false;
        },

        verEstrutura() {
            this.mostraVisao = false;
            this.mostraEstrutura = true;
            this.mostraGeologia = false;
        },

        verGeologia() {
            this.mostraVisao = false;
            this.mostraEstrutura = false;
            this.mostraGeologia = true;
        },

    },
}
</script>

<style lang="scss">
    .infoPlaneta {
        display: flex;
        justify-content: space-around;
        align-items: center;

    }

    .planetaTerra {
        flex: 2;
    }
    
    .planetaTerra div {
        margin-top: 7em;
        margin-left: 10px;
        margin-right: 10px;
    }

    
    .terra {
        max-height: 500px;
        max-width: 500px;
        height:auto;
        width:auto;
         
        box-shadow: 0px 5px 15px gray;
        border-radius: 10%;
    }

    .terra1 {
        max-height: 500px;
        max-width: 500px;
        height:auto;
        width:auto;

        border: 5px solid gray;
        border-radius: 10%;
        box-shadow: 0px 5px 15px gray;

    }
     

    .descricao {
        height:400px;
        width: 400px;
    }

    .descricao h1 {
        font-size: 70px;
        font-weight: 700;
        margin: 0;
        text-align: left;
    }

    .descricao p {
        font-weight: 400;
        opacity: 0.9;
        line-height: 1.5em;
        text-align: left;
        margin-top: 2em;
    }

    .botoesDescricao {
        display: flex;
        flex-direction: column;
        
    }


    .descricao a {
        text-decoration: none;
        color: gray;
        font-weight: 700 italic;
        border-bottom: 1px solid white;
        cursor: pointer;

    }

    .btn {
        display: flex;
        justify-content: center;
        margin: 10px 0px;
        padding: 10px 20px;
        border: 1px solid #777;
        background: linear-gradient(to left, hsl(100, 0, 20%), hsl(100, 0, 80%));
        cursor: pointer;
        border-radius: 10px;
        box-shadow: 0px 1px 5px hsl(100, 0, 80%);

    }

    .active {
        border: 0;
        background: linear-gradient(to left, rgba(138, 43, 266, 0.5), rgba(138, 43, 226, 1));
        border-radius: 10px;
    }
</style>