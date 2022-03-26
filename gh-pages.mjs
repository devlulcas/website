import { publish } from 'gh-pages';

publish(
	'build',
	{
		branch: 'gh-pages',
		repo: 'https://github.com/devlulcas/devlulcas.github.io',
		user: {
			name: 'Lucas Alves Rego',
			email: 'lucasalvesrego.contato@gmail.com'
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy finalizado - Verifique o resultado em https://devlulcas.github.io');
	}
);
