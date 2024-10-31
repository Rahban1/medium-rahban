import { Appbar } from "../components/Appbar"
import { Link } from "react-router-dom"

export const Home = ()=>{
    return (
        <main className="bg-[#F6F4ED] ">
          <Appbar/>
          <div className=" flex  justify-center items-center w-full h-screen">
            <div className="max-w-[80%] md:max-w-non">
              <h1 className="text-7xl font-extrabold font-custom">Human stories & ideas</h1>
              <h3 className="my-3 text-xl font-custom2 ">A place to read, write and deepen your understanding</h3>
              <button className="bg-green-700 md:bg-black text-white text-center text-xl md:text-3xl rounded-full px-10 py-2 my-4">Start reading</button>
            </div>
          </div>
        </main>
      )
}