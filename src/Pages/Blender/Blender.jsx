import Footer from "../../Components/Footer";
import ImageSlider from "../../Components/ImageSlider";
import Navbar from "../../Components/Navbar";
import './Blender.css'
export default function Blender() {
    return(
        <>
            <Navbar></Navbar>
            <br></br>
            <br></br>

            <div className="BlenderContainer">

                <div style={{width:"100%"}}>
                    <h1>Blender</h1>
                </div>

                <ImageSlider></ImageSlider>


            </div>               


            <div style={{height:"1040px"}}></div>
            <Footer></Footer>
        </>
    )
}