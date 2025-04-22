const mix = require('laravel-mix');

mix.js('resources/js/field.js', 'dist/js')
    .vue({ version: 3 })
    .sass('resources/sass/field.scss', 'dist/css')
    .webpackConfig({
        resolve: {
            alias: {
                'vue': 'vue/dist/vue.esm-bundler.js',
            }
        }
    });