import { cn } from "@/lib/utils/cn";
import { Auge } from "@/lib/utils/fonts";
import { Badge } from "@/ui/reusables/badge";
import { type Metadata } from "next";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Radium",
};

export default function EinfiHome() {
  return (
    <div className={"mx-auto max-w-4xl mt-24 max-[970px]:mx-6"}>
      <h1 className={cn("text-4xl", Auge.className)}>
        Introducing Radium, Initialize your project to get started early.
      </h1>
      <div className={"my-4 flex gap-2"}>
        <Link href={"/"}>
          <Badge variant={"outline"}>
            <ArrowLeftIcon />
            &nbsp; Back
          </Badge>
        </Link>
        <Badge variant={"secondary"}>23 Oct 2023</Badge>
        <Badge>Radium</Badge>
      </div>
      <article className={"my-4"}>
        <h4 className={cn("text-xl font-medium", Auge.className)}>
          Init: Initialize your project environment.
        </h4>
        <p
          className={
            "my-4 dark:text-neutral-200 text-black tracking-wide leading-6"
          }
        >
          Welcome, developers and tech enthusiasts, to the future of streamlined
          project initiation and development! Today, we are thrilled to
          introduce you to Radium, a comprehensive tool designed to accelerate
          your development process and simplify your life.
        </p>
        <p
          className={
            "my-4 dark:text-neutral-200 text-black tracking-wide leading-6"
          }
        >
          In the fast-paced world of software development, every second counts.
          We understand that getting your project off the ground quickly and
          efficiently is crucial and it consumes to much time to setup an
          initial environment to get started. That is where Radium comes in.
          Radium offers Init that promises to revolutionize your development
          workflow.
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
