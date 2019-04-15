const Koa = require('koa'),
    Router = require('koa-router'),
    app = new Koa(),
    router = new Router({
        prefix: '/dxc',//前缀不会自动添加，会对所有路由添加
    });

// 定义路由
router.get('/', async (ctx, next) => {
    ctx.body = '你好'
}).get('/todo', async (ctx, next) => {
    ctx.body = 'todo'
})

// 挂载路由
app.use(router.routes()).use(router.allowedMethods);
app.listen(3000, () => {
    console.log("localhost:3000")
})