import { Appbar } from "../components/Appbar"
import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <div className="bg-[#F7F4ED] min-h-screen overflow-x-hidden">
      <Appbar />
      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-12">
          <div className="text-center lg:text-left lg:max-w-2xl">
            <h1 className="font-custom text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold mb-4 md:mb-6">
              Stay curious.
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8">
              Discover stories, thinking, and expertise from writers on any topic.
            </p>
            <Link to={'/signup'}>
              <button
                type="button"
                className="text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-full text-base sm:text-lg md:text-xl px-8 sm:px-10 md:px-14 py-2 sm:py-3"
              >
                Start Reading
              </button>
            </Link>
          </div>
          <div className="mt-8 lg:mt-0 w-full max-w-md lg:max-w-lg xl:max-w-xl">
            <img
              className="w-full h-auto object-cover rounded-lg shadow-lg "
              src="https://miro.medium.com/v2/format:webp/4*SdjkdS98aKH76I8eD0_qjw.png"
              alt="Decorative image"
            />
          </div>
        </div>
      </div>
    </div>
  )
}