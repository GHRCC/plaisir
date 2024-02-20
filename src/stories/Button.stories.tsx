import type { Meta, StoryObj } from "@storybook/react";
import Button from "@/components/Button";

const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render() {
    return <Button onClick={() => alert("Hello")}>Texto</Button>;
  },
};
