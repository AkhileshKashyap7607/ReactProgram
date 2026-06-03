import React, { useState } from 'react'

function ControlledComponent() {

    const [getName, setName] = useState("");
    const [getEmail, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        alert(
            `Registration Form submitted : Name : ${getName} , Email : ${getEmail}`
        );
    };

    return (
        <div>
            <h1>Controlled Component</h1>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="Enter Name"
                    value={getName}
                    onChange={(e) => setName(e.target.value)}
                />

                <br /><br />

                <input
                    type="email"
                    placeholder="Enter email"
                    value={getEmail}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <br /><br />

                <button type="submit">Submit</button>

            </form>
        </div>
    )
}

export default ControlledComponent