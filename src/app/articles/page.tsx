import styles from "@/styles/page.module.scss";
import type { Metadata } from "next";
import { getArticlesMeta } from "@/lib/MDX/getArticles";
import ArticleCard from "@/lib/Cards/ArticleCard/ArticleCard";
import Title from "@/lib/NebulaUI/Reusables/Title/Title";
import { DMSerifDisplay, RedRoseFont } from "@/lib/Config/Fonts/Fonts";
import Tag from "@/lib/NebulaUI/Reusables/Tag/Tag";

export const metadata: Metadata = {
  title: "Articles by VGSEVEN",
};

export default async function ArticlesHomePage() {
  const cards = await getArticlesMeta();
  const sortedCards = [...cards].sort((a, b) => {
    const dateA = new Date(a.date as string).getTime();
    const dateB = new Date(b.date as string).getTime();
    return dateB - dateA;
  });
  return (
    <div>
      <div className={styles.ArticleHomePage}>
        <h1 className={RedRoseFont.className}>ARTICLES BY VGSEVEN</h1>
        <Tag>05 Aug 2023</Tag>
        <Tag>LATEST</Tag>
        <h1 className={DMSerifDisplay.className}>{cards[1].title}</h1>
        <p>{cards[1].description}</p>
      </div>
      <div className={styles.homePage}>
        <Title gradientName={"gradient2"}>ARTICLES BY VGSEVEN</Title>
        <div className={styles.Cards}>
          {sortedCards?.map((card) => (
            <ArticleCard
              key={card.title}
              title={card.title}
              description={card.description}
              date={card.date}
              status={card.status}
              link={`articles/${card.slug}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
