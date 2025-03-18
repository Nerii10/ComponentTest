import Footer from "../../Components/Footer";
import ImageSlider from "../../Components/ImageSlider";
import Navbar from "../../Components/Navbar";

export default function Error404() {
    return(
        <>
            <Navbar></Navbar>
            <br></br>
            <br></br>

            <div className="BlenderContainer">

                <div style={{width:"100%"}}>
                    <h1>This is not a page you are looking for</h1>
                </div>



            </div>               


            <div style={{height:"1040px"}}></div>
            <Footer></Footer>
        </>
    )
}