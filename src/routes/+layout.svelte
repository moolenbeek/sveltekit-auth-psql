<script lang="ts">
	import "@picocss/pico";
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
				<li><a href="/">Home</a></li>
				<li><a href="/about">About</a></li>
			</form>
		</ul>
	</nav>
	<slot />
</div>
