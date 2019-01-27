

jQuery.expr.pseudos.attr = $.expr.createPseudo(function (arg) {
  var regexp = new RegExp(arg);
  return function(elem) {
    for(var i = 0; i < elem.attributes.length; i++) {
      var attr = elem.attributes[i];
      if(regexp.test(attr.name)) {
        return true;
      }
    }
    return false;
  };
});



jQuery.expr.pseudos.attrStrict = $.expr.createPseudo(function (arg) {
  return function(elem) {
    for(var i = 0; i < elem.attributes.length; i++) {
      var attr = elem.attributes[i];
      if(arg === attr.name) {
        return true;
      }
    }
    return false;
  };
});








/* Convert color to rgb */
/* Accepts an array [hex, alpha] or 2 vars */
function m__hexToRGB(hex, alpha) { //Todo: OLD

  if (typeof hex === 'object' && hex.length === 2) {
    hex = hex[0];
    alpha = hex[1];
  }

  hex = hex.toUpperCase();
  var h = "0123456789ABCDEF";
  var r = h.indexOf(hex[1])*16+h.indexOf(hex[2]);
  var g = h.indexOf(hex[3])*16+h.indexOf(hex[4]);
  var b = h.indexOf(hex[5])*16+h.indexOf(hex[6]);
  if(alpha) return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  else return "rgb("+r+", "+g+", "+b+")";
}





//Function to convert rgb color to hex format and alpha
//Returns array
// https://jsfiddle.net/maiik/xwhbLdsk/23/
function m__rgbToHexAlpha(rgba) {
  var hex = rgba.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
  var ret = [];
  if (hex && hex.length === 4) {
    ret[0] = "#" +
      ("0" + parseInt(hex[1], 10).toString(16)).slice(-2) +
      ("0" + parseInt(hex[2], 10).toString(16)).slice(-2) +
      ("0" + parseInt(hex[3], 10).toString(16)).slice(-2);
    ret[1] = rgba.replace(/^.*,(.+)\)/, '$1');
  } else {
    ret = [rgba, 1];
  }
  return ret
}




function m__scrollTo(el, scrollToSpeed) {
  var $scrollToEl;
  if (typeof el === 'object') {
    $scrollToEl = $(el).not('.hidden');
  }
  if (typeof el === 'string') {
    $scrollToEl = $(el);
  }
  scrollToSpeed = scrollToSpeed || 200;


  var scrolltoY = $scrollToEl.offset().top;
  // ScrollToEl.each(function (i, el) {
  //   if (el.style.display) {
  //     firstVisibleEl = el;
  //     return false;
  //   }
  // })

  $('html, body').animate({scrollTop: scrolltoY }, scrollToSpeed);
}












var version = '1jul2018-1';
var debug = true;

var local;
// var local = 'en_US';
// var local = 'ru_RU';



var siteBuilder;





requirejs.config({
  baseUrl:  baseURL || 'https://bb.githack.com/maiik/xsolla-site-builder-0/raw/master/',
  paths: {
    // Require.js appends `.js` extension for you
    // 'react':                       'https://unpkg.com/react@15.3.2/dist/react',
    // 'react-dom':                   'https://unpkg.com/react-dom@15.3.2/dist/react-dom',
    'quill':                          'https://cdn.quilljs.com/1.3.1/quill',
    '_':                              'https://cdn.jsdelivr.net/npm/lodash@4.17.10/lodash.min',
    'xsolla_genericpopups':           'js/genericpopups', // 'https://cdn.xsolla.net/misc/mikelibs/genericpopups/latest/genericpopups',
    // 'swiper':                         'https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.3.5/js/swiper.min',
    // 'xsolla-uikit':                'http://http://xsolla.maiik.ru/xsolla-sitebuilder/libs/node_modules/xsolla-uikit/select',
  },
});






