<script lang="ts">
	import "../app.css";
	import { ModeWatcher } from "mode-watcher";
	import { page } from "$app/stores";
	import Metadata from "$lib/components/metadata.svelte";
	import { updateTheme } from "$lib/utils.js";
	import { config } from "$lib/stores/config";
	import { Toaster } from "$lib/components/ui/sonner";

	$: updateTheme($config.theme, $page.url.pathname);
</script>

<Toaster />
<ModeWatcher />
<!-- <Metadata /> -->

<div class="relative flex min-h-screen flex-col bg-background" id="page" data-vaul-drawer-wrapper>
	<slot />
</div>
