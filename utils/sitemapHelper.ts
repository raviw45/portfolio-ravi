import { MetadataRoute } from "next";
import { DOMAIN } from "@/config/constant";
import { blogData } from "@/data/blogData";
import { Blog } from "@/components/blogs/BlogDetail";
export const getAllBlogsFetch = () => blogData;
export const generateDynamicEntries =
  async (): Promise<MetadataRoute.Sitemap> => {
    const blogs = getAllBlogsFetch();
    const lastModified = new Date();

    return blogs.map((item: Blog) => ({
      url: `${DOMAIN}/blogs/${item.id}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    }));
  };
