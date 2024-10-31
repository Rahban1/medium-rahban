import { Appbar } from "../components/Appbar"
import { Auth } from "../components/Auth"
import { Quote } from "../components/Quote"


function Signin() {
  return (
    <div>
        <Appbar/>
        <div className="grid grid-cols-1 lg:grid-cols-2 max-w-[80%] lg:max-w-none lg:mx-0 mx-auto">
            <div>
                <Auth type="signin"/>
            </div>
            <div className="hidden lg:block">
                <Quote/>
            </div>
        </div>
    </div>
  )
}

export default Signin