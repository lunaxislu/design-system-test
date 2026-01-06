import type { Meta, StoryObj } from "@storybook/react-vite";

import { fn } from "storybook/test";
import { NavigationBar } from "../components/NavigationBar";

const meta = {
  title: "navigation/NavigationBar",
  component: NavigationBar,
  parameters: {
    layout: "centered",
    docs: {
      codePanel: true,
      story: {
        height: "700px",
      },
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => {
      return (
        <div
          style={{
            width: "360px",
          }}
        >
          <Story />
        </div>
      );
    },
  ],
  argTypes: {
    title: {
      control: "text",
      description: "페이지 이름",
    },
    showTitle: {
      control: "boolean",
      description: "페이지 이름 표시 여부",
    },
    onBackButtonClick: {
      control: false,
      description: "뒤로가기 버튼",
    },
    onCloseButtonClick: {
      control: false,
      description: "페이지 닫기 버튼",
    },
    showBackButton: {
      control: "boolean",
      description: "뒤로가기 버튼 표시 여부",
    },
    showCloseButton: {
      control: "boolean",
      description: "페이지 닫기 버튼 표시 여부",
    },
  },
  args: {
    title: "페이지 타이틀",
    showTitle: true,
    showBackButton: true,
    onBackButtonClick: fn(),
    showCloseButton: true,
    onCloseButtonClick: fn(),
  },
} satisfies Meta<typeof NavigationBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
// 한 화면에서 여러 사이즈를 동시에 보고 싶을 때
export const ResponsiveTest: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4 bg-gray-100">
      {/* 375px (모바일) */}
      <div className="w-[375px] border border-red-500 bg-white">
        <p className="text-xs text-red-500">Mobile (375px)</p>
        <NavigationBar {...args} />
      </div>

      {/* 768px (태블릿) */}
      <div className="w-[768px] border border-blue-500 bg-white">
        <p className="text-xs text-blue-500">Tablet (768px)</p>
        <NavigationBar {...args} />
      </div>

      {/* 100% (유동적) */}
      <div className="w-full border border-green-500 bg-white">
        <p className="text-xs text-green-500">Full Width</p>
        <NavigationBar {...args} />
      </div>
    </div>
  ),
  args: {
    title: "반응형 테스트",
  },
};
