import { AllowedLang } from '@/constans/lang'
import { createDomain } from 'effector'

const lang = createDomain()
export const setLeng = lang.createEvent<AllowedLang>()
//создаем стор
export const $lang = lang
  .createStore(AllowedLang.RU)
  .on(setLeng, (_, lang) => lang)
