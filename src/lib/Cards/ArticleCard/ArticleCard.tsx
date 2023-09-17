import Link from "next/link";
import Tag from "@/lib/NebulaUI/Reusables/Tag/Tag";
import CardTypes from "@/lib/Config/Types/Types";
import Card from "@/lib/NebulaUI/Components/Card/Card";
import { DMSerifDisplay } from "@/lib/Config/Fonts/Fonts";

export default function ArticleCard({
  title,
  description,
  status,
  link,
  date,
}: CardTypes) {
  return (
    <Card>
      <Tag
        style={{
          background: "linear-gradient(190deg, #e5e533 50%, #dc2d84 100%)",
        }}
      >
        {status}
      </Tag>
      <Tag>{date}</Tag>
      <Link href={link}>
        <h1>{title}</h1>
        <p>{description}</p>
      </Link>
    </Card>
  );
}
