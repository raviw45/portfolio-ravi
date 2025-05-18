import BlogList from "@/components/blogs/BlogList";

export const metadata = {
  title: "Tech Blogs | Ravikant Waghmare | Full Stack Development | ",
  description:
    "Explore blogs on React, Next.js, Vite, java, spring boot and modern web development techniques.",
  alternates: {
    canonical: process.env.NEXT_PUBLIC_DOMAIN! + "blogs",
  },
};

export default function BlogsPage() {
  return <BlogList />;
}
