import { Link } from "react-router-dom";

interface BlogCardProps {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
    id: string;
}

export const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate
}:BlogCardProps) =>{
    return <Link to={`/blog/${id}`}>
     <div className="border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
        <div className="max-w-[80%] mx-auto my-2">
            <div className="flex">
                <Avatar name={authorName} />
                <div className="flex flex-col justify-center font-extralight pl-2 text-sm">{authorName}</div> 
                <div className="flex pl-2 flex-col justify-center">
                    <Circle/>
                </div>
                <div className="flex flex-col justify-center text-sm pl-2 font-thin text-slate-500">
                    {publishedDate}
                </div>
            </div>
            <div className="text-xl font-semibold pt-2">
                {title}
            </div>
            <div className="text-md font-thin">
                {content.slice(0,100) + "..."}
            </div>
            <div className="text-slate-400 text-sm font-thin pt-4">
                {`${Math.ceil(content.length / 100)} minute(s) read`}
            </div>
        </div>
    </div>
    </Link>
}

export function Circle(){
    return <div className="h-1 w-1 rounded-full bg-slate-400">

    </div>
}

export function Avatar({ name }: { name: string }){
    return <div
        className="relative inline-flex items-center justify-center w-11 h-11 overflow-hidden bg-gray-600 rounded-full">
        <span className="text-md text-gray-600 dark:text-gray-300">{name[0].toUpperCase()}</span>
    </div>
    
}