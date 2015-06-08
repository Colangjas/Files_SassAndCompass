module.exports = funtion(grunt) {
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.initConfig({
		uglify: {
			my_target: {
				files: {
					'_/js/script.js': ['_/components/js/scipt.js']
				}	// files
			}	// my_target
		}	// uglify
	})	// initConfig
} // exports