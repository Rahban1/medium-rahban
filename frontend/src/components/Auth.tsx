import { SignupInput } from "@rahban/medium-common";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
import { BACKEND_URL } from "../config";

export const Auth = ({type} : {type: "signup" | "signin"})=>{
    const navigate = useNavigate()
    const [postInputs,setPostInputs] = useState<SignupInput>({
        name: "",
        email: "",
        password: "" 
    });

    async function sendRequest() {
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type==='signup' ? "signup" : "signin"}`,postInputs)
            const jwt = response.data.jwt;
            localStorage.setItem("token",jwt);
            navigate('/blogs');
        } catch(e){
            alert('error while signing up')
        }
    }

    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div>
                <div className="px-10 text-center">
                    <div className="text-3xl font-extrabold">
                        {type === "signup" ? "Create an account" : "Sign in Account"}
                    </div>
                    <div className="text-slate-500">
                        {type === "signin" ?"Don't have an account": "Already have an account?"}
                        <Link className="pl-2 underline" to={type === "signup" ? "/signin" : "/signup"}>{type === "signin" ? "Sign up" : "Sign in"}</Link>
                    </div>
                </div>
                <div className="pt-4">
                    {type ==="signup" ? <LabelledInput label="Name" placeholder="Your name here" onChange={(e)=>{
                        setPostInputs({
                            ...postInputs,
                            name: e.target.value
                        })
                    }}/>:null}
                    <LabelledInput label="Email" placeholder="Your email here" onChange={(e)=>{
                        setPostInputs({
                            ...postInputs,
                            email: e.target.value
                        })
                    }}/>
                    <LabelledInput label="password" type={"password"} placeholder="Your password here" onChange={(e)=>{
                        setPostInputs({
                            ...postInputs,
                            password: e.target.value
                        })
                    }}/>
                </div>
                <button onClick={sendRequest} type="button" className="mt-7 p-3 text-md w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full px-5 py-2.5 me-2 mb-2 ">{type === "signup" ? "Sign up" : "Sign in"}</button>

            </div>
        </div>
    </div>
}

interface LabelledInputType {
    label: string;
    placeholder: string;
    onChange: (e: any)=>void;
    type?: string;
}

function LabelledInput({placeholder,type, label, onChange} : LabelledInputType){
    return <div>
    <label className="block mb-2 text-sm text-black font-semibold pt-2">{label}</label>
    <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
</div>
}