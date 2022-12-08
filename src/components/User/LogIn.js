import React, { useState } from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

function Login({ setUser, user }) {

    const [member, setMember] = useState(false)

    return (
        <div className="container">
            <div className="header">
                <h1 className ="d-flex justify-content-center">My Project App</h1>
            </div>
            <div>
                <div>
                    {member ? (
                    <div>
                        <h2 className="d-flex justify-content-center">Sign In</h2>
                        <SignIn setUser={setUser} setMember={setMember} />
                    </div>
                    ) : (
                    <div>
                        <h2>Sign Up</h2>
                        <SignUp setUser={setUser} user={user} setMember={setMember} />
                    </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Login;
