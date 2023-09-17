"use client";

import styles from "./ContactForm.module.scss";
import { useState } from "react";
import supabase from "@/lib/Config/Supabase/Supabase";
import Spinner from "@/lib/NebulaUI/Reusables/Spinner/Spinner";
import PopUpCard from "@/lib/Cards/PopUpCard/PopUpCard";
import Form from "@/lib/NebulaUI/Components/Form/Form";
import { IconArrowsRight } from "@tabler/icons-react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [spinner, setSpinner] = useState(false);
  const [openPopUp, setOpenPopUp] = useState(false);
  const [userMessage, setUserMessage] = useState("");

  const isFormValid =
    name.trim() !== "" && email.trim() !== "" && message.trim() !== "";

  const formHandler = async (e: any) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from("vgseven-contact-forms")
      .insert({ name: name, email: email, message: message })
      .select("*");

    if (data) {
      setName("");
      setEmail("");
      setMessage("");
      setUserMessage(
        "Thanks for Messaging, We'll reach you as soon as possible..",
      );
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: name, email: email, message: message }),
      });
    } else {
      setUserMessage("Oops there is an error, make sure you're online..");
    }
  };

  const popUpHandler = () => {
    setSpinner(true);

    setTimeout(() => {
      setSpinner(false);
      setOpenPopUp(true);
    }, 7000);
  };

  return (
    <div>
      <div className={styles.ContactForm}>
        <Form onSubmit={formHandler}>
          <label>
            Enter your name <IconArrowsRight size={"11px"} />
          </label>
          <input
            required={true}
            placeholder={"vgseven"}
            type={"text"}
            name={"name"}
            value={name}
            onChange={(e: any) => setName(e.target.value)}
          />
          <label>
            Enter you email <IconArrowsRight size={"11px"} />
          </label>
          <input
            required={true}
            placeholder={"vg@vgseven.com"}
            type={"email"}
            name={"email"}
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
          />
          <label>
            Describe your message <IconArrowsRight size={"11px"} />
          </label>
          <textarea
            required={true}
            placeholder={"start typing.."}
            name={"message"}
            value={message}
            onChange={(e: any) => setMessage(e.target.value)}
          />
          <button
            onClick={popUpHandler}
            type={"submit"}
            disabled={!isFormValid}
          >
            {spinner ? <Spinner /> : "Send"}
          </button>
        </Form>
      </div>
      {openPopUp && (
        <PopUpCard message={userMessage} onClose={() => setOpenPopUp(false)} />
      )}
    </div>
  );
}
