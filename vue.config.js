module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: ` 
                    @import "@/scss/variaveis_cores.scss";
                    @import "@/scss/style_Planetas.scss";
                    @import "@/scss/style_Principal.scss";
                    `
            }
            // scss: {
            //     additionalData: ` 
            //     @import "@/scss/variaveis_cores.scss";
            //     @import "~@/scss/style_Planetas.scss";
            //     @import "~@/scss/style_Principal.scss";
            //     `
            //     prependData: ` 
            //     @import "~@/scss/variaveis_cores.scss";
            //     @import "@/scss/style_Planetas.scss";
            //     @import "@/scss/style_Principal.scss";
            //     `
            // }
        }
    }
}