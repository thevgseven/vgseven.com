import styles from "@/styles/page.module.scss";
import { getProjectsBySlug } from "@/lib/MDX/getProjects";

const getPageContent = async (slug: string) => {
  const { meta, content } = await getProjectsBySlug(slug);
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

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const { content } = await getPageContent(params.slug);
  return <div className={styles.ArticlesPage}>{content}</div>;
}
