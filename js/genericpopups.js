//7 Jan 2019 →

define([
], function () {

  function GenericPopups() {

    this.popups = this.getPopups();
    this.getZs = this.getZs();

  }


    GenericPopups.prototype.getZs = function () {
      $('[data-xpop-z=\'' + onePopName + '\']').on({
        click: function (evt) {
          var popData = oneTrigger.dataset.xpopZ;
          p[onePopUniqName]['$popB'].removeClass('shown');
          p[onePopUniqName]['$popZ'].removeClass('shown');
          setTimeout(function () {
            p[onePopUniqName]['$pop'].removeClass('shown');
          }, 200)
        }
      });
    }

  GenericPopups.prototype.getPopups = function () {
    var p = {};

    $(':attr(\'^data-xpop\')').each(function (i, oneTrigger) {
      var popData = oneTrigger.dataset.xpop;
      if (popData.split(',').length > 1) {
        var popName = popData.split(',')[1];
        var toggl = false;
        if (popData.split(',')[2]) toggl = true;
        var trigger = oneTrigger;
        p[popName] =  p[popName] || {}
        p[popName][popName + Object.keys(p).length] = {
          'name': popName,
          'trigger': trigger,
          '$pop': '',
          '$popB': '',
          '$popZ': '',
        }
      }
    });


    Object.keys(p).forEach(function (popName, i) {
      Object.keys(p[popName]).forEach(function (onePopUniqName, i) {
        var onePopName = p[onePopUniqName]['name'];
        p[onePopUniqName]['$pop'] = $('[data-xpop=\'' + onePopName + '\']');
        p[onePopUniqName]['$popB'] = p[onePopUniqName]['$pop'].find('[data-xpop=\'b\']');
        p[onePopUniqName]['$popZ'] = p[onePopUniqName]['$pop'].find('[data-xpop=\'z\']');


        $(p[onePopUniqName]['trigger']).on({
          click: function (evt) {
            evt.stopPropagation();
            p[onePopUniqName]['$pop'].toggleClass('shown');
            setTimeout(function () {
              if (!toggl) {
                p[onePopUniqName]['$popB'].addClass('shown');
                p[onePopUniqName]['$popZ'].addClass('shown');
              } else {
                p[onePopUniqName]['$popB'].toggleClass('shown');
                p[onePopUniqName]['$popZ'].toggleClass('shown');
              }

            },10)
          }
        })


      p[onePopUniqName]['$popZ'].on({
        click: function (evt) {
          p[onePopUniqName]['$popB'].removeClass('shown');
          p[onePopUniqName]['$popZ'].removeClass('shown');
          setTimeout(function () {
            p[onePopUniqName]['$pop'].removeClass('shown');
          }, 200)
        }
      });

    })
    });


    return p;
  }




  return GenericPopups;
});