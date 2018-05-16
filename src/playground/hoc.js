import React from 'react';
import ReactDOM from 'react-dom';

// COMPONENT
const Data = (props) => (
    <div>
        <h1>Berlin</h1>
        <h3>Music festivals in: {props.info}</h3>
        <p>Hollywood Hills</p>
    </div>
);

// HOC
const requireAuthentication = (Authentication) => {
    return (props) => (
        <div>
            {/* HOC USAGE */}
            {props.isAuthenticated ? <Authentication {...props} /> : <h1>Please Login First</h1>}
        </div>
    );
};

// COMPONENT PASSAGE TO HOC
const AuthInfo = requireAuthentication(Data);

// HOC RENDER
ReactDOM.render(<AuthInfo isAuthenticated={true} info="Los Angeles" />, document.getElementById('app'));
