import React, { useState } from 'react';

const getMetaFromType = (type) => {
    switch (type) {
        case 'success':
            return { color: 'emerald', heading: 'Success' };
        case 'error':
            return { color: 'red', heading: 'Error' };
        default:
            return { color: 'teal', heading: 'Alert' };
    }
}

const FeedbackAlert = ({ type, message }) => {
    const [showAlert, setShowAlert] = React.useState(true);
    const { color, heading } = getMetaFromType(type);
    console.log(color, heading);
    return (
        <>
            {showAlert ? (
                <div
                    className={
                        "text-black px-6 py-4 border-0 rounded relative mb-4 bg-" +
                        color +
                        "-500"
                    }
                >
                    <span className="text-xl inline-block mr-5 align-middle">
                        <i className="fas fa-bell" />
                    </span>
                    <span className="inline-block align-middle mr-8">
                        <b className="capitalize">{heading}!</b> {message}
                    </span>
                    <button
                        className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
                        onClick={() => setShowAlert(false)}
                    >
                        <span>×</span>
                    </button>
                </div>
            ) : null}
        </>
    );
};

export default FeedbackAlert;