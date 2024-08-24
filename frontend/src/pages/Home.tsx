import { Appbar } from "../components/Appbar"
import { Link } from "react-router-dom"

export const Home = ()=>{
    return (
        <div className="bg-[#F7F4ED] h-screen border overflow-hidden ">
          <Appbar/>
          <div className="  flex flex-col  ">
            <div className="  flex justify-between gap-10 ">
                <div className="ml-12">
                  <h1 className="font-custom text-9xl font-semibold mb-5 mt-6">Stay curious.</h1>
                  <p className="text-2xl mb-10">
                Discover stories, thinking, and expertise from writers on any topic.
                </p>
                  <Link to={'/signup'}>
                    <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 mt-6 font-medium rounded-full text-xl px-14 py-3">Start Reading</button>
                  </Link>

                </div>
                <img width={600}   src="https://miro.medium.com/v2/format:webp/4*SdjkdS98aKH76I8eD0_qjw.png" alt="" />
            </div>   
          </div>
        </div>
      )
}