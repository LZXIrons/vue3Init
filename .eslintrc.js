module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: [
		'plugin:vue/vue3-essential',
		'eslint:recommended',
		'@vue/typescript/recommended',
		'prettier',
		'@vue/prettier',
		'@vue/prettier/@typescript-eslint',
		'./.eslintrc-auto-import.json'
	],
	plugins: ['prettier'],
	parserOptions: {
		ecmaVersion: 2020
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'prettier/prettier': 'error',
		'arrow-body-style': 'off',
		'prefer-arrow-callback': 'off',
		'vue/script-setup-uses-vars': 'error',
		'vue/multi-word-component-names': 'off',
		'@typescript-eslint/no-explicit-any': ['off'],
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-var-requires': 0,
		'react/jsx-no-undef': 'off',
		'@typescript-eslint/member-delimiter-style': [
			'error',
			{
				multiline: {
					delimiter: 'none', // 'none' or 'semi' or 'comma'
					requireLast: true
				},
				singleline: {
					delimiter: 'semi', // 'semi' or 'comma'
					requireLast: false
				}
			}
		]
	},
	overrides: [
		{
			files: [
				'**/__tests__/*.{j,t}s?(x)',
				'**/tests/unit/**/*.spec.{j,t}s?(x)'
			],
			env: {
				mocha: true
			}
		}
	],
	globals: {
		defineProps: 'readonly',
		defineEmits: 'readonly',
		defineComponent: 'readonly',
		defineExpose: 'readonly'
	}
}
