import axios from 'axios';
import React, { useState } from 'react';
import "tailwindcss/tailwind.css";
import FeedbackAlert from '../FeedbackAlert/FeedbackAlert';
import './SubscribePage.css';

const SubscribePage = () => {

    const [username, setUsername] = useState(null);
    const [email, setEmail] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [feedbackAlert, setFeedbackAlert] = useState({ isVisible: false, type: null, message: null })
    const [isLoading, setisLoading] = useState(false);
    const closeAlert = (isOpen) => { setFeedbackAlert({ ...feedbackAlert, isVisible: isOpen }) }
    const isValidUserName = (uname) => {
        if (uname.match(/^[a-z]+$/i)) {
            return true;
        }
        setErrorMessage('Name should only contain alphabets');
        return false;
    }
    const isValidEmail = (val) => {
        if (val && val.match(/\S+@\S+\.\S+/)) {
            return true;
        }
        setErrorMessage('Please enter a valid email address');
        return false;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrorMessage('');
        setisLoading(true);
        if (!isValidUserName(username) || !isValidEmail(email)) {
            setisLoading(false);
            return;
        }

        setTimeout(() => {
            axios.post('/api/subscriptions/', { name: username, email })
                .then((res) => {
                    console.log("Res", res)
                    setFeedbackAlert({ isVisible: true, type: 'success', message: 'You have successfully subscribed to our newsletter!' })
                }).catch((error) => {
                    if (error.response) {
                        let { data } = error.response;
                        let message = '';
                        console.log(data.name, data.email)
                        if (data.name)
                            message = data.name[0];
                        else if (data.email)
                            message = data.email[0];

                        setFeedbackAlert({ isVisible: true, type: 'error', message })
                        return;
                    }
                    setFeedbackAlert({ ...feedbackAlert, isVisible: true, type: 'error', message: 'Something went wrong.Please try again later...' })
                }).finally(() => setisLoading(false));
        }, 3000);
    };
    return (
        <>
            {feedbackAlert.isVisible
                ? <div className="alert-container">
                    <FeedbackAlert showAlert={feedbackAlert.isVisible} setShowAlert={closeAlert} type={feedbackAlert.type} message={feedbackAlert.message} />
                </div>
                : null}
            <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <img
                            className="mx-auto h-12 w-auto"
                            src='/static/frontend/images/icon-black.svg'
                            alt="Glood.ai"
                        />
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Subscribe to our newsletter</h2>
                    </div>
                    <form className="mt-8 space-y-6">
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="username" className="sr-only">
                                    Name
                                </label>
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    autoComplete="email"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Email address"
                                />
                            </div>
                        </div>
                        {errorMessage ? <p className='err-msg'>{errorMessage}</p> : null}
                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                disabled={isLoading}
                                onClick={handleSubmit}
                            >
                                {isLoading ? <img src='/static/frontend/images/loader.gif' alt='Loading...' /> : <span> Subscribe</span>}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SubscribePage;