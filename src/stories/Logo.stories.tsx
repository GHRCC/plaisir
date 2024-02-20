import type { Meta, StoryObj } from "@storybook/react";
import { Logo } from "@/components/Logo";

const meta: Meta<typeof Logo> = {
  title: "Example/Logo",
  component: Logo,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render() {
    return <Logo />;
  },
};
