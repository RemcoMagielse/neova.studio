// Expressive Code options live here (not in astro.config.mjs) so a theme object can be used.
// Code blocks stay dark in both themes; backgrounds are tuned in src/styles/custom.css.
import { defineEcConfig, ExpressiveCodeTheme } from '@astrojs/starlight/expressive-code';
import warmCodeTheme from './src/code-theme.mjs';

export default defineEcConfig({
	themes: [new ExpressiveCodeTheme(warmCodeTheme)],
});
