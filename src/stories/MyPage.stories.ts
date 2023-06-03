import MyPage from "../components/MyPage.vue";
import type { Meta, StoryObj } from "@storybook/vue3";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

type Story = StoryObj<typeof MyPage>;

const meta: Meta<typeof MyPage> = {
    title: "MyPage",
    component: MyPage,
    render: () => ({
      components: { MyPage },
      template: "<MyPage />",
    }),
    // PC, Mobile それぞれのビューポートを作成 (高さは指定しない)
    parameters: {
      backgrounds: {
        default: "twitter",
        values: [
          {
            name: "twitter",
            value: "#00aced",
          },
          {
            name: "facebook",
            value: "#3b5998",
          },
        ],
      },
    },
  };

// ここで指定している defaultViewport は、前回定義したカスタム Viewport です

export const ForPc: Story = {
    parameters: {
      viewport: {
        defaultViewport: "pc",
      },
    },
  };
  
  export const ForMobile: Story = {
    parameters: {
      viewport: {
        defaultViewport: "mobile",
      },
    },
  };
  
export const Default: Story = {};

export default meta;