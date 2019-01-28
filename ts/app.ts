import * as Koa from 'koa'

const app = new Koa()

app.use(ctx => {
  ctx.body = 'Hello Koa';
});

app.listen(3200, ()=> console.log('http://localhost:3200') )