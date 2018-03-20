import React from 'react';
import {connect} from 'react-redux';
import store from './store/store';

function Counter(props){
    return(
        <div>
            <button onClick={props.increment}> Increment</button>
            <p>{props.count}</p>
            <button onClick={props.decrement}> Decrement</button>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        count:state.count
    }
}


const mapDispatchToProps=(dispatch)=>{
    return{        
        increment:(e)=>{
            const action={
                type:'INCREMENT'
            }
            dispatch(action);            
        },
        decrement:(e)=>{
            const action={
                type:'DECREMENT'
            }
            dispatch(action);            
        }
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);