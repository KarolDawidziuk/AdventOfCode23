import { readFileSync } from "node:fs";

export default class FileReader {
	private _content: string;

	path: string;

	fileName: string;

	get content(): string {
		return this._content;
	}

	constructor( path: string, fileName: string ) {
		this.path = path;
		this.fileName = fileName;
		this._content = this.read();
	}

	private read(): string {
		const path = `${this.path}${this.fileName}`;

		return readFileSync( path, 'utf-8' );
	}

	toNumberArray(): Array<Array<number>> {
		// Naive implementation
		// Split the content by new line and return and array of numbers.
		// Example:
		// 12
		// 23
		//
		// 34

		// 45
		// It should return an 3 arrays:
		// [ [12,23], [34], [45] ]
		const arr: Array<Array<number>> = [ [] ];
		this._content.split( /\n/ ).forEach( item => {
			const number = parseInt( item );

			if ( isNaN( number ) ) {
				return arr.push( [] );
			}

			return arr[ arr.length -1 ].push( number );
		} );

		arr.pop();

		return arr;
	}

	toSeparateNumberArray(): Array<Array<number>> {
		// return this._content
		// 	.trim()
		// 	.split( '\n' )
		// 	.map( Number )
		// 	.map( number => [ number ] );

		const lines = this._content.split( '\n' );
		const nestedDigitsArray = lines.map( line => line.split( '' ).map( digitStr => parseInt( digitStr ) ) );

		return nestedDigitsArray;
	}

	toStringArray(): Array<Array<string>> {
		const arr: Array<Array<string>> = [ [] ];

		this._content.split( /\n/ ).forEach( item => {
			if ( item === '' ) {
				return arr.push( [] );
			}

			return arr[ arr.length -1 ].push( item );
		} );

		arr.pop();

		return arr;
	}


	toSeparateStringArray(): Array<Array<string>> {
		return this._content
			.trim()
			.split( '\n' )
			.map( number => [ number ] );
	}
}
