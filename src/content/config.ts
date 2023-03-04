import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        excerpt: z.string(),
        date: z.date(),
        tags: z.array(z.string()),
        author: z.enum(["andika"]),
        image: z.object({
            src: z.string(),
            alt: z.string(),
        }),
        draft: z.boolean(),
        publishedDate: z.date(),
    })
});

export const collection = {
    'blog': blogCollection,
};