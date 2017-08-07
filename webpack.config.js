/*
* @Author: yanwei
* @Date:   2017-08-04 16:44:06
* @Last Modified by:   yanwei
* @Last Modified time: 2017-08-07 15:00:07
*/
var webpack 			= require('webpack');
var ExtractTextPlugin 	= require("extract-text-webpack-plugin");
var HtmlWebpackPlugin    = require('html-webpack-plugin');
//环境变量的配置
var WEBPACK_ENV          = process.env.WEBPACK_ENV || 'dev';
console.log(WEBPACK_ENV);
//获取html-webpack-pluginc参数的方法
var getHtmlConfig = function(name,title){
     return {
           template  : './src/view/'+name+'.html',
               filename  : 'view/'+name+'.html',
               title     : title,
               inject    : true,
               hash      : true,
               chunks    : ['common',name]
     };
};
var config = {
     entry: {
     	'common'          :['./src/page/common/index.js'],
     	'index'           :['./src/page/index/index.js'],
      'user-register'   :['./src/page/user-register/index.js'],
      'user-center'   :['./src/page/user-center/index.js'],
      'user-center-update'   :['./src/page/user-center-update/index.js'],
     	'user-pass-update'   :['./src/page/user-pass-update/index.js'],
      'user-login'      :['./src/page/user-login/index.js'],
      'user-pass-reset' :['./src/page/user-pass-reset/index.js'],
      'result'        :['./src/page/result/index.js'],
     },
     output: {
         path: './dist',
         publicPath : '/dist/',
         filename: 'js/[name].js'
     },
     module:{
     	loaders:[
     		       {test:/\.css$/,loader:ExtractTextPlugin.extract("style-loader","css-loader")},
               {test:/\.(png|jpg|gif|ttf|svg|woff|eot)\??.*$/,loader: "url-loader?limit=100&name=resource/[name].[ext]"},
               {test:/\.string$/,loader:'html-loader'}
          ]
     },
     resolve:{
        alias:{
          node_modules    : __dirname +'/node_modules',
          util            : __dirname +'/src/util',
          page            : __dirname +'/src/page',
          service         : __dirname +'/src/service',
          image           : __dirname +'/src/image',
        }
     },
     plugins: [
          //独立通用模块到js/base.js 
     	new webpack.optimize.CommonsChunkPlugin({
     		name : 'common',
     		filename :'js/base.js'
     	}),
          //把css单独打包到文件里
     	new ExtractTextPlugin("css/[name].css"),
          //html模板的处理
          new HtmlWebpackPlugin(getHtmlConfig('index','首页')),
          new HtmlWebpackPlugin(getHtmlConfig('user-login','用户登录')),
          new HtmlWebpackPlugin(getHtmlConfig('user-register','用户注册')),
          new HtmlWebpackPlugin(getHtmlConfig('user-pass-reset','忘记密码')),
          new HtmlWebpackPlugin(getHtmlConfig('user-center','个人中心')),
          new HtmlWebpackPlugin(getHtmlConfig('user-center-update','修改个人信息')),
          new HtmlWebpackPlugin(getHtmlConfig('user-pass-update','修改个人信息')),
          new HtmlWebpackPlugin(getHtmlConfig('result','操作结果')),
     ]
 };
 if ('dev' === WEBPACK_ENV) {
     config.entry.common.push('webpack-dev-server/client?http://locolhost:8088');
 }
 module.exports  = config;