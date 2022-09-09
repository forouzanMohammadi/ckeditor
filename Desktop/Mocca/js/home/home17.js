var sbi_js_exists = void 0 !== sbi_js_exists
sbi_js_exists ||
  (!(function (i) {
    function e() {
      var i,
        e,
        t,
        s = s || { VER: '0.9.944' }
      ;(s.bgs_Available = !1),
        (s.bgs_CheckRunned = !1),
        (function (i) {
          i.fn.extend({
            sbi_imgLiquid: function (e) {
              ;(this.defaults = {
                fill: !0,
                verticalAlign: 'center',
                horizontalAlign: 'center',
                useBackgroundSize: !0,
                useDataHtmlAttr: !0,
                responsive: !0,
                delay: 0,
                fadeInTime: 0,
                removeBoxBackground: !0,
                hardPixels: !0,
                responsiveCheckTime: 500,
                timecheckvisibility: 500,
                onStart: null,
                onFinish: null,
                onItemStart: null,
                onItemFinish: null,
                onItemError: null,
              }),
                (function () {
                  if (!s.bgs_CheckRunned) {
                    s.bgs_CheckRunned = !0
                    var e = i('<span style="background-size:cover" />')
                    i('body').append(e),
                      (function () {
                        var i = e[0]
                        if (i && window.getComputedStyle) {
                          var t = window.getComputedStyle(i, null)
                          t &&
                            t.backgroundSize &&
                            (s.bgs_Available = 'cover' === t.backgroundSize)
                        }
                      })(),
                      e.remove()
                  }
                })()
              var t = this
              return (
                (this.options = e),
                (this.settings = i.extend({}, this.defaults, this.options)),
                this.settings.onStart && this.settings.onStart(),
                this.each(function (e) {
                  function n() {
                    ;(r.responsive || c.data('sbi_imgLiquid_oldProcessed')) &&
                      c.data('sbi_imgLiquid_settings') &&
                      ((r = c.data('sbi_imgLiquid_settings')),
                      (l.actualSize =
                        l.get(0).offsetWidth + l.get(0).offsetHeight / 1e4),
                      l.sizeOld && l.actualSize !== l.sizeOld && o(),
                      (l.sizeOld = l.actualSize),
                      setTimeout(n, r.responsiveCheckTime))
                  }
                  function a() {
                    c.data('sbi_imgLiquid_error', !0),
                      l.addClass('sbi_imgLiquid_error'),
                      r.onItemError && r.onItemError(e, l, c),
                      d()
                  }
                  function o() {
                    var i,
                      t,
                      s,
                      n,
                      a,
                      o,
                      g,
                      h,
                      f = 0,
                      u = 0,
                      b = l.width(),
                      _ = l.height()
                    void 0 === c.data('owidth') && c.data('owidth', c[0].width),
                      void 0 === c.data('oheight') &&
                        c.data('oheight', c[0].height),
                      r.fill === b / _ >= c.data('owidth') / c.data('oheight')
                        ? ((i = '100%'),
                          (t = 'auto'),
                          (s = Math.floor(b)),
                          (n = Math.floor(
                            b * (c.data('oheight') / c.data('owidth')),
                          )))
                        : ((i = 'auto'),
                          (t = '100%'),
                          (s = Math.floor(
                            _ * (c.data('owidth') / c.data('oheight')),
                          )),
                          (n = Math.floor(_))),
                      (g = b - s),
                      'left' === (a = r.horizontalAlign.toLowerCase()) &&
                        (u = 0),
                      'center' === a && (u = 0.5 * g),
                      'right' === a && (u = g),
                      -1 !== a.indexOf('%') &&
                        (a = parseInt(a.replace('%', ''), 10)) > 0 &&
                        (u = g * a * 0.01),
                      (h = _ - n),
                      'left' === (o = r.verticalAlign.toLowerCase()) && (f = 0),
                      'center' === o && (f = 0.5 * h),
                      'bottom' === o && (f = h),
                      -1 !== o.indexOf('%') &&
                        (o = parseInt(o.replace('%', ''), 10)) > 0 &&
                        (f = h * o * 0.01),
                      r.hardPixels && ((i = s), (t = n)),
                      c.css({
                        width: i,
                        height: t,
                        'margin-left': Math.floor(u),
                        'margin-top': Math.floor(f),
                      }),
                      c.data('sbi_imgLiquid_oldProcessed') ||
                        (c.fadeTo(r.fadeInTime, 1),
                        c.data('sbi_imgLiquid_oldProcessed', !0),
                        r.removeBoxBackground &&
                          l.css('background-image', 'none'),
                        l.addClass('sbi_imgLiquid_nobgSize'),
                        l.addClass('sbi_imgLiquid_ready')),
                      r.onItemFinish && r.onItemFinish(e, l, c),
                      d()
                  }
                  function d() {
                    e === t.length - 1 &&
                      t.settings.onFinish &&
                      t.settings.onFinish()
                  }
                  var r = t.settings,
                    l = i(this),
                    c = i('img:first', l)
                  return c.length
                    ? (c.data('sbi_imgLiquid_settings')
                        ? (l
                            .removeClass('sbi_imgLiquid_error')
                            .removeClass('sbi_imgLiquid_ready'),
                          (r = i.extend(
                            {},
                            c.data('sbi_imgLiquid_settings'),
                            t.options,
                          )))
                        : (r = i.extend(
                            {},
                            t.settings,
                            (function () {
                              var i = {}
                              if (t.settings.useDataHtmlAttr) {
                                var e = l.attr('data-sbi_imgLiquid-fill'),
                                  n = l.attr(
                                    'data-sbi_imgLiquid-horizontalAlign',
                                  ),
                                  a = l.attr('data-sbi_imgLiquid-verticalAlign')
                                ;('true' === e || 'false' === e) &&
                                  (i.fill = Boolean('true' === e)),
                                  void 0 === n ||
                                    ('left' !== n &&
                                      'center' !== n &&
                                      'right' !== n &&
                                      -1 === n.indexOf('%')) ||
                                    (i.horizontalAlign = n),
                                  void 0 === a ||
                                    ('top' !== a &&
                                      'bottom' !== a &&
                                      'center' !== a &&
                                      -1 === a.indexOf('%')) ||
                                    (i.verticalAlign = a)
                              }
                              return (
                                s.isIE &&
                                  t.settings.ieFadeInDisabled &&
                                  (i.fadeInTime = 0),
                                i
                              )
                            })(),
                          )),
                      c.data('sbi_imgLiquid_settings', r),
                      r.onItemStart && r.onItemStart(e, l, c),
                      void (s.bgs_Available && r.useBackgroundSize
                        ? (-1 ===
                            l
                              .css('background-image')
                              .indexOf(encodeURI(c.attr('src'))) &&
                            l.css({
                              'background-image':
                                'url("' + encodeURI(c.attr('src')) + '")',
                            }),
                          l.css({
                            'background-size': r.fill ? 'cover' : 'contain',
                            'background-position': (
                              r.horizontalAlign +
                              ' ' +
                              r.verticalAlign
                            ).toLowerCase(),
                            'background-repeat': 'no-repeat',
                          }),
                          i('a:first', l).css({
                            display: 'block',
                            width: '100%',
                            height: '100%',
                          }),
                          i('img', l).css({ display: 'none' }),
                          r.onItemFinish && r.onItemFinish(e, l, c),
                          l.addClass('sbi_imgLiquid_bgSize'),
                          l.addClass('sbi_imgLiquid_ready'),
                          d())
                        : (function t() {
                            if (
                              c.data('oldSrc') &&
                              c.data('oldSrc') !== c.attr('src')
                            ) {
                              var s = c.clone().removeAttr('style')
                              return (
                                s.data(
                                  'sbi_imgLiquid_settings',
                                  c.data('sbi_imgLiquid_settings'),
                                ),
                                c.parent().prepend(s),
                                c.remove(),
                                ((c = s)[0].width = 0),
                                void setTimeout(t, 10)
                              )
                            }
                            return c.data('sbi_imgLiquid_oldProcessed')
                              ? void o()
                              : (c.data('sbi_imgLiquid_oldProcessed', !1),
                                c.data('oldSrc', c.attr('src')),
                                i('img:not(:first)', l).css('display', 'none'),
                                l.css({ overflow: 'hidden' }),
                                c
                                  .fadeTo(0, 0)
                                  .removeAttr('width')
                                  .removeAttr('height')
                                  .css({
                                    visibility: 'visible',
                                    'max-width': 'none',
                                    'max-height': 'none',
                                    width: 'auto',
                                    height: 'auto',
                                    display: 'block',
                                  }),
                                c.on('error', a),
                                (c[0].onerror = a),
                                (function i() {
                                  c.data('sbi_imgLiquid_error') ||
                                    c.data('sbi_imgLiquid_loaded') ||
                                    c.data('sbi_imgLiquid_oldProcessed') ||
                                    (l.is(':visible') &&
                                    c[0].complete &&
                                    c[0].width > 0 &&
                                    c[0].height > 0
                                      ? (c.data('sbi_imgLiquid_loaded', !0),
                                        setTimeout(o, e * r.delay))
                                      : setTimeout(i, r.timecheckvisibility))
                                })(),
                                void n())
                          })()))
                    : void a()
                })
              )
            },
          })
        })(jQuery),
        (i = s.injectCss),
        (e = document.getElementsByTagName('head')[0]),
        ((t = document.createElement('style')).type = 'text/css'),
        t.styleSheet
          ? (t.styleSheet.cssText = i)
          : t.appendChild(document.createTextNode(i)),
        e.appendChild(t)
    }
    function t() {
      ;(this.feeds = {}), (this.options = sb_instagram_js_options)
    }
    function s(i, e, t) {
      ;(this.el = i),
        (this.index = e),
        (this.settings = t),
        (this.minImageWidth = 0),
        (this.imageResolution = 150),
        (this.resizedImages = {}),
        (this.needsResizing = []),
        (this.outOfPages = !1),
        (this.page = 1),
        (this.isInitialized = !1)
    }
    function n(e, t) {
      i.ajax({ url: sbiajaxurl, type: 'post', data: e, success: t })
    }
    ;(t.prototype = {
      createPage: function (e, t) {
        void 0 !== sb_instagram_js_options.ajax_url &&
          void 0 === window.sbiajaxurl &&
          (window.sbiajaxurl = sb_instagram_js_options.ajax_url),
          (void 0 !== window.sbiajaxurl &&
            -1 !== window.sbiajaxurl.indexOf(window.location.hostname)) ||
            (window.sbiajaxurl =
              location.protocol +
              '//' +
              window.location.hostname +
              '/wp-admin/admin-ajax.php'),
          i('#sbi-builder-app').length &&
            void 0 === window.sbiresizedImages &&
            i('.sbi_resized_image_data').length &&
            void 0 !== i('.sbi_resized_image_data').attr('data-resized') &&
            0 ===
              i('.sbi_resized_image_data').attr('data-resized').indexOf('{"') &&
            ((window.sbiresizedImages = JSON.parse(
              i('.sbi_resized_image_data').attr('data-resized'),
            )),
            i('.sbi_resized_image_data').remove()),
          i('.sbi_no_js_error_message').remove(),
          i('.sbi_no_js').removeClass('sbi_no_js'),
          e(t)
      },
      createFeeds: function (e) {
        e.whenFeedsCreated(
          i('.sbi').each(function (e) {
            i(this).attr('data-sbi-index', e + 1)
            var t = i(this),
              a =
                void 0 !== t.attr('data-sbi-flags')
                  ? t.attr('data-sbi-flags').split(',')
                  : [],
              o =
                void 0 !== t.attr('data-options')
                  ? JSON.parse(t.attr('data-options'))
                  : {}
            if (a.indexOf('testAjax') > -1) {
              window.sbi.triggeredTest = !0
              n({ action: 'sbi_on_ajax_test_trigger' }, function (i) {
                console.log('did test')
              })
            }
            var d = {
              cols: t.attr('data-cols'),
              colsmobile:
                void 0 !== t.attr('data-colsmobile') &&
                'same' !== t.attr('data-colsmobile')
                  ? t.attr('data-colsmobile')
                  : t.attr('data-cols'),
              colstablet:
                void 0 !== t.attr('data-colstablet') &&
                'same' !== t.attr('data-colstablet')
                  ? t.attr('data-colstablet')
                  : t.attr('data-cols'),
              num: t.attr('data-num'),
              imgRes: t.attr('data-res'),
              feedID: t.attr('data-feedid'),
              postID:
                'undefind' != typeof t.attr('data-postid')
                  ? t.attr('data-postid')
                  : 'unknown',
              shortCodeAtts: t.attr('data-shortcode-atts'),
              resizingEnabled: -1 === a.indexOf('resizeDisable'),
              imageLoadEnabled: -1 === a.indexOf('imageLoadDisable'),
              debugEnabled: a.indexOf('debug') > -1,
              favorLocal: a.indexOf('favorLocal') > -1,
              ajaxPostLoad: a.indexOf('ajaxPostLoad') > -1,
              gdpr: a.indexOf('gdpr') > -1,
              overrideBlockCDN: a.indexOf('overrideBlockCDN') > -1,
              consentGiven: !1,
              locator: a.indexOf('locator') > -1,
              autoMinRes: 1,
              general: o,
            }
            ;(window.sbi.feeds[e] = (function (i, e, t) {
              return new s(i, e, t)
            })(this, e, d)),
              window.sbi.feeds[e].setResizedImages(),
              window.sbi.feeds[e].init()
            var r = jQuery.Event('sbiafterfeedcreate')
            ;(r.feed = window.sbi.feeds[e]), jQuery(window).trigger(r)
          }),
        )
      },
      afterFeedsCreated: function () {
        i('.sb_instagram_header').each(function () {
          var e = i(this)
          e.find('.sbi_header_link').on('mouseenter mouseleave', function (i) {
            switch (i.type) {
              case 'mouseenter':
                e.find('.sbi_header_img_hover').addClass('sbi_fade_in')
                break
              case 'mouseleave':
                e.find('.sbi_header_img_hover').removeClass('sbi_fade_in')
            }
          })
        })
      },
      encodeHTML: function (i) {
        return void 0 === i
          ? ''
          : i
              .replace(/(>)/g, '&gt;')
              .replace(/(<)/g, '&lt;')
              .replace(/(&lt;br\/&gt;)/g, '<br>')
              .replace(/(&lt;br&gt;)/g, '<br>')
      },
      urlDetect: function (i) {
        return i.match(
          /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,
        )
      },
    }),
      (s.prototype = {
        init: function () {
          var e = this
          ;(e.settings.consentGiven = e.checkConsent()),
            i(this.el).find('.sbi_photo').parent('p').length &&
              i(this.el).addClass('sbi_no_autop'),
            i(this.el).find('#sbi_mod_error').length &&
              i(this.el).prepend(i(this.el).find('#sbi_mod_error')),
            this.settings.ajaxPostLoad
              ? this.getNewPostSet()
              : this.afterInitialImagesLoaded()
          var t,
            s =
              ((t = 0),
              function (i, e) {
                clearTimeout(t), (t = setTimeout(i, e))
              })
          jQuery(window).on('resize', function () {
            s(function () {
              e.afterResize()
            }, 500)
          }),
            i(this.el)
              .find('.sbi_item')
              .each(function () {
                e.lazyLoadCheck(i(this))
              })
        },
        initLayout: function () {},
        afterInitialImagesLoaded: function () {
          this.initLayout(),
            this.loadMoreButtonInit(),
            this.hideExtraImagesForWidth(),
            this.beforeNewImagesRevealed(),
            this.revealNewImages(),
            this.afterNewImagesRevealed()
        },
        afterResize: function () {
          this.setImageHeight(),
            this.setImageResolution(),
            this.maybeRaiseImageResolution(),
            this.setImageSizeClass()
        },
        afterLoadMoreClicked: function (i) {
          i.find('.sbi_loader').removeClass('sbi_hidden'),
            i.find('.sbi_btn_text').addClass('sbi_hidden'),
            i
              .closest('.sbi')
              .find('.sbi_num_diff_hide')
              .addClass('sbi_transition')
              .removeClass('sbi_num_diff_hide')
        },
        afterNewImagesLoaded: function () {
          var e = i(this.el),
            t = this
          this.beforeNewImagesRevealed(),
            this.revealNewImages(),
            this.afterNewImagesRevealed(),
            setTimeout(function () {
              e.find('.sbi_loader').addClass('sbi_hidden'),
                e.find('.sbi_btn_text').removeClass('sbi_hidden'),
                t.maybeRaiseImageResolution()
            }, 500)
        },
        beforeNewImagesRevealed: function () {
          this.setImageHeight(),
            this.maybeRaiseImageResolution(!0),
            this.setImageSizeClass()
        },
        revealNewImages: function () {
          var e = i(this.el)
          e.find('.sbi-screenreader').each(function () {
            i(this).find('img').remove()
          }),
            'function' == typeof sbi_custom_js &&
              setTimeout(function () {
                sbi_custom_js()
              }, 100),
            this.applyImageLiquid(),
            e.find('.sbi_item').each(function (i) {
              jQuery(this)
                .find('.sbi_photo')
                .on('mouseenter mouseleave', function (i) {
                  switch (i.type) {
                    case 'mouseenter':
                      jQuery(this).fadeTo(200, 0.85)
                      break
                    case 'mouseleave':
                      jQuery(this).stop().fadeTo(500, 1)
                  }
                })
            }),
            setTimeout(function () {
              jQuery('#sbi_images .sbi_item.sbi_new').removeClass('sbi_new')
              var i = 10
              e.find('.sbi_transition').each(function () {
                var e = jQuery(this)
                setTimeout(function () {
                  e.removeClass('sbi_transition')
                }, i),
                  (i += 10)
              })
            }, 500)
        },
        lazyLoadCheck: function (e) {
          if (
            e.find('.sbi_photo').length &&
            !e.closest('.sbi').hasClass('sbi-no-ll-check')
          ) {
            var t = this.getImageUrls(e),
              s =
                void 0 !== t[640]
                  ? t[640]
                  : e.find('.sbi_photo').attr('data-full-res')
            if (!this.settings.consentGiven && s.indexOf('scontent') > -1)
              return
            e.find('.sbi_photo img').each(function () {
              s &&
                void 0 !== i(this).attr('data-src') &&
                i(this).attr('data-src', s),
                s &&
                  void 0 !== i(this).attr('data-orig-src') &&
                  i(this).attr('data-orig-src', s),
                i(this).on('load', function () {
                  !i(this).hasClass('sbi-replaced') &&
                    i(this).attr('src').indexOf('placeholder') > -1 &&
                    (i(this).addClass('sbi-replaced'),
                    s &&
                      (i(this).attr('src', s),
                      i(this).closest('.sbi_imgLiquid_bgSize').length &&
                        i(this)
                          .closest('.sbi_imgLiquid_bgSize')
                          .css('background-image', 'url(' + s + ')')))
                })
            })
          }
        },
        afterNewImagesRevealed: function () {
          this.listenForVisibilityChange(),
            this.sendNeedsResizingToServer(),
            this.settings.imageLoadEnabled ||
              i('.sbi_no_resraise').removeClass('sbi_no_resraise')
          var e = i.Event('sbiafterimagesloaded')
          ;(e.el = i(this.el)), i(window).trigger(e)
        },
        setResizedImages: function () {
          i(this.el).find('.sbi_resized_image_data').length &&
          void 0 !==
            i(this.el).find('.sbi_resized_image_data').attr('data-resized') &&
          0 ===
            i(this.el)
              .find('.sbi_resized_image_data')
              .attr('data-resized')
              .indexOf('{"')
            ? ((this.resizedImages = JSON.parse(
                i(this.el).find('.sbi_resized_image_data').attr('data-resized'),
              )),
              i(this.el).find('.sbi_resized_image_data').remove())
            : void 0 !== window.sbiresizedImages &&
              (this.resizedImages = window.sbiresizedImages)
        },
        sendNeedsResizingToServer: function () {
          var e = this,
            t = i(this.el)
          if (e.needsResizing.length > 0 && e.settings.resizingEnabled) {
            var s = i(this.el).find('.sbi_item').length,
              a =
                void 0 !== e.settings.general.cache_all &&
                e.settings.general.cache_all,
              o = ''
            if (
              (void 0 !== t.attr('data-locatornonce') &&
                (o = t.attr('data-locatornonce')),
              i('#sbi-builder-app').length)
            ) {
              if (
                void 0 !== window.sbiresizeTriggered &&
                window.sbiresizeTriggered
              )
                return
              window.sbiresizeTriggered = !0
            }
            n(
              {
                action: 'sbi_resized_images_submit',
                needs_resizing: e.needsResizing,
                offset: s,
                feed_id: e.settings.feedID,
                atts: e.settings.shortCodeAtts,
                location: e.locationGuess(),
                post_id: e.settings.postID,
                cache_all: a,
                locator_nonce: o,
              },
              function (t) {
                var s = t
                for (var n in ('object' != typeof t &&
                  0 === t.trim().indexOf('{') &&
                  (s = JSON.parse(t.trim())),
                e.settings.debugEnabled && console.log(s),
                s))
                  s.hasOwnProperty(n) && (e.resizedImages[n] = s[n])
                e.maybeRaiseImageResolution(),
                  setTimeout(function () {
                    e.afterResize()
                  }, 500),
                  i('#sbi-builder-app').length &&
                    (window.sbiresizeTriggered = !1)
              },
            )
          } else if (e.settings.locator) {
            o = ''
            void 0 !== t.attr('data-locatornonce') &&
              (o = t.attr('data-locatornonce')),
              n(
                {
                  action: 'sbi_do_locator',
                  feed_id: e.settings.feedID,
                  atts: e.settings.shortCodeAtts,
                  location: e.locationGuess(),
                  post_id: e.settings.postID,
                  locator_nonce: o,
                },
                function (i) {},
              )
          }
        },
        loadMoreButtonInit: function () {
          var e = i(this.el),
            t = this
          e.find('#sbi_load .sbi_load_btn')
            .off()
            .on('click', function () {
              t.afterLoadMoreClicked(jQuery(this)), t.getNewPostSet()
            })
        },
        getNewPostSet: function () {
          var e = i(this.el),
            t = this
          t.page++
          var s = ''
          void 0 !== e.attr('data-locatornonce') &&
            (s = e.attr('data-locatornonce'))
          n(
            {
              action: 'sbi_load_more_clicked',
              offset: e.find('.sbi_item').length,
              page: t.page,
              feed_id: t.settings.feedID,
              atts: t.settings.shortCodeAtts,
              location: t.locationGuess(),
              post_id: t.settings.postID,
              current_resolution: t.imageResolution,
              locator_nonce: s,
            },
            function (s) {
              var n = s
              'object' != typeof s &&
                0 === s.trim().indexOf('{') &&
                (n = JSON.parse(s.trim())),
                t.settings.debugEnabled && console.log(n),
                t.appendNewPosts(n.html),
                t.addResizedImages(n.resizedImages),
                t.settings.ajaxPostLoad
                  ? ((t.settings.ajaxPostLoad = !1),
                    t.afterInitialImagesLoaded())
                  : t.afterNewImagesLoaded(),
                n.feedStatus.shouldPaginate
                  ? (t.outOfPages = !1)
                  : ((t.outOfPages = !0), e.find('.sbi_load_btn').hide()),
                i('.sbi_no_js').removeClass('sbi_no_js')
            },
          )
        },
        appendNewPosts: function (e) {
          var t = i(this.el)
          t.find('#sbi_images .sbi_item').length
            ? t.find('#sbi_images .sbi_item').last().after(e)
            : t.find('#sbi_images').append(e)
        },
        addResizedImages: function (i) {
          for (var e in i) this.resizedImages[e] = i[e]
        },
        setImageHeight: function () {
          var e = i(this.el),
            t = e.find('.sbi_photo').eq(0).innerWidth(),
            s = this.getColumnCount(),
            n =
              e.find('#sbi_images').innerWidth() -
              e.find('#sbi_images').width(),
            a = n / 2
          ;(sbi_photo_width_manual = e.find('#sbi_images').width() / s - n),
            e.find('.sbi_photo').css('height', t),
            e.find('.sbi-owl-nav').length &&
              setTimeout(function () {
                var i = 2
                e.find('.sbi_owl2row-item').length && (i = 1)
                var t = e.find('.sbi_photo').eq(0).innerWidth() / i
                ;(t += parseInt(a) * (2 - i + 2)),
                  e.find('.sbi-owl-nav div').css('top', t)
              }, 100)
        },
        maybeRaiseSingleImageResolution: function (e, t, s) {
          var n = this,
            a = n.getImageUrls(e),
            o = e.find('.sbi_photo img').attr('src'),
            d = 150,
            r = e.find('img').get(0),
            l =
              o === window.sbi.options.placeholder
                ? 1
                : r.naturalWidth / r.naturalHeight
          s = void 0 !== s && s
          if (
            !(
              e.hasClass('sbi_no_resraise') ||
              e.hasClass('sbi_had_error') ||
              (e.find('.sbi_link_area').length &&
                e.find('.sbi_link_area').hasClass('sbi_had_error'))
            )
          )
            if (a.length < 1)
              e.find('.sbi_link_area').length &&
                e
                  .find('.sbi_link_area')
                  .attr(
                    'href',
                    window.sbi.options.placeholder.replace(
                      'placeholder.png',
                      'thumb-placeholder.png',
                    ),
                  )
            else {
              ;((e.find('.sbi_link_area').length &&
                e.find('.sbi_link_area').attr('href') ===
                  window.sbi.options.placeholder.replace(
                    'placeholder.png',
                    'thumb-placeholder.png',
                  )) ||
                !n.settings.consentGiven) &&
                e.find('.sbi_link_area').attr('href', a[a.length - 1]),
                void 0 !== a[640] &&
                  e.find('.sbi_photo').attr('data-full-res', a[640]),
                i.each(a, function (i, e) {
                  e === o && ((d = parseInt(i)), (s = !1))
                })
              var c = 640
              switch (n.settings.imgRes) {
                case 'thumb':
                  c = 150
                  break
                case 'medium':
                  c = 320
                  break
                case 'full':
                  c = 640
                  break
                default:
                  var g = Math.max(
                      n.settings.autoMinRes,
                      e.find('.sbi_photo').innerWidth(),
                    ),
                    h = n.getBestResolutionForAuto(g, l, e)
                  switch (h) {
                    case 320:
                      c = 320
                      break
                    case 150:
                      c = 150
                  }
              }
              if (c > d || o === window.sbi.options.placeholder || s) {
                if (n.settings.debugEnabled) {
                  var f =
                    o === window.sbi.options.placeholder
                      ? 'was placeholder'
                      : 'too small'
                  console.log('rais res for ' + o, f)
                }
                var u = a[c].split('?ig_cache_key')[0]
                if (
                  (o !== u &&
                    (e.find('.sbi_photo img').attr('src', u),
                    e
                      .find('.sbi_photo')
                      .css('background-image', 'url("' + u + '")')),
                  (d = c),
                  'auto' === n.settings.imgRes)
                ) {
                  var b = !1
                  e.find('.sbi_photo img').on('load', function () {
                    var t = i(this),
                      s = t.get(0).naturalWidth / t.get(0).naturalHeight
                    if (1e3 !== t.get(0).naturalWidth && s > l && !b) {
                      switch (
                        (n.settings.debugEnabled &&
                          console.log(
                            'rais res again for aspect ratio change ' + o,
                          ),
                        (b = !0),
                        (g = e.find('.sbi_photo').innerWidth()),
                        (h = n.getBestResolutionForAuto(g, s, e)),
                        (c = 640),
                        h)
                      ) {
                        case 320:
                          c = 320
                          break
                        case 150:
                          c = 150
                      }
                      c > d &&
                        ((u = a[c].split('?ig_cache_key')[0]),
                        t.attr('src', u),
                        t
                          .closest('.sbi_photo')
                          .css('background-image', 'url("' + u + '")')),
                        ('masonry' !== n.layout && 'highlight' !== n.layout) ||
                          (i(n.el)
                            .find('#sbi_images')
                            .smashotope(n.isotopeArgs),
                          setTimeout(function () {
                            i(n.el)
                              .find('#sbi_images')
                              .smashotope(n.isotopeArgs)
                          }, 500))
                    } else if (n.settings.debugEnabled) {
                      var r = b ? 'already checked' : 'no aspect ratio change'
                      console.log('not raising res for replacement  ' + o, r)
                    }
                  })
                }
              }
              e.find('img').on('error', function () {
                if (i(this).hasClass('sbi_img_error'))
                  console.log('unfixed error ' + i(this).attr('src'))
                else {
                  var e
                  if (
                    (i(this).addClass('sbi_img_error'),
                    !(
                      i(this).attr('src').indexOf('media/?size=') > -1 ||
                      i(this).attr('src').indexOf('cdninstagram') > -1 ||
                      i(this).attr('src').indexOf('fbcdn') > -1
                    ) && n.settings.consentGiven)
                  ) {
                    if (
                      'undefined' !==
                      i(this).closest('.sbi_photo').attr('data-img-src-set')
                    )
                      void 0 !==
                        (e = JSON.parse(
                          i(this)
                            .closest('.sbi_photo')
                            .attr('data-img-src-set')
                            .replace(/\\\//g, '/'),
                        )).d &&
                        (i(this).attr('src', e.d),
                        i(this)
                          .closest('.sbi_photo')
                          .css('background-image', 'url(' + e.d + ')'),
                        i(this)
                          .closest('.sbi_item')
                          .addClass('sbi_had_error')
                          .find('.sbi_link_area')
                          .attr('href', e[640])
                          .addClass('sbi_had_error'))
                  } else
                    (n.settings.favorLocal = !0),
                      void 0 !==
                        (e = n.getImageUrls(
                          i(this).closest('.sbi_item'),
                        ))[640] &&
                        (i(this).attr('src', e[640]),
                        i(this)
                          .closest('.sbi_photo')
                          .css('background-image', 'url(' + e[640] + ')'),
                        i(this)
                          .closest('.sbi_item')
                          .addClass('sbi_had_error')
                          .find('.sbi_link_area')
                          .attr('href', e[640])
                          .addClass('sbi_had_error'))
                  setTimeout(function () {
                    n.afterResize()
                  }, 1500)
                }
              })
            }
        },
        maybeRaiseImageResolution: function (e) {
          var t = this,
            s = void 0 !== e && !0 === e ? '.sbi_item.sbi_new' : '.sbi_item',
            n = !t.isInitialized
          i(t.el)
            .find(s)
            .each(function (e) {
              !i(this).hasClass('sbi_num_diff_hide') &&
                i(this).find('.sbi_photo').length &&
                void 0 !==
                  i(this).find('.sbi_photo').attr('data-img-src-set') &&
                t.maybeRaiseSingleImageResolution(i(this), e, n)
            }),
            (t.isInitialized = !0)
        },
        getBestResolutionForAuto: function (e, t, s) {
          ;(isNaN(t) || t < 1) && (t = 1)
          var n = e * t,
            a = 10 * Math.ceil(n / 10),
            o = [150, 320, 640]
          if (
            (s.hasClass('sbi_highlighted') && (a *= 2),
            -1 === o.indexOf(parseInt(a)))
          ) {
            var d = !1
            i.each(o, function (i, e) {
              e > parseInt(a) && !d && ((a = e), (d = !0))
            })
          }
          return a
        },
        hideExtraImagesForWidth: function () {
          if ('carousel' !== this.layout) {
            var e = i(this.el),
              t =
                void 0 !== e.attr('data-num') && '' !== e.attr('data-num')
                  ? parseInt(e.attr('data-num'))
                  : 1,
              s =
                void 0 !== e.attr('data-nummobile') &&
                '' !== e.attr('data-nummobile')
                  ? parseInt(e.attr('data-nummobile'))
                  : t
            i(window).width() < 480
              ? s < e.find('.sbi_item').length &&
                e
                  .find('.sbi_item')
                  .slice(s - e.find('.sbi_item').length)
                  .addClass('sbi_num_diff_hide')
              : t < e.find('.sbi_item').length &&
                e
                  .find('.sbi_item')
                  .slice(t - e.find('.sbi_item').length)
                  .addClass('sbi_num_diff_hide')
          }
        },
        setImageSizeClass: function () {
          var e = i(this.el)
          e.removeClass('sbi_small sbi_medium')
          var t = e.innerWidth(),
            s =
              parseInt(
                e.find('#sbi_images').outerWidth() -
                  e.find('#sbi_images').width(),
              ) / 2,
            n = this.getColumnCount(),
            a = (t - s * (n + 2)) / n
          a > 120 && a < 240
            ? e.addClass('sbi_medium')
            : a <= 120 && e.addClass('sbi_small')
        },
        setMinImageWidth: function () {
          i(this.el).find('.sbi_item .sbi_photo').first().length
            ? (this.minImageWidth = i(this.el)
                .find('.sbi_item .sbi_photo')
                .first()
                .innerWidth())
            : (this.minImageWidth = 150)
        },
        setImageResolution: function () {
          if ('auto' === this.settings.imgRes) this.imageResolution = 'auto'
          else
            switch (this.settings.imgRes) {
              case 'thumb':
                this.imageResolution = 150
                break
              case 'medium':
                this.imageResolution = 320
                break
              default:
                this.imageResolution = 640
            }
        },
        getImageUrls: function (i) {
          var e = JSON.parse(
              i
                .find('.sbi_photo')
                .attr('data-img-src-set')
                .replace(/\\\//g, '/'),
            ),
            t = i.attr('id').replace('sbi_', '')
          if (
            (this.settings.consentGiven ||
              this.settings.overrideBlockCDN ||
              (e = []),
            void 0 !== this.resizedImages[t] &&
              'video' !== this.resizedImages[t] &&
              'pending' !== this.resizedImages[t] &&
              'error' !== this.resizedImages[t].id &&
              'video' !== this.resizedImages[t].id &&
              'pending' !== this.resizedImages[t].id)
          ) {
            if (void 0 !== this.resizedImages[t].sizes) {
              var s = []
              void 0 !== this.resizedImages[t].sizes.full &&
                ((e[640] =
                  sb_instagram_js_options.resized_url +
                  this.resizedImages[t].id +
                  'full.jpg'),
                s.push(640)),
                void 0 !== this.resizedImages[t].sizes.low &&
                  ((e[320] =
                    sb_instagram_js_options.resized_url +
                    this.resizedImages[t].id +
                    'low.jpg'),
                  s.push(320)),
                void 0 !== this.resizedImages[t].sizes.thumb &&
                  (s.push(150),
                  (e[150] =
                    sb_instagram_js_options.resized_url +
                    this.resizedImages[t].id +
                    'thumb.jpg')),
                this.settings.favorLocal &&
                  (-1 === s.indexOf(640) &&
                    s.indexOf(320) > -1 &&
                    (e[640] =
                      sb_instagram_js_options.resized_url +
                      this.resizedImages[t].id +
                      'low.jpg'),
                  -1 === s.indexOf(320) &&
                    (s.indexOf(640) > -1
                      ? (e[320] =
                          sb_instagram_js_options.resized_url +
                          this.resizedImages[t].id +
                          'full.jpg')
                      : s.indexOf(150) > -1 &&
                        (e[320] =
                          sb_instagram_js_options.resized_url +
                          this.resizedImages[t].id +
                          'thumb.jpg')),
                  -1 === s.indexOf(150) &&
                    (s.indexOf(320) > -1
                      ? (e[150] =
                          sb_instagram_js_options.resized_url +
                          this.resizedImages[t].id +
                          'low.jpg')
                      : s.indexOf(640) > -1 &&
                        (e[150] =
                          sb_instagram_js_options.resized_url +
                          this.resizedImages[t].id +
                          'full.jpg')))
            }
          } else
            (void 0 === this.resizedImages[t] ||
              (void 0 !== this.resizedImages[t].id &&
                'pending' !== this.resizedImages[t].id &&
                'error' !== this.resizedImages[t].id)) &&
              this.addToNeedsResizing(t)
          return e
        },
        getAvatarUrl: function (i, e) {
          if ('' === i) return ''
          var t = this.settings.general.avatars
          return 'local' === (e = void 0 !== e ? e : 'local')
            ? void 0 !== t['LCL' + i] && 1 === parseInt(t['LCL' + i])
              ? sb_instagram_js_options.resized_url + i + '.jpg'
              : void 0 !== t[i]
              ? t[i]
              : ''
            : void 0 !== t[i]
            ? t[i]
            : void 0 !== t['LCL' + i] && 1 === parseInt(t['LCL' + i])
            ? sb_instagram_js_options.resized_url + i + '.jpg'
            : ''
        },
        addToNeedsResizing: function (i) {
          ;-1 === this.needsResizing.indexOf(i) && this.needsResizing.push(i)
        },
        applyImageLiquid: function () {
          var t = i(this.el)
          e(),
            'function' == typeof t.find('.sbi_photo').sbi_imgLiquid &&
              t.find('.sbi_photo').sbi_imgLiquid({ fill: !0 })
        },
        listenForVisibilityChange: function () {
          var e,
            t,
            s,
            n = this
          ;(e = jQuery),
            (t = {
              callback: function () {},
              runOnLoad: !0,
              frequency: 100,
              sbiPreviousVisibility: null,
            }),
            (s = {
              sbiCheckVisibility: function (i, e) {
                if (jQuery.contains(document, i[0])) {
                  var t = e.sbiPreviousVisibility,
                    n = i.is(':visible')
                  ;(e.sbiPreviousVisibility = n),
                    null == t
                      ? e.runOnLoad && e.callback(i, n)
                      : t !== n && e.callback(i, n),
                    setTimeout(function () {
                      s.sbiCheckVisibility(i, e)
                    }, e.frequency)
                }
              },
            }),
            (e.fn.sbiVisibilityChanged = function (i) {
              var n = e.extend({}, t, i)
              return this.each(function () {
                s.sbiCheckVisibility(e(this), n)
              })
            }),
            'function' ==
              typeof i(this.el).filter(':hidden').sbiVisibilityChanged &&
              i(this.el)
                .filter(':hidden')
                .sbiVisibilityChanged({
                  callback: function (i, e) {
                    n.afterResize()
                  },
                  runOnLoad: !1,
                })
        },
        getColumnCount: function () {
          var e = i(this.el),
            t = this.settings.cols,
            s = this.settings.colsmobile,
            n = this.settings.colstablet,
            a = t
          return (
            (sbiWindowWidth = window.innerWidth),
            e.hasClass('sbi_mob_col_auto')
              ? (sbiWindowWidth < 640 &&
                  parseInt(t) > 2 &&
                  parseInt(t) < 7 &&
                  (a = 2),
                sbiWindowWidth < 640 &&
                  parseInt(t) > 6 &&
                  parseInt(t) < 11 &&
                  (a = 4),
                sbiWindowWidth <= 480 && parseInt(t) > 2 && (a = 1))
              : sbiWindowWidth > 480 && sbiWindowWidth <= 800
              ? (a = n)
              : sbiWindowWidth <= 480 && (a = s),
            parseInt(a)
          )
        },
        checkConsent: function () {
          if (this.settings.consentGiven || !this.settings.gdpr) return !0
          if ('undefined' != typeof CLI_Cookie)
            null !== CLI_Cookie.read(CLI_ACCEPT_COOKIE_NAME) &&
              (null !==
                CLI_Cookie.read('cookielawinfo-checkbox-non-necessary') &&
                (this.settings.consentGiven =
                  'yes' ===
                  CLI_Cookie.read('cookielawinfo-checkbox-non-necessary')),
              null !== CLI_Cookie.read('cookielawinfo-checkbox-necessary') &&
                (this.settings.consentGiven =
                  'yes' ===
                  CLI_Cookie.read('cookielawinfo-checkbox-necessary')))
          else if (void 0 !== window.cnArgs) {
            var i = ('; ' + document.cookie).split('; cookie_notice_accepted=')
            if (2 === i.length) {
              var e = i.pop().split(';').shift()
              this.settings.consentGiven = 'true' === e
            }
          } else
            void 0 !== window.cookieconsent
              ? (this.settings.consentGiven =
                  'allow' ===
                  (function (i) {
                    for (
                      var e = i + '=',
                        t = window.document.cookie.split(';'),
                        s = 0;
                      s < t.length;
                      s++
                    ) {
                      var n = t[s].trim()
                      if (0 == n.indexOf(e))
                        return n.substring(e.length, n.length)
                    }
                    return ''
                  })('complianz_consent_status'))
              : void 0 !== window.Cookiebot
              ? (this.settings.consentGiven = Cookiebot.consented)
              : void 0 !== window.BorlabsCookie &&
                (this.settings.consentGiven = window.BorlabsCookie.checkCookieConsent(
                  'instagram',
                ))
          var t = jQuery.Event('sbicheckconsent')
          return (
            (t.feed = this),
            jQuery(window).trigger(t),
            this.settings.consentGiven
          )
        },
        afterConsentToggled: function () {
          if (this.checkConsent()) {
            var i = this
            i.maybeRaiseImageResolution(),
              setTimeout(function () {
                i.afterResize()
              }, 500)
          }
        },
        locationGuess: function () {
          var e = i(this.el),
            t = 'content'
          return (
            e.closest('footer').length
              ? (t = 'footer')
              : e.closest('.header').length || e.closest('header').length
              ? (t = 'header')
              : (e.closest('.sidebar').length || e.closest('aside').length) &&
                (t = 'sidebar'),
            t
          )
        },
      }),
      (window.sbi_init = function () {
        ;(window.sbi = new t()),
          window.sbi.createPage(window.sbi.createFeeds, {
            whenFeedsCreated: window.sbi.afterFeedsCreated,
          })
      })
  })(jQuery),
  jQuery(document).ready(function (i) {
    void 0 === window.sb_instagram_js_options &&
      (window.sb_instagram_js_options = {
        font_method: 'svg',
        resized_url:
          location.protocol +
          '//' +
          window.location.hostname +
          '/wp-content/uploads/sb-instagram-feed-images/',
        placeholder:
          location.protocol +
          '//' +
          window.location.hostname +
          '/wp-content/plugins/instagram-feed/img/placeholder.png',
      }),
      void 0 !== window.sb_instagram_js_options.resized_url &&
        -1 ===
          window.sb_instagram_js_options.resized_url.indexOf(
            location.protocol,
          ) &&
        ('http:' === location.protocol
          ? (window.sb_instagram_js_options.resized_url = window.sb_instagram_js_options.resized_url.replace(
              'https:',
              'http:',
            ))
          : (window.sb_instagram_js_options.resized_url = window.sb_instagram_js_options.resized_url.replace(
              'http:',
              'https:',
            ))),
      sbi_init(),
      i('#cookie-notice a').on('click', function () {
        setTimeout(function () {
          i.each(window.sbi.feeds, function (i) {
            window.sbi.feeds[i].afterConsentToggled()
          })
        }, 1e3)
      }),
      i('#cookie-law-info-bar a').on('click', function () {
        setTimeout(function () {
          i.each(window.sbi.feeds, function (i) {
            window.sbi.feeds[i].afterConsentToggled()
          })
        }, 1e3)
      }),
      i('.cli-user-preference-checkbox').on('click', function () {
        setTimeout(function () {
          i.each(window.sbi.feeds, function (i) {
            ;(window.sbi.feeds[i].settings.consentGiven = !1),
              window.sbi.feeds[i].afterConsentToggled()
          })
        }, 1e3)
      }),
      i(window).on('CookiebotOnAccept', function (e) {
        i.each(window.sbi.feeds, function (i) {
          ;(window.sbi.feeds[i].settings.consentGiven = !0),
            window.sbi.feeds[i].afterConsentToggled()
        })
      }),
      i(document).on('cmplzAcceptAll', function (e) {
        i.each(window.sbi.feeds, function (i) {
          ;(window.sbi.feeds[i].settings.consentGiven = !0),
            window.sbi.feeds[i].afterConsentToggled()
        })
      }),
      i(document).on('cmplzRevoke', function (e) {
        i.each(window.sbi.feeds, function (i) {
          ;(window.sbi.feeds[i].settings.consentGiven = !1),
            window.sbi.feeds[i].afterConsentToggled()
        })
      }),
      i(document).on('borlabs-cookie-consent-saved', function (e) {
        i.each(window.sbi.feeds, function (i) {
          ;(window.sbi.feeds[i].settings.consentGiven = !1),
            window.sbi.feeds[i].afterConsentToggled()
        })
      })
  }))
;(() => {
  var e = {
      1677: () => {
        function e(e) {
          for (
            var t = !!e.getAttribute('data-show-if'),
              r = t
                ? e.getAttribute('data-show-if').split(':')
                : e.getAttribute('data-hide-if').split(':'),
              n = r[0],
              a = (r.length > 1 ? r[1] : '*').split('|'),
              i = (function (e, t) {
                for (
                  var r = [],
                    n = e.querySelectorAll(
                      'input[name="' +
                        t +
                        '"],select[name="' +
                        t +
                        '"],textarea[name="' +
                        t +
                        '"]',
                    ),
                    a = 0;
                  a < n.length;
                  a++
                ) {
                  var i = n[a]
                  ;(('radio' !== i.type && 'checkbox' !== i.type) ||
                    i.checked) &&
                    r.push(i.value)
                }
                return r
              })(
                (function (e) {
                  for (var t = e; t.parentElement; )
                    if ('FORM' === (t = t.parentElement).tagName) return t
                  return null
                })(e),
                n,
              ),
              o = !1,
              s = 0;
            s < i.length;
            s++
          ) {
            var c = i[s]
            if (
              (o = a.indexOf(c) > -1 || (a.indexOf('*') > -1 && c.length > 0))
            )
              break
          }
          e.style.display = t ? (o ? '' : 'none') : o ? 'none' : ''
          var u = e.querySelectorAll('input,select,textarea')
          ;[].forEach.call(u, function (e) {
            ;(o || t) &&
              e.getAttribute('data-was-required') &&
              ((e.required = !0), e.removeAttribute('data-was-required')),
              (o && t) ||
                !e.required ||
                (e.setAttribute('data-was-required', 'true'), (e.required = !1))
          })
        }
        function t() {
          var t = document.querySelectorAll(
            '.mc4wp-form [data-show-if],.mc4wp-form [data-hide-if]',
          )
          ;[].forEach.call(t, e)
        }
        function r(t) {
          if (
            t.target &&
            t.target.form &&
            !(t.target.form.className.indexOf('mc4wp-form') < 0)
          ) {
            var r = t.target.form.querySelectorAll(
              '[data-show-if],[data-hide-if]',
            )
            ;[].forEach.call(r, e)
          }
        }
        document.addEventListener('keyup', r, !0),
          document.addEventListener('change', r, !0),
          document.addEventListener('mc4wp-refresh', t, !0),
          window.addEventListener('load', t),
          t()
      },
      2573: (e, t, r) => {
        var n = r(7422),
          a = r(3409),
          i = function (e, t) {
            ;(this.id = e),
              (this.element = t || document.createElement('form')),
              (this.name =
                this.element.getAttribute('data-name') || 'Form #' + this.id),
              (this.errors = []),
              (this.started = !1)
          }
        ;(i.prototype.setData = function (e) {
          try {
            a(this.element, e)
          } catch (e) {
            console.error(e)
          }
        }),
          (i.prototype.getData = function () {
            return n(this.element, { hash: !0, empty: !0 })
          }),
          (i.prototype.getSerializedData = function () {
            return n(this.element, { hash: !1, empty: !0 })
          }),
          (i.prototype.setResponse = function (e) {
            this.element.querySelector('.mc4wp-response').innerHTML = e
          }),
          (i.prototype.reset = function () {
            this.setResponse(''),
              (this.element.querySelector('.mc4wp-form-fields').style.display =
                ''),
              this.element.reset()
          }),
          (e.exports = i)
      },
      8592: (e, t, r) => {
        var n = r(2573),
          a = [],
          i = {}
        function o(e, t) {
          ;(i[e] = i[e] || []),
            i[e].forEach(function (e) {
              return e.apply(null, t)
            })
        }
        function s(e, t) {
          t = t || parseInt(e.getAttribute('data-id')) || 0
          var r = new n(t, e)
          return a.push(r), r
        }
        e.exports = {
          get: function (e) {
            e = parseInt(e)
            for (var t = 0; t < a.length; t++) if (a[t].id === e) return a[t]
            return s(document.querySelector('.mc4wp-form-' + e), e)
          },
          getByElement: function (e) {
            for (var t = e.form || e, r = 0; r < a.length; r++)
              if (a[r].element === t) return a[r]
            return s(t)
          },
          on: function (e, t) {
            ;(i[e] = i[e] || []), i[e].push(t)
          },
          off: function (e, t) {
            ;(i[e] = i[e] || []),
              (i[e] = i[e].filter(function (e) {
                return e !== t
              }))
          },
          trigger: function (e, t) {
            'submit' === e || e.indexOf('.submit') > 0
              ? o(e, t)
              : window.setTimeout(function () {
                  o(e, t)
                }, 1)
          },
        }
      },
      7422: (e) => {
        var t = /^(?:submit|button|image|reset|file)$/i,
          r = /^(?:input|select|textarea|keygen)/i,
          n = /(\[[^\[\]]*\])/g
        function a(e, t, r) {
          if (0 === t.length) return r
          var n = t.shift(),
            i = n.match(/^\[(.+?)\]$/)
          if ('[]' === n)
            return (
              (e = e || []),
              Array.isArray(e)
                ? e.push(a(null, t, r))
                : ((e._values = e._values || []),
                  e._values.push(a(null, t, r))),
              e
            )
          if (i) {
            var o = i[1],
              s = +o
            isNaN(s)
              ? ((e = e || {})[o] = a(e[o], t, r))
              : ((e = e || [])[s] = a(e[s], t, r))
          } else e[n] = a(e[n], t, r)
          return e
        }
        function i(e, t, r) {
          if (t.match(n))
            a(
              e,
              (function (e) {
                var t = [],
                  r = new RegExp(n),
                  a = /^([^\[\]]*)/.exec(e)
                for (a[1] && t.push(a[1]); null !== (a = r.exec(e)); )
                  t.push(a[1])
                return t
              })(t),
              r,
            )
          else {
            var i = e[t]
            i ? (Array.isArray(i) || (e[t] = [i]), e[t].push(r)) : (e[t] = r)
          }
          return e
        }
        function o(e, t, r) {
          return (
            (r = r.replace(/(\r)?\n/g, '\r\n')),
            (r = (r = encodeURIComponent(r)).replace(/%20/g, '+')),
            e + (e ? '&' : '') + encodeURIComponent(t) + '=' + r
          )
        }
        e.exports = function (e, n) {
          'object' != typeof n
            ? (n = { hash: !!n })
            : void 0 === n.hash && (n.hash = !0)
          for (
            var a = n.hash ? {} : '',
              s = n.serializer || (n.hash ? i : o),
              c = e && e.elements ? e.elements : [],
              u = Object.create(null),
              l = 0;
            l < c.length;
            ++l
          ) {
            var f = c[l]
            if (
              (n.disabled || !f.disabled) &&
              f.name &&
              r.test(f.nodeName) &&
              !t.test(f.type)
            ) {
              var d = f.name,
                m = f.value
              if (
                (('checkbox' !== f.type && 'radio' !== f.type) ||
                  f.checked ||
                  (m = void 0),
                n.empty)
              ) {
                if (
                  ('checkbox' !== f.type || f.checked || (m = ''),
                  'radio' === f.type &&
                    (u[f.name] || f.checked
                      ? f.checked && (u[f.name] = !0)
                      : (u[f.name] = !1)),
                  null == m && 'radio' == f.type)
                )
                  continue
              } else if (!m) continue
              if ('select-multiple' !== f.type) a = s(a, d, m)
              else {
                m = []
                for (var p = f.options, h = !1, v = 0; v < p.length; ++v) {
                  var g = p[v],
                    y = n.empty && !g.value,
                    w = g.value || y
                  g.selected &&
                    w &&
                    ((h = !0),
                    (a =
                      n.hash && '[]' !== d.slice(d.length - 2)
                        ? s(a, d + '[]', g.value)
                        : s(a, d, g.value)))
                }
                !h && n.empty && (a = s(a, d, ''))
              }
            }
          }
          if (n.empty) for (var d in u) u[d] || (a = s(a, d, ''))
          return a
        }
      },
      3409: (e) => {
        e.exports &&
          (e.exports = function e(t, r, n) {
            for (var a in r)
              if (r.hasOwnProperty(a)) {
                var i = a,
                  o = r[a]
                if (
                  (void 0 === o && (o = ''),
                  null === o && (o = ''),
                  void 0 !== n && (i = n + '[' + a + ']'),
                  o.constructor === Array)
                )
                  i += '[]'
                else if ('object' == typeof o) {
                  e(t, o, i)
                  continue
                }
                var s = t.elements.namedItem(i)
                if (s)
                  switch (s.type || s[0].type) {
                    default:
                      s.value = o
                      break
                    case 'radio':
                    case 'checkbox':
                      for (
                        var c = o.constructor === Array ? o : [o], u = 0;
                        u < s.length;
                        u++
                      )
                        s[u].checked = c.indexOf(s[u].value) > -1
                      break
                    case 'select-multiple':
                      c = o.constructor === Array ? o : [o]
                      for (var l = 0; l < s.options.length; l++)
                        s.options[l].selected =
                          c.indexOf(s.options[l].value) > -1
                      break
                    case 'select':
                    case 'select-one':
                      s.value = o.toString() || o
                      break
                    case 'date':
                      s.value = new Date(o).toISOString().split('T')[0]
                  }
              }
          })
      },
    },
    t = {}
  function r(n) {
    var a = t[n]
    if (void 0 !== a) return a.exports
    var i = (t[n] = { exports: {} })
    return e[n](i, i.exports, r), i.exports
  }
  ;(() => {
    var e = window.mc4wp || {},
      t = r(8592)
    function n(e, r) {
      t.trigger(r[0].id + '.' + e, r), t.trigger(e, r)
    }
    function a(e, t) {
      document.addEventListener(
        e,
        function (e) {
          if (e.target) {
            var r = e.target,
              n = !1
            'string' == typeof r.className &&
              (n = r.className.indexOf('mc4wp-form') > -1),
              n ||
                'function' != typeof r.matches ||
                (n = r.matches('.mc4wp-form *')),
              n && t.call(e, e)
          }
        },
        !0,
      )
    }
    if (
      (r(1677),
      a('submit', function (e) {
        var r = t.getByElement(e.target)
        e.defaultPrevented || t.trigger(r.id + '.submit', [r, e]),
          e.defaultPrevented || t.trigger('submit', [r, e])
      }),
      a('focus', function (e) {
        var r = t.getByElement(e.target)
        r.started || (n('started', [r, e]), (r.started = !0))
      }),
      a('change', function (e) {
        n('change', [t.getByElement(e.target), e])
      }),
      e.listeners)
    ) {
      for (var i = e.listeners, o = 0; o < i.length; o++)
        t.on(i[o].event, i[o].callback)
      delete e.listeners
    }
    ;(e.forms = t), (window.mc4wp = e)
  })()
})()
;(() => {
  'use strict'
  var e,
    r,
    _,
    t,
    i,
    a = {},
    n = {}
  function __webpack_require__(e) {
    var r = n[e]
    if (void 0 !== r) return r.exports
    var _ = (n[e] = { exports: {} })
    return a[e](_, _.exports, __webpack_require__), _.exports
  }
  ;(__webpack_require__.m = a),
    (e = []),
    (__webpack_require__.O = (r, _, t, i) => {
      if (!_) {
        var a = 1 / 0
        for (u = 0; u < e.length; u++) {
          for (var [_, t, i] = e[u], n = !0, c = 0; c < _.length; c++)
            (!1 & i || a >= i) &&
            Object.keys(__webpack_require__.O).every((e) =>
              __webpack_require__.O[e](_[c]),
            )
              ? _.splice(c--, 1)
              : ((n = !1), i < a && (a = i))
          if (n) {
            e.splice(u--, 1)
            var o = t()
            void 0 !== o && (r = o)
          }
        }
        return r
      }
      i = i || 0
      for (var u = e.length; u > 0 && e[u - 1][2] > i; u--) e[u] = e[u - 1]
      e[u] = [_, t, i]
    }),
    (_ = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (__webpack_require__.t = function (e, t) {
      if ((1 & t && (e = this(e)), 8 & t)) return e
      if ('object' == typeof e && e) {
        if (4 & t && e.__esModule) return e
        if (16 & t && 'function' == typeof e.then) return e
      }
      var i = Object.create(null)
      __webpack_require__.r(i)
      var a = {}
      r = r || [null, _({}), _([]), _(_)]
      for (var n = 2 & t && e; 'object' == typeof n && !~r.indexOf(n); n = _(n))
        Object.getOwnPropertyNames(n).forEach((r) => (a[r] = () => e[r]))
      return (a.default = () => e), __webpack_require__.d(i, a), i
    }),
    (__webpack_require__.d = (e, r) => {
      for (var _ in r)
        __webpack_require__.o(r, _) &&
          !__webpack_require__.o(e, _) &&
          Object.defineProperty(e, _, { enumerable: !0, get: r[_] })
    }),
    (__webpack_require__.f = {}),
    (__webpack_require__.e = (e) =>
      Promise.all(
        Object.keys(__webpack_require__.f).reduce(
          (r, _) => (__webpack_require__.f[_](e, r), r),
          [],
        ),
      )),
    (__webpack_require__.u = (e) =>
      723 === e
        ? 'lightbox.2b2c155d6ec60974d8c4.bundle.min.js'
        : 48 === e
        ? 'text-path.9f18ebdea5ac00d653e5.bundle.min.js'
        : 209 === e
        ? 'accordion.1840403ce81de408c749.bundle.min.js'
        : 745 === e
        ? 'alert.cbc2a0fee74ee3ed0419.bundle.min.js'
        : 120 === e
        ? 'counter.02cef29c589e742d4c8c.bundle.min.js'
        : 192 === e
        ? 'progress.ca55d33bb06cee4e6f02.bundle.min.js'
        : 520 === e
        ? 'tabs.37d5b4877cdb51ea91e9.bundle.min.js'
        : 181 === e
        ? 'toggle.56f8ace4b1e830c02fc5.bundle.min.js'
        : 791 === e
        ? 'video.d86bfd0676264945e968.bundle.min.js'
        : 268 === e
        ? 'image-carousel.db284b09c0f8a8f1c44d.bundle.min.js'
        : 357 === e
        ? 'text-editor.289ae80d76f0c5abea44.bundle.min.js'
        : 52 === e
        ? 'wp-audio.75f0ced143febb8cd31a.bundle.min.js'
        : 413 === e
        ? 'container.e026b16a99db8a3987c9.bundle.min.js'
        : void 0),
    (__webpack_require__.g = (function () {
      if ('object' == typeof globalThis) return globalThis
      try {
        return this || new Function('return this')()
      } catch (e) {
        if ('object' == typeof window) return window
      }
    })()),
    (__webpack_require__.o = (e, r) =>
      Object.prototype.hasOwnProperty.call(e, r)),
    (t = {}),
    (i = 'elementor:'),
    (__webpack_require__.l = (e, r, _, a) => {
      if (t[e]) t[e].push(r)
      else {
        var n, c
        if (void 0 !== _)
          for (
            var o = document.getElementsByTagName('script'), u = 0;
            u < o.length;
            u++
          ) {
            var b = o[u]
            if (
              b.getAttribute('src') == e ||
              b.getAttribute('data-webpack') == i + _
            ) {
              n = b
              break
            }
          }
        n ||
          ((c = !0),
          ((n = document.createElement('script')).charset = 'utf-8'),
          (n.timeout = 120),
          __webpack_require__.nc &&
            n.setAttribute('nonce', __webpack_require__.nc),
          n.setAttribute('data-webpack', i + _),
          (n.src = e)),
          (t[e] = [r])
        var onScriptComplete = (r, _) => {
            ;(n.onerror = n.onload = null), clearTimeout(p)
            var i = t[e]
            if (
              (delete t[e],
              n.parentNode && n.parentNode.removeChild(n),
              i && i.forEach((e) => e(_)),
              r)
            )
              return r(_)
          },
          p = setTimeout(
            onScriptComplete.bind(null, void 0, { type: 'timeout', target: n }),
            12e4,
          )
        ;(n.onerror = onScriptComplete.bind(null, n.onerror)),
          (n.onload = onScriptComplete.bind(null, n.onload)),
          c && document.head.appendChild(n)
      }
    }),
    (__webpack_require__.r = (e) => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 })
    }),
    (() => {
      var e
      __webpack_require__.g.importScripts &&
        (e = __webpack_require__.g.location + '')
      var r = __webpack_require__.g.document
      if (!e && r && (r.currentScript && (e = r.currentScript.src), !e)) {
        var _ = r.getElementsByTagName('script')
        _.length && (e = _[_.length - 1].src)
      }
      if (!e)
        throw new Error('Automatic publicPath is not supported in this browser')
      ;(e = e
        .replace(/#.*$/, '')
        .replace(/\?.*$/, '')
        .replace(/\/[^\/]+$/, '/')),
        (__webpack_require__.p = e)
    })(),
    (() => {
      var e = { 162: 0 }
      ;(__webpack_require__.f.j = (r, _) => {
        var t = __webpack_require__.o(e, r) ? e[r] : void 0
        if (0 !== t)
          if (t) _.push(t[2])
          else if (162 != r) {
            var i = new Promise((_, i) => (t = e[r] = [_, i]))
            _.push((t[2] = i))
            var a = __webpack_require__.p + __webpack_require__.u(r),
              n = new Error()
            __webpack_require__.l(
              a,
              (_) => {
                if (
                  __webpack_require__.o(e, r) &&
                  (0 !== (t = e[r]) && (e[r] = void 0), t)
                ) {
                  var i = _ && ('load' === _.type ? 'missing' : _.type),
                    a = _ && _.target && _.target.src
                  ;(n.message =
                    'Loading chunk ' + r + ' failed.\n(' + i + ': ' + a + ')'),
                    (n.name = 'ChunkLoadError'),
                    (n.type = i),
                    (n.request = a),
                    t[1](n)
                }
              },
              'chunk-' + r,
              r,
            )
          } else e[r] = 0
      }),
        (__webpack_require__.O.j = (r) => 0 === e[r])
      var webpackJsonpCallback = (r, _) => {
          var t,
            i,
            [a, n, c] = _,
            o = 0
          if (a.some((r) => 0 !== e[r])) {
            for (t in n)
              __webpack_require__.o(n, t) && (__webpack_require__.m[t] = n[t])
            if (c) var u = c(__webpack_require__)
          }
          for (r && r(_); o < a.length; o++)
            (i = a[o]),
              __webpack_require__.o(e, i) && e[i] && e[i][0](),
              (e[a[o]] = 0)
          return __webpack_require__.O(u)
        },
        r = (self.webpackChunkelementor = self.webpackChunkelementor || [])
      r.forEach(webpackJsonpCallback.bind(null, 0)),
        (r.push = webpackJsonpCallback.bind(null, r.push.bind(r)))
    })()
})()
;(self.webpackChunkelementor = self.webpackChunkelementor || []).push([
  [354],
  {
    7914: (e) => {
      ;(e.exports = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : { default: e }
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0)
    },
    381: (e, t) => {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0)
      t.default = (e, t) => {
        t = Array.isArray(t) ? t : [t]
        for (const n of t)
          if (e.constructor.name === n.prototype[Symbol.toStringTag]) return !0
        return !1
      }
    },
    8135: (e, t) => {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0)
      class _default extends elementorModules.ViewModule {
        getDefaultSettings() {
          return {
            selectors: {
              elements: '.elementor-element',
              nestedDocumentElements: '.elementor .elementor-element',
            },
            classes: { editMode: 'elementor-edit-mode' },
          }
        }
        getDefaultElements() {
          const e = this.getSettings('selectors')
          return {
            $elements: this.$element
              .find(e.elements)
              .not(this.$element.find(e.nestedDocumentElements)),
          }
        }
        getDocumentSettings(e) {
          let t
          if (this.isEdit) {
            t = {}
            const e = elementor.settings.page.model
            jQuery.each(e.getActiveControls(), (n) => {
              t[n] = e.attributes[n]
            })
          } else t = this.$element.data('elementor-settings') || {}
          return this.getItems(t, e)
        }
        runElementsHandlers() {
          this.elements.$elements.each((e, t) =>
            elementorFrontend.elementsHandler.runReadyTrigger(t),
          )
        }
        onInit() {
          ;(this.$element = this.getSettings('$element')),
            super.onInit(),
            (this.isEdit = this.$element.hasClass(
              this.getSettings('classes.editMode'),
            )),
            this.isEdit
              ? elementor.on('document:loaded', () => {
                  elementor.settings.page.model.on(
                    'change',
                    this.onSettingsChange.bind(this),
                  )
                })
              : this.runElementsHandlers()
        }
        onSettingsChange() {}
      }
      t.default = _default
    },
    2821: (e, t, n) => {
      'use strict'
      var s = n(7914)
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0)
      var i = s(n(3090))
      class SwiperHandlerBase extends i.default {
        getInitialSlide() {
          const e = this.getEditSettings()
          return e.activeItemIndex ? e.activeItemIndex - 1 : 0
        }
        getSlidesCount() {
          return this.elements.$slides.length
        }
        togglePauseOnHover(e) {
          e
            ? this.elements.$swiperContainer.on({
                mouseenter: () => {
                  this.swiper.autoplay.stop()
                },
                mouseleave: () => {
                  this.swiper.autoplay.start()
                },
              })
            : this.elements.$swiperContainer.off('mouseenter mouseleave')
        }
        handleKenBurns() {
          const e = this.getSettings()
          this.$activeImageBg &&
            this.$activeImageBg.removeClass(e.classes.kenBurnsActive),
            (this.activeItemIndex = this.swiper
              ? this.swiper.activeIndex
              : this.getInitialSlide()),
            this.swiper
              ? (this.$activeImageBg = jQuery(
                  this.swiper.slides[this.activeItemIndex],
                ).children('.' + e.classes.slideBackground))
              : (this.$activeImageBg = jQuery(
                  this.elements.$slides[0],
                ).children('.' + e.classes.slideBackground)),
            this.$activeImageBg.addClass(e.classes.kenBurnsActive)
        }
      }
      t.default = SwiperHandlerBase
    },
    3090: (e) => {
      'use strict'
      e.exports = elementorModules.ViewModule.extend({
        $element: null,
        editorListeners: null,
        onElementChange: null,
        onEditSettingsChange: null,
        onPageSettingsChange: null,
        isEdit: null,
        __construct: function (e) {
          this.isActive(e) &&
            ((this.$element = e.$element),
            (this.isEdit = this.$element.hasClass(
              'elementor-element-edit-mode',
            )),
            this.isEdit && this.addEditorListeners())
        },
        isActive: function () {
          return !0
        },
        findElement: function (e) {
          var t = this.$element
          return t.find(e).filter(function () {
            return jQuery(this).closest('.elementor-element').is(t)
          })
        },
        getUniqueHandlerID: function (e, t) {
          return (
            e || (e = this.getModelCID()),
            t || (t = this.$element),
            e + t.attr('data-element_type') + this.getConstructorID()
          )
        },
        initEditorListeners: function () {
          var e = this
          if (
            ((e.editorListeners = [
              {
                event: 'element:destroy',
                to: elementor.channels.data,
                callback: function (t) {
                  t.cid === e.getModelCID() && e.onDestroy()
                },
              },
            ]),
            e.onElementChange)
          ) {
            const t = e.getWidgetType() || e.getElementType()
            let n = 'change'
            'global' !== t && (n += ':' + t),
              e.editorListeners.push({
                event: n,
                to: elementor.channels.editor,
                callback: function (t, n) {
                  e.getUniqueHandlerID(n.model.cid, n.$el) ===
                    e.getUniqueHandlerID() &&
                    e.onElementChange(t.model.get('name'), t, n)
                },
              })
          }
          e.onEditSettingsChange &&
            e.editorListeners.push({
              event: 'change:editSettings',
              to: elementor.channels.editor,
              callback: function (t, n) {
                n.model.cid === e.getModelCID() &&
                  e.onEditSettingsChange(Object.keys(t.changed)[0])
              },
            }),
            ['page'].forEach(function (t) {
              var n = 'on' + t[0].toUpperCase() + t.slice(1) + 'SettingsChange'
              e[n] &&
                e.editorListeners.push({
                  event: 'change',
                  to: elementor.settings[t].model,
                  callback: function (t) {
                    e[n](t.changed)
                  },
                })
            })
        },
        getEditorListeners: function () {
          return (
            this.editorListeners || this.initEditorListeners(),
            this.editorListeners
          )
        },
        addEditorListeners: function () {
          var e = this.getUniqueHandlerID()
          this.getEditorListeners().forEach(function (t) {
            elementorFrontend.addListenerOnce(e, t.event, t.callback, t.to)
          })
        },
        removeEditorListeners: function () {
          var e = this.getUniqueHandlerID()
          this.getEditorListeners().forEach(function (t) {
            elementorFrontend.removeListeners(e, t.event, null, t.to)
          })
        },
        getElementType: function () {
          return this.$element.data('element_type')
        },
        getWidgetType: function () {
          const e = this.$element.data('widget_type')
          if (e) return e.split('.')[0]
        },
        getID: function () {
          return this.$element.data('id')
        },
        getModelCID: function () {
          return this.$element.data('model-cid')
        },
        getElementSettings: function (e) {
          let t = {}
          const n = this.getModelCID()
          if (this.isEdit && n) {
            const e = elementorFrontend.config.elements.data[n],
              s = e.attributes
            let i = s.widgetType || s.elType
            s.isInner && (i = 'inner-' + i)
            let r = elementorFrontend.config.elements.keys[i]
            r ||
              ((r = elementorFrontend.config.elements.keys[i] = []),
              jQuery.each(e.controls, (e, t) => {
                t.frontend_available && r.push(e)
              })),
              jQuery.each(e.getActiveControls(), function (e) {
                if (-1 !== r.indexOf(e)) {
                  let n = s[e]
                  n.toJSON && (n = n.toJSON()), (t[e] = n)
                }
              })
          } else t = this.$element.data('settings') || {}
          return this.getItems(t, e)
        },
        getEditSettings: function (e) {
          var t = {}
          return (
            this.isEdit &&
              (t =
                elementorFrontend.config.elements.editSettings[
                  this.getModelCID()
                ].attributes),
            this.getItems(t, e)
          )
        },
        getCurrentDeviceSetting: function (e) {
          return elementorFrontend.getCurrentDeviceSetting(
            this.getElementSettings(),
            e,
          )
        },
        onInit: function () {
          this.isActive(this.getSettings()) &&
            elementorModules.ViewModule.prototype.onInit.apply(this, arguments)
        },
        onDestroy: function () {
          this.isEdit && this.removeEditorListeners(),
            this.unbindEvents && this.unbindEvents()
        },
      })
    },
    6412: (e, t, n) => {
      'use strict'
      var s = n(7914),
        i = s(n(5955)),
        r = s(n(8135)),
        o = s(n(5658)),
        l = s(n(3090)),
        c = s(n(2821))
      i.default.frontend = {
        Document: r.default,
        tools: { StretchElement: o.default },
        handlers: { Base: l.default, SwiperBase: c.default },
      }
    },
    5658: (e) => {
      'use strict'
      e.exports = elementorModules.ViewModule.extend({
        getDefaultSettings: function () {
          return {
            element: null,
            direction: elementorFrontend.config.is_rtl ? 'right' : 'left',
            selectors: { container: window },
          }
        },
        getDefaultElements: function () {
          return { $element: jQuery(this.getSettings('element')) }
        },
        stretch: function () {
          var e,
            t = this.getSettings('selectors.container')
          try {
            e = jQuery(t)
          } catch (e) {}
          ;(e && e.length) ||
            (e = jQuery(this.getDefaultSettings().selectors.container)),
            this.reset()
          var n = this.elements.$element,
            s = e.innerWidth(),
            i = n.offset().left,
            r = 'fixed' === n.css('position'),
            o = r ? 0 : i
          if (window !== e[0]) {
            var l = e.offset().left
            r && (o = l), i > l && (o = i - l)
          }
          r ||
            (elementorFrontend.config.is_rtl && (o = s - (n.outerWidth() + o)),
            (o = -o))
          var c = {}
          ;(c.width = s + 'px'),
            (c[this.getSettings('direction')] = o + 'px'),
            n.css(c)
        },
        reset: function () {
          var e = { width: '' }
          ;(e[this.getSettings('direction')] = ''),
            this.elements.$element.css(e)
        },
      })
    },
    2618: (e, t, n) => {
      'use strict'
      var s = n(7914)
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0)
      var i = s(n(7597)),
        r = s(n(381))
      class ArgsObject extends i.default {
        static getInstanceType() {
          return 'ArgsObject'
        }
        constructor(e) {
          super(), (this.args = e)
        }
        requireArgument(e, t = this.args) {
          if (!t.hasOwnProperty(e)) throw Error(`${e} is required.`)
        }
        requireArgumentType(e, t, n = this.args) {
          if ((this.requireArgument(e, n), typeof n[e] !== t))
            throw Error(`${e} invalid type: ${t}.`)
        }
        requireArgumentInstance(e, t, n = this.args) {
          if (
            (this.requireArgument(e, n),
            !(n[e] instanceof t || (0, r.default)(n[e], t)))
          )
            throw Error(`${e} invalid instance.`)
        }
        requireArgumentConstructor(e, t, n = this.args) {
          if (
            (this.requireArgument(e, n),
            n[e].constructor.toString() !== t.prototype.constructor.toString())
          )
            throw Error(`${e} invalid constructor type.`)
        }
      }
      t.default = ArgsObject
    },
    869: (e, t) => {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = t.ForceMethodImplementation = void 0)
      class ForceMethodImplementation extends Error {
        constructor(e = {}) {
          super(
            `${e.isStatic ? 'static ' : ''}${
              e.fullName
            }() should be implemented, please provide '${
              e.functionName || e.fullName
            }' functionality.`,
          ),
            Error.captureStackTrace(this, ForceMethodImplementation)
        }
      }
      t.ForceMethodImplementation = ForceMethodImplementation
      t.default = () => {
        const e = Error().stack.split('\n')[2].trim(),
          t = e.startsWith('at new') ? 'constructor' : e.split(' ')[1],
          n = {}
        if (
          ((n.functionName = t), (n.fullName = t), n.functionName.includes('.'))
        ) {
          const e = n.functionName.split('.')
          ;(n.className = e[0]), (n.functionName = e[1])
        } else n.isStatic = !0
        throw new ForceMethodImplementation(n)
      }
    },
    7597: (e, t) => {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0)
      class InstanceType {
        static [Symbol.hasInstance](e) {
          let t = super[Symbol.hasInstance](e)
          if (e && !e.constructor.getInstanceType) return t
          if (
            e &&
            (e.instanceTypes || (e.instanceTypes = []),
            t ||
              (this.getInstanceType() === e.constructor.getInstanceType() &&
                (t = !0)),
            t)
          ) {
            const t =
              this.getInstanceType === InstanceType.getInstanceType
                ? 'BaseInstanceType'
                : this.getInstanceType()
            ;-1 === e.instanceTypes.indexOf(t) && e.instanceTypes.push(t)
          }
          return (
            !t &&
              e &&
              (t =
                e.instanceTypes &&
                Array.isArray(e.instanceTypes) &&
                -1 !== e.instanceTypes.indexOf(this.getInstanceType())),
            t
          )
        }
        constructor() {
          let e = new.target
          const t = []
          for (; e.__proto__ && e.__proto__.name; )
            t.push(e.__proto__), (e = e.__proto__)
          t.reverse().forEach((e) => this instanceof e)
        }
        static getInstanceType() {
          elementorModules.ForceMethodImplementation()
        }
      }
      t.default = InstanceType
    },
    1192: (e) => {
      'use strict'
      const Module = function () {
        const e = jQuery,
          t = arguments,
          n = this,
          s = {}
        let i
        const ensureClosureMethods = function () {
            e.each(n, function (e) {
              const t = n[e]
              'function' == typeof t &&
                (n[e] = function () {
                  return t.apply(n, arguments)
                })
            })
          },
          initSettings = function () {
            i = n.getDefaultSettings()
            const s = t[0]
            s && e.extend(!0, i, s)
          },
          init = function () {
            n.__construct.apply(n, t),
              ensureClosureMethods(),
              initSettings(),
              n.trigger('init')
          }
        ;(this.getItems = function (e, t) {
          if (t) {
            const n = t.split('.'),
              s = n.splice(0, 1)
            if (!n.length) return e[s]
            if (!e[s]) return
            return this.getItems(e[s], n.join('.'))
          }
          return e
        }),
          (this.getSettings = function (e) {
            return this.getItems(i, e)
          }),
          (this.setSettings = function (t, s, r) {
            if ((r || (r = i), 'object' == typeof t)) return e.extend(r, t), n
            const o = t.split('.'),
              l = o.splice(0, 1)
            return o.length
              ? (r[l] || (r[l] = {}), n.setSettings(o.join('.'), s, r[l]))
              : ((r[l] = s), n)
          }),
          (this.getErrorMessage = function (e, t) {
            let n
            if ('forceMethodImplementation' === e)
              n = `The method '${t}' must to be implemented in the inheritor child.`
            else n = 'An error occurs'
            return n
          }),
          (this.forceMethodImplementation = function (e) {
            throw new Error(
              this.getErrorMessage('forceMethodImplementation', e),
            )
          }),
          (this.on = function (t, i) {
            if ('object' == typeof t)
              return (
                e.each(t, function (e) {
                  n.on(e, this)
                }),
                n
              )
            return (
              t.split(' ').forEach(function (e) {
                s[e] || (s[e] = []), s[e].push(i)
              }),
              n
            )
          }),
          (this.off = function (e, t) {
            if (!s[e]) return n
            if (!t) return delete s[e], n
            const i = s[e].indexOf(t)
            return (
              -1 !== i && (delete s[e][i], (s[e] = s[e].filter((e) => e))), n
            )
          }),
          (this.trigger = function (t) {
            const i = 'on' + t[0].toUpperCase() + t.slice(1),
              r = Array.prototype.slice.call(arguments, 1)
            n[i] && n[i].apply(n, r)
            const o = s[t]
            return o
              ? (e.each(o, function (e, t) {
                  t.apply(n, r)
                }),
                n)
              : n
          }),
          init()
      }
      ;(Module.prototype.__construct = function () {}),
        (Module.prototype.getDefaultSettings = function () {
          return {}
        }),
        (Module.prototype.getConstructorID = function () {
          return this.constructor.name
        }),
        (Module.extend = function (e) {
          const t = jQuery,
            n = this,
            child = function () {
              return n.apply(this, arguments)
            }
          return (
            t.extend(child, n),
            ((child.prototype = Object.create(
              t.extend({}, n.prototype, e),
            )).constructor = child),
            (child.__super__ = n.prototype),
            child
          )
        }),
        (e.exports = Module)
    },
    6516: (e, t, n) => {
      'use strict'
      var s = n(7914)(n(2640))
      e.exports = s.default.extend({
        getDefaultSettings: function () {
          return {
            container: null,
            items: null,
            columnsCount: 3,
            verticalSpaceBetween: 30,
          }
        },
        getDefaultElements: function () {
          return {
            $container: jQuery(this.getSettings('container')),
            $items: jQuery(this.getSettings('items')),
          }
        },
        run: function () {
          var e = [],
            t = this.elements.$container.position().top,
            n = this.getSettings(),
            s = n.columnsCount
          ;(t += parseInt(this.elements.$container.css('margin-top'), 10)),
            this.elements.$items.each(function (i) {
              var r = Math.floor(i / s),
                o = jQuery(this),
                l = o[0].getBoundingClientRect().height + n.verticalSpaceBetween
              if (r) {
                var c = o.position(),
                  a = i % s,
                  u = c.top - t - e[a]
                ;(u -= parseInt(o.css('margin-top'), 10)),
                  (u *= -1),
                  o.css('margin-top', u + 'px'),
                  (e[a] += l)
              } else e.push(l)
            })
        },
      })
    },
    400: (e, t) => {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0)
      t.default = class Scroll {
        static scrollObserver(e) {
          let t = 0
          const n = {
            root: e.root || null,
            rootMargin: e.offset || '0px',
            threshold: ((e = 0) => {
              const t = []
              if (e > 0 && e <= 100) {
                const n = 100 / e
                for (let e = 0; e <= 100; e += n) t.push(e / 100)
              } else t.push(0)
              return t
            })(e.sensitivity),
          }
          return new IntersectionObserver(function handleIntersect(n) {
            const s = n[0].boundingClientRect.y,
              i = n[0].isIntersecting,
              r = s < t ? 'down' : 'up',
              o = Math.abs(
                parseFloat((100 * n[0].intersectionRatio).toFixed(2)),
              )
            e.callback({
              sensitivity: e.sensitivity,
              isInViewport: i,
              scrollPercentage: o,
              intersectionScrollDirection: r,
            }),
              (t = s)
          }, n)
        }
        static getElementViewportPercentage(e, t = {}) {
          const n = e[0].getBoundingClientRect(),
            s = t.start || 0,
            i = t.end || 0,
            r = (window.innerHeight * s) / 100,
            o = (window.innerHeight * i) / 100,
            l = n.top - window.innerHeight,
            c = 0 - l + r,
            a = n.top + r + e.height() - l + o,
            u = Math.max(0, Math.min(c / a, 1))
          return parseFloat((100 * u).toFixed(2))
        }
        static getPageScrollPercentage(e = {}, t) {
          const n = e.start || 0,
            s = e.end || 0,
            i =
              t ||
              document.documentElement.scrollHeight -
                document.documentElement.clientHeight,
            r = (i * n) / 100,
            o = i + r + (i * s) / 100
          return (
            ((document.documentElement.scrollTop +
              document.body.scrollTop +
              r) /
              o) *
            100
          )
        }
      }
    },
    2640: (e, t, n) => {
      'use strict'
      var s = n(7914)(n(1192))
      e.exports = s.default.extend({
        elements: null,
        getDefaultElements: function () {
          return {}
        },
        bindEvents: function () {},
        onInit: function () {
          this.initElements(), this.bindEvents()
        },
        initElements: function () {
          this.elements = this.getDefaultElements()
        },
      })
    },
    5955: (e, t, n) => {
      'use strict'
      var s = n(7914)
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0)
      var i = s(n(1192)),
        r = s(n(2640)),
        o = s(n(2618)),
        l = s(n(6516)),
        c = s(n(400)),
        a = s(n(869)),
        u = (window.elementorModules = {
          Module: i.default,
          ViewModule: r.default,
          ArgsObject: o.default,
          ForceMethodImplementation: a.default,
          utils: { Masonry: l.default, Scroll: c.default },
        })
      t.default = u
    },
  },
  (e) => {
    var t
    ;(t = 6412), e((e.s = t))
  },
])
!(function () {
  'use strict'
  function Waypoint(options) {
    if (!options) throw new Error('No options passed to Waypoint constructor')
    if (!options.element)
      throw new Error('No element option passed to Waypoint constructor')
    if (!options.handler)
      throw new Error('No handler option passed to Waypoint constructor')
    ;(this.key = 'waypoint-' + keyCounter),
      (this.options = Waypoint.Adapter.extend({}, Waypoint.defaults, options)),
      (this.element = this.options.element),
      (this.adapter = new Waypoint.Adapter(this.element)),
      (this.callback = options.handler),
      (this.axis = this.options.horizontal ? 'horizontal' : 'vertical'),
      (this.enabled = this.options.enabled),
      (this.triggerPoint = null),
      (this.group = Waypoint.Group.findOrCreate({
        name: this.options.group,
        axis: this.axis,
      })),
      (this.context = Waypoint.Context.findOrCreateByElement(
        this.options.context,
      )),
      Waypoint.offsetAliases[this.options.offset] &&
        (this.options.offset = Waypoint.offsetAliases[this.options.offset]),
      this.group.add(this),
      this.context.add(this),
      (allWaypoints[this.key] = this),
      (keyCounter += 1)
  }
  var keyCounter = 0,
    allWaypoints = {}
  ;(Waypoint.prototype.queueTrigger = function (direction) {
    this.group.queueTrigger(this, direction)
  }),
    (Waypoint.prototype.trigger = function (args) {
      this.enabled && this.callback && this.callback.apply(this, args)
    }),
    (Waypoint.prototype.destroy = function () {
      this.context.remove(this),
        this.group.remove(this),
        delete allWaypoints[this.key]
    }),
    (Waypoint.prototype.disable = function () {
      return (this.enabled = !1), this
    }),
    (Waypoint.prototype.enable = function () {
      return this.context.refresh(), (this.enabled = !0), this
    }),
    (Waypoint.prototype.next = function () {
      return this.group.next(this)
    }),
    (Waypoint.prototype.previous = function () {
      return this.group.previous(this)
    }),
    (Waypoint.invokeAll = function (method) {
      var allWaypointsArray = []
      for (var waypointKey in allWaypoints)
        allWaypointsArray.push(allWaypoints[waypointKey])
      for (var i = 0, end = allWaypointsArray.length; i < end; i++)
        allWaypointsArray[i][method]()
    }),
    (Waypoint.destroyAll = function () {
      Waypoint.invokeAll('destroy')
    }),
    (Waypoint.disableAll = function () {
      Waypoint.invokeAll('disable')
    }),
    (Waypoint.enableAll = function () {
      Waypoint.Context.refreshAll()
      for (var waypointKey in allWaypoints)
        allWaypoints[waypointKey].enabled = !0
      return this
    }),
    (Waypoint.refreshAll = function () {
      Waypoint.Context.refreshAll()
    }),
    (Waypoint.viewportHeight = function () {
      return window.innerHeight || document.documentElement.clientHeight
    }),
    (Waypoint.viewportWidth = function () {
      return document.documentElement.clientWidth
    }),
    (Waypoint.adapters = []),
    (Waypoint.defaults = {
      context: window,
      continuous: !0,
      enabled: !0,
      group: 'default',
      horizontal: !1,
      offset: 0,
    }),
    (Waypoint.offsetAliases = {
      'bottom-in-view': function () {
        return this.context.innerHeight() - this.adapter.outerHeight()
      },
      'right-in-view': function () {
        return this.context.innerWidth() - this.adapter.outerWidth()
      },
    }),
    (window.Waypoint = Waypoint)
})(),
  (function () {
    'use strict'
    function requestAnimationFrameShim(callback) {
      window.setTimeout(callback, 1e3 / 60)
    }
    function Context(element) {
      ;(this.element = element),
        (this.Adapter = Waypoint.Adapter),
        (this.adapter = new this.Adapter(element)),
        (this.key = 'waypoint-context-' + keyCounter),
        (this.didScroll = !1),
        (this.didResize = !1),
        (this.oldScroll = {
          x: this.adapter.scrollLeft(),
          y: this.adapter.scrollTop(),
        }),
        (this.waypoints = { vertical: {}, horizontal: {} }),
        (element.waypointContextKey = this.key),
        (contexts[element.waypointContextKey] = this),
        (keyCounter += 1),
        Waypoint.windowContext ||
          ((Waypoint.windowContext = !0),
          (Waypoint.windowContext = new Context(window))),
        this.createThrottledScrollHandler(),
        this.createThrottledResizeHandler()
    }
    var keyCounter = 0,
      contexts = {},
      Waypoint = window.Waypoint,
      oldWindowLoad = window.onload
    ;(Context.prototype.add = function (waypoint) {
      var axis = waypoint.options.horizontal ? 'horizontal' : 'vertical'
      ;(this.waypoints[axis][waypoint.key] = waypoint), this.refresh()
    }),
      (Context.prototype.checkEmpty = function () {
        var horizontalEmpty = this.Adapter.isEmptyObject(
            this.waypoints.horizontal,
          ),
          verticalEmpty = this.Adapter.isEmptyObject(this.waypoints.vertical),
          isWindow = this.element == this.element.window
        horizontalEmpty &&
          verticalEmpty &&
          !isWindow &&
          (this.adapter.off('.waypoints'), delete contexts[this.key])
      }),
      (Context.prototype.createThrottledResizeHandler = function () {
        function resizeHandler() {
          self.handleResize(), (self.didResize = !1)
        }
        var self = this
        this.adapter.on('resize.waypoints', function () {
          self.didResize ||
            ((self.didResize = !0),
            Waypoint.requestAnimationFrame(resizeHandler))
        })
      }),
      (Context.prototype.createThrottledScrollHandler = function () {
        function scrollHandler() {
          self.handleScroll(), (self.didScroll = !1)
        }
        var self = this
        this.adapter.on('scroll.waypoints', function () {
          ;(self.didScroll && !Waypoint.isTouch) ||
            ((self.didScroll = !0),
            Waypoint.requestAnimationFrame(scrollHandler))
        })
      }),
      (Context.prototype.handleResize = function () {
        Waypoint.Context.refreshAll()
      }),
      (Context.prototype.handleScroll = function () {
        var triggeredGroups = {},
          axes = {
            horizontal: {
              newScroll: this.adapter.scrollLeft(),
              oldScroll: this.oldScroll.x,
              forward: 'right',
              backward: 'left',
            },
            vertical: {
              newScroll: this.adapter.scrollTop(),
              oldScroll: this.oldScroll.y,
              forward: 'down',
              backward: 'up',
            },
          }
        for (var axisKey in axes) {
          var axis = axes[axisKey],
            isForward = axis.newScroll > axis.oldScroll,
            direction = isForward ? axis.forward : axis.backward
          for (var waypointKey in this.waypoints[axisKey]) {
            var waypoint = this.waypoints[axisKey][waypointKey]
            if (null !== waypoint.triggerPoint) {
              var wasBeforeTriggerPoint =
                  axis.oldScroll < waypoint.triggerPoint,
                nowAfterTriggerPoint = axis.newScroll >= waypoint.triggerPoint,
                crossedForward = wasBeforeTriggerPoint && nowAfterTriggerPoint,
                crossedBackward =
                  !wasBeforeTriggerPoint && !nowAfterTriggerPoint
              ;(crossedForward || crossedBackward) &&
                (waypoint.queueTrigger(direction),
                (triggeredGroups[waypoint.group.id] = waypoint.group))
            }
          }
        }
        for (var groupKey in triggeredGroups)
          triggeredGroups[groupKey].flushTriggers()
        this.oldScroll = {
          x: axes.horizontal.newScroll,
          y: axes.vertical.newScroll,
        }
      }),
      (Context.prototype.innerHeight = function () {
        return this.element == this.element.window
          ? Waypoint.viewportHeight()
          : this.adapter.innerHeight()
      }),
      (Context.prototype.remove = function (waypoint) {
        delete this.waypoints[waypoint.axis][waypoint.key], this.checkEmpty()
      }),
      (Context.prototype.innerWidth = function () {
        return this.element == this.element.window
          ? Waypoint.viewportWidth()
          : this.adapter.innerWidth()
      }),
      (Context.prototype.destroy = function () {
        var allWaypoints = []
        for (var axis in this.waypoints)
          for (var waypointKey in this.waypoints[axis])
            allWaypoints.push(this.waypoints[axis][waypointKey])
        for (var i = 0, end = allWaypoints.length; i < end; i++)
          allWaypoints[i].destroy()
      }),
      (Context.prototype.refresh = function () {
        var axes,
          isWindow = this.element == this.element.window,
          contextOffset = isWindow ? void 0 : this.adapter.offset(),
          triggeredGroups = {}
        this.handleScroll(),
          (axes = {
            horizontal: {
              contextOffset: isWindow ? 0 : contextOffset.left,
              contextScroll: isWindow ? 0 : this.oldScroll.x,
              contextDimension: this.innerWidth(),
              oldScroll: this.oldScroll.x,
              forward: 'right',
              backward: 'left',
              offsetProp: 'left',
            },
            vertical: {
              contextOffset: isWindow ? 0 : contextOffset.top,
              contextScroll: isWindow ? 0 : this.oldScroll.y,
              contextDimension: this.innerHeight(),
              oldScroll: this.oldScroll.y,
              forward: 'down',
              backward: 'up',
              offsetProp: 'top',
            },
          })
        for (var axisKey in axes) {
          var axis = axes[axisKey]
          for (var waypointKey in this.waypoints[axisKey]) {
            var contextModifier,
              wasBeforeScroll,
              nowAfterScroll,
              triggeredBackward,
              triggeredForward,
              waypoint = this.waypoints[axisKey][waypointKey],
              adjustment = waypoint.options.offset,
              oldTriggerPoint = waypoint.triggerPoint,
              elementOffset = 0,
              freshWaypoint = null == oldTriggerPoint
            waypoint.element !== waypoint.element.window &&
              (elementOffset = waypoint.adapter.offset()[axis.offsetProp]),
              'function' == typeof adjustment
                ? (adjustment = adjustment.apply(waypoint))
                : 'string' == typeof adjustment &&
                  ((adjustment = parseFloat(adjustment)),
                  waypoint.options.offset.indexOf('%') > -1 &&
                    (adjustment = Math.ceil(
                      (axis.contextDimension * adjustment) / 100,
                    ))),
              (contextModifier = axis.contextScroll - axis.contextOffset),
              (waypoint.triggerPoint = Math.floor(
                elementOffset + contextModifier - adjustment,
              )),
              (wasBeforeScroll = oldTriggerPoint < axis.oldScroll),
              (nowAfterScroll = waypoint.triggerPoint >= axis.oldScroll),
              (triggeredBackward = wasBeforeScroll && nowAfterScroll),
              (triggeredForward = !wasBeforeScroll && !nowAfterScroll),
              !freshWaypoint && triggeredBackward
                ? (waypoint.queueTrigger(axis.backward),
                  (triggeredGroups[waypoint.group.id] = waypoint.group))
                : !freshWaypoint && triggeredForward
                ? (waypoint.queueTrigger(axis.forward),
                  (triggeredGroups[waypoint.group.id] = waypoint.group))
                : freshWaypoint &&
                  axis.oldScroll >= waypoint.triggerPoint &&
                  (waypoint.queueTrigger(axis.forward),
                  (triggeredGroups[waypoint.group.id] = waypoint.group))
          }
        }
        return (
          Waypoint.requestAnimationFrame(function () {
            for (var groupKey in triggeredGroups)
              triggeredGroups[groupKey].flushTriggers()
          }),
          this
        )
      }),
      (Context.findOrCreateByElement = function (element) {
        return Context.findByElement(element) || new Context(element)
      }),
      (Context.refreshAll = function () {
        for (var contextId in contexts) contexts[contextId].refresh()
      }),
      (Context.findByElement = function (element) {
        return contexts[element.waypointContextKey]
      }),
      (window.onload = function () {
        oldWindowLoad && oldWindowLoad(), Context.refreshAll()
      }),
      (Waypoint.requestAnimationFrame = function (callback) {
        var requestFn =
          window.requestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          requestAnimationFrameShim
        requestFn.call(window, callback)
      }),
      (Waypoint.Context = Context)
  })(),
  (function () {
    'use strict'
    function byTriggerPoint(a, b) {
      return a.triggerPoint - b.triggerPoint
    }
    function byReverseTriggerPoint(a, b) {
      return b.triggerPoint - a.triggerPoint
    }
    function Group(options) {
      ;(this.name = options.name),
        (this.axis = options.axis),
        (this.id = this.name + '-' + this.axis),
        (this.waypoints = []),
        this.clearTriggerQueues(),
        (groups[this.axis][this.name] = this)
    }
    var groups = { vertical: {}, horizontal: {} },
      Waypoint = window.Waypoint
    ;(Group.prototype.add = function (waypoint) {
      this.waypoints.push(waypoint)
    }),
      (Group.prototype.clearTriggerQueues = function () {
        this.triggerQueues = { up: [], down: [], left: [], right: [] }
      }),
      (Group.prototype.flushTriggers = function () {
        for (var direction in this.triggerQueues) {
          var waypoints = this.triggerQueues[direction],
            reverse = 'up' === direction || 'left' === direction
          waypoints.sort(reverse ? byReverseTriggerPoint : byTriggerPoint)
          for (var i = 0, end = waypoints.length; i < end; i += 1) {
            var waypoint = waypoints[i]
            ;(waypoint.options.continuous || i === waypoints.length - 1) &&
              waypoint.trigger([direction])
          }
        }
        this.clearTriggerQueues()
      }),
      (Group.prototype.next = function (waypoint) {
        this.waypoints.sort(byTriggerPoint)
        var index = Waypoint.Adapter.inArray(waypoint, this.waypoints),
          isLast = index === this.waypoints.length - 1
        return isLast ? null : this.waypoints[index + 1]
      }),
      (Group.prototype.previous = function (waypoint) {
        this.waypoints.sort(byTriggerPoint)
        var index = Waypoint.Adapter.inArray(waypoint, this.waypoints)
        return index ? this.waypoints[index - 1] : null
      }),
      (Group.prototype.queueTrigger = function (waypoint, direction) {
        this.triggerQueues[direction].push(waypoint)
      }),
      (Group.prototype.remove = function (waypoint) {
        var index = Waypoint.Adapter.inArray(waypoint, this.waypoints)
        index > -1 && this.waypoints.splice(index, 1)
      }),
      (Group.prototype.first = function () {
        return this.waypoints[0]
      }),
      (Group.prototype.last = function () {
        return this.waypoints[this.waypoints.length - 1]
      }),
      (Group.findOrCreate = function (options) {
        return groups[options.axis][options.name] || new Group(options)
      }),
      (Waypoint.Group = Group)
  })(),
  (function () {
    'use strict'
    function JQueryAdapter(element) {
      this.$element = $(element)
    }
    var $ = window.jQuery,
      Waypoint = window.Waypoint
    $.each(
      [
        'innerHeight',
        'innerWidth',
        'off',
        'offset',
        'on',
        'outerHeight',
        'outerWidth',
        'scrollLeft',
        'scrollTop',
      ],
      function (i, method) {
        JQueryAdapter.prototype[method] = function () {
          var args = Array.prototype.slice.call(arguments)
          return this.$element[method].apply(this.$element, args)
        }
      },
    ),
      $.each(['extend', 'inArray', 'isEmptyObject'], function (i, method) {
        JQueryAdapter[method] = $[method]
      }),
      Waypoint.adapters.push({ name: 'jquery', Adapter: JQueryAdapter }),
      (Waypoint.Adapter = JQueryAdapter)
  })(),
  (function () {
    'use strict'
    function createExtension(framework) {
      return function () {
        var waypoints = [],
          overrides = arguments[0]
        return (
          framework.isFunction(arguments[0]) &&
            ((overrides = framework.extend({}, arguments[1])),
            (overrides.handler = arguments[0])),
          this.each(function () {
            var options = framework.extend({}, overrides, { element: this })
            'string' == typeof options.context &&
              (options.context = framework(this).closest(options.context)[0]),
              waypoints.push(new Waypoint(options))
          }),
          waypoints
        )
      }
    }
    var Waypoint = window.Waypoint
    window.jQuery &&
      (window.jQuery.fn.elementorWaypoint = createExtension(window.jQuery)),
      window.Zepto &&
        (window.Zepto.fn.elementorWaypoint = createExtension(window.Zepto))
  })()
