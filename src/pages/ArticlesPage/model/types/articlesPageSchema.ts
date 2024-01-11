import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'entities/Articles';

export interface ArticlesPageSchema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;

    // pagination
    view: ArticleView;
    page: number;
    limit?: number;
    hasMore: boolean;
}
