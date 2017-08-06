/*
* @Author: yanwei
* @Date:   2017-08-04 16:32:51
* @Last Modified by:   yanwei
* @Last Modified time: 2017-08-06 13:16:15
*/


require('page/common/header/index.js');
require('page/common/nav/index.js')
var navSide = require('page/common/nav-side/index.js')
var _mm = require('util/mm.js');

navSide.init({
	name : 'order-list'
});
/*_mm.request({
	url:'./test.do',
	success:function(res){
		console.log(res);
	},
	error:function(errMsg){
		console.log(errMsg);
	}
});*/
/*var html = '<div>{{data}}</div>';
var data = {
	data: 123
}
console.log(_mm.renderHtml(html,data));*/