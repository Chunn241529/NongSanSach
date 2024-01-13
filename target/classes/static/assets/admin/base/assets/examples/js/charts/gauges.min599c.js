/*!
 * Remark (http://getbootstrapadmin.com/remark)
 * Copyright 2017 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */

!function (global, factory) { if ("function" == typeof define && define.amd) define("/charts/gauges", ["jquery", "Site"], factory); else if ("undefined" != typeof exports) factory(require("jquery"), require("Site")); else { var mod = { exports: {} }; factory(global.jQuery, global.Site), global.chartsGauges = mod.exports } }(this, function (_jquery, _Site) { "use strict"; var _jquery2 = babelHelpers.interopRequireDefault(_jquery), Site = babelHelpers.interopRequireWildcard(_Site); (0, _jquery2.default)(document).ready(function ($) { Site.run() }), (0, _jquery2.default)(document).ready(function ($) { var dynamicGauge = $("#exampleDynamicGauge").data("gauge"); setInterval(function () { var random = Math.round(1e3 * Math.random()), options = { strokeColor: Config.colors("primary", 500) }; random > 700 ? options.strokeColor = Config.colors("pink", 500) : random < 300 && (options.strokeColor = Config.colors("green", 500)), dynamicGauge.setOptions(options).set(random) }, 1500) }), (0, _jquery2.default)(document).ready(function ($) { var dynamicDonut = $("#exampleDynamicDonut").data("donut"); setInterval(function () { var random = Math.round(1e3 * Math.random()), options = { strokeColor: Config.colors("primary", 500) }; random > 700 ? options.strokeColor = Config.colors("pink", 500) : random < 300 && (options.strokeColor = Config.colors("green", 500)), dynamicDonut.setOptions(options).set(random) }, 1500) }) });