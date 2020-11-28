module.exports = {
	env: {
		es6: true,
	},
	extends: ['airbnb', 'prettier', 'prettier/react'],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
		__DEV__: 'readonly',
	},
	parser: 'babel-eslint',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	plugins: ['react', 'prettier', 'import'],
	rules: {
		'prettier/prettier': 'error',
		'react/jsx-filename-extension': [
			'warn',
			{
				extensions: ['.jsx', '.js'],
			},
		],
		'global-require': 'off',
		'import/prefer-default-export': 'off',
		'react/state-in-constructor': 'off',
		'react/static-property-placement': 'off',
		'react/jsx-props-no-spreading': 'off',
		'react/prop-types': 'off',
		'no-param-reassign': 'off',
		'no-console': 'off',
		'no-unused-expressions': ['error', { allowTaggedTemplates: true }],
		'no-nested-ternary': 'off',
		'import/no-extraneous-dependencies': [
			'error',
			{
				devDependencies: true,
				optionalDependencies: true,
				peerDependencies: true,
			},
		],
		'import/order': [
			'error',
			{
				groups: ['builtin', 'external', 'internal'],
				pathGroups: [
					{
						pattern: 'react',
						group: 'external',
						position: 'before',
					},
				],
				pathGroupsExcludedImportTypes: ['react'],
				'newlines-between': 'always',
				alphabetize: {
					order: 'asc',
					caseInsensitive: true,
				},
			},
		],
	},
};
