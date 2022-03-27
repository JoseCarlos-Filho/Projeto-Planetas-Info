<template>
    <div class="infoPlaneta">
         <informacaoPlaneta

            :srcPlaneta = imgUrl 

            :clName =  className
        /> 
        

        <div class="descricao">
            <conteudoPlaneta
                titulo = "Netuno"
                :content = conteudo
                wikipedia = "https:\/\/pt.wikipedia.org/wiki/Netuno_(planeta)"
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
            imgUrl: "netuno/netuno-bg.png",
            className: "imgPlaneta",
            conteudo: "Netuno é o oitavo e mais distante planeta solar conhecido do Sol.\n" + 
                            "No Sistema Solar, é o quarto maior planeta em diâmetro, o terceiro planeta mais massivo\n" + 
                            "e o planeta gigante mais denso. É 17 vezes a massa da Terra, mais massiva que seu quase gêmeo Urano.",

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
            this.imgUrl = "netuno/netuno-bg.png"
            this.className = "imgPlaneta"
            this.conteudo = "Netuno é o oitavo e mais distante planeta solar conhecido do Sol.\n" + 
                            "No Sistema Solar, é o quarto maior planeta em diâmetro, o terceiro planeta mais massivo\n" + 
                            "e o planeta gigante mais denso. É 17 vezes a massa da Terra, mais massiva que seu quase gêmeo Urano."

            this.mostraVisao = ref(true)
            this.mostraEstrutura = ref(false)
            this.mostraGeologia = ref(false)
        },

        verEstrutura() {
            this.imgUrl = "netuno/netuno-estrutura-bg.png"
            this.className = "imgPlaneta"
            this.conteudo = "A estrutura interna de Netuno se assemelha à de Urano.\n" + 
                            "Sua atmosfera forma cerca de 5% a 10% de sua massa e se\n" + 
                            "estende talvez de 10% a 20% do caminho em direção ao núcleo.\n" + 
                            "Concentrações crescentes de metano, amônia e água são encontradas nas regiões mais baixas."

            this.mostraVisao = ref(false)
            this.mostraEstrutura = ref(true)
            this.mostraGeologia = ref(false)
        },

        verGeologia() {
            this.imgUrl = "netuno/netuno-super-bg.jpeg"
            this.className = "imgPlanetaS"
            this.conteudo =  "A atmosfera de Netuno é 80% de hidrogênio e 19% de hélio.\n" + 
                             "Uma pequena quantidade de metano também está presente.\n" + 
                             "Bandas de absorção proeminentes de metano existem em comprimentos\n" + 
                             "de onda acima de 600 nm, na porção vermelha e infravermelha do espectro."

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