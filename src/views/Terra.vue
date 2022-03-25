<template>
    <div class="infoPlaneta">
         <informacaoPlaneta

            :srcPlaneta = imgUrl 

            :clName =  className
        /> 
        
        
        <!-- <div class="planetaTerra">
            <div>
                <img class="terra" src="../assets/terra/Terra-bg.png" v-if="mostraVisao">
                <img class="terra" src="../assets/terra/estrutura-da-terra-bg.png" v-if="mostraEstrutura">
                <img class="terra1" src="../assets/terra/superficie-terra.jpg" v-if="mostraGeologia">
            </div>   
        </div> -->

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
import informacaoPlaneta from '../components/acoes.vue'
import {ref} from 'vue'
export default {
    data(){
        return {
            imgUrl: "terra/Terra-bg.png",
            className: "terra",

            mostraVisao: ref(true),
            mostraEstrutura: ref(false),
            mostraGeologia: ref(false),
        };

        
    },
    components: {
        informacaoPlaneta
    },

    methods: {
        
        verVisao() {
            this.imgUrl = "terra/Terra-bg.png"
            this.className = "terra"

            this.mostraVisao = ref(true)
            this.mostraEstrutura = ref(false)
            this.mostraGeologia = ref(false)
        },

        verEstrutura() {
            this.imgUrl = "terra/estrutura-da-terra-bg.png"
            this.className = "terra"

            this.mostraVisao = ref(false)
            this.mostraEstrutura = ref(true)
            this.mostraGeologia = ref(false)
        },

        verGeologia() {
            this.imgUrl = "terra/superficie-terra.jpg"
            this.className = "terra1"

            this.mostraVisao = ref(false)
            this.mostraEstrutura = ref(false)
            this.mostraGeologia = ref(true)
        },

    },
}
</script>

<style lang="scss">
    @import "../scss/style_Planetas.scss";
</style>