import { Hono } from 'hono'

const app = new Hono()

async  function authMiddleware (c:any, next:any){
  if(c.req.header("Authorization")){
    await next();
  }else{
    return c.text("you dont have a access");
  }
}



// app.use(authMiddleware);




app.post('/', authMiddleware, async(c) => {
    const body = await c.req.json();
    console.log(body);
    console.log(c.req.header("Authorization"));
  console.log(c.req.query('param')); 
  return c.text('Hello Hono!');
})

//  ha batao kay kaam hai 
// aao khana khalo 
// aaldy bahut kuch ho gaya

// app.post('/user', (c) => {
//   return c.text('Hello bro !')
// })

export default app
