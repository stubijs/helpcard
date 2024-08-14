import { createDirectus, rest, readItem } from '@directus/sdk';

const directus = createDirectus('https://cms.jstubenrauch.de').with(rest());

export default defineNuxtPlugin(() => {
	return {
		provide: { directus, readItem },
	};
});