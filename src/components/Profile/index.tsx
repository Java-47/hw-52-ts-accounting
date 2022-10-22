import React from 'react'
import ProfileData from './ProfileData';
import UpdateUser from './UpdateUser';

const Profile = () => {
    const handleClickLogout = () => {
        //FIXME
        console.log('Logout');
    }
    return (
        <div>
            <ProfileData />
            <button onClick={handleClickLogout}>Logout</button>
            <UpdateUser />
        </div>
    )
}

export default Profile