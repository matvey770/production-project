import { Suspense } from 'react';
import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

class AppRouter extends Component {
    render() {
        return (
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    {Object.values(routeConfig).map(({element, path}) => (
                        <Route
                            key={path}
                            path={path}
                            element={(
                                <Suspense fallback={<div>Loading...</div>}>
                                    {element}
                                </Suspense>
                            )}
                            />
                    ))}
                </Routes>
            </Suspense>
        );
    }
}

export default AppRouter;