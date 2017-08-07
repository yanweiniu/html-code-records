/*
* @Author: yanwei
* @Date:   2017-08-07 13:18:56
* @Last Modified by:   yanwei
* @Last Modified time: 2017-08-07 14:15:11
*/

'use strict';
require('./index.css');
require('page/common/header/index.js');
require('page/common/nav/index.js')
var navSide = require('page/common/nav-side/index.js')
var _mm = require('util/mm.js');
var templateIndex = require('./index.string');
var _user 	= require('service/user-service.js');
/*
* @Author: yanwei
* @Date:   2017-08-04 17:19:55
* @Last Modified by:   yanwei
* @Last Modified time: 2017-08-06 21:43:56
*/
//表单里的错误提示
var page = {
	init : function(){
		this.onLoad();
	},
	onLoad : function(){
		navSide.init({
			name : 'user-center'
		});
		//加载用户信息
		this.loadUserInfo();
	},
	loadUserInfo : function(){
		var userHtml = '';
		userHtml = _mm.renderHtml(templateIndex,"res");
			$('.panel-body').html(templateIndex);
		_user.getUserInfo(function(res){
			
		},function(errMsg){
			_mm.errorTips(errMsg);
		})
	}
};
$(function(){
	page.init();
})