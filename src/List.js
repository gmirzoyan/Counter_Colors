import React, {useState} from "react";


export default function List(props) {

    const [showEdit, setShowEdit] = useState(false);
    const [userUpdate, setUserUpdate] = useState("");

    const updateShowEdit = () => {
        setShowEdit(!showEdit)
    }

    const updateValueHandler = (e) => {
        setUserUpdate(e.target.value);
    }

    const updateButtonHandler = () => {
        props.updateValue(props.index, userUpdate);
        setUserUpdate("");
        updateShowEdit();
    }

    const buttonHandlerPlus = () => {
        props.counterPlus(props.index);
    };

    const buttonHandlerMinus = () => {
        props.counterMinus(props.index);
    };

    const buttonUp = () => {
        if (props.index === 0) buttonUp.disabled = true
        else props.counterMove(props.index, 'up')
    }

    const buttonDown = () => {
        props.counterMove(props.index, 'down')
    }

    return (
        <div style={{backgroundColor: props.col}}>
            {/*{props.col}*/}
            {' '}
            <button type="button" className="btn btn-secondary btn-sm" onClick={buttonHandlerMinus}>-</button>
            {' '}
            <span className="container alert-light">{props.el.value}</span>
            {' '}
            <button type="button" className="btn btn-secondary btn-sm" onClick={buttonHandlerPlus}>+</button>
            {' '}
            <button type="button" className="btn btn-danger btn-sm"
                    onClick={() => props.deleteCounter(props.index)}>Delete
            </button>
            {' '}
            <button type="button" className="btn btn-secondary btn-sm"
                    onClick={() => props.resetCounter(props.index)}>Reset
            </button>
            {' '}
            <button type="button" className="btn btn-outline-secondary" onClick={buttonUp} disabled={props.first}>⬆
            </button>
            {' '}
            <button type="button" className="btn btn-outline-secondary" onClick={buttonDown} disabled={props.last}>⬇
            </button>
            {' '}
            {showEdit ? <div><input type="text" className='form' onChange={updateValueHandler}
                                    value={userUpdate}/>
                <button type="button" className="btn btn-warning btn-sm" onClick={updateButtonHandler}>Update</button>
            </div> : <button type="button" className="btn btn-secondary" onClick={updateShowEdit}>Edit</button>}
        </div>
    );
}
