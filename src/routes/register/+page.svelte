<script lang="ts">
	let showPassword = false;

	function togglePasswordVisibility() {
		showPassword = !showPassword;
	}
</script>

<form method="POST">
	<h2>Register</h2>
	<label for="name">Name</label>
	<input type="text" id="name" name="name" required />

	<label for="email">Email</label>
	<input type="email" id="email" name="email" required />

	<label for="password">Password</label>
	<input type={showPassword ? "text" : "password"} id="password" name="password" required />

	<label>
		<input type="checkbox" on:change={togglePasswordVisibility} />
		Show password
	</label>

	<button type="submit">Register</button>
</form>
<p>Already Registered? <a href="/login">Login</a></p>
