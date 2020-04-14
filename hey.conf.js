const path = require('path');

module.exports = {
  port: 9012,
  root: 'dist',
  stat: false,
  webpack: {
    console: true,
    publicPath: '/',
    output: {
      './index.html': {
        entry: './src/app'
      }
    },
    alias: {
      model: './src/js/model/',
      js: './src/js/',
      components: './src/components/',
      Images: "./src/images/"
    },
    global: {
      Utils: [path.resolve(__dirname, 'src/js/common/utils'), 'default'],
      Manba: 'manba',
      HeyUI: 'heyui',
      Model: 'js-model',
      G: 'hey-global',
      log: 'hey-log',
      R: [path.resolve(__dirname, 'src/js/common/request'), 'default']
    },
    devServer: { 
      proxy: {
        // '/api': {
        //   target: 'http://10.0.0.84'
        // }
      },
      historyApiFallback: true
    },
    globalVars: './src/css/var.less',
    //外部引用
    externals: {

    }
  },
  copy: ['static/images/*', 'call/*', './baidu_verify_7O2vpVMzwg.html']
};
