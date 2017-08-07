/*
* @Author: yanwei
* @Date:   2017-08-04 17:19:55
* @Last Modified by:   yanwei
* @Last Modified time: 2017-08-06 21:43:56
*/

'use strict';
require('./index.css');
require('page/common/nav-simple/index.js')
var _mm 	= require('util/mm.js');
var _user 	= require('service/user-service.js');
//表单里的错误提示
var formError = {
	show : function(errMsg){
		$('.error-item').show().find('.error-msg').text(errMsg);
	},
	hide : function(){
		$('.error-item').hide().find('.error-msg').text('');
	}
}
var page = {
	init : function(){
		this.bindEvent();
	},
	bindEvent : function(){
		var _this = this;
		//登录按钮的点击
		$('#submit').click(function() {
			_this.submit();
		});
		//如果按下回车，也进行提交
		$('.user-content').keyup(function(e){
			if(e.keCode ===13){
				_this.submit();
			}
		});
	},
	//提交表单
	submit : function(){
		var formData = {
			username : $.trim($('#username').val()),
			password : $.trim($('#password').val()),
		},
		validateResult = this.formValidate(formData);
		//验证成功
		if (validateResult.status) {
			_user.login(formData,function(res){
				window.location.href = _mm.getUrlParam('redirect') || './index.html';
			},function(errMsg){
				formError.show(errMsg);
			});
		}
		// 验证失败
		else{
		// 错误提示
			formError.show(validateResult.msg);
		}

	},
	formValidate : function(formData){
		var result = {
			status 	: false,
			msg 	: ''	
		};

		if (!_mm.validate(formData.username,'require')) {
			result.msg = '用户名不能为空';
			return result;
		}
		if (!_mm.validate(formData.password,'require')) {
			result.msg = '密码不能为空';
			return result;
		}
		result.status 	= true;
		result.msg		= '验证通过';
		return result;
	}
};
$(function(){
	page.init();
})