# HTML RUBY

Hoje aprendi mais sobre o elemento HTML `<ruby>`, que é usado para representar a anotação de ruby, que é uma forma de anotação de texto em scripts asiáticos, como chinês ou japonês, para mostrar a pronúncia de um caractere ou para fornecer uma anotação curta.

Eu já conhecia o elemento `<ruby>`, mas nunca prestei muita atenção nele. Aprendi que ele é usado em conjunto com os elementos `<rt>` e `<rp>`. O elemento `<rt>` é usado para fornecer a pronúncia do caractere, enquanto o elemento `<rp>` é usado para fornecer uma alternativa de exibição para navegadores que não suportam a anotação de ruby.

Você usa assim:

```html
<ruby> こんにちは！ <rt>Olá</rt> </ruby>
```

e a exibição fica assim:

<ruby>  
  こんにちは！ <rt>Olá</rt>
</ruby>
