import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'
import { signinInput, signupInput } from "@rahban/medium-common";
import bcrypt from 'bcryptjs';

export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    }
}>()

userRouter.post("/signup",async (c)=>{
    const prisma = new PrismaClient({
      datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    
    const body = await c.req.json();
    const { success } = signupInput.safeParse(body);
    if(!success){
      c.status(411);
      return c.json({ msg: "invalid inputs / zod error"})
    }
  
    try {
      // Hash password with salt (default rounds: 10)
      const saltRounds = 12; // Higher rounds = more secure but slower
      const hashedPassword = await bcrypt.hash(body.password, saltRounds);
      
      const user = await prisma.user.create({
        data: {
          email: body.email,
          password: hashedPassword,
          name: body.name
        },
      });
      const jwt = await sign({id : user.id }, c.env.JWT_SECRET);
      return c.json({ jwt })
    } catch(e) {
      console.log(e)
      c.status(403);
      return c.json({ error: "errror while signing up"})
    }
  })
  
  userRouter.post("/signin",async (c)=>{
    const prisma = new PrismaClient({
          datasourceUrl: c.env?.DATABASE_URL	,
      }).$extends(withAccelerate());
  
    const body = await c.req.json();
    const { success } = signinInput.safeParse(body);
    if(!success){
      c.status(411);
      return c.json({ msg: "invalid inputs / zod error"})
    }
    // Find user by email only
    const user = await prisma.user.findUnique({
      where: {
        email: body.email
      }
    });
    
    if(!user){
      c.status(403);
      return c.json({msg: "invalid credentials"});
    }
    
    // Verify password using bcrypt
    const isPasswordValid = await bcrypt.compare(body.password, user.password);
    if(!isPasswordValid){
      c.status(403);
      return c.json({msg: "invalid credentials"});
    }
    const jwt = await sign({id: user.id},c.env.JWT_SECRET);
    return c.json({ jwt });
  })
// Add this to your existing userRouter

userRouter.post("/logout", async (c) => {
    try {
        // You can add token invalidation logic here if needed
        return c.json({
            status: "success",
            message: "Logged out successfully"
        });
    } catch (e) {
        c.status(500);
        return c.json({
            status: "error",
            message: "Error during logout"
        });
    }
});