const Koa = require('koa'),
    Router = require('koa-router'),
    app = new Koa();
// 装载路由
let router = new Router();
router.get('/', async ctx => {
    ctx.body = ctx.query
})
// 挂载路由
app.use(router.routes()).use(router.allowedMethods())
app.listen(3000, () => {
    console.log("localhost:3000")
})