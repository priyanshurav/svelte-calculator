<script lang="ts">
	export let current: string;
	let scale = 1;

	$: {
		if (current.length > 16) {
			scale = 0.5;
		} else if (current.length > 11) {
			scale = 0.7;
		} else {
			scale = 1;
		}
	}
</script>

<section class="current" style="--scale: {scale}">{current}</section>

<style>
	.current {
		padding: 0 15px 10px 0;
		font-size: 3.43rem;
		height: 55px;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		transition: transform 200ms;
		transform: scale(var(--scale));
		transform-origin: right;
	}
</style>
