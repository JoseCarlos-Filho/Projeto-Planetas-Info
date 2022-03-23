<template>
    <div class="infoPlaneta">
        
        <div class="planetaTerra">
            <div class="imagemTerra">
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
                que a vida evoluísse e prosperasse.
                </p>
                <a href="https://pt.wikipedia.org/wiki/Terra#:~:text=A%20Terra%20%C3%A9%20o%20terceiro,como%20Mundo%20ou%20Planeta%20Azul.">Wikipedia</a>
            </div>

            <div class="botoesDescricao">
                <ul>
                    <li><button type="button" value="">Visão Geral</button></li>
                    <li><button type="button" value="">Estrutura Interna</button></li>
                    <li><button type="button" value="">Geologia da Superfície</button></li>
                </ul>
            </div>
        </div>
    </div>

</template>

<script>

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

    .botoesDescricao {
        display: flex;
        align-items: center;
        flex-direction: column;

        
    }

    .botoesDescricao li {
        list-style: none;
        margin: 0px 10px;
    }

    .descricao a {
        text-decoration: none;
        color: gray;
        border-bottom: 1px solid gray;
        cursor: pointer;

    }

    button {
        margin: 10px;
        padding: 5px 40px;  
        cursor: pointer;      
    }
</style>