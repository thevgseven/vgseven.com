import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@ui/reusables/card";
import { Badge } from "@ui/reusables/badge";
import { Auge } from "@/lib/utils/fonts";
import Link from "next/link";

type ProjectCardSchema = {
  title: string;
  summary: string;
  description: string;
  date: string;
  tag: string;
  link: string;
};

export default function ProjectCard(props: ProjectCardSchema) {
  return (
    <Link href={props.link}>
      <Card
        className={
          "max-w-[38rem] hover:bg-zinc-200 dark:hover:bg-neutral-900 hover:cursor-pointer"
        }
      >
        <CardHeader>
          <CardTitle className={Auge.className}>{props.title}</CardTitle>
          <CardDescription>{props.summary}</CardDescription>
        </CardHeader>
        <CardContent>{props.description}</CardContent>
        <CardFooter className={"flex gap-2"}>
          <Badge variant={"secondary"}>{props.date}</Badge>
          <Badge>{props.tag}</Badge>
        </CardFooter>
      </Card>
    </Link>
  );
}
