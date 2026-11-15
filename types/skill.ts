export type SkillCategory = "Frontend" | "Backend" | "Database" | "Architecture & Additional"

export interface SkillItem {
  name: string
  iconName?: string
  context: string
  featured?: boolean
}

export interface SkillGroup {
  category: SkillCategory
  description: string
  skills: SkillItem[]
}
