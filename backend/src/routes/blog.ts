import { Hono } from "hono"
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { verify } from "hono/jwt"
import { createBlogInput, updateBlogInput } from "@rahban/medium-common"


export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string
        JWT_SECRET: string
    },
    Variables: {
        userId: string
    }
}>()

blogRouter.use("/*",async (c,next)=>{
    const jwt = c.req.header("Authorization");
    if(!jwt){
        return c.json({error: "unauthorized"});
    }
    const token = jwt.split(' ')[1];
    const payload = await verify(token, c.env.JWT_SECRET);
    if(!payload){
        c.status(401);
        return c.json({ error: "unauthorized"});
    }
    c.set('userId',payload.id);
    await next()
})

blogRouter.post("/",async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL,
      }).$extends(withAccelerate());
    const body = await c.req.json();
    const { success } = createBlogInput.safeParse(body);
    if(!success){
        return c.json({
            msg: "invalid input / zod error"
        })
    }
    const userId = c.get('userId')
    
    try {
        const post = await prisma.post.create({
        data: {
                title: body.title,
                content: body.content,
                authorId: userId
            }
        })

        return c.json({
            id: post.id
        })
    } catch(e){
        console.log(e);
        c.status(411);
        return c.json({
            msg: "error while fetching posts"
        })
    }
})
  
blogRouter.put("/",async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL,
      }).$extends(withAccelerate());
    const body = await c.req.json();
    const { success } = updateBlogInput.safeParse(body);
    if(!success){
        return c.json({
            msg: "invalid input / zod error"
        })
    }
    const userId = c.get('userId')
    const post = await prisma.post.update({
        where: {
            id: body.id
        },
        data: {
            title: body.title,
            content: body.content,
        }
    })

    return c.json({
        id: post.id
    })
  })
  
blogRouter.get("/bulk",async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL,
      }).$extends(withAccelerate()); 

    const posts = await prisma.post.findMany({});
    return c.json(posts)
  })
  
blogRouter.get("/:id", async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL,
      }).$extends(withAccelerate()); 

    const id = c.req.param('id');
    try {
        const post = await prisma.post.findFirst({
        where: {
            id
        }
        })

        return c.json({
        post
    })
    } catch(e) {
        c.status(411);
        return c.json({
            msg: "error while fetching posts"
        })
    }
  })