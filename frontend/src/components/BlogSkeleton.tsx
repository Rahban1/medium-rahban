import { Circle } from "./BlogCard"

export const BlogSkeleton = () => {
    return (
        <div role="status" className="animate-pulse flex justify-center">
            <div className="border w-full max-w-screen-md border-slate-200 pb-6 cursor-pointer px-4 md:px-0">
                <div className="w-full md:max-w-[90%] mx-auto my-4">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                        <div className="flex items-center space-x-2">
                            <div className="h-4 bg-gray-200 rounded-full w-24"></div>
                            <Circle />
                            <div className="h-4 bg-gray-200 rounded-full w-20"></div>
                        </div>
                    </div>
                    <div className="mt-4 space-y-2">
                        <div className="h-8 bg-gray-200 rounded-lg w-3/4"></div>
                        <div className="space-y-2">
                            <div className="h-4 bg-gray-200 rounded-full w-full"></div>
                            <div className="h-4 bg-gray-200 rounded-full w-2/3"></div>
                        </div>
                        <div className="pt-3">
                            <div className="h-4 bg-gray-200 rounded-full w-32"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}