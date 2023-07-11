import "./styles/index.scss"
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Suspense } from 'react';
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { AppRouter } from "./providers/ThemeProvider/router";
import { Navbar } from "widgets/Navbar";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";

const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <AppRouter/>
        </div>
    );
};

export default App;

