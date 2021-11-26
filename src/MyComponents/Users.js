import React from 'react';

export const Users = ({ users }) => {
    console.log("Users.js");
    let imgStyle = {
        width: "12rem",
        height: "10rem"
    }
    let cardstyle = {
        width: "30rem",
        height: "10rem"
    }
    return (
        <div>
            {users?.map((user) => (
                <div className="container">
                    <div className="card myClass2" style={cardstyle}>
                        <img src={user.avatar} className="card-img-top" alt="..." style={imgStyle} />
                        <div className="card-body">
                            <h3 className="card-title center">
                                {user.first_name} {user.last_name}
                            </h3>
                            <h4 className="center">{user.email}</h4>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
