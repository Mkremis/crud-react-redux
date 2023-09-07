import { Card, Button, TextInput, Title, Badge } from "@tremor/react";
import { useUserActions } from "../hooks/useUserActions";
import { useState } from "react";

export default function CreateNewUser() {
  const [result, setResult] = useState<"ok" | "ko" | null>(null);
  const { addUser } = useUserActions();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResult(null);
    const form = e.target;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const github = formData.get("github") as string;
    if (!name || !email || !github) return setResult("ko");
    addUser({ name, email, github });
    setResult("ok");
    form.reset();
  };
  return (
    <Card className="mt-3">
      <Title>Create New User</Title>
      <form onSubmit={handleSubmit}>
        <TextInput placeholder="Escibe tu nombre" name="name" />
        <TextInput placeholder="Escribe tu email" name="email" />
        <TextInput placeholder="Escribe tu usuario de GitHub" name="github" />
        <div>
          <Button type="submit" className="mt-3">
            Crear usuario
          </Button>
          <span className="ml-4">
            {result === "ok" && (
              <Badge color="green">Guardado Correctamente</Badge>
            )}
            {result === "ko" && <Badge color="red">Error en los campos</Badge>}
          </span>
        </div>
      </form>
    </Card>
  );
}