define(['_',
    'js/xsb-defaults',
    // 'js/xsb-template',
    // 'js/xsb-controller',
    // 'js/xsb-noti',
    // 'js/xsb-settings',
    // 'js/xsb-template-media',
    // 'js/xsb-popup',
    // 'js/xsb-howtos',
    'xsolla_genericpopups',
    // 'js/xsb-widget-trailer',
    // 'react',
    // 'react-dom',
    // 'xsolla-uikit'
], function (
  _,
  Defaults,
  // Template,
  // Controllr,
  // Noti,
  // Settings,
  // TemplateMedia,
  // Popup,
  // HowTos,
  GenericPopups
  // WidgetTrailer
) {


  function XsollaSiteBuilder() {
    // this.preloader();
    // this.debug = debug;
    // this.version = version;
    this.defaults = new Defaults();
    // this._xsb = this;
    // this.modulesDefault = this.defaults.modulesDefault;
    // this.globalDefault = this.defaults.globalDefault;
    // this.dataX = this.getData();
    // // this.dataT = {'media': this.dataX['global']['bg']}
    // // this.dataX = {};
    // // this.dataX['modules'] = this.getData('modules');
    // // this.dataX['global'] = this.getData('global');
    // this.c = {};
    // this.c['$templates'] = $(':attr(\'^data-xsb-template-type\')');
    // this.c['$templateControls'] = $('.sb_1m_contol_sett');
    // this.c['$controlsModules'] = $(':attr(\'^data-xsb-control-add\')');
    // this.c['$controls'] = $('.sb_1m_contol_onoff');
    // this.c['$panel0'] = $('.xsb0');
    // // this.c['$xsbCall'] = $('.xsb_call');
    // this.xsb_bg_player;
    // this.noti = new Noti(this);


    // this.language = this.dataX['global']['languages']['active'];
    // this.local = local || this.language;


    // this.sortable = this.createSortable();
    // this.templates = {};
    // this.templateControllers = {};


    // this.settngs = new Settings(this, this.getUrlHash());
    // this.gatherTemplatesAndControllers();
    // this.addListeners();
    // this.applyShapes();

    // this.bg = this.getBackground();

    // this.popups = this.getPopups();
    // this.preloader('hide');
    // this.howTos = new HowTos(this);

    // // import {React} from 'react';
    // // import {Button, ImagePicker, Switch} from 'xsolla-uikit';

    // // ReactDOM.render(
    // // 	React.createElement('p', {}, 'Hello, AMD!'),
    // //     document.getElementById('root')
    // // );
    // // ReactDOM.render(Switch, document.getElementById('root'));
    this.popups = new GenericPopups();
    this.addThemes();

    // this.widgetTrailer = new WidgetTrailer(this); //TODO: переделать трейлер попап
  }

  XsollaSiteBuilder.prototype.preloader = function (doo) {
    if (doo === 'hide') {
      // $('.xsb_prel').removeClass('xsb_prel_white');
      // $('.xsb_prel').removeClass('xsb_prel_shown');
      setTimeout(function () {
        $('.xsb_prel').addClass('hidden');
      }, 400);
    } else {
    }
  }


  XsollaSiteBuilder.prototype.getPopups = function () {
    var thiss = this;
    var p = {};
    var $pops = $(':attr(\'^data-xsb_popup_target\')');

      $pops.each(function (i, popButton) {
        var popName = popButton.dataset.xsb_popup_target;
        var popNameUniq = popName + '_' + Object.keys(p).length;
        p[popNameUniq] = new Popup(thiss, popName);
      });
    return p;
  }




  XsollaSiteBuilder.prototype.getUrlHash = function (aURL) {
    // return;
    aURL = aURL || window.location.href;
    // var vars = [];
    var hashes;
    if (aURL.indexOf('#') < 0) {
      return;
    } else {
      hashes = aURL.slice(aURL.indexOf('#') + 1).split('&')[0];
    }
    var hashesArr = ['modules', 'mail', 'login', 'ps', 'store', '', 'seo',]
    if (hashesArr.indexOf(hashes) < 0) return null;
    // for (var i = 0; i < hashes.length; i++) {
      // var hash = hashes[i].split('=');
      // if (hash.length > 1) {
      //    hash[1];
      // } else {
      //   vars[hash[0]] = null;
      // }
    // }
    return hashes;
  }



  XsollaSiteBuilder.prototype.getBackground = function (colors2, arr2) {
    var bg = {}
    var $bgEl = $('[data-xsb-result=\'global\']').find('[data-xsb-template-media=\'bg\']');
    // bg['bg'] = {}
    this.dataT = this.globalDefault;
    var thiss = this;
    $bgEl.each(function (i, oneBgEl) {
      var uniqName = bg + '_' + Object.keys(bg).length;
      bg[uniqName] = new TemplateMedia(thiss, 'bg', uniqName, oneBgEl, null, thiss.dataT['media']['bg']);
    })
    return bg;
  }



  XsollaSiteBuilder.prototype.addThemes = function () {
    var thiss = this;
    var $theme = $(':attr(\'^data-xsb-theme\')');
    $theme.on({
      click: function (evt) {
        $theme.removeClass('active');
        $(this).addClass('active');
        var thisTheme = {};
        $(this).find('.xsb_theme_cr').each(function (i, item) {
          var colorName;
          switch (i) {
            case 0:
              colorName = 'textcolor';
              break;
            case 1:
              colorName = 'accent';
              break;
            case 2:
              colorName = 'back';
              break;
            case 3:
              colorName = 'accent_text';
              break;
            default:
              colorName = 'textcolor';
              break;
          }
          var color = $(item).css('background-color');
          thisTheme[colorName] = m__rgbToHexAlpha(color)[0];
          // thiss.setCustomTheme(colorName, m__rgbToHexAlpha(color)[0]);
        })
        thisTheme['accent_text'] = thisTheme['back'];
        thiss.changeTheme(thisTheme, thiss.defaults.theme);
      }
    });
    $($theme[0]).trigger("click");
  }


  XsollaSiteBuilder.prototype.changeTheme = function (colors2, arr2) {
    var thiss = this;
    colors2 = colors2 || this.dataX.global.userTheme;
    var colorKeys = Object.keys(colors2);

    colorKeys.forEach(function (whatWeChange, i) {
      // var elsList = colorKeys;
      // var color = thiss.dataX.global.userTheme[whatWeChange];
      var color = colors2[whatWeChange];
      var elsList = arr2[whatWeChange];
      thm(elsList, color);
    });


    function thm(elsList, color) {
      // elsList = Object.keys(elsList);
      // var elsArr = theme[elsList];


      for (var i = 0, len = elsList.length; i < len; i++) {
        var element = elsList[i];
        var rul = element[1];
        var clr = color;
        switch (rul) {
          case 'color':
            rul = 'color';
            clr = color;
            break;
          case 'colorClean':
            rul = 'color';
            clr = m__rgbToHexAlpha(color)[0];
            break;
          case 'back':
            rul = 'background-color';
            break;
          case 'back50':
            rul = 'background-color';
            clr = m__hexToRGB(color, 0.5);
            break;
          case 'back20':
            rul = 'background-color';
            clr = m__hexToRGB(color, 0.2);
            break;
          case 'backClean':
            rul = 'background-color';
            clr = m__rgbToHexAlpha(color)[0];
            break;
          case 'border':
            rul = 'border-color';
            break;
          default:
            rul = rul;
        }
        // if (element[2]) {
        //   clr = hexToRGB(color, element[2]);
        // }
        changecss(element[0], rul, clr);
      }

    }
  }








  XsollaSiteBuilder.prototype.changeLanguage = function (lang) {
    lang = lang || this.dataX['global']['languages']['active'];
    this.dataX['global']['languages']['active'] = lang;
    this.setData('global', this.dataX.global);
    window.location.reload(true);
  }







  XsollaSiteBuilder.prototype.applyShapes = function (newShape) {
    newShape = newShape || this.dataX.global['userShapes'];
    this.setData('global', this.dataX.global);
    this.changeTheme(this.dataX['global']['userShapes'], this.defaults.shape);
  }


  XsollaSiteBuilder.prototype.setCustomTheme = function (what, rule) {
    var thiss = this;
    if (what && rule) {
      if (!this.dataX.global.userTheme[what]) {
        this.dataX.global.userTheme[what] = {};
      }
      this.dataX.global.userTheme[what] = rule;
      this.setData();
      this.changeTheme(this.dataX['global']['userTheme'], this.defaults.theme);
    } else {
      Object.keys(this.dataX.global.userTheme).forEach(function (oneWhat) {
        var key = Object.keys(thiss.dataX.global.userTheme[oneWhat])[0];
        var rule = thiss.dataX.global.userTheme[oneWhat][key];
      })
    }
  }







  XsollaSiteBuilder.prototype.gatherTemplatesAndControllers = function () {
    // var t = {};
    // var c = {};
    var thiss = this;
    var oneTemp;



    Object.keys(this.dataX['modules']).forEach(function (templateName, i) {
      if (!thiss.dataX['modules'][templateName]) thiss.dataX['modules'][templateName] = {};
      var oneModData = thiss.dataX['modules'][templateName]['content'];
      // thiss._xsb.dataX['modules'][templateName]['content'] = thiss.checkModuleContent(oneModData);

      if($("[data-xsb-template-type='" + templateName + "']").length) {
      // if (Template.prototype.getTemplate(templateName)) {
        thiss.templates[templateName] = new Template(thiss, templateName);
      };
      if (Controllr.prototype.getController(templateName)) {
        thiss.templateControllers[templateName] = new Controllr(thiss, templateName);
      };
    })
  }




  XsollaSiteBuilder.prototype.getLang = function () {
    return this.dataX.global['languages']['active'];
  }






  XsollaSiteBuilder.prototype.checkModuleContent = function (oneModuleData) {
    //var contData = oneModuleData || {};
    //contData[this.getLang()] = contData[this.getLang()] || {};
    if (!oneModuleData[this.getLang()]) {
      oneModuleData = {}
      oneModuleData[this.getLang()] = {};
    }
    // this._xsb.dataX['modules'][this.contName]['content'] = newCont;
    return oneModuleData;
  }







  XsollaSiteBuilder.prototype.createSortable = function () {
    var thiss = this;
    return new Sortable(document.querySelector('.sb_1modules'), {
      handle: '.sb_1m_module',
      ghostClass: 'ghost',
      dragClass: 'draggable',
      onEnd: function (evt) {
        if (evt.newIndex === evt.oldIndex) return;
        var itemEl = evt.item;
        var templateName = itemEl.dataset.xsbControlAdd;
        var template = $('[data-xsb-template-type=\'' + templateName + '\']')[0];
        template.parentNode.insertBefore(template, template.parentNode.childNodes[evt.newIndex + 1]);
        // setTimeout(function(){
        //   thiss.moduleHighlight(template);
        // }, 50);
      }
    });
  }






  XsollaSiteBuilder.prototype.setData = function (what, newDataEntry) {

    this.noti.showText('Saved', 'saved', 600);
    // return;

    // if (!what) {
    //   if (this.debug) {
    //     console.log('SAVING ALL DATA: ' + JSON.stringify(this.dataX));
    //   }
    // } else {
    //   newDataEntry = newDataEntry || this.dataX[what];
    //   this.dataX[what] = newDataEntry;
    //   var newData = this.getData();
    //   newData[what] = newDataEntry;
    //   if (this.debug) {
    //     console.log('SAVING ' + what + ': ' + JSON.stringify(newDataEntry));
    //   }
    // }
    try {
      localStorage.setItem('xsolla_sitebuilder' + this.version, JSON.stringify(this.dataX))
    } catch (e) {
      console.log('e = ', e);
    }
  }

  XsollaSiteBuilder.prototype.getData = function (what) {
    var dta;
    dta = localStorage.getItem('xsolla_sitebuilder' + this.version);
    if (dta) {
      dta = JSON.parse(dta);
    } else {
      dta = {
        'modules': this.modulesDefault,
        'global': this.globalDefault,
      };
    }
    if (what) {
      if (this.debug) {
        console.log('LOADING ' + what + ': ' + JSON.stringify(dta[what]));
      }
      return dta[what];
    }
    return dta;
  }











  XsollaSiteBuilder.prototype.addListeners = function () {
    var thiss = this;


    // Scroll to module on click
    this.c['$controlsModules'].on({
      click: function (evt) {
        var toScroll = this.closest('.sb_1m_module').dataset.xsbControlAdd;
        var scrollToEl = '[data-xsb-template-type=\'' + toScroll + '\']';
        // if (!$(this).closest('.sb_1modules').is('.module_active')) return;
        // thiss.moduleHighlight($(scrollToEl)[0]);
        thiss.templates[toScroll].moduleHighlight($(scrollToEl)[0]);
      }
    });

    function hideAdvanced() {
      $('.xsb_sett_b, .xsb_z').removeClass('shown');
      $('.xsb0').addClass('shown');
        setTimeout(function () {
          $('.xsb_sett').removeClass('shown');
          $('[data-xsb-settings-panel=\'modules\']').find('.xsb_settings_inner').removeClass('moved');
          $('.xsb0').removeClass('moved');
          $('.sb_1m_module').removeClass('highlighted');
      }, 20);
    }

    //  скрытие дополнительных настроек модуля
    $('.xsb_z, [data-xsb-control-panel-settings=\'hide\']').on({
      click: function (evt) {
        hideAdvanced();
      }
    });

    $('.xsb_settings_inner').on({
      click: function (evt) {
        if (evt.target.classList.contains('moved')) hideAdvanced();
      }
    });

  }







  window.siteBuilder = new XsollaSiteBuilder();
  return XsollaSiteBuilder;
});





// var Webflow = Webflow || [];
// Webflow.push(function () {
//   // siteBuilder = siteBuilder =
// });





























