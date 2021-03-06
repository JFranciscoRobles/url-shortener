module.exports = {
	"env": {
		"browser": true,
		"es2021": true,
		"node": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:@next/next/recommended"
	],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"plugins": [
		"react",
		"@typescript-eslint"
	],
	"rules": {
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"always"
		],
		"no-multiple-empty-lines":["error", { "max": 1, "maxEOF": 1 }],
		"react/jsx-sort-props": [
			2,
			{
				"callbacksLast": true,
				"shorthandFirst": false,
				"shorthandLast": true,
				"ignoreCase": true,
				"noSortAlphabetically": false
			}
		]},
	"settings": {
		"react": {
			"version": "detect"
		}
	}
};
