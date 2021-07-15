module.exports = {
	publicPath:'./',
	configureWebpack:{
		resolve: {
			alias: {
				'src': '@',
				'assets': '@/assets',
				'common': '@/common',
				'components': '@/components',
				'network': '@/network',
				'views': '@/views',
				'plugins': '@/plugins',
			}
		}
	},
	devServer: {
		open: true,
		host: 'localhost',
		port: 8080,
		https: false,
		proxy: {
			'/api': {
				target: 'http://1.116.141.79:8082',
				changeOrigin: true,
				ws: true,
				pathRewrite: {
					'^/api': ''
				}
			},
			'/zz': {
				target: 'http://1.116.141.79',
				changeOrigin: true,
				ws: true,
				pathRewrite: {
					'^/zz': ''
				}
			}
		}
	},
	css: {
		loaderOptions: {
			css: {},
			postcss: {
				plugins: [
					require('postcss-px2rem')({
						remUnit: 37.5
					})
				]
			}
		}
	}
	
}