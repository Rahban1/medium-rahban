import { BlogCard } from "../components/BlogCard";
import { FullBlog } from "../components/FullBlog";
import { useBlog } from "../hooks"


function Blog() {
  const {blog , loading} = useBlog();
  if(loading){
    return <div>
      loading...
    </div>
  }
  return <div>
    <FullBlog/>
  </div>
}

export default Blog