import React, { useState, useEffect } from 'react';
import NavBar from './NavBarComp.js';
import BookList from './BookListComp.js';
import ThemeContextProvider from '../../contexts/ThemeContext.js';
import ThemeToggle from './ThemeToggleComp.js';
import AuthContextProvider from '../../contexts/AuthContext.js';
import './ContextApp.css';

function ContextApp() {
    return (
        <div className="clContextAppContainer">
            <ThemeContextProvider>
                <AuthContextProvider>
                    <NavBar />
                    <BookList />
                    <ThemeToggle />
                </AuthContextProvider>
            </ThemeContextProvider>
        </div>
    );
};
export default ContextApp;