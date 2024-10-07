import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Navbar from "../../components/Navbar"

const DetailMenu = () => {
    const {id} = useParams()
    const [dataDetailMenu, setDataDetailMenu] = useState([])

    const getDetailMenu = () => {
        axios
            .get(`https://api.mudoapi.site/menu/${id}`)
            .then((res)=> setDataDetailMenu(res.data.data))
            .catch((err)=> console.log(err))
    }

    useEffect(()=> {
        getDetailMenu()
    },[])
    return(
        <>
        <Navbar/>
        <div className="flex flex-col items-center justify-center h-screen ">
            <h1>{dataDetailMenu.name}</h1>
            <img src={dataDetailMenu.imageUrl} className="w-56" alt="" />
        </div>
       
        </>
    )
}
export default DetailMenu