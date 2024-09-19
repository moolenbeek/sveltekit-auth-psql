<script lang="ts">
	let showPassword = false;

	function togglePasswordVisibility() {
		showPassword = !showPassword;
	}
</script>

<form method="POST">
	<h2>Login</h2>
	<label for="email">Email</label>
	<input type="email" id="email" name="email" required />

	<label for="password">Password</label>
	<input type={showPassword ? "text" : "password"} id="password" name="password" required />

	<label>
		<input type="checkbox" on:change={togglePasswordVisibility} />
		Show password
	</label>

	<button type="submit">Login</button>
</form>
<p>Not registered? <a href="/register">Register</a></p>
