export interface ProjectChallenge {
  title: string
  problem: string
  solution: string
}

export interface ProjectMetric {
  label: string
  value: string
  description: string
}

export interface ProjectHighlight {
  title: string
  points: string[]
}

export interface Project {
  slug: string
  title: string
  subtitle: string
  category: "E-Commerce" | "AI & Web Apps" | "Full-Stack" | "Creative Engineering"
  role: string
  year: string
  featured: boolean
  description: string
  executiveSummary: string
  tech: string[]
  liveUrl?: string
  githubUrl?: string
  github?: string
  live?: string
  previewImage?: string
  previewAspectRatio?: "16/10" | "video"
  previewObjectPosition?: "top" | "center"
  images: string[]
  architecture: string[]
  challenges: ProjectChallenge[]
  metrics?: ProjectMetric[]
  highlights: ProjectHighlight[]
  keyDecisions: string[]
  lessonsLearned: string[]
}
