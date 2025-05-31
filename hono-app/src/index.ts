import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
    
  return c.json({

    message:"hii there"
  })
})

//  ha batao kay kaam hai 
// aao khana khalo 
// aaldy bahut kuch ho gaya

app.post('/user', (c) => {
  return c.text('Hello bro !')
})

export default app
