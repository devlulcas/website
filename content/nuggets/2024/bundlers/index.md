# Bundlers

Em resumo um bundler é uma ferramenta que permite a você escrever código modular e depois empacotá-lo em um único arquivo para ser entregue ao navegador.

Isso é útil porque em projetos grandes você não tem um único `index.js` e fim, você tem dezenas de components, bibliotecas e etc.

O bundler vai pegar todos esses arquivos, resolver as dependências entre eles e gerar um único arquivo que você pode incluir no seu HTML. Pelo menos era assim que funcionava antigamente.

Os bundlers mais populares que a gente tem são o Webpack, Parcel e Rollup. O Webpack é usado pelo NextJS e Create React App, o Parcel é mais simples e o Rollup é mais performático e é usado pelo Vite em conjunco com o esbuild.

Configurando o seu bundler você também consegue fazer coisas como minificar o código, otimizar imagens, resolver imports de CSS e etc. Por isso que a gente pode importar um arquivo de imagem no NextJS e ele vai funcionar, o Webpack vai resolver isso pra gente.

Eu falei _"pelo menos era assim que funcionava antigamente"_ porque agora a gente não precisa mais colocar tudo em um só arquivo, a gente pode usar ESModules e manter o código modular mesmo sem um bundler.

Mesmo com ESModules a gente ainda precisa de um bundler para fazer coisas como minificar o código, resolver imports de coisas que não são suportadas pelo navegador (como CSS), fazer tree shaking, lazy loading e common chunk splitting.

- tree shaking = remover código que não é usado
- lazy loading = carregar o código só quando ele for necessário
- common chunk splitting = separar o código que é comum entre várias páginas em um arquivo separado para ter um cache melhor

Hoje em dia tree shaking é um dos pontos mais importantes, já que usamos muitas dependências e muitas vezes elas exportam mais do que a gente precisa.

Dá uma olhada no que tem na documentação do ESBUILD sobre tree shaking e code splitting para entender melhor com os gráficos deles sobre como tudo isso funciona:

[https://github.com/evanw/esbuild/blob/main/docs/architecture.md#tree-shaking](https://github.com/evanw/esbuild/blob/main/docs/architecture.md#tree-shaking)
[https://github.com/evanw/esbuild/blob/main/docs/architecture.md#code-splitting](https://github.com/evanw/esbuild/blob/main/docs/architecture.md#code-splitting)

Aqui você encontra um texto do Vite sobre usar bundlers hoje em dia:
[https://vitejs.dev/guide/why.html#why-bundle-for-production](https://vitejs.dev/guide/why.html#why-bundle-for-production)

E aqui um texto sobre bundlers no geral e prós e contras de cada:
[https://snipcart.com/blog/javascript-module-bundler](https://snipcart.com/blog/javascript-module-bundler)

![vite](./vite.png)
