<template>
    <div class="infoPlaneta">
         <informacaoPlaneta

            :srcPlaneta = imgUrl 

            :clName =  className
        /> 
        

        <div class="descricao">
            <conteudoPlaneta
                titulo = "Vênus"
                :content = conteudo
                wikipedia = "https:\/\/pt.wikipedia.org/wiki/V%C3%A9nus_(planeta)"
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
            imgUrl: "venus/venus-bg.png",
            className: "imgPlaneta",
            conteudo: "Vênus é o segundo planeta a partir do Sol. É nomeado após a deusa romana do amor e da beleza.\n" + 
                      "Como o objeto natural mais brilhante no céu noturno da Terra depois da Lua,\n" + 
                      "Vênus pode lançar sombras e pode ser, em raras ocasiões, visível a olho nu em plena luz do dia.",

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
            this.imgUrl = "venus/venus-bg.png"
            this.className = "imgPlaneta"
            this.conteudo = "Vênus é o segundo planeta a partir do Sol. É nomeado após a deusa romana do amor e da beleza.\n" + 
                            "Como o objeto natural mais brilhante no céu noturno da Terra depois da Lua,\n" + 
                            "Vênus pode lançar sombras e pode ser, em raras ocasiões, visível a olho nu em plena luz do dia."

            this.mostraVisao = ref(true)
            this.mostraEstrutura = ref(false)
            this.mostraGeologia = ref(false)
        },

        verEstrutura() {
            this.imgUrl = "venus/venus-estrutura-bg.png"
            this.className = "imgPlaneta"
            this.conteudo = "A semelhança em tamanho e densidade entre Vênus e a Terra sugere que eles compartilham uma\n" + 
                            "estrutura interna semelhante: um núcleo, manto e crosta. Como o da Terra, o núcleo venusiano\n" + 
                            "é provavelmente pelo menos parcialmente líquido porque os dois planetas estão esfriando\n" + 
                            "aproximadamente na mesma taxa."

            this.mostraVisao = ref(false)
            this.mostraEstrutura = ref(true)
            this.mostraGeologia = ref(false)
        },

        verGeologia() {
            this.imgUrl = "venus/venus-superficie-bg.jpeg"
            this.className = "imgPlanetaS"
            this.conteudo =  "Grande parte da superfície venusiana parece ter sido moldada pela atividade vulcânica.\n" + 
                             "Vênus tem várias vezes mais vulcões que a Terra, e tem 167 grandes vulcões\n" + 
                             "com mais de 100 km (60 milhas) de diâmetro. O único complexo vulcânico deste tamanho na\n" + 
                             "Terra é a Grande Ilha do Havaí."

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