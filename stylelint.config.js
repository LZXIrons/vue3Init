module.exports = {
	root: true,
	defaultSeverity: 'error',
	plugins: ['stylelint-order'],
	extends: [
		'stylelint-config-standard',
		'stylelint-config-recess-order',
		'stylelint-config-prettier'
	],
	rules: {
		'declaration-colon-space-before': 'never',
		'declaration-colon-space-after': 'always-single-line',
		'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
		'selector-pseudo-class-no-unknown': [
			true,
			{
				ignorePseudoClasses: ['global', 'deep']
			}
		],
		'at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: [
					'include',
					'mixin',
					'layer',
					'apply',
					'variants',
					'responsive',
					'theme',
					'tailwind'
				]
			}
		],
		'declaration-block-trailing-semicolon': null,
		'no-descending-specificity': null,
		'rule-empty-line-before': ['never']
	},
	ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts']
}
