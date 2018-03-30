/**
 * Created by Administrator on 2017/9/18 0018.
 */
var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');

gulp.task('sprite', function () {
    var spriteData = gulp.src('minImg/img/*').pipe(spritesmith({
        imgName: 'sprite.png',
        cssName: 'sprite.css',
        padding:5//合并时间距
    }));
    return spriteData.pipe(gulp.dest('src/img/'));
});
gulp.task('default', function() {
    gulp.start('sprite');
});