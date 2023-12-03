module.exports = {
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	root: true,
	env: {
		node: true,
		es2022: true
	},
	rules: {
		'@typescript-eslint/indent': [
			'error',
			'tab'
		],
		"space-in-parens": ["error", "always"],
		'@typescript-eslint/no-unused-vars': 'warn',
		'@typescript-eslint/no-use-before-define': [
			'error',
			'nofunc'
		],
		'@typescript-eslint/no-var-requires': 'off',
		'@typescript-eslint/no-empty-function': 'off',
		'new-cap': 'off',
		'no-useless-constructor': 'off',
		'comma-dangle': 'off',
		'no-use-before-define': 'off',
		'@typescript-eslint/no-non-null-assertion': 'off'
	},
}
