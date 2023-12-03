export function sum( array: Array<number> ): number {
	return array.reduce( ( current, next ) => current + next );
}

export function findMax( array: Array<number>, flatteringLevel = 1 ): number {
	return Math.max( ...array.flat( flatteringLevel ) );
}

export function findLongest( array: Array<Array<number | string>> ): number {
	return array.reduce( ( max, arr ) => {
		return Math.max( max, arr.length )
	}, 0 );
}

type SortDirection = 'asc' | 'desc';

export function sort( array: Array<number>, direction: SortDirection ): Array<number> {
	if ( direction === 'desc' ) {
		return array.sort( ( a, b ) => b - a );
	}

	// Ascending sorting is a default one.
	return array.sort( ( a, b ) => a - b );
}

export function parseInteger( item: Array<string> ): Array<number> {
	return item.map( string => parseInt( string, 10 ) );
}
