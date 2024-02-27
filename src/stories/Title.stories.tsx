import type { Meta, StoryObj } from "@storybook/react";
import Title from "@/components/Title";

const meta: Meta<typeof Title> = {
  title: "Example/Title",
  component: Title,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render() {
    return <Title text={"Título"} />;
  },
};
