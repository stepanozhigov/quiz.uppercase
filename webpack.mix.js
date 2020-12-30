const mix = require("laravel-mix");
const mqpacker = require("css-mqpacker");
const sortCSSmq = require("sort-css-media-queries");
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.js('resources/js/app.js', 'public/js')
//    .sass('resources/sass/app.scss', 'public/css')
//    .options({
//         postCss: [
//         mqpacker({
//                 sort: sortCSSmq
//             })
//         ]
//     });

mix
.options({
    processCssUrls: false,
    autoprefixer: {
        browsers: ["last 20 versions"]
    }
})

.sourceMaps()
.webpackConfig({devtool: 'source-map'})
// .sass('resources/sass/app.scss', 'public/css')
.js("resources/js/app.js", "public/js");

mix.browserSync({
    proxy: "quiz.uppercase.local",
    open: false
});

if (mix.inProduction()) {
    mix.version();
}
