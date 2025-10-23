/**
 * Configuração do Vite - DevKit Projeto Integrador
 *
 * ATENÇÃO: Este arquivo NÃO precisa ser modificado pelos estudantes.
 * Contém as configurações básicas para desenvolvimento com Bootstrap + Sass.
 *
 * Funcionalidades configuradas:
 * - Pasta raiz: src/
 * - Porta do servidor: 8080
 * - Build otimizado para produção
 * - Supressão de avisos deprecation do Sass
 */

import {resolve} from "path";

export default {
  root: resolve(__dirname, "src"),
  build: {
    outDir: "../dist",
  },
  server: {
    port: 8080,
  },
  // Optional: Silence Sass deprecation warnings. See note below.
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: [
          "import",
          "mixed-decls",
          "color-functions",
          "global-builtin",
        ],
      },
    },
  },
};
