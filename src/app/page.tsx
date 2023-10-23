import ProjectCard from "@/ui/components/project-card";
import { Einfi, Radium } from "@/lib/content/projects/cards";
import BrandX from "@/ui/icons/brand-x";

export default function Home() {
  return (
    <main className={"mx-auto max-w-7xl mt-20 max-[1380px]:mx-6"}>
      <div className={"flex gap-9 flex-wrap"}>
        <ProjectCard
          link={Einfi.link}
          title={Einfi.title}
          summary={Einfi.summary}
          description={Einfi.description}
          date={Einfi.date}
          tag={Einfi.tag}
        />
        <ProjectCard
          link={Radium.link}
          title={Radium.title}
          summary={Radium.summary}
          description={Radium.description}
          date={Radium.date}
          tag={Radium.tag}
        />
      </div>
      <div className={"flex justify-center items-center mt-8 mb-2 ml-4"}>
        <a
          href={"https://x.com/VGSEVENN/"}
          target="_blank"
          className={
            "bg-zinc-200 hover:bg-zinc-300 dark:bg-neutral-800 w-48 flex rounded-xl px-3 py-2 dark:hover:bg-neutral-700"
          }
        >
          <BrandX width={16} height={16} className={" mt-1 hover:text-white"} />
          <h1 className={" text-sm ml-2"}>Find More Updates</h1>
        </a>
      </div>
    </main>
  );
}
