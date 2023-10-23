import { cn } from "@/lib/utils/cn";
import { Auge } from "@/lib/utils/fonts";
import { Badge } from "@/ui/reusables/badge";
import { type Metadata } from "next";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Einfi",
};

export default function EinfiHome() {
  return (
    <div className={"mx-auto max-w-4xl mt-24 max-[970px]:mx-6"}>
      <h1 className={cn("text-4xl", Auge.className)}>
        Introducing Einfi, The Next Generation of Information.
      </h1>
      <div className={"my-4 flex gap-2"}>
        <Link href={"/"}>
          <Badge variant={"outline"}>
            <ArrowLeftIcon />
            &nbsp; Back
          </Badge>
        </Link>
        <Badge variant={"secondary"}>23 Oct 2023</Badge>
        <Badge>Einfi</Badge>
      </div>
      <article className={"my-4"}>
        <h4 className={cn("text-xl font-medium", Auge.className)}>
          Einfi: Explore. Learn. Infinity: Information of Everything.
        </h4>
        <p
          className={
            "my-4 dark:text-neutral-200 text-black tracking-wide leading-6"
          }
        >
          Hello Internet, Dear Information enthusiasts, knowledge seekers, and
          future eternals! I am VGSEVEN, Founder of Einfi and I am thrilled to
          announce a revolutionary project, Einfi. It is time to explore the
          exciting journey we have embarked upon and dive deeper into the world
          of Einfi, the next generation of information-sharing.
        </p>
        <p
          className={
            "my-4 dark:text-neutral-200 text-black tracking-wide leading-6"
          }
        >
          Einfi is not just another website or online encyclopedia or clone of
          Wikipedia. It is a grand vision, a commitment to making knowledge
          accessible to everyone, and a platform designed to reshape how we
          access information and contribute to it also. Einfi aims to provide
          information on everything and anything in detail and must be trusted.
        </p>
        <p
          className={
            "my-4 dark:text-neutral-200 text-black tracking-wide leading-6"
          }
        >
          coming soon....
        </p>
      </article>
    </div>
  );
}
