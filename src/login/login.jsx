import React from 'react';

export function Login() {
    return (
        <div>
            <h2>Welcome to the Pathfinder's Library!</h2>
            <p className="description">Pathfinder's Library is an easy-to-use tool that allows you to design your own characters for your next TTRPG game!</p>
            <p className="description">Log in to get started, or click "Information" to learn more!</p>
            <form method="get">
                <label htmlFor="name">Enter your credentials:</label>
                <br />
                <input type="text" id="username" placeholder="username here" />
                <input type="text" id="password" placeholder="password here" />
                <button type="button">Login</button>
                <button type="button">Create</button>
            </form>
            <div id="messageLog"> </div>
            <div id="message"></div>
        </div>
    );
}