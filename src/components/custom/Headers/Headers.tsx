'use client'
import { useLang } from '@/hooks/useLang'
const Headers = () => {
  const { lang, translation } = useLang()
  return (
    <header>
      <button></button>
      {translation[lang].header.menu_btn}
    </header>
  )
}

export default Headers
