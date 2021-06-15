import React from 'react';
import Button from 'react-bootstrap/Button'
import Helmet from 'react-helmet'

function Home() {
    return (
        <div style={{
            textAlign: "center"
        }}>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <h1>
                <i>
                    <b>cock</b>
                </i>
            </h1>
            <h2>Home</h2>
            <header className="App-header">
                <p>
                    Edit
                    <code>"app.js"</code>
                    and save to refresh (and cum).
                </p>
                    <Button onClick={consoleL} variant="outline-primary">Learn React</Button>
            </header>
        </div>

    )
}

function consoleL() {
    alert("I created a log in the console!")
    console.log("Logged")
}

export default Home;
