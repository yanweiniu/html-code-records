/*
* @Author: yanwei
* @Date:   2017-08-05 21:16:36
* @Last Modified by:   yanwei
* @Last Modified time: 2017-08-06 13:08:16
*/

'use strict';
var _mm	= require('util/mm.js');
//通用导航头部
var header = {
	init : function(){
		this.bindEvent();
	},
	onLoad : function(){
		var keyword = _mm.getUrlParam('keyword');
		//如果keyword存在，在回填输入框
		if (keyword) {
			$('#search-input').val(keyword);
		};
	},
	bindEvent : function(){
			var _this = this;
			//点击搜索按钮以后做提交
			$('#search-btn').click(function(){
				_this.searchSubmit();
			});
			//输入回车后，做回
			//车提交
			$('#search-input').keyup(function(e){
				if (e.keyCode == 13) {
					_this.searchSubmit();
				}
			})
	},
	//搜索的提交
	searchSubmit : function(){
		var keyword = $.trim($('#search-input').val());
		//如果提交时有keyword，正常跳转到list页
		if (keyword) {
			window.location.href = '.list.html?keyword='+keyword;
		}
		//如果keyword为空，直接返回主页
		else{
			_mm.goHome();
		}
	}
};
header.init();