import Link from "next/link";
import CardTypes from "@/lib/Config/Types/Types";
import Tag from "@/lib/NebulaUI/Reusables/Tag/Tag";
import Card from "@/lib/NebulaUI/Components/Card/Card";

export default function UpdateCard({
  title,
  description,
  date,
  status,
  link,
}: CardTypes) {
  return (
    <Card>
      <Link href={link}>
        <h1>{title}</h1>
        <p>{description}</p>
      </Link>
      <Tag
        style={{
          background: "linear-gradient(190deg, #5b3eea 50%, #37dec3 100%)",
        }}
      >
        {status}
      </Tag>
      <Tag>{date}</Tag>
    </Card>
  );
}
