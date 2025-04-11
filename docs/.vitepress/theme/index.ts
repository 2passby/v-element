import DefaultTheme from 'vitepress/theme'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import '@/styles/index.css'

library.add(fas)
import '../../../src/styles/index.css'

export default DefaultTheme
