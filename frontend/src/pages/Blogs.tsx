import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks"


function Blogs(){
    const {loading,blogs} = useBlogs();


    if(loading){
        return <div className="w-full">
            <Appbar/>
            <div>
                <div className="w-[85%] mx-auto ">
                    <BlogSkeleton/>
                    <BlogSkeleton/>
                    <BlogSkeleton/>
                    <BlogSkeleton/>
                    <BlogSkeleton/>
                </div>
            </div>
        </div>
    }
    return <div>
        <Appbar/>
        <div className="flex justify-center ">
            <div className="w-[85%]">
                {blogs.map((blog) => <BlogCard
                    id={blog.id}
                    authorName={blog.author.name}
                    title={blog.title}
                    content={blog.content}
                    publishedDate={"2nd feb 2023"}
                />)}
            </div>
        </div>
    </div>
}

export default Blogs