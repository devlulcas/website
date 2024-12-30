# Skip to content

_"Skip to content"_ ou "Pular para o conteúdo" é um link que permite que usuários pulem diretamente para o conteúdo principal de uma página web. Essa é uma daquelas coisas que a maioria de nós nem percebe, mas fazem bastante diferença para quem precisa.

Para adicionar um desses no seu site você precisa de pouca coisa. Primeiro, adicione um link no topo da sua página com o texto "Skip to content" e um `id` que aponte para o conteúdo principal da página. Algo assim:

```html
<a href="#main-content" class="skip-to-content">Skip to content</a>

<main id="main-content">
	<!-- Conteúdo principal da página -->
</main>
```

Agora você precisa de um pouco de CSS para esconder o link até que ele seja focado. Isso é importante para não poluir a sua interface, lembre se de não usar `display: none` ou `visibility: hidden` para isso, pois essas propriedades vão fazer com que o link não seja acessível para leitores de tela.

```css
.skip-to-content {
	position: absolute;
	top: -40px;
	left: 0;
	padding: 10px;
	z-index: 1000;
}

.skip-to-content:focus {
	top: 0;
}
```

E pronto! Agora você tem um link "Skip to content" no seu site. Quando o usuário focar nele (usando a tecla `Tab`), ele vai pular direto para o conteúdo principal da página.

![Exemplo de um link 'Skip to content' em um site](./skip-to-content.png)
