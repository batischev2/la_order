import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import { App } from './src/components/App'
import { store } from './src/app/store'

const button = document.getElementById('button')
const container = document.getElementById('check-root')
const root = createRoot(container)

button.onclick = function () {
  container.style.display = 'block'
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  )
}
