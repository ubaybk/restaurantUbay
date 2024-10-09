import axios from "axios"
import { useState } from "react"
import { useParams } from "react-router-dom"

const EditMenu = () => {
    const { id } = useParams()
    const [formEditMenu, setFormEditMenu] = useState({
       name : "",
       description: "",
       price: "",
       type: "",
       imageUrl: ""
    })

    const handleSave = () => {
        axios
            .put(`https://api.mudoapi.site/menu/${id}`)
            .then((res)=> {

            })
    }

    const handleChange = (e) => {
        setFormEditMenu({
            ...formEditMenu,
            [e.target.name]: e.target.value
            
        })
        console.log(e.target.value)
    }

    return(
        <>
            <div className="flex flex-col">
                <input type="text" onChange={handleChange} name="name" placeholder="name" />
                <input type="text" onChange={handleChange} name="description" placeholder="description" />
                <input type="text" onChange={handleChange} name="price" placeholder="price" />
                <input type="text" onChange={handleChange} name="type" placeholder="type" />
                <input type="text" onChange={handleChange} name="imageUrl" placeholder="imageUrl" />
                <button>save</button>
            </div>
           
        </>
    )
}
export default EditMenu
