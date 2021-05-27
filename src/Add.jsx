import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Add = (props) => {

    return (
        // <div className="shownote">
        // <h1>  {props.show} </h1>
        // <p> {props.note}</p>
        // <button onClick={()=>{
        //     props.onSelect(props.id)
        // }} className="btn2">  -  </button>
        // </div>
        <div className="card" >
            <div className="card-body">
                <h5 className="card-title"> {props.show}</h5>
                <p className="card-text"> {props.note}</p>
                <button onClick={() => {
                    props.onSelect(props.id)
                }} className="btn2">  -  </button>
            </div>
        </div>
    )
}

export default Add;