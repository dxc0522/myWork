const Koa = require('koa'),
    Router = require('koa-router'),
    app = new Koa();
// 声明子层级
let home = new Router();
home.get('/', async ctx => {
    ctx.body = "这个是首页"
}).get('/todo', async ctx => {
    ctx.body = "todo页面"
})
// 声明子层级
let page = new Router();
page.get('/', async ctx => {
    ctx.body = "index 页面"
}).get('/todo', async ctx => {
    ctx.body = "另一个todo页面"
})
// 装载路由
let router = new Router();
router.use('/home', home.routes(), home.allowedMethods())
router.use('/page', page.routes(), page.allowedMethods());
// 挂载路由
app.use(router.routes()).use(router.allowedMethods())
app.listen(3000, () => {
    console.log("localhost:3000")
})