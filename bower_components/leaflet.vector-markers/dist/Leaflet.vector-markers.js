(function() {
  (function(window, document, undefined_) {
    "use strict";
    L.VectorMarkers = {};
    L.VectorMarkers.version = "1.0.0";
    L.VectorMarkers.MAP_PIN = 'M16,1 C7.7146,1 1,7.65636364 1,15.8648485 C1,24.0760606 16,51 16,51 C16,51 31,24.0760606 31,15.8648485 C31,7.65636364 24.2815,1 16,1 L16,1 Z';
    L.VectorMarkers.Icon = L.Icon.extend({
      options: {
        iconSize: [30, 50],
        iconAnchor: [15, 50],
        popupAnchor: [2, -40],
        shadowAnchor: [7, 45],
        shadowSize: [54, 51],
        className: "vector-marker",
        prefix: "fa",
        spinClass: "fa-spin",
        extraIconClasses: "",
        extraDivClasses: "",
        icon: "home",
        markerColor: "blue",
        iconColor: "white",
        viewBox: '0 0 32 52'
      },
      initialize: function(options) {
        return options = L.Util.setOptions(this, options);
      },
      createIcon: function(oldIcon) {
        var div, options, pin_path;
        div = (oldIcon && oldIcon.tagName === "DIV" ? oldIcon : document.createElement("div"));
        options = this.options;
        pin_path = options.map_pin || L.VectorMarkers.MAP_PIN;
        div.innerHTML = '<svg width="' + options.iconSize[0] + 'px" height="' + options.iconSize[1] + 'px" viewBox="' + options.viewBox + '" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' + '<path d="' + pin_path + '" fill="' + options.markerColor + '"></path>' + '</svg>';
        if (options.icon) {
          div.appendChild(this._createInner());
        }
        options.className += options.className.length > 0 ? ' ' + options.extraDivClasses : options.extraDivClasses;
        this._setIconStyles(div, "icon");
        this._setIconStyles(div, "icon-" + options.markerColor);
        return div;
      },
      _createInner: function() {
        var i, iconClass, iconColorClass, iconColorStyle, iconSpinClass, iconStyle, iconWidthStyle, options;
        i = document.createElement('i');
        iconClass = void 0;
        iconSpinClass = "";
        iconColorClass = "";
        iconColorStyle = void 0;
        iconWidthStyle = void 0;
        iconStyle = "style='";
        options = this.options;
        i.classList.add(options.prefix);
        if (options.extraClasses) {
          i.classList.add(options.extraClasses);
        }
        if (options.icon.slice(0, options.prefix.length + 1) === options.prefix + '-') {
          i.classList.add(options.icon);
        } else {
          i.classList.add(options.prefix + '-' + options.icon);
        }
        if (options.spin && typeof options.spinClass === 'string') {
          i.classList.add(options.spinClass);
        }
        if (options.iconColor) {
          if (options.iconColor === 'white' || options.iconColor === 'black') {
            i.classList.add('icon-' + options.iconColor);
          } else {
            i.style.color = options.iconColor;
          }
        }
        if (options.iconSize) {
          i.style.width = options.iconSize[0] + "px";
        }
        return i;
      },
      _setIconStyles: function(img, name) {
        var anchor, options, size;
        options = this.options;
        size = L.point(options[(name === "shadow" ? "shadowSize" : "iconSize")]);
        anchor = void 0;
        if (name === "shadow") {
          anchor = L.point(options.shadowAnchor || options.iconAnchor);
        } else {
          anchor = L.point(options.iconAnchor);
        }
        if (!anchor && size) {
          anchor = size.divideBy(2, true);
        }
        img.className = "vector-marker-" + name + " " + options.className;
        if (anchor) {
          img.style.marginLeft = (-anchor.x) + "px";
          img.style.marginTop = (-anchor.y) + "px";
        }
        if (size) {
          img.style.width = size.x + "px";
          return img.style.height = size.y + "px";
        }
      },
      createShadow: function() {
        var div;
        div = document.createElement("div");
        this._setIconStyles(div, "shadow");
        return div;
      }
    });
    return L.VectorMarkers.icon = function(options) {
      return new L.VectorMarkers.Icon(options);
    };
  })(this, document);

}).call(this);
