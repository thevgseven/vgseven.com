import Link from "next/link";
import CardTypes from "@/lib/Config/Types/Types";
import Tag from "@/lib/NebulaUI/Reusables/Tag/Tag";
import Card from "@/lib/NebulaUI/Components/Card/Card";

export default function ThoughtCard({ title, date, link }: CardTypes) {
  return (
    <Card>
      <section>
        <Tag>{date}</Tag>
      </section>
      <Link href={link}>
        <h1>{title}</h1>
      </Link>
    </Card>
  );
}
