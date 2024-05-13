import { createRoot } from 'react-dom/client'
import { App } from './src/components/App'

const button = document.getElementById('button')
const modal = document.getElementById('check-root')
const root = createRoot(modal)

button.onclick = function () {
  modal.style.display = 'block'
  root.render(<App />)
}
