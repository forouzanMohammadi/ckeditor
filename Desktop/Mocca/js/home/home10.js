!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define(t)
    : ((e = e || self).Swiper = t())
})(this, function () {
  'use strict'
  function e(e) {
    return (
      null !== e &&
      'object' == typeof e &&
      'constructor' in e &&
      e.constructor === Object
    )
  }
  function t(a, i) {
    void 0 === a && (a = {}),
      void 0 === i && (i = {}),
      Object.keys(i).forEach(function (s) {
        void 0 === a[s]
          ? (a[s] = i[s])
          : e(i[s]) && e(a[s]) && Object.keys(i[s]).length > 0 && t(a[s], i[s])
      })
  }
  var a = 'undefined' != typeof document ? document : {},
    i = {
      body: {},
      addEventListener: function () {},
      removeEventListener: function () {},
      activeElement: { blur: function () {}, nodeName: '' },
      querySelector: function () {
        return null
      },
      querySelectorAll: function () {
        return []
      },
      getElementById: function () {
        return null
      },
      createEvent: function () {
        return { initEvent: function () {} }
      },
      createElement: function () {
        return {
          children: [],
          childNodes: [],
          style: {},
          setAttribute: function () {},
          getElementsByTagName: function () {
            return []
          },
        }
      },
      createElementNS: function () {
        return {}
      },
      importNode: function () {
        return null
      },
      location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: '',
      },
    }
  t(a, i)
  var s = 'undefined' != typeof window ? window : {}
  t(s, {
    document: i,
    navigator: { userAgent: '' },
    location: {
      hash: '',
      host: '',
      hostname: '',
      href: '',
      origin: '',
      pathname: '',
      protocol: '',
      search: '',
    },
    history: {
      replaceState: function () {},
      pushState: function () {},
      go: function () {},
      back: function () {},
    },
    CustomEvent: function () {
      return this
    },
    addEventListener: function () {},
    removeEventListener: function () {},
    getComputedStyle: function () {
      return {
        getPropertyValue: function () {
          return ''
        },
      }
    },
    Image: function () {},
    Date: function () {},
    screen: {},
    setTimeout: function () {},
    clearTimeout: function () {},
    matchMedia: function () {
      return {}
    },
  })
  var r = function (e) {
    for (var t = 0; t < e.length; t += 1) this[t] = e[t]
    return (this.length = e.length), this
  }
  function n(e, t) {
    var i = [],
      n = 0
    if (e && !t && e instanceof r) return e
    if (e)
      if ('string' == typeof e) {
        var o,
          l,
          d = e.trim()
        if (d.indexOf('<') >= 0 && d.indexOf('>') >= 0) {
          var p = 'div'
          for (
            0 === d.indexOf('<li') && (p = 'ul'),
              0 === d.indexOf('<tr') && (p = 'tbody'),
              (0 !== d.indexOf('<td') && 0 !== d.indexOf('<th')) || (p = 'tr'),
              0 === d.indexOf('<tbody') && (p = 'table'),
              0 === d.indexOf('<option') && (p = 'select'),
              (l = a.createElement(p)).innerHTML = d,
              n = 0;
            n < l.childNodes.length;
            n += 1
          )
            i.push(l.childNodes[n])
        } else
          for (
            o =
              t || '#' !== e[0] || e.match(/[ .<>:~]/)
                ? (t || a).querySelectorAll(e.trim())
                : [a.getElementById(e.trim().split('#')[1])],
              n = 0;
            n < o.length;
            n += 1
          )
            o[n] && i.push(o[n])
      } else if (e.nodeType || e === s || e === a) i.push(e)
      else if (e.length > 0 && e[0].nodeType)
        for (n = 0; n < e.length; n += 1) i.push(e[n])
    return new r(i)
  }
  function o(e) {
    for (var t = [], a = 0; a < e.length; a += 1)
      -1 === t.indexOf(e[a]) && t.push(e[a])
    return t
  }
  ;(n.fn = r.prototype), (n.Class = r), (n.Dom7 = r)
  var l = {
    addClass: function (e) {
      if (void 0 === e) return this
      for (var t = e.split(' '), a = 0; a < t.length; a += 1)
        for (var i = 0; i < this.length; i += 1)
          void 0 !== this[i] &&
            void 0 !== this[i].classList &&
            this[i].classList.add(t[a])
      return this
    },
    removeClass: function (e) {
      for (var t = e.split(' '), a = 0; a < t.length; a += 1)
        for (var i = 0; i < this.length; i += 1)
          void 0 !== this[i] &&
            void 0 !== this[i].classList &&
            this[i].classList.remove(t[a])
      return this
    },
    hasClass: function (e) {
      return !!this[0] && this[0].classList.contains(e)
    },
    toggleClass: function (e) {
      for (var t = e.split(' '), a = 0; a < t.length; a += 1)
        for (var i = 0; i < this.length; i += 1)
          void 0 !== this[i] &&
            void 0 !== this[i].classList &&
            this[i].classList.toggle(t[a])
      return this
    },
    attr: function (e, t) {
      var a = arguments
      if (1 === arguments.length && 'string' == typeof e)
        return this[0] ? this[0].getAttribute(e) : void 0
      for (var i = 0; i < this.length; i += 1)
        if (2 === a.length) this[i].setAttribute(e, t)
        else for (var s in e) (this[i][s] = e[s]), this[i].setAttribute(s, e[s])
      return this
    },
    removeAttr: function (e) {
      for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e)
      return this
    },
    data: function (e, t) {
      var a
      if (void 0 !== t) {
        for (var i = 0; i < this.length; i += 1)
          (a = this[i]).dom7ElementDataStorage ||
            (a.dom7ElementDataStorage = {}),
            (a.dom7ElementDataStorage[e] = t)
        return this
      }
      if ((a = this[0])) {
        if (a.dom7ElementDataStorage && e in a.dom7ElementDataStorage)
          return a.dom7ElementDataStorage[e]
        var s = a.getAttribute('data-' + e)
        return s || void 0
      }
    },
    transform: function (e) {
      for (var t = 0; t < this.length; t += 1) {
        var a = this[t].style
        ;(a.webkitTransform = e), (a.transform = e)
      }
      return this
    },
    transition: function (e) {
      'string' != typeof e && (e += 'ms')
      for (var t = 0; t < this.length; t += 1) {
        var a = this[t].style
        ;(a.webkitTransitionDuration = e), (a.transitionDuration = e)
      }
      return this
    },
    on: function () {
      for (var e, t = [], a = arguments.length; a--; ) t[a] = arguments[a]
      var i = t[0],
        s = t[1],
        r = t[2],
        o = t[3]
      function l(e) {
        var t = e.target
        if (t) {
          var a = e.target.dom7EventData || []
          if ((a.indexOf(e) < 0 && a.unshift(e), n(t).is(s))) r.apply(t, a)
          else
            for (var i = n(t).parents(), o = 0; o < i.length; o += 1)
              n(i[o]).is(s) && r.apply(i[o], a)
        }
      }
      function d(e) {
        var t = (e && e.target && e.target.dom7EventData) || []
        t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t)
      }
      'function' == typeof t[1] &&
        ((i = (e = t)[0]), (r = e[1]), (o = e[2]), (s = void 0)),
        o || (o = !1)
      for (var p, c = i.split(' '), u = 0; u < this.length; u += 1) {
        var h = this[u]
        if (s)
          for (p = 0; p < c.length; p += 1) {
            var v = c[p]
            h.dom7LiveListeners || (h.dom7LiveListeners = {}),
              h.dom7LiveListeners[v] || (h.dom7LiveListeners[v] = []),
              h.dom7LiveListeners[v].push({ listener: r, proxyListener: l }),
              h.addEventListener(v, l, o)
          }
        else
          for (p = 0; p < c.length; p += 1) {
            var f = c[p]
            h.dom7Listeners || (h.dom7Listeners = {}),
              h.dom7Listeners[f] || (h.dom7Listeners[f] = []),
              h.dom7Listeners[f].push({ listener: r, proxyListener: d }),
              h.addEventListener(f, d, o)
          }
      }
      return this
    },
    off: function () {
      for (var e, t = [], a = arguments.length; a--; ) t[a] = arguments[a]
      var i = t[0],
        s = t[1],
        r = t[2],
        n = t[3]
      'function' == typeof t[1] &&
        ((i = (e = t)[0]), (r = e[1]), (n = e[2]), (s = void 0)),
        n || (n = !1)
      for (var o = i.split(' '), l = 0; l < o.length; l += 1)
        for (var d = o[l], p = 0; p < this.length; p += 1) {
          var c = this[p],
            u = void 0
          if (
            (!s && c.dom7Listeners
              ? (u = c.dom7Listeners[d])
              : s && c.dom7LiveListeners && (u = c.dom7LiveListeners[d]),
            u && u.length)
          )
            for (var h = u.length - 1; h >= 0; h -= 1) {
              var v = u[h]
              ;(r && v.listener === r) ||
              (r &&
                v.listener &&
                v.listener.dom7proxy &&
                v.listener.dom7proxy === r)
                ? (c.removeEventListener(d, v.proxyListener, n), u.splice(h, 1))
                : r ||
                  (c.removeEventListener(d, v.proxyListener, n), u.splice(h, 1))
            }
        }
      return this
    },
    trigger: function () {
      for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t]
      for (var i = e[0].split(' '), r = e[1], n = 0; n < i.length; n += 1)
        for (var o = i[n], l = 0; l < this.length; l += 1) {
          var d = this[l],
            p = void 0
          try {
            p = new s.CustomEvent(o, { detail: r, bubbles: !0, cancelable: !0 })
          } catch (e) {
            ;(p = a.createEvent('Event')).initEvent(o, !0, !0), (p.detail = r)
          }
          ;(d.dom7EventData = e.filter(function (e, t) {
            return t > 0
          })),
            d.dispatchEvent(p),
            (d.dom7EventData = []),
            delete d.dom7EventData
        }
      return this
    },
    transitionEnd: function (e) {
      var t,
        a = ['webkitTransitionEnd', 'transitionend'],
        i = this
      function s(r) {
        if (r.target === this)
          for (e.call(this, r), t = 0; t < a.length; t += 1) i.off(a[t], s)
      }
      if (e) for (t = 0; t < a.length; t += 1) i.on(a[t], s)
      return this
    },
    outerWidth: function (e) {
      if (this.length > 0) {
        if (e) {
          var t = this.styles()
          return (
            this[0].offsetWidth +
            parseFloat(t.getPropertyValue('margin-right')) +
            parseFloat(t.getPropertyValue('margin-left'))
          )
        }
        return this[0].offsetWidth
      }
      return null
    },
    outerHeight: function (e) {
      if (this.length > 0) {
        if (e) {
          var t = this.styles()
          return (
            this[0].offsetHeight +
            parseFloat(t.getPropertyValue('margin-top')) +
            parseFloat(t.getPropertyValue('margin-bottom'))
          )
        }
        return this[0].offsetHeight
      }
      return null
    },
    offset: function () {
      if (this.length > 0) {
        var e = this[0],
          t = e.getBoundingClientRect(),
          i = a.body,
          r = e.clientTop || i.clientTop || 0,
          n = e.clientLeft || i.clientLeft || 0,
          o = e === s ? s.scrollY : e.scrollTop,
          l = e === s ? s.scrollX : e.scrollLeft
        return { top: t.top + o - r, left: t.left + l - n }
      }
      return null
    },
    css: function (e, t) {
      var a
      if (1 === arguments.length) {
        if ('string' != typeof e) {
          for (a = 0; a < this.length; a += 1)
            for (var i in e) this[a].style[i] = e[i]
          return this
        }
        if (this[0])
          return s.getComputedStyle(this[0], null).getPropertyValue(e)
      }
      if (2 === arguments.length && 'string' == typeof e) {
        for (a = 0; a < this.length; a += 1) this[a].style[e] = t
        return this
      }
      return this
    },
    each: function (e) {
      if (!e) return this
      for (var t = 0; t < this.length; t += 1)
        if (!1 === e.call(this[t], t, this[t])) return this
      return this
    },
    html: function (e) {
      if (void 0 === e) return this[0] ? this[0].innerHTML : void 0
      for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e
      return this
    },
    text: function (e) {
      if (void 0 === e) return this[0] ? this[0].textContent.trim() : null
      for (var t = 0; t < this.length; t += 1) this[t].textContent = e
      return this
    },
    is: function (e) {
      var t,
        i,
        o = this[0]
      if (!o || void 0 === e) return !1
      if ('string' == typeof e) {
        if (o.matches) return o.matches(e)
        if (o.webkitMatchesSelector) return o.webkitMatchesSelector(e)
        if (o.msMatchesSelector) return o.msMatchesSelector(e)
        for (t = n(e), i = 0; i < t.length; i += 1) if (t[i] === o) return !0
        return !1
      }
      if (e === a) return o === a
      if (e === s) return o === s
      if (e.nodeType || e instanceof r) {
        for (t = e.nodeType ? [e] : e, i = 0; i < t.length; i += 1)
          if (t[i] === o) return !0
        return !1
      }
      return !1
    },
    index: function () {
      var e,
        t = this[0]
      if (t) {
        for (e = 0; null !== (t = t.previousSibling); )
          1 === t.nodeType && (e += 1)
        return e
      }
    },
    eq: function (e) {
      if (void 0 === e) return this
      var t,
        a = this.length
      return new r(
        e > a - 1 ? [] : e < 0 ? ((t = a + e) < 0 ? [] : [this[t]]) : [this[e]],
      )
    },
    append: function () {
      for (var e, t = [], i = arguments.length; i--; ) t[i] = arguments[i]
      for (var s = 0; s < t.length; s += 1) {
        e = t[s]
        for (var n = 0; n < this.length; n += 1)
          if ('string' == typeof e) {
            var o = a.createElement('div')
            for (o.innerHTML = e; o.firstChild; )
              this[n].appendChild(o.firstChild)
          } else if (e instanceof r)
            for (var l = 0; l < e.length; l += 1) this[n].appendChild(e[l])
          else this[n].appendChild(e)
      }
      return this
    },
    prepend: function (e) {
      var t, i
      for (t = 0; t < this.length; t += 1)
        if ('string' == typeof e) {
          var s = a.createElement('div')
          for (s.innerHTML = e, i = s.childNodes.length - 1; i >= 0; i -= 1)
            this[t].insertBefore(s.childNodes[i], this[t].childNodes[0])
        } else if (e instanceof r)
          for (i = 0; i < e.length; i += 1)
            this[t].insertBefore(e[i], this[t].childNodes[0])
        else this[t].insertBefore(e, this[t].childNodes[0])
      return this
    },
    next: function (e) {
      return this.length > 0
        ? e
          ? this[0].nextElementSibling && n(this[0].nextElementSibling).is(e)
            ? new r([this[0].nextElementSibling])
            : new r([])
          : this[0].nextElementSibling
          ? new r([this[0].nextElementSibling])
          : new r([])
        : new r([])
    },
    nextAll: function (e) {
      var t = [],
        a = this[0]
      if (!a) return new r([])
      for (; a.nextElementSibling; ) {
        var i = a.nextElementSibling
        e ? n(i).is(e) && t.push(i) : t.push(i), (a = i)
      }
      return new r(t)
    },
    prev: function (e) {
      if (this.length > 0) {
        var t = this[0]
        return e
          ? t.previousElementSibling && n(t.previousElementSibling).is(e)
            ? new r([t.previousElementSibling])
            : new r([])
          : t.previousElementSibling
          ? new r([t.previousElementSibling])
          : new r([])
      }
      return new r([])
    },
    prevAll: function (e) {
      var t = [],
        a = this[0]
      if (!a) return new r([])
      for (; a.previousElementSibling; ) {
        var i = a.previousElementSibling
        e ? n(i).is(e) && t.push(i) : t.push(i), (a = i)
      }
      return new r(t)
    },
    parent: function (e) {
      for (var t = [], a = 0; a < this.length; a += 1)
        null !== this[a].parentNode &&
          (e
            ? n(this[a].parentNode).is(e) && t.push(this[a].parentNode)
            : t.push(this[a].parentNode))
      return n(o(t))
    },
    parents: function (e) {
      for (var t = [], a = 0; a < this.length; a += 1)
        for (var i = this[a].parentNode; i; )
          e ? n(i).is(e) && t.push(i) : t.push(i), (i = i.parentNode)
      return n(o(t))
    },
    closest: function (e) {
      var t = this
      return void 0 === e ? new r([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
    },
    find: function (e) {
      for (var t = [], a = 0; a < this.length; a += 1)
        for (var i = this[a].querySelectorAll(e), s = 0; s < i.length; s += 1)
          t.push(i[s])
      return new r(t)
    },
    children: function (e) {
      for (var t = [], a = 0; a < this.length; a += 1)
        for (var i = this[a].childNodes, s = 0; s < i.length; s += 1)
          e
            ? 1 === i[s].nodeType && n(i[s]).is(e) && t.push(i[s])
            : 1 === i[s].nodeType && t.push(i[s])
      return new r(o(t))
    },
    filter: function (e) {
      for (var t = [], a = this, i = 0; i < a.length; i += 1)
        e.call(a[i], i, a[i]) && t.push(a[i])
      return new r(t)
    },
    remove: function () {
      for (var e = 0; e < this.length; e += 1)
        this[e].parentNode && this[e].parentNode.removeChild(this[e])
      return this
    },
    add: function () {
      for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t]
      var a,
        i,
        s = this
      for (a = 0; a < e.length; a += 1) {
        var r = n(e[a])
        for (i = 0; i < r.length; i += 1) (s[s.length] = r[i]), (s.length += 1)
      }
      return s
    },
    styles: function () {
      return this[0] ? s.getComputedStyle(this[0], null) : {}
    },
  }
  Object.keys(l).forEach(function (e) {
    n.fn[e] = n.fn[e] || l[e]
  })
  var d = {
      deleteProps: function (e) {
        var t = e
        Object.keys(t).forEach(function (e) {
          try {
            t[e] = null
          } catch (e) {}
          try {
            delete t[e]
          } catch (e) {}
        })
      },
      nextTick: function (e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t)
      },
      now: function () {
        return Date.now()
      },
      getTranslate: function (e, t) {
        var a, i, r
        void 0 === t && (t = 'x')
        var n = s.getComputedStyle(e, null)
        return (
          s.WebKitCSSMatrix
            ? ((i = n.transform || n.webkitTransform).split(',').length > 6 &&
                (i = i
                  .split(', ')
                  .map(function (e) {
                    return e.replace(',', '.')
                  })
                  .join(', ')),
              (r = new s.WebKitCSSMatrix('none' === i ? '' : i)))
            : (a = (r =
                n.MozTransform ||
                n.OTransform ||
                n.MsTransform ||
                n.msTransform ||
                n.transform ||
                n
                  .getPropertyValue('transform')
                  .replace('translate(', 'matrix(1, 0, 0, 1,'))
                .toString()
                .split(',')),
          'x' === t &&
            (i = s.WebKitCSSMatrix
              ? r.m41
              : 16 === a.length
              ? parseFloat(a[12])
              : parseFloat(a[4])),
          'y' === t &&
            (i = s.WebKitCSSMatrix
              ? r.m42
              : 16 === a.length
              ? parseFloat(a[13])
              : parseFloat(a[5])),
          i || 0
        )
      },
      parseUrlQuery: function (e) {
        var t,
          a,
          i,
          r,
          n = {},
          o = e || s.location.href
        if ('string' == typeof o && o.length)
          for (
            r = (a = (o = o.indexOf('?') > -1 ? o.replace(/\S*\?/, '') : '')
              .split('&')
              .filter(function (e) {
                return '' !== e
              })).length,
              t = 0;
            t < r;
            t += 1
          )
            (i = a[t].replace(/#\S+/g, '').split('=')),
              (n[decodeURIComponent(i[0])] =
                void 0 === i[1] ? void 0 : decodeURIComponent(i[1]) || '')
        return n
      },
      isObject: function (e) {
        return (
          'object' == typeof e &&
          null !== e &&
          e.constructor &&
          e.constructor === Object
        )
      },
      extend: function () {
        for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t]
        for (var a = Object(e[0]), i = 1; i < e.length; i += 1) {
          var s = e[i]
          if (null != s)
            for (
              var r = Object.keys(Object(s)), n = 0, o = r.length;
              n < o;
              n += 1
            ) {
              var l = r[n],
                p = Object.getOwnPropertyDescriptor(s, l)
              void 0 !== p &&
                p.enumerable &&
                (d.isObject(a[l]) && d.isObject(s[l])
                  ? d.extend(a[l], s[l])
                  : !d.isObject(a[l]) && d.isObject(s[l])
                  ? ((a[l] = {}), d.extend(a[l], s[l]))
                  : (a[l] = s[l]))
            }
        }
        return a
      },
    },
    p = {
      touch: !!(
        'ontouchstart' in s ||
        (s.DocumentTouch && a instanceof s.DocumentTouch)
      ),
      pointerEvents:
        !!s.PointerEvent &&
        'maxTouchPoints' in s.navigator &&
        s.navigator.maxTouchPoints >= 0,
      observer: 'MutationObserver' in s || 'WebkitMutationObserver' in s,
      passiveListener: (function () {
        var e = !1
        try {
          var t = Object.defineProperty({}, 'passive', {
            get: function () {
              e = !0
            },
          })
          s.addEventListener('testPassiveListener', null, t)
        } catch (e) {}
        return e
      })(),
      gestures: 'ongesturestart' in s,
    },
    c = function (e) {
      void 0 === e && (e = {})
      var t = this
      ;(t.params = e),
        (t.eventsListeners = {}),
        t.params &&
          t.params.on &&
          Object.keys(t.params.on).forEach(function (e) {
            t.on(e, t.params.on[e])
          })
    },
    u = { components: { configurable: !0 } }
  ;(c.prototype.on = function (e, t, a) {
    var i = this
    if ('function' != typeof t) return i
    var s = a ? 'unshift' : 'push'
    return (
      e.split(' ').forEach(function (e) {
        i.eventsListeners[e] || (i.eventsListeners[e] = []),
          i.eventsListeners[e][s](t)
      }),
      i
    )
  }),
    (c.prototype.once = function (e, t, a) {
      var i = this
      if ('function' != typeof t) return i
      function s() {
        for (var a = [], r = arguments.length; r--; ) a[r] = arguments[r]
        i.off(e, s), s.f7proxy && delete s.f7proxy, t.apply(i, a)
      }
      return (s.f7proxy = t), i.on(e, s, a)
    }),
    (c.prototype.off = function (e, t) {
      var a = this
      return a.eventsListeners
        ? (e.split(' ').forEach(function (e) {
            void 0 === t
              ? (a.eventsListeners[e] = [])
              : a.eventsListeners[e] &&
                a.eventsListeners[e].length &&
                a.eventsListeners[e].forEach(function (i, s) {
                  ;(i === t || (i.f7proxy && i.f7proxy === t)) &&
                    a.eventsListeners[e].splice(s, 1)
                })
          }),
          a)
        : a
    }),
    (c.prototype.emit = function () {
      for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t]
      var a,
        i,
        s,
        r = this
      if (!r.eventsListeners) return r
      'string' == typeof e[0] || Array.isArray(e[0])
        ? ((a = e[0]), (i = e.slice(1, e.length)), (s = r))
        : ((a = e[0].events), (i = e[0].data), (s = e[0].context || r))
      var n = Array.isArray(a) ? a : a.split(' ')
      return (
        n.forEach(function (e) {
          if (r.eventsListeners && r.eventsListeners[e]) {
            var t = []
            r.eventsListeners[e].forEach(function (e) {
              t.push(e)
            }),
              t.forEach(function (e) {
                e.apply(s, i)
              })
          }
        }),
        r
      )
    }),
    (c.prototype.useModulesParams = function (e) {
      var t = this
      t.modules &&
        Object.keys(t.modules).forEach(function (a) {
          var i = t.modules[a]
          i.params && d.extend(e, i.params)
        })
    }),
    (c.prototype.useModules = function (e) {
      void 0 === e && (e = {})
      var t = this
      t.modules &&
        Object.keys(t.modules).forEach(function (a) {
          var i = t.modules[a],
            s = e[a] || {}
          i.instance &&
            Object.keys(i.instance).forEach(function (e) {
              var a = i.instance[e]
              t[e] = 'function' == typeof a ? a.bind(t) : a
            }),
            i.on &&
              t.on &&
              Object.keys(i.on).forEach(function (e) {
                t.on(e, i.on[e])
              }),
            i.create && i.create.bind(t)(s)
        })
    }),
    (u.components.set = function (e) {
      this.use && this.use(e)
    }),
    (c.installModule = function (e) {
      for (var t = [], a = arguments.length - 1; a-- > 0; )
        t[a] = arguments[a + 1]
      var i = this
      i.prototype.modules || (i.prototype.modules = {})
      var s = e.name || Object.keys(i.prototype.modules).length + '_' + d.now()
      return (
        (i.prototype.modules[s] = e),
        e.proto &&
          Object.keys(e.proto).forEach(function (t) {
            i.prototype[t] = e.proto[t]
          }),
        e.static &&
          Object.keys(e.static).forEach(function (t) {
            i[t] = e.static[t]
          }),
        e.install && e.install.apply(i, t),
        i
      )
    }),
    (c.use = function (e) {
      for (var t = [], a = arguments.length - 1; a-- > 0; )
        t[a] = arguments[a + 1]
      var i = this
      return Array.isArray(e)
        ? (e.forEach(function (e) {
            return i.installModule(e)
          }),
          i)
        : i.installModule.apply(i, [e].concat(t))
    }),
    Object.defineProperties(c, u)
  var h = {
    updateSize: function () {
      var e,
        t,
        a = this,
        i = a.$el
      ;(e = void 0 !== a.params.width ? a.params.width : i[0].clientWidth),
        (t = void 0 !== a.params.height ? a.params.height : i[0].clientHeight),
        (0 === e && a.isHorizontal()) ||
          (0 === t && a.isVertical()) ||
          ((e =
            e -
            parseInt(i.css('padding-left'), 10) -
            parseInt(i.css('padding-right'), 10)),
          (t =
            t -
            parseInt(i.css('padding-top'), 10) -
            parseInt(i.css('padding-bottom'), 10)),
          d.extend(a, { width: e, height: t, size: a.isHorizontal() ? e : t }))
    },
    updateSlides: function () {
      var e = this,
        t = e.params,
        a = e.$wrapperEl,
        i = e.size,
        r = e.rtlTranslate,
        n = e.wrongRTL,
        o = e.virtual && t.virtual.enabled,
        l = o ? e.virtual.slides.length : e.slides.length,
        p = a.children('.' + e.params.slideClass),
        c = o ? e.virtual.slides.length : p.length,
        u = [],
        h = [],
        v = []
      function f(e) {
        return !t.cssMode || e !== p.length - 1
      }
      var m = t.slidesOffsetBefore
      'function' == typeof m && (m = t.slidesOffsetBefore.call(e))
      var g = t.slidesOffsetAfter
      'function' == typeof g && (g = t.slidesOffsetAfter.call(e))
      var b = e.snapGrid.length,
        w = e.snapGrid.length,
        y = t.spaceBetween,
        x = -m,
        E = 0,
        T = 0
      if (void 0 !== i) {
        var S, C
        'string' == typeof y &&
          y.indexOf('%') >= 0 &&
          (y = (parseFloat(y.replace('%', '')) / 100) * i),
          (e.virtualSize = -y),
          r
            ? p.css({ marginLeft: '', marginTop: '' })
            : p.css({ marginRight: '', marginBottom: '' }),
          t.slidesPerColumn > 1 &&
            ((S =
              Math.floor(c / t.slidesPerColumn) === c / e.params.slidesPerColumn
                ? c
                : Math.ceil(c / t.slidesPerColumn) * t.slidesPerColumn),
            'auto' !== t.slidesPerView &&
              'row' === t.slidesPerColumnFill &&
              (S = Math.max(S, t.slidesPerView * t.slidesPerColumn)))
        for (
          var M,
            P = t.slidesPerColumn,
            z = S / P,
            k = Math.floor(c / t.slidesPerColumn),
            $ = 0;
          $ < c;
          $ += 1
        ) {
          C = 0
          var L = p.eq($)
          if (t.slidesPerColumn > 1) {
            var I = void 0,
              D = void 0,
              O = void 0
            if ('row' === t.slidesPerColumnFill && t.slidesPerGroup > 1) {
              var A = Math.floor($ / (t.slidesPerGroup * t.slidesPerColumn)),
                G = $ - t.slidesPerColumn * t.slidesPerGroup * A,
                H =
                  0 === A
                    ? t.slidesPerGroup
                    : Math.min(
                        Math.ceil((c - A * P * t.slidesPerGroup) / P),
                        t.slidesPerGroup,
                      )
              ;(I =
                (D = G - (O = Math.floor(G / H)) * H + A * t.slidesPerGroup) +
                (O * S) / P),
                L.css({
                  '-webkit-box-ordinal-group': I,
                  '-moz-box-ordinal-group': I,
                  '-ms-flex-order': I,
                  '-webkit-order': I,
                  order: I,
                })
            } else
              'column' === t.slidesPerColumnFill
                ? ((O = $ - (D = Math.floor($ / P)) * P),
                  (D > k || (D === k && O === P - 1)) &&
                    (O += 1) >= P &&
                    ((O = 0), (D += 1)))
                : (D = $ - (O = Math.floor($ / z)) * z)
            L.css(
              'margin-' + (e.isHorizontal() ? 'top' : 'left'),
              0 !== O && t.spaceBetween && t.spaceBetween + 'px',
            )
          }
          if ('none' !== L.css('display')) {
            if ('auto' === t.slidesPerView) {
              var B = s.getComputedStyle(L[0], null),
                N = L[0].style.transform,
                X = L[0].style.webkitTransform
              if (
                (N && (L[0].style.transform = 'none'),
                X && (L[0].style.webkitTransform = 'none'),
                t.roundLengths)
              )
                C = e.isHorizontal() ? L.outerWidth(!0) : L.outerHeight(!0)
              else if (e.isHorizontal()) {
                var V = parseFloat(B.getPropertyValue('width')),
                  Y = parseFloat(B.getPropertyValue('padding-left')),
                  F = parseFloat(B.getPropertyValue('padding-right')),
                  W = parseFloat(B.getPropertyValue('margin-left')),
                  R = parseFloat(B.getPropertyValue('margin-right')),
                  q = B.getPropertyValue('box-sizing')
                C = q && 'border-box' === q ? V + W + R : V + Y + F + W + R
              } else {
                var j = parseFloat(B.getPropertyValue('height')),
                  K = parseFloat(B.getPropertyValue('padding-top')),
                  U = parseFloat(B.getPropertyValue('padding-bottom')),
                  _ = parseFloat(B.getPropertyValue('margin-top')),
                  Z = parseFloat(B.getPropertyValue('margin-bottom')),
                  Q = B.getPropertyValue('box-sizing')
                C = Q && 'border-box' === Q ? j + _ + Z : j + K + U + _ + Z
              }
              N && (L[0].style.transform = N),
                X && (L[0].style.webkitTransform = X),
                t.roundLengths && (C = Math.floor(C))
            } else
              (C = (i - (t.slidesPerView - 1) * y) / t.slidesPerView),
                t.roundLengths && (C = Math.floor(C)),
                p[$] &&
                  (e.isHorizontal()
                    ? (p[$].style.width = C + 'px')
                    : (p[$].style.height = C + 'px'))
            p[$] && (p[$].swiperSlideSize = C),
              v.push(C),
              t.centeredSlides
                ? ((x = x + C / 2 + E / 2 + y),
                  0 === E && 0 !== $ && (x = x - i / 2 - y),
                  0 === $ && (x = x - i / 2 - y),
                  Math.abs(x) < 0.001 && (x = 0),
                  t.roundLengths && (x = Math.floor(x)),
                  T % t.slidesPerGroup == 0 && u.push(x),
                  h.push(x))
                : (t.roundLengths && (x = Math.floor(x)),
                  (T - Math.min(e.params.slidesPerGroupSkip, T)) %
                    e.params.slidesPerGroup ==
                    0 && u.push(x),
                  h.push(x),
                  (x = x + C + y)),
              (e.virtualSize += C + y),
              (E = C),
              (T += 1)
          }
        }
        if (
          ((e.virtualSize = Math.max(e.virtualSize, i) + g),
          r &&
            n &&
            ('slide' === t.effect || 'coverflow' === t.effect) &&
            a.css({ width: e.virtualSize + t.spaceBetween + 'px' }),
          t.setWrapperSize &&
            (e.isHorizontal()
              ? a.css({ width: e.virtualSize + t.spaceBetween + 'px' })
              : a.css({ height: e.virtualSize + t.spaceBetween + 'px' })),
          t.slidesPerColumn > 1 &&
            ((e.virtualSize = (C + t.spaceBetween) * S),
            (e.virtualSize =
              Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween),
            e.isHorizontal()
              ? a.css({ width: e.virtualSize + t.spaceBetween + 'px' })
              : a.css({ height: e.virtualSize + t.spaceBetween + 'px' }),
            t.centeredSlides))
        ) {
          M = []
          for (var J = 0; J < u.length; J += 1) {
            var ee = u[J]
            t.roundLengths && (ee = Math.floor(ee)),
              u[J] < e.virtualSize + u[0] && M.push(ee)
          }
          u = M
        }
        if (!t.centeredSlides) {
          M = []
          for (var te = 0; te < u.length; te += 1) {
            var ae = u[te]
            t.roundLengths && (ae = Math.floor(ae)),
              u[te] <= e.virtualSize - i && M.push(ae)
          }
          ;(u = M),
            Math.floor(e.virtualSize - i) - Math.floor(u[u.length - 1]) > 1 &&
              u.push(e.virtualSize - i)
        }
        if (
          (0 === u.length && (u = [0]),
          0 !== t.spaceBetween &&
            (e.isHorizontal()
              ? r
                ? p.filter(f).css({ marginLeft: y + 'px' })
                : p.filter(f).css({ marginRight: y + 'px' })
              : p.filter(f).css({ marginBottom: y + 'px' })),
          t.centeredSlides && t.centeredSlidesBounds)
        ) {
          var ie = 0
          v.forEach(function (e) {
            ie += e + (t.spaceBetween ? t.spaceBetween : 0)
          })
          var se = (ie -= t.spaceBetween) - i
          u = u.map(function (e) {
            return e < 0 ? -m : e > se ? se + g : e
          })
        }
        if (t.centerInsufficientSlides) {
          var re = 0
          if (
            (v.forEach(function (e) {
              re += e + (t.spaceBetween ? t.spaceBetween : 0)
            }),
            (re -= t.spaceBetween) < i)
          ) {
            var ne = (i - re) / 2
            u.forEach(function (e, t) {
              u[t] = e - ne
            }),
              h.forEach(function (e, t) {
                h[t] = e + ne
              })
          }
        }
        d.extend(e, {
          slides: p,
          snapGrid: u,
          slidesGrid: h,
          slidesSizesGrid: v,
        }),
          c !== l && e.emit('slidesLengthChange'),
          u.length !== b &&
            (e.params.watchOverflow && e.checkOverflow(),
            e.emit('snapGridLengthChange')),
          h.length !== w && e.emit('slidesGridLengthChange'),
          (t.watchSlidesProgress || t.watchSlidesVisibility) &&
            e.updateSlidesOffset()
      }
    },
    updateAutoHeight: function (e) {
      var t,
        a = this,
        i = [],
        s = 0
      if (
        ('number' == typeof e
          ? a.setTransition(e)
          : !0 === e && a.setTransition(a.params.speed),
        'auto' !== a.params.slidesPerView && a.params.slidesPerView > 1)
      )
        if (a.params.centeredSlides)
          a.visibleSlides.each(function (e, t) {
            i.push(t)
          })
        else
          for (t = 0; t < Math.ceil(a.params.slidesPerView); t += 1) {
            var r = a.activeIndex + t
            if (r > a.slides.length) break
            i.push(a.slides.eq(r)[0])
          }
      else i.push(a.slides.eq(a.activeIndex)[0])
      for (t = 0; t < i.length; t += 1)
        if (void 0 !== i[t]) {
          var n = i[t].offsetHeight
          s = n > s ? n : s
        }
      s && a.$wrapperEl.css('height', s + 'px')
    },
    updateSlidesOffset: function () {
      for (var e = this.slides, t = 0; t < e.length; t += 1)
        e[t].swiperSlideOffset = this.isHorizontal()
          ? e[t].offsetLeft
          : e[t].offsetTop
    },
    updateSlidesProgress: function (e) {
      void 0 === e && (e = (this && this.translate) || 0)
      var t = this,
        a = t.params,
        i = t.slides,
        s = t.rtlTranslate
      if (0 !== i.length) {
        void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset()
        var r = -e
        s && (r = e),
          i.removeClass(a.slideVisibleClass),
          (t.visibleSlidesIndexes = []),
          (t.visibleSlides = [])
        for (var o = 0; o < i.length; o += 1) {
          var l = i[o],
            d =
              (r +
                (a.centeredSlides ? t.minTranslate() : 0) -
                l.swiperSlideOffset) /
              (l.swiperSlideSize + a.spaceBetween)
          if (a.watchSlidesVisibility || (a.centeredSlides && a.autoHeight)) {
            var p = -(r - l.swiperSlideOffset),
              c = p + t.slidesSizesGrid[o]
            ;((p >= 0 && p < t.size - 1) ||
              (c > 1 && c <= t.size) ||
              (p <= 0 && c >= t.size)) &&
              (t.visibleSlides.push(l),
              t.visibleSlidesIndexes.push(o),
              i.eq(o).addClass(a.slideVisibleClass))
          }
          l.progress = s ? -d : d
        }
        t.visibleSlides = n(t.visibleSlides)
      }
    },
    updateProgress: function (e) {
      var t = this
      if (void 0 === e) {
        var a = t.rtlTranslate ? -1 : 1
        e = (t && t.translate && t.translate * a) || 0
      }
      var i = t.params,
        s = t.maxTranslate() - t.minTranslate(),
        r = t.progress,
        n = t.isBeginning,
        o = t.isEnd,
        l = n,
        p = o
      0 === s
        ? ((r = 0), (n = !0), (o = !0))
        : ((n = (r = (e - t.minTranslate()) / s) <= 0), (o = r >= 1)),
        d.extend(t, { progress: r, isBeginning: n, isEnd: o }),
        (i.watchSlidesProgress ||
          i.watchSlidesVisibility ||
          (i.centeredSlides && i.autoHeight)) &&
          t.updateSlidesProgress(e),
        n && !l && t.emit('reachBeginning toEdge'),
        o && !p && t.emit('reachEnd toEdge'),
        ((l && !n) || (p && !o)) && t.emit('fromEdge'),
        t.emit('progress', r)
    },
    updateSlidesClasses: function () {
      var e,
        t = this,
        a = t.slides,
        i = t.params,
        s = t.$wrapperEl,
        r = t.activeIndex,
        n = t.realIndex,
        o = t.virtual && i.virtual.enabled
      a.removeClass(
        i.slideActiveClass +
          ' ' +
          i.slideNextClass +
          ' ' +
          i.slidePrevClass +
          ' ' +
          i.slideDuplicateActiveClass +
          ' ' +
          i.slideDuplicateNextClass +
          ' ' +
          i.slideDuplicatePrevClass,
      ),
        (e = o
          ? t.$wrapperEl.find(
              '.' + i.slideClass + '[data-swiper-slide-index="' + r + '"]',
            )
          : a.eq(r)).addClass(i.slideActiveClass),
        i.loop &&
          (e.hasClass(i.slideDuplicateClass)
            ? s
                .children(
                  '.' +
                    i.slideClass +
                    ':not(.' +
                    i.slideDuplicateClass +
                    ')[data-swiper-slide-index="' +
                    n +
                    '"]',
                )
                .addClass(i.slideDuplicateActiveClass)
            : s
                .children(
                  '.' +
                    i.slideClass +
                    '.' +
                    i.slideDuplicateClass +
                    '[data-swiper-slide-index="' +
                    n +
                    '"]',
                )
                .addClass(i.slideDuplicateActiveClass))
      var l = e
        .nextAll('.' + i.slideClass)
        .eq(0)
        .addClass(i.slideNextClass)
      i.loop && 0 === l.length && (l = a.eq(0)).addClass(i.slideNextClass)
      var d = e
        .prevAll('.' + i.slideClass)
        .eq(0)
        .addClass(i.slidePrevClass)
      i.loop && 0 === d.length && (d = a.eq(-1)).addClass(i.slidePrevClass),
        i.loop &&
          (l.hasClass(i.slideDuplicateClass)
            ? s
                .children(
                  '.' +
                    i.slideClass +
                    ':not(.' +
                    i.slideDuplicateClass +
                    ')[data-swiper-slide-index="' +
                    l.attr('data-swiper-slide-index') +
                    '"]',
                )
                .addClass(i.slideDuplicateNextClass)
            : s
                .children(
                  '.' +
                    i.slideClass +
                    '.' +
                    i.slideDuplicateClass +
                    '[data-swiper-slide-index="' +
                    l.attr('data-swiper-slide-index') +
                    '"]',
                )
                .addClass(i.slideDuplicateNextClass),
          d.hasClass(i.slideDuplicateClass)
            ? s
                .children(
                  '.' +
                    i.slideClass +
                    ':not(.' +
                    i.slideDuplicateClass +
                    ')[data-swiper-slide-index="' +
                    d.attr('data-swiper-slide-index') +
                    '"]',
                )
                .addClass(i.slideDuplicatePrevClass)
            : s
                .children(
                  '.' +
                    i.slideClass +
                    '.' +
                    i.slideDuplicateClass +
                    '[data-swiper-slide-index="' +
                    d.attr('data-swiper-slide-index') +
                    '"]',
                )
                .addClass(i.slideDuplicatePrevClass))
    },
    updateActiveIndex: function (e) {
      var t,
        a = this,
        i = a.rtlTranslate ? a.translate : -a.translate,
        s = a.slidesGrid,
        r = a.snapGrid,
        n = a.params,
        o = a.activeIndex,
        l = a.realIndex,
        p = a.snapIndex,
        c = e
      if (void 0 === c) {
        for (var u = 0; u < s.length; u += 1)
          void 0 !== s[u + 1]
            ? i >= s[u] && i < s[u + 1] - (s[u + 1] - s[u]) / 2
              ? (c = u)
              : i >= s[u] && i < s[u + 1] && (c = u + 1)
            : i >= s[u] && (c = u)
        n.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0)
      }
      if (r.indexOf(i) >= 0) t = r.indexOf(i)
      else {
        var h = Math.min(n.slidesPerGroupSkip, c)
        t = h + Math.floor((c - h) / n.slidesPerGroup)
      }
      if ((t >= r.length && (t = r.length - 1), c !== o)) {
        var v = parseInt(
          a.slides.eq(c).attr('data-swiper-slide-index') || c,
          10,
        )
        d.extend(a, {
          snapIndex: t,
          realIndex: v,
          previousIndex: o,
          activeIndex: c,
        }),
          a.emit('activeIndexChange'),
          a.emit('snapIndexChange'),
          l !== v && a.emit('realIndexChange'),
          (a.initialized || a.params.runCallbacksOnInit) &&
            a.emit('slideChange')
      } else t !== p && ((a.snapIndex = t), a.emit('snapIndexChange'))
    },
    updateClickedSlide: function (e) {
      var t = this,
        a = t.params,
        i = n(e.target).closest('.' + a.slideClass)[0],
        s = !1
      if (i)
        for (var r = 0; r < t.slides.length; r += 1)
          t.slides[r] === i && (s = !0)
      if (!i || !s)
        return (t.clickedSlide = void 0), void (t.clickedIndex = void 0)
      ;(t.clickedSlide = i),
        t.virtual && t.params.virtual.enabled
          ? (t.clickedIndex = parseInt(
              n(i).attr('data-swiper-slide-index'),
              10,
            ))
          : (t.clickedIndex = n(i).index()),
        a.slideToClickedSlide &&
          void 0 !== t.clickedIndex &&
          t.clickedIndex !== t.activeIndex &&
          t.slideToClickedSlide()
    },
  }
  var v = {
    getTranslate: function (e) {
      void 0 === e && (e = this.isHorizontal() ? 'x' : 'y')
      var t = this,
        a = t.params,
        i = t.rtlTranslate,
        s = t.translate,
        r = t.$wrapperEl
      if (a.virtualTranslate) return i ? -s : s
      if (a.cssMode) return s
      var n = d.getTranslate(r[0], e)
      return i && (n = -n), n || 0
    },
    setTranslate: function (e, t) {
      var a = this,
        i = a.rtlTranslate,
        s = a.params,
        r = a.$wrapperEl,
        n = a.wrapperEl,
        o = a.progress,
        l = 0,
        d = 0
      a.isHorizontal() ? (l = i ? -e : e) : (d = e),
        s.roundLengths && ((l = Math.floor(l)), (d = Math.floor(d))),
        s.cssMode
          ? (n[a.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = a.isHorizontal()
              ? -l
              : -d)
          : s.virtualTranslate ||
            r.transform('translate3d(' + l + 'px, ' + d + 'px, 0px)'),
        (a.previousTranslate = a.translate),
        (a.translate = a.isHorizontal() ? l : d)
      var p = a.maxTranslate() - a.minTranslate()
      ;(0 === p ? 0 : (e - a.minTranslate()) / p) !== o && a.updateProgress(e),
        a.emit('setTranslate', a.translate, t)
    },
    minTranslate: function () {
      return -this.snapGrid[0]
    },
    maxTranslate: function () {
      return -this.snapGrid[this.snapGrid.length - 1]
    },
    translateTo: function (e, t, a, i, s) {
      var r
      void 0 === e && (e = 0),
        void 0 === t && (t = this.params.speed),
        void 0 === a && (a = !0),
        void 0 === i && (i = !0)
      var n = this,
        o = n.params,
        l = n.wrapperEl
      if (n.animating && o.preventInteractionOnTransition) return !1
      var d,
        p = n.minTranslate(),
        c = n.maxTranslate()
      if (
        ((d = i && e > p ? p : i && e < c ? c : e),
        n.updateProgress(d),
        o.cssMode)
      ) {
        var u = n.isHorizontal()
        return (
          0 === t
            ? (l[u ? 'scrollLeft' : 'scrollTop'] = -d)
            : l.scrollTo
            ? l.scrollTo(
                (((r = {})[u ? 'left' : 'top'] = -d),
                (r.behavior = 'smooth'),
                r),
              )
            : (l[u ? 'scrollLeft' : 'scrollTop'] = -d),
          !0
        )
      }
      return (
        0 === t
          ? (n.setTransition(0),
            n.setTranslate(d),
            a &&
              (n.emit('beforeTransitionStart', t, s), n.emit('transitionEnd')))
          : (n.setTransition(t),
            n.setTranslate(d),
            a &&
              (n.emit('beforeTransitionStart', t, s),
              n.emit('transitionStart')),
            n.animating ||
              ((n.animating = !0),
              n.onTranslateToWrapperTransitionEnd ||
                (n.onTranslateToWrapperTransitionEnd = function (e) {
                  n &&
                    !n.destroyed &&
                    e.target === this &&
                    (n.$wrapperEl[0].removeEventListener(
                      'transitionend',
                      n.onTranslateToWrapperTransitionEnd,
                    ),
                    n.$wrapperEl[0].removeEventListener(
                      'webkitTransitionEnd',
                      n.onTranslateToWrapperTransitionEnd,
                    ),
                    (n.onTranslateToWrapperTransitionEnd = null),
                    delete n.onTranslateToWrapperTransitionEnd,
                    a && n.emit('transitionEnd'))
                }),
              n.$wrapperEl[0].addEventListener(
                'transitionend',
                n.onTranslateToWrapperTransitionEnd,
              ),
              n.$wrapperEl[0].addEventListener(
                'webkitTransitionEnd',
                n.onTranslateToWrapperTransitionEnd,
              ))),
        !0
      )
    },
  }
  var f = {
    setTransition: function (e, t) {
      var a = this
      a.params.cssMode || a.$wrapperEl.transition(e),
        a.emit('setTransition', e, t)
    },
    transitionStart: function (e, t) {
      void 0 === e && (e = !0)
      var a = this,
        i = a.activeIndex,
        s = a.params,
        r = a.previousIndex
      if (!s.cssMode) {
        s.autoHeight && a.updateAutoHeight()
        var n = t
        if (
          (n || (n = i > r ? 'next' : i < r ? 'prev' : 'reset'),
          a.emit('transitionStart'),
          e && i !== r)
        ) {
          if ('reset' === n) return void a.emit('slideResetTransitionStart')
          a.emit('slideChangeTransitionStart'),
            'next' === n
              ? a.emit('slideNextTransitionStart')
              : a.emit('slidePrevTransitionStart')
        }
      }
    },
    transitionEnd: function (e, t) {
      void 0 === e && (e = !0)
      var a = this,
        i = a.activeIndex,
        s = a.previousIndex,
        r = a.params
      if (((a.animating = !1), !r.cssMode)) {
        a.setTransition(0)
        var n = t
        if (
          (n || (n = i > s ? 'next' : i < s ? 'prev' : 'reset'),
          a.emit('transitionEnd'),
          e && i !== s)
        ) {
          if ('reset' === n) return void a.emit('slideResetTransitionEnd')
          a.emit('slideChangeTransitionEnd'),
            'next' === n
              ? a.emit('slideNextTransitionEnd')
              : a.emit('slidePrevTransitionEnd')
        }
      }
    },
  }
  var m = {
    slideTo: function (e, t, a, i) {
      var s
      void 0 === e && (e = 0),
        void 0 === t && (t = this.params.speed),
        void 0 === a && (a = !0)
      var r = this,
        n = e
      n < 0 && (n = 0)
      var o = r.params,
        l = r.snapGrid,
        d = r.slidesGrid,
        p = r.previousIndex,
        c = r.activeIndex,
        u = r.rtlTranslate,
        h = r.wrapperEl
      if (r.animating && o.preventInteractionOnTransition) return !1
      var v = Math.min(r.params.slidesPerGroupSkip, n),
        f = v + Math.floor((n - v) / r.params.slidesPerGroup)
      f >= l.length && (f = l.length - 1),
        (c || o.initialSlide || 0) === (p || 0) &&
          a &&
          r.emit('beforeSlideChangeStart')
      var m,
        g = -l[f]
      if ((r.updateProgress(g), o.normalizeSlideIndex))
        for (var b = 0; b < d.length; b += 1)
          -Math.floor(100 * g) >= Math.floor(100 * d[b]) && (n = b)
      if (r.initialized && n !== c) {
        if (!r.allowSlideNext && g < r.translate && g < r.minTranslate())
          return !1
        if (
          !r.allowSlidePrev &&
          g > r.translate &&
          g > r.maxTranslate() &&
          (c || 0) !== n
        )
          return !1
      }
      if (
        ((m = n > c ? 'next' : n < c ? 'prev' : 'reset'),
        (u && -g === r.translate) || (!u && g === r.translate))
      )
        return (
          r.updateActiveIndex(n),
          o.autoHeight && r.updateAutoHeight(),
          r.updateSlidesClasses(),
          'slide' !== o.effect && r.setTranslate(g),
          'reset' !== m && (r.transitionStart(a, m), r.transitionEnd(a, m)),
          !1
        )
      if (o.cssMode) {
        var w = r.isHorizontal(),
          y = -g
        return (
          u && (y = h.scrollWidth - h.offsetWidth - y),
          0 === t
            ? (h[w ? 'scrollLeft' : 'scrollTop'] = y)
            : h.scrollTo
            ? h.scrollTo(
                (((s = {})[w ? 'left' : 'top'] = y),
                (s.behavior = 'smooth'),
                s),
              )
            : (h[w ? 'scrollLeft' : 'scrollTop'] = y),
          !0
        )
      }
      return (
        0 === t
          ? (r.setTransition(0),
            r.setTranslate(g),
            r.updateActiveIndex(n),
            r.updateSlidesClasses(),
            r.emit('beforeTransitionStart', t, i),
            r.transitionStart(a, m),
            r.transitionEnd(a, m))
          : (r.setTransition(t),
            r.setTranslate(g),
            r.updateActiveIndex(n),
            r.updateSlidesClasses(),
            r.emit('beforeTransitionStart', t, i),
            r.transitionStart(a, m),
            r.animating ||
              ((r.animating = !0),
              r.onSlideToWrapperTransitionEnd ||
                (r.onSlideToWrapperTransitionEnd = function (e) {
                  r &&
                    !r.destroyed &&
                    e.target === this &&
                    (r.$wrapperEl[0].removeEventListener(
                      'transitionend',
                      r.onSlideToWrapperTransitionEnd,
                    ),
                    r.$wrapperEl[0].removeEventListener(
                      'webkitTransitionEnd',
                      r.onSlideToWrapperTransitionEnd,
                    ),
                    (r.onSlideToWrapperTransitionEnd = null),
                    delete r.onSlideToWrapperTransitionEnd,
                    r.transitionEnd(a, m))
                }),
              r.$wrapperEl[0].addEventListener(
                'transitionend',
                r.onSlideToWrapperTransitionEnd,
              ),
              r.$wrapperEl[0].addEventListener(
                'webkitTransitionEnd',
                r.onSlideToWrapperTransitionEnd,
              ))),
        !0
      )
    },
    slideToLoop: function (e, t, a, i) {
      void 0 === e && (e = 0),
        void 0 === t && (t = this.params.speed),
        void 0 === a && (a = !0)
      var s = this,
        r = e
      return s.params.loop && (r += s.loopedSlides), s.slideTo(r, t, a, i)
    },
    slideNext: function (e, t, a) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0)
      var i = this,
        s = i.params,
        r = i.animating,
        n = i.activeIndex < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup
      if (s.loop) {
        if (r) return !1
        i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft)
      }
      return i.slideTo(i.activeIndex + n, e, t, a)
    },
    slidePrev: function (e, t, a) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0)
      var i = this,
        s = i.params,
        r = i.animating,
        n = i.snapGrid,
        o = i.slidesGrid,
        l = i.rtlTranslate
      if (s.loop) {
        if (r) return !1
        i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft)
      }
      function d(e) {
        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
      }
      var p,
        c = d(l ? i.translate : -i.translate),
        u = n.map(function (e) {
          return d(e)
        }),
        h =
          (o.map(function (e) {
            return d(e)
          }),
          n[u.indexOf(c)],
          n[u.indexOf(c) - 1])
      return (
        void 0 === h &&
          s.cssMode &&
          n.forEach(function (e) {
            !h && c >= e && (h = e)
          }),
        void 0 !== h && (p = o.indexOf(h)) < 0 && (p = i.activeIndex - 1),
        i.slideTo(p, e, t, a)
      )
    },
    slideReset: function (e, t, a) {
      return (
        void 0 === e && (e = this.params.speed),
        void 0 === t && (t = !0),
        this.slideTo(this.activeIndex, e, t, a)
      )
    },
    slideToClosest: function (e, t, a, i) {
      void 0 === e && (e = this.params.speed),
        void 0 === t && (t = !0),
        void 0 === i && (i = 0.5)
      var s = this,
        r = s.activeIndex,
        n = Math.min(s.params.slidesPerGroupSkip, r),
        o = n + Math.floor((r - n) / s.params.slidesPerGroup),
        l = s.rtlTranslate ? s.translate : -s.translate
      if (l >= s.snapGrid[o]) {
        var d = s.snapGrid[o]
        l - d > (s.snapGrid[o + 1] - d) * i && (r += s.params.slidesPerGroup)
      } else {
        var p = s.snapGrid[o - 1]
        l - p <= (s.snapGrid[o] - p) * i && (r -= s.params.slidesPerGroup)
      }
      return (
        (r = Math.max(r, 0)),
        (r = Math.min(r, s.slidesGrid.length - 1)),
        s.slideTo(r, e, t, a)
      )
    },
    slideToClickedSlide: function () {
      var e,
        t = this,
        a = t.params,
        i = t.$wrapperEl,
        s =
          'auto' === a.slidesPerView
            ? t.slidesPerViewDynamic()
            : a.slidesPerView,
        r = t.clickedIndex
      if (a.loop) {
        if (t.animating) return
        ;(e = parseInt(n(t.clickedSlide).attr('data-swiper-slide-index'), 10)),
          a.centeredSlides
            ? r < t.loopedSlides - s / 2 ||
              r > t.slides.length - t.loopedSlides + s / 2
              ? (t.loopFix(),
                (r = i
                  .children(
                    '.' +
                      a.slideClass +
                      '[data-swiper-slide-index="' +
                      e +
                      '"]:not(.' +
                      a.slideDuplicateClass +
                      ')',
                  )
                  .eq(0)
                  .index()),
                d.nextTick(function () {
                  t.slideTo(r)
                }))
              : t.slideTo(r)
            : r > t.slides.length - s
            ? (t.loopFix(),
              (r = i
                .children(
                  '.' +
                    a.slideClass +
                    '[data-swiper-slide-index="' +
                    e +
                    '"]:not(.' +
                    a.slideDuplicateClass +
                    ')',
                )
                .eq(0)
                .index()),
              d.nextTick(function () {
                t.slideTo(r)
              }))
            : t.slideTo(r)
      } else t.slideTo(r)
    },
  }
  var g = {
    loopCreate: function () {
      var e = this,
        t = e.params,
        i = e.$wrapperEl
      i.children('.' + t.slideClass + '.' + t.slideDuplicateClass).remove()
      var s = i.children('.' + t.slideClass)
      if (t.loopFillGroupWithBlank) {
        var r = t.slidesPerGroup - (s.length % t.slidesPerGroup)
        if (r !== t.slidesPerGroup) {
          for (var o = 0; o < r; o += 1) {
            var l = n(a.createElement('div')).addClass(
              t.slideClass + ' ' + t.slideBlankClass,
            )
            i.append(l)
          }
          s = i.children('.' + t.slideClass)
        }
      }
      'auto' !== t.slidesPerView ||
        t.loopedSlides ||
        (t.loopedSlides = s.length),
        (e.loopedSlides = Math.ceil(
          parseFloat(t.loopedSlides || t.slidesPerView, 10),
        )),
        (e.loopedSlides += t.loopAdditionalSlides),
        e.loopedSlides > s.length && (e.loopedSlides = s.length)
      var d = [],
        p = []
      s.each(function (t, a) {
        var i = n(a)
        t < e.loopedSlides && p.push(a),
          t < s.length && t >= s.length - e.loopedSlides && d.push(a),
          i.attr('data-swiper-slide-index', t)
      })
      for (var c = 0; c < p.length; c += 1)
        i.append(n(p[c].cloneNode(!0)).addClass(t.slideDuplicateClass))
      for (var u = d.length - 1; u >= 0; u -= 1)
        i.prepend(n(d[u].cloneNode(!0)).addClass(t.slideDuplicateClass))
    },
    loopFix: function () {
      var e = this
      e.emit('beforeLoopFix')
      var t,
        a = e.activeIndex,
        i = e.slides,
        s = e.loopedSlides,
        r = e.allowSlidePrev,
        n = e.allowSlideNext,
        o = e.snapGrid,
        l = e.rtlTranslate
      ;(e.allowSlidePrev = !0), (e.allowSlideNext = !0)
      var d = -o[a] - e.getTranslate()
      if (a < s)
        (t = i.length - 3 * s + a),
          (t += s),
          e.slideTo(t, 0, !1, !0) &&
            0 !== d &&
            e.setTranslate((l ? -e.translate : e.translate) - d)
      else if (a >= i.length - s) {
        ;(t = -i.length + a + s),
          (t += s),
          e.slideTo(t, 0, !1, !0) &&
            0 !== d &&
            e.setTranslate((l ? -e.translate : e.translate) - d)
      }
      ;(e.allowSlidePrev = r), (e.allowSlideNext = n), e.emit('loopFix')
    },
    loopDestroy: function () {
      var e = this,
        t = e.$wrapperEl,
        a = e.params,
        i = e.slides
      t
        .children(
          '.' +
            a.slideClass +
            '.' +
            a.slideDuplicateClass +
            ',.' +
            a.slideClass +
            '.' +
            a.slideBlankClass,
        )
        .remove(),
        i.removeAttr('data-swiper-slide-index')
    },
  }
  var b = {
    setGrabCursor: function (e) {
      var t = this
      if (
        !(
          p.touch ||
          !t.params.simulateTouch ||
          (t.params.watchOverflow && t.isLocked) ||
          t.params.cssMode
        )
      ) {
        var a = t.el
        ;(a.style.cursor = 'move'),
          (a.style.cursor = e ? '-webkit-grabbing' : '-webkit-grab'),
          (a.style.cursor = e ? '-moz-grabbin' : '-moz-grab'),
          (a.style.cursor = e ? 'grabbing' : 'grab')
      }
    },
    unsetGrabCursor: function () {
      var e = this
      p.touch ||
        (e.params.watchOverflow && e.isLocked) ||
        e.params.cssMode ||
        (e.el.style.cursor = '')
    },
  }
  var w,
    y,
    x,
    E,
    T,
    S,
    C,
    M,
    P,
    z,
    k,
    $,
    L,
    I,
    D,
    O = {
      appendSlide: function (e) {
        var t = this,
          a = t.$wrapperEl,
          i = t.params
        if ((i.loop && t.loopDestroy(), 'object' == typeof e && 'length' in e))
          for (var s = 0; s < e.length; s += 1) e[s] && a.append(e[s])
        else a.append(e)
        i.loop && t.loopCreate(), (i.observer && p.observer) || t.update()
      },
      prependSlide: function (e) {
        var t = this,
          a = t.params,
          i = t.$wrapperEl,
          s = t.activeIndex
        a.loop && t.loopDestroy()
        var r = s + 1
        if ('object' == typeof e && 'length' in e) {
          for (var n = 0; n < e.length; n += 1) e[n] && i.prepend(e[n])
          r = s + e.length
        } else i.prepend(e)
        a.loop && t.loopCreate(),
          (a.observer && p.observer) || t.update(),
          t.slideTo(r, 0, !1)
      },
      addSlide: function (e, t) {
        var a = this,
          i = a.$wrapperEl,
          s = a.params,
          r = a.activeIndex
        s.loop &&
          ((r -= a.loopedSlides),
          a.loopDestroy(),
          (a.slides = i.children('.' + s.slideClass)))
        var n = a.slides.length
        if (e <= 0) a.prependSlide(t)
        else if (e >= n) a.appendSlide(t)
        else {
          for (var o = r > e ? r + 1 : r, l = [], d = n - 1; d >= e; d -= 1) {
            var c = a.slides.eq(d)
            c.remove(), l.unshift(c)
          }
          if ('object' == typeof t && 'length' in t) {
            for (var u = 0; u < t.length; u += 1) t[u] && i.append(t[u])
            o = r > e ? r + t.length : r
          } else i.append(t)
          for (var h = 0; h < l.length; h += 1) i.append(l[h])
          s.loop && a.loopCreate(),
            (s.observer && p.observer) || a.update(),
            s.loop ? a.slideTo(o + a.loopedSlides, 0, !1) : a.slideTo(o, 0, !1)
        }
      },
      removeSlide: function (e) {
        var t = this,
          a = t.params,
          i = t.$wrapperEl,
          s = t.activeIndex
        a.loop &&
          ((s -= t.loopedSlides),
          t.loopDestroy(),
          (t.slides = i.children('.' + a.slideClass)))
        var r,
          n = s
        if ('object' == typeof e && 'length' in e) {
          for (var o = 0; o < e.length; o += 1)
            (r = e[o]),
              t.slides[r] && t.slides.eq(r).remove(),
              r < n && (n -= 1)
          n = Math.max(n, 0)
        } else
          (r = e),
            t.slides[r] && t.slides.eq(r).remove(),
            r < n && (n -= 1),
            (n = Math.max(n, 0))
        a.loop && t.loopCreate(),
          (a.observer && p.observer) || t.update(),
          a.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1)
      },
      removeAllSlides: function () {
        for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t)
        this.removeSlide(e)
      },
    },
    A =
      ((w = s.navigator.platform),
      (y = s.navigator.userAgent),
      (x = {
        ios: !1,
        android: !1,
        androidChrome: !1,
        desktop: !1,
        iphone: !1,
        ipod: !1,
        ipad: !1,
        edge: !1,
        ie: !1,
        firefox: !1,
        macos: !1,
        windows: !1,
        cordova: !(!s.cordova && !s.phonegap),
        phonegap: !(!s.cordova && !s.phonegap),
        electron: !1,
      }),
      (E = s.screen.width),
      (T = s.screen.height),
      (S = y.match(/(Android);?[\s\/]+([\d.]+)?/)),
      (C = y.match(/(iPad).*OS\s([\d_]+)/)),
      (M = y.match(/(iPod)(.*OS\s([\d_]+))?/)),
      (P = !C && y.match(/(iPhone\sOS|iOS)\s([\d_]+)/)),
      (z = y.indexOf('MSIE ') >= 0 || y.indexOf('Trident/') >= 0),
      (k = y.indexOf('Edge/') >= 0),
      ($ = y.indexOf('Gecko/') >= 0 && y.indexOf('Firefox/') >= 0),
      (L = 'Win32' === w),
      (I = y.toLowerCase().indexOf('electron') >= 0),
      (D = 'MacIntel' === w),
      !C &&
        D &&
        p.touch &&
        ((1024 === E && 1366 === T) ||
          (834 === E && 1194 === T) ||
          (834 === E && 1112 === T) ||
          (768 === E && 1024 === T)) &&
        ((C = y.match(/(Version)\/([\d.]+)/)), (D = !1)),
      (x.ie = z),
      (x.edge = k),
      (x.firefox = $),
      S &&
        !L &&
        ((x.os = 'android'),
        (x.osVersion = S[2]),
        (x.android = !0),
        (x.androidChrome = y.toLowerCase().indexOf('chrome') >= 0)),
      (C || P || M) && ((x.os = 'ios'), (x.ios = !0)),
      P && !M && ((x.osVersion = P[2].replace(/_/g, '.')), (x.iphone = !0)),
      C && ((x.osVersion = C[2].replace(/_/g, '.')), (x.ipad = !0)),
      M &&
        ((x.osVersion = M[3] ? M[3].replace(/_/g, '.') : null), (x.ipod = !0)),
      x.ios &&
        x.osVersion &&
        y.indexOf('Version/') >= 0 &&
        '10' === x.osVersion.split('.')[0] &&
        (x.osVersion = y.toLowerCase().split('version/')[1].split(' ')[0]),
      (x.webView =
        !(
          !(P || C || M) ||
          (!y.match(/.*AppleWebKit(?!.*Safari)/i) && !s.navigator.standalone)
        ) ||
        (s.matchMedia && s.matchMedia('(display-mode: standalone)').matches)),
      (x.webview = x.webView),
      (x.standalone = x.webView),
      (x.desktop = !(x.ios || x.android) || I),
      x.desktop &&
        ((x.electron = I),
        (x.macos = D),
        (x.windows = L),
        x.macos && (x.os = 'macos'),
        x.windows && (x.os = 'windows')),
      (x.pixelRatio = s.devicePixelRatio || 1),
      x)
  function G(e) {
    var t = this,
      i = t.touchEventsData,
      r = t.params,
      o = t.touches
    if (!t.animating || !r.preventInteractionOnTransition) {
      var l = e
      l.originalEvent && (l = l.originalEvent)
      var p = n(l.target)
      if (
        ('wrapper' !== r.touchEventsTarget || p.closest(t.wrapperEl).length) &&
        ((i.isTouchEvent = 'touchstart' === l.type),
        (i.isTouchEvent || !('which' in l) || 3 !== l.which) &&
          !(
            (!i.isTouchEvent && 'button' in l && l.button > 0) ||
            (i.isTouched && i.isMoved)
          ))
      )
        if (
          r.noSwiping &&
          p.closest(
            r.noSwipingSelector ? r.noSwipingSelector : '.' + r.noSwipingClass,
          )[0]
        )
          t.allowClick = !0
        else if (!r.swipeHandler || p.closest(r.swipeHandler)[0]) {
          ;(o.currentX =
            'touchstart' === l.type ? l.targetTouches[0].pageX : l.pageX),
            (o.currentY =
              'touchstart' === l.type ? l.targetTouches[0].pageY : l.pageY)
          var c = o.currentX,
            u = o.currentY,
            h = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
            v = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold
          if (!h || !(c <= v || c >= s.screen.width - v)) {
            if (
              (d.extend(i, {
                isTouched: !0,
                isMoved: !1,
                allowTouchCallbacks: !0,
                isScrolling: void 0,
                startMoving: void 0,
              }),
              (o.startX = c),
              (o.startY = u),
              (i.touchStartTime = d.now()),
              (t.allowClick = !0),
              t.updateSize(),
              (t.swipeDirection = void 0),
              r.threshold > 0 && (i.allowThresholdMove = !1),
              'touchstart' !== l.type)
            ) {
              var f = !0
              p.is(i.formElements) && (f = !1),
                a.activeElement &&
                  n(a.activeElement).is(i.formElements) &&
                  a.activeElement !== p[0] &&
                  a.activeElement.blur()
              var m = f && t.allowTouchMove && r.touchStartPreventDefault
              ;(r.touchStartForcePreventDefault || m) && l.preventDefault()
            }
            t.emit('touchStart', l)
          }
        }
    }
  }
  function H(e) {
    var t = this,
      i = t.touchEventsData,
      s = t.params,
      r = t.touches,
      o = t.rtlTranslate,
      l = e
    if ((l.originalEvent && (l = l.originalEvent), i.isTouched)) {
      if (!i.isTouchEvent || 'touchmove' === l.type) {
        var p =
            'touchmove' === l.type &&
            l.targetTouches &&
            (l.targetTouches[0] || l.changedTouches[0]),
          c = 'touchmove' === l.type ? p.pageX : l.pageX,
          u = 'touchmove' === l.type ? p.pageY : l.pageY
        if (l.preventedByNestedSwiper)
          return (r.startX = c), void (r.startY = u)
        if (!t.allowTouchMove)
          return (
            (t.allowClick = !1),
            void (
              i.isTouched &&
              (d.extend(r, { startX: c, startY: u, currentX: c, currentY: u }),
              (i.touchStartTime = d.now()))
            )
          )
        if (i.isTouchEvent && s.touchReleaseOnEdges && !s.loop)
          if (t.isVertical()) {
            if (
              (u < r.startY && t.translate <= t.maxTranslate()) ||
              (u > r.startY && t.translate >= t.minTranslate())
            )
              return (i.isTouched = !1), void (i.isMoved = !1)
          } else if (
            (c < r.startX && t.translate <= t.maxTranslate()) ||
            (c > r.startX && t.translate >= t.minTranslate())
          )
            return
        if (
          i.isTouchEvent &&
          a.activeElement &&
          l.target === a.activeElement &&
          n(l.target).is(i.formElements)
        )
          return (i.isMoved = !0), void (t.allowClick = !1)
        if (
          (i.allowTouchCallbacks && t.emit('touchMove', l),
          !(l.targetTouches && l.targetTouches.length > 1))
        ) {
          ;(r.currentX = c), (r.currentY = u)
          var h = r.currentX - r.startX,
            v = r.currentY - r.startY
          if (
            !(
              t.params.threshold &&
              Math.sqrt(Math.pow(h, 2) + Math.pow(v, 2)) < t.params.threshold
            )
          ) {
            var f
            if (void 0 === i.isScrolling)
              (t.isHorizontal() && r.currentY === r.startY) ||
              (t.isVertical() && r.currentX === r.startX)
                ? (i.isScrolling = !1)
                : h * h + v * v >= 25 &&
                  ((f = (180 * Math.atan2(Math.abs(v), Math.abs(h))) / Math.PI),
                  (i.isScrolling = t.isHorizontal()
                    ? f > s.touchAngle
                    : 90 - f > s.touchAngle))
            if (
              (i.isScrolling && t.emit('touchMoveOpposite', l),
              void 0 === i.startMoving &&
                ((r.currentX === r.startX && r.currentY === r.startY) ||
                  (i.startMoving = !0)),
              i.isScrolling)
            )
              i.isTouched = !1
            else if (i.startMoving) {
              ;(t.allowClick = !1),
                !s.cssMode && l.cancelable && l.preventDefault(),
                s.touchMoveStopPropagation && !s.nested && l.stopPropagation(),
                i.isMoved ||
                  (s.loop && t.loopFix(),
                  (i.startTranslate = t.getTranslate()),
                  t.setTransition(0),
                  t.animating &&
                    t.$wrapperEl.trigger('webkitTransitionEnd transitionend'),
                  (i.allowMomentumBounce = !1),
                  !s.grabCursor ||
                    (!0 !== t.allowSlideNext && !0 !== t.allowSlidePrev) ||
                    t.setGrabCursor(!0),
                  t.emit('sliderFirstMove', l)),
                t.emit('sliderMove', l),
                (i.isMoved = !0)
              var m = t.isHorizontal() ? h : v
              ;(r.diff = m),
                (m *= s.touchRatio),
                o && (m = -m),
                (t.swipeDirection = m > 0 ? 'prev' : 'next'),
                (i.currentTranslate = m + i.startTranslate)
              var g = !0,
                b = s.resistanceRatio
              if (
                (s.touchReleaseOnEdges && (b = 0),
                m > 0 && i.currentTranslate > t.minTranslate()
                  ? ((g = !1),
                    s.resistance &&
                      (i.currentTranslate =
                        t.minTranslate() -
                        1 +
                        Math.pow(-t.minTranslate() + i.startTranslate + m, b)))
                  : m < 0 &&
                    i.currentTranslate < t.maxTranslate() &&
                    ((g = !1),
                    s.resistance &&
                      (i.currentTranslate =
                        t.maxTranslate() +
                        1 -
                        Math.pow(t.maxTranslate() - i.startTranslate - m, b))),
                g && (l.preventedByNestedSwiper = !0),
                !t.allowSlideNext &&
                  'next' === t.swipeDirection &&
                  i.currentTranslate < i.startTranslate &&
                  (i.currentTranslate = i.startTranslate),
                !t.allowSlidePrev &&
                  'prev' === t.swipeDirection &&
                  i.currentTranslate > i.startTranslate &&
                  (i.currentTranslate = i.startTranslate),
                s.threshold > 0)
              ) {
                if (!(Math.abs(m) > s.threshold || i.allowThresholdMove))
                  return void (i.currentTranslate = i.startTranslate)
                if (!i.allowThresholdMove)
                  return (
                    (i.allowThresholdMove = !0),
                    (r.startX = r.currentX),
                    (r.startY = r.currentY),
                    (i.currentTranslate = i.startTranslate),
                    void (r.diff = t.isHorizontal()
                      ? r.currentX - r.startX
                      : r.currentY - r.startY)
                  )
              }
              s.followFinger &&
                !s.cssMode &&
                ((s.freeMode ||
                  s.watchSlidesProgress ||
                  s.watchSlidesVisibility) &&
                  (t.updateActiveIndex(), t.updateSlidesClasses()),
                s.freeMode &&
                  (0 === i.velocities.length &&
                    i.velocities.push({
                      position: r[t.isHorizontal() ? 'startX' : 'startY'],
                      time: i.touchStartTime,
                    }),
                  i.velocities.push({
                    position: r[t.isHorizontal() ? 'currentX' : 'currentY'],
                    time: d.now(),
                  })),
                t.updateProgress(i.currentTranslate),
                t.setTranslate(i.currentTranslate))
            }
          }
        }
      }
    } else i.startMoving && i.isScrolling && t.emit('touchMoveOpposite', l)
  }
  function B(e) {
    var t = this,
      a = t.touchEventsData,
      i = t.params,
      s = t.touches,
      r = t.rtlTranslate,
      n = t.$wrapperEl,
      o = t.slidesGrid,
      l = t.snapGrid,
      p = e
    if (
      (p.originalEvent && (p = p.originalEvent),
      a.allowTouchCallbacks && t.emit('touchEnd', p),
      (a.allowTouchCallbacks = !1),
      !a.isTouched)
    )
      return (
        a.isMoved && i.grabCursor && t.setGrabCursor(!1),
        (a.isMoved = !1),
        void (a.startMoving = !1)
      )
    i.grabCursor &&
      a.isMoved &&
      a.isTouched &&
      (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
      t.setGrabCursor(!1)
    var c,
      u = d.now(),
      h = u - a.touchStartTime
    if (
      (t.allowClick &&
        (t.updateClickedSlide(p),
        t.emit('tap click', p),
        h < 300 &&
          u - a.lastClickTime < 300 &&
          t.emit('doubleTap doubleClick', p)),
      (a.lastClickTime = d.now()),
      d.nextTick(function () {
        t.destroyed || (t.allowClick = !0)
      }),
      !a.isTouched ||
        !a.isMoved ||
        !t.swipeDirection ||
        0 === s.diff ||
        a.currentTranslate === a.startTranslate)
    )
      return (a.isTouched = !1), (a.isMoved = !1), void (a.startMoving = !1)
    if (
      ((a.isTouched = !1),
      (a.isMoved = !1),
      (a.startMoving = !1),
      (c = i.followFinger
        ? r
          ? t.translate
          : -t.translate
        : -a.currentTranslate),
      !i.cssMode)
    )
      if (i.freeMode) {
        if (c < -t.minTranslate()) return void t.slideTo(t.activeIndex)
        if (c > -t.maxTranslate())
          return void (t.slides.length < l.length
            ? t.slideTo(l.length - 1)
            : t.slideTo(t.slides.length - 1))
        if (i.freeModeMomentum) {
          if (a.velocities.length > 1) {
            var v = a.velocities.pop(),
              f = a.velocities.pop(),
              m = v.position - f.position,
              g = v.time - f.time
            ;(t.velocity = m / g),
              (t.velocity /= 2),
              Math.abs(t.velocity) < i.freeModeMinimumVelocity &&
                (t.velocity = 0),
              (g > 150 || d.now() - v.time > 300) && (t.velocity = 0)
          } else t.velocity = 0
          ;(t.velocity *= i.freeModeMomentumVelocityRatio),
            (a.velocities.length = 0)
          var b = 1e3 * i.freeModeMomentumRatio,
            w = t.velocity * b,
            y = t.translate + w
          r && (y = -y)
          var x,
            E,
            T = !1,
            S = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio
          if (y < t.maxTranslate())
            i.freeModeMomentumBounce
              ? (y + t.maxTranslate() < -S && (y = t.maxTranslate() - S),
                (x = t.maxTranslate()),
                (T = !0),
                (a.allowMomentumBounce = !0))
              : (y = t.maxTranslate()),
              i.loop && i.centeredSlides && (E = !0)
          else if (y > t.minTranslate())
            i.freeModeMomentumBounce
              ? (y - t.minTranslate() > S && (y = t.minTranslate() + S),
                (x = t.minTranslate()),
                (T = !0),
                (a.allowMomentumBounce = !0))
              : (y = t.minTranslate()),
              i.loop && i.centeredSlides && (E = !0)
          else if (i.freeModeSticky) {
            for (var C, M = 0; M < l.length; M += 1)
              if (l[M] > -y) {
                C = M
                break
              }
            y = -(y =
              Math.abs(l[C] - y) < Math.abs(l[C - 1] - y) ||
              'next' === t.swipeDirection
                ? l[C]
                : l[C - 1])
          }
          if (
            (E &&
              t.once('transitionEnd', function () {
                t.loopFix()
              }),
            0 !== t.velocity)
          ) {
            if (
              ((b = r
                ? Math.abs((-y - t.translate) / t.velocity)
                : Math.abs((y - t.translate) / t.velocity)),
              i.freeModeSticky)
            ) {
              var P = Math.abs((r ? -y : y) - t.translate),
                z = t.slidesSizesGrid[t.activeIndex]
              b = P < z ? i.speed : P < 2 * z ? 1.5 * i.speed : 2.5 * i.speed
            }
          } else if (i.freeModeSticky) return void t.slideToClosest()
          i.freeModeMomentumBounce && T
            ? (t.updateProgress(x),
              t.setTransition(b),
              t.setTranslate(y),
              t.transitionStart(!0, t.swipeDirection),
              (t.animating = !0),
              n.transitionEnd(function () {
                t &&
                  !t.destroyed &&
                  a.allowMomentumBounce &&
                  (t.emit('momentumBounce'),
                  t.setTransition(i.speed),
                  setTimeout(function () {
                    t.setTranslate(x),
                      n.transitionEnd(function () {
                        t && !t.destroyed && t.transitionEnd()
                      })
                  }, 0))
              }))
            : t.velocity
            ? (t.updateProgress(y),
              t.setTransition(b),
              t.setTranslate(y),
              t.transitionStart(!0, t.swipeDirection),
              t.animating ||
                ((t.animating = !0),
                n.transitionEnd(function () {
                  t && !t.destroyed && t.transitionEnd()
                })))
            : t.updateProgress(y),
            t.updateActiveIndex(),
            t.updateSlidesClasses()
        } else if (i.freeModeSticky) return void t.slideToClosest()
        ;(!i.freeModeMomentum || h >= i.longSwipesMs) &&
          (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
      } else {
        for (
          var k = 0, $ = t.slidesSizesGrid[0], L = 0;
          L < o.length;
          L += L < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
        ) {
          var I = L < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup
          void 0 !== o[L + I]
            ? c >= o[L] && c < o[L + I] && ((k = L), ($ = o[L + I] - o[L]))
            : c >= o[L] && ((k = L), ($ = o[o.length - 1] - o[o.length - 2]))
        }
        var D = (c - o[k]) / $,
          O = k < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup
        if (h > i.longSwipesMs) {
          if (!i.longSwipes) return void t.slideTo(t.activeIndex)
          'next' === t.swipeDirection &&
            (D >= i.longSwipesRatio ? t.slideTo(k + O) : t.slideTo(k)),
            'prev' === t.swipeDirection &&
              (D > 1 - i.longSwipesRatio ? t.slideTo(k + O) : t.slideTo(k))
        } else {
          if (!i.shortSwipes) return void t.slideTo(t.activeIndex)
          t.navigation &&
          (p.target === t.navigation.nextEl || p.target === t.navigation.prevEl)
            ? p.target === t.navigation.nextEl
              ? t.slideTo(k + O)
              : t.slideTo(k)
            : ('next' === t.swipeDirection && t.slideTo(k + O),
              'prev' === t.swipeDirection && t.slideTo(k))
        }
      }
  }
  function N() {
    var e = this,
      t = e.params,
      a = e.el
    if (!a || 0 !== a.offsetWidth) {
      t.breakpoints && e.setBreakpoint()
      var i = e.allowSlideNext,
        s = e.allowSlidePrev,
        r = e.snapGrid
      ;(e.allowSlideNext = !0),
        (e.allowSlidePrev = !0),
        e.updateSize(),
        e.updateSlides(),
        e.updateSlidesClasses(),
        ('auto' === t.slidesPerView || t.slidesPerView > 1) &&
        e.isEnd &&
        !e.isBeginning &&
        !e.params.centeredSlides
          ? e.slideTo(e.slides.length - 1, 0, !1, !0)
          : e.slideTo(e.activeIndex, 0, !1, !0),
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          e.autoplay.run(),
        (e.allowSlidePrev = s),
        (e.allowSlideNext = i),
        e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
    }
  }
  function X(e) {
    var t = this
    t.allowClick ||
      (t.params.preventClicks && e.preventDefault(),
      t.params.preventClicksPropagation &&
        t.animating &&
        (e.stopPropagation(), e.stopImmediatePropagation()))
  }
  function V() {
    var e = this,
      t = e.wrapperEl,
      a = e.rtlTranslate
    ;(e.previousTranslate = e.translate),
      e.isHorizontal()
        ? (e.translate = a
            ? t.scrollWidth - t.offsetWidth - t.scrollLeft
            : -t.scrollLeft)
        : (e.translate = -t.scrollTop),
      -0 === e.translate && (e.translate = 0),
      e.updateActiveIndex(),
      e.updateSlidesClasses()
    var i = e.maxTranslate() - e.minTranslate()
    ;(0 === i ? 0 : (e.translate - e.minTranslate()) / i) !== e.progress &&
      e.updateProgress(a ? -e.translate : e.translate),
      e.emit('setTranslate', e.translate, !1)
  }
  var Y = !1
  function F() {}
  var W = {
      init: !0,
      direction: 'horizontal',
      touchEventsTarget: 'container',
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      preventInteractionOnTransition: !1,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      freeMode: !1,
      freeModeMomentum: !0,
      freeModeMomentumRatio: 1,
      freeModeMomentumBounce: !0,
      freeModeMomentumBounceRatio: 1,
      freeModeMomentumVelocityRatio: 1,
      freeModeSticky: !1,
      freeModeMinimumVelocity: 0.02,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: 'slide',
      breakpoints: void 0,
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerColumn: 1,
      slidesPerColumnFill: 'column',
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !1,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      watchSlidesVisibility: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopFillGroupWithBlank: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: 'swiper-no-swiping',
      noSwipingSelector: null,
      passiveListeners: !0,
      containerModifierClass: 'swiper-container-',
      slideClass: 'swiper-slide',
      slideBlankClass: 'swiper-slide-invisible-blank',
      slideActiveClass: 'swiper-slide-active',
      slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
      slideVisibleClass: 'swiper-slide-visible',
      slideDuplicateClass: 'swiper-slide-duplicate',
      slideNextClass: 'swiper-slide-next',
      slideDuplicateNextClass: 'swiper-slide-duplicate-next',
      slidePrevClass: 'swiper-slide-prev',
      slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
      wrapperClass: 'swiper-wrapper',
      runCallbacksOnInit: !0,
    },
    R = {
      update: h,
      translate: v,
      transition: f,
      slide: m,
      loop: g,
      grabCursor: b,
      manipulation: O,
      events: {
        attachEvents: function () {
          var e = this,
            t = e.params,
            i = e.touchEvents,
            s = e.el,
            r = e.wrapperEl
          ;(e.onTouchStart = G.bind(e)),
            (e.onTouchMove = H.bind(e)),
            (e.onTouchEnd = B.bind(e)),
            t.cssMode && (e.onScroll = V.bind(e)),
            (e.onClick = X.bind(e))
          var n = !!t.nested
          if (!p.touch && p.pointerEvents)
            s.addEventListener(i.start, e.onTouchStart, !1),
              a.addEventListener(i.move, e.onTouchMove, n),
              a.addEventListener(i.end, e.onTouchEnd, !1)
          else {
            if (p.touch) {
              var o = !(
                'touchstart' !== i.start ||
                !p.passiveListener ||
                !t.passiveListeners
              ) && { passive: !0, capture: !1 }
              s.addEventListener(i.start, e.onTouchStart, o),
                s.addEventListener(
                  i.move,
                  e.onTouchMove,
                  p.passiveListener ? { passive: !1, capture: n } : n,
                ),
                s.addEventListener(i.end, e.onTouchEnd, o),
                i.cancel && s.addEventListener(i.cancel, e.onTouchEnd, o),
                Y || (a.addEventListener('touchstart', F), (Y = !0))
            }
            ;((t.simulateTouch && !A.ios && !A.android) ||
              (t.simulateTouch && !p.touch && A.ios)) &&
              (s.addEventListener('mousedown', e.onTouchStart, !1),
              a.addEventListener('mousemove', e.onTouchMove, n),
              a.addEventListener('mouseup', e.onTouchEnd, !1))
          }
          ;(t.preventClicks || t.preventClicksPropagation) &&
            s.addEventListener('click', e.onClick, !0),
            t.cssMode && r.addEventListener('scroll', e.onScroll),
            t.updateOnWindowResize
              ? e.on(
                  A.ios || A.android
                    ? 'resize orientationchange observerUpdate'
                    : 'resize observerUpdate',
                  N,
                  !0,
                )
              : e.on('observerUpdate', N, !0)
        },
        detachEvents: function () {
          var e = this,
            t = e.params,
            i = e.touchEvents,
            s = e.el,
            r = e.wrapperEl,
            n = !!t.nested
          if (!p.touch && p.pointerEvents)
            s.removeEventListener(i.start, e.onTouchStart, !1),
              a.removeEventListener(i.move, e.onTouchMove, n),
              a.removeEventListener(i.end, e.onTouchEnd, !1)
          else {
            if (p.touch) {
              var o = !(
                'onTouchStart' !== i.start ||
                !p.passiveListener ||
                !t.passiveListeners
              ) && { passive: !0, capture: !1 }
              s.removeEventListener(i.start, e.onTouchStart, o),
                s.removeEventListener(i.move, e.onTouchMove, n),
                s.removeEventListener(i.end, e.onTouchEnd, o),
                i.cancel && s.removeEventListener(i.cancel, e.onTouchEnd, o)
            }
            ;((t.simulateTouch && !A.ios && !A.android) ||
              (t.simulateTouch && !p.touch && A.ios)) &&
              (s.removeEventListener('mousedown', e.onTouchStart, !1),
              a.removeEventListener('mousemove', e.onTouchMove, n),
              a.removeEventListener('mouseup', e.onTouchEnd, !1))
          }
          ;(t.preventClicks || t.preventClicksPropagation) &&
            s.removeEventListener('click', e.onClick, !0),
            t.cssMode && r.removeEventListener('scroll', e.onScroll),
            e.off(
              A.ios || A.android
                ? 'resize orientationchange observerUpdate'
                : 'resize observerUpdate',
              N,
            )
        },
      },
      breakpoints: {
        setBreakpoint: function () {
          var e = this,
            t = e.activeIndex,
            a = e.initialized,
            i = e.loopedSlides
          void 0 === i && (i = 0)
          var s = e.params,
            r = e.$el,
            n = s.breakpoints
          if (n && (!n || 0 !== Object.keys(n).length)) {
            var o = e.getBreakpoint(n)
            if (o && e.currentBreakpoint !== o) {
              var l = o in n ? n[o] : void 0
              l &&
                [
                  'slidesPerView',
                  'spaceBetween',
                  'slidesPerGroup',
                  'slidesPerGroupSkip',
                  'slidesPerColumn',
                ].forEach(function (e) {
                  var t = l[e]
                  void 0 !== t &&
                    (l[e] =
                      'slidesPerView' !== e || ('AUTO' !== t && 'auto' !== t)
                        ? 'slidesPerView' === e
                          ? parseFloat(t)
                          : parseInt(t, 10)
                        : 'auto')
                })
              var p = l || e.originalParams,
                c = s.slidesPerColumn > 1,
                u = p.slidesPerColumn > 1
              c && !u
                ? r.removeClass(
                    s.containerModifierClass +
                      'multirow ' +
                      s.containerModifierClass +
                      'multirow-column',
                  )
                : !c &&
                  u &&
                  (r.addClass(s.containerModifierClass + 'multirow'),
                  'column' === p.slidesPerColumnFill &&
                    r.addClass(s.containerModifierClass + 'multirow-column'))
              var h = p.direction && p.direction !== s.direction,
                v = s.loop && (p.slidesPerView !== s.slidesPerView || h)
              h && a && e.changeDirection(),
                d.extend(e.params, p),
                d.extend(e, {
                  allowTouchMove: e.params.allowTouchMove,
                  allowSlideNext: e.params.allowSlideNext,
                  allowSlidePrev: e.params.allowSlidePrev,
                }),
                (e.currentBreakpoint = o),
                v &&
                  a &&
                  (e.loopDestroy(),
                  e.loopCreate(),
                  e.updateSlides(),
                  e.slideTo(t - i + e.loopedSlides, 0, !1)),
                e.emit('breakpoint', p)
            }
          }
        },
        getBreakpoint: function (e) {
          if (e) {
            var t = !1,
              a = Object.keys(e).map(function (e) {
                if ('string' == typeof e && 0 === e.indexOf('@')) {
                  var t = parseFloat(e.substr(1))
                  return { value: s.innerHeight * t, point: e }
                }
                return { value: e, point: e }
              })
            a.sort(function (e, t) {
              return parseInt(e.value, 10) - parseInt(t.value, 10)
            })
            for (var i = 0; i < a.length; i += 1) {
              var r = a[i],
                n = r.point
              r.value <= s.innerWidth && (t = n)
            }
            return t || 'max'
          }
        },
      },
      checkOverflow: {
        checkOverflow: function () {
          var e = this,
            t = e.params,
            a = e.isLocked,
            i =
              e.slides.length > 0 &&
              t.slidesOffsetBefore +
                t.spaceBetween * (e.slides.length - 1) +
                e.slides[0].offsetWidth * e.slides.length
          t.slidesOffsetBefore && t.slidesOffsetAfter && i
            ? (e.isLocked = i <= e.size)
            : (e.isLocked = 1 === e.snapGrid.length),
            (e.allowSlideNext = !e.isLocked),
            (e.allowSlidePrev = !e.isLocked),
            a !== e.isLocked && e.emit(e.isLocked ? 'lock' : 'unlock'),
            a &&
              a !== e.isLocked &&
              ((e.isEnd = !1), e.navigation && e.navigation.update())
        },
      },
      classes: {
        addClasses: function () {
          var e = this,
            t = e.classNames,
            a = e.params,
            i = e.rtl,
            s = e.$el,
            r = []
          r.push('initialized'),
            r.push(a.direction),
            a.freeMode && r.push('free-mode'),
            a.autoHeight && r.push('autoheight'),
            i && r.push('rtl'),
            a.slidesPerColumn > 1 &&
              (r.push('multirow'),
              'column' === a.slidesPerColumnFill && r.push('multirow-column')),
            A.android && r.push('android'),
            A.ios && r.push('ios'),
            a.cssMode && r.push('css-mode'),
            r.forEach(function (e) {
              t.push(a.containerModifierClass + e)
            }),
            s.addClass(t.join(' '))
        },
        removeClasses: function () {
          var e = this.$el,
            t = this.classNames
          e.removeClass(t.join(' '))
        },
      },
      images: {
        loadImage: function (e, t, a, i, r, o) {
          var l
          function d() {
            o && o()
          }
          n(e).parent('picture')[0] || (e.complete && r)
            ? d()
            : t
            ? (((l = new s.Image()).onload = d),
              (l.onerror = d),
              i && (l.sizes = i),
              a && (l.srcset = a),
              t && (l.src = t))
            : d()
        },
        preloadImages: function () {
          var e = this
          function t() {
            null != e &&
              e &&
              !e.destroyed &&
              (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
              e.imagesLoaded === e.imagesToLoad.length &&
                (e.params.updateOnImagesReady && e.update(),
                e.emit('imagesReady')))
          }
          e.imagesToLoad = e.$el.find('img')
          for (var a = 0; a < e.imagesToLoad.length; a += 1) {
            var i = e.imagesToLoad[a]
            e.loadImage(
              i,
              i.currentSrc || i.getAttribute('src'),
              i.srcset || i.getAttribute('srcset'),
              i.sizes || i.getAttribute('sizes'),
              !0,
              t,
            )
          }
        },
      },
    },
    q = {},
    j = (function (e) {
      function t() {
        for (var a, i, s, r = [], o = arguments.length; o--; )
          r[o] = arguments[o]
        1 === r.length && r[0].constructor && r[0].constructor === Object
          ? (s = r[0])
          : ((i = (a = r)[0]), (s = a[1])),
          s || (s = {}),
          (s = d.extend({}, s)),
          i && !s.el && (s.el = i),
          e.call(this, s),
          Object.keys(R).forEach(function (e) {
            Object.keys(R[e]).forEach(function (a) {
              t.prototype[a] || (t.prototype[a] = R[e][a])
            })
          })
        var l = this
        void 0 === l.modules && (l.modules = {}),
          Object.keys(l.modules).forEach(function (e) {
            var t = l.modules[e]
            if (t.params) {
              var a = Object.keys(t.params)[0],
                i = t.params[a]
              if ('object' != typeof i || null === i) return
              if (!(a in s) || !('enabled' in i)) return
              !0 === s[a] && (s[a] = { enabled: !0 }),
                'object' != typeof s[a] ||
                  'enabled' in s[a] ||
                  (s[a].enabled = !0),
                s[a] || (s[a] = { enabled: !1 })
            }
          })
        var c = d.extend({}, W)
        l.useModulesParams(c),
          (l.params = d.extend({}, c, q, s)),
          (l.originalParams = d.extend({}, l.params)),
          (l.passedParams = d.extend({}, s)),
          (l.$ = n)
        var u = n(l.params.el)
        if ((i = u[0])) {
          if (u.length > 1) {
            var h = []
            return (
              u.each(function (e, a) {
                var i = d.extend({}, s, { el: a })
                h.push(new t(i))
              }),
              h
            )
          }
          var v, f, m
          return (
            (i.swiper = l),
            u.data('swiper', l),
            i && i.shadowRoot && i.shadowRoot.querySelector
              ? ((v = n(
                  i.shadowRoot.querySelector('.' + l.params.wrapperClass),
                )).children = function (e) {
                  return u.children(e)
                })
              : (v = u.children('.' + l.params.wrapperClass)),
            d.extend(l, {
              $el: u,
              el: i,
              $wrapperEl: v,
              wrapperEl: v[0],
              classNames: [],
              slides: n(),
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal: function () {
                return 'horizontal' === l.params.direction
              },
              isVertical: function () {
                return 'vertical' === l.params.direction
              },
              rtl:
                'rtl' === i.dir.toLowerCase() || 'rtl' === u.css('direction'),
              rtlTranslate:
                'horizontal' === l.params.direction &&
                ('rtl' === i.dir.toLowerCase() || 'rtl' === u.css('direction')),
              wrongRTL: '-webkit-box' === v.css('display'),
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              allowSlideNext: l.params.allowSlideNext,
              allowSlidePrev: l.params.allowSlidePrev,
              touchEvents:
                ((f = ['touchstart', 'touchmove', 'touchend', 'touchcancel']),
                (m = ['mousedown', 'mousemove', 'mouseup']),
                p.pointerEvents &&
                  (m = ['pointerdown', 'pointermove', 'pointerup']),
                (l.touchEventsTouch = {
                  start: f[0],
                  move: f[1],
                  end: f[2],
                  cancel: f[3],
                }),
                (l.touchEventsDesktop = { start: m[0], move: m[1], end: m[2] }),
                p.touch || !l.params.simulateTouch
                  ? l.touchEventsTouch
                  : l.touchEventsDesktop),
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                formElements:
                  'input, select, option, textarea, button, video, label',
                lastClickTime: d.now(),
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                isTouchEvent: void 0,
                startMoving: void 0,
              },
              allowClick: !0,
              allowTouchMove: l.params.allowTouchMove,
              touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0,
              },
              imagesToLoad: [],
              imagesLoaded: 0,
            }),
            l.useModules(),
            l.params.init && l.init(),
            l
          )
        }
      }
      e && (t.__proto__ = e),
        (t.prototype = Object.create(e && e.prototype)),
        (t.prototype.constructor = t)
      var a = {
        extendedDefaults: { configurable: !0 },
        defaults: { configurable: !0 },
        Class: { configurable: !0 },
        $: { configurable: !0 },
      }
      return (
        (t.prototype.slidesPerViewDynamic = function () {
          var e = this,
            t = e.params,
            a = e.slides,
            i = e.slidesGrid,
            s = e.size,
            r = e.activeIndex,
            n = 1
          if (t.centeredSlides) {
            for (
              var o, l = a[r].swiperSlideSize, d = r + 1;
              d < a.length;
              d += 1
            )
              a[d] &&
                !o &&
                ((n += 1), (l += a[d].swiperSlideSize) > s && (o = !0))
            for (var p = r - 1; p >= 0; p -= 1)
              a[p] &&
                !o &&
                ((n += 1), (l += a[p].swiperSlideSize) > s && (o = !0))
          } else
            for (var c = r + 1; c < a.length; c += 1)
              i[c] - i[r] < s && (n += 1)
          return n
        }),
        (t.prototype.update = function () {
          var e = this
          if (e && !e.destroyed) {
            var t = e.snapGrid,
              a = e.params
            a.breakpoints && e.setBreakpoint(),
              e.updateSize(),
              e.updateSlides(),
              e.updateProgress(),
              e.updateSlidesClasses(),
              e.params.freeMode
                ? (i(), e.params.autoHeight && e.updateAutoHeight())
                : (('auto' === e.params.slidesPerView ||
                    e.params.slidesPerView > 1) &&
                  e.isEnd &&
                  !e.params.centeredSlides
                    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                    : e.slideTo(e.activeIndex, 0, !1, !0)) || i(),
              a.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
              e.emit('update')
          }
          function i() {
            var t = e.rtlTranslate ? -1 * e.translate : e.translate,
              a = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate())
            e.setTranslate(a), e.updateActiveIndex(), e.updateSlidesClasses()
          }
        }),
        (t.prototype.changeDirection = function (e, t) {
          void 0 === t && (t = !0)
          var a = this,
            i = a.params.direction
          return (
            e || (e = 'horizontal' === i ? 'vertical' : 'horizontal'),
            e === i ||
              ('horizontal' !== e && 'vertical' !== e) ||
              (a.$el
                .removeClass('' + a.params.containerModifierClass + i)
                .addClass('' + a.params.containerModifierClass + e),
              (a.params.direction = e),
              a.slides.each(function (t, a) {
                'vertical' === e ? (a.style.width = '') : (a.style.height = '')
              }),
              a.emit('changeDirection'),
              t && a.update()),
            a
          )
        }),
        (t.prototype.init = function () {
          var e = this
          e.initialized ||
            (e.emit('beforeInit'),
            e.params.breakpoints && e.setBreakpoint(),
            e.addClasses(),
            e.params.loop && e.loopCreate(),
            e.updateSize(),
            e.updateSlides(),
            e.params.watchOverflow && e.checkOverflow(),
            e.params.grabCursor && e.setGrabCursor(),
            e.params.preloadImages && e.preloadImages(),
            e.params.loop
              ? e.slideTo(
                  e.params.initialSlide + e.loopedSlides,
                  0,
                  e.params.runCallbacksOnInit,
                )
              : e.slideTo(
                  e.params.initialSlide,
                  0,
                  e.params.runCallbacksOnInit,
                ),
            e.attachEvents(),
            (e.initialized = !0),
            e.emit('init'))
        }),
        (t.prototype.destroy = function (e, t) {
          void 0 === e && (e = !0), void 0 === t && (t = !0)
          var a = this,
            i = a.params,
            s = a.$el,
            r = a.$wrapperEl,
            n = a.slides
          return (
            void 0 === a.params ||
              a.destroyed ||
              (a.emit('beforeDestroy'),
              (a.initialized = !1),
              a.detachEvents(),
              i.loop && a.loopDestroy(),
              t &&
                (a.removeClasses(),
                s.removeAttr('style'),
                r.removeAttr('style'),
                n &&
                  n.length &&
                  n
                    .removeClass(
                      [
                        i.slideVisibleClass,
                        i.slideActiveClass,
                        i.slideNextClass,
                        i.slidePrevClass,
                      ].join(' '),
                    )
                    .removeAttr('style')
                    .removeAttr('data-swiper-slide-index')),
              a.emit('destroy'),
              Object.keys(a.eventsListeners).forEach(function (e) {
                a.off(e)
              }),
              !1 !== e &&
                ((a.$el[0].swiper = null),
                a.$el.data('swiper', null),
                d.deleteProps(a)),
              (a.destroyed = !0)),
            null
          )
        }),
        (t.extendDefaults = function (e) {
          d.extend(q, e)
        }),
        (a.extendedDefaults.get = function () {
          return q
        }),
        (a.defaults.get = function () {
          return W
        }),
        (a.Class.get = function () {
          return e
        }),
        (a.$.get = function () {
          return n
        }),
        Object.defineProperties(t, a),
        t
      )
    })(c),
    K = { name: 'device', proto: { device: A }, static: { device: A } },
    U = { name: 'support', proto: { support: p }, static: { support: p } },
    _ = {
      isEdge: !!s.navigator.userAgent.match(/Edge/g),
      isSafari: (function () {
        var e = s.navigator.userAgent.toLowerCase()
        return (
          e.indexOf('safari') >= 0 &&
          e.indexOf('chrome') < 0 &&
          e.indexOf('android') < 0
        )
      })(),
      isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
        s.navigator.userAgent,
      ),
    },
    Z = { name: 'browser', proto: { browser: _ }, static: { browser: _ } },
    Q = {
      name: 'resize',
      create: function () {
        var e = this
        d.extend(e, {
          resize: {
            resizeHandler: function () {
              e &&
                !e.destroyed &&
                e.initialized &&
                (e.emit('beforeResize'), e.emit('resize'))
            },
            orientationChangeHandler: function () {
              e && !e.destroyed && e.initialized && e.emit('orientationchange')
            },
          },
        })
      },
      on: {
        init: function () {
          s.addEventListener('resize', this.resize.resizeHandler),
            s.addEventListener(
              'orientationchange',
              this.resize.orientationChangeHandler,
            )
        },
        destroy: function () {
          s.removeEventListener('resize', this.resize.resizeHandler),
            s.removeEventListener(
              'orientationchange',
              this.resize.orientationChangeHandler,
            )
        },
      },
    },
    J = {
      func: s.MutationObserver || s.WebkitMutationObserver,
      attach: function (e, t) {
        void 0 === t && (t = {})
        var a = this,
          i = new (0, J.func)(function (e) {
            if (1 !== e.length) {
              var t = function () {
                a.emit('observerUpdate', e[0])
              }
              s.requestAnimationFrame
                ? s.requestAnimationFrame(t)
                : s.setTimeout(t, 0)
            } else a.emit('observerUpdate', e[0])
          })
        i.observe(e, {
          attributes: void 0 === t.attributes || t.attributes,
          childList: void 0 === t.childList || t.childList,
          characterData: void 0 === t.characterData || t.characterData,
        }),
          a.observer.observers.push(i)
      },
      init: function () {
        var e = this
        if (p.observer && e.params.observer) {
          if (e.params.observeParents)
            for (var t = e.$el.parents(), a = 0; a < t.length; a += 1)
              e.observer.attach(t[a])
          e.observer.attach(e.$el[0], {
            childList: e.params.observeSlideChildren,
          }),
            e.observer.attach(e.$wrapperEl[0], { attributes: !1 })
        }
      },
      destroy: function () {
        this.observer.observers.forEach(function (e) {
          e.disconnect()
        }),
          (this.observer.observers = [])
      },
    },
    ee = {
      name: 'observer',
      params: { observer: !1, observeParents: !1, observeSlideChildren: !1 },
      create: function () {
        var e = this
        d.extend(e, {
          observer: {
            init: J.init.bind(e),
            attach: J.attach.bind(e),
            destroy: J.destroy.bind(e),
            observers: [],
          },
        })
      },
      on: {
        init: function () {
          this.observer.init()
        },
        destroy: function () {
          this.observer.destroy()
        },
      },
    },
    te = {
      update: function (e) {
        var t = this,
          a = t.params,
          i = a.slidesPerView,
          s = a.slidesPerGroup,
          r = a.centeredSlides,
          n = t.params.virtual,
          o = n.addSlidesBefore,
          l = n.addSlidesAfter,
          p = t.virtual,
          c = p.from,
          u = p.to,
          h = p.slides,
          v = p.slidesGrid,
          f = p.renderSlide,
          m = p.offset
        t.updateActiveIndex()
        var g,
          b,
          w,
          y = t.activeIndex || 0
        ;(g = t.rtlTranslate ? 'right' : t.isHorizontal() ? 'left' : 'top'),
          r
            ? ((b = Math.floor(i / 2) + s + o), (w = Math.floor(i / 2) + s + l))
            : ((b = i + (s - 1) + o), (w = s + l))
        var x = Math.max((y || 0) - w, 0),
          E = Math.min((y || 0) + b, h.length - 1),
          T = (t.slidesGrid[x] || 0) - (t.slidesGrid[0] || 0)
        function S() {
          t.updateSlides(),
            t.updateProgress(),
            t.updateSlidesClasses(),
            t.lazy && t.params.lazy.enabled && t.lazy.load()
        }
        if (
          (d.extend(t.virtual, {
            from: x,
            to: E,
            offset: T,
            slidesGrid: t.slidesGrid,
          }),
          c === x && u === E && !e)
        )
          return (
            t.slidesGrid !== v && T !== m && t.slides.css(g, T + 'px'),
            void t.updateProgress()
          )
        if (t.params.virtual.renderExternal)
          return (
            t.params.virtual.renderExternal.call(t, {
              offset: T,
              from: x,
              to: E,
              slides: (function () {
                for (var e = [], t = x; t <= E; t += 1) e.push(h[t])
                return e
              })(),
            }),
            void S()
          )
        var C = [],
          M = []
        if (e) t.$wrapperEl.find('.' + t.params.slideClass).remove()
        else
          for (var P = c; P <= u; P += 1)
            (P < x || P > E) &&
              t.$wrapperEl
                .find(
                  '.' +
                    t.params.slideClass +
                    '[data-swiper-slide-index="' +
                    P +
                    '"]',
                )
                .remove()
        for (var z = 0; z < h.length; z += 1)
          z >= x &&
            z <= E &&
            (void 0 === u || e
              ? M.push(z)
              : (z > u && M.push(z), z < c && C.push(z)))
        M.forEach(function (e) {
          t.$wrapperEl.append(f(h[e], e))
        }),
          C.sort(function (e, t) {
            return t - e
          }).forEach(function (e) {
            t.$wrapperEl.prepend(f(h[e], e))
          }),
          t.$wrapperEl.children('.swiper-slide').css(g, T + 'px'),
          S()
      },
      renderSlide: function (e, t) {
        var a = this,
          i = a.params.virtual
        if (i.cache && a.virtual.cache[t]) return a.virtual.cache[t]
        var s = i.renderSlide
          ? n(i.renderSlide.call(a, e, t))
          : n(
              '<div class="' +
                a.params.slideClass +
                '" data-swiper-slide-index="' +
                t +
                '">' +
                e +
                '</div>',
            )
        return (
          s.attr('data-swiper-slide-index') ||
            s.attr('data-swiper-slide-index', t),
          i.cache && (a.virtual.cache[t] = s),
          s
        )
      },
      appendSlide: function (e) {
        var t = this
        if ('object' == typeof e && 'length' in e)
          for (var a = 0; a < e.length; a += 1)
            e[a] && t.virtual.slides.push(e[a])
        else t.virtual.slides.push(e)
        t.virtual.update(!0)
      },
      prependSlide: function (e) {
        var t = this,
          a = t.activeIndex,
          i = a + 1,
          s = 1
        if (Array.isArray(e)) {
          for (var r = 0; r < e.length; r += 1)
            e[r] && t.virtual.slides.unshift(e[r])
          ;(i = a + e.length), (s = e.length)
        } else t.virtual.slides.unshift(e)
        if (t.params.virtual.cache) {
          var n = t.virtual.cache,
            o = {}
          Object.keys(n).forEach(function (e) {
            var t = n[e],
              a = t.attr('data-swiper-slide-index')
            a && t.attr('data-swiper-slide-index', parseInt(a, 10) + 1),
              (o[parseInt(e, 10) + s] = t)
          }),
            (t.virtual.cache = o)
        }
        t.virtual.update(!0), t.slideTo(i, 0)
      },
      removeSlide: function (e) {
        var t = this
        if (null != e) {
          var a = t.activeIndex
          if (Array.isArray(e))
            for (var i = e.length - 1; i >= 0; i -= 1)
              t.virtual.slides.splice(e[i], 1),
                t.params.virtual.cache && delete t.virtual.cache[e[i]],
                e[i] < a && (a -= 1),
                (a = Math.max(a, 0))
          else
            t.virtual.slides.splice(e, 1),
              t.params.virtual.cache && delete t.virtual.cache[e],
              e < a && (a -= 1),
              (a = Math.max(a, 0))
          t.virtual.update(!0), t.slideTo(a, 0)
        }
      },
      removeAllSlides: function () {
        var e = this
        ;(e.virtual.slides = []),
          e.params.virtual.cache && (e.virtual.cache = {}),
          e.virtual.update(!0),
          e.slideTo(0, 0)
      },
    },
    ae = {
      name: 'virtual',
      params: {
        virtual: {
          enabled: !1,
          slides: [],
          cache: !0,
          renderSlide: null,
          renderExternal: null,
          addSlidesBefore: 0,
          addSlidesAfter: 0,
        },
      },
      create: function () {
        var e = this
        d.extend(e, {
          virtual: {
            update: te.update.bind(e),
            appendSlide: te.appendSlide.bind(e),
            prependSlide: te.prependSlide.bind(e),
            removeSlide: te.removeSlide.bind(e),
            removeAllSlides: te.removeAllSlides.bind(e),
            renderSlide: te.renderSlide.bind(e),
            slides: e.params.virtual.slides,
            cache: {},
          },
        })
      },
      on: {
        beforeInit: function () {
          var e = this
          if (e.params.virtual.enabled) {
            e.classNames.push(e.params.containerModifierClass + 'virtual')
            var t = { watchSlidesProgress: !0 }
            d.extend(e.params, t),
              d.extend(e.originalParams, t),
              e.params.initialSlide || e.virtual.update()
          }
        },
        setTranslate: function () {
          this.params.virtual.enabled && this.virtual.update()
        },
      },
    },
    ie = {
      handle: function (e) {
        var t = this,
          i = t.rtlTranslate,
          r = e
        r.originalEvent && (r = r.originalEvent)
        var n = r.keyCode || r.charCode,
          o = t.params.keyboard.pageUpDown,
          l = o && 33 === n,
          d = o && 34 === n,
          p = 37 === n,
          c = 39 === n,
          u = 38 === n,
          h = 40 === n
        if (
          !t.allowSlideNext &&
          ((t.isHorizontal() && c) || (t.isVertical() && h) || d)
        )
          return !1
        if (
          !t.allowSlidePrev &&
          ((t.isHorizontal() && p) || (t.isVertical() && u) || l)
        )
          return !1
        if (
          !(
            r.shiftKey ||
            r.altKey ||
            r.ctrlKey ||
            r.metaKey ||
            (a.activeElement &&
              a.activeElement.nodeName &&
              ('input' === a.activeElement.nodeName.toLowerCase() ||
                'textarea' === a.activeElement.nodeName.toLowerCase()))
          )
        ) {
          if (
            t.params.keyboard.onlyInViewport &&
            (l || d || p || c || u || h)
          ) {
            var v = !1
            if (
              t.$el.parents('.' + t.params.slideClass).length > 0 &&
              0 === t.$el.parents('.' + t.params.slideActiveClass).length
            )
              return
            var f = s.innerWidth,
              m = s.innerHeight,
              g = t.$el.offset()
            i && (g.left -= t.$el[0].scrollLeft)
            for (
              var b = [
                  [g.left, g.top],
                  [g.left + t.width, g.top],
                  [g.left, g.top + t.height],
                  [g.left + t.width, g.top + t.height],
                ],
                w = 0;
              w < b.length;
              w += 1
            ) {
              var y = b[w]
              y[0] >= 0 && y[0] <= f && y[1] >= 0 && y[1] <= m && (v = !0)
            }
            if (!v) return
          }
          t.isHorizontal()
            ? ((l || d || p || c) &&
                (r.preventDefault ? r.preventDefault() : (r.returnValue = !1)),
              (((d || c) && !i) || ((l || p) && i)) && t.slideNext(),
              (((l || p) && !i) || ((d || c) && i)) && t.slidePrev())
            : ((l || d || u || h) &&
                (r.preventDefault ? r.preventDefault() : (r.returnValue = !1)),
              (d || h) && t.slideNext(),
              (l || u) && t.slidePrev()),
            t.emit('keyPress', n)
        }
      },
      enable: function () {
        var e = this
        e.keyboard.enabled ||
          (n(a).on('keydown', e.keyboard.handle), (e.keyboard.enabled = !0))
      },
      disable: function () {
        var e = this
        e.keyboard.enabled &&
          (n(a).off('keydown', e.keyboard.handle), (e.keyboard.enabled = !1))
      },
    },
    se = {
      name: 'keyboard',
      params: { keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } },
      create: function () {
        var e = this
        d.extend(e, {
          keyboard: {
            enabled: !1,
            enable: ie.enable.bind(e),
            disable: ie.disable.bind(e),
            handle: ie.handle.bind(e),
          },
        })
      },
      on: {
        init: function () {
          this.params.keyboard.enabled && this.keyboard.enable()
        },
        destroy: function () {
          this.keyboard.enabled && this.keyboard.disable()
        },
      },
    }
  var re = {
      lastScrollTime: d.now(),
      lastEventBeforeSnap: void 0,
      recentWheelEvents: [],
      event: function () {
        return s.navigator.userAgent.indexOf('firefox') > -1
          ? 'DOMMouseScroll'
          : (function () {
              var e = 'onwheel',
                t = e in a
              if (!t) {
                var i = a.createElement('div')
                i.setAttribute(e, 'return;'),
                  (t = 'function' == typeof i.onwheel)
              }
              return (
                !t &&
                  a.implementation &&
                  a.implementation.hasFeature &&
                  !0 !== a.implementation.hasFeature('', '') &&
                  (t = a.implementation.hasFeature('Events.wheel', '3.0')),
                t
              )
            })()
          ? 'wheel'
          : 'mousewheel'
      },
      normalize: function (e) {
        var t = 0,
          a = 0,
          i = 0,
          s = 0
        return (
          'detail' in e && (a = e.detail),
          'wheelDelta' in e && (a = -e.wheelDelta / 120),
          'wheelDeltaY' in e && (a = -e.wheelDeltaY / 120),
          'wheelDeltaX' in e && (t = -e.wheelDeltaX / 120),
          'axis' in e && e.axis === e.HORIZONTAL_AXIS && ((t = a), (a = 0)),
          (i = 10 * t),
          (s = 10 * a),
          'deltaY' in e && (s = e.deltaY),
          'deltaX' in e && (i = e.deltaX),
          e.shiftKey && !i && ((i = s), (s = 0)),
          (i || s) &&
            e.deltaMode &&
            (1 === e.deltaMode
              ? ((i *= 40), (s *= 40))
              : ((i *= 800), (s *= 800))),
          i && !t && (t = i < 1 ? -1 : 1),
          s && !a && (a = s < 1 ? -1 : 1),
          { spinX: t, spinY: a, pixelX: i, pixelY: s }
        )
      },
      handleMouseEnter: function () {
        this.mouseEntered = !0
      },
      handleMouseLeave: function () {
        this.mouseEntered = !1
      },
      handle: function (e) {
        var t = e,
          a = this,
          i = a.params.mousewheel
        a.params.cssMode && t.preventDefault()
        var s = a.$el
        if (
          ('container' !== a.params.mousewheel.eventsTarged &&
            (s = n(a.params.mousewheel.eventsTarged)),
          !a.mouseEntered && !s[0].contains(t.target) && !i.releaseOnEdges)
        )
          return !0
        t.originalEvent && (t = t.originalEvent)
        var r = 0,
          o = a.rtlTranslate ? -1 : 1,
          l = re.normalize(t)
        if (i.forceToAxis)
          if (a.isHorizontal()) {
            if (!(Math.abs(l.pixelX) > Math.abs(l.pixelY))) return !0
            r = -l.pixelX * o
          } else {
            if (!(Math.abs(l.pixelY) > Math.abs(l.pixelX))) return !0
            r = -l.pixelY
          }
        else
          r =
            Math.abs(l.pixelX) > Math.abs(l.pixelY) ? -l.pixelX * o : -l.pixelY
        if (0 === r) return !0
        if ((i.invert && (r = -r), a.params.freeMode)) {
          var p = {
              time: d.now(),
              delta: Math.abs(r),
              direction: Math.sign(r),
            },
            c = a.mousewheel.lastEventBeforeSnap,
            u =
              c &&
              p.time < c.time + 500 &&
              p.delta <= c.delta &&
              p.direction === c.direction
          if (!u) {
            ;(a.mousewheel.lastEventBeforeSnap = void 0),
              a.params.loop && a.loopFix()
            var h = a.getTranslate() + r * i.sensitivity,
              v = a.isBeginning,
              f = a.isEnd
            if (
              (h >= a.minTranslate() && (h = a.minTranslate()),
              h <= a.maxTranslate() && (h = a.maxTranslate()),
              a.setTransition(0),
              a.setTranslate(h),
              a.updateProgress(),
              a.updateActiveIndex(),
              a.updateSlidesClasses(),
              ((!v && a.isBeginning) || (!f && a.isEnd)) &&
                a.updateSlidesClasses(),
              a.params.freeModeSticky)
            ) {
              clearTimeout(a.mousewheel.timeout),
                (a.mousewheel.timeout = void 0)
              var m = a.mousewheel.recentWheelEvents
              m.length >= 15 && m.shift()
              var g = m.length ? m[m.length - 1] : void 0,
                b = m[0]
              if (
                (m.push(p),
                g && (p.delta > g.delta || p.direction !== g.direction))
              )
                m.splice(0)
              else if (
                m.length >= 15 &&
                p.time - b.time < 500 &&
                b.delta - p.delta >= 1 &&
                p.delta <= 6
              ) {
                var w = r > 0 ? 0.8 : 0.2
                ;(a.mousewheel.lastEventBeforeSnap = p),
                  m.splice(0),
                  (a.mousewheel.timeout = d.nextTick(function () {
                    a.slideToClosest(a.params.speed, !0, void 0, w)
                  }, 0))
              }
              a.mousewheel.timeout ||
                (a.mousewheel.timeout = d.nextTick(function () {
                  ;(a.mousewheel.lastEventBeforeSnap = p),
                    m.splice(0),
                    a.slideToClosest(a.params.speed, !0, void 0, 0.5)
                }, 500))
            }
            if (
              (u || a.emit('scroll', t),
              a.params.autoplay &&
                a.params.autoplayDisableOnInteraction &&
                a.autoplay.stop(),
              h === a.minTranslate() || h === a.maxTranslate())
            )
              return !0
          }
        } else {
          var y = {
              time: d.now(),
              delta: Math.abs(r),
              direction: Math.sign(r),
              raw: e,
            },
            x = a.mousewheel.recentWheelEvents
          x.length >= 2 && x.shift()
          var E = x.length ? x[x.length - 1] : void 0
          if (
            (x.push(y),
            E
              ? (y.direction !== E.direction ||
                  y.delta > E.delta ||
                  y.time > E.time + 150) &&
                a.mousewheel.animateSlider(y)
              : a.mousewheel.animateSlider(y),
            a.mousewheel.releaseScroll(y))
          )
            return !0
        }
        return t.preventDefault ? t.preventDefault() : (t.returnValue = !1), !1
      },
      animateSlider: function (e) {
        var t = this
        return (
          (e.delta >= 6 && d.now() - t.mousewheel.lastScrollTime < 60) ||
          (e.direction < 0
            ? (t.isEnd && !t.params.loop) ||
              t.animating ||
              (t.slideNext(), t.emit('scroll', e.raw))
            : (t.isBeginning && !t.params.loop) ||
              t.animating ||
              (t.slidePrev(), t.emit('scroll', e.raw)),
          (t.mousewheel.lastScrollTime = new s.Date().getTime()),
          !1)
        )
      },
      releaseScroll: function (e) {
        var t = this,
          a = t.params.mousewheel
        if (e.direction < 0) {
          if (t.isEnd && !t.params.loop && a.releaseOnEdges) return !0
        } else if (t.isBeginning && !t.params.loop && a.releaseOnEdges)
          return !0
        return !1
      },
      enable: function () {
        var e = this,
          t = re.event()
        if (e.params.cssMode)
          return e.wrapperEl.removeEventListener(t, e.mousewheel.handle), !0
        if (!t) return !1
        if (e.mousewheel.enabled) return !1
        var a = e.$el
        return (
          'container' !== e.params.mousewheel.eventsTarged &&
            (a = n(e.params.mousewheel.eventsTarged)),
          a.on('mouseenter', e.mousewheel.handleMouseEnter),
          a.on('mouseleave', e.mousewheel.handleMouseLeave),
          a.on(t, e.mousewheel.handle),
          (e.mousewheel.enabled = !0),
          !0
        )
      },
      disable: function () {
        var e = this,
          t = re.event()
        if (e.params.cssMode)
          return e.wrapperEl.addEventListener(t, e.mousewheel.handle), !0
        if (!t) return !1
        if (!e.mousewheel.enabled) return !1
        var a = e.$el
        return (
          'container' !== e.params.mousewheel.eventsTarged &&
            (a = n(e.params.mousewheel.eventsTarged)),
          a.off(t, e.mousewheel.handle),
          (e.mousewheel.enabled = !1),
          !0
        )
      },
    },
    ne = {
      update: function () {
        var e = this,
          t = e.params.navigation
        if (!e.params.loop) {
          var a = e.navigation,
            i = a.$nextEl,
            s = a.$prevEl
          s &&
            s.length > 0 &&
            (e.isBeginning
              ? s.addClass(t.disabledClass)
              : s.removeClass(t.disabledClass),
            s[
              e.params.watchOverflow && e.isLocked ? 'addClass' : 'removeClass'
            ](t.lockClass)),
            i &&
              i.length > 0 &&
              (e.isEnd
                ? i.addClass(t.disabledClass)
                : i.removeClass(t.disabledClass),
              i[
                e.params.watchOverflow && e.isLocked
                  ? 'addClass'
                  : 'removeClass'
              ](t.lockClass))
        }
      },
      onPrevClick: function (e) {
        var t = this
        e.preventDefault(), (t.isBeginning && !t.params.loop) || t.slidePrev()
      },
      onNextClick: function (e) {
        var t = this
        e.preventDefault(), (t.isEnd && !t.params.loop) || t.slideNext()
      },
      init: function () {
        var e,
          t,
          a = this,
          i = a.params.navigation
        ;(i.nextEl || i.prevEl) &&
          (i.nextEl &&
            ((e = n(i.nextEl)),
            a.params.uniqueNavElements &&
              'string' == typeof i.nextEl &&
              e.length > 1 &&
              1 === a.$el.find(i.nextEl).length &&
              (e = a.$el.find(i.nextEl))),
          i.prevEl &&
            ((t = n(i.prevEl)),
            a.params.uniqueNavElements &&
              'string' == typeof i.prevEl &&
              t.length > 1 &&
              1 === a.$el.find(i.prevEl).length &&
              (t = a.$el.find(i.prevEl))),
          e && e.length > 0 && e.on('click', a.navigation.onNextClick),
          t && t.length > 0 && t.on('click', a.navigation.onPrevClick),
          d.extend(a.navigation, {
            $nextEl: e,
            nextEl: e && e[0],
            $prevEl: t,
            prevEl: t && t[0],
          }))
      },
      destroy: function () {
        var e = this,
          t = e.navigation,
          a = t.$nextEl,
          i = t.$prevEl
        a &&
          a.length &&
          (a.off('click', e.navigation.onNextClick),
          a.removeClass(e.params.navigation.disabledClass)),
          i &&
            i.length &&
            (i.off('click', e.navigation.onPrevClick),
            i.removeClass(e.params.navigation.disabledClass))
      },
    },
    oe = {
      update: function () {
        var e = this,
          t = e.rtl,
          a = e.params.pagination
        if (
          a.el &&
          e.pagination.el &&
          e.pagination.$el &&
          0 !== e.pagination.$el.length
        ) {
          var i,
            s =
              e.virtual && e.params.virtual.enabled
                ? e.virtual.slides.length
                : e.slides.length,
            r = e.pagination.$el,
            o = e.params.loop
              ? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup)
              : e.snapGrid.length
          if (
            (e.params.loop
              ? ((i = Math.ceil(
                  (e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup,
                )) >
                  s - 1 - 2 * e.loopedSlides && (i -= s - 2 * e.loopedSlides),
                i > o - 1 && (i -= o),
                i < 0 && 'bullets' !== e.params.paginationType && (i = o + i))
              : (i = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0),
            'bullets' === a.type &&
              e.pagination.bullets &&
              e.pagination.bullets.length > 0)
          ) {
            var l,
              d,
              p,
              c = e.pagination.bullets
            if (
              (a.dynamicBullets &&
                ((e.pagination.bulletSize = c
                  .eq(0)
                  [e.isHorizontal() ? 'outerWidth' : 'outerHeight'](!0)),
                r.css(
                  e.isHorizontal() ? 'width' : 'height',
                  e.pagination.bulletSize * (a.dynamicMainBullets + 4) + 'px',
                ),
                a.dynamicMainBullets > 1 &&
                  void 0 !== e.previousIndex &&
                  ((e.pagination.dynamicBulletIndex += i - e.previousIndex),
                  e.pagination.dynamicBulletIndex > a.dynamicMainBullets - 1
                    ? (e.pagination.dynamicBulletIndex =
                        a.dynamicMainBullets - 1)
                    : e.pagination.dynamicBulletIndex < 0 &&
                      (e.pagination.dynamicBulletIndex = 0)),
                (l = i - e.pagination.dynamicBulletIndex),
                (p =
                  ((d = l + (Math.min(c.length, a.dynamicMainBullets) - 1)) +
                    l) /
                  2)),
              c.removeClass(
                a.bulletActiveClass +
                  ' ' +
                  a.bulletActiveClass +
                  '-next ' +
                  a.bulletActiveClass +
                  '-next-next ' +
                  a.bulletActiveClass +
                  '-prev ' +
                  a.bulletActiveClass +
                  '-prev-prev ' +
                  a.bulletActiveClass +
                  '-main',
              ),
              r.length > 1)
            )
              c.each(function (e, t) {
                var s = n(t),
                  r = s.index()
                r === i && s.addClass(a.bulletActiveClass),
                  a.dynamicBullets &&
                    (r >= l &&
                      r <= d &&
                      s.addClass(a.bulletActiveClass + '-main'),
                    r === l &&
                      s
                        .prev()
                        .addClass(a.bulletActiveClass + '-prev')
                        .prev()
                        .addClass(a.bulletActiveClass + '-prev-prev'),
                    r === d &&
                      s
                        .next()
                        .addClass(a.bulletActiveClass + '-next')
                        .next()
                        .addClass(a.bulletActiveClass + '-next-next'))
              })
            else {
              var u = c.eq(i),
                h = u.index()
              if ((u.addClass(a.bulletActiveClass), a.dynamicBullets)) {
                for (var v = c.eq(l), f = c.eq(d), m = l; m <= d; m += 1)
                  c.eq(m).addClass(a.bulletActiveClass + '-main')
                if (e.params.loop)
                  if (h >= c.length - a.dynamicMainBullets) {
                    for (var g = a.dynamicMainBullets; g >= 0; g -= 1)
                      c.eq(c.length - g).addClass(a.bulletActiveClass + '-main')
                    c.eq(c.length - a.dynamicMainBullets - 1).addClass(
                      a.bulletActiveClass + '-prev',
                    )
                  } else
                    v
                      .prev()
                      .addClass(a.bulletActiveClass + '-prev')
                      .prev()
                      .addClass(a.bulletActiveClass + '-prev-prev'),
                      f
                        .next()
                        .addClass(a.bulletActiveClass + '-next')
                        .next()
                        .addClass(a.bulletActiveClass + '-next-next')
                else
                  v
                    .prev()
                    .addClass(a.bulletActiveClass + '-prev')
                    .prev()
                    .addClass(a.bulletActiveClass + '-prev-prev'),
                    f
                      .next()
                      .addClass(a.bulletActiveClass + '-next')
                      .next()
                      .addClass(a.bulletActiveClass + '-next-next')
              }
            }
            if (a.dynamicBullets) {
              var b = Math.min(c.length, a.dynamicMainBullets + 4),
                w =
                  (e.pagination.bulletSize * b - e.pagination.bulletSize) / 2 -
                  p * e.pagination.bulletSize,
                y = t ? 'right' : 'left'
              c.css(e.isHorizontal() ? y : 'top', w + 'px')
            }
          }
          if (
            ('fraction' === a.type &&
              (r
                .find('.' + a.currentClass)
                .text(a.formatFractionCurrent(i + 1)),
              r.find('.' + a.totalClass).text(a.formatFractionTotal(o))),
            'progressbar' === a.type)
          ) {
            var x
            x = a.progressbarOpposite
              ? e.isHorizontal()
                ? 'vertical'
                : 'horizontal'
              : e.isHorizontal()
              ? 'horizontal'
              : 'vertical'
            var E = (i + 1) / o,
              T = 1,
              S = 1
            'horizontal' === x ? (T = E) : (S = E),
              r
                .find('.' + a.progressbarFillClass)
                .transform(
                  'translate3d(0,0,0) scaleX(' + T + ') scaleY(' + S + ')',
                )
                .transition(e.params.speed)
          }
          'custom' === a.type && a.renderCustom
            ? (r.html(a.renderCustom(e, i + 1, o)),
              e.emit('paginationRender', e, r[0]))
            : e.emit('paginationUpdate', e, r[0]),
            r[
              e.params.watchOverflow && e.isLocked ? 'addClass' : 'removeClass'
            ](a.lockClass)
        }
      },
      render: function () {
        var e = this,
          t = e.params.pagination
        if (
          t.el &&
          e.pagination.el &&
          e.pagination.$el &&
          0 !== e.pagination.$el.length
        ) {
          var a =
              e.virtual && e.params.virtual.enabled
                ? e.virtual.slides.length
                : e.slides.length,
            i = e.pagination.$el,
            s = ''
          if ('bullets' === t.type) {
            for (
              var r = e.params.loop
                  ? Math.ceil(
                      (a - 2 * e.loopedSlides) / e.params.slidesPerGroup,
                    )
                  : e.snapGrid.length,
                n = 0;
              n < r;
              n += 1
            )
              t.renderBullet
                ? (s += t.renderBullet.call(e, n, t.bulletClass))
                : (s +=
                    '<' +
                    t.bulletElement +
                    ' class="' +
                    t.bulletClass +
                    '"></' +
                    t.bulletElement +
                    '>')
            i.html(s), (e.pagination.bullets = i.find('.' + t.bulletClass))
          }
          'fraction' === t.type &&
            ((s = t.renderFraction
              ? t.renderFraction.call(e, t.currentClass, t.totalClass)
              : '<span class="' +
                t.currentClass +
                '"></span> / <span class="' +
                t.totalClass +
                '"></span>'),
            i.html(s)),
            'progressbar' === t.type &&
              ((s = t.renderProgressbar
                ? t.renderProgressbar.call(e, t.progressbarFillClass)
                : '<span class="' + t.progressbarFillClass + '"></span>'),
              i.html(s)),
            'custom' !== t.type &&
              e.emit('paginationRender', e.pagination.$el[0])
        }
      },
      init: function () {
        var e = this,
          t = e.params.pagination
        if (t.el) {
          var a = n(t.el)
          0 !== a.length &&
            (e.params.uniqueNavElements &&
              'string' == typeof t.el &&
              a.length > 1 &&
              (a = e.$el.find(t.el)),
            'bullets' === t.type && t.clickable && a.addClass(t.clickableClass),
            a.addClass(t.modifierClass + t.type),
            'bullets' === t.type &&
              t.dynamicBullets &&
              (a.addClass('' + t.modifierClass + t.type + '-dynamic'),
              (e.pagination.dynamicBulletIndex = 0),
              t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
            'progressbar' === t.type &&
              t.progressbarOpposite &&
              a.addClass(t.progressbarOppositeClass),
            t.clickable &&
              a.on('click', '.' + t.bulletClass, function (t) {
                t.preventDefault()
                var a = n(this).index() * e.params.slidesPerGroup
                e.params.loop && (a += e.loopedSlides), e.slideTo(a)
              }),
            d.extend(e.pagination, { $el: a, el: a[0] }))
        }
      },
      destroy: function () {
        var e = this,
          t = e.params.pagination
        if (
          t.el &&
          e.pagination.el &&
          e.pagination.$el &&
          0 !== e.pagination.$el.length
        ) {
          var a = e.pagination.$el
          a.removeClass(t.hiddenClass),
            a.removeClass(t.modifierClass + t.type),
            e.pagination.bullets &&
              e.pagination.bullets.removeClass(t.bulletActiveClass),
            t.clickable && a.off('click', '.' + t.bulletClass)
        }
      },
    },
    le = {
      setTranslate: function () {
        var e = this
        if (e.params.scrollbar.el && e.scrollbar.el) {
          var t = e.scrollbar,
            a = e.rtlTranslate,
            i = e.progress,
            s = t.dragSize,
            r = t.trackSize,
            n = t.$dragEl,
            o = t.$el,
            l = e.params.scrollbar,
            d = s,
            p = (r - s) * i
          a
            ? (p = -p) > 0
              ? ((d = s - p), (p = 0))
              : -p + s > r && (d = r + p)
            : p < 0
            ? ((d = s + p), (p = 0))
            : p + s > r && (d = r - p),
            e.isHorizontal()
              ? (n.transform('translate3d(' + p + 'px, 0, 0)'),
                (n[0].style.width = d + 'px'))
              : (n.transform('translate3d(0px, ' + p + 'px, 0)'),
                (n[0].style.height = d + 'px')),
            l.hide &&
              (clearTimeout(e.scrollbar.timeout),
              (o[0].style.opacity = 1),
              (e.scrollbar.timeout = setTimeout(function () {
                ;(o[0].style.opacity = 0), o.transition(400)
              }, 1e3)))
        }
      },
      setTransition: function (e) {
        var t = this
        t.params.scrollbar.el &&
          t.scrollbar.el &&
          t.scrollbar.$dragEl.transition(e)
      },
      updateSize: function () {
        var e = this
        if (e.params.scrollbar.el && e.scrollbar.el) {
          var t = e.scrollbar,
            a = t.$dragEl,
            i = t.$el
          ;(a[0].style.width = ''), (a[0].style.height = '')
          var s,
            r = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
            n = e.size / e.virtualSize,
            o = n * (r / e.size)
          ;(s =
            'auto' === e.params.scrollbar.dragSize
              ? r * n
              : parseInt(e.params.scrollbar.dragSize, 10)),
            e.isHorizontal()
              ? (a[0].style.width = s + 'px')
              : (a[0].style.height = s + 'px'),
            (i[0].style.display = n >= 1 ? 'none' : ''),
            e.params.scrollbar.hide && (i[0].style.opacity = 0),
            d.extend(t, {
              trackSize: r,
              divider: n,
              moveDivider: o,
              dragSize: s,
            }),
            t.$el[
              e.params.watchOverflow && e.isLocked ? 'addClass' : 'removeClass'
            ](e.params.scrollbar.lockClass)
        }
      },
      getPointerPosition: function (e) {
        return this.isHorizontal()
          ? 'touchstart' === e.type || 'touchmove' === e.type
            ? e.targetTouches[0].clientX
            : e.clientX
          : 'touchstart' === e.type || 'touchmove' === e.type
          ? e.targetTouches[0].clientY
          : e.clientY
      },
      setDragPosition: function (e) {
        var t,
          a = this,
          i = a.scrollbar,
          s = a.rtlTranslate,
          r = i.$el,
          n = i.dragSize,
          o = i.trackSize,
          l = i.dragStartPos
        ;(t =
          (i.getPointerPosition(e) -
            r.offset()[a.isHorizontal() ? 'left' : 'top'] -
            (null !== l ? l : n / 2)) /
          (o - n)),
          (t = Math.max(Math.min(t, 1), 0)),
          s && (t = 1 - t)
        var d = a.minTranslate() + (a.maxTranslate() - a.minTranslate()) * t
        a.updateProgress(d),
          a.setTranslate(d),
          a.updateActiveIndex(),
          a.updateSlidesClasses()
      },
      onDragStart: function (e) {
        var t = this,
          a = t.params.scrollbar,
          i = t.scrollbar,
          s = t.$wrapperEl,
          r = i.$el,
          n = i.$dragEl
        ;(t.scrollbar.isTouched = !0),
          (t.scrollbar.dragStartPos =
            e.target === n[0] || e.target === n
              ? i.getPointerPosition(e) -
                e.target.getBoundingClientRect()[
                  t.isHorizontal() ? 'left' : 'top'
                ]
              : null),
          e.preventDefault(),
          e.stopPropagation(),
          s.transition(100),
          n.transition(100),
          i.setDragPosition(e),
          clearTimeout(t.scrollbar.dragTimeout),
          r.transition(0),
          a.hide && r.css('opacity', 1),
          t.params.cssMode && t.$wrapperEl.css('scroll-snap-type', 'none'),
          t.emit('scrollbarDragStart', e)
      },
      onDragMove: function (e) {
        var t = this,
          a = t.scrollbar,
          i = t.$wrapperEl,
          s = a.$el,
          r = a.$dragEl
        t.scrollbar.isTouched &&
          (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
          a.setDragPosition(e),
          i.transition(0),
          s.transition(0),
          r.transition(0),
          t.emit('scrollbarDragMove', e))
      },
      onDragEnd: function (e) {
        var t = this,
          a = t.params.scrollbar,
          i = t.scrollbar,
          s = t.$wrapperEl,
          r = i.$el
        t.scrollbar.isTouched &&
          ((t.scrollbar.isTouched = !1),
          t.params.cssMode &&
            (t.$wrapperEl.css('scroll-snap-type', ''), s.transition('')),
          a.hide &&
            (clearTimeout(t.scrollbar.dragTimeout),
            (t.scrollbar.dragTimeout = d.nextTick(function () {
              r.css('opacity', 0), r.transition(400)
            }, 1e3))),
          t.emit('scrollbarDragEnd', e),
          a.snapOnRelease && t.slideToClosest())
      },
      enableDraggable: function () {
        var e = this
        if (e.params.scrollbar.el) {
          var t = e.scrollbar,
            i = e.touchEventsTouch,
            s = e.touchEventsDesktop,
            r = e.params,
            n = t.$el[0],
            o = !(!p.passiveListener || !r.passiveListeners) && {
              passive: !1,
              capture: !1,
            },
            l = !(!p.passiveListener || !r.passiveListeners) && {
              passive: !0,
              capture: !1,
            }
          p.touch
            ? (n.addEventListener(i.start, e.scrollbar.onDragStart, o),
              n.addEventListener(i.move, e.scrollbar.onDragMove, o),
              n.addEventListener(i.end, e.scrollbar.onDragEnd, l))
            : (n.addEventListener(s.start, e.scrollbar.onDragStart, o),
              a.addEventListener(s.move, e.scrollbar.onDragMove, o),
              a.addEventListener(s.end, e.scrollbar.onDragEnd, l))
        }
      },
      disableDraggable: function () {
        var e = this
        if (e.params.scrollbar.el) {
          var t = e.scrollbar,
            i = e.touchEventsTouch,
            s = e.touchEventsDesktop,
            r = e.params,
            n = t.$el[0],
            o = !(!p.passiveListener || !r.passiveListeners) && {
              passive: !1,
              capture: !1,
            },
            l = !(!p.passiveListener || !r.passiveListeners) && {
              passive: !0,
              capture: !1,
            }
          p.touch
            ? (n.removeEventListener(i.start, e.scrollbar.onDragStart, o),
              n.removeEventListener(i.move, e.scrollbar.onDragMove, o),
              n.removeEventListener(i.end, e.scrollbar.onDragEnd, l))
            : (n.removeEventListener(s.start, e.scrollbar.onDragStart, o),
              a.removeEventListener(s.move, e.scrollbar.onDragMove, o),
              a.removeEventListener(s.end, e.scrollbar.onDragEnd, l))
        }
      },
      init: function () {
        var e = this
        if (e.params.scrollbar.el) {
          var t = e.scrollbar,
            a = e.$el,
            i = e.params.scrollbar,
            s = n(i.el)
          e.params.uniqueNavElements &&
            'string' == typeof i.el &&
            s.length > 1 &&
            1 === a.find(i.el).length &&
            (s = a.find(i.el))
          var r = s.find('.' + e.params.scrollbar.dragClass)
          0 === r.length &&
            ((r = n(
              '<div class="' + e.params.scrollbar.dragClass + '"></div>',
            )),
            s.append(r)),
            d.extend(t, { $el: s, el: s[0], $dragEl: r, dragEl: r[0] }),
            i.draggable && t.enableDraggable()
        }
      },
      destroy: function () {
        this.scrollbar.disableDraggable()
      },
    },
    de = {
      setTransform: function (e, t) {
        var a = this.rtl,
          i = n(e),
          s = a ? -1 : 1,
          r = i.attr('data-swiper-parallax') || '0',
          o = i.attr('data-swiper-parallax-x'),
          l = i.attr('data-swiper-parallax-y'),
          d = i.attr('data-swiper-parallax-scale'),
          p = i.attr('data-swiper-parallax-opacity')
        if (
          (o || l
            ? ((o = o || '0'), (l = l || '0'))
            : this.isHorizontal()
            ? ((o = r), (l = '0'))
            : ((l = r), (o = '0')),
          (o =
            o.indexOf('%') >= 0
              ? parseInt(o, 10) * t * s + '%'
              : o * t * s + 'px'),
          (l = l.indexOf('%') >= 0 ? parseInt(l, 10) * t + '%' : l * t + 'px'),
          null != p)
        ) {
          var c = p - (p - 1) * (1 - Math.abs(t))
          i[0].style.opacity = c
        }
        if (null == d) i.transform('translate3d(' + o + ', ' + l + ', 0px)')
        else {
          var u = d - (d - 1) * (1 - Math.abs(t))
          i.transform('translate3d(' + o + ', ' + l + ', 0px) scale(' + u + ')')
        }
      },
      setTranslate: function () {
        var e = this,
          t = e.$el,
          a = e.slides,
          i = e.progress,
          s = e.snapGrid
        t
          .children(
            '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]',
          )
          .each(function (t, a) {
            e.parallax.setTransform(a, i)
          }),
          a.each(function (t, a) {
            var r = a.progress
            e.params.slidesPerGroup > 1 &&
              'auto' !== e.params.slidesPerView &&
              (r += Math.ceil(t / 2) - i * (s.length - 1)),
              (r = Math.min(Math.max(r, -1), 1)),
              n(a)
                .find(
                  '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]',
                )
                .each(function (t, a) {
                  e.parallax.setTransform(a, r)
                })
          })
      },
      setTransition: function (e) {
        void 0 === e && (e = this.params.speed)
        this.$el
          .find(
            '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]',
          )
          .each(function (t, a) {
            var i = n(a),
              s = parseInt(i.attr('data-swiper-parallax-duration'), 10) || e
            0 === e && (s = 0), i.transition(s)
          })
      },
    },
    pe = {
      getDistanceBetweenTouches: function (e) {
        if (e.targetTouches.length < 2) return 1
        var t = e.targetTouches[0].pageX,
          a = e.targetTouches[0].pageY,
          i = e.targetTouches[1].pageX,
          s = e.targetTouches[1].pageY
        return Math.sqrt(Math.pow(i - t, 2) + Math.pow(s - a, 2))
      },
      onGestureStart: function (e) {
        var t = this,
          a = t.params.zoom,
          i = t.zoom,
          s = i.gesture
        if (
          ((i.fakeGestureTouched = !1), (i.fakeGestureMoved = !1), !p.gestures)
        ) {
          if (
            'touchstart' !== e.type ||
            ('touchstart' === e.type && e.targetTouches.length < 2)
          )
            return
          ;(i.fakeGestureTouched = !0),
            (s.scaleStart = pe.getDistanceBetweenTouches(e))
        }
        ;(s.$slideEl && s.$slideEl.length) ||
        ((s.$slideEl = n(e.target).closest('.' + t.params.slideClass)),
        0 === s.$slideEl.length && (s.$slideEl = t.slides.eq(t.activeIndex)),
        (s.$imageEl = s.$slideEl.find(
          'img, svg, canvas, picture, .swiper-zoom-target',
        )),
        (s.$imageWrapEl = s.$imageEl.parent('.' + a.containerClass)),
        (s.maxRatio = s.$imageWrapEl.attr('data-swiper-zoom') || a.maxRatio),
        0 !== s.$imageWrapEl.length)
          ? (s.$imageEl && s.$imageEl.transition(0), (t.zoom.isScaling = !0))
          : (s.$imageEl = void 0)
      },
      onGestureChange: function (e) {
        var t = this.params.zoom,
          a = this.zoom,
          i = a.gesture
        if (!p.gestures) {
          if (
            'touchmove' !== e.type ||
            ('touchmove' === e.type && e.targetTouches.length < 2)
          )
            return
          ;(a.fakeGestureMoved = !0),
            (i.scaleMove = pe.getDistanceBetweenTouches(e))
        }
        i.$imageEl &&
          0 !== i.$imageEl.length &&
          ((a.scale = p.gestures
            ? e.scale * a.currentScale
            : (i.scaleMove / i.scaleStart) * a.currentScale),
          a.scale > i.maxRatio &&
            (a.scale =
              i.maxRatio - 1 + Math.pow(a.scale - i.maxRatio + 1, 0.5)),
          a.scale < t.minRatio &&
            (a.scale =
              t.minRatio + 1 - Math.pow(t.minRatio - a.scale + 1, 0.5)),
          i.$imageEl.transform('translate3d(0,0,0) scale(' + a.scale + ')'))
      },
      onGestureEnd: function (e) {
        var t = this,
          a = t.params.zoom,
          i = t.zoom,
          s = i.gesture
        if (!p.gestures) {
          if (!i.fakeGestureTouched || !i.fakeGestureMoved) return
          if (
            'touchend' !== e.type ||
            ('touchend' === e.type && e.changedTouches.length < 2 && !A.android)
          )
            return
          ;(i.fakeGestureTouched = !1), (i.fakeGestureMoved = !1)
        }
        s.$imageEl &&
          0 !== s.$imageEl.length &&
          ((i.scale = Math.max(Math.min(i.scale, s.maxRatio), a.minRatio)),
          s.$imageEl
            .transition(t.params.speed)
            .transform('translate3d(0,0,0) scale(' + i.scale + ')'),
          (i.currentScale = i.scale),
          (i.isScaling = !1),
          1 === i.scale && (s.$slideEl = void 0))
      },
      onTouchStart: function (e) {
        var t = this.zoom,
          a = t.gesture,
          i = t.image
        a.$imageEl &&
          0 !== a.$imageEl.length &&
          (i.isTouched ||
            (A.android && e.cancelable && e.preventDefault(),
            (i.isTouched = !0),
            (i.touchesStart.x =
              'touchstart' === e.type ? e.targetTouches[0].pageX : e.pageX),
            (i.touchesStart.y =
              'touchstart' === e.type ? e.targetTouches[0].pageY : e.pageY)))
      },
      onTouchMove: function (e) {
        var t = this,
          a = t.zoom,
          i = a.gesture,
          s = a.image,
          r = a.velocity
        if (
          i.$imageEl &&
          0 !== i.$imageEl.length &&
          ((t.allowClick = !1), s.isTouched && i.$slideEl)
        ) {
          s.isMoved ||
            ((s.width = i.$imageEl[0].offsetWidth),
            (s.height = i.$imageEl[0].offsetHeight),
            (s.startX = d.getTranslate(i.$imageWrapEl[0], 'x') || 0),
            (s.startY = d.getTranslate(i.$imageWrapEl[0], 'y') || 0),
            (i.slideWidth = i.$slideEl[0].offsetWidth),
            (i.slideHeight = i.$slideEl[0].offsetHeight),
            i.$imageWrapEl.transition(0),
            t.rtl && ((s.startX = -s.startX), (s.startY = -s.startY)))
          var n = s.width * a.scale,
            o = s.height * a.scale
          if (!(n < i.slideWidth && o < i.slideHeight)) {
            if (
              ((s.minX = Math.min(i.slideWidth / 2 - n / 2, 0)),
              (s.maxX = -s.minX),
              (s.minY = Math.min(i.slideHeight / 2 - o / 2, 0)),
              (s.maxY = -s.minY),
              (s.touchesCurrent.x =
                'touchmove' === e.type ? e.targetTouches[0].pageX : e.pageX),
              (s.touchesCurrent.y =
                'touchmove' === e.type ? e.targetTouches[0].pageY : e.pageY),
              !s.isMoved && !a.isScaling)
            ) {
              if (
                t.isHorizontal() &&
                ((Math.floor(s.minX) === Math.floor(s.startX) &&
                  s.touchesCurrent.x < s.touchesStart.x) ||
                  (Math.floor(s.maxX) === Math.floor(s.startX) &&
                    s.touchesCurrent.x > s.touchesStart.x))
              )
                return void (s.isTouched = !1)
              if (
                !t.isHorizontal() &&
                ((Math.floor(s.minY) === Math.floor(s.startY) &&
                  s.touchesCurrent.y < s.touchesStart.y) ||
                  (Math.floor(s.maxY) === Math.floor(s.startY) &&
                    s.touchesCurrent.y > s.touchesStart.y))
              )
                return void (s.isTouched = !1)
            }
            e.cancelable && e.preventDefault(),
              e.stopPropagation(),
              (s.isMoved = !0),
              (s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX),
              (s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY),
              s.currentX < s.minX &&
                (s.currentX =
                  s.minX + 1 - Math.pow(s.minX - s.currentX + 1, 0.8)),
              s.currentX > s.maxX &&
                (s.currentX =
                  s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, 0.8)),
              s.currentY < s.minY &&
                (s.currentY =
                  s.minY + 1 - Math.pow(s.minY - s.currentY + 1, 0.8)),
              s.currentY > s.maxY &&
                (s.currentY =
                  s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, 0.8)),
              r.prevPositionX || (r.prevPositionX = s.touchesCurrent.x),
              r.prevPositionY || (r.prevPositionY = s.touchesCurrent.y),
              r.prevTime || (r.prevTime = Date.now()),
              (r.x =
                (s.touchesCurrent.x - r.prevPositionX) /
                (Date.now() - r.prevTime) /
                2),
              (r.y =
                (s.touchesCurrent.y - r.prevPositionY) /
                (Date.now() - r.prevTime) /
                2),
              Math.abs(s.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0),
              Math.abs(s.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0),
              (r.prevPositionX = s.touchesCurrent.x),
              (r.prevPositionY = s.touchesCurrent.y),
              (r.prevTime = Date.now()),
              i.$imageWrapEl.transform(
                'translate3d(' + s.currentX + 'px, ' + s.currentY + 'px,0)',
              )
          }
        }
      },
      onTouchEnd: function () {
        var e = this.zoom,
          t = e.gesture,
          a = e.image,
          i = e.velocity
        if (t.$imageEl && 0 !== t.$imageEl.length) {
          if (!a.isTouched || !a.isMoved)
            return (a.isTouched = !1), void (a.isMoved = !1)
          ;(a.isTouched = !1), (a.isMoved = !1)
          var s = 300,
            r = 300,
            n = i.x * s,
            o = a.currentX + n,
            l = i.y * r,
            d = a.currentY + l
          0 !== i.x && (s = Math.abs((o - a.currentX) / i.x)),
            0 !== i.y && (r = Math.abs((d - a.currentY) / i.y))
          var p = Math.max(s, r)
          ;(a.currentX = o), (a.currentY = d)
          var c = a.width * e.scale,
            u = a.height * e.scale
          ;(a.minX = Math.min(t.slideWidth / 2 - c / 2, 0)),
            (a.maxX = -a.minX),
            (a.minY = Math.min(t.slideHeight / 2 - u / 2, 0)),
            (a.maxY = -a.minY),
            (a.currentX = Math.max(Math.min(a.currentX, a.maxX), a.minX)),
            (a.currentY = Math.max(Math.min(a.currentY, a.maxY), a.minY)),
            t.$imageWrapEl
              .transition(p)
              .transform(
                'translate3d(' + a.currentX + 'px, ' + a.currentY + 'px,0)',
              )
        }
      },
      onTransitionEnd: function () {
        var e = this,
          t = e.zoom,
          a = t.gesture
        a.$slideEl &&
          e.previousIndex !== e.activeIndex &&
          (a.$imageEl && a.$imageEl.transform('translate3d(0,0,0) scale(1)'),
          a.$imageWrapEl && a.$imageWrapEl.transform('translate3d(0,0,0)'),
          (t.scale = 1),
          (t.currentScale = 1),
          (a.$slideEl = void 0),
          (a.$imageEl = void 0),
          (a.$imageWrapEl = void 0))
      },
      toggle: function (e) {
        var t = this.zoom
        t.scale && 1 !== t.scale ? t.out() : t.in(e)
      },
      in: function (e) {
        var t,
          a,
          i,
          s,
          r,
          n,
          o,
          l,
          d,
          p,
          c,
          u,
          h,
          v,
          f,
          m,
          g = this,
          b = g.zoom,
          w = g.params.zoom,
          y = b.gesture,
          x = b.image
        ;(y.$slideEl ||
          (g.params.virtual && g.params.virtual.enabled && g.virtual
            ? (y.$slideEl = g.$wrapperEl.children(
                '.' + g.params.slideActiveClass,
              ))
            : (y.$slideEl = g.slides.eq(g.activeIndex)),
          (y.$imageEl = y.$slideEl.find(
            'img, svg, canvas, picture, .swiper-zoom-target',
          )),
          (y.$imageWrapEl = y.$imageEl.parent('.' + w.containerClass))),
        y.$imageEl && 0 !== y.$imageEl.length) &&
          (y.$slideEl.addClass('' + w.zoomedSlideClass),
          void 0 === x.touchesStart.x && e
            ? ((t =
                'touchend' === e.type ? e.changedTouches[0].pageX : e.pageX),
              (a = 'touchend' === e.type ? e.changedTouches[0].pageY : e.pageY))
            : ((t = x.touchesStart.x), (a = x.touchesStart.y)),
          (b.scale = y.$imageWrapEl.attr('data-swiper-zoom') || w.maxRatio),
          (b.currentScale =
            y.$imageWrapEl.attr('data-swiper-zoom') || w.maxRatio),
          e
            ? ((f = y.$slideEl[0].offsetWidth),
              (m = y.$slideEl[0].offsetHeight),
              (i = y.$slideEl.offset().left + f / 2 - t),
              (s = y.$slideEl.offset().top + m / 2 - a),
              (o = y.$imageEl[0].offsetWidth),
              (l = y.$imageEl[0].offsetHeight),
              (d = o * b.scale),
              (p = l * b.scale),
              (h = -(c = Math.min(f / 2 - d / 2, 0))),
              (v = -(u = Math.min(m / 2 - p / 2, 0))),
              (r = i * b.scale) < c && (r = c),
              r > h && (r = h),
              (n = s * b.scale) < u && (n = u),
              n > v && (n = v))
            : ((r = 0), (n = 0)),
          y.$imageWrapEl
            .transition(300)
            .transform('translate3d(' + r + 'px, ' + n + 'px,0)'),
          y.$imageEl
            .transition(300)
            .transform('translate3d(0,0,0) scale(' + b.scale + ')'))
      },
      out: function () {
        var e = this,
          t = e.zoom,
          a = e.params.zoom,
          i = t.gesture
        i.$slideEl ||
          (e.params.virtual && e.params.virtual.enabled && e.virtual
            ? (i.$slideEl = e.$wrapperEl.children(
                '.' + e.params.slideActiveClass,
              ))
            : (i.$slideEl = e.slides.eq(e.activeIndex)),
          (i.$imageEl = i.$slideEl.find(
            'img, svg, canvas, picture, .swiper-zoom-target',
          )),
          (i.$imageWrapEl = i.$imageEl.parent('.' + a.containerClass))),
          i.$imageEl &&
            0 !== i.$imageEl.length &&
            ((t.scale = 1),
            (t.currentScale = 1),
            i.$imageWrapEl.transition(300).transform('translate3d(0,0,0)'),
            i.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)'),
            i.$slideEl.removeClass('' + a.zoomedSlideClass),
            (i.$slideEl = void 0))
      },
      enable: function () {
        var e = this,
          t = e.zoom
        if (!t.enabled) {
          t.enabled = !0
          var a = !(
              'touchstart' !== e.touchEvents.start ||
              !p.passiveListener ||
              !e.params.passiveListeners
            ) && { passive: !0, capture: !1 },
            i = !p.passiveListener || { passive: !1, capture: !0 },
            s = '.' + e.params.slideClass
          p.gestures
            ? (e.$wrapperEl.on('gesturestart', s, t.onGestureStart, a),
              e.$wrapperEl.on('gesturechange', s, t.onGestureChange, a),
              e.$wrapperEl.on('gestureend', s, t.onGestureEnd, a))
            : 'touchstart' === e.touchEvents.start &&
              (e.$wrapperEl.on(e.touchEvents.start, s, t.onGestureStart, a),
              e.$wrapperEl.on(e.touchEvents.move, s, t.onGestureChange, i),
              e.$wrapperEl.on(e.touchEvents.end, s, t.onGestureEnd, a),
              e.touchEvents.cancel &&
                e.$wrapperEl.on(e.touchEvents.cancel, s, t.onGestureEnd, a)),
            e.$wrapperEl.on(
              e.touchEvents.move,
              '.' + e.params.zoom.containerClass,
              t.onTouchMove,
              i,
            )
        }
      },
      disable: function () {
        var e = this,
          t = e.zoom
        if (t.enabled) {
          e.zoom.enabled = !1
          var a = !(
              'touchstart' !== e.touchEvents.start ||
              !p.passiveListener ||
              !e.params.passiveListeners
            ) && { passive: !0, capture: !1 },
            i = !p.passiveListener || { passive: !1, capture: !0 },
            s = '.' + e.params.slideClass
          p.gestures
            ? (e.$wrapperEl.off('gesturestart', s, t.onGestureStart, a),
              e.$wrapperEl.off('gesturechange', s, t.onGestureChange, a),
              e.$wrapperEl.off('gestureend', s, t.onGestureEnd, a))
            : 'touchstart' === e.touchEvents.start &&
              (e.$wrapperEl.off(e.touchEvents.start, s, t.onGestureStart, a),
              e.$wrapperEl.off(e.touchEvents.move, s, t.onGestureChange, i),
              e.$wrapperEl.off(e.touchEvents.end, s, t.onGestureEnd, a),
              e.touchEvents.cancel &&
                e.$wrapperEl.off(e.touchEvents.cancel, s, t.onGestureEnd, a)),
            e.$wrapperEl.off(
              e.touchEvents.move,
              '.' + e.params.zoom.containerClass,
              t.onTouchMove,
              i,
            )
        }
      },
    },
    ce = {
      loadInSlide: function (e, t) {
        void 0 === t && (t = !0)
        var a = this,
          i = a.params.lazy
        if (void 0 !== e && 0 !== a.slides.length) {
          var s =
              a.virtual && a.params.virtual.enabled
                ? a.$wrapperEl.children(
                    '.' +
                      a.params.slideClass +
                      '[data-swiper-slide-index="' +
                      e +
                      '"]',
                  )
                : a.slides.eq(e),
            r = s.find(
              '.' +
                i.elementClass +
                ':not(.' +
                i.loadedClass +
                '):not(.' +
                i.loadingClass +
                ')',
            )
          !s.hasClass(i.elementClass) ||
            s.hasClass(i.loadedClass) ||
            s.hasClass(i.loadingClass) ||
            (r = r.add(s[0])),
            0 !== r.length &&
              r.each(function (e, r) {
                var o = n(r)
                o.addClass(i.loadingClass)
                var l = o.attr('data-background'),
                  d = o.attr('data-src'),
                  p = o.attr('data-srcset'),
                  c = o.attr('data-sizes'),
                  u = o.parent('picture')
                a.loadImage(o[0], d || l, p, c, !1, function () {
                  if (null != a && a && (!a || a.params) && !a.destroyed) {
                    if (
                      (l
                        ? (o.css('background-image', 'url("' + l + '")'),
                          o.removeAttr('data-background'))
                        : (p &&
                            (o.attr('srcset', p), o.removeAttr('data-srcset')),
                          c && (o.attr('sizes', c), o.removeAttr('data-sizes')),
                          u.length &&
                            u.children('source').each(function (e, t) {
                              var a = n(t)
                              a.attr('data-srcset') &&
                                (a.attr('srcset', a.attr('data-srcset')),
                                a.removeAttr('data-srcset'))
                            }),
                          d && (o.attr('src', d), o.removeAttr('data-src'))),
                      o.addClass(i.loadedClass).removeClass(i.loadingClass),
                      s.find('.' + i.preloaderClass).remove(),
                      a.params.loop && t)
                    ) {
                      var e = s.attr('data-swiper-slide-index')
                      if (s.hasClass(a.params.slideDuplicateClass)) {
                        var r = a.$wrapperEl.children(
                          '[data-swiper-slide-index="' +
                            e +
                            '"]:not(.' +
                            a.params.slideDuplicateClass +
                            ')',
                        )
                        a.lazy.loadInSlide(r.index(), !1)
                      } else {
                        var h = a.$wrapperEl.children(
                          '.' +
                            a.params.slideDuplicateClass +
                            '[data-swiper-slide-index="' +
                            e +
                            '"]',
                        )
                        a.lazy.loadInSlide(h.index(), !1)
                      }
                    }
                    a.emit('lazyImageReady', s[0], o[0]),
                      a.params.autoHeight && a.updateAutoHeight()
                  }
                }),
                  a.emit('lazyImageLoad', s[0], o[0])
              })
        }
      },
      load: function () {
        var e = this,
          t = e.$wrapperEl,
          a = e.params,
          i = e.slides,
          s = e.activeIndex,
          r = e.virtual && a.virtual.enabled,
          o = a.lazy,
          l = a.slidesPerView
        function d(e) {
          if (r) {
            if (
              t.children(
                '.' + a.slideClass + '[data-swiper-slide-index="' + e + '"]',
              ).length
            )
              return !0
          } else if (i[e]) return !0
          return !1
        }
        function p(e) {
          return r ? n(e).attr('data-swiper-slide-index') : n(e).index()
        }
        if (
          ('auto' === l && (l = 0),
          e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0),
          e.params.watchSlidesVisibility)
        )
          t.children('.' + a.slideVisibleClass).each(function (t, a) {
            var i = r ? n(a).attr('data-swiper-slide-index') : n(a).index()
            e.lazy.loadInSlide(i)
          })
        else if (l > 1)
          for (var c = s; c < s + l; c += 1) d(c) && e.lazy.loadInSlide(c)
        else e.lazy.loadInSlide(s)
        if (o.loadPrevNext)
          if (l > 1 || (o.loadPrevNextAmount && o.loadPrevNextAmount > 1)) {
            for (
              var u = o.loadPrevNextAmount,
                h = l,
                v = Math.min(s + h + Math.max(u, h), i.length),
                f = Math.max(s - Math.max(h, u), 0),
                m = s + l;
              m < v;
              m += 1
            )
              d(m) && e.lazy.loadInSlide(m)
            for (var g = f; g < s; g += 1) d(g) && e.lazy.loadInSlide(g)
          } else {
            var b = t.children('.' + a.slideNextClass)
            b.length > 0 && e.lazy.loadInSlide(p(b))
            var w = t.children('.' + a.slidePrevClass)
            w.length > 0 && e.lazy.loadInSlide(p(w))
          }
      },
    },
    ue = {
      LinearSpline: function (e, t) {
        var a,
          i,
          s,
          r,
          n,
          o = function (e, t) {
            for (i = -1, a = e.length; a - i > 1; )
              e[(s = (a + i) >> 1)] <= t ? (i = s) : (a = s)
            return a
          }
        return (
          (this.x = e),
          (this.y = t),
          (this.lastIndex = e.length - 1),
          (this.interpolate = function (e) {
            return e
              ? ((n = o(this.x, e)),
                (r = n - 1),
                ((e - this.x[r]) * (this.y[n] - this.y[r])) /
                  (this.x[n] - this.x[r]) +
                  this.y[r])
              : 0
          }),
          this
        )
      },
      getInterpolateFunction: function (e) {
        var t = this
        t.controller.spline ||
          (t.controller.spline = t.params.loop
            ? new ue.LinearSpline(t.slidesGrid, e.slidesGrid)
            : new ue.LinearSpline(t.snapGrid, e.snapGrid))
      },
      setTranslate: function (e, t) {
        var a,
          i,
          s = this,
          r = s.controller.control
        function n(e) {
          var t = s.rtlTranslate ? -s.translate : s.translate
          'slide' === s.params.controller.by &&
            (s.controller.getInterpolateFunction(e),
            (i = -s.controller.spline.interpolate(-t))),
            (i && 'container' !== s.params.controller.by) ||
              ((a =
                (e.maxTranslate() - e.minTranslate()) /
                (s.maxTranslate() - s.minTranslate())),
              (i = (t - s.minTranslate()) * a + e.minTranslate())),
            s.params.controller.inverse && (i = e.maxTranslate() - i),
            e.updateProgress(i),
            e.setTranslate(i, s),
            e.updateActiveIndex(),
            e.updateSlidesClasses()
        }
        if (Array.isArray(r))
          for (var o = 0; o < r.length; o += 1)
            r[o] !== t && r[o] instanceof j && n(r[o])
        else r instanceof j && t !== r && n(r)
      },
      setTransition: function (e, t) {
        var a,
          i = this,
          s = i.controller.control
        function r(t) {
          t.setTransition(e, i),
            0 !== e &&
              (t.transitionStart(),
              t.params.autoHeight &&
                d.nextTick(function () {
                  t.updateAutoHeight()
                }),
              t.$wrapperEl.transitionEnd(function () {
                s &&
                  (t.params.loop &&
                    'slide' === i.params.controller.by &&
                    t.loopFix(),
                  t.transitionEnd())
              }))
        }
        if (Array.isArray(s))
          for (a = 0; a < s.length; a += 1)
            s[a] !== t && s[a] instanceof j && r(s[a])
        else s instanceof j && t !== s && r(s)
      },
    },
    he = {
      makeElFocusable: function (e) {
        return e.attr('tabIndex', '0'), e
      },
      makeElNotFocusable: function (e) {
        return e.attr('tabIndex', '-1'), e
      },
      addElRole: function (e, t) {
        return e.attr('role', t), e
      },
      addElLabel: function (e, t) {
        return e.attr('aria-label', t), e
      },
      disableEl: function (e) {
        return e.attr('aria-disabled', !0), e
      },
      enableEl: function (e) {
        return e.attr('aria-disabled', !1), e
      },
      onEnterKey: function (e) {
        var t = this,
          a = t.params.a11y
        if (13 === e.keyCode) {
          var i = n(e.target)
          t.navigation &&
            t.navigation.$nextEl &&
            i.is(t.navigation.$nextEl) &&
            ((t.isEnd && !t.params.loop) || t.slideNext(),
            t.isEnd
              ? t.a11y.notify(a.lastSlideMessage)
              : t.a11y.notify(a.nextSlideMessage)),
            t.navigation &&
              t.navigation.$prevEl &&
              i.is(t.navigation.$prevEl) &&
              ((t.isBeginning && !t.params.loop) || t.slidePrev(),
              t.isBeginning
                ? t.a11y.notify(a.firstSlideMessage)
                : t.a11y.notify(a.prevSlideMessage)),
            t.pagination &&
              i.is('.' + t.params.pagination.bulletClass) &&
              i[0].click()
        }
      },
      notify: function (e) {
        var t = this.a11y.liveRegion
        0 !== t.length && (t.html(''), t.html(e))
      },
      updateNavigation: function () {
        var e = this
        if (!e.params.loop && e.navigation) {
          var t = e.navigation,
            a = t.$nextEl,
            i = t.$prevEl
          i &&
            i.length > 0 &&
            (e.isBeginning
              ? (e.a11y.disableEl(i), e.a11y.makeElNotFocusable(i))
              : (e.a11y.enableEl(i), e.a11y.makeElFocusable(i))),
            a &&
              a.length > 0 &&
              (e.isEnd
                ? (e.a11y.disableEl(a), e.a11y.makeElNotFocusable(a))
                : (e.a11y.enableEl(a), e.a11y.makeElFocusable(a)))
        }
      },
      updatePagination: function () {
        var e = this,
          t = e.params.a11y
        e.pagination &&
          e.params.pagination.clickable &&
          e.pagination.bullets &&
          e.pagination.bullets.length &&
          e.pagination.bullets.each(function (a, i) {
            var s = n(i)
            e.a11y.makeElFocusable(s),
              e.a11y.addElRole(s, 'button'),
              e.a11y.addElLabel(
                s,
                t.paginationBulletMessage.replace(
                  /\{\{index\}\}/,
                  s.index() + 1,
                ),
              )
          })
      },
      init: function () {
        var e = this
        e.$el.append(e.a11y.liveRegion)
        var t,
          a,
          i = e.params.a11y
        e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl),
          e.navigation && e.navigation.$prevEl && (a = e.navigation.$prevEl),
          t &&
            (e.a11y.makeElFocusable(t),
            e.a11y.addElRole(t, 'button'),
            e.a11y.addElLabel(t, i.nextSlideMessage),
            t.on('keydown', e.a11y.onEnterKey)),
          a &&
            (e.a11y.makeElFocusable(a),
            e.a11y.addElRole(a, 'button'),
            e.a11y.addElLabel(a, i.prevSlideMessage),
            a.on('keydown', e.a11y.onEnterKey)),
          e.pagination &&
            e.params.pagination.clickable &&
            e.pagination.bullets &&
            e.pagination.bullets.length &&
            e.pagination.$el.on(
              'keydown',
              '.' + e.params.pagination.bulletClass,
              e.a11y.onEnterKey,
            )
      },
      destroy: function () {
        var e,
          t,
          a = this
        a.a11y.liveRegion &&
          a.a11y.liveRegion.length > 0 &&
          a.a11y.liveRegion.remove(),
          a.navigation && a.navigation.$nextEl && (e = a.navigation.$nextEl),
          a.navigation && a.navigation.$prevEl && (t = a.navigation.$prevEl),
          e && e.off('keydown', a.a11y.onEnterKey),
          t && t.off('keydown', a.a11y.onEnterKey),
          a.pagination &&
            a.params.pagination.clickable &&
            a.pagination.bullets &&
            a.pagination.bullets.length &&
            a.pagination.$el.off(
              'keydown',
              '.' + a.params.pagination.bulletClass,
              a.a11y.onEnterKey,
            )
      },
    },
    ve = {
      init: function () {
        var e = this
        if (e.params.history) {
          if (!s.history || !s.history.pushState)
            return (
              (e.params.history.enabled = !1),
              void (e.params.hashNavigation.enabled = !0)
            )
          var t = e.history
          ;(t.initialized = !0),
            (t.paths = ve.getPathValues()),
            (t.paths.key || t.paths.value) &&
              (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit),
              e.params.history.replaceState ||
                s.addEventListener('popstate', e.history.setHistoryPopState))
        }
      },
      destroy: function () {
        this.params.history.replaceState ||
          s.removeEventListener('popstate', this.history.setHistoryPopState)
      },
      setHistoryPopState: function () {
        var e = this
        ;(e.history.paths = ve.getPathValues()),
          e.history.scrollToSlide(e.params.speed, e.history.paths.value, !1)
      },
      getPathValues: function () {
        var e = s.location.pathname
            .slice(1)
            .split('/')
            .filter(function (e) {
              return '' !== e
            }),
          t = e.length
        return { key: e[t - 2], value: e[t - 1] }
      },
      setHistory: function (e, t) {
        var a = this
        if (a.history.initialized && a.params.history.enabled) {
          var i = a.slides.eq(t),
            r = ve.slugify(i.attr('data-history'))
          s.location.pathname.includes(e) || (r = e + '/' + r)
          var n = s.history.state
          ;(n && n.value === r) ||
            (a.params.history.replaceState
              ? s.history.replaceState({ value: r }, null, r)
              : s.history.pushState({ value: r }, null, r))
        }
      },
      slugify: function (e) {
        return e
          .toString()
          .replace(/\s+/g, '-')
          .replace(/[^\w-]+/g, '')
          .replace(/--+/g, '-')
          .replace(/^-+/, '')
          .replace(/-+$/, '')
      },
      scrollToSlide: function (e, t, a) {
        var i = this
        if (t)
          for (var s = 0, r = i.slides.length; s < r; s += 1) {
            var n = i.slides.eq(s)
            if (
              ve.slugify(n.attr('data-history')) === t &&
              !n.hasClass(i.params.slideDuplicateClass)
            ) {
              var o = n.index()
              i.slideTo(o, e, a)
            }
          }
        else i.slideTo(0, e, a)
      },
    },
    fe = {
      onHashCange: function () {
        var e = this
        e.emit('hashChange')
        var t = a.location.hash.replace('#', '')
        if (t !== e.slides.eq(e.activeIndex).attr('data-hash')) {
          var i = e.$wrapperEl
            .children('.' + e.params.slideClass + '[data-hash="' + t + '"]')
            .index()
          if (void 0 === i) return
          e.slideTo(i)
        }
      },
      setHash: function () {
        var e = this
        if (e.hashNavigation.initialized && e.params.hashNavigation.enabled)
          if (
            e.params.hashNavigation.replaceState &&
            s.history &&
            s.history.replaceState
          )
            s.history.replaceState(
              null,
              null,
              '#' + e.slides.eq(e.activeIndex).attr('data-hash') || '',
            ),
              e.emit('hashSet')
          else {
            var t = e.slides.eq(e.activeIndex),
              i = t.attr('data-hash') || t.attr('data-history')
            ;(a.location.hash = i || ''), e.emit('hashSet')
          }
      },
      init: function () {
        var e = this
        if (
          !(
            !e.params.hashNavigation.enabled ||
            (e.params.history && e.params.history.enabled)
          )
        ) {
          e.hashNavigation.initialized = !0
          var t = a.location.hash.replace('#', '')
          if (t)
            for (var i = 0, r = e.slides.length; i < r; i += 1) {
              var o = e.slides.eq(i)
              if (
                (o.attr('data-hash') || o.attr('data-history')) === t &&
                !o.hasClass(e.params.slideDuplicateClass)
              ) {
                var l = o.index()
                e.slideTo(l, 0, e.params.runCallbacksOnInit, !0)
              }
            }
          e.params.hashNavigation.watchState &&
            n(s).on('hashchange', e.hashNavigation.onHashCange)
        }
      },
      destroy: function () {
        this.params.hashNavigation.watchState &&
          n(s).off('hashchange', this.hashNavigation.onHashCange)
      },
    },
    me = {
      run: function () {
        var e = this,
          t = e.slides.eq(e.activeIndex),
          a = e.params.autoplay.delay
        t.attr('data-swiper-autoplay') &&
          (a = t.attr('data-swiper-autoplay') || e.params.autoplay.delay),
          clearTimeout(e.autoplay.timeout),
          (e.autoplay.timeout = d.nextTick(function () {
            e.params.autoplay.reverseDirection
              ? e.params.loop
                ? (e.loopFix(),
                  e.slidePrev(e.params.speed, !0, !0),
                  e.emit('autoplay'))
                : e.isBeginning
                ? e.params.autoplay.stopOnLastSlide
                  ? e.autoplay.stop()
                  : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0),
                    e.emit('autoplay'))
                : (e.slidePrev(e.params.speed, !0, !0), e.emit('autoplay'))
              : e.params.loop
              ? (e.loopFix(),
                e.slideNext(e.params.speed, !0, !0),
                e.emit('autoplay'))
              : e.isEnd
              ? e.params.autoplay.stopOnLastSlide
                ? e.autoplay.stop()
                : (e.slideTo(0, e.params.speed, !0, !0), e.emit('autoplay'))
              : (e.slideNext(e.params.speed, !0, !0), e.emit('autoplay')),
              e.params.cssMode && e.autoplay.running && e.autoplay.run()
          }, a))
      },
      start: function () {
        var e = this
        return (
          void 0 === e.autoplay.timeout &&
          !e.autoplay.running &&
          ((e.autoplay.running = !0),
          e.emit('autoplayStart'),
          e.autoplay.run(),
          !0)
        )
      },
      stop: function () {
        var e = this
        return (
          !!e.autoplay.running &&
          void 0 !== e.autoplay.timeout &&
          (e.autoplay.timeout &&
            (clearTimeout(e.autoplay.timeout), (e.autoplay.timeout = void 0)),
          (e.autoplay.running = !1),
          e.emit('autoplayStop'),
          !0)
        )
      },
      pause: function (e) {
        var t = this
        t.autoplay.running &&
          (t.autoplay.paused ||
            (t.autoplay.timeout && clearTimeout(t.autoplay.timeout),
            (t.autoplay.paused = !0),
            0 !== e && t.params.autoplay.waitForTransition
              ? (t.$wrapperEl[0].addEventListener(
                  'transitionend',
                  t.autoplay.onTransitionEnd,
                ),
                t.$wrapperEl[0].addEventListener(
                  'webkitTransitionEnd',
                  t.autoplay.onTransitionEnd,
                ))
              : ((t.autoplay.paused = !1), t.autoplay.run())))
      },
    },
    ge = {
      setTranslate: function () {
        for (var e = this, t = e.slides, a = 0; a < t.length; a += 1) {
          var i = e.slides.eq(a),
            s = -i[0].swiperSlideOffset
          e.params.virtualTranslate || (s -= e.translate)
          var r = 0
          e.isHorizontal() || ((r = s), (s = 0))
          var n = e.params.fadeEffect.crossFade
            ? Math.max(1 - Math.abs(i[0].progress), 0)
            : 1 + Math.min(Math.max(i[0].progress, -1), 0)
          i.css({ opacity: n }).transform(
            'translate3d(' + s + 'px, ' + r + 'px, 0px)',
          )
        }
      },
      setTransition: function (e) {
        var t = this,
          a = t.slides,
          i = t.$wrapperEl
        if ((a.transition(e), t.params.virtualTranslate && 0 !== e)) {
          var s = !1
          a.transitionEnd(function () {
            if (!s && t && !t.destroyed) {
              ;(s = !0), (t.animating = !1)
              for (
                var e = ['webkitTransitionEnd', 'transitionend'], a = 0;
                a < e.length;
                a += 1
              )
                i.trigger(e[a])
            }
          })
        }
      },
    },
    be = {
      setTranslate: function () {
        var e,
          t = this,
          a = t.$el,
          i = t.$wrapperEl,
          s = t.slides,
          r = t.width,
          o = t.height,
          l = t.rtlTranslate,
          d = t.size,
          p = t.params.cubeEffect,
          c = t.isHorizontal(),
          u = t.virtual && t.params.virtual.enabled,
          h = 0
        p.shadow &&
          (c
            ? (0 === (e = i.find('.swiper-cube-shadow')).length &&
                ((e = n('<div class="swiper-cube-shadow"></div>')),
                i.append(e)),
              e.css({ height: r + 'px' }))
            : 0 === (e = a.find('.swiper-cube-shadow')).length &&
              ((e = n('<div class="swiper-cube-shadow"></div>')), a.append(e)))
        for (var v = 0; v < s.length; v += 1) {
          var f = s.eq(v),
            m = v
          u && (m = parseInt(f.attr('data-swiper-slide-index'), 10))
          var g = 90 * m,
            b = Math.floor(g / 360)
          l && ((g = -g), (b = Math.floor(-g / 360)))
          var w = Math.max(Math.min(f[0].progress, 1), -1),
            y = 0,
            x = 0,
            E = 0
          m % 4 == 0
            ? ((y = 4 * -b * d), (E = 0))
            : (m - 1) % 4 == 0
            ? ((y = 0), (E = 4 * -b * d))
            : (m - 2) % 4 == 0
            ? ((y = d + 4 * b * d), (E = d))
            : (m - 3) % 4 == 0 && ((y = -d), (E = 3 * d + 4 * d * b)),
            l && (y = -y),
            c || ((x = y), (y = 0))
          var T =
            'rotateX(' +
            (c ? 0 : -g) +
            'deg) rotateY(' +
            (c ? g : 0) +
            'deg) translate3d(' +
            y +
            'px, ' +
            x +
            'px, ' +
            E +
            'px)'
          if (
            (w <= 1 &&
              w > -1 &&
              ((h = 90 * m + 90 * w), l && (h = 90 * -m - 90 * w)),
            f.transform(T),
            p.slideShadows)
          ) {
            var S = c
                ? f.find('.swiper-slide-shadow-left')
                : f.find('.swiper-slide-shadow-top'),
              C = c
                ? f.find('.swiper-slide-shadow-right')
                : f.find('.swiper-slide-shadow-bottom')
            0 === S.length &&
              ((S = n(
                '<div class="swiper-slide-shadow-' +
                  (c ? 'left' : 'top') +
                  '"></div>',
              )),
              f.append(S)),
              0 === C.length &&
                ((C = n(
                  '<div class="swiper-slide-shadow-' +
                    (c ? 'right' : 'bottom') +
                    '"></div>',
                )),
                f.append(C)),
              S.length && (S[0].style.opacity = Math.max(-w, 0)),
              C.length && (C[0].style.opacity = Math.max(w, 0))
          }
        }
        if (
          (i.css({
            '-webkit-transform-origin': '50% 50% -' + d / 2 + 'px',
            '-moz-transform-origin': '50% 50% -' + d / 2 + 'px',
            '-ms-transform-origin': '50% 50% -' + d / 2 + 'px',
            'transform-origin': '50% 50% -' + d / 2 + 'px',
          }),
          p.shadow)
        )
          if (c)
            e.transform(
              'translate3d(0px, ' +
                (r / 2 + p.shadowOffset) +
                'px, ' +
                -r / 2 +
                'px) rotateX(90deg) rotateZ(0deg) scale(' +
                p.shadowScale +
                ')',
            )
          else {
            var M = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90),
              P =
                1.5 -
                (Math.sin((2 * M * Math.PI) / 360) / 2 +
                  Math.cos((2 * M * Math.PI) / 360) / 2),
              z = p.shadowScale,
              k = p.shadowScale / P,
              $ = p.shadowOffset
            e.transform(
              'scale3d(' +
                z +
                ', 1, ' +
                k +
                ') translate3d(0px, ' +
                (o / 2 + $) +
                'px, ' +
                -o / 2 / k +
                'px) rotateX(-90deg)',
            )
          }
        var L = _.isSafari || _.isWebView ? -d / 2 : 0
        i.transform(
          'translate3d(0px,0,' +
            L +
            'px) rotateX(' +
            (t.isHorizontal() ? 0 : h) +
            'deg) rotateY(' +
            (t.isHorizontal() ? -h : 0) +
            'deg)',
        )
      },
      setTransition: function (e) {
        var t = this,
          a = t.$el
        t.slides
          .transition(e)
          .find(
            '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left',
          )
          .transition(e),
          t.params.cubeEffect.shadow &&
            !t.isHorizontal() &&
            a.find('.swiper-cube-shadow').transition(e)
      },
    },
    we = {
      setTranslate: function () {
        for (
          var e = this, t = e.slides, a = e.rtlTranslate, i = 0;
          i < t.length;
          i += 1
        ) {
          var s = t.eq(i),
            r = s[0].progress
          e.params.flipEffect.limitRotation &&
            (r = Math.max(Math.min(s[0].progress, 1), -1))
          var o = -180 * r,
            l = 0,
            d = -s[0].swiperSlideOffset,
            p = 0
          if (
            (e.isHorizontal()
              ? a && (o = -o)
              : ((p = d), (d = 0), (l = -o), (o = 0)),
            (s[0].style.zIndex = -Math.abs(Math.round(r)) + t.length),
            e.params.flipEffect.slideShadows)
          ) {
            var c = e.isHorizontal()
                ? s.find('.swiper-slide-shadow-left')
                : s.find('.swiper-slide-shadow-top'),
              u = e.isHorizontal()
                ? s.find('.swiper-slide-shadow-right')
                : s.find('.swiper-slide-shadow-bottom')
            0 === c.length &&
              ((c = n(
                '<div class="swiper-slide-shadow-' +
                  (e.isHorizontal() ? 'left' : 'top') +
                  '"></div>',
              )),
              s.append(c)),
              0 === u.length &&
                ((u = n(
                  '<div class="swiper-slide-shadow-' +
                    (e.isHorizontal() ? 'right' : 'bottom') +
                    '"></div>',
                )),
                s.append(u)),
              c.length && (c[0].style.opacity = Math.max(-r, 0)),
              u.length && (u[0].style.opacity = Math.max(r, 0))
          }
          s.transform(
            'translate3d(' +
              d +
              'px, ' +
              p +
              'px, 0px) rotateX(' +
              l +
              'deg) rotateY(' +
              o +
              'deg)',
          )
        }
      },
      setTransition: function (e) {
        var t = this,
          a = t.slides,
          i = t.activeIndex,
          s = t.$wrapperEl
        if (
          (a
            .transition(e)
            .find(
              '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left',
            )
            .transition(e),
          t.params.virtualTranslate && 0 !== e)
        ) {
          var r = !1
          a.eq(i).transitionEnd(function () {
            if (!r && t && !t.destroyed) {
              ;(r = !0), (t.animating = !1)
              for (
                var e = ['webkitTransitionEnd', 'transitionend'], a = 0;
                a < e.length;
                a += 1
              )
                s.trigger(e[a])
            }
          })
        }
      },
    },
    ye = {
      setTranslate: function () {
        for (
          var e = this,
            t = e.width,
            a = e.height,
            i = e.slides,
            s = e.$wrapperEl,
            r = e.slidesSizesGrid,
            o = e.params.coverflowEffect,
            l = e.isHorizontal(),
            d = e.translate,
            c = l ? t / 2 - d : a / 2 - d,
            u = l ? o.rotate : -o.rotate,
            h = o.depth,
            v = 0,
            f = i.length;
          v < f;
          v += 1
        ) {
          var m = i.eq(v),
            g = r[v],
            b = ((c - m[0].swiperSlideOffset - g / 2) / g) * o.modifier,
            w = l ? u * b : 0,
            y = l ? 0 : u * b,
            x = -h * Math.abs(b),
            E = o.stretch
          'string' == typeof E &&
            -1 !== E.indexOf('%') &&
            (E = (parseFloat(o.stretch) / 100) * g)
          var T = l ? 0 : E * b,
            S = l ? E * b : 0,
            C = 1 - (1 - o.scale) * Math.abs(b)
          Math.abs(S) < 0.001 && (S = 0),
            Math.abs(T) < 0.001 && (T = 0),
            Math.abs(x) < 0.001 && (x = 0),
            Math.abs(w) < 0.001 && (w = 0),
            Math.abs(y) < 0.001 && (y = 0),
            Math.abs(C) < 0.001 && (C = 0)
          var M =
            'translate3d(' +
            S +
            'px,' +
            T +
            'px,' +
            x +
            'px)  rotateX(' +
            y +
            'deg) rotateY(' +
            w +
            'deg) scale(' +
            C +
            ')'
          if (
            (m.transform(M),
            (m[0].style.zIndex = 1 - Math.abs(Math.round(b))),
            o.slideShadows)
          ) {
            var P = l
                ? m.find('.swiper-slide-shadow-left')
                : m.find('.swiper-slide-shadow-top'),
              z = l
                ? m.find('.swiper-slide-shadow-right')
                : m.find('.swiper-slide-shadow-bottom')
            0 === P.length &&
              ((P = n(
                '<div class="swiper-slide-shadow-' +
                  (l ? 'left' : 'top') +
                  '"></div>',
              )),
              m.append(P)),
              0 === z.length &&
                ((z = n(
                  '<div class="swiper-slide-shadow-' +
                    (l ? 'right' : 'bottom') +
                    '"></div>',
                )),
                m.append(z)),
              P.length && (P[0].style.opacity = b > 0 ? b : 0),
              z.length && (z[0].style.opacity = -b > 0 ? -b : 0)
          }
        }
        ;(p.pointerEvents || p.prefixedPointerEvents) &&
          (s[0].style.perspectiveOrigin = c + 'px 50%')
      },
      setTransition: function (e) {
        this.slides
          .transition(e)
          .find(
            '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left',
          )
          .transition(e)
      },
    },
    xe = {
      init: function () {
        var e = this,
          t = e.params.thumbs,
          a = e.constructor
        t.swiper instanceof a
          ? ((e.thumbs.swiper = t.swiper),
            d.extend(e.thumbs.swiper.originalParams, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            }),
            d.extend(e.thumbs.swiper.params, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            }))
          : d.isObject(t.swiper) &&
            ((e.thumbs.swiper = new a(
              d.extend({}, t.swiper, {
                watchSlidesVisibility: !0,
                watchSlidesProgress: !0,
                slideToClickedSlide: !1,
              }),
            )),
            (e.thumbs.swiperCreated = !0)),
          e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),
          e.thumbs.swiper.on('tap', e.thumbs.onThumbClick)
      },
      onThumbClick: function () {
        var e = this,
          t = e.thumbs.swiper
        if (t) {
          var a = t.clickedIndex,
            i = t.clickedSlide
          if (
            !(
              (i && n(i).hasClass(e.params.thumbs.slideThumbActiveClass)) ||
              null == a
            )
          ) {
            var s
            if (
              ((s = t.params.loop
                ? parseInt(
                    n(t.clickedSlide).attr('data-swiper-slide-index'),
                    10,
                  )
                : a),
              e.params.loop)
            ) {
              var r = e.activeIndex
              e.slides.eq(r).hasClass(e.params.slideDuplicateClass) &&
                (e.loopFix(),
                (e._clientLeft = e.$wrapperEl[0].clientLeft),
                (r = e.activeIndex))
              var o = e.slides
                  .eq(r)
                  .prevAll('[data-swiper-slide-index="' + s + '"]')
                  .eq(0)
                  .index(),
                l = e.slides
                  .eq(r)
                  .nextAll('[data-swiper-slide-index="' + s + '"]')
                  .eq(0)
                  .index()
              s = void 0 === o ? l : void 0 === l ? o : l - r < r - o ? l : o
            }
            e.slideTo(s)
          }
        }
      },
      update: function (e) {
        var t = this,
          a = t.thumbs.swiper
        if (a) {
          var i =
              'auto' === a.params.slidesPerView
                ? a.slidesPerViewDynamic()
                : a.params.slidesPerView,
            s = t.params.thumbs.autoScrollOffset,
            r = s && !a.params.loop
          if (t.realIndex !== a.realIndex || r) {
            var n,
              o,
              l = a.activeIndex
            if (a.params.loop) {
              a.slides.eq(l).hasClass(a.params.slideDuplicateClass) &&
                (a.loopFix(),
                (a._clientLeft = a.$wrapperEl[0].clientLeft),
                (l = a.activeIndex))
              var d = a.slides
                  .eq(l)
                  .prevAll('[data-swiper-slide-index="' + t.realIndex + '"]')
                  .eq(0)
                  .index(),
                p = a.slides
                  .eq(l)
                  .nextAll('[data-swiper-slide-index="' + t.realIndex + '"]')
                  .eq(0)
                  .index()
              ;(n =
                void 0 === d
                  ? p
                  : void 0 === p
                  ? d
                  : p - l == l - d
                  ? l
                  : p - l < l - d
                  ? p
                  : d),
                (o = t.activeIndex > t.previousIndex ? 'next' : 'prev')
            } else o = (n = t.realIndex) > t.previousIndex ? 'next' : 'prev'
            r && (n += 'next' === o ? s : -1 * s),
              a.visibleSlidesIndexes &&
                a.visibleSlidesIndexes.indexOf(n) < 0 &&
                (a.params.centeredSlides
                  ? (n =
                      n > l
                        ? n - Math.floor(i / 2) + 1
                        : n + Math.floor(i / 2) - 1)
                  : n > l && (n = n - i + 1),
                a.slideTo(n, e ? 0 : void 0))
          }
          var c = 1,
            u = t.params.thumbs.slideThumbActiveClass
          if (
            (t.params.slidesPerView > 1 &&
              !t.params.centeredSlides &&
              (c = t.params.slidesPerView),
            t.params.thumbs.multipleActiveThumbs || (c = 1),
            (c = Math.floor(c)),
            a.slides.removeClass(u),
            a.params.loop || (a.params.virtual && a.params.virtual.enabled))
          )
            for (var h = 0; h < c; h += 1)
              a.$wrapperEl
                .children(
                  '[data-swiper-slide-index="' + (t.realIndex + h) + '"]',
                )
                .addClass(u)
          else
            for (var v = 0; v < c; v += 1)
              a.slides.eq(t.realIndex + v).addClass(u)
        }
      },
    },
    Ee = [
      K,
      U,
      Z,
      Q,
      ee,
      ae,
      se,
      {
        name: 'mousewheel',
        params: {
          mousewheel: {
            enabled: !1,
            releaseOnEdges: !1,
            invert: !1,
            forceToAxis: !1,
            sensitivity: 1,
            eventsTarged: 'container',
          },
        },
        create: function () {
          var e = this
          d.extend(e, {
            mousewheel: {
              enabled: !1,
              enable: re.enable.bind(e),
              disable: re.disable.bind(e),
              handle: re.handle.bind(e),
              handleMouseEnter: re.handleMouseEnter.bind(e),
              handleMouseLeave: re.handleMouseLeave.bind(e),
              animateSlider: re.animateSlider.bind(e),
              releaseScroll: re.releaseScroll.bind(e),
              lastScrollTime: d.now(),
              lastEventBeforeSnap: void 0,
              recentWheelEvents: [],
            },
          })
        },
        on: {
          init: function () {
            var e = this
            !e.params.mousewheel.enabled &&
              e.params.cssMode &&
              e.mousewheel.disable(),
              e.params.mousewheel.enabled && e.mousewheel.enable()
          },
          destroy: function () {
            var e = this
            e.params.cssMode && e.mousewheel.enable(),
              e.mousewheel.enabled && e.mousewheel.disable()
          },
        },
      },
      {
        name: 'navigation',
        params: {
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: 'swiper-button-disabled',
            hiddenClass: 'swiper-button-hidden',
            lockClass: 'swiper-button-lock',
          },
        },
        create: function () {
          var e = this
          d.extend(e, {
            navigation: {
              init: ne.init.bind(e),
              update: ne.update.bind(e),
              destroy: ne.destroy.bind(e),
              onNextClick: ne.onNextClick.bind(e),
              onPrevClick: ne.onPrevClick.bind(e),
            },
          })
        },
        on: {
          init: function () {
            this.navigation.init(), this.navigation.update()
          },
          toEdge: function () {
            this.navigation.update()
          },
          fromEdge: function () {
            this.navigation.update()
          },
          destroy: function () {
            this.navigation.destroy()
          },
          click: function (e) {
            var t,
              a = this,
              i = a.navigation,
              s = i.$nextEl,
              r = i.$prevEl
            !a.params.navigation.hideOnClick ||
              n(e.target).is(r) ||
              n(e.target).is(s) ||
              (s
                ? (t = s.hasClass(a.params.navigation.hiddenClass))
                : r && (t = r.hasClass(a.params.navigation.hiddenClass)),
              !0 === t
                ? a.emit('navigationShow', a)
                : a.emit('navigationHide', a),
              s && s.toggleClass(a.params.navigation.hiddenClass),
              r && r.toggleClass(a.params.navigation.hiddenClass))
          },
        },
      },
      {
        name: 'pagination',
        params: {
          pagination: {
            el: null,
            bulletElement: 'span',
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: 'bullets',
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: function (e) {
              return e
            },
            formatFractionTotal: function (e) {
              return e
            },
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
            modifierClass: 'swiper-pagination-',
            currentClass: 'swiper-pagination-current',
            totalClass: 'swiper-pagination-total',
            hiddenClass: 'swiper-pagination-hidden',
            progressbarFillClass: 'swiper-pagination-progressbar-fill',
            progressbarOppositeClass: 'swiper-pagination-progressbar-opposite',
            clickableClass: 'swiper-pagination-clickable',
            lockClass: 'swiper-pagination-lock',
          },
        },
        create: function () {
          var e = this
          d.extend(e, {
            pagination: {
              init: oe.init.bind(e),
              render: oe.render.bind(e),
              update: oe.update.bind(e),
              destroy: oe.destroy.bind(e),
              dynamicBulletIndex: 0,
            },
          })
        },
        on: {
          init: function () {
            var e = this
            e.pagination.init(), e.pagination.render(), e.pagination.update()
          },
          activeIndexChange: function () {
            var e = this
            ;(e.params.loop || void 0 === e.snapIndex) && e.pagination.update()
          },
          snapIndexChange: function () {
            this.params.loop || this.pagination.update()
          },
          slidesLengthChange: function () {
            var e = this
            e.params.loop && (e.pagination.render(), e.pagination.update())
          },
          snapGridLengthChange: function () {
            var e = this
            e.params.loop || (e.pagination.render(), e.pagination.update())
          },
          destroy: function () {
            this.pagination.destroy()
          },
          click: function (e) {
            var t = this
            t.params.pagination.el &&
              t.params.pagination.hideOnClick &&
              t.pagination.$el.length > 0 &&
              !n(e.target).hasClass(t.params.pagination.bulletClass) &&
              (!0 === t.pagination.$el.hasClass(t.params.pagination.hiddenClass)
                ? t.emit('paginationShow', t)
                : t.emit('paginationHide', t),
              t.pagination.$el.toggleClass(t.params.pagination.hiddenClass))
          },
        },
      },
      {
        name: 'scrollbar',
        params: {
          scrollbar: {
            el: null,
            dragSize: 'auto',
            hide: !1,
            draggable: !1,
            snapOnRelease: !0,
            lockClass: 'swiper-scrollbar-lock',
            dragClass: 'swiper-scrollbar-drag',
          },
        },
        create: function () {
          var e = this
          d.extend(e, {
            scrollbar: {
              init: le.init.bind(e),
              destroy: le.destroy.bind(e),
              updateSize: le.updateSize.bind(e),
              setTranslate: le.setTranslate.bind(e),
              setTransition: le.setTransition.bind(e),
              enableDraggable: le.enableDraggable.bind(e),
              disableDraggable: le.disableDraggable.bind(e),
              setDragPosition: le.setDragPosition.bind(e),
              getPointerPosition: le.getPointerPosition.bind(e),
              onDragStart: le.onDragStart.bind(e),
              onDragMove: le.onDragMove.bind(e),
              onDragEnd: le.onDragEnd.bind(e),
              isTouched: !1,
              timeout: null,
              dragTimeout: null,
            },
          })
        },
        on: {
          init: function () {
            var e = this
            e.scrollbar.init(),
              e.scrollbar.updateSize(),
              e.scrollbar.setTranslate()
          },
          update: function () {
            this.scrollbar.updateSize()
          },
          resize: function () {
            this.scrollbar.updateSize()
          },
          observerUpdate: function () {
            this.scrollbar.updateSize()
          },
          setTranslate: function () {
            this.scrollbar.setTranslate()
          },
          setTransition: function (e) {
            this.scrollbar.setTransition(e)
          },
          destroy: function () {
            this.scrollbar.destroy()
          },
        },
      },
      {
        name: 'parallax',
        params: { parallax: { enabled: !1 } },
        create: function () {
          var e = this
          d.extend(e, {
            parallax: {
              setTransform: de.setTransform.bind(e),
              setTranslate: de.setTranslate.bind(e),
              setTransition: de.setTransition.bind(e),
            },
          })
        },
        on: {
          beforeInit: function () {
            var e = this
            e.params.parallax.enabled &&
              ((e.params.watchSlidesProgress = !0),
              (e.originalParams.watchSlidesProgress = !0))
          },
          init: function () {
            this.params.parallax.enabled && this.parallax.setTranslate()
          },
          setTranslate: function () {
            this.params.parallax.enabled && this.parallax.setTranslate()
          },
          setTransition: function (e) {
            this.params.parallax.enabled && this.parallax.setTransition(e)
          },
        },
      },
      {
        name: 'zoom',
        params: {
          zoom: {
            enabled: !1,
            maxRatio: 3,
            minRatio: 1,
            toggle: !0,
            containerClass: 'swiper-zoom-container',
            zoomedSlideClass: 'swiper-slide-zoomed',
          },
        },
        create: function () {
          var e = this,
            t = {
              enabled: !1,
              scale: 1,
              currentScale: 1,
              isScaling: !1,
              gesture: {
                $slideEl: void 0,
                slideWidth: void 0,
                slideHeight: void 0,
                $imageEl: void 0,
                $imageWrapEl: void 0,
                maxRatio: 3,
              },
              image: {
                isTouched: void 0,
                isMoved: void 0,
                currentX: void 0,
                currentY: void 0,
                minX: void 0,
                minY: void 0,
                maxX: void 0,
                maxY: void 0,
                width: void 0,
                height: void 0,
                startX: void 0,
                startY: void 0,
                touchesStart: {},
                touchesCurrent: {},
              },
              velocity: {
                x: void 0,
                y: void 0,
                prevPositionX: void 0,
                prevPositionY: void 0,
                prevTime: void 0,
              },
            }
          'onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out'
            .split(' ')
            .forEach(function (a) {
              t[a] = pe[a].bind(e)
            }),
            d.extend(e, { zoom: t })
          var a = 1
          Object.defineProperty(e.zoom, 'scale', {
            get: function () {
              return a
            },
            set: function (t) {
              if (a !== t) {
                var i = e.zoom.gesture.$imageEl
                    ? e.zoom.gesture.$imageEl[0]
                    : void 0,
                  s = e.zoom.gesture.$slideEl
                    ? e.zoom.gesture.$slideEl[0]
                    : void 0
                e.emit('zoomChange', t, i, s)
              }
              a = t
            },
          })
        },
        on: {
          init: function () {
            this.params.zoom.enabled && this.zoom.enable()
          },
          destroy: function () {
            this.zoom.disable()
          },
          touchStart: function (e) {
            this.zoom.enabled && this.zoom.onTouchStart(e)
          },
          touchEnd: function (e) {
            this.zoom.enabled && this.zoom.onTouchEnd(e)
          },
          doubleTap: function (e) {
            var t = this
            t.params.zoom.enabled &&
              t.zoom.enabled &&
              t.params.zoom.toggle &&
              t.zoom.toggle(e)
          },
          transitionEnd: function () {
            var e = this
            e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd()
          },
          slideChange: function () {
            var e = this
            e.zoom.enabled &&
              e.params.zoom.enabled &&
              e.params.cssMode &&
              e.zoom.onTransitionEnd()
          },
        },
      },
      {
        name: 'lazy',
        params: {
          lazy: {
            enabled: !1,
            loadPrevNext: !1,
            loadPrevNextAmount: 1,
            loadOnTransitionStart: !1,
            elementClass: 'swiper-lazy',
            loadingClass: 'swiper-lazy-loading',
            loadedClass: 'swiper-lazy-loaded',
            preloaderClass: 'swiper-lazy-preloader',
          },
        },
        create: function () {
          var e = this
          d.extend(e, {
            lazy: {
              initialImageLoaded: !1,
              load: ce.load.bind(e),
              loadInSlide: ce.loadInSlide.bind(e),
            },
          })
        },
        on: {
          beforeInit: function () {
            var e = this
            e.params.lazy.enabled &&
              e.params.preloadImages &&
              (e.params.preloadImages = !1)
          },
          init: function () {
            var e = this
            e.params.lazy.enabled &&
              !e.params.loop &&
              0 === e.params.initialSlide &&
              e.lazy.load()
          },
          scroll: function () {
            var e = this
            e.params.freeMode && !e.params.freeModeSticky && e.lazy.load()
          },
          resize: function () {
            this.params.lazy.enabled && this.lazy.load()
          },
          scrollbarDragMove: function () {
            this.params.lazy.enabled && this.lazy.load()
          },
          transitionStart: function () {
            var e = this
            e.params.lazy.enabled &&
              (e.params.lazy.loadOnTransitionStart ||
                (!e.params.lazy.loadOnTransitionStart &&
                  !e.lazy.initialImageLoaded)) &&
              e.lazy.load()
          },
          transitionEnd: function () {
            var e = this
            e.params.lazy.enabled &&
              !e.params.lazy.loadOnTransitionStart &&
              e.lazy.load()
          },
          slideChange: function () {
            var e = this
            e.params.lazy.enabled && e.params.cssMode && e.lazy.load()
          },
        },
      },
      {
        name: 'controller',
        params: { controller: { control: void 0, inverse: !1, by: 'slide' } },
        create: function () {
          var e = this
          d.extend(e, {
            controller: {
              control: e.params.controller.control,
              getInterpolateFunction: ue.getInterpolateFunction.bind(e),
              setTranslate: ue.setTranslate.bind(e),
              setTransition: ue.setTransition.bind(e),
            },
          })
        },
        on: {
          update: function () {
            var e = this
            e.controller.control &&
              e.controller.spline &&
              ((e.controller.spline = void 0), delete e.controller.spline)
          },
          resize: function () {
            var e = this
            e.controller.control &&
              e.controller.spline &&
              ((e.controller.spline = void 0), delete e.controller.spline)
          },
          observerUpdate: function () {
            var e = this
            e.controller.control &&
              e.controller.spline &&
              ((e.controller.spline = void 0), delete e.controller.spline)
          },
          setTranslate: function (e, t) {
            this.controller.control && this.controller.setTranslate(e, t)
          },
          setTransition: function (e, t) {
            this.controller.control && this.controller.setTransition(e, t)
          },
        },
      },
      {
        name: 'a11y',
        params: {
          a11y: {
            enabled: !0,
            notificationClass: 'swiper-notification',
            prevSlideMessage: 'Previous slide',
            nextSlideMessage: 'Next slide',
            firstSlideMessage: 'This is the first slide',
            lastSlideMessage: 'This is the last slide',
            paginationBulletMessage: 'Go to slide {{index}}',
          },
        },
        create: function () {
          var e = this
          d.extend(e, {
            a11y: {
              liveRegion: n(
                '<span class="' +
                  e.params.a11y.notificationClass +
                  '" aria-live="assertive" aria-atomic="true"></span>',
              ),
            },
          }),
            Object.keys(he).forEach(function (t) {
              e.a11y[t] = he[t].bind(e)
            })
        },
        on: {
          init: function () {
            var e = this
            e.params.a11y.enabled && (e.a11y.init(), e.a11y.updateNavigation())
          },
          toEdge: function () {
            this.params.a11y.enabled && this.a11y.updateNavigation()
          },
          fromEdge: function () {
            this.params.a11y.enabled && this.a11y.updateNavigation()
          },
          paginationUpdate: function () {
            this.params.a11y.enabled && this.a11y.updatePagination()
          },
          destroy: function () {
            this.params.a11y.enabled && this.a11y.destroy()
          },
        },
      },
      {
        name: 'history',
        params: { history: { enabled: !1, replaceState: !1, key: 'slides' } },
        create: function () {
          var e = this
          d.extend(e, {
            history: {
              init: ve.init.bind(e),
              setHistory: ve.setHistory.bind(e),
              setHistoryPopState: ve.setHistoryPopState.bind(e),
              scrollToSlide: ve.scrollToSlide.bind(e),
              destroy: ve.destroy.bind(e),
            },
          })
        },
        on: {
          init: function () {
            this.params.history.enabled && this.history.init()
          },
          destroy: function () {
            this.params.history.enabled && this.history.destroy()
          },
          transitionEnd: function () {
            var e = this
            e.history.initialized &&
              e.history.setHistory(e.params.history.key, e.activeIndex)
          },
          slideChange: function () {
            var e = this
            e.history.initialized &&
              e.params.cssMode &&
              e.history.setHistory(e.params.history.key, e.activeIndex)
          },
        },
      },
      {
        name: 'hash-navigation',
        params: {
          hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 },
        },
        create: function () {
          var e = this
          d.extend(e, {
            hashNavigation: {
              initialized: !1,
              init: fe.init.bind(e),
              destroy: fe.destroy.bind(e),
              setHash: fe.setHash.bind(e),
              onHashCange: fe.onHashCange.bind(e),
            },
          })
        },
        on: {
          init: function () {
            this.params.hashNavigation.enabled && this.hashNavigation.init()
          },
          destroy: function () {
            this.params.hashNavigation.enabled && this.hashNavigation.destroy()
          },
          transitionEnd: function () {
            this.hashNavigation.initialized && this.hashNavigation.setHash()
          },
          slideChange: function () {
            var e = this
            e.hashNavigation.initialized &&
              e.params.cssMode &&
              e.hashNavigation.setHash()
          },
        },
      },
      {
        name: 'autoplay',
        params: {
          autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !0,
            stopOnLastSlide: !1,
            reverseDirection: !1,
          },
        },
        create: function () {
          var e = this
          d.extend(e, {
            autoplay: {
              running: !1,
              paused: !1,
              run: me.run.bind(e),
              start: me.start.bind(e),
              stop: me.stop.bind(e),
              pause: me.pause.bind(e),
              onVisibilityChange: function () {
                'hidden' === document.visibilityState &&
                  e.autoplay.running &&
                  e.autoplay.pause(),
                  'visible' === document.visibilityState &&
                    e.autoplay.paused &&
                    (e.autoplay.run(), (e.autoplay.paused = !1))
              },
              onTransitionEnd: function (t) {
                e &&
                  !e.destroyed &&
                  e.$wrapperEl &&
                  t.target === this &&
                  (e.$wrapperEl[0].removeEventListener(
                    'transitionend',
                    e.autoplay.onTransitionEnd,
                  ),
                  e.$wrapperEl[0].removeEventListener(
                    'webkitTransitionEnd',
                    e.autoplay.onTransitionEnd,
                  ),
                  (e.autoplay.paused = !1),
                  e.autoplay.running ? e.autoplay.run() : e.autoplay.stop())
              },
            },
          })
        },
        on: {
          init: function () {
            var e = this
            e.params.autoplay.enabled &&
              (e.autoplay.start(),
              document.addEventListener(
                'visibilitychange',
                e.autoplay.onVisibilityChange,
              ))
          },
          beforeTransitionStart: function (e, t) {
            var a = this
            a.autoplay.running &&
              (t || !a.params.autoplay.disableOnInteraction
                ? a.autoplay.pause(e)
                : a.autoplay.stop())
          },
          sliderFirstMove: function () {
            var e = this
            e.autoplay.running &&
              (e.params.autoplay.disableOnInteraction
                ? e.autoplay.stop()
                : e.autoplay.pause())
          },
          touchEnd: function () {
            var e = this
            e.params.cssMode &&
              e.autoplay.paused &&
              !e.params.autoplay.disableOnInteraction &&
              e.autoplay.run()
          },
          destroy: function () {
            var e = this
            e.autoplay.running && e.autoplay.stop(),
              document.removeEventListener(
                'visibilitychange',
                e.autoplay.onVisibilityChange,
              )
          },
        },
      },
      {
        name: 'effect-fade',
        params: { fadeEffect: { crossFade: !1 } },
        create: function () {
          var e = this
          d.extend(e, {
            fadeEffect: {
              setTranslate: ge.setTranslate.bind(e),
              setTransition: ge.setTransition.bind(e),
            },
          })
        },
        on: {
          beforeInit: function () {
            var e = this
            if ('fade' === e.params.effect) {
              e.classNames.push(e.params.containerModifierClass + 'fade')
              var t = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !0,
              }
              d.extend(e.params, t), d.extend(e.originalParams, t)
            }
          },
          setTranslate: function () {
            'fade' === this.params.effect && this.fadeEffect.setTranslate()
          },
          setTransition: function (e) {
            'fade' === this.params.effect && this.fadeEffect.setTransition(e)
          },
        },
      },
      {
        name: 'effect-cube',
        params: {
          cubeEffect: {
            slideShadows: !0,
            shadow: !0,
            shadowOffset: 20,
            shadowScale: 0.94,
          },
        },
        create: function () {
          var e = this
          d.extend(e, {
            cubeEffect: {
              setTranslate: be.setTranslate.bind(e),
              setTransition: be.setTransition.bind(e),
            },
          })
        },
        on: {
          beforeInit: function () {
            var e = this
            if ('cube' === e.params.effect) {
              e.classNames.push(e.params.containerModifierClass + 'cube'),
                e.classNames.push(e.params.containerModifierClass + '3d')
              var t = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: !1,
                virtualTranslate: !0,
              }
              d.extend(e.params, t), d.extend(e.originalParams, t)
            }
          },
          setTranslate: function () {
            'cube' === this.params.effect && this.cubeEffect.setTranslate()
          },
          setTransition: function (e) {
            'cube' === this.params.effect && this.cubeEffect.setTransition(e)
          },
        },
      },
      {
        name: 'effect-flip',
        params: { flipEffect: { slideShadows: !0, limitRotation: !0 } },
        create: function () {
          var e = this
          d.extend(e, {
            flipEffect: {
              setTranslate: we.setTranslate.bind(e),
              setTransition: we.setTransition.bind(e),
            },
          })
        },
        on: {
          beforeInit: function () {
            var e = this
            if ('flip' === e.params.effect) {
              e.classNames.push(e.params.containerModifierClass + 'flip'),
                e.classNames.push(e.params.containerModifierClass + '3d')
              var t = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !0,
              }
              d.extend(e.params, t), d.extend(e.originalParams, t)
            }
          },
          setTranslate: function () {
            'flip' === this.params.effect && this.flipEffect.setTranslate()
          },
          setTransition: function (e) {
            'flip' === this.params.effect && this.flipEffect.setTransition(e)
          },
        },
      },
      {
        name: 'effect-coverflow',
        params: {
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            scale: 1,
            modifier: 1,
            slideShadows: !0,
          },
        },
        create: function () {
          var e = this
          d.extend(e, {
            coverflowEffect: {
              setTranslate: ye.setTranslate.bind(e),
              setTransition: ye.setTransition.bind(e),
            },
          })
        },
        on: {
          beforeInit: function () {
            var e = this
            'coverflow' === e.params.effect &&
              (e.classNames.push(e.params.containerModifierClass + 'coverflow'),
              e.classNames.push(e.params.containerModifierClass + '3d'),
              (e.params.watchSlidesProgress = !0),
              (e.originalParams.watchSlidesProgress = !0))
          },
          setTranslate: function () {
            'coverflow' === this.params.effect &&
              this.coverflowEffect.setTranslate()
          },
          setTransition: function (e) {
            'coverflow' === this.params.effect &&
              this.coverflowEffect.setTransition(e)
          },
        },
      },
      {
        name: 'thumbs',
        params: {
          thumbs: {
            swiper: null,
            multipleActiveThumbs: !0,
            autoScrollOffset: 0,
            slideThumbActiveClass: 'swiper-slide-thumb-active',
            thumbsContainerClass: 'swiper-container-thumbs',
          },
        },
        create: function () {
          var e = this
          d.extend(e, {
            thumbs: {
              swiper: null,
              init: xe.init.bind(e),
              update: xe.update.bind(e),
              onThumbClick: xe.onThumbClick.bind(e),
            },
          })
        },
        on: {
          beforeInit: function () {
            var e = this,
              t = e.params.thumbs
            t && t.swiper && (e.thumbs.init(), e.thumbs.update(!0))
          },
          slideChange: function () {
            this.thumbs.swiper && this.thumbs.update()
          },
          update: function () {
            this.thumbs.swiper && this.thumbs.update()
          },
          resize: function () {
            this.thumbs.swiper && this.thumbs.update()
          },
          observerUpdate: function () {
            this.thumbs.swiper && this.thumbs.update()
          },
          setTransition: function (e) {
            var t = this.thumbs.swiper
            t && t.setTransition(e)
          },
          beforeDestroy: function () {
            var e = this.thumbs.swiper
            e && this.thumbs.swiperCreated && e && e.destroy()
          },
        },
      },
    ]
  return (
    void 0 === j.use &&
      ((j.use = j.Class.use), (j.installModule = j.Class.installModule)),
    j.use(Ee),
    j
  )
})
