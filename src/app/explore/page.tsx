import styles from "@/styles/page.module.scss";
import type { Metadata } from "next";
import ThoughtCard from "@/lib/Cards/ThoughtCard/ThoughtCard";
import JoinForm from "@/lib/Forms/JoinForm/JoinForm";
import { IconArrowRight } from "@tabler/icons-react";
import { getThoughtsMeta } from "@/lib/MDX/getThoughts";
import Link from "next/link";
import Title from "@/lib/NebulaUI/Reusables/Title/Title";

export const metadata: Metadata = {
  title: "Explore VGSEVEN",
  description: "Exploring VGSEVEN",
};

export default async function ExplorePageHome() {
  const thoughts = await getThoughtsMeta();
  return (
    <div className={styles.homePage}>
      <Title gradientName={"gradient5"}>EXPLORE VGSEVEN</Title>
      <h3>THOUGHTS BY VGSEVEN</h3>
      <div className={styles.Cards}>
        <ThoughtCard
          key={thoughts[0].title}
          title={thoughts[0].title}
          date={thoughts[0].date}
          link={`thoughts/${thoughts[0].slug}`}
        />
      </div>
      <Link href={"/thoughts"}>
        <h3>
          EXPLORE THOUGHTS <IconArrowRight className={styles.arrow} />
        </h3>
      </Link>
      <h2>JOIN VGLETTER</h2>
      <p>
        The VG Letter is your portal to exclusive insights into the human
        experience, delving into the depths of psychology, philosophy, and the
        intricacies of life itself. As avid students of the mind and soul, we
        have crafted a platform that transcends mere superficiality, seeking to
        bring you profound revelations straight from the realms of thought and
        introspection.
      </p>
      <JoinForm />
      <Link href={"/vgletter"}>
        <h3>
          EXPLORE VG LETTER <IconArrowRight className={styles.arrow} />
        </h3>
      </Link>
    </div>
  );
}
