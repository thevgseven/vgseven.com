import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import Image from "next/image";

const rootDirectory = path.join(
  process.cwd(),
  "src",
  "lib",
  "Documents",
  "Projects",
);

export async function getProjectsBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`);

  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });

  const { frontmatter, content } = await compileMDX({
    source: fileContent,
    options: { parseFrontmatter: true },
    components: {},
  });

  const meta = {
    slug: realSlug,
    title: frontmatter.title as string,
    description: frontmatter.description as string,
    status: frontmatter.status as string,
    date: frontmatter.date as string,
    img: frontmatter.img as string,
    link: frontmatter.link as string,
  };

  return { meta, content };
}

export const getProjectsMeta = async () => {
  const files = fs.readdirSync(rootDirectory);

  let posts = [];

  for (const file of files) {
    const { meta } = await getProjectsBySlug(file);
    posts.push(meta);
  }

  return posts;
};
