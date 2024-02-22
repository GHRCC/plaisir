import type { Meta, StoryObj } from "@storybook/react";
import OutlineButton from "@/components/OutlineButton";

const meta: Meta<typeof OutlineButton> = {
  title: "Example/OutlineButton",
  component: OutlineButton,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render() {
    return <OutlineButton onClick={() => alert("Hello")}>Texto</OutlineButton>;
  },
};
