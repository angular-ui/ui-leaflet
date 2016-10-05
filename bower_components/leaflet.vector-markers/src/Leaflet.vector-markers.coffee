#
#  Leaflet.VectorMarkers, a plugin that adds colorful iconic svg markers for Leaflet, based on the Font Awesome icons
#  (c) 2014, Mathias Schneider
#
#  Version: 0.0.4
#
#  http://leafletjs.com
#  https://github.com/hiasinho
#

#global L

((window, document, undefined_) ->
  "use strict"

  #
  #     * Leaflet.VectorMarkers assumes that you have already included the Leaflet library.
  #
  L.VectorMarkers = {}
  L.VectorMarkers.version = "1.0.0"
  L.VectorMarkers.MAP_PIN = 'M16,1 C7.7146,1 1,7.65636364 1,15.8648485 C1,24.0760606 16,51 16,51 C16,51 31,24.0760606 31,15.8648485 C31,7.65636364 24.2815,1 16,1 L16,1 Z'
  L.VectorMarkers.Icon = L.Icon.extend(
    options:
      iconSize: [ 30, 50 ]
      iconAnchor: [ 15, 50 ]
      popupAnchor: [ 2, -40 ]
      shadowAnchor: [ 7, 45 ]
      shadowSize: [ 54, 51 ]
      className: "vector-marker"
      prefix: "fa"
      spinClass: "fa-spin"
      extraIconClasses: ""
      extraDivClasses: ""
      icon: "home"
      markerColor: "blue"
      iconColor: "white"
      viewBox: '0 0 32 52'

    initialize: (options) ->
      options = L.Util.setOptions(this, options)

    createIcon: (oldIcon) ->
      div = (if (oldIcon and oldIcon.tagName is "DIV") then oldIcon else document.createElement("div"))
      options = @options


      pin_path = options.map_pin || L.VectorMarkers.MAP_PIN;

      div.innerHTML = '<svg width="' + options.iconSize[0] + 'px" height="' + options.iconSize[1] + 'px" viewBox="' + options.viewBox + '" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' +
                        '<path d="' + pin_path + '" fill="' + options.markerColor + '"></path>' +
                      '</svg>'
      if options.icon
        div.appendChild @_createInner()
      options.className += if options.className.length > 0 then ' ' + options.extraDivClasses else options.extraDivClasses;
      @_setIconStyles div, "icon"
      @_setIconStyles div, "icon-" + options.markerColor
      div
    _createInner: ->
      i = document.createElement('i')
      iconClass = undefined
      iconSpinClass = ""
      iconColorClass = ""
      iconColorStyle = undefined
      iconWidthStyle = undefined
      iconStyle = "style='"
      options = @options
      ##
      i.classList.add options.prefix
      if options.extraClasses
        i.classList.add options.extraClasses
      if options.icon.slice(0, options.prefix.length + 1) == options.prefix + '-'
        i.classList.add options.icon
      else
        i.classList.add options.prefix + '-' + options.icon
      if options.spin and typeof options.spinClass == 'string'
        i.classList.add options.spinClass
      if options.iconColor
        if options.iconColor == 'white' or options.iconColor == 'black'
          i.classList.add 'icon-' + options.iconColor
        else
          i.style.color = options.iconColor
      if options.iconSize
        i.style.width = options.iconSize[0] + "px";
      i
    _setIconStyles: (img, name) ->
      options = @options
      size = L.point(options[(if name is "shadow" then "shadowSize" else "iconSize")])
      anchor = undefined
      if name is "shadow"
        anchor = L.point(options.shadowAnchor or options.iconAnchor)
      else
        anchor = L.point(options.iconAnchor)
      anchor = size.divideBy(2, true)  if not anchor and size
      img.className = "vector-marker-" + name + " " + options.className
      if anchor
        img.style.marginLeft = (-anchor.x) + "px"
        img.style.marginTop = (-anchor.y) + "px"
      if size
        img.style.width = size.x + "px"
        img.style.height = size.y + "px"

    createShadow: ->
      div = document.createElement("div")
      @_setIconStyles div, "shadow"
      div
  )
  L.VectorMarkers.icon = (options) ->
    new L.VectorMarkers.Icon(options)
) this, document
