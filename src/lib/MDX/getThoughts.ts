import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import Tag from "@/lib/NebulaUI/Reusables/Tag/Tag";
import Quote from "@/lib/NebulaUI/Reusables/Quote/Quote";
import QuoteBlock from "@/lib/NebulaUI/Reusables/QuoteBlock/QuoteBlock";
import Ref from "@/lib/NebulaUI/Reusables/Ref/Ref";

const rootDirectory = path.join(
  process.cwd(),
  "src",
  "lib",
  "Documents",
  "Thoughts",
);

export async function getThoughtsBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`);

  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });

  const { frontmatter, content } = await compileMDX({
    source: fileContent,
    options: { parseFrontmatter: true },
    components: {
      Tag,
      Quote,
      QuoteBlock,
      Ref,
    },
  });

  const meta = {
    slug: realSlug,
    title: frontmatter.title as string,
    date: frontmatter.date as string,
    link: frontmatter.link as string,
    description: frontmatter.description as string,
  };

  return { meta, content };
}

export const getThoughtsMeta = async () => {
  const files = fs.readdirSync(rootDirectory);

  let posts = [];

  for (const file of files) {
    const { meta } = await getThoughtsBySlug(file);
    posts.push(meta);
  }

  return posts;
};
