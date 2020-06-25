import React, { useState, useEffect } from 'react';
import NavBar from './NavBarComp';
import BookList from './BookListComp';


function ContextApp() {
    return (
        <div className="clContextAppContainer">
            <NavBar />
            <BookList />
        </div>
    );
};
export default ContextApp;