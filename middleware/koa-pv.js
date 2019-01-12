//中间件
function pv(ctx) {
    console.log('路径' + ctx.path)
}
module.exports = function () {
    return async function (ctx, next) {
        pv(ctx)
        await next()
    }
}
