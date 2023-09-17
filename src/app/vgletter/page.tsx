import styles from "@/styles/page.module.scss";
import type { Metadata } from "next";
import JoinForm from "@/lib/Forms/JoinForm/JoinForm";

export const metadata: Metadata = {
  title: "VGSEVEN VG Letter",
};

export default function VGLetterHomePage() {
  return (
    <div className={styles.homePage}>
      <h2>VGLETTER</h2>
      <span>First Issue will be listed after 23 July..</span>
      <JoinForm />
      <p>
        The VG Letter is your portal to exclusive insights into the human
        experience, delving into the depths of psychology, philosophy, and the
        intricacies of life itself. As avid students of the mind and soul, we
        have crafted a platform that transcends mere superficiality, seeking to
        bring you profound revelations straight from the realms of thought and
        introspection.
      </p>
    </div>
  );
}
