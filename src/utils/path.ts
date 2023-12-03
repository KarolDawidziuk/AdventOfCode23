export function getDir( path: string ): string {
	// Regex for remove everything after the last slash.
	const regex = /\/[^/]*$/;
	return path.replace( regex, '/' );

}
