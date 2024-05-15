<script lang="ts">
	import "../app.css";
	import { ModeWatcher } from "mode-watcher";
	import { page } from "$app/stores";
	import Metadata from "$lib/components/metadata.svelte";
	import { updateTheme } from "$lib/utils.js";
	import { config } from "$lib/stores/config";

	$: updateTheme($config.theme, $page.url.pathname);
</script>

<!-- <ModeWatcher /> -->
<Metadata />

<div class="relative flex min-h-screen flex-col bg-background" id="page" data-vaul-drawer-wrapper>
	<slot />
</div>
