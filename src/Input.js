import React, {useState} from 'react';

export default function Input({inputVal, setInputVal}) {

  const changeInput = evt => {
    // When the input changes, its whole value can be found inside the event object.
    // Log out the synthetic event object 'evt' and see for yourself.
    const { value } = evt.target;
    
    /* STEP 4 */
    setInputVal(value);
  };
  const reset = () => {
    // Set the input value in state to be empty string. The reset still won't work, though! See the next step.
    setInputVal('');
  };
  
  // Color is crimson if the length of 'inputValue' goes over 2.
  const style = {
    fontSize: '1.5em',
    marginBottom: '0.3em',
    color: inputVal > 2 ? 'crimson' : 'black'
  };

  return (
    <div className='widget-input container'>
      <div>
        { /* For the input to reset correctly, it needs to "drink" its value from state! */ }
        { /* We need to add an extra prop to the <input /> element like so: value={inputValue} */ }
        <input id='input' type='text' onChange={changeInput} value={inputVal} />
        <button id='resetInput' onClick={reset} style={style}>Reset</button>
      </div>
    </div>
  );
}