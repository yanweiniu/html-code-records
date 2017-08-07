/*
* @Author: yanwei
* @Date:   2017-08-04 17:19:55
* @Last Modified by:   yanwei
* @Last Modified time: 2017-08-07 11:53:36
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
	data : {
		username : '',
		question : '',
		answer	 : '',
		token	 : ''
	},
	init : function(){
		this.onLoad();
		this.bindEvent();
	},
	onLoad : function(){
		this.loadStepUsername();
	},
	bindEvent : function(){
		var _this = this;
		//登录按钮的点击
		$('#submit-username').click(function() {
			var username = $.trim($('#username').val());
			if (username) {
				_this.loadStepQuestion();
				_user.getQuestion(username,function(res){
					_this.data.username = username;
					_this.data.question = res;
					_this.loadStepQuestion();
				},
				function(errMsg){
					formError.show(errMsg);
				});
			}
			//用户名不存在
			else{
				formError.show('请输入用户名');
			}
		});
		//输入密码提示问题答案中的按钮点击
		$('#submit-question').click(function() {
			var answer = $.trim($('#answer').val());
			//密码提示问题答案存在
			if (answer) {
									_this.loadStepPassword();

				//检查密码提示问题答案
				_user.CheckAnswer({
					username 	: _this.data.username,
					question 	: _this.data.question,
					answer 		: answer
				},function(res){
					_this.data.answer = answer;
					_this.data.token = res;
					_this.loadStepPassword();
				},
				function(errMsg){
					formError.show(errMsg);
				});
			}
			//密码提示问题答案不存在
			else{
				formError.show('请输入密码提示问题答案');
			}
		});
		//重置新密码中的按钮点击
		$('#submit-password').click(function() {
			var password = $.trim($('#password').val());
			//密码是否为空
			if (password && password.length>=6) {
				window.location.href = './result.html?type=pass-reset';
				//检查密码提示问题答案
				_user.resetPassword({
					username 		: _this.data.username,
					passwordNew 	: password,
					fortgetToken 	: _this.data.token
				},function(res){
					window.location.href = './result.html?type=pass-reset';
				},
				function(errMsg){
					formError.show(errMsg);
				});
			}
			//密码提示问题答案不存在
			else{
				formError.show('请输入不少于六位的新密码');
			}
		});
	},
	// 加载输入用户名的一步
	loadStepUsername : function(){
		$('.step-username').show();
	},
	// 加载输入密码提示问题答案
	loadStepQuestion : function(){
		// 清除错误提示
		formError.hide();
		//步骤的切换
		$('.step-username').hide().siblings('.step-question').show()
			.find('.question').text(this.data.question);
	},
	// 加载输入新密码的一步
	loadStepPassword : function(){
		// 清除错误提示
		formError.hide();
		//步骤的切换
		$('.step-question').hide().siblings('.step-password').show();
	}

};
$(function(){
	page.init();
})