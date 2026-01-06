import type { Meta, StoryObj } from "@storybook/react";
import { TagList } from "@/components/TagList";
import { fn } from "storybook/test";

const meta = {
  title: "Components/TagList",
  component: TagList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    onTagClick: fn(),
    tagList: ["tag1", "tag2", "tag3"],
  },
} satisfies Meta<typeof TagList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
