<template>
    <div class="infoPlaneta">
         <informacaoPlaneta

            :srcPlaneta = imgUrl 

            :clName =  className
        /> 
        

        <div class="descricao">
            <conteudoPlaneta
                titulo = "Júpiter"
                :content = conteudo
                wikipedia = "https:\/\/pt.wikipedia.org/wiki/J%C3%BApiter_(planeta)"
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
            imgUrl: "jupiter/jupiter-bg.png",
            className: "imgPlaneta",
            conteudo: "Júpiter é o quinto planeta a partir do Sol e o maior do Sistema Solar.\n" + 
                      "É um gigante gasoso com uma massa duas vezes e meia maior que a de todos\n" + 
                      "os outros planetas do Sistema Solar combinados, mas menos de um milésimo da massa do Sol.",

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
            this.imgUrl = "jupiter/jupiter-bg.png"
            this.className = "imgPlaneta"
            this.conteudo = "Júpiter é o quinto planeta a partir do Sol e o maior do Sistema Solar.\n" + 
                            "É um gigante gasoso com uma massa duas vezes e meia maior que a de todos\n" + 
                            "os outros planetas do Sistema Solar combinados, mas menos de um milésimo da massa do Sol."

            this.mostraVisao = ref(true)
            this.mostraEstrutura = ref(false)
            this.mostraGeologia = ref(false)
        },

        verEstrutura() {
            this.imgUrl = "jupiter/jupiter-estrutura-bg.png"
            this.className = "imgPlaneta"
            this.conteudo = "Quando o Juno chegou em 2016, descobriu que Júpiter tem um núcleo muito difuso que se mistura\n" + 
                            "ao seu manto. Uma possível causa é um impacto de um planeta de cerca de dez massas terrestres\n" + 
                            "alguns milhões de anos após a formação de Júpiter, o que teria interrompido um núcleo joviano\n" + 
                            "originalmente sólido."

            this.mostraVisao = ref(false)
            this.mostraEstrutura = ref(true)
            this.mostraGeologia = ref(false)
        },

        verGeologia() {
            this.imgUrl = "jupiter/jupiter-superficie.jpg"
            this.className = "imgPlanetaS"
            this.conteudo =  "A característica mais conhecida de Júpiter é a Grande Mancha Vermelha,\n" + 
                             "uma persistente tempestade anticiclônica localizada 22° ao sul do equador.\n" + 
                             "Sabe-se que existe desde pelo menos 1831, e possivelmente desde 1665."

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