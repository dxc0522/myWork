const Koa = require('koa'),
    views = require('koa-views'),
    path = require('path'),
    app = new Koa();

app.use(views(path.join(__dirname, './views'), {
    extension: 'ejs'
}))

app.use(async ctx => {
    let title = '你好'
    // 传递参数到模版中
    await ctx.render('index', {
        title
    })
})
app.listen(3000, () => {
    console.log("localhost:3000")
})