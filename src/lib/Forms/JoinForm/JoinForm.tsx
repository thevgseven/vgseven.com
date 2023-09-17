"use client";

import styles from "./JoinForm.module.scss";
import { PoppinsFont } from "@/lib/Config/Fonts/Fonts";
import { useState } from "react";
import PopupModal from "@/lib/Cards/PopUpCard/PopUpCard";
import Spinner from "@/lib/NebulaUI/Reusables/Spinner/Spinner";
import supabase from "@/lib/Config/Supabase/Supabase";
import Form from "@/lib/NebulaUI/Components/Form/Form";

export default function JoinForm() {
  const [email, setEmail] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [message, setMessage] = useState("");
  const [spinner, setSpinner] = useState(false);

  const isFormValid = email.trim() !== "";

  const formHandler = async (e: any) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from("vgletter-subscribers")
      .insert({
        email: email,
      })
      .select("*");

    if (data) {
      setEmail("");
      setMessage("Thanks for Subscribing VGLETTER.");

      const res = await fetch("/api/vgletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email }),
      });
    }

    if (error) {
      setEmail(email);
      setMessage("Oops! You're offline or have you already subscribed?");
    }
  };

  const modalHandler = () => {
    setSpinner(true);

    setTimeout(() => {
      setOpenModal(true);
      setSpinner(false);
    }, 7000);
  };

  return (
    <>
      <div className={styles.JoinForm}>
        <h4>SUBSCRIBE TO VGLETTER</h4>
        <p>
          By Subscribing you will receive Newsletter every week once on Sunday
          directly in your Inbox.
        </p>
        <div className={styles.formSection}>
          <Form onSubmit={formHandler}>
            <input
              className={PoppinsFont.className}
              placeholder={"vg@vgseven.com"}
              required={true}
              name={"email"}
              type={"email"}
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
            />
            <button
              className={PoppinsFont.className}
              type={"submit"}
              name={"Subscribe"}
              onClick={modalHandler}
              disabled={!isFormValid}
            >
              {spinner ? <Spinner /> : "Subscribe"}
            </button>
          </Form>
        </div>
      </div>
      {openModal && (
        <PopupModal message={message} onClose={() => setOpenModal(false)} />
      )}
    </>
  );
}
