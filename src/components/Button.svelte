<script lang="ts">
	import type { Key, KeyType } from '../types';

	export let key: Key;
	export let keyType: KeyType;
	export let text: string = '';
	export let onButtonClick: (key: Key, keyType: KeyType) => void;
</script>

<button on:click={() => onButtonClick(key, keyType)}>{text}</button>

<style>
	button {
		margin: 0;
		padding: 0;
		cursor: pointer;
		background-color: rgba(255, 255, 255, 0.3);
		border: none;
		transition: background-color 200ms;
		font-size: 1.25rem;
	}
	button:hover,
	button:focus {
		background-color: rgba(255, 255, 255, 0.7);
	}
</style>
