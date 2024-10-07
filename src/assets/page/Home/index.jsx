import { Link } from "react-router-dom"
import Navbar from "../../components/Navbar"


Link
const Home = () => {
    return(
        <>
        <Navbar />
        <div className="relative">
            <div className="absolute top-0 right-0  ">

            <img src="./asset/img/bg1.png" className="w-80" alt="" />
            </div>

            <div className="flex justify-center items-center">
                <div className="flex flex-col gap-8">
                    <h1>Warung Makanan ku</h1>
                    <button className="border-2 px-2 rounded-xl border-[#FF9A3D]">Pesan yuk</button>
                </div>
                <div>
                    <img src="./asset/img/hero.png" alt="" />
                </div>
            </div>
        </div>
        </>
    )
}
export default Home