// src/lib/validations/content.ts
import { z } from "zod"

export const contentFormSchema = z.object({
  title: z.string().min(3, "Başlık en az 3 karakter olmalı"),
  description: z.string().min(10, "Açıklama en az 10 karakter olmalı"),
  imageUrl: z.string().url("Geçerli bir URL giriniz"),
  links: z.array(z.object({
    title: z.string().min(1),
    url: z.string().url()
  })).max(4)
})