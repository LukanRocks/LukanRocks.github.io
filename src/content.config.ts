import { defineCollection } from 'astro:content'
import { z } from 'astro/zod'
import { glob } from 'astro/loaders'

const baseSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  pubDate: z.coerce.date().optional(),
  updatedDate: z.coerce.date().optional(),
  draft: z.boolean().default(false),
  cover: z.string().optional(),
  tags: z.array(z.string()).default([]),
  lang: z.enum(['en', 'pt']).optional(),
  toc: z.union([z.boolean(), z.enum(['center', 'side'])]).optional(),
})

const thoughts = defineCollection({
  loader: glob({ base: './src/content/thoughts', pattern: '**/*.{md,mdx}' }),
  schema: baseSchema.extend({
    pubDate: z.coerce.date(),
    series: z.array(z.string()).optional(),
    seriesOrder: z.number().optional(),
  }),
})

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: baseSchema.extend({
    links: z
      .array(
        z.object({
          label: z.string(),
          url: z.string().url(),
          icon: z.string().optional(),
          variant: z.enum(['primary', 'secondary']).default('secondary'),
        }),
      )
      .default([]),
    featured: z.boolean().default(false),
  }),
})

const aboutExperience = z.object({
  company: z.string(),
  title: z.string(),
  location: z.string().optional(),
  start: z.string(),
  end: z.string(),
  description: z.string().optional(),
  highlights: z.array(z.string()).optional(),
  stack: z.array(z.string()).optional(),
})

const aboutEducation = z.object({
  institution: z.string(),
  degree: z.string(),
  location: z.string().optional(),
  start: z.string(),
  end: z.string(),
  description: z.string().optional(),
})

const aboutSkillGroup = z.object({
  category: z.string(),
  items: z.array(z.string()),
})

const aboutCertification = z.object({
  name: z.string(),
  issuer: z.string(),
  date: z.string().optional(),
  url: z.string().optional(),
})

const aboutLanguage = z.object({
  language: z.string(),
  level: z.string(),
})

const pages = defineCollection({
  loader: glob({ base: './src/content/pages', pattern: '**/*.{md,mdx}' }),
  schema: baseSchema.extend({
    layout: z.enum(['page', 'timeline', 'about']).default('page'),
    name: z.string().optional(),
    jobTitle: z.string().optional(),
    location: z.string().optional(),
    email: z.string().optional(),
    phone: z.string().optional(),
    website: z.string().optional(),
    linkedin: z.string().optional(),
    github: z.string().optional(),
    summary: z.string().optional(),
    experience: z.array(aboutExperience).optional(),
    education: z.array(aboutEducation).optional(),
    skills: z.array(aboutSkillGroup).optional(),
    certifications: z.array(aboutCertification).optional(),
    languages: z.array(aboutLanguage).optional(),
  }),
})

const series = defineCollection({
  loader: glob({ base: './src/content/series', pattern: '**/*.{md,mdx}' }),
  schema: baseSchema,
})

export const collections = {
  thoughts,
  projects,
  pages,
  series,
}
