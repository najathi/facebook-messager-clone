import React, { useState, useEffect } from "react";
import { FormControl, InputLabel, Input, IconButton } from "@material-ui/core";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";

import Message from "./components/Message/Message";
import db from "./firebase";
import "./App.css";

function App(props) {
    const [input, setInput] = useState("");
    const [username, setUsername] = useState("");
    const [messages, setMessages] = useState([]);

    console.log("input", input);
    console.log("messages", messages);

    useEffect(() => {
        db.collection("messages")
            .orderBy("timestamp", "desc")
            .onSnapshot((snapshot) => {
                setMessages(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        message: doc.data(),
                    }))
                );
            });
    }, []);

    useEffect(() => {
        setUsername(prompt("Please enter your username: "));
    }, []);

    const sendMessage = (event) => {
        event.preventDefault();

        db.collection("messages").add({
            message: input,
            username: username,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        // setMessages([...messages, { username: username, message: input }]);
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
            <form className="app__form">
                <FormControl className="app__formControl">
                    <InputLabel placeholder="enter a message">
                        Enter a message
                    </InputLabel>
                    <Input
                        className="app__input"
                        value={input}
                        onChange={(event) => setInput(event.target.value)}
                    />
                    <IconButton
                        disabled={!input}
                        type="submit"
                        variant="contained"
                        color="primary"
                        onClick={sendMessage}
                        className="app__button"
                    >
                        <SendIcon />
                    </IconButton>
                </FormControl>
            </form>

            <FlipMove>
                {messages.map(({ id, message }) => (
                    <Message key={id} username={username} message={message} />
                ))}
            </FlipMove>
        </div>
    );
}

export default App;
