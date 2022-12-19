import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { DataCtx } from "../context/SaveData/SaveData"
const SignOut = () => {
    const { signOut } = useContext(DataCtx)
    const navigate = useNavigate()
    useEffect(() => {
        signOut()
        setTimeout(() => {
            navigate('/Signin')
        }, 2000)
    }, [])
    return (
        <div className="text-center my-5">
            <h1 style={{
                fontSize:"20pt",
                display:"flex",
                flexDirection:"column",
                textAlign:"center",
                justifyContent:"center",
                height:"100%",
                width:"100%"
            }}>see you later</h1>
        </div>
    )
}

export default SignOut