!(function ($, c, i, n) {
  var t = function (t) {
    var a = this
    ;(a.$form = t),
      (a.$attributeFields = t.find('.variations select')),
      (a.$singleVariation = t.find('.single_variation')),
      (a.$singleVariationWrap = t.find('.single_variation_wrap')),
      (a.$resetVariations = t.find('.reset_variations')),
      (a.$product = t.closest('.product')),
      (a.variationData = t.data('product_variations')),
      (a.useAjax = !1 === a.variationData),
      (a.xhr = !1),
      (a.loading = !0),
      a.$singleVariationWrap.show(),
      a.$form.off('.wc-variation-form'),
      (a.getChosenAttributes = a.getChosenAttributes.bind(a)),
      (a.findMatchingVariations = a.findMatchingVariations.bind(a)),
      (a.isMatch = a.isMatch.bind(a)),
      (a.toggleResetLink = a.toggleResetLink.bind(a)),
      t.on(
        'click.wc-variation-form',
        '.reset_variations',
        { variationForm: a },
        a.onReset,
      ),
      t.on('reload_product_variations', { variationForm: a }, a.onReload),
      t.on('hide_variation', { variationForm: a }, a.onHide),
      t.on('show_variation', { variationForm: a }, a.onShow),
      t.on(
        'click',
        '.single_add_to_cart_button',
        { variationForm: a },
        a.onAddToCart,
      ),
      t.on('reset_data', { variationForm: a }, a.onResetDisplayedVariation),
      t.on('reset_image', { variationForm: a }, a.onResetImage),
      t.on(
        'change.wc-variation-form',
        '.variations select',
        { variationForm: a },
        a.onChange,
      ),
      t.on(
        'found_variation.wc-variation-form',
        { variationForm: a },
        a.onFoundVariation,
      ),
      t.on(
        'check_variations.wc-variation-form',
        { variationForm: a },
        a.onFindVariation,
      ),
      t.on(
        'update_variation_values.wc-variation-form',
        { variationForm: a },
        a.onUpdateAttributes,
      ),
      setTimeout(function () {
        t.trigger('check_variations'),
          t.trigger('wc_variation_form', a),
          (a.loading = !1)
      }, 100)
  }
  ;(t.prototype.onReset = function (t) {
    t.preventDefault(),
      t.data.variationForm.$attributeFields.val('').trigger('change'),
      t.data.variationForm.$form.trigger('reset_data')
  }),
    (t.prototype.onReload = function (t) {
      t = t.data.variationForm
      ;(t.variationData = t.$form.data('product_variations')),
        (t.useAjax = !1 === t.variationData),
        t.$form.trigger('check_variations')
    }),
    (t.prototype.onHide = function (t) {
      t.preventDefault(),
        t.data.variationForm.$form
          .find('.single_add_to_cart_button')
          .removeClass('wc-variation-is-unavailable')
          .addClass('disabled wc-variation-selection-needed'),
        t.data.variationForm.$form
          .find('.woocommerce-variation-add-to-cart')
          .removeClass('woocommerce-variation-add-to-cart-enabled')
          .addClass('woocommerce-variation-add-to-cart-disabled')
    }),
    (t.prototype.onShow = function (t, a, i) {
      t.preventDefault(),
        i
          ? (t.data.variationForm.$form
              .find('.single_add_to_cart_button')
              .removeClass(
                'disabled wc-variation-selection-needed wc-variation-is-unavailable',
              ),
            t.data.variationForm.$form
              .find('.woocommerce-variation-add-to-cart')
              .removeClass('woocommerce-variation-add-to-cart-disabled')
              .addClass('woocommerce-variation-add-to-cart-enabled'))
          : (t.data.variationForm.$form
              .find('.single_add_to_cart_button')
              .removeClass('wc-variation-selection-needed')
              .addClass('disabled wc-variation-is-unavailable'),
            t.data.variationForm.$form
              .find('.woocommerce-variation-add-to-cart')
              .removeClass('woocommerce-variation-add-to-cart-enabled')
              .addClass('woocommerce-variation-add-to-cart-disabled')),
        wp.mediaelement &&
          t.data.variationForm.$form
            .find('.wp-audio-shortcode, .wp-video-shortcode')
            .not('.mejs-container')
            .filter(function () {
              return !$(this).parent().hasClass('mejs-mediaelement')
            })
            .mediaelementplayer(wp.mediaelement.settings)
    }),
    (t.prototype.onAddToCart = function (t) {
      $(this).is('.disabled') &&
        (t.preventDefault(),
        $(this).is('.wc-variation-is-unavailable')
          ? c.alert(wc_add_to_cart_variation_params.i18n_unavailable_text)
          : $(this).is('.wc-variation-selection-needed') &&
            c.alert(wc_add_to_cart_variation_params.i18n_make_a_selection_text))
    }),
    (t.prototype.onResetDisplayedVariation = function (t) {
      t = t.data.variationForm
      t.$product.find('.product_meta').find('.sku').wc_reset_content(),
        t.$product
          .find(
            '.product_weight, .woocommerce-product-attributes-item--weight .woocommerce-product-attributes-item__value',
          )
          .wc_reset_content(),
        t.$product
          .find(
            '.product_dimensions, .woocommerce-product-attributes-item--dimensions .woocommerce-product-attributes-item__value',
          )
          .wc_reset_content(),
        t.$form.trigger('reset_image'),
        t.$singleVariation.slideUp(200).trigger('hide_variation')
    }),
    (t.prototype.onResetImage = function (t) {
      t.data.variationForm.$form.wc_variations_image_update(!1)
    }),
    (t.prototype.onFindVariation = function (t, a) {
      var i = t.data.variationForm,
        e = void 0 !== a ? a : i.getChosenAttributes(),
        a = e.data
      e.count && e.count === e.chosenCount
        ? i.useAjax
          ? (i.xhr && i.xhr.abort(),
            i.$form.block({
              message: null,
              overlayCSS: { background: '#fff', opacity: 0.6 },
            }),
            (a.product_id = parseInt(i.$form.data('product_id'), 10)),
            (a.custom_data = i.$form.data('custom_data')),
            (i.xhr = $.ajax({
              url: wc_add_to_cart_variation_params.wc_ajax_url
                .toString()
                .replace('%%endpoint%%', 'get_variation'),
              type: 'POST',
              data: a,
              success: function (t) {
                t
                  ? i.$form.trigger('found_variation', [t])
                  : (i.$form.trigger('reset_data'),
                    (e.chosenCount = 0),
                    i.loading ||
                      (i.$form
                        .find('.single_variation')
                        .after(
                          '<p class="wc-no-matching-variations woocommerce-info">' +
                            wc_add_to_cart_variation_params.i18n_no_matching_variations_text +
                            '</p>',
                        ),
                      i.$form
                        .find('.wc-no-matching-variations')
                        .slideDown(200)))
              },
              complete: function () {
                i.$form.unblock()
              },
            })))
          : (i.$form.trigger('update_variation_values'),
            (a = i.findMatchingVariations(i.variationData, a).shift())
              ? i.$form.trigger('found_variation', [a])
              : (i.$form.trigger('reset_data'),
                (e.chosenCount = 0),
                i.loading ||
                  (i.$form
                    .find('.single_variation')
                    .after(
                      '<p class="wc-no-matching-variations woocommerce-info">' +
                        wc_add_to_cart_variation_params.i18n_no_matching_variations_text +
                        '</p>',
                    ),
                  i.$form.find('.wc-no-matching-variations').slideDown(200))))
        : (i.$form.trigger('update_variation_values'),
          i.$form.trigger('reset_data')),
        i.toggleResetLink(0 < e.chosenCount)
    }),
    (t.prototype.onFoundVariation = function (t, a) {
      var i = t.data.variationForm,
        e = i.$product.find('.product_meta').find('.sku'),
        r = i.$product.find(
          '.product_weight, .woocommerce-product-attributes-item--weight .woocommerce-product-attributes-item__value',
        ),
        o = i.$product.find(
          '.product_dimensions, .woocommerce-product-attributes-item--dimensions .woocommerce-product-attributes-item__value',
        ),
        n = i.$singleVariationWrap.find('.quantity'),
        s = !0,
        c = !1,
        t = ''
      a.sku ? e.wc_set_content(a.sku) : e.wc_reset_content(),
        a.weight ? r.wc_set_content(a.weight_html) : r.wc_reset_content(),
        a.dimensions
          ? o.wc_set_content($.parseHTML(a.dimensions_html)[0].data)
          : o.wc_reset_content(),
        i.$form.wc_variations_image_update(a),
        a.variation_is_visible
          ? ((c = _('variation-template')), a.variation_id)
          : (c = _('unavailable-variation-template')),
        (t = (t = (t = c({ variation: a })).replace('', '')).replace('', '')),
        i.$singleVariation.html(t),
        i.$form
          .find('input[name="variation_id"], input.variation_id')
          .val(a.variation_id)
          .trigger('change'),
        'yes' === a.is_sold_individually
          ? (n
              .find('input.qty')
              .val('1')
              .attr('min', '1')
              .attr('max', '')
              .trigger('change'),
            n.hide())
          : ((c = n.find('input.qty')),
            (t = parseFloat(c.val())),
            (t =
              isNaN(t) ||
              (t = t > parseFloat(a.max_qty) ? a.max_qty : t) <
                parseFloat(a.min_qty)
                ? a.min_qty
                : t),
            c
              .attr('min', a.min_qty)
              .attr('max', a.max_qty)
              .val(t)
              .trigger('change'),
            n.show()),
        (a.is_purchasable && a.is_in_stock && a.variation_is_visible) ||
          (s = !1),
        (i.$singleVariation.text().trim()
          ? i.$singleVariation.slideDown(200)
          : i.$singleVariation.show()
        ).trigger('show_variation', [a, s])
    }),
    (t.prototype.onChange = function (t) {
      t = t.data.variationForm
      t.$form
        .find('input[name="variation_id"], input.variation_id')
        .val('')
        .trigger('change'),
        t.$form.find('.wc-no-matching-variations').remove(),
        t.useAjax || t.$form.trigger('woocommerce_variation_select_change'),
        t.$form.trigger('check_variations'),
        t.$form.trigger('woocommerce_variation_has_changed')
    }),
    (t.prototype.addSlashes = function (t) {
      return (t = (t = t.replace(/'/g, "\\'")).replace(/"/g, '\\"'))
    }),
    (t.prototype.onUpdateAttributes = function (t) {
      var w = t.data.variationForm,
        b = w.getChosenAttributes().data
      w.useAjax ||
        (w.$attributeFields.each(function (t, a) {
          var i = $(a),
            e = i.data('attribute_name') || i.attr('name'),
            r = $(a).data('show_option_none'),
            a = ':gt(0)',
            o = $('<select/>'),
            n = i.val() || '',
            s = !0
          i.data('attribute_html') ||
            ((c = i.clone())
              .find('option')
              .removeAttr('attached')
              .prop('disabled', !1)
              .prop('selected', !1),
            i.data('attribute_options', c.find('option' + a).get()),
            i.data('attribute_html', c.html())),
            o.html(i.data('attribute_html'))
          var c = $.extend(!0, {}, b)
          c[e] = ''
          var _,
            d = w.findMatchingVariations(w.variationData, c)
          for (_ in d)
            if ('undefined' != typeof d[_]) {
              var m,
                l = d[_].attributes
              for (m in l)
                if (l.hasOwnProperty(m)) {
                  var v = l[m],
                    g = ''
                  if (m === e)
                    if ((d[_].variation_is_active && (g = 'enabled'), v)) {
                      var v = $('<div/>').html(v).text(),
                        u = o.find('option')
                      if (u.length)
                        for (var f = 0, h = u.length; f < h; f++) {
                          var p = $(u[f])
                          if (v === p.val()) {
                            p.addClass('attached ' + g)
                            break
                          }
                        }
                    } else o.find('option:gt(0)').addClass('attached ' + g)
                }
            }
          ;(c = o.find('option.attached').length),
            n &&
              ((s = !1),
              0 !== c &&
                o.find('option.attached.enabled').each(function () {
                  var t = $(this).val()
                  if (n === t) return !(s = !0)
                })),
            0 < c &&
              n &&
              s &&
              'no' === r &&
              (o.find('option:first').remove(), (a = '')),
            o.find('option' + a + ':not(.attached)').remove(),
            i.html(o.html()),
            i.find('option' + a + ':not(.enabled)').prop('disabled', !0),
            n ? (s ? i.val(n) : i.val('').trigger('change')) : i.val('')
        }),
        w.$form.trigger('woocommerce_update_variation_values'))
    }),
    (t.prototype.getChosenAttributes = function () {
      var i = {},
        e = 0,
        r = 0
      return (
        this.$attributeFields.each(function () {
          var t = $(this).data('attribute_name') || $(this).attr('name'),
            a = $(this).val() || ''
          0 < a.length && r++, e++, (i[t] = a)
        }),
        { count: e, chosenCount: r, data: i }
      )
    }),
    (t.prototype.findMatchingVariations = function (t, a) {
      for (var i = [], e = 0; e < t.length; e++) {
        var r = t[e]
        this.isMatch(r.attributes, a) && i.push(r)
      }
      return i
    }),
    (t.prototype.isMatch = function (t, a) {
      var i,
        e,
        r,
        o = !0
      for (i in t)
        t.hasOwnProperty(i) &&
          ((e = t[i]),
          (r = a[i]),
          e !== n &&
            r !== n &&
            0 !== e.length &&
            0 !== r.length &&
            e !== r &&
            (o = !1))
      return o
    }),
    (t.prototype.toggleResetLink = function (t) {
      t
        ? 'hidden' === this.$resetVariations.css('visibility') &&
          this.$resetVariations.css('visibility', 'visible').hide().fadeIn()
        : this.$resetVariations.css('visibility', 'hidden')
    }),
    ($.fn.wc_variation_form = function () {
      return new t(this), this
    }),
    ($.fn.wc_set_content = function (t) {
      n === this.attr('data-o_content') &&
        this.attr('data-o_content', this.text()),
        this.text(t)
    }),
    ($.fn.wc_reset_content = function () {
      n !== this.attr('data-o_content') &&
        this.text(this.attr('data-o_content'))
    }),
    ($.fn.wc_set_variation_attr = function (t, a) {
      n === this.attr('data-o_' + t) &&
        this.attr('data-o_' + t, this.attr(t) ? this.attr(t) : ''),
        !1 === a ? this.removeAttr(t) : this.attr(t, a)
    }),
    ($.fn.wc_reset_variation_attr = function (t) {
      n !== this.attr('data-o_' + t) && this.attr(t, this.attr('data-o_' + t))
    }),
    ($.fn.wc_maybe_trigger_slide_position_reset = function (t) {
      var a = $(this),
        i = a.closest('.product').find('.images'),
        e = !1,
        t = t && t.image_id ? t.image_id : ''
      a.attr('current-image') !== t && (e = !0),
        a.attr('current-image', t),
        e && i.trigger('woocommerce_gallery_reset_slide_position')
    }),
    ($.fn.wc_variations_image_update = function (t) {
      var a = this,
        i = a.closest('.product'),
        e = i.find('.images'),
        r = i.find('.flex-control-nav'),
        o = r.find('li:eq(0) img'),
        n = e
          .find(
            '.woocommerce-product-gallery__image, .woocommerce-product-gallery__image--placeholder',
          )
          .eq(0),
        s = n.find('.wp-post-image'),
        i = n.find('a').eq(0)
      if (t && t.image && t.image.src && 1 < t.image.src.length) {
        0 <
          r.find('li img[data-o_src="' + t.image.gallery_thumbnail_src + '"]')
            .length && a.wc_variations_image_reset()
        r = r.find('li img[src="' + t.image.gallery_thumbnail_src + '"]')
        if (0 < r.length)
          return (
            r.trigger('click'),
            a.attr('current-image', t.image_id),
            void c.setTimeout(function () {
              $(c).trigger('resize'), e.trigger('woocommerce_gallery_init_zoom')
            }, 20)
          )
        s.wc_set_variation_attr('src', t.image.src),
          s.wc_set_variation_attr('height', t.image.src_h),
          s.wc_set_variation_attr('width', t.image.src_w),
          s.wc_set_variation_attr('srcset', t.image.srcset),
          s.wc_set_variation_attr('sizes', t.image.sizes),
          s.wc_set_variation_attr('title', t.image.title),
          s.wc_set_variation_attr('data-caption', t.image.caption),
          s.wc_set_variation_attr('alt', t.image.alt),
          s.wc_set_variation_attr('data-src', t.image.full_src),
          s.wc_set_variation_attr('data-large_image', t.image.full_src),
          s.wc_set_variation_attr('data-large_image_width', t.image.full_src_w),
          s.wc_set_variation_attr(
            'data-large_image_height',
            t.image.full_src_h,
          ),
          n.wc_set_variation_attr('data-thumb', t.image.src),
          o.wc_set_variation_attr('src', t.image.gallery_thumbnail_src),
          i.wc_set_variation_attr('href', t.image.full_src)
      } else a.wc_variations_image_reset()
      c.setTimeout(function () {
        $(c).trigger('resize'),
          a.wc_maybe_trigger_slide_position_reset(t),
          e.trigger('woocommerce_gallery_init_zoom')
      }, 20)
    }),
    ($.fn.wc_variations_image_reset = function () {
      var t = this.closest('.product'),
        a = t.find('.images'),
        i = t.find('.flex-control-nav').find('li:eq(0) img'),
        e = a
          .find(
            '.woocommerce-product-gallery__image, .woocommerce-product-gallery__image--placeholder',
          )
          .eq(0),
        t = e.find('.wp-post-image'),
        a = e.find('a').eq(0)
      t.wc_reset_variation_attr('src'),
        t.wc_reset_variation_attr('width'),
        t.wc_reset_variation_attr('height'),
        t.wc_reset_variation_attr('srcset'),
        t.wc_reset_variation_attr('sizes'),
        t.wc_reset_variation_attr('title'),
        t.wc_reset_variation_attr('data-caption'),
        t.wc_reset_variation_attr('alt'),
        t.wc_reset_variation_attr('data-src'),
        t.wc_reset_variation_attr('data-large_image'),
        t.wc_reset_variation_attr('data-large_image_width'),
        t.wc_reset_variation_attr('data-large_image_height'),
        e.wc_reset_variation_attr('data-thumb'),
        i.wc_reset_variation_attr('src'),
        a.wc_reset_variation_attr('href')
    }),
    $(function () {
      'undefined' != typeof wc_add_to_cart_variation_params &&
        $('.variations_form').each(function () {
          $(this).wc_variation_form()
        })
    })
  var _ = function (t) {
    var a = i.getElementById('tmpl-' + t).textContent
    return /<#\s?data\./.test(a) ||
      /{{{?\s?data\.(?!variation\.).+}}}?/.test(a) ||
      /{{{?\s?data\.variation\.[\w-]*[^\s}]/.test(a)
      ? wp.template(t)
      : function (t) {
          var r = t.variation || {}
          return a.replace(
            /({{{?)\s?data\.variation\.([\w-]*)\s?(}}}?)/g,
            function (t, a, i, e) {
              if (a.length !== e.length) return ''
              i = r[i] || ''
              return 2 === a.length ? c.escape(i) : i
            },
          )
        }
  }
})(jQuery, window, document)
;(function ($) {
  'use strict'
  function isEmpty(val) {
    return val === undefined || val == null || val.length <= 0 ? true : false
  }
  function MoccaInitVariationSwatches() {
    var SwatchesForm = function ($form) {
      var self = this
      self._form = $form
      self._generated = {}
      self._out_of_stock = {}
      self.product_variations = $form.data('product_variations')
      self.use_ajax = false === self.product_variations
      self.is_mobile = $('body').hasClass('mocca-is-mobile')
      self.init = self.init.bind(self)
      self.init()
      $form.on(
        'mocca_variation_swatches_init',
        { swatches_form: self },
        self.loaded,
      )
      $form.on('reset_data', { swatches_form: self }, self.reset)
      $form.on(
        'woocommerce_variation_has_changed',
        { swatches_form: self },
        self.update_ajax,
      )
      $form.on(
        'woocommerce_update_variation_values',
        { swatches_form: self },
        self.update,
      )
    }
    SwatchesForm.prototype.init = function () {
      var _this = this
      this._form.find('ul.variation-items-wrapper').each(function (i, el) {
        var select = $(this).siblings('select.woo-variation-select')
        var li = $(this).find('li')
        var is_mobile = $('body').hasClass('mocca-is-mobile')
        var reselect_clear = true
        var mouse_event = 'click'
        if (reselect_clear) {
          $(this).on(mouse_event, 'li:not(.selected)', function (e) {
            e.preventDefault()
            e.stopPropagation()
            var value = $(this).data('value')
            select.val(value).trigger('change')
            select.trigger('click')
            select.trigger('focusin')
            if (is_mobile) {
              select.trigger('touchstart')
            }
            $(this).trigger('focus')
          })
          $(this).on(mouse_event, 'li.selected', function (e) {
            e.preventDefault()
            e.stopPropagation()
            var value = $(this).val()
            select.val('').trigger('change')
            select.trigger('click')
            select.trigger('focusin')
            if (is_mobile) {
              select.trigger('touchstart')
            }
            $(this).trigger('focus')
          })
        } else {
          $(this).on(mouse_event, 'li', function (e) {
            e.preventDefault()
            e.stopPropagation()
            var value = $(this).data('value')
            select.val(value).trigger('change')
            select.trigger('click')
            select.trigger('focusin')
            if (is_mobile) {
              select.trigger('touchstart')
            }
            $(this).trigger('focus')
          })
        }
      })
      setTimeout(function () {
        _this._form.trigger('reload_product_variations')
        $(document).trigger('pix_variation_swatches_loaded', [
          _this._form,
          _this.product_variations,
        ])
      }, 1)
    }
    SwatchesForm.prototype.loaded = function (
      event,
      object,
      product_variations,
    ) {
      var _this = event.data.swatches_form
      _this.product_variations = _this._form.data('product_variations')
      _this.use_ajax = false === _this.product_variations
      if (_this.use_ajax) {
        return
      }
      object._generated = product_variations.reduce(function (obj, variation) {
        Object.keys(variation.attributes).map(function (attribute_name) {
          if (!obj[attribute_name]) {
            obj[attribute_name] = []
          }
          if (variation.attributes[attribute_name]) {
            obj[attribute_name].push(variation.attributes[attribute_name])
          }
        })
        return obj
      }, {})
      object._out_of_stock = product_variations.reduce(function (
        obj,
        variation,
      ) {
        Object.keys(variation.attributes).map(function (attribute_name) {
          if (!obj[attribute_name]) {
            obj[attribute_name] = []
          }
          if (variation.attributes[attribute_name] && !variation.is_in_stock) {
            obj[attribute_name].push(variation.attributes[attribute_name])
          }
        })
        return obj
      },
      {})
      _this._form.find('ul.variation-items-wrapper').each(function () {
        var li = $(this).find('li')
        var attribute = $(this).data('attribute_name')
        var attribute_values = object._generated[attribute]
        var out_of_stock_values = object._out_of_stock[attribute]
        li.each(function () {
          var attribute_value = $(this).attr('data-value')
          if (
            !isEmpty(attribute_values) &&
            attribute_values.indexOf(attribute_value) === -1
          ) {
            $(this).removeClass('selected')
            $(this).addClass('disabled')
          }
        })
      })
    }
    SwatchesForm.prototype.reset = function (event) {
      var _this = event.data.swatches_form
      _this.product_variations = _this._form.data('product_variations')
      _this.use_ajax = false === _this.product_variations
      _this._form.find('ul.variation-items-wrapper').each(function () {
        var li = $(this).find('li')
        li.each(function () {
          if (!_this.use_ajax) {
            $(this).removeClass('selected disabled')
          } else {
          }
        })
      })
    }
    SwatchesForm.prototype.update_ajax = function (event) {
      var _this = event.data.swatches_form
      _this.product_variations = _this._form.data('product_variations')
      _this.use_ajax = false === _this.product_variations
      if (!_this.use_ajax) {
        return
      }
      _this._form.find('ul.variation-items-wrapper').each(function () {
        var selected = '',
          options = $(this)
            .siblings('select.woo-variation-select')
            .find('option'),
          current = $(this)
            .siblings('select.woo-variation-select')
            .find('option:selected'),
          eq = $(this)
            .siblings('select.woo-variation-select')
            .find('option')
            .eq(1),
          li = $(this).find('li'),
          selects = []
        options.each(function () {
          if ($(this).val() !== '') {
            selects.push($(this).val())
            selected = current ? current.val() : eq.val()
          }
        })
        setTimeout(function () {
          li.each(function () {
            var value = $(this).attr('data-value')
            $(this).removeClass('selected disabled')
            if (value === selected) {
              $(this).addClass('selected')
            }
          })
        }, 1)
      })
    }
    SwatchesForm.prototype.update = function (event) {
      var _this = event.data.swatches_form
      _this._form.find('ul.variation-items-wrapper').each(function () {
        var selected = '',
          options = $(this)
            .siblings('select.woo-variation-select')
            .find('option'),
          current = $(this)
            .siblings('select.woo-variation-select')
            .find('option:selected'),
          eq = $(this)
            .siblings('select.woo-variation-select')
            .find('option')
            .eq(1),
          li = $(this).find('li'),
          selects = []
        options.each(function () {
          if ($(this).val() !== '') {
            selects.push($(this).val())
            selected = current ? current.val() : eq.val()
          }
        })
        setTimeout(function () {
          li.each(function () {
            var value = $(this).attr('data-value')
            $(this).removeClass('selected disabled').addClass('disabled')
            if (selects.indexOf(value) !== -1) {
              $(this).removeClass('disabled')
              if (value === selected) {
                $(this).addClass('selected')
              }
            } else {
            }
          })
        }, 1)
      })
    }
    $.fn.mocca_variation_form = function () {
      new SwatchesForm(this)
      return this
    }
    $(function () {
      if (typeof wc_add_to_cart_variation_params !== 'undefined') {
        $('.variations_form').each(function () {
          $(this).mocca_variation_form()
        })
      }
    })
  }
  MoccaInitVariationSwatches(),
    $(document).on('mocca_qv_loader_stop', function () {
      MoccaInitVariationSwatches()
    })
})(jQuery)
;(function ($) {
  'use strict'
  var w = $(window).width()
  var MoccaSwiperHandler = function ($scope, $) {
    var $element = $scope.find('.pix-swiper-widget')
    $element.MoccaSwiper()
  }
  var MoccaSwiperHcardsHandler = function ($scope, $) {
    var $element = $scope.find('.pix-swiper-widget')
    $element.MoccaSwiper()
    $element
      .find('.lastchanceProducts')
      .on('breakpoint', function (event, swiper, breakpoint) {
        $(this)
          .find('.productCard2__slider')
          .each(function () {
            var imgBox = $(this).children('.productCard2__images'),
              hoverBox = imgBox.children('.productCard2__hover'),
              hoverDots = imgBox.next('.productCard2__dots'),
              countImg = imgBox.children('span').length
            hoverBox.children().on('touch touchstart mouseover', function () {
              var index = $(this).index()
              imgBox
                .children()
                .eq(index)
                .addClass('active')
                .siblings()
                .removeClass('active')
              hoverDots
                .children()
                .eq(index)
                .addClass('active')
                .siblings()
                .removeClass('active')
            })
            hoverDots.children().on('touch touchstart mouseover', function () {
              var index = $(this).index()
              imgBox
                .children()
                .eq(index)
                .addClass('active')
                .siblings()
                .removeClass('active')
              hoverDots
                .children()
                .eq(index)
                .addClass('active')
                .siblings()
                .removeClass('active')
            })
            if (w <= 768) {
              imgBox.on('click touch touchstart', function (e) {
                e.preventDefault()
              })
            }
          })
      })
  }
  $(window).on('elementor/frontend/init', function () {
    elementorFrontend.hooks.addAction(
      'frontend/element_ready/mocca-logos-carousel.default',
      MoccaSwiperHandler,
    )
    elementorFrontend.hooks.addAction(
      'frontend/element_ready/mocca-product-categories-carousel.default',
      MoccaSwiperHandler,
    )
    elementorFrontend.hooks.addAction(
      'frontend/element_ready/mocca-posts-carousel.default',
      MoccaSwiperHandler,
    )
    elementorFrontend.hooks.addAction(
      'frontend/element_ready/mocca-products-extended-carousel.default',
      MoccaSwiperHandler,
    )
    elementorFrontend.hooks.addAction(
      'frontend/element_ready/mocca-products-vcard-carousel.default',
      MoccaSwiperHandler,
    )
    elementorFrontend.hooks.addAction(
      'frontend/element_ready/mocca-products-hcard-carousel.default',
      MoccaSwiperHcardsHandler,
    )
    elementorFrontend.hooks.addAction(
      'frontend/element_ready/mocca-products-double-block-carousel.default',
      MoccaSwiperHandler,
    )
    elementorFrontend.hooks.addAction(
      'frontend/element_ready/mocca-team-double-block-carousel.default',
      MoccaSwiperHandler,
    )
    elementorFrontend.hooks.addAction(
      'frontend/element_ready/mocca-testimonials-carousel.default',
      MoccaSwiperHandler,
    )
  })
})(jQuery)
;(function ($) {
  'use strict'
  var MoccaProductsFilterHandler = function ($scope, $) {
    var $element = $scope.find('.pix-extended-product-container'),
      height = $element.height()
    $element.each(function () {
      var container = $(this),
        productsContainer = container.find('.topproducts'),
        productsContainerInner = container.find('.swiper-wrapper'),
        productCategoriesLinks = container.find(
          '.pix-product-categories-container',
        ),
        productFilterLinks = container.find('.pix-product-filter-container')
      container.on('click', '.pix-product-categories-container a', function (
        e,
      ) {
        e.preventDefault()
        var currentQuery = productsContainer.attr('data-query')
        var currentTermId = $(this).attr('data-term-id')
        var productType = productFilterLinks
          .find('.active')
          .attr('data-product-type')
        var currentTaxonomy = productsContainer.attr('data-taxonomy')
        var style = container.find('.icons-center')
        $(this).parent('li').siblings().children('a').removeClass('active')
        $(this).siblings().removeClass('active')
        $(this).addClass('active')
        var data = {
          action: 'add_products',
          query: currentQuery,
          termid: currentTermId,
          taxonomy: currentTaxonomy,
          type: productType,
          style: style.length,
        }
        $.post(moccaAjax.url, data, function (response) {
          container.css('height', height)
          productsContainer.addClass('loading')
          productsContainerInner.html(response)
          container.imagesLoaded(function () {
            container.MoccaSwiper()
          })
          moccaWoo.initQuickViewButton()
          setTimeout(function () {
            productsContainer.removeClass('loading')
            container.removeAttr('style')
          }, 1000)
        })
      })
      container.on('click', '.pix-product-filter-container a', function (e) {
        e.preventDefault()
        var currentQuery = productsContainer.attr('data-query')
        var currentTermId = productCategoriesLinks
          .find('.active')
          .attr('data-term-id')
        var productType = $(this).attr('data-product-type')
        var currentTaxonomy = productsContainer.attr('data-taxonomy')
        var style = container.find('.icons-center')
        $(this).siblings().removeClass('active')
        $(this).addClass('active')
        var data = {
          action: 'add_products',
          query: currentQuery,
          termid: currentTermId,
          taxonomy: currentTaxonomy,
          type: productType,
          style: style.length,
        }
        $.post(moccaAjax.url, data, function (response) {
          container.css('height', height)
          productsContainer.addClass('loading')
          productsContainerInner.html(response)
          container.imagesLoaded(function () {
            container.MoccaSwiper()
          })
          moccaWoo.initQuickViewButton()
          setTimeout(function () {
            productsContainer.removeClass('loading')
            container.removeAttr('style')
          }, 1000)
        })
      })
    })
  }
  $(window).on('elementor/frontend/init', function () {
    elementorFrontend.hooks.addAction(
      'frontend/element_ready/mocca-products-extended-carousel.default',
      MoccaProductsFilterHandler,
    )
  })
})(jQuery)
