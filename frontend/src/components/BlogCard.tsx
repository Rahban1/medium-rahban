import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { toast } from 'react-hot-toast';

interface BlogCardProps {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
    id: string;
    onDelete?: () => void;
}

export const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate,
    onDelete
}: BlogCardProps) => {

    const handleDelete = async (e: React.MouseEvent) => {
        e.preventDefault(); // Prevent navigation
        const loadingToast = toast.loading('Deleting blog...');
        
        try {
            await axios.delete(`${BACKEND_URL}/api/v1/blog/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
            toast.dismiss(loadingToast);
            toast.success('Blog deleted successfully');
            onDelete?.();
        } catch (error) {
            toast.dismiss(loadingToast);
            toast.error('Failed to delete, you can only delete your own blogs');
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
        >
            <Link to={`/blog/${id}`}>
                <div className="border w-full border-slate-200 pb-6 cursor-pointer hover:bg-slate-50 transition-colors duration-200 px-4 md:px-0">
                    <div className="w-full md:max-w-[90%] mx-auto my-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <motion.div whileHover={{ scale: 1.1 }}>
                                    <Avatar name={authorName} />
                                </motion.div>
                                <div className="flex items-center space-x-2">
                                    <span className="font-medium text-sm text-gray-700">{authorName}</span>
                                    <Circle />
                                    <span className="text-sm text-slate-500">
                                        {publishedDate}
                                    </span>
                                </div>
                            </div>
                            <button
                                onClick={handleDelete}
                                className="text-red-500 hover:text-red-700 px-3 py-1 rounded-full hover:bg-red-50 transition-colors"
                            >
                                Delete
                            </button>
                        </div>
                        <motion.div
                            className="mt-4 space-y-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <h2 className="text-xl md:text-2xl font-bold text-gray-800 leading-snug">
                                {title}
                            </h2>
                            <p className="text-md text-gray-600 leading-relaxed">
                                {content.slice(0, 100) + "..."}
                            </p>
                            <div className="flex items-center space-x-4 pt-3">
                                <span className="text-slate-500 text-sm">
                                    {`${Math.ceil(content.length / 100)} minute read`}
                                </span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export function Circle() {
    return <div className="h-1.5 w-1.5 rounded-full bg-slate-400"></div>
}

export function Avatar({ name }: { name: string }) {
    return (
        <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gradient-to-br from-purple-500 to-pink-500 rounded-full">
            <span className="text-sm font-medium text-white">
                {name[0].toUpperCase()}
            </span>
        </div>
    );
}