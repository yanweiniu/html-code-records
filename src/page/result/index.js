/*
* @Author: yanwei
* @Date:   2017-08-06 13:21:53
* @Last Modified by:   yanwei
* @Last Modified time: 2017-08-06 14:13:04
*/

'use strict';
require('./index.css');

require('page/common/nav-simple/index.js')
var _mm = require('util/mm.js');

$(function(){
	var type  = _mm.getUrlParam('type') || 'default',
	$element = $('.'+type+'-success');
	$element.show();
	if (true) {}
})