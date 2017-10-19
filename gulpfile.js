const gulp = require('gulp')
const sass = require('gulp-sass')
const plumber = require('gulp-plumber')
const concat = require('gulp-concat')
const autoprefixer = require('gulp-autoprefixer')
const sourcemaps = require('gulp-sourcemaps')

gulp.task('styles', function(){
	gulp.src('src/**/*.scss')
	.pipe(plumber())
	.pipe(sass({
		outputStyle: 'compressed'
	}))
	.pipe(concat('styles.css'))
	.pipe(autoprefixer())
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest('src'))
})

gulp.task('default', ['styles'], () => {
	gulp.watch('src/**/*.scss', ['styles'])
})
