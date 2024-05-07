import { createRoot } from 'react-dom/client'
import { App } from './src/components/App'

// companyId и checkId из data-attribute
// input для выбора количества товара

const button = document.getElementById('button')
const modal = document.getElementById('root')
const root = createRoot(modal)

button.onclick = function () {
  modal.style.display = 'block'
  root.render(<App />)
}
