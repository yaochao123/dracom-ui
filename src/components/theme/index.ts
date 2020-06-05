interface theme {
  setStyle: Function
  getStyle: Function
  clearStyle: Function
}

const DrTheme: any = {
  install: (Vue: any) => {

    /**
     * @function 返回设置样式内容
     * @param contentObject 设置样式对象
     * @param cssSelector css选择器（暂不开放）
     * @returns 设置的样式内容
     */
    function setStyleContent(contentObject: any, cssSelector: string) {
      let contentArray = []
      for (const key in contentObject) {
        if (contentObject.hasOwnProperty(key)) {
          contentObject[key] && contentArray.push(`${key}:${contentObject[key]}`)
        }
      }
      // return `${cssSelector}{${contentArray.join(';')}}`
      return `:root{${contentArray.join(';')}}`
    }

    /**
     * @function 返回获取的样式对象
     * @param contentString 
     */
    function getStyleContent(contentString: string) {
      let arrayStr = contentString.split(/{([^}]*)}/)[1]
      let styleArray = arrayStr.split(';')
      let styleObject = {}
      styleArray.forEach(k => {
        let obj = k.split(':')
        styleObject[obj[0]] = obj[1]
      })
      return styleObject
    }

    const theme: theme = {
      /**
       * @function 设置选择器主题style样式标签
       * @param contentObject 设置样式对象
       * @param cssSelector css选择器（暂不开放）
       */
      setStyle(contentObject: object, cssSelector: string = ':root') {
        // let oldThemeStyle = document.querySelector(`head style[data-type='${cssSelector}-theme']`)
        let oldThemeStyle = document.querySelector(`head style[data-type=':root-theme']`)
        if (oldThemeStyle) {
          oldThemeStyle.innerHTML = setStyleContent(Object.assign({}, getStyleContent(oldThemeStyle.innerHTML), contentObject), cssSelector)
        } else {
          let head = document.querySelector('head')
          let style = document.createElement('style')
          style.type = 'text/css'
          // style.dataset.type = `${cssSelector}-theme`
          style.dataset.type = `:root-theme`
          style.appendChild(document.createTextNode(setStyleContent(contentObject, cssSelector)))
          head?.appendChild(style)
        }
      },
      /**
       * @function 获取选择器主题style样式
       * @param contentArray 需要获取的style样式
       * @param cssSelector css选择器（暂不开放）
       */
      getStyle(contentArray: string[] = [], cssSelector: string = ':root') {
        // let oldThemeStyle = document.querySelector(`head style[data-type='${cssSelector}-theme']`)
        let oldThemeStyle = document.querySelector(`head style[data-type=':root-theme']`)
        let contentObject = {}
        let getContent = oldThemeStyle ? getStyleContent(oldThemeStyle.innerHTML) : {}

        if (contentArray.length) {
          contentArray.forEach(k => {
            contentObject[k] = getContent[k]
          })
          return contentObject
        } else {
          return getContent
        }
      },
      /**
       * @function 清理选择器主题style样式
       * @param contentArray 需要清理的style样式
       * @param cssSelector css选择器（暂不开放）
       */
      clearStyle(contentArray: string[] = [], cssSelector: string = ':root') {
        // let oldThemeStyle = document.querySelector(`head style[data-type='${cssSelector}-theme']`)
        let oldThemeStyle = document.querySelector(`head style[data-type=':root-theme']`)
        let contentObject = {}
        if (contentArray.length) {
          contentArray.forEach(k => {
            contentObject[k] = undefined
          })
          if (oldThemeStyle) {
            oldThemeStyle.innerHTML = setStyleContent(Object.assign({}, getStyleContent(oldThemeStyle.innerHTML), contentObject), cssSelector)
          }
        } else {
          if (oldThemeStyle) {
            document.querySelector('head')?.removeChild(oldThemeStyle)
          }
        }
      }
    }
    Vue.prototype.$theme = theme
  },
}
export default DrTheme
