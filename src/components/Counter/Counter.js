import React, {Fragment} from 'react';
import './Counter.css';


const Counter = (props) => {
    return (  
        <Fragment>
            <div className="mt-5">
                <div className=" Counter border border-primary bg-light rounded">
                    <div className="d-flex bg-light text-secondary">
                            <div className="TickerDisplay">{ props.ticker} </div>
                    </div>
                    <div className="Buttons d-flex flex-row border bordar-warning">
                        <button className="btn btn-primary w-100" onClick ={props.increment}> <i className="fa fa-plus fa-2x"></i></button>
                        <button className="btn btn-warning w-100" onClick = {props.resetCounter}> <i className="fa fa-sync-alt fa-2x"></i></button>
                        <button className="btn btn-danger w-100" onClick= {props.decrement}> <i className="fa fa-minus fa-2x"></i> </button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
 
export default Counter;