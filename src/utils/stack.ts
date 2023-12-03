interface IStack<T> {
	push( item: T ): void;
	pop(): T | undefined;
	peek(): T | undefined;
	isEmpty(): boolean;
	size(): number;
	clear(): void;
}

export class Stack<T> implements IStack<T> {
	private items: Array<T>;

	constructor() {
		this.items = [];
	}

	push( item: T ): void {
		this.items.push( item );
	}

	// Removes and returns the first item from the stack.
	pop(): T | undefined {
		if ( this.items.length === 0 ) {
			throw new Error( 'Stack is empty' );
		}

		return this.items.pop();
	}

	// Returns last item from the stack without removing it.
	peek(): T | undefined{
		if ( this.items.length === 0 ) {
			throw new Error( 'Stack is empty' );
		}

		return this.items.at( -1 );
	}

	isEmpty(): boolean {
		return this.items.length === 0;
	}

	size(): number {
		return this.items.length;
	}

	clear(): void {
		this.items = [];
	}
}
