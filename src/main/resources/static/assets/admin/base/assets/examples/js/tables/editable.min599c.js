/*!
 * Remark (http://getbootstrapadmin.com/remark)
 * Copyright 2017 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */

!function(global,factory){if("function"==typeof define&&define.amd)define("/tables/editable",["jquery","Site"],factory);else if("undefined"!=typeof exports)factory(require("jquery"),require("Site"));else{var mod={exports:{}};factory(global.jQuery,global.Site),global.tablesEditable=mod.exports}}(this,function(_jquery,_Site){"use strict";var _jquery2=babelHelpers.interopRequireDefault(_jquery),Site=babelHelpers.interopRequireWildcard(_Site);(0,_jquery2.default)(document).ready(function($){Site.run()}),_jquery2.default.fn.numericInputExample=function(){var element=(0,_jquery2.default)(this),footer=element.find("tfoot tr"),dataRows=element.find("tbody tr");return element.find("td").on("change",function(evt){var column=(0,_jquery2.default)(this).index(),total=0;if(0!==column){if(element.find("tbody tr").each(function(){var row=(0,_jquery2.default)(this);total+=parseFloat(row.children().eq(column).text())}),1===column&&total>5e3)return(0,_jquery2.default)(".alert").show(),!1;(0,_jquery2.default)(".alert").hide(),footer.children().eq(column).text(total)}}).on("validate",function(evt,value){return 0===(0,_jquery2.default)(this).index()?!!value&&value.trim().length>0:!isNaN(parseFloat(value))&&isFinite(value)}),function(){var column,total;for(column=1;column<footer.children().length;column++)total=0,dataRows.each(function(){var row=(0,_jquery2.default)(this);total+=parseFloat(row.children().eq(column).text())}),footer.children().eq(column).text(total)}(),this},(0,_jquery2.default)("#editableTable").editableTableWidget().numericInputExample().find("td:first").focus()});