import gulp from 'gulp'
import clean from 'gulp-clean'
import config from '../config'

const cleanBuild = () => gulp.src(config.dest.root, { allowEmpty: true }).pipe(clean())

export default cleanBuild
