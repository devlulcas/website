<script lang="ts">
	const isWindow = typeof window !== 'undefined';

	const isDarkMode = isWindow && window.matchMedia('(prefers-color-scheme: dark)').matches;

	const isDarkModeEnabled = isWindow && localStorage.getItem('dark-mode') === 'true';

	let isDarkModeActive = isDarkModeEnabled || isDarkMode;

	const toggleDarkMode = () => {
		if (isWindow) {
			localStorage.setItem('dark-mode', !isDarkModeActive ? 'true' : 'false');
		}
	};

	$: if (isWindow) {
		if (isDarkModeActive) {
			document.body.classList.remove('light');
			document.body.classList.add('dark');
		} else {
			document.body.classList.remove('dark');
			document.body.classList.add('light');
		}
	}
</script>

<div>
	<label for="theme-switcher">{isDarkModeActive ? 'Dark' : 'Light'}</label>
	<input
		type="checkbox"
		name="theme-switcher"
		id="theme-switcher"
		on:change={toggleDarkMode}
		bind:checked={isDarkModeActive}
	/>
</div>
