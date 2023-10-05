import React, { useState, useEffect } from "react";
import { sendMail } from "../Componets/SendMail";


const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    

    const handleSubmit = (e) => {
        e.preventDefault();
    }


    return (
        <div className="form">
            <form onSubmit={() => sendMail(email)}>
                <div>
                    <label>Name:</label>
                    <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                </div>
                <div>
                    <label>Message:</label>
                    <textarea
                    type="text"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows='10'
                    required
                    />
                </div>
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
};


export default Contact;