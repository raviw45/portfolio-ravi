"use client";
import Link from "next/link";
import { blogData } from "@/data/blogData";

export default function BlogList() {
  const today = new Date();

  // Show only blogs published today or earlier
  const filteredBlogs = blogData.filter((blog) => {
    const blogDate = new Date(blog.date);
    return blogDate <= today;
  });
  const sortedBlogs = [...filteredBlogs].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <section
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
      }}
      className="py-24 md:min-h-screen"
    >
      <div className="w-[95%] md:w-[85%] mx-auto max-w-7xl">
        <h1 className="text-3xl sm:text-4xl text-center font-bold mb-4 text-gradient bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">
          Latest Tech Blogs
        </h1>

        <div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 space-y-6"
          style={{ columnFill: "balance" }}
        >
          {sortedBlogs.map((blog) => (
            <article
              key={blog.id}
              className="break-inside-avoid bg-gray-50 dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 ring-2 ring-indigo-400 p-6 flex flex-col justify-between max-h-[350px]"
            >
              <div>
                <h2 className="text-center text-2xl font-semibold text-indigo-700 dark:text-indigo-300 mb-3 hover:text-indigo-500 transition-colors duration-200 min-h-[3.5rem] leading-tight overflow-hidden line-clamp-2">
                  <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
                </h2>

                <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed mb-8 min-h-[6.5rem] overflow-hidden line-clamp-4">
                  {blog.excerpt}
                </p>
              </div>

              <footer className="flex justify-between items-center bg-indigo-200 dark:bg-indigo-800 rounded-full px-4 py-2 text-sm text-indigo-900 dark:text-indigo-100 font-mono tracking-wide select-none">
                <span>
                  By <strong>Ravikant Waghmare</strong>
                </span>
                <time dateTime={blog.date}>{blog.date}</time>
              </footer>

              <Link
                href={`/blogs/${blog.id}`}
                className="mt-6 inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg text-center transition-colors duration-200"
                aria-label={`Read more about ${blog.title}`}
              >
                Read More →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
