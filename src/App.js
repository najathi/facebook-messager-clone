import React, { useState, useEffect } from "react";
import { FormControl, InputLabel, Input } from "@material-ui/core";

import "./App.css";

function App() {
    return (
        <div className="App">
            <h2>Facebook Messenger Colon</h2>

            <FormControl>
                <InputLabel htmlFor="my-input">Email address</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
        </div>
    );
}

export default App;
