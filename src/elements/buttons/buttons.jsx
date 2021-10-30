import "./buttons.css";
import { FiRefreshCw } from "react-icons/fi";
import { FaRecycle } from "react-icons/fa";
import { MdAddCircle } from "react-icons/md";
import { AiFillMinusCircle } from "react-icons/ai";
import { RiDeleteBinFill } from "react-icons/ri";
import { IncrementCounter, DecrementCounter, DeleteCounter, Refresh, Recycle } from "../../action";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import RowCounter from "../row_counter/row_counter";

const Buttons = () => {
    const rowTotal = 0;
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setTotal(rowTotal);
    });

    const counter = useSelector(state => state.counter);
    const refRec = useSelector(state => state.refresh_recycle);
    const dispatch = useDispatch();

    const arr = [1, 2, 3, 4];

    return (
        <div className="buttonPage">
            <div className="refreshButtons">
                <button className="refresh" onClick={() => dispatch(Refresh())}><FiRefreshCw color="white" size="21px" /></button>
                <button className="recycle" onClick={() => dispatch(Recycle())}><FaRecycle color="white" size="21px" /></button>
            </div>
            {arr.map((value) => <div key={value} className="buttonSet">
                <div className="zero"><RowCounter></RowCounter></div>
                <div className="actionButtons">
                    <div>
                        <button className="add" onClick={() => dispatch(IncrementCounter())}><MdAddCircle size="21px" color="white" /></button>
                    </div>
                    <div>
                        <button className="subtract" onClick={() => dispatch(DecrementCounter())}><AiFillMinusCircle size="21px" color="white" /></button>
                    </div>
                    <div>
                        <button className="delete" onClick={() => dispatch(DeleteCounter())}><RiDeleteBinFill size="21px" color="white" /></button>
                    </div>
                </div>
            </div>
            )}
        </div>
    );
}

export default Buttons;