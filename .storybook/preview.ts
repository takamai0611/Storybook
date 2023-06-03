import { Decorator } from "@storybook/vue3";

export const decorators: Decorator[] = [
  () => {
    return {
      template:
        '<div style="margin: 5em; border: 1px solid; border-color: white"><story /></div>',
    };
  },
];