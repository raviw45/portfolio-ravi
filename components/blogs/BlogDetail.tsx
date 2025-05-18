"use client";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

interface BlogContent {
  type: "text" | "code";
  content: string;
  language?: string;
}

export interface Blog {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  content: BlogContent[];
}

export default function BlogDetail({ blog }: { blog: Blog }) {
  return (
    <article className="py-24 overflow-hidden scroll-mt-20">
      <div className="w-[95%] md:w-[85%] mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-gradient bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">
          {blog.title}
        </h1>
        <time
          className="block mb-12 text-sm text-gray-500 dark:text-gray-400 tracking-wide font-mono"
          dateTime={blog.date}
        >
          Published on {blog.date}
        </time>

        <div className="space-y-8 text-lg leading-relaxed text-gray-800 dark:text-gray-300 font-sans">
          {blog.content.map((section, i) =>
            section.type === "text" ? (
              <p key={i} className="whitespace-pre-wrap">
                {section.content}
              </p>
            ) : (
              <SyntaxHighlighter
                key={i}
                language={section.language || "tsx"} // fallback language
                style={vscDarkPlus}
                className="rounded-md shadow-md p-6 overflow-x-auto"
                wrapLines={true}
                showLineNumbers={true}
              >
                {section.content}
              </SyntaxHighlighter>
            )
          )}
        </div>
      </div>
    </article>
  );
}
