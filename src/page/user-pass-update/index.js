/*
* @Author: yanwei
* @Date:   2017-08-07 13:18:56
* @Last Modified by:   yanwei
* @Last Modified time: 2017-08-07 15:45:04
*/

'use strict';
require('./index.css');
require('page/common/header/index.js');
require('page/common/nav/index.js')
var navSide = require('page/common/nav-side/index.js')
var _mm = require('util/mm.js');
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
		this.bindEvent();
	},
	onLoad : function(){
		navSide.init({
			name : 'user-pass-update'
		});
	},
	bindEvent : function(){
		var _this = this;
		//事件委托，点击提交按钮后的动作
		$(document).on('click','.btn-submit',function(){
			var userInfo = {
				password 		: $.trim($('#password').val()),
				passwordNew 	: $.trim($('#password-new').val()),
				passwordConfirm	: $.trim($('#password-confirm').val()),
			},
			validateResult = _this.validateForm(userInfo);
				//验证成功
			if (validateResult.status) {
				_user.updatePassword({
					passwordOld : userInfo.password,
					passwordNew : userInfo.passwordNew
				},function(res,msg){
					_mm.successTips(msg);
				},function(errMsg){
					_mm.errorTips(errMsg);
				});
			}
			// 验证失败
			else{
				_mm.errorTips(validateResult.msg);
			}
		});
	},
	validateForm : function(formData){
		var result = {
			status 	: false,
			msg 	: ''	
		};
		// 验证原密码
		if (!_mm.validate(formData.password,'require')) {
			result.msg = '原密码不能为空';
			return result;
		}
		// 验证新密码长度
		if (!formData.passwordNew || formData.passwordNew.length<6) {
			result.msg = '新密码长度不能少于六位';
			return result;
		}
		// 验证两次输入密码是否一致
		if (formData.passwordNew !== formData.passwordConfirm) {
			result.msg = '两次输入密码不一致';
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