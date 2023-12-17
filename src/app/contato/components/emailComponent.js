"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Textarea } from "@/components/ui/textarea";

function EmailComponent() {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      alert("Preencha todos os campos");
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    emailjs
      .send(
        "service_v3f58ei",
        "template_an7h7ir",
        templateParams,
        "cFgs4iQ8Czbh9g_Ck"
      )

      .then(
        (response) => {
          console.log("EMAIL ENVIADO!", response.status, response.text);
          setName("");
          setEmail("");
          setMessage("");
        },
        (err) => {
          console.log("ERRO: ", err);
        }
      );
  }

  return (
    <div>
      <form className="flex flex-col gap-3" onSubmit={sendEmail}>
        <Input
          className="p-2 rounded-lg h-12"
          type="text"
          placeholder="Nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <Input
          className="p-2 rounded-lg h-12"
          type="text"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <Textarea
          className="p-2 rounded-lg h-32"
          placeholder="Digite sua mensagem aqui"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <Button
          variant="default"
          className="rounded-md mb-8 font-semibold hover:bg-primary transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
        >
          <input type="submit" value="Enviar" />
        </Button>
      </form>
    </div>
  );
}

export default EmailComponent;
