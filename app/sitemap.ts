import { MetadataRoute } from "next"
import { projectsData } from "@/data/projects"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://usman-portfolio-jet.vercel.app"
  const currentDate = new Date().toISOString()

  const projectUrls = projectsData.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...projectUrls,
  ]
}
