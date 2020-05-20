const markdown = require('markdown-it')
const highlight = require('./highlight')
const cardWrapper = require('./card-wrapper')

function markLoader(src) {
  const md = markdown({
    html: true,
    highlight
  })
  const html = cardWrapper(md.render(src))

  return `<template>
      <div class="markdown">${html}</div>
    </template>`
}

module.exports = markLoader
