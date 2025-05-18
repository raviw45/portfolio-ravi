import { notFound } from "next/navigation";
import BlogDetail from "@/components/blogs/BlogDetail";
import { blogData } from "@/data/blogData";

export function generateMetadata({ params }: { params: { id: string } }) {
  const blog = blogData.find((b) => b.id === params.id);
  if (!blog) return {};

  const canonicalUrl = process.env.NEXT_PUBLIC_DOMAIN! + `blogs/${blog.id}`;

  return {
    title: `${blog.title} | Ravikant Waghmare `,
    description: blog.excerpt,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      url: canonicalUrl,
      title: `${blog.title} | Ravikant Waghmare | React | Java`,
      description: blog.excerpt,
    },
  };
}

export default function BlogPage({ params }: { params: { id: string } }) {
  const blog = blogData.find((b) => b.id === params.id);
  if (!blog) return notFound();
  return <BlogDetail blog={blog} />;
}
