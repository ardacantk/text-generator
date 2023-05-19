import { useEffect } from 'react'

import { getText } from '../redux/textSlice';
import { useDispatch, useSelector } from 'react-redux';

function TextArea() {
    const dispatch = useDispatch();
    const { count, text, format } = useSelector((state) => state.texts)

    useEffect(() => {
        dispatch(getText({ count, format }))
    }, [dispatch, count, format]);

    const copyText = async () => {
        await navigator.clipboard.writeText(text);
        alert('Text copied');
    }

    return (
        <>
            <div style={{ backgroundColor: "#303030" }}>
                <div className='d-flex justify-content-end me-5' id='coppyBtn' style={{ backgroundColor: "#303030" }}>
                    <button 
                    type='button' 
                    className='btn-clipboard mt-4' 
                    aria-label="Copy to clipboard"
                    onClick={copyText}
                    >
                        Copy
                    </button>
                </div>
                <div>
                    <p style={{ textAlign: "left" }} className='p-5'>
                        {
                            text
                        }
                    </p>
                </div>
            </div>
        </>
    )
}

export default TextArea

/*
Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa magni laboriosam beatae, eum corrupti reiciendis impedit omnis voluptas ad commodi officia pariatur quam quis placeat tempora nulla nesciunt deleniti adipisci.
*/