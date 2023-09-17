import styles from "@/styles/page.module.scss";
import { getArticlesBySlug } from "@/lib/MDX/getArticles";
import Tag from "@/lib/NebulaUI/Reusables/Tag/Tag";

const getPageContent = async (slug: string) => {
  const { meta, content } = await getArticlesBySlug(slug);
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

export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const { content } = await getPageContent(params.slug);
  return (
    <div>
      <div className={styles.ArticleHomePage}>
        <section>
          <Tag>17 July 2023</Tag>
          <Tag>Thinking</Tag>
          <Tag>VGSEVEN</Tag>
        </section>
        <h1>Is Our Brain Controlling Our Life ?</h1>
        <p>
          This quote may seem strange at times, but it is a hard truth of our
          life that is difficult to accept. As I have experienced so many times
          in my life, and I am sure that you have also experienced it many
          times, but have not thought about it yet. According to science, our
          body works under the control of our brain's instructions, and the
          brain has the information which we always provide through our eyes and
          ears mainly. This information is then used by the brain to process
          every request and provide the instructions to our body to perform any
          specific task. Therefore, what we think depends on what we have
          experienced and what we have in our brain system.
        </p>
      </div>
      <div className={styles.ArticlesPage}>
        {content}
        <h2>Suggested Articles</h2>
      </div>
    </div>
  );
}
