<template>
<div class="planetaTerra">
            <div>
                <img :class=clName :src="require(`../assets/${srcPlaneta}`)">
                 
            </div> 
 </div>

</template>

<script>
import {defineComponent} from 'vue'
 export default defineComponent({
     name: 'informacaoPlaneta',
     props: {

         srcPlaneta: {
             type: String,
         },

        clName: {
            type: String,
        },

        textP: {
            type: String,
        }


     }
 })

</script>

<style>

</style>