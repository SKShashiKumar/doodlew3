import Aboutme from "./Aboutme";
import Maincol from "./Maincol";
import Slide from "./Slide";

const Content = () => {
    return ( 
        <>
            <Maincol/>
            <Maincol/>
            <Slide/>
            <hr color='gray'/>
            <Aboutme/>
            <br/>
            <hr color='gray'/>
        </>
     );
}
 
export default Content;