<script lang="ts">
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<h2>Home</h2>

{#if data.user}
	<p>Welcome, {data.user.name}!</p>
{:else}
	<p>Not logged in</p>
{/if}
