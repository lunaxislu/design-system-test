import type { Meta, StoryObj } from "@storybook/react";
import { TagButton } from "../components/TagButton";
import { fn } from "storybook/test";

const meta = {
  title: "Components/TagButton",
  component: TagButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    isChecked: true,
    children: "button",
    onClick: fn(),
  },
} satisfies Meta<typeof TagButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
