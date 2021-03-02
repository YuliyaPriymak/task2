import React from 'react';
import './Header.scss'

const Header = (props) => {
    const {sources} = props
    return (
        <div className='header'>
            <div className="container d-flex justify-content-end">
                <h3>Number of elements: {sources.length}</h3>
            </div>
        </div>
    );
};

export default Header;