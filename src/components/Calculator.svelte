<script lang="ts">
	import Current from './Current.svelte';
	import History from './History.svelte';
	import Keyboard from './Keyboard.svelte';
	import { IHistory, Operation, Key, KeyType } from '../types';

	let history: IHistory = { num: null, operation: null };
	let current: string = '';

	function setHistory(num: number, operation: Operation) {
		history = { num, operation };
	}
	function setCurrent(newCurrent: string) {
		current = newCurrent;
	}

	function getCurrentNum(): number {
		return parseFloat(current);
	}

	function clearHistory() {
		setHistory(null, null);
	}

	function isCurrentEmpty() {
		return current === '';
	}

	function calculateResult(
		num1: number,
		operation: Operation,
		num2: number
	): number {
		if (operation === Key.ADD) return num1 + num2;
		else if (operation === Key.SUBTRACT) return num1 - num2;
		else if (operation === Key.MULTIPLY) return num1 * num2;
		else if (operation === Key.DIVIDE) return num1 / num2;
	}

	function handleButtonClick(key: Key, keyType: KeyType) {
		if (keyType === KeyType.NUMBER && current.length < 15)
			setCurrent(`${current ?? ''}${key}`);
		else if (keyType === KeyType.OPERATION) {
			if (isCurrentEmpty()) return;
			setHistory(getCurrentNum(), key as Operation);
			setCurrent('');
		}

		if (key === Key.ALL_CLEAR) {
			clearHistory();
			return setCurrent('');
		}

		if (isCurrentEmpty()) return;

		if (key === Key.CLEAR) {
			const currentStr = current.toString();
			const newCurrent = currentStr.substring(0, currentStr.length - 1);
			return setCurrent(newCurrent || '');
		} else if (key === Key.EQUALS && history.num && history.operation) {
			const res = calculateResult(
				history.num,
				history.operation,
				getCurrentNum()
			);
			clearHistory();
			setCurrent(res.toString());
		} else if (key === Key.PLUS_MINUS && getCurrentNum() > 0) {
			setCurrent((getCurrentNum() * -1).toString());
		} else if (key === Key.SQUARE) {
			clearHistory();
			setCurrent((getCurrentNum() * getCurrentNum()).toString());
		} else if (key === Key.DOT) {
			setCurrent(`${current}.`);
		}
		console.log(Key[key], KeyType[keyType]);
	}
</script>

<section class="calculator">
	<History {history} />
	<Current {current} />
	<Keyboard onButtonClick={handleButtonClick} />
</section>

<style>
	.calculator {
		width: 360px;
		height: 500px;
		background-color: rgba(255, 255, 255, 0.75);
		display: flex;
		flex-direction: column;
	}
</style>
