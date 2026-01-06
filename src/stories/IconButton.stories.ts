import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconButton } from "../components/IconButton";

import { fn } from "storybook/test";
const meta = {
  title: "Buttons/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    alt: {
      control: "text",
      description: "이미지의 alt속정",
    },
    iconPath: {
      control: "text",
      description: "이미지 아이콘의 경로",
    },

    onClick: {
      control: false,
      description: "버튼 클릭 이벤트",
    },
  },
  args: {
    alt: "test sample",
    iconPath: "/icons/delete_dark.svg",
    onClick: fn(),
  },
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
