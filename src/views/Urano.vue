<template>
    <div class="infoPlaneta">
         <informacaoPlaneta

            :srcPlaneta = imgUrl 

            :clName =  className
        /> 
        

        <div class="descricao">
            <conteudoPlaneta
                titulo = "Urano"
                :content = conteudo
                wikipedia = "https:\/\/pt.wikipedia.org/wiki/Urano_(planeta)"
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
            imgUrl: "urano/urano-bg.png",
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
            this.imgUrl = "urano/urano-bg.png"
            this.className = "imgPlaneta"
            this.conteudo = "Urano é o sétimo planeta a partir do Sol. Seu nome é uma referência ao deus grego do céu,\n" + 
                            "Urano segundo a mitologia grega, era o bisavô de Ares. Tem o terceiro maior raio planetário\n" + 
                            "e a quarta maior massa planetária do Sistema Solar."

            this.mostraVisao = ref(true)
            this.mostraEstrutura = ref(false)
            this.mostraGeologia = ref(false)
        },

        verEstrutura() {
            this.imgUrl = "urano/urano-estrutura-bg.png"
            this.className = "imgPlaneta"
            this.conteudo = "O modelo padrão da estrutura de Urano é que consiste em três camadas: um núcleo rochoso \n" + 
                            "(silicato/ferro-níquel) no centro, um manto gelado no meio e um envelope gasoso externo de \n" + 
                            "hidrogênio/hélio. O núcleo é relativamente pequeno, com uma massa de apenas 0,55 massa terrestre."

            this.mostraVisao = ref(false)
            this.mostraEstrutura = ref(true)
            this.mostraGeologia = ref(false)
        },

        verGeologia() {
            this.imgUrl = "urano/urano-super-bg.jpg"
            this.className = "imgPlanetaS"
            this.conteudo =  "A composição da atmosfera de Urano é diferente de seu volume,\n" + 
                             "consistindo principalmente de hidrogênio molecular e hélio. A fração molar de hélio,\n" + 
                             "ou seja, o número de átomos de hélio por molécula de gás, é 0,15±0,03 na troposfera superior."

            this.mostraVisao = ref(false)
            this.mostraEstrutura = ref(false)
            this.mostraGeologia = ref(true)
        },

    },
}
</script>

<style lang="scss">
   @import '~@/scss/style_Planetas.scss';
</style>