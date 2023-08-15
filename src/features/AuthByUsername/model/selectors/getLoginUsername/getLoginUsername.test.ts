import { StateSchema } from 'app/providers/StoreProvider'
import { getLoginUsername } from './getLoginUsername'

describe('getLoginError.test', () => {
    test('should return test', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'test',
            },
        }
        expect(getLoginUsername(state as StateSchema)).toEqual('test')
    })
    test('should return empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getLoginUsername(state as StateSchema)).toEqual('')
    })
})
