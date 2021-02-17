import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { App } from './App'

export default {
  title: 'App/Site',
  component: App,
} as Meta

const Template: Story<{}> = (args) => <App {...args} />

export const App_1 = Template.bind({})
App_1.args = {}