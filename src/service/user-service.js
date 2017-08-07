/*
* @Author: yanwei
* @Date:   2017-08-06 20:41:12
* @Last Modified by:   yanwei
* @Last Modified time: 2017-08-07 15:24:30
*/

'use strict';
var _mm = require('util/mm.js');
var _user = {
	//用户登录
	login : function(userInfo,resolve,reject){
		_mm.request({
			url		: _mm.getServerUrl('/user/login.do'),
			data 	: userInfo,
			method	: 'POST',
			success	: resolve,
			error 	: reject
		});
	},
	//检查登录状态
	checkLogin : function(resolve,reject){
		_mm.request({
			url		: _mm.getServerUrl('/user/get_user_info.do'),
			method	: 'POST',
			success	: resolve,
			error 	: reject
		});
	},
	// 获取用户密码提示问题
	getQuestion : function(username,resolve,reject){
		_mm.request({
			url		: _mm.getServerUrl('/user/forget_get_question.do'),
			method	: 'POST',
			success	: resolve,
			error 	: reject
		});
	},
	CheckAnswer : function(userInfo,resolve,reject){
		_mm.request({
			url		: _mm.getServerUrl('/user/forget_check-answer.do'),
			data 	: userInfo,
			method	: 'POST',
			success	: resolve,
			error 	: reject
		});
	},
	//重置密码
	resetPassword: function(userInfo,resolve,reject){
		_mm.request({
			url		: _mm.getServerUrl('/user/forget_forget_password.do'),
			data 	: userInfo,
			method	: 'POST',
			success	: resolve,
			error 	: reject
		});
	},
	getUserInfo : function(resolve,reject){
		_mm.request({
			url		: _mm.getServerUrl('/user/get_information.do'),
			method	: 'POST',
			success	: resolve,
			error 	: reject
		});
	},
	// 更新个人信息
	updateUserInfo : function(userInfo,resolve,reject){
		_mm.request({
			url		: _mm.getServerUrl('/user/update_information.do'),
			data 	: userInfo,
			method	: 'POST',
			success	: resolve,
			error 	: reject
		});
	},
	// 登录状态下重置密码
	updatePassword : function(userInfo,resolve,reject){
		_mm.request({
			url		: _mm.getServerUrl('/user/reset_password.do'),
			data 	: userInfo,
			method	: 'POST',
			success	: resolve,
			error 	: reject
		});
	},
	// 登出
	logout : function(resolve,reject){
		_mm.request({
			url 	:_mm.getServerUrl('.user/logout.do'),
			method	: 'POST',
			success	: resolve,
			error 	: reject
		})
	},
	//检查用户名是否存在
	checkUsername : function(username,resolve,reject){
		_mm.request({
			url		: _mm.getServerUrl('/user/check_valid.do'),
			data 	: {
				type 	: 'username',
				str  	: username
			},
			method	: 'POST',
			success	: resolve,
			error 	: reject
		});
	},
	//用户注册
	register : function(userInfo,resolve,reject){
		_mm.request({
			url		: _mm.getServerUrl('/user/register.do'),
			data 	: userInfo,
			method	: 'POST',
			success	: resolve,
			error 	: reject
		});
	}
}
module.exports = _user;
