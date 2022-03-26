<template>
    <div class="infoPlaneta">
         <informacaoPlaneta

            :srcPlaneta = imgUrl 

            :clName =  className
        /> 
        

        <div class="descricao">
            <conteudoPlaneta
                titulo = "Mercúrio"
                :content = conteudo
                wikipedia = "https:\/\/pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)"
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
            imgUrl: "mercurio/Mercurio.png",
            className: "imgPlaneta",
            conteudo: "Mercúrio é o menor planeta do Sistema Solar e o mais próximo do Sol.\n" + 
                      "Sua órbita ao redor do Sol leva 87,97 dias terrestres, o menor de todos os planetas do Sol.\n" + 
                      "Mercúrio é um dos quatro planetas terrestres do Sistema Solar e é um corpo rochoso como a Terra.",

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
            this.imgUrl = "mercurio/Mercurio.png"
            this.className = "imgPlaneta"
            this.conteudo = "Mercúrio é o menor planeta do Sistema Solar e o mais próximo do Sol.\n" + 
                            "Sua órbita ao redor do Sol leva 87,97 dias terrestres, o menor de todos os planetas do Sol.\n" + 
                            "Mercúrio é um dos quatro planetas terrestres do Sistema Solar e é um corpo rochoso como a Terra."

            this.mostraVisao = ref(true)
            this.mostraEstrutura = ref(false)
            this.mostraGeologia = ref(false)
        },

        verEstrutura() {
            this.imgUrl = "mercurio/estrutura-mercury-bg.png"
            this.className = "imgPlaneta"
            this.conteudo = "Mercúrio parece ter uma crosta sólida de silicato e um manto sobrejacente a uma\n" + 
                            "camada de núcleo externo sólida de sulfeto de ferro, uma camada de núcleo líquido\n" + 
                            "mais profunda e um núcleo interno sólido. A densidade do planeta é a segunda \n" + 
                            "mais alta do Sistema Solar, com 5,427 g/cm3, apenas um pouco menor que a densidade da Terra."

            this.mostraVisao = ref(false)
            this.mostraEstrutura = ref(true)
            this.mostraGeologia = ref(false)
        },

        verGeologia() {
            this.imgUrl = "mercurio/superficie-mercurio.jpg"
            this.className = "imgPlanetaS"
            this.conteudo =  "A superfície de Mercúrio é semelhante em aparência à da Lua,\n" + 
                             "mostrando extensas planícies semelhantes a mares e crateras pesadas,\n" + 
                             "indicando que está geologicamente inativo há bilhões de anos.\n" + 
                             "É mais heterogêneo do que o de Marte ou o da Lua."

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