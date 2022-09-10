import React from 'react';
import '../styles/MyAccount.scss';

const MyAccount = () => {
    return (
        <div className="MyAccount">
            <div className="MyAccount-container">
                <h1 className="title">My account</h1>
                <form action="/" className="form">
                    <div>
                        <label htmlFor="name" className="label">Name</label>
                        <p className="value">Alex Falcon</p>
                        <label htmlFor="email" className="label">Email Address</label>
                        <p className="value">mail@mail.com</p>
                        <label htmlFor="new-password" className="label">Password</label>
                        <p className="value">*********</p>
                    </div>
                    <input type="submit" value="Edit" className="secondary-button login-button" />
                </form>
            </div>
        </div>
    );
}

export default MyAccount;