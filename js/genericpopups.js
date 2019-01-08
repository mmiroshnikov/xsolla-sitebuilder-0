//7 Jan 2019 →

define([
], function () {

  function GenericPopups() {

    this.popups = this.getPopups();
    // this.getZs = this.getZs();

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
    var toggl = false;

    $(':attrStrict(\'data-xpop\')').each(function (i, oneTrigger) {
      var popData = oneTrigger.dataset.xpop;
      if (popData.split(',').length > 1) {
        var popName = popData.split(',')[1];
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
        var onePopName = p[popName][onePopUniqName]['name'];
        p[popName][onePopUniqName]['$pop'] = $('[data-xpop=\'' + onePopName + '\']');
        p[popName][onePopUniqName]['$popB'] = p[popName][onePopUniqName]['$pop'].find('[data-xpop=\'b\']');
        p[popName][onePopUniqName]['$popZ'] = p[popName][onePopUniqName]['$pop'].find('[data-xpop=\'z\']');


        $(p[popName][onePopUniqName]['trigger']).on({
          click: function (evt) {
            evt.stopPropagation();
            p[popName][onePopUniqName]['$pop'].toggleClass('shown');
            setTimeout(function () {
              if (!toggl) {
                p[popName][onePopUniqName]['$popB'].addClass('shown');
                p[popName][onePopUniqName]['$popZ'].addClass('shown');
              } else {
                p[popName][onePopUniqName]['$popB'].toggleClass('shown');
                p[popName][onePopUniqName]['$popZ'].toggleClass('shown');
              }

            },10)
          }
        })


      p[popName][onePopUniqName]['$popZ'].on({
        click: function (evt) {
          p[popName][onePopUniqName]['$popB'].removeClass('shown');
          p[popName][onePopUniqName]['$popZ'].removeClass('shown');
          setTimeout(function () {
            p[popName][onePopUniqName]['$pop'].removeClass('shown');
          }, 200)
        }
      });

      $('[data-xpop-z=\'' + onePopName + '\']').on({
        click: function (evt) {
          // var popData = oneTrigger.dataset.xpopZ;
          p[popName][onePopUniqName]['$popB'].removeClass('shown');
          p[popName][onePopUniqName]['$popZ'].removeClass('shown');
          setTimeout(function () {
            p[popName][onePopUniqName]['$pop'].removeClass('shown');
          }, 10)
        }
      });



    })
    });


    return p;
  }




  return GenericPopups;
});