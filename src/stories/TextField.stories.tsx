import type { Meta, StoryObj } from "@storybook/react";
import TextField from "@/components/TextField";

const meta: Meta<typeof TextField> = {
  title: "Example/TextField",
  component: TextField,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render() {
    return (
      <TextField
        placeholder="Digite seu nome"
        value=""
        onChange={(value: string) => {
          value: "";
        }}
      />
    );
  },
};
