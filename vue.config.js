// const { defineConfig } = require('@vue/cli-service')
module.exports = {
    // transpileDependencies: true,
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

// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   css: {
//     loaderOptions: {
//       scss: {
//         additionalData: `
//           @import '/src/scss/variaveis_cores.scss';
//           @import '/src/scss/style_Planetas.scss';
//           @import '/src/scss/style_Principal.scss';
//         `
//       }
//     }
//   }
// })