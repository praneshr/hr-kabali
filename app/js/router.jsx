import ReactDOM from 'react-dom'
import React from 'react'
import page from 'page'
import Index from './store/index'


const renderLayout = (context) => {
  const target = document.getElementById('app')
  ReactDOM.render(
    <Index {...context} />,
    target
  )
}

page('/', '/dashboard')

page('/dashboard', (context) => {
  renderLayout({ context, page: 'dashboard' })
})

page('/goals', (context) => {
  console.log('inside');
  renderLayout({ context, page: 'goals' })
})

page('/goals/create', (context) => {
  renderLayout({ context, page: 'goalCreate' })
})
page('*', (context) => {
  console.log(context);
})

page({ hashbang: true })
