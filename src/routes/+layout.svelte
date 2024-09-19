<script lang="ts">
	import "@picocss/pico";
	import type { PageData } from "./$types";
	export let data: PageData;
</script>

<div class="container">
	<nav>
		<ul>
			<li>
				<a href="/"> Website </a>
			</li>
		</ul>
		<ul>
			<form method="POST">
				{#if !data.user}
					<li><a href="/login">Login</a></li>
					<li><a href="/register">Register</a></li>
				{:else}
					<li><a href="/">{data.user.name}</a></li>
					<li>
						<button formaction="/logout" class="outline" type="submit">Logout</button>
					</li>
				{/if}
			</form>
		</ul>
	</nav>
	<slot />
</div>
