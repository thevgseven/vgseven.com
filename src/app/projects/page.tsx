import styles from "@/styles/page.module.scss";
import ProjectCard from "@/lib/Cards/ProjectCard/ProjectCard";
import { getProjectsMeta } from "@/lib/MDX/getProjects";
import { Metadata } from "next";
import Title from "@/lib/NebulaUI/Reusables/Title/Title";

export const metadata: Metadata = {
  title: "Projects by VGSEVEN",
};

export default async function ProjectsHomePage() {
  const cards = await getProjectsMeta();
  const sortedCards = [...cards].sort((a, b) => {
    const dateA = new Date(a.date as string).getTime();
    const dateB = new Date(b.date as string).getTime();
    return dateB - dateA;
  });
  return (
    <div className={styles.homePage}>
      <Title gradientName={"gradient3"}>PROJECTS BY VGSEVEN</Title>
      <div className={styles.Cards}>
        {sortedCards?.map((card) => (
          <ProjectCard
            key={card.title}
            title={card.title}
            description={card.description}
            date={card.date}
            status={card.status}
            img={card.img}
            link={`projects/${card.slug}`}
          />
        ))}
      </div>
    </div>
  );
}
