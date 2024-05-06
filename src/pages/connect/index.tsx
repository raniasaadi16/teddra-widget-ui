import { Spin } from "antd";
import React, { useState } from "react";
import { Form } from "antd";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router";



export default function Login() {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<any>(null);
  const [loading, setloading] = useState(false);
  const navigate = useNavigate()
  const submitForm = (event:any) => {
      event.preventDefault()
        setErrors('')
        setloading(true)
       
        signInWithEmailAndPassword(auth , email, password).then( user => {
          
            navigate('/')

         
        }).catch(err => setErrors('Invalid credentials')).finally(() => setloading(false))
  };

 

 
  return (
    <div className="py-8 w-full h-full flex items-center justify-center">
      
        <div className="space-y-1.5">
            {errors && <p className='text-teddra-red'>{errors}</p>}
            <p className="font-bold text-[24px]">Login</p>
            <input
            type="email"
            placeholder="Email"
            className={`rounded py-2 px-3 block w-[260px] border border-main`}
            value={email}
            onChange={(e) => {
                setEmail(e.target.value);
                setErrors(null);
            }}
            required
            />
        
    
            <input
            type="password"
            placeholder="Password"
            className="rounded py-2 px-3 block w-[260px] border border-main"
            value={password}
            onChange={(e) => {
                setPassword(e.target.value);
                setErrors(null);
            }}
            required
            />

        <Spin spinning={loading}>
            <button
            className="px-4 rounded-sm py-1.5 bg-teddra-gray-100 block w-max ml-auto disabled:text-teddra-gray-200"
            type="submit"
            disabled={loading}
            onClick={submitForm}
            >
            Send
            </button>
        </Spin>

        </div>

    </div>
  );
}
