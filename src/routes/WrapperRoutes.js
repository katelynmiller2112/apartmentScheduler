import React from 'react';
import { Route } from 'react-router'



export default function WrapperRoutes(route)  {
    return (
        <Route path={route.path}
        render = { props => (
            <route.component {...props} routes = {route.routes} />
        )}/>
    );
}