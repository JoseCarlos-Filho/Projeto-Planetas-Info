<template>
    <div class="infoPlaneta">
         <informacaoPlaneta

            :srcPlaneta = imgUrl 

            :clName =  className
        /> 
        

        <div class="descricao">
            <conteudoPlaneta
                titulo = "Terra"
                :content = conteudo
                wikipedia = "https:\/\/pt.wikipedia.org/wiki/Terra#:~:text=A%20Terra%20%C3%A9%20o%20terceiro,como%20Mundo%20ou%20Planeta%20Azul."
            />

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
import conteudoPlaneta from '../components/textos.vue'
import {ref} from 'vue'
export default {
    data(){
        return {
            imgUrl: "terra/Terra-bg.png",
            className: "imgPlaneta",
            conteudo: "Terceiro planeta a partir do Sol e o único planeta conhecido a abrigar vida.\n" +
                      "Cerca de 29,2% da superfície da Terra é terra, com os restantes 70,8% cobertos por água.\n" + 
                      "A distância da Terra ao Sol, as propriedades físicas e a história geológica permitiram que a vida\n" + 
                      "evoluísse e prosperasse.",

            mostraVisao: ref(true),
            mostraEstrutura: ref(false),
            mostraGeologia: ref(false),
        };

        
    },
    components: {
        informacaoPlaneta,
        conteudoPlaneta
    },

    methods: {
        
        verVisao() {
            this.imgUrl = "terra/Terra-bg.png"
            this.className = "imgPlaneta"
            this.conteudo = "Terceiro planeta a partir do Sol e o único planeta conhecido a abrigar vida.\n" +
                            "Cerca de 29,2% da superfície da Terra é terra, com os restantes 70,8% cobertos por água.\n" + 
                            "A distância da Terra ao Sol, as propriedades físicas e a história geológica permitiram que a vida\n" + 
                            "evoluísse e prosperasse."

            this.mostraVisao = ref(true)
            this.mostraEstrutura = ref(false)
            this.mostraGeologia = ref(false)
        },

        verEstrutura() {
            this.imgUrl = "terra/estrutura-da-terra-bg.png"
            this.className = "imgPlaneta"
            this.conteudo = "O interior da Terra, como o de outros planetas terrestres, é dividido em camadas por suas\n" +
                            "propriedades químicas ou físicas (reológicas). A camada externa é uma crosta sólida de/n" + 
                            "silicato quimicamente distinta, que é sustentada por um manto sólido altamente viscoso."

            this.mostraVisao = ref(false)
            this.mostraEstrutura = ref(true)
            this.mostraGeologia = ref(false)
        },

        verGeologia() {
            this.imgUrl = "terra/superficie-terra.jpg"
            this.className = "imgPlanetaS"
            this.conteudo =  "A superfície total da Terra é de cerca de 510 milhões de km2./n" + 
                             "A crosta continental é constituída por material de menor densidade como as rochas ígneas granito e andesito./n" +  
                             "Menos comum é o basalto, uma rocha vulcânica mais densa que é o principal constituinte dos fundos oceânicos."

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