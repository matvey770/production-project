import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useMemo, useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { SidebarItemType } from 'widgets/Sidebar/model/types/sidebar';
import cls from './Sidebar.module.scss';
import { SideBarItem } from '../SidebarItem/SideBarItem';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';

interface SidebarProps {
    item?: SidebarItemType
    className?: string;
}

export const Sidebar = memo(({ item, className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const sideBarItemsList = useSelector(getSidebarItems)

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const itemsList = useMemo(() => sideBarItemsList.map((item) => (
        <SideBarItem
            item={item}
            collapsed={collapsed}
            key={item.path}
        />
    )), [collapsed, sideBarItemsList]);

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                square
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.items}>
                {itemsList}
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={cls.lang} />
            </div>
        </div>
    );
});
