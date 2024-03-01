import Title from "@/components/Title";
import TextField from "@/components/TextField";
import { useState } from "react";
import OutlineButton from "@/components/OutlineButton";

export default function Home() {
  const [text, setText] = useState("");

  return (
    <main>
      <Title>Texto</Title>
      <TextField
        value={text}
        placeholder="Digite seu nome"
        onChange={setText}
      />
      <OutlineButton onClick={() => {}}>Botão</OutlineButton>
    </main>
  );
}
