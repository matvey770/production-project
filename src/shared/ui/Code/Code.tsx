import { classNames } from 'shared/lib/classNames/classNames'
import CopyIcon from 'shared/assets/icons/copy-20-20.svg'
import { ReactNode, useCallback } from 'react'
import cls from './Code.module.scss'
import { Button, ButtonTheme } from '../Button/Button'
import { Icon } from '../Icon/Icon'

interface CodeProps {
    className?: string,
    text: string,
}

export const Code = (props: CodeProps) => {
    const { className, text } = props

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text)
    }, [text])

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button onClick={onCopy} className={cls.copyBtn} theme={ButtonTheme.CLEAR}>
                <Icon Svg={CopyIcon} />
            </Button>
            <code>
                {text}
            </code>
        </pre>
    )
}
