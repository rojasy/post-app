import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Register(){

    const navigate = useNavigate()

    const [formData,setFormData] = useState({
        username: '',
        email:'',
        password:''
    });

    async function handleRegister(e){
        e.preventDefault()

        const res = await fetch("/api/user/signup",{
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
            <h1 className="title">Register your account</h1>

            <form onSubmit={handleRegister} className="w-1/2 mx-auto space-y-6">
                <div>
                    <input type="text" placeholder="Username" 
                    value={formData.username} 
                    onChange={(e)=>setFormData({...formData,username:e.target.value})} />
                </div>
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
                <button className="primary-btn">Register</button>
            </form>
        </>
    )
}