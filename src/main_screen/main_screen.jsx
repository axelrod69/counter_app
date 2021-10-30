import "./main_screen.css";
import Header from "../elements/header/header";
import Buttons from "../elements/buttons/buttons";

const MainScreen = () => {    
    return(
        <div className="mainScreen">
            <Header></Header>
            <Buttons></Buttons>
        </div>
    );
}

export default MainScreen;