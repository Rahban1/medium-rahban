import { Appbar } from "./Appbar"
import { Blog } from "../hooks"
import { Avatar } from "./BlogCard"

export const FullBlog = ({ blog } : {blog: Blog})=>{
    return <div>
        <Appbar/> 
        <div className="flex justify-center ">
            <div className="flex flex-col md:grid grid-cols-12 px-10 w-full pt-20 max-w-screen-xl">
                <div className="col-span-8">
                    <div className="text-2xl md:text-5xl font-extrabold">
                        {blog.title}
                    </div>
                    <div className="text-slate-500 pt-4">
                        Posted on 2nd December 2024
                    </div>
                    <div  className="text-base pt-4">
                        {blog.content}
                    </div>
                </div>
                <div className="col-span-4">
                    <div className="text-slate-600 text-lg">
                        Author
                    </div>
                    <div className="flex w-full">
                        <div className="pr-4 flex flex-col justify-center">
                            <Avatar name={blog.author.name}/>
                        </div>
                        <div>
                            <div className="text-lg font-bold">
                                {blog.author.name || "Anonymous"}
                            </div>
                            <div className="pt-2 text-slate-500 text-sm">
                                Random catch phrase about the author's ability to grab the user's attention
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    }