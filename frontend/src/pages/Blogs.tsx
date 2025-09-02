import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks"
import { useState, useMemo } from "react";


function Blogs() {
    const { loading, blogs, setBlogs } = useBlogs();
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 10;

    const handleDelete = (deletedId: string) => {
        setBlogs(blogs.filter(blog => blog.id !== deletedId));
    };

    const { currentBlogs, totalPages } = useMemo(() => {
        const indexOfLastBlog = currentPage * blogsPerPage;
        const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
        const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
        const totalPages = Math.ceil(blogs.length / blogsPerPage);
        
        return { currentBlogs, totalPages };
    }, [blogs, currentPage, blogsPerPage]);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

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
        <Appbar />
        <div className="flex justify-center">
            <div className="w-[85%]">
                {currentBlogs.map((blog) => (
                    <BlogCard
                        key={blog.id}
                        id={blog.id}
                        authorName={blog.author.name}
                        title={blog.title}
                        content={blog.content}
                        publishedDate={"2nd feb 2023"}
                        onDelete={() => handleDelete(blog.id)}
                    />
                ))}
                
                {totalPages > 1 && (
                    <div className="flex justify-center items-center mt-8 mb-4">
                        <nav className="flex items-center space-x-2">
                            <button
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                                className={`px-3 py-2 text-sm font-medium rounded-lg ${
                                    currentPage === 1
                                        ? 'text-gray-400 cursor-not-allowed'
                                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                                }`}
                            >
                                Previous
                            </button>
                            
                            {[...Array(totalPages)].map((_, index) => {
                                const page = index + 1;
                                return (
                                    <button
                                        key={page}
                                        onClick={() => handlePageChange(page)}
                                        className={`px-3 py-2 text-sm font-medium rounded-lg ${
                                            currentPage === page
                                                ? 'bg-blue-600 text-white'
                                                : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                                        }`}
                                    >
                                        {page}
                                    </button>
                                );
                            })}
                            
                            <button
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className={`px-3 py-2 text-sm font-medium rounded-lg ${
                                    currentPage === totalPages
                                        ? 'text-gray-400 cursor-not-allowed'
                                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                                }`}
                            >
                                Next
                            </button>
                        </nav>
                    </div>
                )}
            </div>
        </div>
    </div>
}

export default Blogs