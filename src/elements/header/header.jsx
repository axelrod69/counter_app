import "./header.css";
import {ImCart} from "react-icons/im";
import { useSelector } from "react-redux";

const Header = () => {
    const counter = useSelector(st => st.counter);

    return(
        <div className="header">
            <div><ImCart size="25px"/></div>
            <div className="counterDisplay">{counter}</div>
            <div>Items</div>
        </div>
    );
}

export default Header;