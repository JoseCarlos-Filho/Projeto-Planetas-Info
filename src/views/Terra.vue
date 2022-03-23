<template>
    <div class="infoPlaneta">
        
        <div class="planetaTerra">
            <div>
                <img class="terra" src="../assets/Terra-bg.png">
            </div>   
        </div>

        <div class="descricao">
            <div class="infoTerra">
                <h1>Terra</h1>
                <p>
                Terceiro planeta a partir do Sol e o único planeta conhecido a abrigar vida. 
                Cerca de 29,2% da superfície da Terra é terra, com os restantes 70,8% cobertos por água. 
                A distância da Terra ao Sol, as propriedades físicas e a história geológica permitiram 
                que a vida evoluísse e prosperasse. <br><br><a href="https://pt.wikipedia.org/wiki/Terra#:~:text=A%20Terra%20%C3%A9%20o%20terceiro,como%20Mundo%20ou%20Planeta%20Azul.">Wikipedia</a>
                </p>
            </div>

            <div class="botoesDescricao">
                    <button type="button" value="">Visão Geral</button>
                    <button type="button" value="">Estrutura Interna</button>
                    <button type="button" value="">Geologia da Superfície</button>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    data(){
        return {
            mostraVisao: true,
            mostraEstrutura: false,
            mostraGeologia: false,
        };
    },
    methods: {
        
        verVisão() {
            this.mostraVisao = true;
            this.mostraEstrutura = false;
            this.mostraGeologia = false;
        },

        verEstrutura() {
            this.mostraVisao = false;
            this.mostraEstrutura = true;
            this.mostraGeologia = false;
        },

        verGeologia() {
            this.mostraVisao = false;
            this.mostraEstrutura = false;
            this.mostraGeologia = true;
        },

    },
}
</script>

<style lang="scss">
    .infoPlaneta {
        display: flex;
        justify-content: center;
        align-items: center;

    }
    
    .planetaTerra {
        margin-top: 8em;
    }
    
    .terra{
        height: 350px;
        width: 400px;
    }

    .descricao {
        height:400px;
        width: 400px;
    }

    .descricao h1, p {
        text-align: left;
    }

    .descricao .botoesDescricao {
        text-align: left;

    }

    .botoesDescricao {
        display: flex;
        flex-direction: column;
        
    }


    .descricao a {
        text-decoration: none;
        color: black;
        font-weight: 700;
        border-bottom: 1px solid black;
        cursor: pointer;

    }

    button {
        display: flex;
        margin: 10px 0px;
        padding: 10px 20px;
        align-items: center;
        border: 1px solid #777;
        cursor: pointer;
        text-align: center;

        // margin: 10px;
        // padding: 5px 40px;  
        // cursor: pointer;      
    }
</style>