import type { Meta, StoryObj } from "@storybook/react";
import { CategoryButton } from "@/components/CategoryButton";

import { fn } from "storybook/test";

const meta = {
  title: "Components/CategoryButton",
  component: CategoryButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    onClick: fn(),
    iconAlt: "Category Icon",
    iconPath: "/icons/ic-category.svg",
    text: "Category",
  },
} satisfies Meta<typeof CategoryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
