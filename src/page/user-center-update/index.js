/*
* @Author: yanwei
* @Date:   2017-08-07 13:18:56
* @Last Modified by:   yanwei
* @Last Modified time: 2017-08-07 14:57:30
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
		this.bindEvent();
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
		_user.getUserInfo(function(res){
			userHtml = _mm.renderHtml(templateIndex,res);
			$('.panel-body').html(templateIndex);
		},function(errMsg){
			_mm.errorTips(errMsg);
		})
	},
	bindEvent : function(){
		var _this = this;
		//登录按钮的点击
		$('.btn-submit').click(function() {
			alert(32434);
		});
		//点击提交按钮后的动作
		$(document).on('click','.btn-submit',function(){
			var userInfo = {
				phone 		: $.trim($('#phone').val()),
				email 		: $.trim($('#email').val()),
				question 	: $.trim($('#question').val()),
				answer 		: $.trim($('#answer').val()),
			},
			validateResult = _this.validateForm(userInfo);
				//验证成功
			if (validateResult.status) {
				_user.updateUserInfo(userInfo,function(res,msg){
					_mm.successTips(msg);
					window.location.href = './user-center.html';
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
		// 验证手机号
		if (!_mm.validate(formData.phone,'phone')) {
			result.msg = '手机号格式不正确';
			return result;
		}
		// 验证邮箱
		if (!_mm.validate(formData.email,'email')) {
			result.msg = '邮箱格式不正确';
			return result;
		}
		// 验证密码问题
		if (!_mm.validate(formData.question,'require')) {
			result.msg = '密码提示问题不能为空';
			return result;
		}
		// 验证密码问题答案
		if (!_mm.validate(formData.answer,'require')) {
			result.msg = '密码提示问题答案不能为空';
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