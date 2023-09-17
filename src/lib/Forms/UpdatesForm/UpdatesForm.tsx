"use client";

import React, { useState } from "react";
import styles from "./UpdatesForm.module.scss";
import supabase from "@/lib/Config/Supabase/Supabase";
import Spinner from "@/lib/NebulaUI/Reusables/Spinner/Spinner";
import PopUpCard from "@/lib/Cards/PopUpCard/PopUpCard";
import Form from "@/lib/NebulaUI/Components/Form/Form";
import { RedRoseFont } from "@/lib/Config/Fonts/Fonts";

export default function UpdatesForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [spinner, setSpinner] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [message, setMessage] = useState("");

  const isFormValid =
    name.trim() !== "" && email.trim() !== "" && email.includes("@");

  const formHandler = async (e: any) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from("vgseven-updates-subscribers")
      .insert({
        name: name,
        email: email,
      })
      .select("*");

    if (data) {
      setName("");
      setEmail("");
      setMessage("Thanks for Subscribing VGSEVEN Updates..");
      const res = await fetch("/api/updates", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: name, email: email }),
      });
    } else {
      setName(name);
      setEmail(email);
      setMessage(
        "Oops there is error, make sure you're online or have you subscribed already?",
      );
    }
  };

  const spinnerHandler = () => {
    setSpinner(true);

    setTimeout(() => {
      setSpinner(false);
      setModalOpen(true);
    }, 7000);
  };

  return (
    <div className={styles.centerForm}>
      <div className={styles.updatesForm}>
        <h3 className={RedRoseFont.className}>GET UPDATES FROM VGSEVEN</h3>
        <p className={RedRoseFont.className}>
          Receive Updates directly in your mailbox of every new articles,
          projects, everything from VGSEVEN.
        </p>
        <div className={styles.formSection}>
          <Form onSubmit={formHandler}>
            <input
              className={RedRoseFont.className}
              placeholder={"vgseven"}
              type="text"
              name="name"
              value={name}
              onChange={(e: any) => setName(e.target.value)}
            />
            <input
              className={RedRoseFont.className}
              placeholder={"vg@vgseven.com"}
              type="email"
              name="email"
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
            />
            <button
              className={RedRoseFont.className}
              onClick={spinnerHandler}
              type="submit"
              disabled={!isFormValid}
            >
              {spinner ? <Spinner /> : "Subscribe"}
            </button>
          </Form>
        </div>
      </div>
      {modalOpen && (
        <PopUpCard message={message} onClose={() => setModalOpen(false)} />
      )}
    </div>
  );
}
