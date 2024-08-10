'use client'
import { $lang } from '@/constext/lang'
import { useUnit } from 'effector-react'
import trnaslateJson from '../lib/trnaslateJson.json'

export function useLang() {
  const lang = useUnit($lang)
  const translation = trnaslateJson
  return { lang, translation }
}
