import { getThoughtsBySlug } from "@/lib/MDX/getThoughts";
import styles from "@/styles/page.module.scss";

const getPageContent = async (slug: string) => {
  const { meta, content } = await getThoughtsBySlug(slug);
  return { meta, content };
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { meta } = await getPageContent(params.slug);

  return { title: meta.title };
}

export default async function ThoughtsPage({
  params,
}: {
  params: { slug: string };
}) {
  const { content } = await getPageContent(params.slug);
  return <div className={styles.ArticlesPage}>{content}</div>;
}
