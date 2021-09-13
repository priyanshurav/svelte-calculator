<script lang="ts">
	import { KeyType, Key, IKeyboardKey } from '../types';

	import Button from './Button.svelte';

	export let onButtonClick: (type: Key, keyType: KeyType) => void;

	const KEYBOARD: IKeyboardKey[] = [
		{
			key: Key.ALL_CLEAR,
			text: 'AC',
			type: KeyType.SPECIAL,
		},
		{
			key: Key.CLEAR,
			text: 'C',
			type: KeyType.SPECIAL,
		},
		{
			key: Key.PLUS_MINUS,
			text: '±',
			type: KeyType.SPECIAL,
		},
		{
			key: Key.ADD,
			text: '+',
			type: KeyType.OPERATION,
		},
		{
			key: Key.NUM_7,
			text: '7',
			type: KeyType.NUMBER,
		},
		{
			key: Key.NUM_8,
			text: '8',
			type: KeyType.NUMBER,
		},
		{
			key: Key.NUM_9,
			text: '9',
			type: KeyType.NUMBER,
		},
		{
			key: Key.SUBTRACT,
			text: '-',
			type: KeyType.OPERATION,
		},
		{
			key: Key.NUM_4,
			text: '4',
			type: KeyType.NUMBER,
		},
		{
			key: Key.NUM_5,
			text: '5',
			type: KeyType.NUMBER,
		},
		{
			key: Key.NUM_6,
			text: '6',
			type: KeyType.NUMBER,
		},
		{
			key: Key.MULTIPLY,
			text: '×',
			type: KeyType.OPERATION,
		},
		{
			key: Key.NUM_1,
			text: '1',
			type: KeyType.NUMBER,
		},
		{
			key: Key.NUM_2,
			text: '2',
			type: KeyType.NUMBER,
		},
		{
			key: Key.NUM_3,
			text: '3',
			type: KeyType.NUMBER,
		},
		{
			key: Key.DIVIDE,
			text: '/',
			type: KeyType.OPERATION,
		},
		{
			key: Key.SQUARE,
			text: 'x²',
			type: KeyType.SPECIAL,
		},
		{
			key: Key.NUM_0,
			text: '0',
			type: KeyType.NUMBER,
		},
		{
			key: Key.DOT,
			text: '.',
			type: KeyType.SPECIAL,
		},
		{
			key: Key.EQUALS,
			text: '=',
			type: KeyType.SPECIAL,
		},
	];
</script>

<section class="keyboard">
	{#each KEYBOARD as key}
		<Button key={key.key} text={key.text} {onButtonClick} keyType={key.type} />
	{/each}
</section>

<style>
	.keyboard {
		display: grid;
		grid-template-rows: repeat(5, 1fr);
		grid-template-columns: repeat(4, 1fr);
		flex-grow: 1;
	}
</style>
