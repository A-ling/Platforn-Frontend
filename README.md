js压缩问题解决：https://my.oschina.net/hyzccc/blog/1797358

我们需要以下几步：

用npm安装uglifyjs-webpack-plugin插件;
将其引入：var UglifyJsPlugin=require('uglifyjs-webpack-plugin');
删除以前的写法，将optimization的JS压缩与plugins并排写在一起，注意，是并排，而不是像以前一样写在plugins里面。
plugins:[
        
    ],
     //压缩js
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    compress: false
                }
            })
        ]
    },

----------------------------------------

图片不显示问题：https://www.jb51.net/article/116445.htm
在 rules中添加
	    {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]',
                options:{
                    publicPath:'/'
                }
            }

-------------------------------------

安装bootstrap报错：https://www.leevii.com/2018/03/module-not-found-error-cant-resolve-popper-js-%E9%94%99%E8%AF%AF%E8%A7%A3%E5%86%B3%E5%8A%9E%E6%B3%95.html
1.下载 popper.js
	npm install popper.js -D
2.
	new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default'],
      })

----------------------------------------


echart安装：
http://echarts.baidu.com/tutorial.html#%E5%9C%A8%20webpack%20%E4%B8%AD%E4%BD%BF%E7%94%A8%20ECharts







