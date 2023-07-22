import React, { Suspense, Component } from 'react'

import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'widgets/PageLoader/PageLoader'

class AppRouter extends Component {
    render () {
        return (
            <Suspense fallback={<PageLoader/>}>
                <Routes>
                    {Object.values(routeConfig).map(({ element, path }) => (
                        <Route
                            key={path}
                            path={path}
                            element={(
                                <Suspense fallback={<PageLoader/>}>
                                    <div className='page-wrapper'>
                                        {element}
                                    </div>
                                </Suspense>
                            )}
                        />
                    ))}
                </Routes>
            </Suspense>
        )
    }
}

export default AppRouter
