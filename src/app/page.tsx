import styles from "@/styles/page.module.scss";
import ArticleCard from "@/lib/Cards/ArticleCard/ArticleCard";
import ThoughtCard from "@/lib/Cards/ThoughtCard/ThoughtCard";
import UpdateCard from "@/lib/Cards/UpdateCard/UpdateCard";
import ProjectCard from "@/lib/Cards/ProjectCard/ProjectCard";
import { getArticlesMeta } from "@/lib/MDX/getArticles";
import { getThoughtsMeta } from "@/lib/MDX/getThoughts";
import { getUpdatesMeta } from "@/lib/MDX/getUpdates";
import { getProjectsMeta } from "@/lib/MDX/getProjects";
import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";
import Tag from "@/lib/NebulaUI/Reusables/Tag/Tag";
import Title from "@/lib/NebulaUI/Reusables/Title/Title";
import { DMSerifDisplay } from "@/lib/Config/Fonts/Fonts";

export default async function Home() {
  const articles = await getArticlesMeta();
  const thoughts = await getThoughtsMeta();
  const updates = await getUpdatesMeta();
  const projects = await getProjectsMeta();
  return (
    <div>
      {/*Intro Panel Starts*/}
      <div className={styles.introPanel}>
        <Link href={`thoughts/${thoughts[1].slug}`}>
          <Tag>{thoughts[1].date}</Tag>
          <h1 className={DMSerifDisplay.className}>{thoughts[1].title}</h1>
          <p>{thoughts[1].description}</p>
        </Link>
      </div>
      {/*Intro Panel Starts*/}

      <div className={styles.homePage}>
        {/*Articles Panel Starts*/}
        <Title gradientName={"gradient2"}>ARTICLES</Title>
        <div className={styles.Cards}>
          <ArticleCard
            key={articles[1].title}
            title={articles[1].title}
            description={articles[1].description}
            date={articles[1].date}
            status={articles[1].status}
            link={`articles/${articles[1].slug}`}
          />
          <ArticleCard
            key={articles[0].title}
            title={articles[0].title}
            description={articles[0].description}
            date={articles[0].date}
            status={articles[0].status}
            link={`articles/${articles[0].slug}`}
          />
        </div>
        <Link href={"/articles"}>
          <h3>
            EXPLORE ARTICLES <IconArrowRight className={styles.arrow} />
          </h3>
        </Link>
        {/*Articles Panel Ends*/}

        {/*Thoughts Panel Starts*/}
        <Title gradientName={"gradient3"}>THOUGHTS</Title>
        <div className={styles.Cards}>
          <ThoughtCard
            key={thoughts[0].title}
            title={thoughts[0].title}
            date={thoughts[0].date}
            link={`thoughts/${thoughts[0].slug}`}
          />
          <ThoughtCard
            key={thoughts[1].title}
            title={thoughts[1].title}
            date={thoughts[1].date}
            link={`thoughts/${thoughts[1].slug}`}
          />
        </div>
        <Link href={"/thoughts"}>
          <h3>
            EXPLORE THOUGHTS <IconArrowRight className={styles.arrow} />
          </h3>
        </Link>
        {/*Thoughts Panel Ends*/}

        {/*Updates Panel Starts*/}
        <Title gradientName={"gradient4"}>UPDATES</Title>
        <div className={styles.Cards}>
          <UpdateCard
            key={updates[2].title}
            title={updates[2].title}
            description={updates[2].description}
            date={updates[2].date}
            status={updates[2].status}
            link={`updates/${updates[2].slug}`}
          />
          <UpdateCard
            key={updates[1].title}
            title={updates[1].title}
            description={updates[1].description}
            date={updates[1].date}
            status={updates[1].status}
            link={`updates/${updates[1].slug}`}
          />
          <UpdateCard
            key={updates[0].title}
            title={updates[0].title}
            description={updates[0].description}
            date={updates[0].date}
            status={updates[0].status}
            link={`updates/${updates[0].slug}`}
          />
          <UpdateCard
            key={updates[4].title}
            title={updates[4].title}
            description={updates[4].description}
            date={updates[4].date}
            status={updates[4].status}
            link={`updates/${updates[4].slug}`}
          />
        </div>
        <Link href={"/updates"}>
          <h3>
            EXPLORE UPDATES <IconArrowRight className={styles.arrow} />
          </h3>
        </Link>
        {/*Updates Panel Ends*/}

        {/*Projects Panel Starts*/}
        <Title gradientName={"gradient5"}>PROJECTS</Title>
        <div className={styles.Cards}>
          <ProjectCard
            key={projects[1].title}
            title={projects[1].title}
            description={projects[1].description}
            date={projects[1].date}
            status={projects[1].status}
            img={projects[1].img}
            link={`projects/${projects[1].slug}`}
          />
          <ProjectCard
            key={projects[0].title}
            title={projects[0].title}
            description={projects[0].description}
            date={projects[0].date}
            status={projects[0].status}
            img={projects[0].img}
            link={`projects/${projects[0].slug}`}
          />
        </div>
        <Link href={"/projects"}>
          <h3>
            EXPLORE PROJECTS <IconArrowRight className={styles.arrow} />
          </h3>
        </Link>
        {/*Projects Panel Ends*/}
      </div>
    </div>
  );
}
