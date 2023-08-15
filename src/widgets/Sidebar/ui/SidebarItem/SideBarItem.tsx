import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import MainIcon from 'shared/assets/icons/main-20-20.svg'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { memo } from 'react'
import cls from './SideBarItem.module.scss'
import { SidebarItemType } from '../../model/items'

interface SideBarItemProps {
    item: SidebarItemType,
    collapsed: boolean,
}

export const SideBarItem = memo(({ item, collapsed }: SideBarItemProps) => {
    const { t } = useTranslation()

    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
            className={classNames(cls.item, { [cls.collapsed]: collapsed })}
        >
            <item.Icon className={cls.icon} />
            <span className={cls.link}>
                {t(item.text)}
            </span>
        </AppLink>
    )
})
