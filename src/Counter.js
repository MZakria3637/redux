import React, { useReducer } from 'react'
import { reducer, initialState } from './reducer';
function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState)
    // another way to passing initialize state
    // const [state, dispatch] = useReducer(
    //     reducer,
    //     {count: initialCount}
    //   );

    return (
        <>
            Count:{state.count}
            <button onClick={() => {
                dispatch({ type: "increment" })
            }}>Increment</button>
            <button onClick={() => dispatch({ type: "decrement" })}> Decrement </button>

        </>
    )
}

export default Counter
