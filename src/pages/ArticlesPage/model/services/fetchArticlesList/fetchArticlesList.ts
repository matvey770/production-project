import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Article } from 'entities/Articles'
import { Comment } from 'entities/Comment'
import { getArticlesPageLimit } from '../../selectors/articlesPageSelectors'

interface FetchArticleListProps {
    page?: number
}

export const fetchArticlesList = createAsyncThunk<
    Article[],
    FetchArticleListProps,
    ThunkConfig<string>
>(
    'articlePage/fetchArticlesList',
    async (props, thunkApi) => {
        const { extra, rejectWithValue, getState } = thunkApi
        const { page = 1 } = props
        const limit = getArticlesPageLimit(getState())
        try {
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page,
                },
            })

            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch (e) {
            return rejectWithValue('error')
        }
    },
)
