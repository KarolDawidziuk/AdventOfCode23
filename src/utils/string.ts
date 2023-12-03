type SplitOptions = {
	pattern: string | RegExp;
	cleanupPattern?: string;
	toNumber?: boolean;
}
export function splitString( str: string , options: SplitOptions ): Array<string | number> {
	let splittedString: Array<string | number> = str.split( options?.pattern )

	if ( options.cleanupPattern !== undefined ) {
		splittedString = splittedString.filter( item => item !== options.cleanupPattern );
	}

	if ( options.toNumber === true ) {
		splittedString = splittedString.map( string => parseInt( string as string, 10 ) );
	}

	return splittedString;
}

export function divideString( str: string ): string {
	const middle = Math.floor( str.length / 2 );
	const left = str
		.split( '' )
		.slice( 0, middle )
		.join( '' );

	const right = str
		.split( '' )
		.slice( middle )
		.join( '' );

	return `${ left } ${ right }`;
}

export function findCommonCharacters( str1: string, str2: string ): Set<string> {
	const shared = new Set<string>();

	for ( const char of str1 ) {
		if ( str2.includes( char ) ) {
			shared.add( char );
		}
	}

	return shared;
}

export function hasUniqueCharacters( str: string ): boolean {
	const characters = new Set<string>();

	for ( const char of str ) {
		characters.add( char );
	}

	return characters.size === str.length;
}
