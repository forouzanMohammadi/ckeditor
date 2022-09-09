jQuery(function (r) {
  if ('undefined' == typeof wc_cart_fragments_params) return !1
  var t = !0,
    o = wc_cart_fragments_params.cart_hash_key
  try {
    ;(t = 'sessionStorage' in window && null !== window.sessionStorage),
      window.sessionStorage.setItem('wc', 'test'),
      window.sessionStorage.removeItem('wc'),
      window.localStorage.setItem('wc', 'test'),
      window.localStorage.removeItem('wc')
  } catch (f) {
    t = !1
  }
  function a() {
    t && sessionStorage.setItem('wc_cart_created', new Date().getTime())
  }
  function s(e) {
    t && (localStorage.setItem(o, e), sessionStorage.setItem(o, e))
  }
  var e = {
    url: wc_cart_fragments_params.wc_ajax_url
      .toString()
      .replace('%%endpoint%%', 'get_refreshed_fragments'),
    type: 'POST',
    data: { time: new Date().getTime() },
    timeout: wc_cart_fragments_params.request_timeout,
    success: function (e) {
      e &&
        e.fragments &&
        (r.each(e.fragments, function (e, t) {
          r(e).replaceWith(t)
        }),
        t &&
          (sessionStorage.setItem(
            wc_cart_fragments_params.fragment_name,
            JSON.stringify(e.fragments),
          ),
          s(e.cart_hash),
          e.cart_hash && a()),
        r(document.body).trigger('wc_fragments_refreshed'))
    },
    error: function () {
      r(document.body).trigger('wc_fragments_ajax_error')
    },
  }
  function n() {
    r.ajax(e)
  }
  if (t) {
    var i = null
    r(document.body).on('wc_fragment_refresh updated_wc_div', function () {
      n()
    }),
      r(document.body).on('added_to_cart removed_from_cart', function (
        e,
        t,
        r,
      ) {
        var n = sessionStorage.getItem(o)
        ;(null !== n && n !== undefined && '' !== n) || a(),
          sessionStorage.setItem(
            wc_cart_fragments_params.fragment_name,
            JSON.stringify(t),
          ),
          s(r)
      }),
      r(document.body).on('wc_fragments_refreshed', function () {
        clearTimeout(i), (i = setTimeout(n, 864e5))
      }),
      r(window).on('storage onstorage', function (e) {
        o === e.originalEvent.key &&
          localStorage.getItem(o) !== sessionStorage.getItem(o) &&
          n()
      }),
      r(window).on('pageshow', function (e) {
        e.originalEvent.persisted &&
          (r('.widget_shopping_cart_content').empty(),
          r(document.body).trigger('wc_fragment_refresh'))
      })
    try {
      var c = JSON.parse(
          sessionStorage.getItem(wc_cart_fragments_params.fragment_name),
        ),
        _ = sessionStorage.getItem(o),
        g = Cookies.get('woocommerce_cart_hash'),
        m = sessionStorage.getItem('wc_cart_created')
      if (
        ((null !== _ && _ !== undefined && '' !== _) || (_ = ''),
        (null !== g && g !== undefined && '' !== g) || (g = ''),
        _ && (null === m || m === undefined || '' === m))
      )
        throw 'No cart_created'
      if (m) {
        var d = +m + 864e5,
          w = new Date().getTime()
        if (d < w) throw 'Fragment expired'
        i = setTimeout(n, d - w)
      }
      if (!c || !c['div.widget_shopping_cart_content'] || _ !== g)
        throw 'No fragment'
      r.each(c, function (e, t) {
        r(e).replaceWith(t)
      }),
        r(document.body).trigger('wc_fragments_loaded')
    } catch (f) {
      n()
    }
  } else n()
  0 < Cookies.get('woocommerce_items_in_cart')
    ? r('.hide_cart_widget_if_empty').closest('.widget_shopping_cart').show()
    : r('.hide_cart_widget_if_empty').closest('.widget_shopping_cart').hide(),
    r(document.body).on('adding_to_cart', function () {
      r('.hide_cart_widget_if_empty').closest('.widget_shopping_cart').show()
    }),
    'undefined' != typeof wp &&
      wp.customize &&
      wp.customize.selectiveRefresh &&
      wp.customize.widgetsPreview &&
      wp.customize.widgetsPreview.WidgetPartial &&
      wp.customize.selectiveRefresh.bind(
        'partial-content-rendered',
        function () {
          n()
        },
      )
})
;(function ($) {
  $.fn.tableHeadFixer = function (param) {
    return this.each(function () {
      table.call(this)
    })
    function table() {
      {
        var defaults = {
          head: true,
          foot: false,
          left: 0,
          right: 0,
          'z-index': 0,
        }
        var settings = $.extend({}, defaults, param)
        settings.table = this
        settings.parent = $(settings.table).parent()
        setParent()
        if (settings.head == true) {
          fixHead()
        }
        if (settings.foot == true) {
          fixFoot()
        }
        if (settings.left > 0) {
          fixLeft()
        }
        if (settings.right > 0) {
          fixRight()
        }
        setCorner()
        $(settings.parent).trigger('scroll')
        $(window).resize(function () {
          $(settings.parent).trigger('scroll')
        })
        function setCorner() {
          var table = $(settings.table)
          if (settings.head) {
            if (settings.left > 0) {
              var tr = table.find('thead tr')
              tr.each(function (k, row) {
                solverLeftColspan(row, function (cell) {
                  $(cell).css('z-index', settings['z-index'] + 1)
                })
              })
            }
            if (settings.right > 0) {
              var tr = table.find('thead tr')
              tr.each(function (k, row) {
                solveRightColspan(row, function (cell) {
                  $(cell).css('z-index', settings['z-index'] + 1)
                })
              })
            }
          }
          if (settings.foot) {
            if (settings.left > 0) {
              var tr = table.find('tfoot tr')
              tr.each(function (k, row) {
                solverLeftColspan(row, function (cell) {
                  $(cell).css('z-index', settings['z-index'])
                })
              })
            }
            if (settings.right > 0) {
              var tr = table.find('tfoot tr')
              tr.each(function (k, row) {
                solveRightColspan(row, function (cell) {
                  $(cell).css('z-index', settings['z-index'])
                })
              })
            }
          }
        }
        function setParent() {
          var parent = $(settings.parent)
          var table = $(settings.table)
          parent.append(table)
          parent.css({
            'overflow-x': 'auto',
            'overflow-y': 'auto',
          })
          parent.scroll(
            function () {
              var scrollWidth = parent[0].scrollWidth
              var clientWidth = parent[0].clientWidth
              var scrollHeight = parent[0].scrollHeight
              var clientHeight = parent[0].clientHeight
              var top = parent.scrollTop()
              var left = parent.scrollLeft()
              if (settings.head) {
                this.find('thead tr > *').css('top', top)
              }
              if (settings.foot) {
                this.find('tfoot tr > *').css(
                  'bottom',
                  scrollHeight - clientHeight - top,
                )
              }
              if (settings.left > 0) {
                settings.leftColumns.css('left', left)
              }
              if (settings.right > 0) {
                settings.rightColumns.css(
                  'right',
                  scrollWidth - clientWidth - left,
                )
              }
            }.bind(table),
          )
        }
        function fixHead() {
          var thead = $(settings.table).find('thead')
          var tr = thead.find('tr')
          var cells = thead.find('tr > *')
          setBackground(cells)
          cells.css({
            position: 'relative',
          })
        }
        function fixFoot() {
          var tfoot = $(settings.table).find('tfoot')
          var tr = tfoot.find('tr')
          var cells = tfoot.find('tr > *')
          setBackground(cells)
          cells.css({
            position: 'relative',
          })
        }
        function fixLeft() {
          var table = $(settings.table)
          settings.leftColumns = $()
          var tr = table.find('tr')
          tr.each(function (k, row) {
            solverLeftColspan(row, function (cell) {
              settings.leftColumns = settings.leftColumns.add(cell)
            })
          })
          var column = settings.leftColumns
          column.each(function (k, cell) {
            var cell = $(cell)
            setBackground(cell)
            cell.css({
              position: 'relative',
            })
          })
        }
        function fixRight() {
          var table = $(settings.table)
          var fixColumn = settings.right
          settings.rightColumns = $()
          var tr = table.find('tr')
          tr.each(function (k, row) {
            solveRightColspan(row, function (cell) {
              settings.rightColumns = settings.rightColumns.add(cell)
            })
          })
          var column = settings.rightColumns
          column.each(function (k, cell) {
            var cell = $(cell)
            setBackground(cell)
            cell.css({
              position: 'relative',
            })
          })
        }
        function setBackground(elements) {
          return false
          elements.each(function (k, element) {
            var element = $(element)
            var parent = $(element).parent()
            var elementBackground = element.css('background-color')
            elementBackground =
              elementBackground == 'transparent' ||
              elementBackground == 'rgba(0, 0, 0, 0)'
                ? null
                : elementBackground
            var parentBackground = parent.css('background-color')
            parentBackground =
              parentBackground == 'transparent' ||
              parentBackground == 'rgba(0, 0, 0, 0)'
                ? null
                : parentBackground
            var background = parentBackground ? parentBackground : 'white'
            background = elementBackground ? elementBackground : background
            element.css('background-color', background)
          })
        }
        function solverLeftColspan(row, action) {
          var fixColumn = settings.left
          var inc = 1
          for (var i = 1; i <= fixColumn; i = i + inc) {
            var nth = inc > 1 ? i - 1 : i
            var cell = $(row).find('> *:nth-child(' + nth + ')')
            var colspan = cell.prop('colspan')
            if (cell.cellPos().left < fixColumn) {
              action(cell)
            }
            inc = colspan
          }
        }
        function solveRightColspan(row, action) {
          var fixColumn = settings.right
          var inc = 1
          for (var i = 1; i <= fixColumn; i = i + inc) {
            var nth = inc > 1 ? i - 1 : i
            var cell = $(row).find('> *:nth-last-child(' + nth + ')')
            var colspan = cell.prop('colspan')
            action(cell)
            inc = colspan
          }
        }
      }
    }
  }
})(jQuery)
/*  cellPos jQuery plugin
---------------------
Get visual position of cell in HTML table (or its block like thead).
Return value is object with "top" and "left" properties set to row and column index of top-left cell corner.
Example of use:
$("#myTable tbody td").each(function(){
$(this).text($(this).cellPos().top +", "+ $(this).cellPos().left);
});
*/
;(function ($) {
  function scanTable($table) {
    var m = []
    $table.children('tr').each(function (y, row) {
      $(row)
        .children('td, th')
        .each(function (x, cell) {
          var $cell = $(cell),
            cspan = $cell.attr('colspan') | 0,
            rspan = $cell.attr('rowspan') | 0,
            tx,
            ty
          cspan = cspan ? cspan : 1
          rspan = rspan ? rspan : 1
          for (; m[y] && m[y][x]; ++x) {}
          for (tx = x; tx < x + cspan; ++tx) {
            for (ty = y; ty < y + rspan; ++ty) {
              if (!m[ty]) {
                m[ty] = []
              }
              m[ty][tx] = true
            }
          }
          var pos = { top: y, left: x }
          $cell.data('cellPos', pos)
        })
    })
  }
  $.fn.cellPos = function (rescan) {
    var $cell = this.first(),
      pos = $cell.data('cellPos')
    if (!pos || rescan) {
      var $table = $cell.closest('table, thead, tbody, tfoot')
      scanTable($table)
    }
    pos = $cell.data('cellPos')
    return pos
  }
})(jQuery)
!(function t(e, n, r) {
  function o(i, s) {
    if (!n[i]) {
      if (!e[i]) {
        var a = 'function' == typeof require && require
        if (!s && a) return a(i, !0)
        if (l) return l(i, !0)
        var c = new Error("Cannot find module '" + i + "'")
        throw ((c.code = 'MODULE_NOT_FOUND'), c)
      }
      var u = (n[i] = { exports: {} })
      e[i][0].call(
        u.exports,
        function (t) {
          var n = e[i][1][t]
          return o(n ? n : t)
        },
        u,
        u.exports,
        t,
        e,
        n,
        r,
      )
    }
    return n[i].exports
  }
  for (
    var l = 'function' == typeof require && require, i = 0;
    i < r.length;
    i++
  )
    o(r[i])
  return o
})(
  {
    1: [
      function (t, e, n) {
        'use strict'
        function r(t) {
          t.fn.perfectScrollbar = function (t) {
            return this.each(function () {
              if ('object' == typeof t || 'undefined' == typeof t) {
                var e = t
                l.get(this) || o.initialize(this, e)
              } else {
                var n = t
                'update' === n
                  ? o.update(this)
                  : 'destroy' === n && o.destroy(this)
              }
            })
          }
        }
        var o = t('../main'),
          l = t('../plugin/instances')
        if ('function' == typeof define && define.amd) define(['jquery'], r)
        else {
          var i = window.jQuery ? window.jQuery : window.$
          'undefined' != typeof i && r(i)
        }
        e.exports = r
      },
      { '../main': 7, '../plugin/instances': 18 },
    ],
    2: [
      function (t, e, n) {
        'use strict'
        function r(t, e) {
          var n = t.className.split(' ')
          n.indexOf(e) < 0 && n.push(e), (t.className = n.join(' '))
        }
        function o(t, e) {
          var n = t.className.split(' '),
            r = n.indexOf(e)
          r >= 0 && n.splice(r, 1), (t.className = n.join(' '))
        }
        ;(n.add = function (t, e) {
          t.classList ? t.classList.add(e) : r(t, e)
        }),
          (n.remove = function (t, e) {
            t.classList ? t.classList.remove(e) : o(t, e)
          }),
          (n.list = function (t) {
            return t.classList
              ? Array.prototype.slice.apply(t.classList)
              : t.className.split(' ')
          })
      },
      {},
    ],
    3: [
      function (t, e, n) {
        'use strict'
        function r(t, e) {
          return window.getComputedStyle(t)[e]
        }
        function o(t, e, n) {
          return (
            'number' == typeof n && (n = n.toString() + 'px'),
            (t.style[e] = n),
            t
          )
        }
        function l(t, e) {
          for (var n in e) {
            var r = e[n]
            'number' == typeof r && (r = r.toString() + 'px'), (t.style[n] = r)
          }
          return t
        }
        var i = {}
        ;(i.e = function (t, e) {
          var n = document.createElement(t)
          return (n.className = e), n
        }),
          (i.appendTo = function (t, e) {
            return e.appendChild(t), t
          }),
          (i.css = function (t, e, n) {
            return 'object' == typeof e
              ? l(t, e)
              : 'undefined' == typeof n
              ? r(t, e)
              : o(t, e, n)
          }),
          (i.matches = function (t, e) {
            return 'undefined' != typeof t.matches
              ? t.matches(e)
              : 'undefined' != typeof t.matchesSelector
              ? t.matchesSelector(e)
              : 'undefined' != typeof t.webkitMatchesSelector
              ? t.webkitMatchesSelector(e)
              : 'undefined' != typeof t.mozMatchesSelector
              ? t.mozMatchesSelector(e)
              : 'undefined' != typeof t.msMatchesSelector
              ? t.msMatchesSelector(e)
              : void 0
          }),
          (i.remove = function (t) {
            'undefined' != typeof t.remove
              ? t.remove()
              : t.parentNode && t.parentNode.removeChild(t)
          }),
          (i.queryChildren = function (t, e) {
            return Array.prototype.filter.call(t.childNodes, function (t) {
              return i.matches(t, e)
            })
          }),
          (e.exports = i)
      },
      {},
    ],
    4: [
      function (t, e, n) {
        'use strict'
        var r = function (t) {
          ;(this.element = t), (this.events = {})
        }
        ;(r.prototype.bind = function (t, e) {
          'undefined' == typeof this.events[t] && (this.events[t] = []),
            this.events[t].push(e),
            this.element.addEventListener(t, e, !1)
        }),
          (r.prototype.unbind = function (t, e) {
            var n = 'undefined' != typeof e
            this.events[t] = this.events[t].filter(function (r) {
              return (
                !(!n || r === e) ||
                (this.element.removeEventListener(t, r, !1), !1)
              )
            }, this)
          }),
          (r.prototype.unbindAll = function () {
            for (var t in this.events) this.unbind(t)
          })
        var o = function () {
          this.eventElements = []
        }
        ;(o.prototype.eventElement = function (t) {
          var e = this.eventElements.filter(function (e) {
            return e.element === t
          })[0]
          return (
            'undefined' == typeof e &&
              ((e = new r(t)), this.eventElements.push(e)),
            e
          )
        }),
          (o.prototype.bind = function (t, e, n) {
            this.eventElement(t).bind(e, n)
          }),
          (o.prototype.unbind = function (t, e, n) {
            this.eventElement(t).unbind(e, n)
          }),
          (o.prototype.unbindAll = function () {
            for (var t = 0; t < this.eventElements.length; t++)
              this.eventElements[t].unbindAll()
          }),
          (o.prototype.once = function (t, e, n) {
            var r = this.eventElement(t),
              o = function (t) {
                r.unbind(e, o), n(t)
              }
            r.bind(e, o)
          }),
          (e.exports = o)
      },
      {},
    ],
    5: [
      function (t, e, n) {
        'use strict'
        e.exports = (function () {
          function t() {
            return Math.floor(65536 * (1 + Math.random()))
              .toString(16)
              .substring(1)
          }
          return function () {
            return (
              t() +
              t() +
              '-' +
              t() +
              '-' +
              t() +
              '-' +
              t() +
              '-' +
              t() +
              t() +
              t()
            )
          }
        })()
      },
      {},
    ],
    6: [
      function (t, e, n) {
        'use strict'
        var r = t('./class'),
          o = t('./dom'),
          l = (n.toInt = function (t) {
            return parseInt(t, 10) || 0
          }),
          i = (n.clone = function (t) {
            if (t) {
              if (t.constructor === Array) return t.map(i)
              if ('object' == typeof t) {
                var e = {}
                for (var n in t) e[n] = i(t[n])
                return e
              }
              return t
            }
            return null
          })
        ;(n.extend = function (t, e) {
          var n = i(t)
          for (var r in e) n[r] = i(e[r])
          return n
        }),
          (n.isEditable = function (t) {
            return (
              o.matches(t, 'input,[contenteditable]') ||
              o.matches(t, 'select,[contenteditable]') ||
              o.matches(t, 'textarea,[contenteditable]') ||
              o.matches(t, 'button,[contenteditable]')
            )
          }),
          (n.removePsClasses = function (t) {
            for (var e = r.list(t), n = 0; n < e.length; n++) {
              var o = e[n]
              0 === o.indexOf('ps-') && r.remove(t, o)
            }
          }),
          (n.outerWidth = function (t) {
            return (
              l(o.css(t, 'width')) +
              l(o.css(t, 'paddingLeft')) +
              l(o.css(t, 'paddingRight')) +
              l(o.css(t, 'borderLeftWidth')) +
              l(o.css(t, 'borderRightWidth'))
            )
          }),
          (n.startScrolling = function (t, e) {
            r.add(t, 'ps-in-scrolling'),
              'undefined' != typeof e
                ? r.add(t, 'ps-' + e)
                : (r.add(t, 'ps-x'), r.add(t, 'ps-y'))
          }),
          (n.stopScrolling = function (t, e) {
            r.remove(t, 'ps-in-scrolling'),
              'undefined' != typeof e
                ? r.remove(t, 'ps-' + e)
                : (r.remove(t, 'ps-x'), r.remove(t, 'ps-y'))
          }),
          (n.env = {
            isWebKit: 'WebkitAppearance' in document.documentElement.style,
            supportsTouch:
              'ontouchstart' in window ||
              (window.DocumentTouch &&
                document instanceof window.DocumentTouch),
            supportsIePointer: null !== window.navigator.msMaxTouchPoints,
          })
      },
      { './class': 2, './dom': 3 },
    ],
    7: [
      function (t, e, n) {
        'use strict'
        var r = t('./plugin/destroy'),
          o = t('./plugin/initialize'),
          l = t('./plugin/update')
        e.exports = { initialize: o, update: l, destroy: r }
      },
      {
        './plugin/destroy': 9,
        './plugin/initialize': 17,
        './plugin/update': 21,
      },
    ],
    8: [
      function (t, e, n) {
        'use strict'
        e.exports = {
          handlers: [
            'click-rail',
            'drag-scrollbar',
            'keyboard',
            'wheel',
            'touch',
          ],
          maxScrollbarLength: null,
          minScrollbarLength: null,
          scrollXMarginOffset: 0,
          scrollYMarginOffset: 0,
          suppressScrollX: !1,
          suppressScrollY: !1,
          swipePropagation: !0,
          useBothWheelAxes: !1,
          wheelPropagation: !1,
          wheelSpeed: 1,
          theme: 'default',
        }
      },
      {},
    ],
    9: [
      function (t, e, n) {
        'use strict'
        var r = t('../lib/helper'),
          o = t('../lib/dom'),
          l = t('./instances')
        e.exports = function (t) {
          var e = l.get(t)
          e &&
            (e.event.unbindAll(),
            o.remove(e.scrollbarX),
            o.remove(e.scrollbarY),
            o.remove(e.scrollbarXRail),
            o.remove(e.scrollbarYRail),
            r.removePsClasses(t),
            l.remove(t))
        }
      },
      { '../lib/dom': 3, '../lib/helper': 6, './instances': 18 },
    ],
    10: [
      function (t, e, n) {
        'use strict'
        function r(t, e) {
          function n(t) {
            return t.getBoundingClientRect()
          }
          var r = function (t) {
            t.stopPropagation()
          }
          e.event.bind(e.scrollbarY, 'click', r),
            e.event.bind(e.scrollbarYRail, 'click', function (r) {
              var o = r.pageY - window.pageYOffset - n(e.scrollbarYRail).top,
                s = o > e.scrollbarYTop ? 1 : -1
              i(t, 'top', t.scrollTop + s * e.containerHeight),
                l(t),
                r.stopPropagation()
            }),
            e.event.bind(e.scrollbarX, 'click', r),
            e.event.bind(e.scrollbarXRail, 'click', function (r) {
              var o = r.pageX - window.pageXOffset - n(e.scrollbarXRail).left,
                s = o > e.scrollbarXLeft ? 1 : -1
              i(t, 'left', t.scrollLeft + s * e.containerWidth),
                l(t),
                r.stopPropagation()
            })
        }
        var o = t('../instances'),
          l = t('../update-geometry'),
          i = t('../update-scroll')
        e.exports = function (t) {
          var e = o.get(t)
          r(t, e)
        }
      },
      { '../instances': 18, '../update-geometry': 19, '../update-scroll': 20 },
    ],
    11: [
      function (t, e, n) {
        'use strict'
        function r(t, e) {
          function n(n) {
            var o = r + n * e.railXRatio,
              i =
                Math.max(0, e.scrollbarXRail.getBoundingClientRect().left) +
                e.railXRatio * (e.railXWidth - e.scrollbarXWidth)
            o < 0
              ? (e.scrollbarXLeft = 0)
              : o > i
              ? (e.scrollbarXLeft = i)
              : (e.scrollbarXLeft = o)
            var s =
              l.toInt(
                (e.scrollbarXLeft * (e.contentWidth - e.containerWidth)) /
                  (e.containerWidth - e.railXRatio * e.scrollbarXWidth),
              ) - e.negativeScrollAdjustment
            c(t, 'left', s)
          }
          var r = null,
            o = null,
            s = function (e) {
              n(e.pageX - o), a(t), e.stopPropagation(), e.preventDefault()
            },
            u = function () {
              l.stopScrolling(t, 'x'),
                e.event.unbind(e.ownerDocument, 'mousemove', s)
            }
          e.event.bind(e.scrollbarX, 'mousedown', function (n) {
            ;(o = n.pageX),
              (r = l.toInt(i.css(e.scrollbarX, 'left')) * e.railXRatio),
              l.startScrolling(t, 'x'),
              e.event.bind(e.ownerDocument, 'mousemove', s),
              e.event.once(e.ownerDocument, 'mouseup', u),
              n.stopPropagation(),
              n.preventDefault()
          })
        }
        function o(t, e) {
          function n(n) {
            var o = r + n * e.railYRatio,
              i =
                Math.max(0, e.scrollbarYRail.getBoundingClientRect().top) +
                e.railYRatio * (e.railYHeight - e.scrollbarYHeight)
            o < 0
              ? (e.scrollbarYTop = 0)
              : o > i
              ? (e.scrollbarYTop = i)
              : (e.scrollbarYTop = o)
            var s = l.toInt(
              (e.scrollbarYTop * (e.contentHeight - e.containerHeight)) /
                (e.containerHeight - e.railYRatio * e.scrollbarYHeight),
            )
            c(t, 'top', s)
          }
          var r = null,
            o = null,
            s = function (e) {
              n(e.pageY - o), a(t), e.stopPropagation(), e.preventDefault()
            },
            u = function () {
              l.stopScrolling(t, 'y'),
                e.event.unbind(e.ownerDocument, 'mousemove', s)
            }
          e.event.bind(e.scrollbarY, 'mousedown', function (n) {
            ;(o = n.pageY),
              (r = l.toInt(i.css(e.scrollbarY, 'top')) * e.railYRatio),
              l.startScrolling(t, 'y'),
              e.event.bind(e.ownerDocument, 'mousemove', s),
              e.event.once(e.ownerDocument, 'mouseup', u),
              n.stopPropagation(),
              n.preventDefault()
          })
        }
        var l = t('../../lib/helper'),
          i = t('../../lib/dom'),
          s = t('../instances'),
          a = t('../update-geometry'),
          c = t('../update-scroll')
        e.exports = function (t) {
          var e = s.get(t)
          r(t, e), o(t, e)
        }
      },
      {
        '../../lib/dom': 3,
        '../../lib/helper': 6,
        '../instances': 18,
        '../update-geometry': 19,
        '../update-scroll': 20,
      },
    ],
    12: [
      function (t, e, n) {
        'use strict'
        function r(t, e) {
          function n(n, r) {
            var o = t.scrollTop
            if (0 === n) {
              if (!e.scrollbarYActive) return !1
              if (
                (0 === o && r > 0) ||
                (o >= e.contentHeight - e.containerHeight && r < 0)
              )
                return !e.settings.wheelPropagation
            }
            var l = t.scrollLeft
            if (0 === r) {
              if (!e.scrollbarXActive) return !1
              if (
                (0 === l && n < 0) ||
                (l >= e.contentWidth - e.containerWidth && n > 0)
              )
                return !e.settings.wheelPropagation
            }
            return !0
          }
          var r = !1
          e.event.bind(t, 'mouseenter', function () {
            r = !0
          }),
            e.event.bind(t, 'mouseleave', function () {
              r = !1
            })
          var i = !1
          e.event.bind(e.ownerDocument, 'keydown', function (c) {
            if (
              !(
                (c.isDefaultPrevented && c.isDefaultPrevented()) ||
                c.defaultPrevented
              )
            ) {
              var u =
                l.matches(e.scrollbarX, ':focus') ||
                l.matches(e.scrollbarY, ':focus')
              if (r || u) {
                var d = document.activeElement
                  ? document.activeElement
                  : e.ownerDocument.activeElement
                if (d) {
                  if ('IFRAME' === d.tagName)
                    d = d.contentDocument.activeElement
                  else for (; d.shadowRoot; ) d = d.shadowRoot.activeElement
                  if (o.isEditable(d)) return
                }
                var p = 0,
                  f = 0
                switch (c.which) {
                  case 37:
                    p = c.metaKey
                      ? -e.contentWidth
                      : c.altKey
                      ? -e.containerWidth
                      : -30
                    break
                  case 38:
                    f = c.metaKey
                      ? e.contentHeight
                      : c.altKey
                      ? e.containerHeight
                      : 30
                    break
                  case 39:
                    p = c.metaKey
                      ? e.contentWidth
                      : c.altKey
                      ? e.containerWidth
                      : 30
                    break
                  case 40:
                    f = c.metaKey
                      ? -e.contentHeight
                      : c.altKey
                      ? -e.containerHeight
                      : -30
                    break
                  case 33:
                    f = 90
                    break
                  case 32:
                    f = c.shiftKey ? 90 : -90
                    break
                  case 34:
                    f = -90
                    break
                  case 35:
                    f = c.ctrlKey ? -e.contentHeight : -e.containerHeight
                    break
                  case 36:
                    f = c.ctrlKey ? t.scrollTop : e.containerHeight
                    break
                  default:
                    return
                }
                a(t, 'top', t.scrollTop - f),
                  a(t, 'left', t.scrollLeft + p),
                  s(t),
                  (i = n(p, f)),
                  i && c.preventDefault()
              }
            }
          })
        }
        var o = t('../../lib/helper'),
          l = t('../../lib/dom'),
          i = t('../instances'),
          s = t('../update-geometry'),
          a = t('../update-scroll')
        e.exports = function (t) {
          var e = i.get(t)
          r(t, e)
        }
      },
      {
        '../../lib/dom': 3,
        '../../lib/helper': 6,
        '../instances': 18,
        '../update-geometry': 19,
        '../update-scroll': 20,
      },
    ],
    13: [
      function (t, e, n) {
        'use strict'
        function r(t, e) {
          function n(n, r) {
            var o = t.scrollTop
            if (0 === n) {
              if (!e.scrollbarYActive) return !1
              if (
                (0 === o && r > 0) ||
                (o >= e.contentHeight - e.containerHeight && r < 0)
              )
                return !e.settings.wheelPropagation
            }
            var l = t.scrollLeft
            if (0 === r) {
              if (!e.scrollbarXActive) return !1
              if (
                (0 === l && n < 0) ||
                (l >= e.contentWidth - e.containerWidth && n > 0)
              )
                return !e.settings.wheelPropagation
            }
            return !0
          }
          function r(t) {
            var e = t.deltaX,
              n = -1 * t.deltaY
            return (
              ('undefined' != typeof e && 'undefined' != typeof n) ||
                ((e = (-1 * t.wheelDeltaX) / 6), (n = t.wheelDeltaY / 6)),
              t.deltaMode && 1 === t.deltaMode && ((e *= 10), (n *= 10)),
              e !== e && n !== n && ((e = 0), (n = t.wheelDelta)),
              t.shiftKey ? [-n, -e] : [e, n]
            )
          }
          function o(e, n) {
            var r = t.querySelector(
              'textarea:hover, select[multiple]:hover, .ps-child:hover',
            )
            if (r) {
              if (!window.getComputedStyle(r).overflow.match(/(scroll|auto)/))
                return !1
              var o = r.scrollHeight - r.clientHeight
              if (
                o > 0 &&
                !((0 === r.scrollTop && n > 0) || (r.scrollTop === o && n < 0))
              )
                return !0
              var l = r.scrollLeft - r.clientWidth
              if (
                l > 0 &&
                !(
                  (0 === r.scrollLeft && e < 0) ||
                  (r.scrollLeft === l && e > 0)
                )
              )
                return !0
            }
            return !1
          }
          function s(s) {
            var c = r(s),
              u = c[0],
              d = c[1]
            o(u, d) ||
              ((a = !1),
              e.settings.useBothWheelAxes
                ? e.scrollbarYActive && !e.scrollbarXActive
                  ? (d
                      ? i(t, 'top', t.scrollTop - d * e.settings.wheelSpeed)
                      : i(t, 'top', t.scrollTop + u * e.settings.wheelSpeed),
                    (a = !0))
                  : e.scrollbarXActive &&
                    !e.scrollbarYActive &&
                    (u
                      ? i(t, 'left', t.scrollLeft + u * e.settings.wheelSpeed)
                      : i(t, 'left', t.scrollLeft - d * e.settings.wheelSpeed),
                    (a = !0))
                : (i(t, 'top', t.scrollTop - d * e.settings.wheelSpeed),
                  i(t, 'left', t.scrollLeft + u * e.settings.wheelSpeed)),
              l(t),
              (a = a || n(u, d)),
              a && (s.stopPropagation(), s.preventDefault()))
          }
          var a = !1
          'undefined' != typeof window.onwheel
            ? e.event.bind(t, 'wheel', s)
            : 'undefined' != typeof window.onmousewheel &&
              e.event.bind(t, 'mousewheel', s)
        }
        var o = t('../instances'),
          l = t('../update-geometry'),
          i = t('../update-scroll')
        e.exports = function (t) {
          var e = o.get(t)
          r(t, e)
        }
      },
      { '../instances': 18, '../update-geometry': 19, '../update-scroll': 20 },
    ],
    14: [
      function (t, e, n) {
        'use strict'
        function r(t, e) {
          e.event.bind(t, 'scroll', function () {
            l(t)
          })
        }
        var o = t('../instances'),
          l = t('../update-geometry')
        e.exports = function (t) {
          var e = o.get(t)
          r(t, e)
        }
      },
      { '../instances': 18, '../update-geometry': 19 },
    ],
    15: [
      function (t, e, n) {
        'use strict'
        function r(t, e) {
          function n() {
            var t = window.getSelection
              ? window.getSelection()
              : document.getSelection
              ? document.getSelection()
              : ''
            return 0 === t.toString().length
              ? null
              : t.getRangeAt(0).commonAncestorContainer
          }
          function r() {
            c ||
              (c = setInterval(function () {
                return l.get(t)
                  ? (s(t, 'top', t.scrollTop + u.top),
                    s(t, 'left', t.scrollLeft + u.left),
                    void i(t))
                  : void clearInterval(c)
              }, 50))
          }
          function a() {
            c && (clearInterval(c), (c = null)), o.stopScrolling(t)
          }
          var c = null,
            u = { top: 0, left: 0 },
            d = !1
          e.event.bind(e.ownerDocument, 'selectionchange', function () {
            t.contains(n()) ? (d = !0) : ((d = !1), a())
          }),
            e.event.bind(window, 'mouseup', function () {
              d && ((d = !1), a())
            }),
            e.event.bind(window, 'keyup', function () {
              d && ((d = !1), a())
            }),
            e.event.bind(window, 'mousemove', function (e) {
              if (d) {
                var n = { x: e.pageX, y: e.pageY },
                  l = {
                    left: t.offsetLeft,
                    right: t.offsetLeft + t.offsetWidth,
                    top: t.offsetTop,
                    bottom: t.offsetTop + t.offsetHeight,
                  }
                n.x < l.left + 3
                  ? ((u.left = -5), o.startScrolling(t, 'x'))
                  : n.x > l.right - 3
                  ? ((u.left = 5), o.startScrolling(t, 'x'))
                  : (u.left = 0),
                  n.y < l.top + 3
                    ? (l.top + 3 - n.y < 5 ? (u.top = -5) : (u.top = -20),
                      o.startScrolling(t, 'y'))
                    : n.y > l.bottom - 3
                    ? (n.y - l.bottom + 3 < 5 ? (u.top = 5) : (u.top = 20),
                      o.startScrolling(t, 'y'))
                    : (u.top = 0),
                  0 === u.top && 0 === u.left ? a() : r()
              }
            })
        }
        var o = t('../../lib/helper'),
          l = t('../instances'),
          i = t('../update-geometry'),
          s = t('../update-scroll')
        e.exports = function (t) {
          var e = l.get(t)
          r(t, e)
        }
      },
      {
        '../../lib/helper': 6,
        '../instances': 18,
        '../update-geometry': 19,
        '../update-scroll': 20,
      },
    ],
    16: [
      function (t, e, n) {
        'use strict'
        function r(t, e, n, r) {
          function o(n, r) {
            var o = t.scrollTop,
              l = t.scrollLeft,
              i = Math.abs(n),
              s = Math.abs(r)
            if (s > i) {
              if (
                (r < 0 && o === e.contentHeight - e.containerHeight) ||
                (r > 0 && 0 === o)
              )
                return !e.settings.swipePropagation
            } else if (
              i > s &&
              ((n < 0 && l === e.contentWidth - e.containerWidth) ||
                (n > 0 && 0 === l))
            )
              return !e.settings.swipePropagation
            return !0
          }
          function a(e, n) {
            s(t, 'top', t.scrollTop - n), s(t, 'left', t.scrollLeft - e), i(t)
          }
          function c() {
            w = !0
          }
          function u() {
            w = !1
          }
          function d(t) {
            return t.targetTouches ? t.targetTouches[0] : t
          }
          function p(t) {
            return (
              !(!t.targetTouches || 1 !== t.targetTouches.length) ||
              !(
                !t.pointerType ||
                'mouse' === t.pointerType ||
                t.pointerType === t.MSPOINTER_TYPE_MOUSE
              )
            )
          }
          function f(t) {
            if (p(t)) {
              Y = !0
              var e = d(t)
              ;(g.pageX = e.pageX),
                (g.pageY = e.pageY),
                (v = new Date().getTime()),
                null !== y && clearInterval(y),
                t.stopPropagation()
            }
          }
          function h(t) {
            if ((!Y && e.settings.swipePropagation && f(t), !w && Y && p(t))) {
              var n = d(t),
                r = { pageX: n.pageX, pageY: n.pageY },
                l = r.pageX - g.pageX,
                i = r.pageY - g.pageY
              a(l, i), (g = r)
              var s = new Date().getTime(),
                c = s - v
              c > 0 && ((m.x = l / c), (m.y = i / c), (v = s)),
                o(l, i) && (t.stopPropagation(), t.preventDefault())
            }
          }
          function b() {
            !w &&
              Y &&
              ((Y = !1),
              clearInterval(y),
              (y = setInterval(function () {
                return l.get(t) && (m.x || m.y)
                  ? Math.abs(m.x) < 0.01 && Math.abs(m.y) < 0.01
                    ? void clearInterval(y)
                    : (a(30 * m.x, 30 * m.y), (m.x *= 0.8), void (m.y *= 0.8))
                  : void clearInterval(y)
              }, 10)))
          }
          var g = {},
            v = 0,
            m = {},
            y = null,
            w = !1,
            Y = !1
          n &&
            (e.event.bind(window, 'touchstart', c),
            e.event.bind(window, 'touchend', u),
            e.event.bind(t, 'touchstart', f),
            e.event.bind(t, 'touchmove', h),
            e.event.bind(t, 'touchend', b)),
            r &&
              (window.PointerEvent
                ? (e.event.bind(window, 'pointerdown', c),
                  e.event.bind(window, 'pointerup', u),
                  e.event.bind(t, 'pointerdown', f),
                  e.event.bind(t, 'pointermove', h),
                  e.event.bind(t, 'pointerup', b))
                : window.MSPointerEvent &&
                  (e.event.bind(window, 'MSPointerDown', c),
                  e.event.bind(window, 'MSPointerUp', u),
                  e.event.bind(t, 'MSPointerDown', f),
                  e.event.bind(t, 'MSPointerMove', h),
                  e.event.bind(t, 'MSPointerUp', b)))
        }
        var o = t('../../lib/helper'),
          l = t('../instances'),
          i = t('../update-geometry'),
          s = t('../update-scroll')
        e.exports = function (t) {
          if (o.env.supportsTouch || o.env.supportsIePointer) {
            var e = l.get(t)
            r(t, e, o.env.supportsTouch, o.env.supportsIePointer)
          }
        }
      },
      {
        '../../lib/helper': 6,
        '../instances': 18,
        '../update-geometry': 19,
        '../update-scroll': 20,
      },
    ],
    17: [
      function (t, e, n) {
        'use strict'
        var r = t('../lib/helper'),
          o = t('../lib/class'),
          l = t('./instances'),
          i = t('./update-geometry'),
          s = {
            'click-rail': t('./handler/click-rail'),
            'drag-scrollbar': t('./handler/drag-scrollbar'),
            keyboard: t('./handler/keyboard'),
            wheel: t('./handler/mouse-wheel'),
            touch: t('./handler/touch'),
            selection: t('./handler/selection'),
          },
          a = t('./handler/native-scroll')
        e.exports = function (t, e) {
          ;(e = 'object' == typeof e ? e : {}), o.add(t, 'ps-container')
          var n = l.add(t)
          ;(n.settings = r.extend(n.settings, e)),
            o.add(t, 'ps-theme-' + n.settings.theme),
            n.settings.handlers.forEach(function (e) {
              s[e](t)
            }),
            a(t),
            i(t)
        }
      },
      {
        '../lib/class': 2,
        '../lib/helper': 6,
        './handler/click-rail': 10,
        './handler/drag-scrollbar': 11,
        './handler/keyboard': 12,
        './handler/mouse-wheel': 13,
        './handler/native-scroll': 14,
        './handler/selection': 15,
        './handler/touch': 16,
        './instances': 18,
        './update-geometry': 19,
      },
    ],
    18: [
      function (t, e, n) {
        'use strict'
        function r(t) {
          function e() {
            a.add(t, 'ps-focus')
          }
          function n() {
            a.remove(t, 'ps-focus')
          }
          var r = this
          ;(r.settings = s.clone(c)),
            (r.containerWidth = null),
            (r.containerHeight = null),
            (r.contentWidth = null),
            (r.contentHeight = null),
            (r.isRtl = 'rtl' === u.css(t, 'direction')),
            (r.isNegativeScroll = (function () {
              var e = t.scrollLeft,
                n = null
              return (
                (t.scrollLeft = -1),
                (n = t.scrollLeft < 0),
                (t.scrollLeft = e),
                n
              )
            })()),
            (r.negativeScrollAdjustment = r.isNegativeScroll
              ? t.scrollWidth - t.clientWidth
              : 0),
            (r.event = new d()),
            (r.ownerDocument = t.ownerDocument || document),
            (r.scrollbarXRail = u.appendTo(
              u.e('div', 'ps-scrollbar-x-rail'),
              t,
            )),
            (r.scrollbarX = u.appendTo(
              u.e('div', 'ps-scrollbar-x'),
              r.scrollbarXRail,
            )),
            r.scrollbarX.setAttribute('tabindex', 0),
            r.event.bind(r.scrollbarX, 'focus', e),
            r.event.bind(r.scrollbarX, 'blur', n),
            (r.scrollbarXActive = null),
            (r.scrollbarXWidth = null),
            (r.scrollbarXLeft = null),
            (r.scrollbarXBottom = s.toInt(u.css(r.scrollbarXRail, 'bottom'))),
            (r.isScrollbarXUsingBottom =
              r.scrollbarXBottom === r.scrollbarXBottom),
            (r.scrollbarXTop = r.isScrollbarXUsingBottom
              ? null
              : s.toInt(u.css(r.scrollbarXRail, 'top'))),
            (r.railBorderXWidth =
              s.toInt(u.css(r.scrollbarXRail, 'borderLeftWidth')) +
              s.toInt(u.css(r.scrollbarXRail, 'borderRightWidth'))),
            u.css(r.scrollbarXRail, 'display', 'block'),
            (r.railXMarginWidth =
              s.toInt(u.css(r.scrollbarXRail, 'marginLeft')) +
              s.toInt(u.css(r.scrollbarXRail, 'marginRight'))),
            u.css(r.scrollbarXRail, 'display', ''),
            (r.railXWidth = null),
            (r.railXRatio = null),
            (r.scrollbarYRail = u.appendTo(
              u.e('div', 'ps-scrollbar-y-rail'),
              t,
            )),
            (r.scrollbarY = u.appendTo(
              u.e('div', 'ps-scrollbar-y'),
              r.scrollbarYRail,
            )),
            r.scrollbarY.setAttribute('tabindex', 0),
            r.event.bind(r.scrollbarY, 'focus', e),
            r.event.bind(r.scrollbarY, 'blur', n),
            (r.scrollbarYActive = null),
            (r.scrollbarYHeight = null),
            (r.scrollbarYTop = null),
            (r.scrollbarYRight = s.toInt(u.css(r.scrollbarYRail, 'right'))),
            (r.isScrollbarYUsingRight =
              r.scrollbarYRight === r.scrollbarYRight),
            (r.scrollbarYLeft = r.isScrollbarYUsingRight
              ? null
              : s.toInt(u.css(r.scrollbarYRail, 'left'))),
            (r.scrollbarYOuterWidth = r.isRtl
              ? s.outerWidth(r.scrollbarY)
              : null),
            (r.railBorderYWidth =
              s.toInt(u.css(r.scrollbarYRail, 'borderTopWidth')) +
              s.toInt(u.css(r.scrollbarYRail, 'borderBottomWidth'))),
            u.css(r.scrollbarYRail, 'display', 'block'),
            (r.railYMarginHeight =
              s.toInt(u.css(r.scrollbarYRail, 'marginTop')) +
              s.toInt(u.css(r.scrollbarYRail, 'marginBottom'))),
            u.css(r.scrollbarYRail, 'display', ''),
            (r.railYHeight = null),
            (r.railYRatio = null)
        }
        function o(t) {
          return t.getAttribute('data-ps-id')
        }
        function l(t, e) {
          t.setAttribute('data-ps-id', e)
        }
        function i(t) {
          t.removeAttribute('data-ps-id')
        }
        var s = t('../lib/helper'),
          a = t('../lib/class'),
          c = t('./default-setting'),
          u = t('../lib/dom'),
          d = t('../lib/event-manager'),
          p = t('../lib/guid'),
          f = {}
        ;(n.add = function (t) {
          var e = p()
          return l(t, e), (f[e] = new r(t)), f[e]
        }),
          (n.remove = function (t) {
            delete f[o(t)], i(t)
          }),
          (n.get = function (t) {
            return f[o(t)]
          })
      },
      {
        '../lib/class': 2,
        '../lib/dom': 3,
        '../lib/event-manager': 4,
        '../lib/guid': 5,
        '../lib/helper': 6,
        './default-setting': 8,
      },
    ],
    19: [
      function (t, e, n) {
        'use strict'
        function r(t, e) {
          return (
            t.settings.minScrollbarLength &&
              (e = Math.max(e, t.settings.minScrollbarLength)),
            t.settings.maxScrollbarLength &&
              (e = Math.min(e, t.settings.maxScrollbarLength)),
            e
          )
        }
        function o(t, e) {
          var n = { width: e.railXWidth }
          e.isRtl
            ? (n.left =
                e.negativeScrollAdjustment +
                t.scrollLeft +
                e.containerWidth -
                e.contentWidth)
            : (n.left = t.scrollLeft),
            e.isScrollbarXUsingBottom
              ? (n.bottom = e.scrollbarXBottom - t.scrollTop)
              : (n.top = e.scrollbarXTop + t.scrollTop),
            s.css(e.scrollbarXRail, n)
          var r = { top: t.scrollTop, height: e.railYHeight }
          e.isScrollbarYUsingRight
            ? e.isRtl
              ? (r.right =
                  e.contentWidth -
                  (e.negativeScrollAdjustment + t.scrollLeft) -
                  e.scrollbarYRight -
                  e.scrollbarYOuterWidth)
              : (r.right = e.scrollbarYRight - t.scrollLeft)
            : e.isRtl
            ? (r.left =
                e.negativeScrollAdjustment +
                t.scrollLeft +
                2 * e.containerWidth -
                e.contentWidth -
                e.scrollbarYLeft -
                e.scrollbarYOuterWidth)
            : (r.left = e.scrollbarYLeft + t.scrollLeft),
            s.css(e.scrollbarYRail, r),
            s.css(e.scrollbarX, {
              left: e.scrollbarXLeft,
              width: e.scrollbarXWidth - e.railBorderXWidth,
            }),
            s.css(e.scrollbarY, {
              top: e.scrollbarYTop,
              height: e.scrollbarYHeight - e.railBorderYWidth,
            })
        }
        var l = t('../lib/helper'),
          i = t('../lib/class'),
          s = t('../lib/dom'),
          a = t('./instances'),
          c = t('./update-scroll')
        e.exports = function (t) {
          var e = a.get(t)
          ;(e.containerWidth = t.clientWidth),
            (e.containerHeight = t.clientHeight),
            (e.contentWidth = t.scrollWidth),
            (e.contentHeight = t.scrollHeight)
          var n
          t.contains(e.scrollbarXRail) ||
            ((n = s.queryChildren(t, '.ps-scrollbar-x-rail')),
            n.length > 0 &&
              n.forEach(function (t) {
                s.remove(t)
              }),
            s.appendTo(e.scrollbarXRail, t)),
            t.contains(e.scrollbarYRail) ||
              ((n = s.queryChildren(t, '.ps-scrollbar-y-rail')),
              n.length > 0 &&
                n.forEach(function (t) {
                  s.remove(t)
                }),
              s.appendTo(e.scrollbarYRail, t)),
            !e.settings.suppressScrollX &&
            e.containerWidth + e.settings.scrollXMarginOffset < e.contentWidth
              ? ((e.scrollbarXActive = !0),
                (e.railXWidth = e.containerWidth - e.railXMarginWidth),
                (e.railXRatio = e.containerWidth / e.railXWidth),
                (e.scrollbarXWidth = r(
                  e,
                  l.toInt((e.railXWidth * e.containerWidth) / e.contentWidth),
                )),
                (e.scrollbarXLeft = l.toInt(
                  ((e.negativeScrollAdjustment + t.scrollLeft) *
                    (e.railXWidth - e.scrollbarXWidth)) /
                    (e.contentWidth - e.containerWidth),
                )))
              : (e.scrollbarXActive = !1),
            !e.settings.suppressScrollY &&
            e.containerHeight + e.settings.scrollYMarginOffset < e.contentHeight
              ? ((e.scrollbarYActive = !0),
                (e.railYHeight = e.containerHeight - e.railYMarginHeight),
                (e.railYRatio = e.containerHeight / e.railYHeight),
                (e.scrollbarYHeight = r(
                  e,
                  l.toInt(
                    (e.railYHeight * e.containerHeight) / e.contentHeight,
                  ),
                )),
                (e.scrollbarYTop = l.toInt(
                  (t.scrollTop * (e.railYHeight - e.scrollbarYHeight)) /
                    (e.contentHeight - e.containerHeight),
                )))
              : (e.scrollbarYActive = !1),
            e.scrollbarXLeft >= e.railXWidth - e.scrollbarXWidth &&
              (e.scrollbarXLeft = e.railXWidth - e.scrollbarXWidth),
            e.scrollbarYTop >= e.railYHeight - e.scrollbarYHeight &&
              (e.scrollbarYTop = e.railYHeight - e.scrollbarYHeight),
            o(t, e),
            e.scrollbarXActive
              ? i.add(t, 'ps-active-x')
              : (i.remove(t, 'ps-active-x'),
                (e.scrollbarXWidth = 0),
                (e.scrollbarXLeft = 0),
                c(t, 'left', 0)),
            e.scrollbarYActive
              ? i.add(t, 'ps-active-y')
              : (i.remove(t, 'ps-active-y'),
                (e.scrollbarYHeight = 0),
                (e.scrollbarYTop = 0),
                c(t, 'top', 0))
        }
      },
      {
        '../lib/class': 2,
        '../lib/dom': 3,
        '../lib/helper': 6,
        './instances': 18,
        './update-scroll': 20,
      },
    ],
    20: [
      function (t, e, n) {
        'use strict'
        var r,
          o,
          l = t('./instances'),
          i = function (t) {
            var e = document.createEvent('Event')
            return e.initEvent(t, !0, !0), e
          }
        e.exports = function (t, e, n) {
          if ('undefined' == typeof t)
            throw 'You must provide an element to the update-scroll function'
          if ('undefined' == typeof e)
            throw 'You must provide an axis to the update-scroll function'
          if ('undefined' == typeof n)
            throw 'You must provide a value to the update-scroll function'
          'top' === e &&
            n <= 0 &&
            ((t.scrollTop = n = 0), t.dispatchEvent(i('ps-y-reach-start'))),
            'left' === e &&
              n <= 0 &&
              ((t.scrollLeft = n = 0), t.dispatchEvent(i('ps-x-reach-start')))
          var s = l.get(t)
          'top' === e &&
            n >= s.contentHeight - s.containerHeight &&
            ((n = s.contentHeight - s.containerHeight),
            n - t.scrollTop <= 1 ? (n = t.scrollTop) : (t.scrollTop = n),
            t.dispatchEvent(i('ps-y-reach-end'))),
            'left' === e &&
              n >= s.contentWidth - s.containerWidth &&
              ((n = s.contentWidth - s.containerWidth),
              n - t.scrollLeft <= 1 ? (n = t.scrollLeft) : (t.scrollLeft = n),
              t.dispatchEvent(i('ps-x-reach-end'))),
            r || (r = t.scrollTop),
            o || (o = t.scrollLeft),
            'top' === e && n < r && t.dispatchEvent(i('ps-scroll-up')),
            'top' === e && n > r && t.dispatchEvent(i('ps-scroll-down')),
            'left' === e && n < o && t.dispatchEvent(i('ps-scroll-left')),
            'left' === e && n > o && t.dispatchEvent(i('ps-scroll-right')),
            'top' === e &&
              ((t.scrollTop = r = n), t.dispatchEvent(i('ps-scroll-y'))),
            'left' === e &&
              ((t.scrollLeft = o = n), t.dispatchEvent(i('ps-scroll-x')))
        }
      },
      { './instances': 18 },
    ],
    21: [
      function (t, e, n) {
        'use strict'
        var r = t('../lib/helper'),
          o = t('../lib/dom'),
          l = t('./instances'),
          i = t('./update-geometry'),
          s = t('./update-scroll')
        e.exports = function (t) {
          var e = l.get(t)
          e &&
            ((e.negativeScrollAdjustment = e.isNegativeScroll
              ? t.scrollWidth - t.clientWidth
              : 0),
            o.css(e.scrollbarXRail, 'display', 'block'),
            o.css(e.scrollbarYRail, 'display', 'block'),
            (e.railXMarginWidth =
              r.toInt(o.css(e.scrollbarXRail, 'marginLeft')) +
              r.toInt(o.css(e.scrollbarXRail, 'marginRight'))),
            (e.railYMarginHeight =
              r.toInt(o.css(e.scrollbarYRail, 'marginTop')) +
              r.toInt(o.css(e.scrollbarYRail, 'marginBottom'))),
            o.css(e.scrollbarXRail, 'display', 'none'),
            o.css(e.scrollbarYRail, 'display', 'none'),
            i(t),
            s(t, 'top', t.scrollTop),
            s(t, 'left', t.scrollLeft),
            o.css(e.scrollbarXRail, 'display', ''),
            o.css(e.scrollbarYRail, 'display', ''))
        }
      },
      {
        '../lib/dom': 3,
        '../lib/helper': 6,
        './instances': 18,
        './update-geometry': 19,
        './update-scroll': 20,
      },
    ],
  },
  {},
  [1],
)
!(function (t) {
  'use strict'
  'function' == typeof define && define.amd ? define(['jquery'], t) : t(jQuery)
})(function (x) {
  'use strict'
  var t, e, i, n, W, C, o, s, r, l, a, h, u
  function E(t, e, i) {
    return [
      parseFloat(t[0]) * (a.test(t[0]) ? e / 100 : 1),
      parseFloat(t[1]) * (a.test(t[1]) ? i / 100 : 1),
    ]
  }
  function L(t, e) {
    return parseInt(x.css(t, e), 10) || 0
  }
  function N(t) {
    return null != t && t === t.window
  }
  ;(x.ui = x.ui || {}),
    (x.ui.version = '1.13.1'),
    x.extend(x.expr.pseudos, {
      data: x.expr.createPseudo
        ? x.expr.createPseudo(function (e) {
            return function (t) {
              return !!x.data(t, e)
            }
          })
        : function (t, e, i) {
            return !!x.data(t, i[3])
          },
    }),
    x.fn.extend({
      disableSelection:
        ((t =
          'onselectstart' in document.createElement('div')
            ? 'selectstart'
            : 'mousedown'),
        function () {
          return this.on(t + '.ui-disableSelection', function (t) {
            t.preventDefault()
          })
        }),
      enableSelection: function () {
        return this.off('.ui-disableSelection')
      },
    }),
    (x.ui.focusable = function (t, e) {
      var i,
        n,
        o,
        s,
        r = t.nodeName.toLowerCase()
      return 'area' === r
        ? ((n = (i = t.parentNode).name),
          !(!t.href || !n || 'map' !== i.nodeName.toLowerCase()) &&
            0 < (n = x("img[usemap='#" + n + "']")).length &&
            n.is(':visible'))
        : (/^(input|select|textarea|button|object)$/.test(r)
            ? (o = !t.disabled) &&
              (s = x(t).closest('fieldset')[0]) &&
              (o = !s.disabled)
            : (o = ('a' === r && t.href) || e),
          o &&
            x(t).is(':visible') &&
            (function (t) {
              var e = t.css('visibility')
              for (; 'inherit' === e; )
                (t = t.parent()), (e = t.css('visibility'))
              return 'visible' === e
            })(x(t)))
    }),
    x.extend(x.expr.pseudos, {
      focusable: function (t) {
        return x.ui.focusable(t, null != x.attr(t, 'tabindex'))
      },
    }),
    (x.fn._form = function () {
      return 'string' == typeof this[0].form
        ? this.closest('form')
        : x(this[0].form)
    }),
    (x.ui.formResetMixin = {
      _formResetHandler: function () {
        var e = x(this)
        setTimeout(function () {
          var t = e.data('ui-form-reset-instances')
          x.each(t, function () {
            this.refresh()
          })
        })
      },
      _bindFormResetHandler: function () {
        var t
        ;(this.form = this.element._form()),
          this.form.length &&
            ((t = this.form.data('ui-form-reset-instances') || []).length ||
              this.form.on('reset.ui-form-reset', this._formResetHandler),
            t.push(this),
            this.form.data('ui-form-reset-instances', t))
      },
      _unbindFormResetHandler: function () {
        var t
        this.form.length &&
          ((t = this.form.data('ui-form-reset-instances')).splice(
            x.inArray(this, t),
            1,
          ),
          t.length
            ? this.form.data('ui-form-reset-instances', t)
            : this.form
                .removeData('ui-form-reset-instances')
                .off('reset.ui-form-reset'))
      },
    }),
    (x.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())),
    x.expr.pseudos || (x.expr.pseudos = x.expr[':']),
    x.uniqueSort || (x.uniqueSort = x.unique),
    x.escapeSelector ||
      ((e = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g),
      (i = function (t, e) {
        return e
          ? '\0' === t
            ? 'ï¿½'
            : t.slice(0, -1) +
              '\\' +
              t.charCodeAt(t.length - 1).toString(16) +
              ' '
          : '\\' + t
      }),
      (x.escapeSelector = function (t) {
        return (t + '').replace(e, i)
      })),
    (x.fn.even && x.fn.odd) ||
      x.fn.extend({
        even: function () {
          return this.filter(function (t) {
            return t % 2 == 0
          })
        },
        odd: function () {
          return this.filter(function (t) {
            return t % 2 == 1
          })
        },
      }),
    (x.ui.keyCode = {
      BACKSPACE: 8,
      COMMA: 188,
      DELETE: 46,
      DOWN: 40,
      END: 35,
      ENTER: 13,
      ESCAPE: 27,
      HOME: 36,
      LEFT: 37,
      PAGE_DOWN: 34,
      PAGE_UP: 33,
      PERIOD: 190,
      RIGHT: 39,
      SPACE: 32,
      TAB: 9,
      UP: 38,
    }),
    (x.fn.labels = function () {
      var t, e, i
      return this.length
        ? this[0].labels && this[0].labels.length
          ? this.pushStack(this[0].labels)
          : ((e = this.eq(0).parents('label')),
            (t = this.attr('id')) &&
              ((i = (i = this.eq(0).parents().last()).add(
                (i.length ? i : this).siblings(),
              )),
              (t = "label[for='" + x.escapeSelector(t) + "']"),
              (e = e.add(i.find(t).addBack(t)))),
            this.pushStack(e))
        : this.pushStack([])
    }),
    (x.ui.plugin = {
      add: function (t, e, i) {
        var n,
          o = x.ui[t].prototype
        for (n in i)
          (o.plugins[n] = o.plugins[n] || []), o.plugins[n].push([e, i[n]])
      },
      call: function (t, e, i, n) {
        var o,
          s = t.plugins[e]
        if (
          s &&
          (n ||
            (t.element[0].parentNode &&
              11 !== t.element[0].parentNode.nodeType))
        )
          for (o = 0; o < s.length; o++)
            t.options[s[o][0]] && s[o][1].apply(t.element, i)
      },
    }),
    (W = Math.max),
    (C = Math.abs),
    (o = /left|center|right/),
    (s = /top|center|bottom/),
    (r = /[\+\-]\d+(\.[\d]+)?%?/),
    (l = /^\w+/),
    (a = /%$/),
    (h = x.fn.position),
    (x.position = {
      scrollbarWidth: function () {
        if (void 0 !== n) return n
        var t,
          e = x(
            "<div style='display:block;position:absolute;width:200px;height:200px;overflow:hidden;'><div style='height:300px;width:auto;'></div></div>",
          ),
          i = e.children()[0]
        return (
          x('body').append(e),
          (t = i.offsetWidth),
          e.css('overflow', 'scroll'),
          t === (i = i.offsetWidth) && (i = e[0].clientWidth),
          e.remove(),
          (n = t - i)
        )
      },
      getScrollInfo: function (t) {
        var e = t.isWindow || t.isDocument ? '' : t.element.css('overflow-x'),
          i = t.isWindow || t.isDocument ? '' : t.element.css('overflow-y'),
          e =
            'scroll' === e ||
            ('auto' === e && t.width < t.element[0].scrollWidth)
        return {
          width:
            'scroll' === i ||
            ('auto' === i && t.height < t.element[0].scrollHeight)
              ? x.position.scrollbarWidth()
              : 0,
          height: e ? x.position.scrollbarWidth() : 0,
        }
      },
      getWithinInfo: function (t) {
        var e = x(t || window),
          i = N(e[0]),
          n = !!e[0] && 9 === e[0].nodeType
        return {
          element: e,
          isWindow: i,
          isDocument: n,
          offset: !i && !n ? x(t).offset() : { left: 0, top: 0 },
          scrollLeft: e.scrollLeft(),
          scrollTop: e.scrollTop(),
          width: e.outerWidth(),
          height: e.outerHeight(),
        }
      },
    }),
    (x.fn.position = function (f) {
      if (!f || !f.of) return h.apply(this, arguments)
      var c,
        d,
        p,
        g,
        m,
        t,
        v =
          'string' == typeof (f = x.extend({}, f)).of
            ? x(document).find(f.of)
            : x(f.of),
        y = x.position.getWithinInfo(f.within),
        w = x.position.getScrollInfo(y),
        b = (f.collision || 'flip').split(' '),
        _ = {},
        e =
          9 === (t = (e = v)[0]).nodeType
            ? {
                width: e.width(),
                height: e.height(),
                offset: { top: 0, left: 0 },
              }
            : N(t)
            ? {
                width: e.width(),
                height: e.height(),
                offset: { top: e.scrollTop(), left: e.scrollLeft() },
              }
            : t.preventDefault
            ? { width: 0, height: 0, offset: { top: t.pageY, left: t.pageX } }
            : {
                width: e.outerWidth(),
                height: e.outerHeight(),
                offset: e.offset(),
              }
      return (
        v[0].preventDefault && (f.at = 'left top'),
        (d = e.width),
        (p = e.height),
        (m = x.extend({}, (g = e.offset))),
        x.each(['my', 'at'], function () {
          var t,
            e,
            i = (f[this] || '').split(' ')
          ;((i =
            1 === i.length
              ? o.test(i[0])
                ? i.concat(['center'])
                : s.test(i[0])
                ? ['center'].concat(i)
                : ['center', 'center']
              : i)[0] = o.test(i[0]) ? i[0] : 'center'),
            (i[1] = s.test(i[1]) ? i[1] : 'center'),
            (t = r.exec(i[0])),
            (e = r.exec(i[1])),
            (_[this] = [t ? t[0] : 0, e ? e[0] : 0]),
            (f[this] = [l.exec(i[0])[0], l.exec(i[1])[0]])
        }),
        1 === b.length && (b[1] = b[0]),
        'right' === f.at[0]
          ? (m.left += d)
          : 'center' === f.at[0] && (m.left += d / 2),
        'bottom' === f.at[1]
          ? (m.top += p)
          : 'center' === f.at[1] && (m.top += p / 2),
        (c = E(_.at, d, p)),
        (m.left += c[0]),
        (m.top += c[1]),
        this.each(function () {
          var i,
            t,
            r = x(this),
            l = r.outerWidth(),
            a = r.outerHeight(),
            e = L(this, 'marginLeft'),
            n = L(this, 'marginTop'),
            o = l + e + L(this, 'marginRight') + w.width,
            s = a + n + L(this, 'marginBottom') + w.height,
            h = x.extend({}, m),
            u = E(_.my, r.outerWidth(), r.outerHeight())
          'right' === f.my[0]
            ? (h.left -= l)
            : 'center' === f.my[0] && (h.left -= l / 2),
            'bottom' === f.my[1]
              ? (h.top -= a)
              : 'center' === f.my[1] && (h.top -= a / 2),
            (h.left += u[0]),
            (h.top += u[1]),
            (i = { marginLeft: e, marginTop: n }),
            x.each(['left', 'top'], function (t, e) {
              x.ui.position[b[t]] &&
                x.ui.position[b[t]][e](h, {
                  targetWidth: d,
                  targetHeight: p,
                  elemWidth: l,
                  elemHeight: a,
                  collisionPosition: i,
                  collisionWidth: o,
                  collisionHeight: s,
                  offset: [c[0] + u[0], c[1] + u[1]],
                  my: f.my,
                  at: f.at,
                  within: y,
                  elem: r,
                })
            }),
            f.using &&
              (t = function (t) {
                var e = g.left - h.left,
                  i = e + d - l,
                  n = g.top - h.top,
                  o = n + p - a,
                  s = {
                    target: {
                      element: v,
                      left: g.left,
                      top: g.top,
                      width: d,
                      height: p,
                    },
                    element: {
                      element: r,
                      left: h.left,
                      top: h.top,
                      width: l,
                      height: a,
                    },
                    horizontal: i < 0 ? 'left' : 0 < e ? 'right' : 'center',
                    vertical: o < 0 ? 'top' : 0 < n ? 'bottom' : 'middle',
                  }
                d < l && C(e + i) < d && (s.horizontal = 'center'),
                  p < a && C(n + o) < p && (s.vertical = 'middle'),
                  W(C(e), C(i)) > W(C(n), C(o))
                    ? (s.important = 'horizontal')
                    : (s.important = 'vertical'),
                  f.using.call(this, t, s)
              }),
            r.offset(x.extend(h, { using: t }))
        })
      )
    }),
    (x.ui.position = {
      fit: {
        left: function (t, e) {
          var i = e.within,
            n = i.isWindow ? i.scrollLeft : i.offset.left,
            o = i.width,
            s = t.left - e.collisionPosition.marginLeft,
            r = n - s,
            l = s + e.collisionWidth - o - n
          e.collisionWidth > o
            ? 0 < r && l <= 0
              ? ((i = t.left + r + e.collisionWidth - o - n), (t.left += r - i))
              : (t.left =
                  !(0 < l && r <= 0) && l < r ? n + o - e.collisionWidth : n)
            : 0 < r
            ? (t.left += r)
            : 0 < l
            ? (t.left -= l)
            : (t.left = W(t.left - s, t.left))
        },
        top: function (t, e) {
          var i = e.within,
            n = i.isWindow ? i.scrollTop : i.offset.top,
            o = e.within.height,
            s = t.top - e.collisionPosition.marginTop,
            r = n - s,
            l = s + e.collisionHeight - o - n
          e.collisionHeight > o
            ? 0 < r && l <= 0
              ? ((i = t.top + r + e.collisionHeight - o - n), (t.top += r - i))
              : (t.top =
                  !(0 < l && r <= 0) && l < r ? n + o - e.collisionHeight : n)
            : 0 < r
            ? (t.top += r)
            : 0 < l
            ? (t.top -= l)
            : (t.top = W(t.top - s, t.top))
        },
      },
      flip: {
        left: function (t, e) {
          var i = e.within,
            n = i.offset.left + i.scrollLeft,
            o = i.width,
            s = i.isWindow ? i.scrollLeft : i.offset.left,
            r = t.left - e.collisionPosition.marginLeft,
            l = r - s,
            a = r + e.collisionWidth - o - s,
            h =
              'left' === e.my[0]
                ? -e.elemWidth
                : 'right' === e.my[0]
                ? e.elemWidth
                : 0,
            i =
              'left' === e.at[0]
                ? e.targetWidth
                : 'right' === e.at[0]
                ? -e.targetWidth
                : 0,
            r = -2 * e.offset[0]
          l < 0
            ? ((n = t.left + h + i + r + e.collisionWidth - o - n) < 0 ||
                n < C(l)) &&
              (t.left += h + i + r)
            : 0 < a &&
              (0 <
                (s = t.left - e.collisionPosition.marginLeft + h + i + r - s) ||
                C(s) < a) &&
              (t.left += h + i + r)
        },
        top: function (t, e) {
          var i = e.within,
            n = i.offset.top + i.scrollTop,
            o = i.height,
            s = i.isWindow ? i.scrollTop : i.offset.top,
            r = t.top - e.collisionPosition.marginTop,
            l = r - s,
            a = r + e.collisionHeight - o - s,
            h =
              'top' === e.my[1]
                ? -e.elemHeight
                : 'bottom' === e.my[1]
                ? e.elemHeight
                : 0,
            i =
              'top' === e.at[1]
                ? e.targetHeight
                : 'bottom' === e.at[1]
                ? -e.targetHeight
                : 0,
            r = -2 * e.offset[1]
          l < 0
            ? ((n = t.top + h + i + r + e.collisionHeight - o - n) < 0 ||
                n < C(l)) &&
              (t.top += h + i + r)
            : 0 < a &&
              (0 <
                (s = t.top - e.collisionPosition.marginTop + h + i + r - s) ||
                C(s) < a) &&
              (t.top += h + i + r)
        },
      },
      flipfit: {
        left: function () {
          x.ui.position.flip.left.apply(this, arguments),
            x.ui.position.fit.left.apply(this, arguments)
        },
        top: function () {
          x.ui.position.flip.top.apply(this, arguments),
            x.ui.position.fit.top.apply(this, arguments)
        },
      },
    }),
    (x.ui.safeActiveElement = function (e) {
      var i
      try {
        i = e.activeElement
      } catch (t) {
        i = e.body
      }
      return (i = !(i = i || e.body).nodeName ? e.body : i)
    }),
    (x.ui.safeBlur = function (t) {
      t && 'body' !== t.nodeName.toLowerCase() && x(t).trigger('blur')
    }),
    (x.fn.scrollParent = function (t) {
      var e = this.css('position'),
        i = 'absolute' === e,
        n = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
        t = this.parents()
          .filter(function () {
            var t = x(this)
            return (
              (!i || 'static' !== t.css('position')) &&
              n.test(
                t.css('overflow') + t.css('overflow-y') + t.css('overflow-x'),
              )
            )
          })
          .eq(0)
      return 'fixed' !== e && t.length
        ? t
        : x(this[0].ownerDocument || document)
    }),
    x.extend(x.expr.pseudos, {
      tabbable: function (t) {
        var e = x.attr(t, 'tabindex'),
          i = null != e
        return (!i || 0 <= e) && x.ui.focusable(t, i)
      },
    }),
    x.fn.extend({
      uniqueId:
        ((u = 0),
        function () {
          return this.each(function () {
            this.id || (this.id = 'ui-id-' + ++u)
          })
        }),
      removeUniqueId: function () {
        return this.each(function () {
          ;/^ui-id-\d+$/.test(this.id) && x(this).removeAttr('id')
        })
      },
    })
  var f,
    c = 0,
    d = Array.prototype.hasOwnProperty,
    p = Array.prototype.slice
  ;(x.cleanData =
    ((f = x.cleanData),
    function (t) {
      for (var e, i, n = 0; null != (i = t[n]); n++)
        (e = x._data(i, 'events')) && e.remove && x(i).triggerHandler('remove')
      f(t)
    })),
    (x.widget = function (t, i, e) {
      var n,
        o,
        s,
        r = {},
        l = t.split('.')[0],
        a = l + '-' + (t = t.split('.')[1])
      return (
        e || ((e = i), (i = x.Widget)),
        Array.isArray(e) && (e = x.extend.apply(null, [{}].concat(e))),
        (x.expr.pseudos[a.toLowerCase()] = function (t) {
          return !!x.data(t, a)
        }),
        (x[l] = x[l] || {}),
        (n = x[l][t]),
        (o = x[l][t] = function (t, e) {
          if (!this || !this._createWidget) return new o(t, e)
          arguments.length && this._createWidget(t, e)
        }),
        x.extend(o, n, {
          version: e.version,
          _proto: x.extend({}, e),
          _childConstructors: [],
        }),
        ((s = new i()).options = x.widget.extend({}, s.options)),
        x.each(e, function (e, n) {
          function o() {
            return i.prototype[e].apply(this, arguments)
          }
          function s(t) {
            return i.prototype[e].apply(this, t)
          }
          r[e] =
            'function' == typeof n
              ? function () {
                  var t,
                    e = this._super,
                    i = this._superApply
                  return (
                    (this._super = o),
                    (this._superApply = s),
                    (t = n.apply(this, arguments)),
                    (this._super = e),
                    (this._superApply = i),
                    t
                  )
                }
              : n
        }),
        (o.prototype = x.widget.extend(
          s,
          { widgetEventPrefix: (n && s.widgetEventPrefix) || t },
          r,
          { constructor: o, namespace: l, widgetName: t, widgetFullName: a },
        )),
        n
          ? (x.each(n._childConstructors, function (t, e) {
              var i = e.prototype
              x.widget(i.namespace + '.' + i.widgetName, o, e._proto)
            }),
            delete n._childConstructors)
          : i._childConstructors.push(o),
        x.widget.bridge(t, o),
        o
      )
    }),
    (x.widget.extend = function (t) {
      for (var e, i, n = p.call(arguments, 1), o = 0, s = n.length; o < s; o++)
        for (e in n[o])
          (i = n[o][e]),
            d.call(n[o], e) &&
              void 0 !== i &&
              (x.isPlainObject(i)
                ? (t[e] = x.isPlainObject(t[e])
                    ? x.widget.extend({}, t[e], i)
                    : x.widget.extend({}, i))
                : (t[e] = i))
      return t
    }),
    (x.widget.bridge = function (s, e) {
      var r = e.prototype.widgetFullName || s
      x.fn[s] = function (i) {
        var t = 'string' == typeof i,
          n = p.call(arguments, 1),
          o = this
        return (
          t
            ? this.length || 'instance' !== i
              ? this.each(function () {
                  var t,
                    e = x.data(this, r)
                  return 'instance' === i
                    ? ((o = e), !1)
                    : e
                    ? 'function' != typeof e[i] || '_' === i.charAt(0)
                      ? x.error(
                          "no such method '" +
                            i +
                            "' for " +
                            s +
                            ' widget instance',
                        )
                      : (t = e[i].apply(e, n)) !== e && void 0 !== t
                      ? ((o = t && t.jquery ? o.pushStack(t.get()) : t), !1)
                      : void 0
                    : x.error(
                        'cannot call methods on ' +
                          s +
                          " prior to initialization; attempted to call method '" +
                          i +
                          "'",
                      )
                })
              : (o = void 0)
            : (n.length && (i = x.widget.extend.apply(null, [i].concat(n))),
              this.each(function () {
                var t = x.data(this, r)
                t
                  ? (t.option(i || {}), t._init && t._init())
                  : x.data(this, r, new e(i, this))
              })),
          o
        )
      }
    }),
    (x.Widget = function () {}),
    (x.Widget._childConstructors = []),
    (x.Widget.prototype = {
      widgetName: 'widget',
      widgetEventPrefix: '',
      defaultElement: '<div>',
      options: { classes: {}, disabled: !1, create: null },
      _createWidget: function (t, e) {
        ;(e = x(e || this.defaultElement || this)[0]),
          (this.element = x(e)),
          (this.uuid = c++),
          (this.eventNamespace = '.' + this.widgetName + this.uuid),
          (this.bindings = x()),
          (this.hoverable = x()),
          (this.focusable = x()),
          (this.classesElementLookup = {}),
          e !== this &&
            (x.data(e, this.widgetFullName, this),
            this._on(!0, this.element, {
              remove: function (t) {
                t.target === e && this.destroy()
              },
            }),
            (this.document = x(e.style ? e.ownerDocument : e.document || e)),
            (this.window = x(
              this.document[0].defaultView || this.document[0].parentWindow,
            ))),
          (this.options = x.widget.extend(
            {},
            this.options,
            this._getCreateOptions(),
            t,
          )),
          this._create(),
          this.options.disabled &&
            this._setOptionDisabled(this.options.disabled),
          this._trigger('create', null, this._getCreateEventData()),
          this._init()
      },
      _getCreateOptions: function () {
        return {}
      },
      _getCreateEventData: x.noop,
      _create: x.noop,
      _init: x.noop,
      destroy: function () {
        var i = this
        this._destroy(),
          x.each(this.classesElementLookup, function (t, e) {
            i._removeClass(e, t)
          }),
          this.element.off(this.eventNamespace).removeData(this.widgetFullName),
          this.widget().off(this.eventNamespace).removeAttr('aria-disabled'),
          this.bindings.off(this.eventNamespace)
      },
      _destroy: x.noop,
      widget: function () {
        return this.element
      },
      option: function (t, e) {
        var i,
          n,
          o,
          s = t
        if (0 === arguments.length) return x.widget.extend({}, this.options)
        if ('string' == typeof t)
          if (((s = {}), (t = (i = t.split('.')).shift()), i.length)) {
            for (
              n = s[t] = x.widget.extend({}, this.options[t]), o = 0;
              o < i.length - 1;
              o++
            )
              (n[i[o]] = n[i[o]] || {}), (n = n[i[o]])
            if (((t = i.pop()), 1 === arguments.length))
              return void 0 === n[t] ? null : n[t]
            n[t] = e
          } else {
            if (1 === arguments.length)
              return void 0 === this.options[t] ? null : this.options[t]
            s[t] = e
          }
        return this._setOptions(s), this
      },
      _setOptions: function (t) {
        for (var e in t) this._setOption(e, t[e])
        return this
      },
      _setOption: function (t, e) {
        return (
          'classes' === t && this._setOptionClasses(e),
          (this.options[t] = e),
          'disabled' === t && this._setOptionDisabled(e),
          this
        )
      },
      _setOptionClasses: function (t) {
        var e, i, n
        for (e in t)
          (n = this.classesElementLookup[e]),
            t[e] !== this.options.classes[e] &&
              n &&
              n.length &&
              ((i = x(n.get())),
              this._removeClass(n, e),
              i.addClass(
                this._classes({ element: i, keys: e, classes: t, add: !0 }),
              ))
      },
      _setOptionDisabled: function (t) {
        this._toggleClass(
          this.widget(),
          this.widgetFullName + '-disabled',
          null,
          !!t,
        ),
          t &&
            (this._removeClass(this.hoverable, null, 'ui-state-hover'),
            this._removeClass(this.focusable, null, 'ui-state-focus'))
      },
      enable: function () {
        return this._setOptions({ disabled: !1 })
      },
      disable: function () {
        return this._setOptions({ disabled: !0 })
      },
      _classes: function (o) {
        var s = [],
          r = this
        function t(t, e) {
          for (var i, n = 0; n < t.length; n++)
            (i = r.classesElementLookup[t[n]] || x()),
              (i = o.add
                ? ((function () {
                    var i = []
                    o.element.each(function (t, e) {
                      x
                        .map(r.classesElementLookup, function (t) {
                          return t
                        })
                        .some(function (t) {
                          return t.is(e)
                        }) || i.push(e)
                    }),
                      r._on(x(i), { remove: '_untrackClassesElement' })
                  })(),
                  x(x.uniqueSort(i.get().concat(o.element.get()))))
                : x(i.not(o.element).get())),
              (r.classesElementLookup[t[n]] = i),
              s.push(t[n]),
              e && o.classes[t[n]] && s.push(o.classes[t[n]])
        }
        return (
          (o = x.extend(
            { element: this.element, classes: this.options.classes || {} },
            o,
          )).keys && t(o.keys.match(/\S+/g) || [], !0),
          o.extra && t(o.extra.match(/\S+/g) || []),
          s.join(' ')
        )
      },
      _untrackClassesElement: function (i) {
        var n = this
        x.each(n.classesElementLookup, function (t, e) {
          ;-1 !== x.inArray(i.target, e) &&
            (n.classesElementLookup[t] = x(e.not(i.target).get()))
        }),
          this._off(x(i.target))
      },
      _removeClass: function (t, e, i) {
        return this._toggleClass(t, e, i, !1)
      },
      _addClass: function (t, e, i) {
        return this._toggleClass(t, e, i, !0)
      },
      _toggleClass: function (t, e, i, n) {
        var o = 'string' == typeof t || null === t,
          i = {
            extra: o ? e : i,
            keys: o ? t : e,
            element: o ? this.element : t,
            add: (n = 'boolean' == typeof n ? n : i),
          }
        return i.element.toggleClass(this._classes(i), n), this
      },
      _on: function (o, s, t) {
        var r,
          l = this
        'boolean' != typeof o && ((t = s), (s = o), (o = !1)),
          t
            ? ((s = r = x(s)), (this.bindings = this.bindings.add(s)))
            : ((t = s), (s = this.element), (r = this.widget())),
          x.each(t, function (t, e) {
            function i() {
              if (
                o ||
                (!0 !== l.options.disabled &&
                  !x(this).hasClass('ui-state-disabled'))
              )
                return ('string' == typeof e ? l[e] : e).apply(l, arguments)
            }
            'string' != typeof e &&
              (i.guid = e.guid = e.guid || i.guid || x.guid++)
            var n = t.match(/^([\w:-]*)\s*(.*)$/),
              t = n[1] + l.eventNamespace,
              n = n[2]
            n ? r.on(t, n, i) : s.on(t, i)
          })
      },
      _off: function (t, e) {
        ;(e =
          (e || '').split(' ').join(this.eventNamespace + ' ') +
          this.eventNamespace),
          t.off(e),
          (this.bindings = x(this.bindings.not(t).get())),
          (this.focusable = x(this.focusable.not(t).get())),
          (this.hoverable = x(this.hoverable.not(t).get()))
      },
      _delay: function (t, e) {
        var i = this
        return setTimeout(function () {
          return ('string' == typeof t ? i[t] : t).apply(i, arguments)
        }, e || 0)
      },
      _hoverable: function (t) {
        ;(this.hoverable = this.hoverable.add(t)),
          this._on(t, {
            mouseenter: function (t) {
              this._addClass(x(t.currentTarget), null, 'ui-state-hover')
            },
            mouseleave: function (t) {
              this._removeClass(x(t.currentTarget), null, 'ui-state-hover')
            },
          })
      },
      _focusable: function (t) {
        ;(this.focusable = this.focusable.add(t)),
          this._on(t, {
            focusin: function (t) {
              this._addClass(x(t.currentTarget), null, 'ui-state-focus')
            },
            focusout: function (t) {
              this._removeClass(x(t.currentTarget), null, 'ui-state-focus')
            },
          })
      },
      _trigger: function (t, e, i) {
        var n,
          o,
          s = this.options[t]
        if (
          ((i = i || {}),
          ((e = x.Event(e)).type = (t === this.widgetEventPrefix
            ? t
            : this.widgetEventPrefix + t
          ).toLowerCase()),
          (e.target = this.element[0]),
          (o = e.originalEvent))
        )
          for (n in o) n in e || (e[n] = o[n])
        return (
          this.element.trigger(e, i),
          !(
            ('function' == typeof s &&
              !1 === s.apply(this.element[0], [e].concat(i))) ||
            e.isDefaultPrevented()
          )
        )
      },
    }),
    x.each({ show: 'fadeIn', hide: 'fadeOut' }, function (s, r) {
      x.Widget.prototype['_' + s] = function (e, t, i) {
        var n,
          o = (t = 'string' == typeof t ? { effect: t } : t)
            ? (!0 !== t && 'number' != typeof t && t.effect) || r
            : s
        'number' == typeof (t = t || {})
          ? (t = { duration: t })
          : !0 === t && (t = {}),
          (n = !x.isEmptyObject(t)),
          (t.complete = i),
          t.delay && e.delay(t.delay),
          n && x.effects && x.effects.effect[o]
            ? e[s](t)
            : o !== s && e[o]
            ? e[o](t.duration, t.easing, i)
            : e.queue(function (t) {
                x(this)[s](), i && i.call(e[0]), t()
              })
      }
    })
})
!(function (e) {
  'use strict'
  'function' == typeof define && define.amd
    ? define(['jquery', './core'], e)
    : e(jQuery)
})(function (o) {
  'use strict'
  var n = !1
  return (
    o(document).on('mouseup', function () {
      n = !1
    }),
    o.widget('ui.mouse', {
      version: '1.13.1',
      options: {
        cancel: 'input, textarea, button, select, option',
        distance: 1,
        delay: 0,
      },
      _mouseInit: function () {
        var t = this
        this.element
          .on('mousedown.' + this.widgetName, function (e) {
            return t._mouseDown(e)
          })
          .on('click.' + this.widgetName, function (e) {
            if (!0 === o.data(e.target, t.widgetName + '.preventClickEvent'))
              return (
                o.removeData(e.target, t.widgetName + '.preventClickEvent'),
                e.stopImmediatePropagation(),
                !1
              )
          }),
          (this.started = !1)
      },
      _mouseDestroy: function () {
        this.element.off('.' + this.widgetName),
          this._mouseMoveDelegate &&
            this.document
              .off('mousemove.' + this.widgetName, this._mouseMoveDelegate)
              .off('mouseup.' + this.widgetName, this._mouseUpDelegate)
      },
      _mouseDown: function (e) {
        if (!n) {
          ;(this._mouseMoved = !1),
            this._mouseStarted && this._mouseUp(e),
            (this._mouseDownEvent = e)
          var t = this,
            s = 1 === e.which,
            i =
              !('string' != typeof this.options.cancel || !e.target.nodeName) &&
              o(e.target).closest(this.options.cancel).length
          return s && !i && this._mouseCapture(e)
            ? ((this.mouseDelayMet = !this.options.delay),
              this.mouseDelayMet ||
                (this._mouseDelayTimer = setTimeout(function () {
                  t.mouseDelayMet = !0
                }, this.options.delay)),
              this._mouseDistanceMet(e) &&
              this._mouseDelayMet(e) &&
              ((this._mouseStarted = !1 !== this._mouseStart(e)),
              !this._mouseStarted)
                ? (e.preventDefault(), !0)
                : (!0 ===
                    o.data(e.target, this.widgetName + '.preventClickEvent') &&
                    o.removeData(
                      e.target,
                      this.widgetName + '.preventClickEvent',
                    ),
                  (this._mouseMoveDelegate = function (e) {
                    return t._mouseMove(e)
                  }),
                  (this._mouseUpDelegate = function (e) {
                    return t._mouseUp(e)
                  }),
                  this.document
                    .on('mousemove.' + this.widgetName, this._mouseMoveDelegate)
                    .on('mouseup.' + this.widgetName, this._mouseUpDelegate),
                  e.preventDefault(),
                  (n = !0)))
            : !0
        }
      },
      _mouseMove: function (e) {
        if (this._mouseMoved) {
          if (
            o.ui.ie &&
            (!document.documentMode || document.documentMode < 9) &&
            !e.button
          )
            return this._mouseUp(e)
          if (!e.which)
            if (
              e.originalEvent.altKey ||
              e.originalEvent.ctrlKey ||
              e.originalEvent.metaKey ||
              e.originalEvent.shiftKey
            )
              this.ignoreMissingWhich = !0
            else if (!this.ignoreMissingWhich) return this._mouseUp(e)
        }
        return (
          (e.which || e.button) && (this._mouseMoved = !0),
          this._mouseStarted
            ? (this._mouseDrag(e), e.preventDefault())
            : (this._mouseDistanceMet(e) &&
                this._mouseDelayMet(e) &&
                ((this._mouseStarted =
                  !1 !== this._mouseStart(this._mouseDownEvent, e)),
                this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)),
              !this._mouseStarted)
        )
      },
      _mouseUp: function (e) {
        this.document
          .off('mousemove.' + this.widgetName, this._mouseMoveDelegate)
          .off('mouseup.' + this.widgetName, this._mouseUpDelegate),
          this._mouseStarted &&
            ((this._mouseStarted = !1),
            e.target === this._mouseDownEvent.target &&
              o.data(e.target, this.widgetName + '.preventClickEvent', !0),
            this._mouseStop(e)),
          this._mouseDelayTimer &&
            (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer),
          (this.ignoreMissingWhich = !1),
          (n = !1),
          e.preventDefault()
      },
      _mouseDistanceMet: function (e) {
        return (
          Math.max(
            Math.abs(this._mouseDownEvent.pageX - e.pageX),
            Math.abs(this._mouseDownEvent.pageY - e.pageY),
          ) >= this.options.distance
        )
      },
      _mouseDelayMet: function () {
        return this.mouseDelayMet
      },
      _mouseStart: function () {},
      _mouseDrag: function () {},
      _mouseStop: function () {},
      _mouseCapture: function () {
        return !0
      },
    })
  )
})
!(function (t) {
  'use strict'
  'function' == typeof define && define.amd
    ? define(['jquery', './mouse', './core'], t)
    : t(jQuery)
})(function (u) {
  'use strict'
  return u.widget('ui.sortable', u.ui.mouse, {
    version: '1.13.1',
    widgetEventPrefix: 'sort',
    ready: !1,
    options: {
      appendTo: 'parent',
      axis: !1,
      connectWith: !1,
      containment: !1,
      cursor: 'auto',
      cursorAt: !1,
      dropOnEmpty: !0,
      forcePlaceholderSize: !1,
      forceHelperSize: !1,
      grid: !1,
      handle: !1,
      helper: 'original',
      items: '> *',
      opacity: !1,
      placeholder: !1,
      revert: !1,
      scroll: !0,
      scrollSensitivity: 20,
      scrollSpeed: 20,
      scope: 'default',
      tolerance: 'intersect',
      zIndex: 1e3,
      activate: null,
      beforeStop: null,
      change: null,
      deactivate: null,
      out: null,
      over: null,
      receive: null,
      remove: null,
      sort: null,
      start: null,
      stop: null,
      update: null,
    },
    _isOverAxis: function (t, e, i) {
      return e <= t && t < e + i
    },
    _isFloating: function (t) {
      return (
        /left|right/.test(t.css('float')) ||
        /inline|table-cell/.test(t.css('display'))
      )
    },
    _create: function () {
      ;(this.containerCache = {}),
        this._addClass('ui-sortable'),
        this.refresh(),
        (this.offset = this.element.offset()),
        this._mouseInit(),
        this._setHandleClassName(),
        (this.ready = !0)
    },
    _setOption: function (t, e) {
      this._super(t, e), 'handle' === t && this._setHandleClassName()
    },
    _setHandleClassName: function () {
      var t = this
      this._removeClass(
        this.element.find('.ui-sortable-handle'),
        'ui-sortable-handle',
      ),
        u.each(this.items, function () {
          t._addClass(
            this.instance.options.handle
              ? this.item.find(this.instance.options.handle)
              : this.item,
            'ui-sortable-handle',
          )
        })
    },
    _destroy: function () {
      this._mouseDestroy()
      for (var t = this.items.length - 1; 0 <= t; t--)
        this.items[t].item.removeData(this.widgetName + '-item')
      return this
    },
    _mouseCapture: function (t, e) {
      var i = null,
        s = !1,
        o = this
      return (
        !this.reverting &&
        !this.options.disabled &&
        'static' !== this.options.type &&
        (this._refreshItems(t),
        u(t.target)
          .parents()
          .each(function () {
            if (u.data(this, o.widgetName + '-item') === o)
              return (i = u(this)), !1
          }),
        !!(i =
          u.data(t.target, o.widgetName + '-item') === o ? u(t.target) : i) &&
          !(
            this.options.handle &&
            !e &&
            (u(this.options.handle, i)
              .find('*')
              .addBack()
              .each(function () {
                this === t.target && (s = !0)
              }),
            !s)
          ) &&
          ((this.currentItem = i), this._removeCurrentsFromItems(), !0))
      )
    },
    _mouseStart: function (t, e, i) {
      var s,
        o,
        r = this.options
      if (
        ((this.currentContainer = this).refreshPositions(),
        (this.appendTo = u(
          'parent' !== r.appendTo ? r.appendTo : this.currentItem.parent(),
        )),
        (this.helper = this._createHelper(t)),
        this._cacheHelperProportions(),
        this._cacheMargins(),
        (this.offset = this.currentItem.offset()),
        (this.offset = {
          top: this.offset.top - this.margins.top,
          left: this.offset.left - this.margins.left,
        }),
        u.extend(this.offset, {
          click: {
            left: t.pageX - this.offset.left,
            top: t.pageY - this.offset.top,
          },
          relative: this._getRelativeOffset(),
        }),
        this.helper.css('position', 'absolute'),
        (this.cssPosition = this.helper.css('position')),
        r.cursorAt && this._adjustOffsetFromHelper(r.cursorAt),
        (this.domPosition = {
          prev: this.currentItem.prev()[0],
          parent: this.currentItem.parent()[0],
        }),
        this.helper[0] !== this.currentItem[0] && this.currentItem.hide(),
        this._createPlaceholder(),
        (this.scrollParent = this.placeholder.scrollParent()),
        u.extend(this.offset, { parent: this._getParentOffset() }),
        r.containment && this._setContainment(),
        r.cursor &&
          'auto' !== r.cursor &&
          ((o = this.document.find('body')),
          (this.storedCursor = o.css('cursor')),
          o.css('cursor', r.cursor),
          (this.storedStylesheet = u(
            '<style>*{ cursor: ' + r.cursor + ' !important; }</style>',
          ).appendTo(o))),
        r.zIndex &&
          (this.helper.css('zIndex') &&
            (this._storedZIndex = this.helper.css('zIndex')),
          this.helper.css('zIndex', r.zIndex)),
        r.opacity &&
          (this.helper.css('opacity') &&
            (this._storedOpacity = this.helper.css('opacity')),
          this.helper.css('opacity', r.opacity)),
        this.scrollParent[0] !== this.document[0] &&
          'HTML' !== this.scrollParent[0].tagName &&
          (this.overflowOffset = this.scrollParent.offset()),
        this._trigger('start', t, this._uiHash()),
        this._preserveHelperProportions || this._cacheHelperProportions(),
        !i)
      )
        for (s = this.containers.length - 1; 0 <= s; s--)
          this.containers[s]._trigger('activate', t, this._uiHash(this))
      return (
        u.ui.ddmanager && (u.ui.ddmanager.current = this),
        u.ui.ddmanager &&
          !r.dropBehaviour &&
          u.ui.ddmanager.prepareOffsets(this, t),
        (this.dragging = !0),
        this._addClass(this.helper, 'ui-sortable-helper'),
        this.helper.parent().is(this.appendTo) ||
          (this.helper.detach().appendTo(this.appendTo),
          (this.offset.parent = this._getParentOffset())),
        (this.position = this.originalPosition = this._generatePosition(t)),
        (this.originalPageX = t.pageX),
        (this.originalPageY = t.pageY),
        (this.lastPositionAbs = this.positionAbs = this._convertPositionTo(
          'absolute',
        )),
        this._mouseDrag(t),
        !0
      )
    },
    _scroll: function (t) {
      var e = this.options,
        i = !1
      return (
        this.scrollParent[0] !== this.document[0] &&
        'HTML' !== this.scrollParent[0].tagName
          ? (this.overflowOffset.top +
              this.scrollParent[0].offsetHeight -
              t.pageY <
            e.scrollSensitivity
              ? (this.scrollParent[0].scrollTop = i =
                  this.scrollParent[0].scrollTop + e.scrollSpeed)
              : t.pageY - this.overflowOffset.top < e.scrollSensitivity &&
                (this.scrollParent[0].scrollTop = i =
                  this.scrollParent[0].scrollTop - e.scrollSpeed),
            this.overflowOffset.left +
              this.scrollParent[0].offsetWidth -
              t.pageX <
            e.scrollSensitivity
              ? (this.scrollParent[0].scrollLeft = i =
                  this.scrollParent[0].scrollLeft + e.scrollSpeed)
              : t.pageX - this.overflowOffset.left < e.scrollSensitivity &&
                (this.scrollParent[0].scrollLeft = i =
                  this.scrollParent[0].scrollLeft - e.scrollSpeed))
          : (t.pageY - this.document.scrollTop() < e.scrollSensitivity
              ? (i = this.document.scrollTop(
                  this.document.scrollTop() - e.scrollSpeed,
                ))
              : this.window.height() - (t.pageY - this.document.scrollTop()) <
                  e.scrollSensitivity &&
                (i = this.document.scrollTop(
                  this.document.scrollTop() + e.scrollSpeed,
                )),
            t.pageX - this.document.scrollLeft() < e.scrollSensitivity
              ? (i = this.document.scrollLeft(
                  this.document.scrollLeft() - e.scrollSpeed,
                ))
              : this.window.width() - (t.pageX - this.document.scrollLeft()) <
                  e.scrollSensitivity &&
                (i = this.document.scrollLeft(
                  this.document.scrollLeft() + e.scrollSpeed,
                ))),
        i
      )
    },
    _mouseDrag: function (t) {
      var e,
        i,
        s,
        o,
        r = this.options
      for (
        this.position = this._generatePosition(t),
          this.positionAbs = this._convertPositionTo('absolute'),
          (this.options.axis && 'y' === this.options.axis) ||
            (this.helper[0].style.left = this.position.left + 'px'),
          (this.options.axis && 'x' === this.options.axis) ||
            (this.helper[0].style.top = this.position.top + 'px'),
          r.scroll &&
            !1 !== this._scroll(t) &&
            (this._refreshItemPositions(!0),
            u.ui.ddmanager &&
              !r.dropBehaviour &&
              u.ui.ddmanager.prepareOffsets(this, t)),
          this.dragDirection = {
            vertical: this._getDragVerticalDirection(),
            horizontal: this._getDragHorizontalDirection(),
          },
          e = this.items.length - 1;
        0 <= e;
        e--
      )
        if (
          ((s = (i = this.items[e]).item[0]),
          (o = this._intersectsWithPointer(i)) &&
            i.instance === this.currentContainer &&
            !(
              s === this.currentItem[0] ||
              this.placeholder[1 === o ? 'next' : 'prev']()[0] === s ||
              u.contains(this.placeholder[0], s) ||
              ('semi-dynamic' === this.options.type &&
                u.contains(this.element[0], s))
            ))
        ) {
          if (
            ((this.direction = 1 === o ? 'down' : 'up'),
            'pointer' !== this.options.tolerance &&
              !this._intersectsWithSides(i))
          )
            break
          this._rearrange(t, i), this._trigger('change', t, this._uiHash())
          break
        }
      return (
        this._contactContainers(t),
        u.ui.ddmanager && u.ui.ddmanager.drag(this, t),
        this._trigger('sort', t, this._uiHash()),
        (this.lastPositionAbs = this.positionAbs),
        !1
      )
    },
    _mouseStop: function (t, e) {
      var i, s, o, r
      if (t)
        return (
          u.ui.ddmanager &&
            !this.options.dropBehaviour &&
            u.ui.ddmanager.drop(this, t),
          this.options.revert
            ? ((s = (i = this).placeholder.offset()),
              (r = {}),
              ((o = this.options.axis) && 'x' !== o) ||
                (r.left =
                  s.left -
                  this.offset.parent.left -
                  this.margins.left +
                  (this.offsetParent[0] === this.document[0].body
                    ? 0
                    : this.offsetParent[0].scrollLeft)),
              (o && 'y' !== o) ||
                (r.top =
                  s.top -
                  this.offset.parent.top -
                  this.margins.top +
                  (this.offsetParent[0] === this.document[0].body
                    ? 0
                    : this.offsetParent[0].scrollTop)),
              (this.reverting = !0),
              u(this.helper).animate(
                r,
                parseInt(this.options.revert, 10) || 500,
                function () {
                  i._clear(t)
                },
              ))
            : this._clear(t, e),
          !1
        )
    },
    cancel: function () {
      if (this.dragging) {
        this._mouseUp(new u.Event('mouseup', { target: null })),
          'original' === this.options.helper
            ? (this.currentItem.css(this._storedCSS),
              this._removeClass(this.currentItem, 'ui-sortable-helper'))
            : this.currentItem.show()
        for (var t = this.containers.length - 1; 0 <= t; t--)
          this.containers[t]._trigger('deactivate', null, this._uiHash(this)),
            this.containers[t].containerCache.over &&
              (this.containers[t]._trigger('out', null, this._uiHash(this)),
              (this.containers[t].containerCache.over = 0))
      }
      return (
        this.placeholder &&
          (this.placeholder[0].parentNode &&
            this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
          'original' !== this.options.helper &&
            this.helper &&
            this.helper[0].parentNode &&
            this.helper.remove(),
          u.extend(this, {
            helper: null,
            dragging: !1,
            reverting: !1,
            _noFinalSort: null,
          }),
          this.domPosition.prev
            ? u(this.domPosition.prev).after(this.currentItem)
            : u(this.domPosition.parent).prepend(this.currentItem)),
        this
      )
    },
    serialize: function (e) {
      var t = this._getItemsAsjQuery(e && e.connected),
        i = []
      return (
        (e = e || {}),
        u(t).each(function () {
          var t = (u(e.item || this).attr(e.attribute || 'id') || '').match(
            e.expression || /(.+)[\-=_](.+)/,
          )
          t &&
            i.push(
              (e.key || t[1] + '[]') +
                '=' +
                (e.key && e.expression ? t[1] : t[2]),
            )
        }),
        !i.length && e.key && i.push(e.key + '='),
        i.join('&')
      )
    },
    toArray: function (t) {
      var e = this._getItemsAsjQuery(t && t.connected),
        i = []
      return (
        (t = t || {}),
        e.each(function () {
          i.push(u(t.item || this).attr(t.attribute || 'id') || '')
        }),
        i
      )
    },
    _intersectsWith: function (t) {
      var e = this.positionAbs.left,
        i = e + this.helperProportions.width,
        s = this.positionAbs.top,
        o = s + this.helperProportions.height,
        r = t.left,
        n = r + t.width,
        h = t.top,
        a = h + t.height,
        l = this.offset.click.top,
        c = this.offset.click.left,
        l = 'x' === this.options.axis || (h < s + l && s + l < a),
        c = 'y' === this.options.axis || (r < e + c && e + c < n)
      return 'pointer' === this.options.tolerance ||
        this.options.forcePointerForContainers ||
        ('pointer' !== this.options.tolerance &&
          this.helperProportions[this.floating ? 'width' : 'height'] >
            t[this.floating ? 'width' : 'height'])
        ? l && c
        : r < e + this.helperProportions.width / 2 &&
            i - this.helperProportions.width / 2 < n &&
            h < s + this.helperProportions.height / 2 &&
            o - this.helperProportions.height / 2 < a
    },
    _intersectsWithPointer: function (t) {
      var e =
          'x' === this.options.axis ||
          this._isOverAxis(
            this.positionAbs.top + this.offset.click.top,
            t.top,
            t.height,
          ),
        t =
          'y' === this.options.axis ||
          this._isOverAxis(
            this.positionAbs.left + this.offset.click.left,
            t.left,
            t.width,
          )
      return (
        !(!e || !t) &&
        ((e = this.dragDirection.vertical),
        (t = this.dragDirection.horizontal),
        this.floating
          ? 'right' === t || 'down' === e
            ? 2
            : 1
          : e && ('down' === e ? 2 : 1))
      )
    },
    _intersectsWithSides: function (t) {
      var e = this._isOverAxis(
          this.positionAbs.top + this.offset.click.top,
          t.top + t.height / 2,
          t.height,
        ),
        i = this._isOverAxis(
          this.positionAbs.left + this.offset.click.left,
          t.left + t.width / 2,
          t.width,
        ),
        s = this.dragDirection.vertical,
        t = this.dragDirection.horizontal
      return this.floating && t
        ? ('right' === t && i) || ('left' === t && !i)
        : s && (('down' === s && e) || ('up' === s && !e))
    },
    _getDragVerticalDirection: function () {
      var t = this.positionAbs.top - this.lastPositionAbs.top
      return 0 != t && (0 < t ? 'down' : 'up')
    },
    _getDragHorizontalDirection: function () {
      var t = this.positionAbs.left - this.lastPositionAbs.left
      return 0 != t && (0 < t ? 'right' : 'left')
    },
    refresh: function (t) {
      return (
        this._refreshItems(t),
        this._setHandleClassName(),
        this.refreshPositions(),
        this
      )
    },
    _connectWith: function () {
      var t = this.options
      return t.connectWith.constructor === String
        ? [t.connectWith]
        : t.connectWith
    },
    _getItemsAsjQuery: function (t) {
      var e,
        i,
        s,
        o,
        r = [],
        n = [],
        h = this._connectWith()
      if (h && t)
        for (e = h.length - 1; 0 <= e; e--)
          for (i = (s = u(h[e], this.document[0])).length - 1; 0 <= i; i--)
            (o = u.data(s[i], this.widgetFullName)) &&
              o !== this &&
              !o.options.disabled &&
              n.push([
                'function' == typeof o.options.items
                  ? o.options.items.call(o.element)
                  : u(o.options.items, o.element)
                      .not('.ui-sortable-helper')
                      .not('.ui-sortable-placeholder'),
                o,
              ])
      function a() {
        r.push(this)
      }
      for (
        n.push([
          'function' == typeof this.options.items
            ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem,
              })
            : u(this.options.items, this.element)
                .not('.ui-sortable-helper')
                .not('.ui-sortable-placeholder'),
          this,
        ]),
          e = n.length - 1;
        0 <= e;
        e--
      )
        n[e][0].each(a)
      return u(r)
    },
    _removeCurrentsFromItems: function () {
      var i = this.currentItem.find(':data(' + this.widgetName + '-item)')
      this.items = u.grep(this.items, function (t) {
        for (var e = 0; e < i.length; e++) if (i[e] === t.item[0]) return !1
        return !0
      })
    },
    _refreshItems: function (t) {
      ;(this.items = []), (this.containers = [this])
      var e,
        i,
        s,
        o,
        r,
        n,
        h,
        a,
        l = this.items,
        c = [
          [
            'function' == typeof this.options.items
              ? this.options.items.call(this.element[0], t, {
                  item: this.currentItem,
                })
              : u(this.options.items, this.element),
            this,
          ],
        ],
        p = this._connectWith()
      if (p && this.ready)
        for (e = p.length - 1; 0 <= e; e--)
          for (i = (s = u(p[e], this.document[0])).length - 1; 0 <= i; i--)
            (o = u.data(s[i], this.widgetFullName)) &&
              o !== this &&
              !o.options.disabled &&
              (c.push([
                'function' == typeof o.options.items
                  ? o.options.items.call(o.element[0], t, {
                      item: this.currentItem,
                    })
                  : u(o.options.items, o.element),
                o,
              ]),
              this.containers.push(o))
      for (e = c.length - 1; 0 <= e; e--)
        for (r = c[e][1], a = (n = c[e][(i = 0)]).length; i < a; i++)
          (h = u(n[i])).data(this.widgetName + '-item', r),
            l.push({
              item: h,
              instance: r,
              width: 0,
              height: 0,
              left: 0,
              top: 0,
            })
    },
    _refreshItemPositions: function (t) {
      for (var e, i, s = this.items.length - 1; 0 <= s; s--)
        (e = this.items[s]),
          (this.currentContainer &&
            e.instance !== this.currentContainer &&
            e.item[0] !== this.currentItem[0]) ||
            ((i = this.options.toleranceElement
              ? u(this.options.toleranceElement, e.item)
              : e.item),
            t || ((e.width = i.outerWidth()), (e.height = i.outerHeight())),
            (i = i.offset()),
            (e.left = i.left),
            (e.top = i.top))
    },
    refreshPositions: function (t) {
      var e, i
      if (
        ((this.floating =
          !!this.items.length &&
          ('x' === this.options.axis || this._isFloating(this.items[0].item))),
        this.offsetParent &&
          this.helper &&
          (this.offset.parent = this._getParentOffset()),
        this._refreshItemPositions(t),
        this.options.custom && this.options.custom.refreshContainers)
      )
        this.options.custom.refreshContainers.call(this)
      else
        for (e = this.containers.length - 1; 0 <= e; e--)
          (i = this.containers[e].element.offset()),
            (this.containers[e].containerCache.left = i.left),
            (this.containers[e].containerCache.top = i.top),
            (this.containers[e].containerCache.width = this.containers[
              e
            ].element.outerWidth()),
            (this.containers[e].containerCache.height = this.containers[
              e
            ].element.outerHeight())
      return this
    },
    _createPlaceholder: function (i) {
      var s,
        o,
        r = (i = i || this).options
      ;(r.placeholder && r.placeholder.constructor !== String) ||
        ((s = r.placeholder),
        (o = i.currentItem[0].nodeName.toLowerCase()),
        (r.placeholder = {
          element: function () {
            var t = u('<' + o + '>', i.document[0])
            return (
              i
                ._addClass(
                  t,
                  'ui-sortable-placeholder',
                  s || i.currentItem[0].className,
                )
                ._removeClass(t, 'ui-sortable-helper'),
              'tbody' === o
                ? i._createTrPlaceholder(
                    i.currentItem.find('tr').eq(0),
                    u('<tr>', i.document[0]).appendTo(t),
                  )
                : 'tr' === o
                ? i._createTrPlaceholder(i.currentItem, t)
                : 'img' === o && t.attr('src', i.currentItem.attr('src')),
              s || t.css('visibility', 'hidden'),
              t
            )
          },
          update: function (t, e) {
            ;(s && !r.forcePlaceholderSize) ||
              ((e.height() &&
                (!r.forcePlaceholderSize || ('tbody' !== o && 'tr' !== o))) ||
                e.height(
                  i.currentItem.innerHeight() -
                    parseInt(i.currentItem.css('paddingTop') || 0, 10) -
                    parseInt(i.currentItem.css('paddingBottom') || 0, 10),
                ),
              e.width() ||
                e.width(
                  i.currentItem.innerWidth() -
                    parseInt(i.currentItem.css('paddingLeft') || 0, 10) -
                    parseInt(i.currentItem.css('paddingRight') || 0, 10),
                ))
          },
        })),
        (i.placeholder = u(
          r.placeholder.element.call(i.element, i.currentItem),
        )),
        i.currentItem.after(i.placeholder),
        r.placeholder.update(i, i.placeholder)
    },
    _createTrPlaceholder: function (t, e) {
      var i = this
      t.children().each(function () {
        u('<td>&#160;</td>', i.document[0])
          .attr('colspan', u(this).attr('colspan') || 1)
          .appendTo(e)
      })
    },
    _contactContainers: function (t) {
      for (
        var e,
          i,
          s,
          o,
          r,
          n,
          h,
          a,
          l,
          c = null,
          p = null,
          f = this.containers.length - 1;
        0 <= f;
        f--
      )
        u.contains(this.currentItem[0], this.containers[f].element[0]) ||
          (this._intersectsWith(this.containers[f].containerCache)
            ? (c && u.contains(this.containers[f].element[0], c.element[0])) ||
              ((c = this.containers[f]), (p = f))
            : this.containers[f].containerCache.over &&
              (this.containers[f]._trigger('out', t, this._uiHash(this)),
              (this.containers[f].containerCache.over = 0)))
      if (c)
        if (1 === this.containers.length)
          this.containers[p].containerCache.over ||
            (this.containers[p]._trigger('over', t, this._uiHash(this)),
            (this.containers[p].containerCache.over = 1))
        else {
          for (
            i = 1e4,
              s = null,
              o = (a = c.floating || this._isFloating(this.currentItem))
                ? 'left'
                : 'top',
              r = a ? 'width' : 'height',
              l = a ? 'pageX' : 'pageY',
              e = this.items.length - 1;
            0 <= e;
            e--
          )
            u.contains(this.containers[p].element[0], this.items[e].item[0]) &&
              this.items[e].item[0] !== this.currentItem[0] &&
              ((n = this.items[e].item.offset()[o]),
              (h = !1),
              t[l] - n > this.items[e][r] / 2 && (h = !0),
              Math.abs(t[l] - n) < i &&
                ((i = Math.abs(t[l] - n)),
                (s = this.items[e]),
                (this.direction = h ? 'up' : 'down')))
          ;(s || this.options.dropOnEmpty) &&
            (this.currentContainer !== this.containers[p]
              ? (s
                  ? this._rearrange(t, s, null, !0)
                  : this._rearrange(t, null, this.containers[p].element, !0),
                this._trigger('change', t, this._uiHash()),
                this.containers[p]._trigger('change', t, this._uiHash(this)),
                (this.currentContainer = this.containers[p]),
                this.options.placeholder.update(
                  this.currentContainer,
                  this.placeholder,
                ),
                (this.scrollParent = this.placeholder.scrollParent()),
                this.scrollParent[0] !== this.document[0] &&
                  'HTML' !== this.scrollParent[0].tagName &&
                  (this.overflowOffset = this.scrollParent.offset()),
                this.containers[p]._trigger('over', t, this._uiHash(this)),
                (this.containers[p].containerCache.over = 1))
              : this.currentContainer.containerCache.over ||
                (this.containers[p]._trigger('over', t, this._uiHash()),
                (this.currentContainer.containerCache.over = 1)))
        }
    },
    _createHelper: function (t) {
      var e = this.options,
        t =
          'function' == typeof e.helper
            ? u(e.helper.apply(this.element[0], [t, this.currentItem]))
            : 'clone' === e.helper
            ? this.currentItem.clone()
            : this.currentItem
      return (
        t.parents('body').length || this.appendTo[0].appendChild(t[0]),
        t[0] === this.currentItem[0] &&
          (this._storedCSS = {
            width: this.currentItem[0].style.width,
            height: this.currentItem[0].style.height,
            position: this.currentItem.css('position'),
            top: this.currentItem.css('top'),
            left: this.currentItem.css('left'),
          }),
        (t[0].style.width && !e.forceHelperSize) ||
          t.width(this.currentItem.width()),
        (t[0].style.height && !e.forceHelperSize) ||
          t.height(this.currentItem.height()),
        t
      )
    },
    _adjustOffsetFromHelper: function (t) {
      'string' == typeof t && (t = t.split(' ')),
        'left' in
          (t = Array.isArray(t) ? { left: +t[0], top: +t[1] || 0 } : t) &&
          (this.offset.click.left = t.left + this.margins.left),
        'right' in t &&
          (this.offset.click.left =
            this.helperProportions.width - t.right + this.margins.left),
        'top' in t && (this.offset.click.top = t.top + this.margins.top),
        'bottom' in t &&
          (this.offset.click.top =
            this.helperProportions.height - t.bottom + this.margins.top)
    },
    _getParentOffset: function () {
      this.offsetParent = this.helper.offsetParent()
      var t = this.offsetParent.offset()
      return (
        'absolute' === this.cssPosition &&
          this.scrollParent[0] !== this.document[0] &&
          u.contains(this.scrollParent[0], this.offsetParent[0]) &&
          ((t.left += this.scrollParent.scrollLeft()),
          (t.top += this.scrollParent.scrollTop())),
        {
          top:
            (t =
              this.offsetParent[0] === this.document[0].body ||
              (this.offsetParent[0].tagName &&
                'html' === this.offsetParent[0].tagName.toLowerCase() &&
                u.ui.ie)
                ? { top: 0, left: 0 }
                : t).top +
            (parseInt(this.offsetParent.css('borderTopWidth'), 10) || 0),
          left:
            t.left +
            (parseInt(this.offsetParent.css('borderLeftWidth'), 10) || 0),
        }
      )
    },
    _getRelativeOffset: function () {
      if ('relative' !== this.cssPosition) return { top: 0, left: 0 }
      var t = this.currentItem.position()
      return {
        top:
          t.top -
          (parseInt(this.helper.css('top'), 10) || 0) +
          this.scrollParent.scrollTop(),
        left:
          t.left -
          (parseInt(this.helper.css('left'), 10) || 0) +
          this.scrollParent.scrollLeft(),
      }
    },
    _cacheMargins: function () {
      this.margins = {
        left: parseInt(this.currentItem.css('marginLeft'), 10) || 0,
        top: parseInt(this.currentItem.css('marginTop'), 10) || 0,
      }
    },
    _cacheHelperProportions: function () {
      this.helperProportions = {
        width: this.helper.outerWidth(),
        height: this.helper.outerHeight(),
      }
    },
    _setContainment: function () {
      var t,
        e,
        i = this.options
      'parent' === i.containment && (i.containment = this.helper[0].parentNode),
        ('document' !== i.containment && 'window' !== i.containment) ||
          (this.containment = [
            0 - this.offset.relative.left - this.offset.parent.left,
            0 - this.offset.relative.top - this.offset.parent.top,
            'document' === i.containment
              ? this.document.width()
              : this.window.width() -
                this.helperProportions.width -
                this.margins.left,
            ('document' === i.containment
              ? this.document.height() || document.body.parentNode.scrollHeight
              : this.window.height() ||
                this.document[0].body.parentNode.scrollHeight) -
              this.helperProportions.height -
              this.margins.top,
          ]),
        /^(document|window|parent)$/.test(i.containment) ||
          ((t = u(i.containment)[0]),
          (e = u(i.containment).offset()),
          (i = 'hidden' !== u(t).css('overflow')),
          (this.containment = [
            e.left +
              (parseInt(u(t).css('borderLeftWidth'), 10) || 0) +
              (parseInt(u(t).css('paddingLeft'), 10) || 0) -
              this.margins.left,
            e.top +
              (parseInt(u(t).css('borderTopWidth'), 10) || 0) +
              (parseInt(u(t).css('paddingTop'), 10) || 0) -
              this.margins.top,
            e.left +
              (i ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) -
              (parseInt(u(t).css('borderLeftWidth'), 10) || 0) -
              (parseInt(u(t).css('paddingRight'), 10) || 0) -
              this.helperProportions.width -
              this.margins.left,
            e.top +
              (i ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) -
              (parseInt(u(t).css('borderTopWidth'), 10) || 0) -
              (parseInt(u(t).css('paddingBottom'), 10) || 0) -
              this.helperProportions.height -
              this.margins.top,
          ]))
    },
    _convertPositionTo: function (t, e) {
      e = e || this.position
      var i = 'absolute' === t ? 1 : -1,
        s =
          'absolute' !== this.cssPosition ||
          (this.scrollParent[0] !== this.document[0] &&
            u.contains(this.scrollParent[0], this.offsetParent[0]))
            ? this.scrollParent
            : this.offsetParent,
        t = /(html|body)/i.test(s[0].tagName)
      return {
        top:
          e.top +
          this.offset.relative.top * i +
          this.offset.parent.top * i -
          ('fixed' === this.cssPosition
            ? -this.scrollParent.scrollTop()
            : t
            ? 0
            : s.scrollTop()) *
            i,
        left:
          e.left +
          this.offset.relative.left * i +
          this.offset.parent.left * i -
          ('fixed' === this.cssPosition
            ? -this.scrollParent.scrollLeft()
            : t
            ? 0
            : s.scrollLeft()) *
            i,
      }
    },
    _generatePosition: function (t) {
      var e = this.options,
        i = t.pageX,
        s = t.pageY,
        o =
          'absolute' !== this.cssPosition ||
          (this.scrollParent[0] !== this.document[0] &&
            u.contains(this.scrollParent[0], this.offsetParent[0]))
            ? this.scrollParent
            : this.offsetParent,
        r = /(html|body)/i.test(o[0].tagName)
      return (
        'relative' !== this.cssPosition ||
          (this.scrollParent[0] !== this.document[0] &&
            this.scrollParent[0] !== this.offsetParent[0]) ||
          (this.offset.relative = this._getRelativeOffset()),
        this.originalPosition &&
          (this.containment &&
            (t.pageX - this.offset.click.left < this.containment[0] &&
              (i = this.containment[0] + this.offset.click.left),
            t.pageY - this.offset.click.top < this.containment[1] &&
              (s = this.containment[1] + this.offset.click.top),
            t.pageX - this.offset.click.left > this.containment[2] &&
              (i = this.containment[2] + this.offset.click.left),
            t.pageY - this.offset.click.top > this.containment[3] &&
              (s = this.containment[3] + this.offset.click.top)),
          e.grid &&
            ((t =
              this.originalPageY +
              Math.round((s - this.originalPageY) / e.grid[1]) * e.grid[1]),
            (s =
              !this.containment ||
              (t - this.offset.click.top >= this.containment[1] &&
                t - this.offset.click.top <= this.containment[3])
                ? t
                : t - this.offset.click.top >= this.containment[1]
                ? t - e.grid[1]
                : t + e.grid[1]),
            (t =
              this.originalPageX +
              Math.round((i - this.originalPageX) / e.grid[0]) * e.grid[0]),
            (i =
              !this.containment ||
              (t - this.offset.click.left >= this.containment[0] &&
                t - this.offset.click.left <= this.containment[2])
                ? t
                : t - this.offset.click.left >= this.containment[0]
                ? t - e.grid[0]
                : t + e.grid[0]))),
        {
          top:
            s -
            this.offset.click.top -
            this.offset.relative.top -
            this.offset.parent.top +
            ('fixed' === this.cssPosition
              ? -this.scrollParent.scrollTop()
              : r
              ? 0
              : o.scrollTop()),
          left:
            i -
            this.offset.click.left -
            this.offset.relative.left -
            this.offset.parent.left +
            ('fixed' === this.cssPosition
              ? -this.scrollParent.scrollLeft()
              : r
              ? 0
              : o.scrollLeft()),
        }
      )
    },
    _rearrange: function (t, e, i, s) {
      i
        ? i[0].appendChild(this.placeholder[0])
        : e.item[0].parentNode.insertBefore(
            this.placeholder[0],
            'down' === this.direction ? e.item[0] : e.item[0].nextSibling,
          ),
        (this.counter = this.counter ? ++this.counter : 1)
      var o = this.counter
      this._delay(function () {
        o === this.counter && this.refreshPositions(!s)
      })
    },
    _clear: function (t, e) {
      this.reverting = !1
      var i,
        s = []
      if (
        (!this._noFinalSort &&
          this.currentItem.parent().length &&
          this.placeholder.before(this.currentItem),
        (this._noFinalSort = null),
        this.helper[0] === this.currentItem[0])
      ) {
        for (i in this._storedCSS)
          ('auto' !== this._storedCSS[i] && 'static' !== this._storedCSS[i]) ||
            (this._storedCSS[i] = '')
        this.currentItem.css(this._storedCSS),
          this._removeClass(this.currentItem, 'ui-sortable-helper')
      } else this.currentItem.show()
      function o(e, i, s) {
        return function (t) {
          s._trigger(e, t, i._uiHash(i))
        }
      }
      for (
        this.fromOutside &&
          !e &&
          s.push(function (t) {
            this._trigger('receive', t, this._uiHash(this.fromOutside))
          }),
          (!this.fromOutside &&
            this.domPosition.prev ===
              this.currentItem.prev().not('.ui-sortable-helper')[0] &&
            this.domPosition.parent === this.currentItem.parent()[0]) ||
            e ||
            s.push(function (t) {
              this._trigger('update', t, this._uiHash())
            }),
          this !== this.currentContainer &&
            (e ||
              (s.push(function (t) {
                this._trigger('remove', t, this._uiHash())
              }),
              s.push(
                function (e) {
                  return function (t) {
                    e._trigger('receive', t, this._uiHash(this))
                  }
                }.call(this, this.currentContainer),
              ),
              s.push(
                function (e) {
                  return function (t) {
                    e._trigger('update', t, this._uiHash(this))
                  }
                }.call(this, this.currentContainer),
              ))),
          i = this.containers.length - 1;
        0 <= i;
        i--
      )
        e || s.push(o('deactivate', this, this.containers[i])),
          this.containers[i].containerCache.over &&
            (s.push(o('out', this, this.containers[i])),
            (this.containers[i].containerCache.over = 0))
      if (
        (this.storedCursor &&
          (this.document.find('body').css('cursor', this.storedCursor),
          this.storedStylesheet.remove()),
        this._storedOpacity && this.helper.css('opacity', this._storedOpacity),
        this._storedZIndex &&
          this.helper.css(
            'zIndex',
            'auto' === this._storedZIndex ? '' : this._storedZIndex,
          ),
        (this.dragging = !1),
        e || this._trigger('beforeStop', t, this._uiHash()),
        this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
        this.cancelHelperRemoval ||
          (this.helper[0] !== this.currentItem[0] && this.helper.remove(),
          (this.helper = null)),
        !e)
      ) {
        for (i = 0; i < s.length; i++) s[i].call(this, t)
        this._trigger('stop', t, this._uiHash())
      }
      return (this.fromOutside = !1), !this.cancelHelperRemoval
    },
    _trigger: function () {
      !1 === u.Widget.prototype._trigger.apply(this, arguments) && this.cancel()
    },
    _uiHash: function (t) {
      var e = t || this
      return {
        helper: e.helper,
        placeholder: e.placeholder || u([]),
        position: e.position,
        originalPosition: e.originalPosition,
        offset: e.positionAbs,
        item: e.currentItem,
        sender: t ? t.element : null,
      }
    },
  })
})
