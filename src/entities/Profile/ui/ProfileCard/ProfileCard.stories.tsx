import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import avatar from 'shared/assets/tests/storybook.jpg'
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/LoginForm',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        username: 'admin',
        age: 25,
        country: Country.Russia,
        lastname: 'admin',
        first: 'ads',
        city: 'Moscow',
        currency: Currency.USD,
        avatar,
    },
}

export const withError = Template.bind({});
withError.args = {
    error: 'true',
}

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
}
