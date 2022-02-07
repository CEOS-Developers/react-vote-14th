import { useReducer } from 'react';

function reducer(state: any, action: any) {
  if (action.type === 'change') {
    //console.log(action);
    return action.target.value;
  } else {
    return '';
  }
}

export default function useInputs(initialForm: any) {
  const [state, dispatch] = useReducer(reducer, initialForm);
  const onChange = (e: any) => {
    dispatch(e);
  };
  return [state, onChange];
}
