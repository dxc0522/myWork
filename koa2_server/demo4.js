const Koa = require('koa'),
    fs = require("fs"),
    app = new Koa();
async function route(url) {
    let page = "404.html";
    switch (url) {
        case '/':
            page = "index.html"
            break;
        case '/todo':
            page = 'todo.html'
            break;
        case '/index':
            page = 'index.html'
            break;
        case '/404':
            break;
        default:
            page = 'nofound.html'
            break;
    }
    return await render(page)
}
function render(page) {
    return new Promise((resolve, reject) => {
        let pageUrl = "./pages/" + page;
        // 获取路径，binary二进制，
        fs.readFile(pageUrl, 'binary', (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}
app.use(async ctx => {
    let url = ctx.request.url;
    let html = await route(url);
    ctx.body = html;
})
app.listen(3000)