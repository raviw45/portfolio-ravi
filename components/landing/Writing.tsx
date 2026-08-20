import React from "react";
import Link from "next/link";
import { blogData } from "@/data/blogData";
import Reveal from "./Reveal";

const getLatestPosts = () => {
  const today = new Date();
  return [...blogData]
    .filter((blog) => new Date(blog.date) <= today)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 4);
};

const Writing = () => {
  const posts = getLatestPosts();
  if (posts.length === 0) return null;

  return (
    <section id="writing" className="px-[22px] pb-24">
      <div className="max-w-[1180px] mx-auto">
        <Reveal className="flex items-center gap-3 mb-[26px]">
          <span className="w-[26px] h-0.5 rounded-sm bg-[var(--pg-accent)]" />
          <span className="text-xs uppercase text-[var(--pg-faint)]" style={{ letterSpacing: ".14em" }}>
            Writing
          </span>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-4">
          {posts.map((post, i) => (
            <Reveal key={post.id} delay={i * 0.05}>
              <Link
                href={`/blogs/${post.id}`}
                className="block p-[22px] rounded-[14px] border transition-all hover:-translate-y-1 hover:border-[var(--pg-accent)]"
                style={{ borderColor: "var(--pg-line)", background: "var(--pg-surface-2)", color: "var(--pg-text)" }}
              >
                <div className="text-xs mb-2 text-[var(--pg-faint)]">
                  <time dateTime={post.date}>{post.date}</time>
                </div>
                <h3 className="text-[17px] font-semibold mb-[7px]">{post.title}</h3>
                <p className="text-[14.5px] leading-[1.6] text-[var(--pg-muted)]">{post.excerpt}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Writing;
