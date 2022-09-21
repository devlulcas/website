<!-- TYPESCRIPT -->
<script lang="ts"></script>

<!-- HTML -->
<ol>
	<li>2017 - IFBA</li>
	<li>2022 - Dantas Eletro</li>
</ol>

<!-- STYLES - SCSS -->
<style lang="scss">
	ol {
		width: fit-content;
		list-style: none;
		display: flex;
		gap: 2rem;
		position: relative;

		&::after {
			content: '';
			position: absolute;
			width: 100%;
			height: 0.5rem;
			background: black;
			border-radius: 0.5rem;
			bottom: 0;
		}
	}

	li {
		display: flex;
		height: 5rem;
		align-items: center;
		justify-content: center;
		font-size: 1.4rem;
		font-weight: 600;

		&::before {
			content: '';
			width: 0.5rem;
			height: 100%;
			background: black;
			margin-right: 1rem;
			border-radius: 0.5rem;
		}
	}
</style>
