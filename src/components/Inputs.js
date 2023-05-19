import { useState } from 'react';
import { useSelector } from "react-redux";

import { useDispatch } from 'react-redux';

import { updateCount, updateFormat } from '../redux/textSlice';

function Inputs() {
    const dispatch = useDispatch();
    const count = useSelector(state => state.texts.count)

    const handleChange = (e) => {
        dispatch(updateCount(e))
    }

    const handleSelect = (e) => {
        dispatch(updateFormat(e))
    }

    return (
        <div>
            <form>
                <fieldset className='d-flex'>
                    <div className="mb-31 me-5">
                        <label htmlFor="textInput" className="form-label">Paragraphs</label>
                        <input
                            type="number"
                            id="textInput"
                            className="form-control"
                            value={count}
                            onChange={(e) => handleChange(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="selectFrm" className="form-label">Include HTML</label>
                        <select onChange={(e) => handleSelect(e.target.value)} id="disabledSelect" className="form-select">
                            <option value="text">No</option>
                            <option value="html">Yes</option>
                        </select>
                    </div>
                    <div className="mb-3">
                    </div>
                </fieldset>
            </form>
        </div>
    )
}

export default Inputs
