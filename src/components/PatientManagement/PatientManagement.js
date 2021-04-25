import React, { useReducer, useRef } from 'react';
import { patientReducer, patientState } from '../../reducer/patientReducer';

const PatientManagement = () => {
    const [state, dispatch] = useReducer(patientReducer, patientState);
    const nameRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: 'ADD_PATIENT',
            name: nameRef.current.value,
            id: state.patients.length + 1
        })
        nameRef.current.value = '';
    }

    return (
        <div>
            <h1>Patient Management {state.patients.length}</h1>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} />
            </form>
            {
                state.patients.map(s=><li key={s.id} onClick={()=>dispatch({type:'REMOVE_PATIENT',id:s.id})}>{s.name}</li>)
            }
        </div>
    );
};

export default PatientManagement;