module.exports = {
  devServer: {
    overlay: {
      warnings: false,
      errors: false
    }
    // proxy: {
    //   // '/123': {
    //   //   target: 'http://m.maoyan.com',
    //   //   changeOrigin: true,
    //   //   pathRewrite:{
    //   //     "^/123":""
    //   //   }

    //   //   /* /kerwin/ajax/comingList  ====> /ajax/comingList  */
    //   // },
    //   '/': {
    //     target: 'https://m.maizuo.com',
    //     changeOrigin: true
    //   }
    // }

  },
  lintOnSave: false // 关了eslint 检查
}
