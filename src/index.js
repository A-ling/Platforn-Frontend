/* require('bootstrap/dist/css/bootstrap.min.css')
require('bootstrap/dist/js/bootstrap.min.js') */
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
require("./main.css")
var $ = require("jquery");
var echarts = require('echarts');

/* require("bootstrap"); */
/* console.log($);*/
$('#test').text("jQuery is OK!"); 

var echarts = require('echarts');


// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('echartMain'));
// 绘制图表
myChart.setOption({
    title: {
        text: 'ECharts 入门示例'
    },
    tooltip: {},
    xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
});

$(function () { $("[data-toggle='tooltip']").tooltip(); });