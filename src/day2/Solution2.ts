import { FileReader, getDir, parseNumber } from '../utils'

const path = getDir( __filename );
const input = new FileReader( path, 'input.txt' );

let result = 0;
// The `g` flag ensures that `exec` will continue search after first match.
const pattern = /(\d+)\s+([a-z]+)/g;

type Colors = 'red' | 'green' | 'blue';

input.content.split( /\n/ ).forEach( line => {
	const resultArray: Array<Array<number>> = [ [] ];
	let match;

	line.split( ';' ).forEach( ( subLine, gameNumber ) => {
		resultArray.push( [] );
		let [ red, green, blue ] = [ 0, 0, 0 ];
		while( ( match = pattern.exec( subLine ) ) !== null ) {
			const value = parseNumber( match[ 1 ] );
			const color = match[ 2 ] as Colors;
			
			if ( color === 'red' && value > red  ) {
				red = value;
			}
	
			if ( color === 'green' && value > green ) {
				green = value;
			}
	
			if ( color === 'blue' && value > blue  ) {
				blue = value;
			}
		}

		resultArray[ gameNumber ].push( red, green, blue );
	} );

	result += findFewestCubesCount( resultArray );
	
} );

console.log( result );

function findFewestCubesCount( data: Array<Array<number>> ): number {
	const arr = [ 0, 0, 0 ];
	console.log( data );
	
	for ( let i = 0; i < data.length - 1; i ++ ) {
		for ( let j = 0; j < 3 ; j++ ) {
			if ( data[ i ][ j ] > arr[ j ] ) {
				arr[ j ] = data[ i ][ j ]
			}
		}
	}
	
	return arr[ 0 ] * arr[ 1 ] * arr[ 2 ];
}