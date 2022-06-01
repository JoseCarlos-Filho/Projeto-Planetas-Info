module.exports = {
    css: {
        loaderOptions: {
            scss: {
                    // prependData:
                    prependData: `  
                        @import "@/scss/variaveis_cores.scss";
                        @import "@/scss/style_Planetas.scss";
                        @import "@/scss/style_Principal.scss";
                        `
            },
        }
    }
};

