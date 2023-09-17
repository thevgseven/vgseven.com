import styles from "@/styles/page.module.scss";
import type { Metadata } from "next";
import { getThoughtsMeta } from "@/lib/MDX/getThoughts";
import ThoughtCard from "@/lib/Cards/ThoughtCard/ThoughtCard";

export const metadata: Metadata = {
  title: "Thoughts by VGSEVEN",
};

export default async function ThoughtsHomePage() {
  const cards = await getThoughtsMeta();
  const sortedCards = [...cards].sort((a, b) => {
    const dateA = new Date(a.date as string).getTime();
    const dateB = new Date(b.date as string).getTime();
    return dateB - dateA;
  });

  return (
    <div className={styles.homePage}>
      <h2>THOUGHTS BY VGSEVEN</h2>
      <div className={styles.Cards}>
        {sortedCards.map((card) => (
          <ThoughtCard
            key={card.title}
            title={card.title}
            date={card.date}
            link={`thoughts/${card.slug}`}
          />
        ))}
      </div>
    </div>
  );
}
