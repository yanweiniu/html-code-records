/*
* @Author: yanwei
* @Date:   2017-08-06 20:41:12
* @Last Modified by:   yanwei
* @Last Modified time: 2017-08-07 22:14:45
*/

'use strict';
var _mm = require('util/mm.js');
var _product = {
	//获取商品列表
	getProductList : function(listParam,resolve,reject){
		_mm.request({
			url		: _mm.getServerUrl('/product/list/.do'),
			data 	: listParam,
			method	: 'POST',
			success	: resolve,
			error 	: reject
		});
	}
}
module.exports = _product;
