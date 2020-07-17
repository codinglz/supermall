module.exports = {
    configureWebpack: {
        resolve: {
            alias: {  //起别名  @就是src
                "assets": "@/assets",
                "common": "@/common",
                "components": "@/components",
                "network": "@/network",
                "views": "@/views",
            }
        }
    }
}