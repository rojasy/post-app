import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Login(){

    const navigate = useNavigate()

    const [formData,setFormData] = useState({
        email:'',
        password:''
    });

    async function handleLogin(e){
        e.preventDefault()

        const res = await fetch("/api/user/login",{
            method:"POST",
            body: JSON.stringify(formData)
        });

        const data = await res.json()

        if(res.status === 201){
            navigate("/")
        }

        console.log(data)
    }


    return(
        <>
            <h1 className="title">Login to your account</h1>

            <form onSubmit={handleLogin} className="w-1/2 mx-auto space-y-6">
        
                <div>
                    <input type="text" placeholder="Email" 
                    value={formData.email} 
                    onChange={(e)=>setFormData({...formData,email:e.target.value})}/>
                </div>
                <div>
                    <input type="password" placeholder="Password" 
                    value={formData.password} 
                    onChange={(e)=>setFormData({...formData,password:e.target.value})}/>
                </div>
                <button className="primary-btn">Login</button>
            </form>
        </>
    )
}