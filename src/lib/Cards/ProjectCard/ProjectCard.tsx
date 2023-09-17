import styles from "./ProjectCard.module.scss";
import Link from "next/link";
import Image from "next/image";
import CardTypes from "@/lib/Config/Types/Types";
import Tag from "@/lib/NebulaUI/Reusables/Tag/Tag";
import Card from "@/lib/NebulaUI/Components/Card/Card";

export default function ProjectCard({
  title,
  description,
  date,
  status,
  link,
  img = "",
}: CardTypes) {
  return (
    <Card>
      <div className={styles.ProjectCard}>
        <div>
          <Image
            src={img}
            alt={title}
            height={250}
            width={250}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className={styles.cardProfile}>
          <section>
            <Tag>{date}</Tag>
            <Tag
              style={{
                background:
                  "linear-gradient(190deg, #ec3a91 50%, #5035dc 100%)",
              }}
            >
              {status}
            </Tag>
          </section>
          <Link href={link}>
            <h1>{title}</h1>
            <p>{description}</p>
          </Link>
        </div>
      </div>
    </Card>
  );
}
