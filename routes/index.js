//引入路由模块
const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  //设置cookies->详情到koa官网查询  保存一个值
  ctx.cookies.set('pvid',Math.random())
  await ctx.render('index', {
    title: 'Hello Koa 233!'
  })
})

//测试路由
router.get('/testasync', async (ctx, next)=>{//async声明函数为异步
  console.log('start' + new Date().getTime())
  //await等待异步函数执行完才执行下面代码  前提是必须有async
  const a = await new Promise((resolve => {
    setTimeout(function () {
      console.log('end' + new Date().getTime())
      resolve('abc')
    },1000)
  }))
  const b = await Promise.resolve('233')//简写
  const c = await 'zrr' //await后自动将代码转为Promise  所以就更简洁
  const d = await new Promise((resolve, reject)=>{
    setTimeout(function () {
      resolve('888')
    },1000)
  })
  //响应结果
  ctx.body = {
    a,
    b,
    c,
    d
  }
  //执行时间为2秒
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})


//curl -X POST  http://localhost:3000/json   window下curl获取post请求数据
router.post('/json', async (ctx, next) => {
  const cookie = ctx.cookies.get('pvid')
  ctx.body = {
    title: 'koa2 json',
  }
})

//导出路由
module.exports = router
