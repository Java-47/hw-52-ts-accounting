import React, { useState } from 'react'

interface Props {
    close: () => void
}

const EditUser = ({close}: Props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  
  const handleClickSaveAndClose = ()=>{
    //FIX
    close();
  }
  const handleClickSaveWithoutClose = ()=>{
    close();
  }
  const handleClickClear = () => {
    setFirstName('');
    setLastName('');
}
  return (
    <div>
    <p>
    <label>First Name:<input type={'text'}
                    onChange={e => setFirstName(e.target.value.trim())}
                    value={firstName}/></label>
    <label>Last Name:<input type={'text'}
                    onChange={e => setLastName(e.target.value.trim())}
                    value={lastName}/></label>
    </p>
    <p>
      <button onClick={handleClickSaveAndClose}>Save & Close</button>
      <button onClick={handleClickSaveWithoutClose}>Close without save</button>
      <button onClick={handleClickClear}>Clear</button>
    </p>
    </div>
  )
}

export default EditUser