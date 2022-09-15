import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import logo from '@logos/logo_yard_sale.svg';
import email from '@icons/email.svg';
import '../styles/SendEmail.scss';

const SendEmail = () => {
    return (
        <div className="SendEmail">
            <div className="SendEmail-container">
                <Image src={logo} alt="logo" className="logo" />
                <h1 className="title">Email has been sent!</h1>
                <p className="subtitle">Please check you inbox for instructions on how to reset the password.</p>
                <div className="email-image">
                    <Image src={email} alt="email" />
                </div>
                <button className="primary-button login-button">Login</button>
                <p className="Resend">
                    <span>Didn&apos;t receive the email?</span>
                    <Link href="/">Resend</Link>
                </p>
            </div>
        </div>
    );
};

export default SendEmail;
