import { updateProfileData } from '../services/updateProfileData/updateProfileData'
import { ProfileSchema, ValidateProfileError } from '../types/profile'
import { profileActions, profileReducer } from './profileSlice'

describe('profileSlice.test', () => {
    test('test set readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false }
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.setReadonly(true),
        )).toEqual({ readonly: true })
    })
    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        }

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.pending,
        )).toEqual({
            isLoading: true,
            validateErrors: undefined,
        })
    })
})
