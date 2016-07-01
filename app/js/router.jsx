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

page('/goals/create', (context) => {
  renderLayout({ context, page: 'goalCreate' })
})

page('/goals/:email?', (context) => {
  renderLayout({ context, page: 'goals', email: context.params.email })
})


page('/reviewee', (context) => {
  renderLayout({ context, page: 'reviewee' })
})

page('/mentee', (context) => {
  renderLayout({ context, page: 'mentee'})
})

page('*', (context) => {
  console.log(context);
})

page({ hashbang: true })
