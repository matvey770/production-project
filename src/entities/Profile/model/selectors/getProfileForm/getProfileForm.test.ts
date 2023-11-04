import { StateSchema } from 'app/providers/StoreProvider'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import { getProfileForm } from './getProfileForm'

const data = {
    username: 'admin',
    age: 25,
    country: Country.Russia,
    lastname: 'admin',
    first: 'ads',
    city: 'Moscow',
    currency: Currency.USD,
}

describe('getProfileForm.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: data,
            },
        }
        expect(getProfileForm(state as StateSchema)).toEqual(data)
    })
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileForm(state as StateSchema)).toEqual(undefined)
    })
})
