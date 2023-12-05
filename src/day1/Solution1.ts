import { FileReader, getDir, parseNumber } from '../utils'

const path = getDir( __filename );
const input = new FileReader( path, 'input.txt' )
let result = 0;

input.content.split( /\n/ ).forEach( ( line ) => {
	const numbers = line.match( /[0-9]/g );

	if ( !numbers || numbers === undefined ) {
		return;
	}

	const firstNumber = numbers.at( 0 );
	const lastNumber = numbers.at( -1 );

	if ( firstNumber && lastNumber ) {
		result += parseNumber( firstNumber + lastNumber );
	}
} );


console.log( result );
