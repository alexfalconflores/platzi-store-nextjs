import React from 'react';
import '../styles/CreateAccount.scss';

const CreateAccount = () => {
    return (
        <div className="CreateAccount">
            <div className="CreateAccount-container">
                <h1 className="title">My account</h1>
                <form action="/" className="form">
                    <div>
                        <label htmlFor="name" className="label">
                            Name
                        </label>
                        <input type="text" id="name" placeholder="Alex Falcon" className="input input-name" />
                        <label htmlFor="email" className="label">
                            Email Address
                        </label>
                        <input type="password" id="text" placeholder="mail@mail.com" className="input input-email" />
                        <label htmlFor="new-password" className="label">
                            Password
                        </label>
                        <input type="password" id="new-password" placeholder="*******" className="input input-password" />
                    </div>
                    <input type="submit" value="Create" className="primary-button login-button" />
                </form>
            </div>
        </div>
    );
};

export default CreateAccount;
