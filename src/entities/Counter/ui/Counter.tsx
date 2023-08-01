import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'shared/ui/Button/Button'
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import { useTranslation } from 'react-i18next'
import { counterActions } from '../model/slice/counterSlice'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'

export const Counter = () => {
    const dispatch = useDispatch()
    const counterValue = useSelector(getCounterValue)
    const { t } = useTranslation()
    const inc = () => {
        dispatch(counterActions.increment())
    }

    const dec = () => {
        dispatch(counterActions.decrement())
    }

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button
                onClick={inc}
                data-testid="increment-btn"
            >
                {t('INC')}
            </Button>
            <Button
                onClick={dec}
                data-testid="decrement-btn"
            >
                {t('DEC')}
            </Button>
        </div>
    )
}
