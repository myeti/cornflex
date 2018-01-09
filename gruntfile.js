
/**
 * Tasks definition
 */

const tasks = {}

// sass to css compilation
tasks.sass = {
  dist: {
    options: { precision: 7 },
    src: 'src/cornflex.scss',
    dest: 'dist/cornflex.css'
  }
}

// css minification
tasks.cssmin = {
  dist: {
    src: ['dist/cornflex.css'],
    dest: 'dist/cornflex.min.css'
  }
}

// watch changes
tasks.watch = {
  sass: {
    files: ['src/**/*.scss'],
    tasks: ['sass:dist']
  }
}


/**
 * Grunt setup
 */
module.exports = (grunt) => {

  grunt.initConfig(tasks)

  grunt.loadNpmTasks('grunt-contrib-sass')
  grunt.loadNpmTasks('grunt-contrib-cssmin')
  grunt.loadNpmTasks('grunt-contrib-watch')

  grunt.registerTask('default', ['sass:dist'])
  grunt.registerTask('live', ['default', 'watch'])
  grunt.registerTask('build', ['sass:dist', 'cssmin:dist'])

}
