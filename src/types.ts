export enum Key {
	NUM_0,
	NUM_1,
	NUM_2,
	NUM_3,
	NUM_4,
	NUM_5,
	NUM_6,
	NUM_7,
	NUM_8,
	NUM_9,
	ADD,
	SUBTRACT,
	DIVIDE,
	MULTIPLY,
	EQUALS,
	CLEAR,
	ALL_CLEAR,
	PLUS_MINUS,
	SQUARE,
	DOT,
}

export enum KeyType {
	NUMBER,
	OPERATION,
	SPECIAL,
}

export interface IKeyboardKey {
	key: Key;
	text: string;
	type: KeyType;
}

export type Operation = Key.ADD | Key.SUBTRACT | Key.DIVIDE | Key.MULTIPLY;

export interface IHistory {
	num?: number;
	operation?: Operation;
}
