import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import { App } from './src/components/App'
import { store } from './src/app/store'

const button = document.getElementById('button')
const container = document.getElementById('check-root')
const root = createRoot(container)

// получение data-аттрибутов с кнопки
const { orderId, checkId, companyId } = button.dataset

button.onclick = function () {
  container.style.display = 'block'
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App orderId={orderId} checkId={checkId} companyId={companyId} />
      </Provider>
    </React.StrictMode>
  )
}
