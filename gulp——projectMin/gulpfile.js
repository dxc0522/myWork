
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    uglifyJs=require('uglify-js'),
    // rename = require('gulp-rename'),
    concat=require('gulp-concat'),
    cssmin=require('gulp-clean-css'),
    htmlmin=require('gulp-htmlmin'),
    imagemin = require('gulp-imagemin'),
str2hex = require('gulp-str2hex'),
    transform = require('gulp-transform'),
    messup = require('decent-messup'),
 obfuscate = require('gulp-obfuscate');

// js压缩改名合并
/*gulp.task('jsmin', function () {
    return gulp.src('src/js/!*.js')
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(gulp.dest("dist/js/"))
});*/
// 图片优化
gulp.task('imagemin', function() {
    return gulp.src('src/img/*.{png,jpg,gif,jpeg}')
        .pipe(imagemin({
            optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
            progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
            interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
            multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
        }))
        .pipe(gulp.dest('dist/img'));
});
gulp.task('lib',function () {
   return gulp.src(['src/lib/*'])
       .pipe(gulp.dest('dist/lib/'))
});
gulp.task('fonts',function () {
    return gulp.src(['src/fonts/*'])
        .pipe(gulp.dest('dist/fonts/'))
});
gulp.task('jsmins', function () {
     gulp.src(['src/js/*.js','!src/js/pulic.js'])
        .pipe(uglify({
            mangle: { toplevel: true },
            compress: true,//类型：Boolean 默认：true 是否完全压缩
             mangle: true,//类型：Boolean 默认：true 是否修改变量名
        }))
        // .pipe(transform('utf8', code => messup(code,{headCnt:5,es6:false})))
        // 不可逆加密
        /*        .pipe(rename({
                    suffix: ".min"
                }))*/
        .pipe(gulp.dest("dist/js/"))
});
gulp.task('pulicJsmins', function () {
    return gulp.src('src/js/pulic.js')
        .pipe(uglify({
        }))
        // .pipe(transform('utf8', code => messup(code,{headCnt:5,es6:false})))
        // 不可逆加密
        /*        .pipe(rename({
                    suffix: ".min"
                }))*/
        .pipe(gulp.dest("dist/js/"))
});
// css文件压缩合并改名
gulp.task('cssmin',function () {
    return  gulp.src(['src/css/*.css','!src/css/animate.min.css','!src/css/server-main.css','!src/css/server-show.css'])
        .pipe(cssmin())
/*        .pipe(rename({
            suffix:'.min'
        }))*/
        .pipe(gulp.dest("dist/css"))
});
// 雪碧图css压缩合并改名
gulp.task('xbcssmin',function () {
    return  gulp.src('src/img/sprite.css')
        .pipe(cssmin())
/*        .pipe(rename({
            suffix:'.min'
        }))*/
        .pipe(gulp.dest("dist/img"))
});
//html压缩，改名
gulp.task('htmlmin',function () {
    return  gulp.src('src/*.html')
        .pipe(htmlmin({
            removeComments: true,//清除HTML注释
            collapseWhitespace: true,//压缩HTML
            collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
            removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
            removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
            removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
            minifyJS: true,//压缩页面JS
            minifyCSS: true//压缩页面CSS
        }))
        .pipe(gulp.dest("dist"))
});
//关于文件压缩，改名
gulp.task('Ahtmlmin',function () {
    return  gulp.src('src/viewAbout/*.html')
        .pipe(htmlmin({
            removeComments: true,//清除HTML注释
            collapseWhitespace: true,//压缩HTML
            collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
            removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
            removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
            removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
            minifyJS: true,//压缩页面JS
            minifyCSS: true//压缩页面CSS
        }))
        .pipe(gulp.dest("dist/viewAbout/"))
});
//fabu，改名
gulp.task('Fhtmlmin',function () {
    return  gulp.src('src/viewFabu/*.html')
        .pipe(htmlmin({
            removeComments: true,//清除HTML注释
            collapseWhitespace: true,//压缩HTML
            collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
            removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
            removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
            removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
            minifyJS: true,//压缩页面JS
            minifyCSS: true//压缩页面CSS
        }))
        .pipe(gulp.dest("dist/viewFabu/"))
});
//M文件压缩，改名
// gulp.task('Mhtmlmin',function () {
//     return  gulp.src('src/viewM/*.html')
//         .pipe(htmlmin({
//             removeComments: true,//清除HTML注释
//             collapseWhitespace: true,//压缩HTML
//             collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
//             removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
//             removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
//             removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
//             minifyJS: true,//压缩页面JS
//             minifyCSS: true//压缩页面CSS
//         }))
//         .pipe(gulp.dest("dist/viewM/"))
// });
// //s文件压缩，改名
// gulp.task('Shtmlmin',function () {
//     return  gulp.src('src/viewS/*.html')
//         .pipe(htmlmin({
//             removeComments: true,//清除HTML注释
//             collapseWhitespace: true,//压缩HTML
//             collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
//             removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
//             removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
//             removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
//             minifyJS: true,//压缩页面JS
//             minifyCSS: true//压缩页面CSS
//         }))
//         .pipe(gulp.dest("dist/viewS/"))
// });
/*gulp.task('htmlmins',function () {
    return  gulp.src('src/views/!*.html')
        .pipe(htmlmin({
            collapseWhitespace:true
        }))
        .pipe(gulp.dest("dist/views"))
});*/
// 默认配置
/*gulp.task('default',function () {
    gulp.start('jsmin','jsmins','cssmin','htmlmin','htmlmins');
});*/
// 后台页面不压缩
gulp.task('default',function () {
    gulp.start('imagemin','cssmin','xbcssmin','htmlmin','jsmins','pulicJsmins','lib','Ahtmlmin','Fhtmlmin',"fonts");
});
// gulp.task('default', ['imagemin','cssmin','xbcssmin','htmlmin','jsmins','pulicJsmins','lib','Ahtmlmin','Fhtmlmin',"fonts"]);
