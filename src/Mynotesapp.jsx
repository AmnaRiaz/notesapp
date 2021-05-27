import React, { useEffect, useState } from 'react';
import Add from './Add';
import Nav from './Nav';



const getLocalItems = () => {
    let list = localStorage.getItem('lists');
    if (list) {
        return JSON.parse(localStorage.getItem('lists'))
    } else {
        return [];
    }
}


const Mynotesapp = () => {

    const [notes, setnotes] = useState({
        title: "",
        input: "",
    });

    const [mynote, setmynote] = useState(getLocalItems())

    useEffect(() => {
        localStorage.setItem('lists', JSON.stringify(mynote))
    }, [mynote])


    const btnnn = () => {


        setmynote((olddata) => {
            return [...olddata, notes];
        })
    }


    let var1 = "";
    let var2 = "";

    const input = (event) => {
        const { name, value } = event.target;
        setnotes((newdata)=>{
            return {
                ...newdata,
                [ name] : value 
            }
        })
    }


    const Del = (id) => {
        setmynote((prevdata) =>
            prevdata.filter((abc, indexx) => {
                return indexx !== id;
            })
        )
    }




    return (
        <div className="backg" >
            <Nav />
            <div className="main">
                <div className="head">
                    <h1 className="head2">  </h1>
                </div>
                <div className="second">
                    <input onChange={input}
                        className="input1"
                        value={notes.title}
                        type="text"
                        name="title"
                        placeholder=" Add Notes Title"
                        autoComplete="off" />
                    <p>
                        <textarea className="ftextrea"
                            onChange={input}
                            value={notes.input}
                            name="input"
                            placeholder="Take a note..." rows="3"
                            spellcheck="false"></textarea>
                    </p>
                    <button onClick={btnnn} className="btnn"> + </button>
                </div>
                <div>
                    {mynote.map((predata, index) => {
                        return <Add
                            key={index}
                            id={index}
                            show={predata.title}
                            note={predata.input}
                            onSelect={Del}
                        />
                    })
                    }
                </div>
            </div>
        </div>
    );
}

export default Mynotesapp;