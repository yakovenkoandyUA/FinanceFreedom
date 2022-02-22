import gulp from 'gulp';
import config from '../config';

const fontsBuild = () => (
  gulp.src(`${config.src.fonts}/**/*`)
    .pipe(gulp.dest(config.dest.fonts))
);
const staticBuild = () => gulp.src(config.src.static).pipe(gulp.dest(config.dest.static))

export const assetsBuild = gulp.parallel(fontsBuild, staticBuild)

export const assetsWatch = () => {
  gulp.watch(`${config.src.fonts}/**/*`, fontsBuild);
};
