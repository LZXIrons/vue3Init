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
				ignorePseudoClasses: ['global']
			}
		],
		'at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: ['include', 'mixin']
			}
		],
		'rule-empty-line-before': ['never']
	},
	ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts']
}
