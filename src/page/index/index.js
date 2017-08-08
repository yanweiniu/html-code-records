/*
* @Author: yanwei
* @Date:   2017-08-04 16:32:51
* @Last Modified by:   yanwei
* @Last Modified time: 2017-08-07 21:00:46
*/
require('./index.css');
require('page/common/header/index.js');
require('page/common/nav/index.js');
require('util/slider/index.js');
var navSide = require('page/common/nav-side/index.js');
var templateBanner = require('./index.string');
var _mm = require('util/mm.js');

navSide.init({
	name : 'order-list'
});
$(function(){
	var bannerHtml = _mm.renderHtml(templateBanner);
	// 渲染banner的html
	$('.banner-con').html(bannerHtml);
	// 初始化banner
	var unslider04 = $('#b04').unslider({
    dots: true
	}),
	data04 = unslider04.data('unslider');
	//前一张后一张事件绑定
    $('.unslider-arrow04').click(function() {
        var fn = this.className.split(' ')[1];
        data04[fn]();
    });
/*	 
	$('.unslider-arrow04').click(function() {
	    var fn = this.className.split(' ')[1];
	    data04[fn]();
	});*/
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