const Koa = require('koa');
const app = new Koa();


app.use(async (ctx) => {
    if (ctx.request.url === '/'){
        ctx.response.body = '<h1>Welcome To Homepage</h1>'
    }else if (ctx.request.url === '/about') {
        ctx.response.body = '<h1>Welcome To About Page</h1>'}
        else if (ctx.request.url === '/contact') {
            ctx.response.body = '<h1>Welcome To Contact Page</h1>';
        }else{
            ctx.response.status = 404;
            ctx.response.body = 'Page Not Found'
        }
  });
  
  app.listen(3001, () =>{
    console.log(`Server started ad 3001`)
  });

