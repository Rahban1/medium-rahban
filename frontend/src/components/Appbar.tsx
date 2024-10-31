import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"

export const Appbar = ()=>{
    return <div className="border-b border-black flex justify-between px-4 py-4  ">
            <Link to={'/blogs'} className="flex flex-col justify-center cursor-pointer">
                Rahban's Blog
            </Link>
        <div >
        <Link className="hidden md:inline-flex" to={"/my-story"}>
            <button type="button" className=" px-4 py-2 rounded-full text-sm md:text-lg font-light">Our Story</button>
        </Link>
        <Link to={"/write"} className="hidden md:inline-flex">
            <button type="button" className=" px-4 py-2 rounded-full text-sm md:text-lg font-light ">Write</button>
        </Link>
        <Link to={"/signin"} className="hidden sm:inline-flex">
            <button type="button" className=" px-4 py-2 rounded-full text-sm md:text-lg font-light ">Sign in</button>
        </Link>
        
        <Link to={"/signup"} >
            <button type="button" className="bg-black text-white px-4 py-2 rounded-full text-sm md:text-lg font-light">Get started</button>
        </Link>
        </div>
    </div>
}