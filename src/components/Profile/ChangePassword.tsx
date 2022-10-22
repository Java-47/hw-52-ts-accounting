import React, { useState } from 'react'

interface Props {
    close: () => void
}


const ChangePassword = ({close}: Props) => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [repPassword, setRepPassword] = useState('');

  const handleClickClear = () => {
    setOldPassword('');
    setNewPassword('');
    setRepPassword('');
}
const handleClickSaveAndClose = ()=>{
  //FIX
  close();
}
const handleClickSaveWithoutClose = ()=>{
  close();

}
  return (
    <div>
    <p>
    <label>Old password:<input type={'password'}
                    onChange={e => setOldPassword(e.target.value)}
                    value={oldPassword}/></label>
    <label>new password:<input type={'password'}
                    onChange={e => setNewPassword(e.target.value)}
                    value={newPassword}/></label>
    <label>repeat new password:<input type={'password'}
                    onChange={e => setRepPassword(e.target.value)}
                    value={repPassword}/></label>
    </p>
    <p>
      <button onClick={handleClickSaveAndClose}>Save & Close</button>
      <button onClick={handleClickSaveWithoutClose}>Close without save</button>
      <button onClick={handleClickClear}>Clear</button>
    </p>
    </div>
  
  )
}

export default ChangePassword