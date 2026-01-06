import type { Meta, StoryObj } from "@storybook/react";
import { PrimaryButton } from "../components/PrimaryButton";
import { fn } from "storybook/test";

const meta = {
  title: "Components/PrimaryButton",
  component: PrimaryButton,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => {
      return (
        <div style={{ width: "360px" }}>
          <Story />
        </div>
      );
    },
  ],
  tags: ["autodocs"],
  argTypes: {
    theme: {
      control: "inline-check",
      options: ["dark", "light", "social", "text"],
    },

    // type: "function",
    onClick: {
      action: "clicked",
      description: "버튼 클릭 이벤트",
    },
  },
  args: {
    onClick: fn(),
    children: "button",
    theme: "dark",
    isDisabled: false,
  },
} satisfies Meta<typeof PrimaryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {};

export const Light: Story = {
  args: {
    theme: "light",
  },
};

export const Social: Story = {
  args: {
    theme: "social",
  },
};

export const Text: Story = {
  args: {
    theme: "text",
  },
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
};
