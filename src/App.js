import React, {useState} from "react";
import List from "./List";
import sorting from "./sorting.jpg"
import sorting1 from "./images.png"

export default function App() {
    // const initialCounter = [
    //   {id: 1, value: 37, color: 'yellow'},
    //   {id: 5, value: 57, color: 'orange'},
    // ]

    const [counter, setCounter] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [inputColors, setInputColors] = useState("#FFC300");

    const updateValue = (index, newValue) => {
        const result = counter.map((el, i) => {
            if (index === i) el.value = newValue;
            return el;
        });
        setCounter(result);
    };

    const addNewCounter = (inputColors, value) => {
        const result = [...counter];
        result.push({id: Math.random(), value: inputValue, color: inputColors})
        setCounter(result);
    };

    const deleteCounter = (index) => {
        const result = counter.filter((el, i) => {
            if (index !== i) return true;
        });
        setCounter(result);
    };

    const resetCounter = (index) => {
        const result = counter.map((el, i) => {
            if (index === i) el.value = 0;
            return el;
        });
        setCounter(result);
    }

    const counterPlus = (index) => {
        const result = counter.map((el, i) => {
            if (index === i) el.value++;
            return el;
        });
        setCounter(result);
    };

    const counterMinus = (index) => {
        const result = counter.map((el, i) => {
            if (index === i) el.value--;
            return el;
        });
        setCounter(result);
    };

    const counterMove = (index, dir) => {
        const result = [...counter]
        for (let i = 0; i < result.length; i++) {
            if (index === i) {
                let temp = result[i];
                if (dir === 'up') {
                    result[i] = result[i - 1];
                    result[i - 1] = temp;
                }
                if (dir === 'down') {
                    result[i] = result[i + 1];
                    result[i + 1] = temp;
                }
            }
        }
        setCounter(result);
    }

    const inputValueHandler = (e) => {
        setInputValue(e.target.value);
    };

    const inputColorHandler = (e) => {
        setInputColors(e.target.value);
    };

    const addButtonHandler = () => {
        addNewCounter(inputValue);
        addNewCounter(inputColors);
        setInputValue("");
        setInputColors("");
    };

    const deleteAll = () => {
        setCounter([]);

    }

    const resetAll = () => {
        const result = counter.map(el => el = {id: el.id, value: 0, color: el.color});
        setCounter(result);
    }

    const sortCounters = () => {
        const result = [...counter]
        result.sort((a, b) => a.value - b.value)
        setCounter(result)
    }

    const sortCounters1 = () => {
        const result = [...counter]
        result.sort((a, b) => b.value - a.value)
        setCounter(result)
    }

    return (
        <div className="container alert alert-success">
            <h4>COUNTER</h4>

            <label>color:</label>
            {' '}
            <input type="color" style={{width: 35, height: 35, padding: 5}} onChange={inputColorHandler}
                   value={inputColors}/>
            {' '}
            <input type="number" placeholder='value' onChange={inputValueHandler}
                   value={inputValue}/>
            {' '}
            <button type="button" className="btn btn-warning" onClick={addButtonHandler}>Add new</button>
            {' '}
            <button type="button" className="btn btn-danger" onClick={deleteAll}>Delete all</button>
            {' '}
            <button type="button" className="btn btn-secondary" onClick={resetAll}>Reset all</button>
            {' '}
            <button type="button" className="btn btn-outline-secondary" onClick={sortCounters}>Sort <img src={sorting}
                                                                                                         width='25'
                                                                                                         height='25'/>
            </button>
            {' '}
            <button type="button" className="btn btn-outline-secondary" onClick={sortCounters1}>Sort <img src={sorting1}
                                                                                                         width='25'
                                                                                                         height='25'/>
            </button>
            <hr/>
            {counter.map((el, i) => (
                <List
                    el={el}
                    col={el.color}
                    counterPlus={counterPlus}
                    counterMinus={counterMinus}
                    index={i}
                    deleteCounter={deleteCounter}
                    resetCounter={resetCounter}
                    counterMove={counterMove}
                    first={i === 0}
                    last={i === counter.length - 1}
                    updateValue={updateValue}
                />
            ))}
        </div>
    );
}
