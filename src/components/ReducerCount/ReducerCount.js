import React, { useReducer } from 'react';

const initialState={count:0};
const reducer=(state,action)=>{
    switch (action.type) {
        case 'INCREMENT':
          return {count: state.count + 1};
        case 'DECREMENT':
          return {count: state.count - 1};
        default:
          throw new Error();
      }
}
const ReducerCount = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h1>this is reducer {state.count}</h1>
            <button onClick={()=>{dispatch({type:'INCREMENT'})}}>Increment</button>
            <button onClick={()=>{dispatch({type:'DECREMENT'})}}>Increment</button>
        </div>
    );
};

export default ReducerCount;