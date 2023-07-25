import React, { useMemo, useState, type FC } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } 
    from '../lib/ThemeContext'

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as 
Theme || Theme.LIGHT 
// получили из localstorage тему, преобразовали с помощью as к типу Theme, если пустой присваиваем LIGHT

const ThemeProvider: FC = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme)

    const defaultProps = useMemo(() => ({
        theme,
        setTheme
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
