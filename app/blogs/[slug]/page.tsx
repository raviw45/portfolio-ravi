// app/blogs/[id]/page.tsx

import { notFound } from "next/navigation";
import BlogDetail from "@/components/blogs/BlogDetail";
import { blogData } from "@/data/blogData";
import { Metadata } from "next";
import { getAllBlogsFetch } from "@/utils/sitemapHelper";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const allBlogs = getAllBlogsFetch();
  const blog = allBlogs.find((b) => b.id === slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  const canonicalUrl = `${process.env.NEXT_PUBLIC_DOMAIN}/blogs/${blog.id}`;

  return {
    title: `${blog.title} | Ravikant Waghmare`,
    description: blog.excerpt,
    alternates: {
      canonical: canonicalUrl,
    },
    publisher: "Ravikant Waghmare",
    creator: "Ravikant Waghmare",
    keywords: blog.id,
    openGraph: {
      url: canonicalUrl,
      title: `${blog.title} | Ravikant Waghmare`,
      description: blog.excerpt,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: false,
        noimageindex: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = blogData.find((b) => b.id === slug);
  if (!blog) return notFound();
  return <BlogDetail blog={blog} />;
}
