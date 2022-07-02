import gulp from 'gulp'; //gulp本体
import del from 'del'; //ディレクトリ削除
import rename from 'gulp-rename'; //名前変換
import browserSync from 'browser-sync'; //ファイルの変更を監視して、変更を即座にブラウザーに反映させる
import flatten from "gulp-flatten";

// Views
import twig from 'gulp-twig';

//images
import imagemin from 'gulp-imagemin';
import mozjpeg from 'imagemin-mozjpeg';
import pngquant from 'imagemin-pngquant';
import changed from 'gulp-changed';

const syncBrowser = () => browserSync.stream();

const clean = () => del(['dest/']);
const rootDir = './dest';

const paths = {
  views: {
    src: [
      'src/views/pages/**/*.twig',
    ],
    dest: `./dest`,
  },
  images: {
    src: ['./src/images/**/*'],
    dest: './dest/assets/images',
  },
};



const views = () => {
  return gulp
    .src(paths.views.src)
    .pipe(twig({ base: "./src/views/" }))
    .pipe(flatten({ includeParents: [1, 2] }))
    .pipe(
      rename(function (path) {
        path.dirname = path.dirname.replace('Index', '').replace('Top', '');
      })
    )
    .pipe(gulp.dest(paths.views.dest));
};

const images = () => {
  return gulp
    .src(paths.images.src)
    .pipe(changed(paths.images.dest))
    .pipe(
      imagemin([
        pngquant({
          quality: [0.6, 0.7], // 画質
          speed: 1, // スピード
        }),
        mozjpeg({ quality: 70 }), // 画質
        imagemin.svgo(),
        imagemin.optipng(),
        imagemin.gifsicle({ optimizationLevel: 3 }), // 圧縮率
      ])
    )
    .pipe(gulp.dest(paths.images.dest));
};

//参考
//https://www.i-ryo.com/entry/2020/04/08/074158
const server = () => {
  return browserSync.init({
    //リロードするhtmlファイルを設定
    server: {
      baseDir: rootDir,
    },
  });
};

const watch = () => {
  gulp.watch(paths.images.src, images);
  gulp.watch(paths.views.src, views);
  gulp.watch([...paths.views.src], (done) => {
    reSaveStylesWhenViewsChanged();
    browserSync.reload();
    done();
  });
};

const build = gulp.series(
  clean,
  gulp.parallel(views),
  gulp.parallel(server, watch)
);
/*
 * Export a default task
 */
export default build;
