import React from 'react';

const authContext = React.createContext({
    //this is default value
    authenticated: false,
    login: () => {}
});

export default authContext;