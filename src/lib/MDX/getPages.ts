import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import ContactForm from "@/lib/Forms/ContactForm/ContactForm";
import Ref from "@/lib/NebulaUI/Reusables/Ref/Ref";

const rootDirectory = path.join(
  process.cwd(),
  "src",
  "lib",
  "Documents",
  "Pages",
);

export async function getPagesBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`);

  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });

  const { frontmatter, content } = await compileMDX({
    source: fileContent,
    options: { parseFrontmatter: true },
    components: {
      ContactForm,
      Ref,
    },
  });

  const meta = {
    slug: realSlug,
    title: frontmatter.title as string,
  };

  return { meta, content };
}

export const getPagesMeta = async () => {
  const files = fs.readdirSync(rootDirectory);

  let posts = [];

  for (const file of files) {
    const { meta } = await getPagesBySlug(file);
    posts.push(meta);
  }

  return posts;
};
