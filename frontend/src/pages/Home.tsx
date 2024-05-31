import { Appbar } from "../components/Appbar"
import { Link } from "react-router-dom"

export const Home = ()=>{
    return (
        <div>
          <Appbar/>
          <div className=" px-12 flex flex-col py-12">
            <div className="pt-6 text-8xl font-semibold">
                <h1>Stay curious.</h1>
            </div>
            <div className="py-4 text-2xl opacity-70">
                <p>
                Discover stories, thinking, and expertise from writers on any topic.
                </p>
            </div>
            <div className=" pt-28">
                <Link to={'/signup'}>
                    <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-xl px-14 py-2 me-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Start Reading</button>
                </Link>            
            </div>
          </div>
        </div>
      )
}