import gulp from 'gulp'
import sass from 'gulp-sass'
import plumber from 'gulp-plumber'
import autoprefixer from 'gulp-autoprefixer'
import gcmq from 'gulp-group-css-media-queries'
import cleanCSS from 'gulp-clean-css'
import rename from 'gulp-rename'
import gulpif from 'gulp-if'

import sassGlob from 'gulp-sass-glob'
import config from '../config'

const sassBuild = () =>
  gulp
    .src(`${config.src.sass}/main.scss`, { sourcemaps: config.isDev })
    .pipe(plumber())
    .pipe(sassGlob())
    .pipe(
      sass({
        includePaths: ['./node_modules'],
      }),
    )
    .pipe(gulpif(config.isProd, gcmq()))
    .pipe(gulpif(config.isProd, autoprefixer()))
    .pipe(gulpif(config.isProd, cleanCSS({ level: 2 })))
    .pipe(
      rename({
        suffix: '.min',
      }),
    )
    .pipe(gulp.dest(config.dest.css, { sourcemaps: config.isDev }))

export const stylesBuild = gulp.series(sassBuild)

export const stylesWatch = () => {
  gulp.watch(`${config.src.root}/**/*.scss`, sassBuild)
}
