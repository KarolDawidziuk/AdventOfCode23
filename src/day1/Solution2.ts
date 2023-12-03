import { FileReader, getDir, parseNumber } from '../utils'

const path = getDir( __filename );
const input = new FileReader( path, 'input.txt' );
const NUMBERS = new Map( [
	[ 'one', '1' ],
	[ 'two', '2' ],
	[ 'three', '3' ],
	[ 'four', '4' ],
	[ 'five', '5' ],
	[ 'six', '6' ],
	[ 'seven', '7' ],
	[ 'eight', '8' ],
	[ 'nine', '9' ],
] );
const stringNumberRepresentation = Array.from( NUMBERS.keys() ).join( '|' );
let result = 0;

input.content.split( /\n/ ).forEach( line => {
	// Use lookahead to match cases like `twone`, `sevenine` etc. 
	const regex = new RegExp( `(?=([0-9]|${stringNumberRepresentation}))`, 'g' );
	const numbers = [...line.matchAll( regex )];

	if ( !numbers || numbers === undefined ) {
		return;
	}
	

	let firstNumber = numbers.at( 0 )![1];
	let lastNumber = numbers.at( -1 )![1];

	
	if ( firstNumber && lastNumber ) {
		if ( NUMBERS.has( firstNumber ) ) {
			firstNumber = NUMBERS.get( firstNumber )!
		}
		if ( NUMBERS.has( lastNumber ) ) {
			lastNumber = NUMBERS.get( lastNumber )!
		}
		
		console.log( firstNumber, lastNumber );

		result += parseNumber( firstNumber + lastNumber );
	}
} );

console.log( result );
