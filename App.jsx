import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';


// import "./App.css"


//Pages to be loaded
import { Homepage } from "./Components/Homepage/Homepage";


import 'bootstrap/dist/css/bootstrap.css';




export const App = () => {
    useEffect(() => {
        console.log("Welcome to the THUNDERDOME")
    }, []);
    return (<div className="app">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                </Routes>
            </BrowserRouter>
    </div>
    )
}