var tpj = jQuery
var revapi10
if (window.RS_MODULES === undefined) window.RS_MODULES = {}
if (RS_MODULES.modules === undefined) RS_MODULES.modules = {}
RS_MODULES.modules['revslider101'] = {
  once:
    RS_MODULES.modules['revslider101'] !== undefined
      ? RS_MODULES.modules['revslider101'].once
      : undefined,
  init: function () {
    window.revapi10 =
      window.revapi10 === undefined ||
      window.revapi10 === null ||
      window.revapi10.length === 0
        ? document.getElementById('rev_slider_10_1')
        : window.revapi10
    if (
      window.revapi10 === null ||
      window.revapi10 === undefined ||
      window.revapi10.length == 0
    ) {
      window.revapi10initTry =
        window.revapi10initTry === undefined ? 0 : window.revapi10initTry + 1
      if (window.revapi10initTry < 20)
        requestAnimationFrame(function () {
          RS_MODULES.modules['revslider101'].init()
        })
      return
    }
    window.revapi10 = jQuery(window.revapi10)
    if (window.revapi10.revolution == undefined) {
      revslider_showDoubleJqueryError('rev_slider_10_1')
      return
    }
    revapi10.revolutionInit({
      revapi: 'revapi10',
      DPR: 'dpr',
      sliderLayout: 'fullwidth',
      duration: '6000ms',
      visibilityLevels: '1240,1024,778,480',
      gridwidth: '1410,1350,992,768',
      gridheight: '780,780,850,900',
      minHeight: '750px',
      lazyType: 'smart',
      perspective: 600,
      perspectiveType: 'global',
      editorheight: '780,780,850,900',
      responsiveLevels: '1240,1024,778,480',
      progressBar: { disableProgressBar: true },
      navigation: {
        wheelCallDelay: 1000,
        onHoverStop: false,
        touch: {
          touchenabled: true,
          touchOnDesktop: true,
        },
      },
      viewPort: {
        global: true,
        globalDist: '-200px',
        enable: false,
      },
      fallbacks: {
        allowHTML5AutoPlayOnAndroid: true,
      },
    })
  },
}
if (window.RS_MODULES.checkMinimal !== undefined) {
  window.RS_MODULES.checkMinimal()
}
