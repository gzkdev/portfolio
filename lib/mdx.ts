import fs from "fs"
import path from "path"
import matter from "gray-matter"

const contentPath = path.join(process.cwd(), "content")

export interface BaseFrontmatter {
  title: string
  description: string
  publishedAt: string
  slug: string
  image?: string
}

export function getMdxFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx")
}

export function readMdxFile<T = BaseFrontmatter>(filePath: string) {
  const rawContent = fs.readFileSync(filePath, "utf-8")
  const { data, content } = matter(rawContent)
  return { frontmatter: data as T, content }
}

export function getMdxData<T = BaseFrontmatter>(dir: string) {
  const fullDir = path.join(contentPath, dir)

  if (!fs.existsSync(fullDir)) {
    return []
  }

  const mdxFiles = getMdxFiles(fullDir)
  return mdxFiles
    .map((file) => {
      const filePath = path.join(fullDir, file)
      const { frontmatter, content } = readMdxFile<T>(filePath)
      const slug = path.basename(file, path.extname(file))

      return {
        frontmatter: { ...frontmatter, slug },
        content,
        slug,
      }
    })
    .sort((a, b) => {
      const aDate = (a.frontmatter as unknown as BaseFrontmatter).publishedAt
      const bDate = (b.frontmatter as unknown as BaseFrontmatter).publishedAt
      if (new Date(aDate) < new Date(bDate)) {
        return 1
      }
      return -1
    })
}

export function getMdxPost<T = BaseFrontmatter>(dir: string, slug: string) {
  const fullPath = path.join(contentPath, dir, `${slug}.mdx`)
  if (!fs.existsSync(fullPath)) return null

  const { frontmatter, content } = readMdxFile<T>(fullPath)
  return { frontmatter: { ...frontmatter, slug }, content, slug }
}
