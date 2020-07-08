import React, { useState, useEffect } from "react";
import { FormControl, InputLabel, Input, IconButton } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";

import Message from "./components/Message/Message";
import "./App.css";

function App(props) {
    const [input, setInput] = useState("");
    const [username, setUsername] = useState("");
    const [messages, setMessages] = useState([
        { username: "Najathi", text: "Hi, Good Morning!" },
        { username: "Naharni", text: "Hey, Morning" },
    ]);

    console.log("input", input);
    console.log("messages", messages);

    useEffect(() => {
        setUsername(prompt("Please enter your username: "));
    }, []);

    const sendMessage = (event) => {
        event.preventDefault();
        setMessages([...messages, { username: username, text: input }]);
        setInput("");
    };

    return (
        <div className="App">
            <img
                src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100"
                alt="facebook"
            />
            <h2>Facebook Messenger Clone</h2>
            <p>
                developed by{" "}
                <a href="https://github.com/najathi" target="blank">
                    Najathi
                </a>
            </p>
            <form>
                <FormControl>
                    <InputLabel placeholder="enter a message">
                        Enter a message
                    </InputLabel>
                    <Input
                        value={input}
                        onChange={(event) => setInput(event.target.value)}
                    />
                    <IconButton
                        disabled={!input}
                        type="submit"
                        variant="contained"
                        color="primary"
                        onClick={sendMessage}
                    >
                        <Icon color="primary">add_circle</Icon>
                    </IconButton>
                </FormControl>
            </form>

            {messages.map((message) => (
                <Message username={username} message={message} />
            ))}
        </div>
    );
}

export default App;
