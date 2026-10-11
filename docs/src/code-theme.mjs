// Warm syntax colours for code blocks in both themes (UX review of the docs template, 11-10-2026).
export default {
	name: 'neova-warm',
	type: 'dark',
	colors: {
		'editor.background': '#2e241e',
		'editor.foreground': '#f3ece4',
	},
	tokenColors: [
		{ scope: ['comment', 'punctuation.definition.comment'], settings: { foreground: '#a89c8d', fontStyle: 'italic' } },
		{ scope: ['string', 'string.quoted', 'markup.inline.raw'], settings: { foreground: '#e48c66' } },
		{ scope: ['constant.numeric', 'constant.language', 'constant.language.boolean'], settings: { foreground: '#e6b45a' } },
		{
			scope: [
				'support.type.property-name',
				'meta.object-literal.key',
				'entity.name.tag',
				'entity.other.attribute-name',
				'variable.other.property',
				'keyword',
				'storage',
			],
			settings: { foreground: '#9db36a' },
		},
		{ scope: ['punctuation', 'meta.brace', 'keyword.operator'], settings: { foreground: '#d9cfc4' } },
		{ scope: ['entity.name.function', 'support.function'], settings: { foreground: '#f3ece4' } },
	],
};
