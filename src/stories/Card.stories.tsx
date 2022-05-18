import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import {Card} from "../components/card"
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Card",
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {}
} as ComponentMeta<typeof Card>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const Selected = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Selected.args = {
  isChecked: true,
  hover: true
}
export const UnSelected = Template.bind({})

UnSelected.args = {
  isChecked: false,
  hover: false
}

export const Hover = Template.bind({})

Hover.args = {
  isChecked: false,
  hover: true
}
