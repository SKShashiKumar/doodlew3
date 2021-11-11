import Aboutme from "./Aboutme";
import Maincol from "./Maincol";
import Slide from "./Slide";

const Content = () => {
    return ( 
        <>
            <Maincol/>
            <br />
            <Maincol/>
            <br />
            <Slide/>
            <br />
            <hr/>
            <br />
            <Aboutme/>
            <br/>
            <hr/>
        </>
     );
}
 
export default Content;