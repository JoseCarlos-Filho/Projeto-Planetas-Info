<template>
    <div class="infoPlaneta">
         <informacaoPlaneta

            :srcPlaneta = imgUrl 

            :clName =  className
        /> 
        

        <div class="descricao">
            <conteudoPlaneta
                titulo = "Saturno"
                :content = conteudo
                wikipedia = "https:\/\/pt.wikipedia.org/wiki/Saturno_(planeta)"
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
            imgUrl: "saturno/saturno-bg.png",
            className: "imgPlaneta",
            conteudo: "Saturno é o sexto planeta a partir do Sol e o segundo maior do Sistema Solar,\n" + 
                      "depois de Júpiter. É um gigante gasoso com um raio médio de cerca de nove vezes\n" + 
                      "e meia o da Terra. Tem apenas um oitavo da densidade média da Terra.",

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
            this.imgUrl = "saturno/saturno-bg.png"
            this.className = "imgPlaneta"
            this.conteudo = "Saturno é o sexto planeta a partir do Sol e o segundo maior do Sistema Solar,\n" + 
                            "depois de Júpiter. É um gigante gasoso com um raio médio de cerca de nove vezes\n" + 
                            "e meia o da Terra. Tem apenas um oitavo da densidade média da Terra."

            this.mostraVisao = ref(true)
            this.mostraEstrutura = ref(false)
            this.mostraGeologia = ref(false)
        },

        verEstrutura() {
            this.imgUrl = "saturno/saturno-estrutura-bg.png"
            this.className = "imgPlaneta"
            this.conteudo = "Apesar de consistir principalmente de hidrogênio e hélio, a maior parte da massa de Saturno não\n" + 
                            "está na fase gasosa, porque o hidrogênio se torna um líquido não ideal quando a densidade é superior\n" + 
                            "a 0,01 g/cm3, que é alcançada em um raio contendo 99,9% da massa de Saturno."

            this.mostraVisao = ref(false)
            this.mostraEstrutura = ref(true)
            this.mostraGeologia = ref(false)
        },

        verGeologia() {
            this.imgUrl = "saturno/saturno-super-bg.jpg"
            this.className = "imgPlanetaS"
            this.conteudo =  "A atmosfera externa de Saturno contém 96,3% de hidrogênio molecular e 3,25% de hélio em volume.\n" + 
                             "A característica mais famosa do planeta é seu proeminente sistema de anéis,\n" + 
                             "composto principalmente de partículas de gelo com uma quantidade menor de detritos rochosos e poeira."

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