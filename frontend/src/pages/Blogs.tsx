import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { useBlogs } from "../hooks"


function Blogs(){
    const {loading,blogs} = useBlogs();

    if(loading){
        return <div>
            loading...
        </div>
    }
    return <div>
        <Appbar/>
        <div className="flex justify-center">
            <div>
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