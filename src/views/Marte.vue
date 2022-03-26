<template>
    <div class="infoPlaneta">
         <informacaoPlaneta

            :srcPlaneta = imgUrl 

            :clName =  className
        /> 
        

        <div class="descricao">
            <conteudoPlaneta
                titulo = "Marte"
                :content = conteudo
                wikipedia = "https:\/\/pt.wikipedia.org/wiki/Marte_(planeta)"
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
            imgUrl: "marte/Marte-bg.png",
            className: "imgPlaneta",
            conteudo: "Marte é o quarto planeta a partir do Sol e o segundo menor planeta do Sistema Solar,\n" + 
                      "sendo maior que apenas Mercúrio. Em inglês, Marte carrega o nome do deus romano da guerra\n" + 
                      "e é muitas vezes referido como o 'Planeta Vermelho.'",

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
            this.imgUrl = "marte/Marte-bg.png"
            this.className = "imgPlaneta"
            this.conteudo = "Marte é o quarto planeta a partir do Sol e o segundo menor planeta do Sistema Solar,\n" + 
                            "sendo maior que apenas Mercúrio. Em inglês, Marte carrega o nome do deus romano da guerra\n" + 
                            "e é muitas vezes referido como o 'Planeta Vermelho.'"

            this.mostraVisao = ref(true)
            this.mostraEstrutura = ref(false)
            this.mostraGeologia = ref(false)
        },

        verEstrutura() {
            this.imgUrl = "marte/marte-estrutura-bg.png"
            this.className = "imgPlaneta"
            this.conteudo = "Como a Terra, Marte se diferenciou em um núcleo metálico denso sobreposto por materiais menos densos.\n" + 
                            "Os cientistas determinaram inicialmente que o núcleo é pelo menos parcialmente líquido.\n" + 
                            "Os modelos atuais de seu interior implicam um núcleo consistindo principalmente de ferro e níquel\n" + 
                            "com cerca de 16 a 17% de enxofre."

            this.mostraVisao = ref(false)
            this.mostraEstrutura = ref(true)
            this.mostraGeologia = ref(false)
        },

        verGeologia() {
            this.imgUrl = "marte/marte-superficie-bg.jpg"
            this.className = "imgPlanetaS"
            this.conteudo =  "Marte é um planeta terrestre cuja superfície consiste em minerais contendo silício e oxigênio,\n" + 
                             "metais e outros elementos que normalmente compõem a rocha. A superfície é composta principalmente\n" + 
                             "de basalto toleítico, embora as partes sejam mais ricas em sílica do que o basalto típico."

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