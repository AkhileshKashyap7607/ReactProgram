import React, { useRef } from 'react'

function UncontrolledComponent() {

    const usernameRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = (e) => {

        e.preventDefault();

        alert(
            "Username : " + usernameRef.current.value +
            " Password : " + passwordRef.current.value
        );
    }

    return (
        <div>

            <form onSubmit={handleSubmit}>

                <h2>User Registration Form</h2>

                <input
                    type="text"
                    placeholder="Enter Username"
                    ref={usernameRef}
                />

                <br /><br />

                <input
                    type="password"
                    placeholder="Enter Password"
                    ref={passwordRef}
                />

                <br /><br />

                <button type="submit">Submit</button>

            </form>

        </div>
    )
}

export default UncontrolledComponent