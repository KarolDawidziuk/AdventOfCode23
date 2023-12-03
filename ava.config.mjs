export default {
	workerThreads: false,
	environmentVariables: {
		TS_NODE_BASEURL: './dist/',
	},
	files: [ './src/**/tests/**/*.ts' ],
	typescript: {
		compile: false,
		rewritePaths: {
			'src/': 'dist/'
		}
	}
};
