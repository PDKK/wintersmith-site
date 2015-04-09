module.exports = function(grunt) {

    grunt.initConfig({
	wintersmith: {
            build: {},
            preview: {
		options: {
		    action: "preview"
		}
            }
	},
	bower: {
	    dev: {
		dest: "contents/vendor",
		js_dest: "contents/vendor/js",
		css_dest: "contents/vendor/css",
		fonts_dest: "contents/vendor/fonts",
		options: {
		    keepExpandedHierarchy: false
		}
	    }
	}

    });

    // Load NPM Task
    grunt.loadNpmTasks('grunt-wintersmith')
    grunt.loadNpmTasks('grunt-bower');;
    
};
