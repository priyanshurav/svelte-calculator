<script lang="ts">
	import { IHistory, Key } from '../types';

	export let history: IHistory;

	let historyStr = '';

	function historyToString() {
		const num = history.num ?? '';

		let operation = '';

		if (history.operation === Key.ADD) operation = '+';
		else if (history.operation === Key.SUBTRACT) operation = '-';
		else if (history.operation === Key.MULTIPLY) operation = '×';
		else if (history.operation === Key.DIVIDE) operation = '/';

		historyStr = `${num}${operation}`;
	}

	$: {
		historyToString();
		history;
	}
</script>

<section class="history">{historyStr}</section>

<style>
	.history {
		--height: 20px;
		padding: 5px 10px 10px 0;
		font-size: var(--height);
		height: var(--height);
		display: flex;
		justify-content: flex-end;
	}
</style>
