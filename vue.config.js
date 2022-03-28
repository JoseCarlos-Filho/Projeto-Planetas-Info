module.exports = {
    css: {
        loaderOptions: {
            scss: {
                additionalData: ` 
                @import "/src/scss/variaveis_cores.scss";
                @import "~@/scss/style_Planetas.scss";
                @import "~@/scss/style_Principal.scss";
                `
                // prependData: ` 
                // @import "scss/variaveis_cores.scss";
                // @import "@/scss/style_Planetas.scss";
                // @import "@/scss/style_Principal.scss";
                // `
            }
        }
    }
}