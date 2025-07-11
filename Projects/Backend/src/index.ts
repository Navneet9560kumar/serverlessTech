import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/extension'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'


const app = new Hono()





app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.post('/api/v1/singup', async(c) => {
   
  const prisma  =  new PrismaClient({
    //@ts-ignore
    datasourceUrl:c.env.DATABASE_URL,
  }).$extends(withAccelerate())

const body = await c.req.json()


  await prisma.user.create({
    data:{
      email:body.email,
      password:body.password
    }
  })
  //@ts-ignore
  const token  = sign({id:user.id}, c.env.JWT_SECRET)

  return c.json({
    jwt:token
  })
})

app.post('	/api/v1/singin', (c) => {
  return c.text('Hello Hono!')
})

app.post('/api/v1/blog', (c) => {
  return c.text('Hello Hono!')
})

app.put('/api/v1/blog', (c) => {
  return c.text('Hello Hono!')
})

app.get('/api/v1/blog/:id', (c) => {
  return c.text('Hello Hono!')
})


export default app




// jab bhi hono ko insiles kar rage ha to seen ye hoga ke ham aase karege ok const app = new Hono<{
//   Bindings:{
//     DATABASE_URL:string
//   }
// }>() ye hee method hia hamare pass ok  ya fir ham yr bhi kar sakte hai @ts-ignore