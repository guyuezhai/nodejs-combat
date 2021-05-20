const http = require('http');
const URL = require('url').URL;

const cpuOverload = '..ew'

const routerMapping={
    '/v1/contents':{
        'controller':'content',
        'method':'list'
    },
    '/v1/test':{
        'controller':'content',
        'method':'test'
    }
}

/**创建http服务，简单返回 */

const server = http.createServer(async(req,res)=>{
    //获取 get 参数
    const myUrl = new URL(req.url,`http://${req.headers.host}`);
    const pathname = myUrl.pathname;

    // 过滤非拉取用户信息请求
    if(!routerMapping[pathname]){
        // return 404
    }

    //请求拦截避免 cpu 过载

    if(!cpuOverload){

    }
})

server.listen(3000,()=>{
    console.log('server start http://127.0.0.1:3000')
})