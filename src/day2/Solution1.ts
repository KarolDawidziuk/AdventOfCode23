import { FileReader, getDir, parseNumber } from '../utils'

type Colors = 'red' | 'green' | 'blue';

const path = getDir( __filename );
const input = new FileReader( path, 'input.txt' );

let result = 0;
// The `g` flag ensures that `exec` will continue search after first match.
const pattern = /(\d+)\s+([a-z]+)/g;

// Very dirty solution, needs refactor.
input.content.split( /\n/ ).forEach( ( line, gameId ) => {
	let match;
	let validGame = true;

	while( ( match = pattern.exec( line ) ) !== null ) {
		const value = parseNumber( match[ 1 ] );
		const color = match[ 2 ] as Colors;
		
		if ( color === 'red' && value > 12 ) {
			validGame = false;	
		}
		
		if ( color === 'green' && value > 13 ) {
			validGame = false;	
		}
		
		if ( color === 'blue' && value > 14 ) {
			validGame = false;	
		}
	}

	if ( validGame ) {
		result += gameId + 1;
	}
	
} );

console.log( result );