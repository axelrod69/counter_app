import "./row_counter.css";
import { useSelector } from "react-redux";

const RowCounter = () => {
    const counter = useSelector(state => state.counter);

    return (
        <div>
            {counter < 1 ? <div className="rowCounter">
                Zero
            </div> :
                <div className="rowCounter1">
                    {counter}
                </div>
            }
        </div>
    );
}

export default RowCounter;