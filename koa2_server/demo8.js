const Koa = require('koa'),
    Router = require('koa-router'),
    app = new Koa();
// 装载路由
let router = new Router();
router.get('/', async ctx => {
    let html = await ctx.cookies.get('myName');
    ctx.body = html
}).get('/set', async ctx => {
    ctx.cookies.set('myName', 'dxc', {
        domain: '127.0.0.1',
        path: '/set',
        maxAge: 1000 * 60 * 60 * 24,
        expires: new Date('2018-12-31'),
        httpOnly: false,
        overwrite: false,
    })
    ctx.body = "setCookie"
})
// 挂载路由
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
    console.log("localhost:3000")
})