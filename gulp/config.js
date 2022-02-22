const srcPath = 'src';
const destPath = 'build';

const config = {
  src: {
    root: srcPath,
    sass: `${srcPath}/assets/scss`,
    js: `${srcPath}/js`,
    allJS: `${srcPath}/js/**/*.js`,
    fonts: `${srcPath}/assets/fonts`,
    images: `${srcPath}/assets/img`,
    static: `${srcPath}/static/*.*`,
    // iconsMulti: `${srcPath}/assets/icons/multi`,
    html: `${srcPath}/`,
  },
  
  dest: {
    root: destPath,
    html: destPath,
    css: `${destPath}/css`,
    js: `${destPath}/js`,
    fonts: `${destPath}/fonts`,
    images: `${destPath}/img`,
    static: `${destPath}/static/`,
  },

  setEnv() {
    this.isProd = process.argv.includes('--prod');
    this.isDev = !this.isProd;
  },
};

export default config;
