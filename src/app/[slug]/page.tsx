import styles from "@/styles/page.module.scss";
import { getPagesBySlug } from "@/lib/MDX/getPages";

const getPageContent = async (slug: string) => {
  const { meta, content } = await getPagesBySlug(slug);
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

export default async function SitePages({
  params,
}: {
  params: { slug: string };
}) {
  const { content } = await getPageContent(params.slug);
  return <div className={styles.ArticlesPage}>{content}</div>;
}
