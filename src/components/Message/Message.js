import React, { forwardRef } from "react";
import "./Message.css";
import { CardContent, Card, Typography } from "@material-ui/core";

const Message = forwardRef(({ username, message }, ref) => {
    const isUser = username === message.username;

    if (message.username === null) {
        message.username = "Unknown User";
    }

    return (
        <>
            <div ref={ref} className={`message ${isUser && `message__user`}`}>
                <div className="message__messageContent">
                    <span className="message__username">
                        {!isUser && message.username}
                    </span>
                    <Card
                        className={
                            isUser ? "message__userCard" : "message__guestCard"
                        }
                    >
                        <CardContent>
                            <Typography
                                variant="h5"
                                component="h3"
                                className="text"
                            >
                                {message.message}
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    );
});

export default Message;
