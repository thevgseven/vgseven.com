import styles from "./Footer.module.scss";
import Link from "next/link";
import {
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
  IconMail,
  IconBrandGithub,
} from "@tabler/icons-react";
import UpdatesForm from "@/lib/Forms/UpdatesForm/UpdatesForm";
import Image from "next/image";
import vg from "#/icon.png";

export default function Footer() {
  return (
    <div className={styles.Footer}>
      <UpdatesForm />
      <div className={styles.FooterSection}>
        <div className={styles.FooterProfile}>
          <Link href={"/"}>
            <Image src={vg} alt={"VGSEVEN"} height={100} width={100} />
          </Link>
          <div>
            <Link href={"/"}>
              <h1>VGSEVEN</h1>
            </Link>
            <span>VAIBHAV GOSAVI</span>
          </div>
        </div>
        <div className={styles.SubSection}>
          <h2>VGSEVEN.COM</h2>
          <div>
            <a href={"https://instagram.com/vgsevn"} target={"_blank"}>
              <span>
                <IconBrandInstagram size={"25px"} />
              </span>
            </a>
            <a href={"https://twitter.com/VGSEVN"} target={"_blank"}>
              <span>
                <IconBrandTwitter size={"25px"} />
              </span>
            </a>
            <a href={"mailto:vg@vgseven.com"} target={"_blank"}>
              <span>
                <IconMail size={"25px"} />
              </span>
            </a>
            <a href={"https://youtube.com/@VGSEVEN"} target={"_blank"}>
              <span>
                <IconBrandYoutube size={"25px"} />
              </span>
            </a>
            <a href={"https://github.com/thevgseven"} target={"_blank"}>
              <span>
                <IconBrandGithub size={"25px"} />
              </span>
            </a>
          </div>
          <div>
            <Link href={"/about"}>
              <span>ABOUT</span>
            </Link>
            <Link href={"/contact"}>
              <span>CONTACT</span>
            </Link>
            <Link href={"/terms"}>
              <span>TERMS</span>
            </Link>
            <Link href={"/disclaimers"}>
              <span>DISCLAIMERS</span>
            </Link>
            <Link href={"/privacy"}>
              <span>PRIVACY</span>
            </Link>{" "}
          </div>
        </div>
      </div>
      <div className={styles.FooterSite}>
        <span>
          VGSEVEN &copy; Copyright &nbsp;
          {new Date().getFullYear()}. All rights reserved.
        </span>
      </div>
    </div>
  );
}
