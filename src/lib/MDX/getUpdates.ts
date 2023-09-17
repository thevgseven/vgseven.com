import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";

const rootDirectory = path.join(
  process.cwd(),
  "src",
  "lib",
  "Documents",
  "Updates",
);

export async function getUpdatesBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`);

  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });

  const { frontmatter, content } = await compileMDX({
    source: fileContent,
    options: { parseFrontmatter: true },
  });

  const meta = {
    slug: realSlug,
    title: frontmatter.title as string,
    description: frontmatter.description as string,
    status: frontmatter.status as string,
    date: frontmatter.date as string,
    link: frontmatter.link as string,
  };

  return { meta, content };
}

export const getUpdatesMeta = async () => {
  const files = fs.readdirSync(rootDirectory);

  let posts = [];

  for (const file of files) {
    const { meta } = await getUpdatesBySlug(file);
    posts.push(meta);
  }

  return posts;
};
