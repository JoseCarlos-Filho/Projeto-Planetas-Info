<template>
    <div class="infoTerra">
                <h1>{{ titulo }}</h1>
                <!-- O atributo "mostra###" é verdadeiro quando selecionado no botão "btn" correspondente.-->
                <p>
                    {{ content }}
                    <br><a target=_blank :href="wikipedia">Wikipedia</a>
                </p>

            </div>
</template>

<script>
import {defineComponent} from 'vue'
export default defineComponent({
    name: 'conteudoPlaneta',
    props: {

       titulo: {
           type: String,
       },

       content: {
           type: String,
       },

       wikipedia: {
           type: String,
       },
    }
})


</script>

