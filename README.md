jsѹ����������https://my.oschina.net/hyzccc/blog/1797358

������Ҫ���¼�����

��npm��װuglifyjs-webpack-plugin���;
�������룺var UglifyJsPlugin=require('uglifyjs-webpack-plugin');
ɾ����ǰ��д������optimization��JSѹ����plugins����д��һ��ע�⣬�ǲ��ţ�����������ǰһ��д��plugins���档
plugins:[
        
    ],
     //ѹ��js
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

ͼƬ����ʾ���⣺https://www.jb51.net/article/116445.htm
�� rules�����
	    {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]',
                options:{
                    publicPath:'/'
                }
            }

-------------------------------------

��װbootstrap����https://www.leevii.com/2018/03/module-not-found-error-cant-resolve-popper-js-%E9%94%99%E8%AF%AF%E8%A7%A3%E5%86%B3%E5%8A%9E%E6%B3%95.html
1.���� popper.js
	npm install popper.js -D
2.
	new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default'],
      })

----------------------------------------


echart��װ��
http://echarts.baidu.com/tutorial.html#%E5%9C%A8%20webpack%20%E4%B8%AD%E4%BD%BF%E7%94%A8%20ECharts







