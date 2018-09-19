const Koa = require('koa'),
    path = require('path'),
    static = require('koa-static'),
    staticPath = './static',
    app = new Koa();
// 配置静态路径
app.use(static(path.join(__dirname, staticPath)));

app.use(async ctx => {
    ctx.body = "你好"
})

app.listen(3030, () => {
    console.log("localhost:3000")
})