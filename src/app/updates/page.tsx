import styles from "@/styles/page.module.scss";
import type { Metadata } from "next";
import { getUpdatesMeta } from "@/lib/MDX/getUpdates";
import UpdateCard from "@/lib/Cards/UpdateCard/UpdateCard";
import Title from "@/lib/NebulaUI/Reusables/Title/Title";

export const metadata: Metadata = {
  title: "Updates by VGSEVEN",
};

export default async function UpdatesHomePage() {
  const cards = await getUpdatesMeta();
  const sortedCards = [...cards].sort((a, b) => {
    const dateA = new Date(a.date as string).getTime();
    const dateB = new Date(b.date as string).getTime();
    return dateB - dateA;
  });

  return (
    <div className={styles.homePage}>
      <Title gradientName={"gradient4"}>UPDATES BY VGSEVEN</Title>
      <div className={styles.Cards}>
        {sortedCards?.map((card) => (
          <UpdateCard
            key={card.title}
            title={card.title}
            description={card.description}
            date={card.date}
            status={card.status}
            link={`updates/${card.slug}`}
          />
        ))}
      </div>
    </div>
  );
}
