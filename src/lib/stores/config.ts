import { persisted } from 'svelte-local-storage-store';

import type { Style } from '$lib/stores/styles';
import type { Theme } from '$lib/stores/theme';

type Config = {
	style: Style['name'];
	theme: Theme['name'];
	radius: number;
};

export const config = persisted<Config>('config', {
	style: 'default',
	theme: 'zinc',
	radius: 0.5
});
