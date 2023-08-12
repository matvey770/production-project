import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { getLoginPassword } from './getLoginPassword'

describe('getLoginError.test', () => {
    test('should return test', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: 'test',
            },
        }
        expect(getLoginPassword(state as StateSchema)).toEqual('test')
    })
    test('should return empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getLoginPassword(state as StateSchema)).toEqual('')
    })
})
