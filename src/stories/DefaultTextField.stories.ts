import type { Meta, StoryObj } from "@storybook/react-vite";
import { DefaultTextField } from "../components/DefaultTextField";
import { fn } from "storybook/test";

const meta = {
  title: "TextFields/DefaultTextField",
  component: DefaultTextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onChange: {
      control: false,
    },
    onIconClick: {
      control: false,
    },
  },
  args: {
    id: "",
    isError: false,
    errorMessage: "텍스트를 확인해주세요",
    placeholder: "텍스트를 입력해주세요",
    iconAlt: "icon",
    value: "",
    iconPath: "https://placehold.co/24",
    onChange: fn(),
    onIconClick: fn(),
  },
} satisfies Meta<typeof DefaultTextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: "안녕하세요 ",
    iconPath: "/icons/delete_dark.svg"
  }
};
