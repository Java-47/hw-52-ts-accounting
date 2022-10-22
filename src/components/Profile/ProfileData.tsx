import React from 'react'

const ProfileData = () => {
    const user = {
        "login": "user-john",
        "firstName": "John",
        "lastName": "Smith",
        "roles": [
            "User"
        ]
    }
    return (
        <div>
            <p>First name: {user.firstName}</p>
            <p>Last name: {user.lastName}</p>
            <ul>
                {user.roles.map(r => <li key={r}>{r}</li>)}
            </ul>
        </div>
    )
}

export default ProfileData