import { Quote } from "../components/Quote"
import { Auth } from "../components/Auth"
import { Appbar } from "../components/Appbar"

function Signup() {
  return (
    <div>
        <Appbar/>
        <div className="grid grid-cols-1 lg:grid-cols-2 max-w-[80%] lg:max-w-none mx-auto lg:mx-0">
            <div>
                <Auth type="signup"/>
            </div>
            <div className="hidden lg:block">
                <Quote/>
            </div>
        </div>
    </div>
  )
}

export default Signup