define([
  // 'xsolla-sitebuilder/js/xsb-global_background',
  // 'mp-good',
  // 'mp-renderedgood',
  // 'mp-goodcard',
  // 'mp-menu',
  // 'mp-mygoods'
], function () {

  function Defaults() {

    this.dummyTitle = {
      'en_US': 'Enter Your Text',
      'ru_RU': 'Заголовок блока',
      'pt_PT': 'SOS é um novo jogo social',
      'ch_CH': '款全新的大',
    };

    this.dummyText = {
      'en_US': 'Your Game takes a player to the great adventure filled with detractors, monsters, gold hunters and your gravest enemies',
      'ru_RU': 'Это пошаговая ролевая игра, объединяющая тактические битвы, элементы коллекционных карточных игр и постоянно развивающуюся историю, в которой никто не застрахован от смерти, включая главных героев',
      'pt_PT': 'Um novo jogo social de Battle Royale',
      'ch_CH': '款全新的大逃殺遊戲 每一場戰局，你和另外15位選手要互相競爭直到逃出這座充滿怪物的死亡島嶼。',
    };



    this.defaultTheme = {
      'back': 'rgba(8, 17, 43, 0.84)', //main bg color
      'textcolor': '#fac92d', //main color
      'accent_text': '#000000',  //Buy button text
      'accent': '#fb1752',  //Buy button bg, top up button bg
    }



    this.defaultShape = {
      'roundness': '6px', //main bg color
    }


    this.theme = {
      'textcolor': [
        ['.xsb_body', 'color'],
        ['.xsb_theme_cr--3', 'back'],
        ['.xsb_sett_block--colorpicker', 'colorClean'],
        ['.xsb_global_sett_text', 'colorClean'],
        ['.xsb_0_icon_text', 'backClean'],
        ['body', 'colorClean'],
        ['a', 'color'],
        ['.bold', 'color'],
        ['.xsb_preview_text', 'color'],
        ['.x_steam_h_h', 'color'],  //Цвет с 0.5 прозрачностью
        ['.c_title_block_line', 'back'],  //Цвет с 0.5 прозрачностью
        ['.sp-choose', 'color'],
        ['.sp-cancel', 'color'],
        ['.xsbps_cardblock_card', 'border-color'],
        ['.xsbps_topmenu_dropdown_txt', 'colorClean'],
        ['.x_steam__hero2', 'border-color'],
        ['.xsb_m_sysreq_platform', 'color'],
        ['.xsb_m_sysreq_tabs', 'border-bottom-color'],

        ['.swiper-button-prev-m', 'color'],
        ['.swiper-button-next-m', 'color'],
        ['.swiper-pagination-bullet', 'back'],


        //Widgets
        ['.xsb_w_menu_a', 'color'],
        ['.xsb_w_menu_a:hover', 'color'],

        //Mail
        ['.xsbm_content', 'color'],
        // ['.xsbm_check', 'color'],
        // ['.xsbm_check_hr', 'back'],
        // ['.xsbm_check_col_dots', 'border-bottom-color'],
        // ['.xsbm_check_2col_total', 'border-top-color'],
        ['.xsbps_cardblock_card', 'border-color'],

        //Login
        ['.xsbl_reg', 'colorClean'],
        ['.xsbl_loginf_input', 'border-bottom-color'],
        ['.xsbl_login_checkfield', 'color'],
        ['.xsbl_reg>a:link', 'color'],
        ['.xsbl_reg>a:hover', 'color'],

        //PS
        ['.xsbps_bd', 'colorClean'],
        ['.xsbps_footer', 'colorClean'],
        ['.xsbps_bar_bg', 'backClean'],
        ['.xsbps_titleblock', 'border-bottom-color'],
        ['.xsbps_li-block', 'border-bottom-color'],
        ['a.xsbps_li-block:link', 'colorClean'],
        ['a.xsbps_input-title:link', 'colorClean'],
        ['.xsbps_topmenu_balance_add', 'backClean'],
        ['.xsbps_topmenu_dropdown', 'colorClean'],
      ],
      'accent': [
        ['.xsb_theme_cr--1', 'back'],
        //Widgets
        ['.xsb_w_menu_a:hover', 'backClean'],

        ['.xsb_button', 'backClean'], //background-color #hex
        ['.xsb_button_square', 'backClean'], //background-color #hex
        ['.xsb_button--preview', 'back'],
        ['.xsb_subs_success', 'border'],
        ['.xsb_subs_success', 'color'],
        ['.xsb_0_icon_accent', 'backClean'],
        ['a:hover', 'color'],
        // ['.active', 'color'],
        ['.h_sort_li.active', 'color'],
        ['.sp-choose', 'back'],
        ['a.xsbps_li-block:hover', 'colorClean'],
        ['a.xsbps_input-title:hover', 'colorClean'],
        ['.xsb_review_icon', 'color'],
        ['.xsb_review_div', 'back'],
        // ['.xsb_fpacks_col_bg', 'border-color'], //background-color clean
        ['.xsb_fpacks_badge_txt', 'color'],
        ['.xsb_fpacks_desc_p::after', 'color'],


        //Mail
        ['.xbm_accentbg--check', 'back'],
        ['.xsbm_top', 'back'],
        ['.xbm_accentbg--top', 'backClean'],
        // ['.xsbm_purchase_copy', 'backClean'],

        //PS
        ['.xsbps_btn', 'back'],
        ['.xsbps_card_bg', 'backClean'],
        ['.xsbps_topmenu_balance', 'border-color'],
        ['.xsbps_topmenu_balance', 'colorClean'],
      ],

      'accent_text': [
        ['.xsb_theme_cr--2', 'back'],
        ['.xsb_0_icon_accent_txt', 'colorClean'], //background-color #hex
        ['.xsb_button', 'colorClean'], //background-color #hex
        ['.xsb_button_square', 'colorClean'], //background-color #hex
        ['.xsb_button--preview', 'color'],
        ['.xsbm_footer', 'color'],
        ['.xbm_accentbg--top', 'colorClean'],
        ['.xsbm_top_h', 'colorClean'],
        ['a.xsbps_li-block:hover', 'backClean'],
        ['a.xsbps_input-title:hover', 'backClean'],
        ['.xbm_accentbg--top', 'colorClean'],

        //Mail
        // ['.xsbm_purchase_copy', 'colorClean'],

        //PS
        ['.xsbps_btn', 'back'],
        ['.xsbps_card_bg', 'backClean'],
        ['.xsbps_topmenu_balance', 'border-color'],
        ['.xsbps_topmenu_balance', 'colorClean'],
      ],

      'back': [
        ['.xsb_theme_creative', 'back50'],
        ['.xsb_preview_bg_tint', 'back20'],
        ['.xsbw_z_tint1', 'back50'],
        ['.xsb_widg_w_bg', 'back'],
        ['.xsb_0_icon_bg', 'backClean'],
        ['.xsb_0_icon_bg', 'backClean'],
        // ['body', 'back'],
        ['.xsb_preview_bg', 'back'],
        // ['.xsb_button', 'colorClean'],
        ['.xsb_bg_tint', 'back'],
        // ['.xsb_button', 'colorClean'], //background-color clean
        // ['.xsb_fpacks_col_bg', 'back'], //background-color clean

        //Mail
        ['.xsbm_content', 'color'],
        ['.xbm_accentbg--text', 'back'],
        ['.xsbm_top', 'color'],
        // ['.xsbm_check', 'back'],

        //Login
        ['.xsbl_inner', 'backClean'],
        ['.xsbl_bd', 'colorClean'],
        ['.xsbl_inner_bg', 'backClean'],
        // ['.xsbl_z', 'backClean'],

        //PS
        ['.xsbps_bd', 'colorClean'],
        ['.xsbps_bd', 'backClean'],
        ['a.xsbps_btn:link', 'colorClean'],
        ['a.xsbps_btn:hover', 'colorClean'],
        ['.xsbps_topmenu_balance_add', 'colorClean'],
        ['a.xbc_button:hover', 'colorClean'], //text color clean
      ]
    }


    this.shape = {
      'roundness': [
        ['.xsb_subs_success', 'border-radius'],
        ['.xsb_button', 'border-radius'],
        ['.xsbps_btn', 'border-radius'],
        // ['.xsb_preview_bg', 'border-radius'],
        ['.sp-choose', 'border-radius'],
        ['.xsb_0_icon_theme', 'border-radius'],
        ['.xsb_subs_input', 'border-radius'],
        // ['.xsbm_mailbody', 'border-radius'],
        // ['.xsbl_bd', 'border-radius'],
        // ['.xsbl_inner', 'border-radius'],
        // ['.xsb_fpacks_col_bg', 'border-radius'],
        // ['.swiper-slide', 'border-radius'],
        // ['.swiper-slide', 'border-radius'],
      ]
    }



    this.globalDefault = {
      'projectId': 12345,
      // 'media': '2jJjNc2Z-8I', //'I5dmceTbOy0', //rLhrfCZROlQ
      'video': {
        'shown': false,
        'id': 'wSEoX4TY1aM' //'srp0qGvc3IU', //rLhrfCZROlQ I5dmceTbOy0
      },
      'media': {

        // 'pic': {
        //   'url': 'https://uploads-ssl.webflow.com/5aa70c9a526eee5ec6f75daf/5aeb87ba4ab9c130d90a63fd_Xsolla---Growth.jpg',
        //   'hidden': false,
        // },
        // 'defaultPics': {
        'companyLogo': {
          'url': 'https://uploads-ssl.webflow.com/5aa70c9a526eee5ec6f75daf/5ac57e5ba93e88aa651d002c_xsb_fake_companylogo.svg',
          // 'url': 'https://uploads-ssl.webflow.com/5aa70c9a526eee5ec6f75daf/5ad94db99f34859a852fc7ba_xsb_emptypic.svg',
          'thumb': false,
        },
        'gameLogo': {
          'url': 'https://uploads-ssl.webflow.com/5aa70c9a526eee5ec6f75daf/5ac74d1aaf4ae83d6f2ec5c2_fakelogo.svg',
          // 'url': 'https://uploads-ssl.webflow.com/5aa70c9a526eee5ec6f75daf/5ad94db99f34859a852fc7ba_xsb_emptypic.svg',
          'thumb': false,
        },
        'defaultPic': {
          'url': 'https://uploads-ssl.webflow.com/5aa70c9a526eee5ec6f75daf/5ad94db99f34859a852fc7ba_xsb_emptypic.svg',
          'thumb': false,
        },
        'sliderBlank': {
          'url': 'https://uploads-ssl.webflow.com/5aa70c9a526eee5ec6f75daf/5af12e2c0cda40d64dd80784_sliderDefault.svg',
          'thumb': false,
        },
        // },
        'blank': {
          'url': 'https://uploads-ssl.webflow.com/5aa70c9a526eee5ec6f75daf/5ae94358873cad8d3bdbc768_blank.gif',
          'thumb': 'https://uploads-ssl.webflow.com/5aa70c9a526eee5ec6f75daf/5b2dcc764a7ded48a8473b44_empty.svg',
          'tint': 'rgba(0, 0, 0, 0)',
        },
        'bg': {
          // 'url': 'https://uploads-ssl.webflow.com/5aa70c9a526eee5ec6f75daf/5aeb87ba4ab9c130d90a63fd_Xsolla---Growth.jpg',
          'url': 'https://cdn.xsolla.net/xsolla-site-builder/defaultpics/06302018/xbs_default_bg.jpg', //xsolla hero
          'shown': true,
          'tint': 'rgba(0, 0, 0, 0.6)',
        },
        'bg02': {
          'url': 'https://uploads-ssl.webflow.com/5aa70c9a526eee5ec6f75daf/5aeb87ba4ab9c199090a63fc_Xsolla---User-acquisition.jpg'
        },
        'bg03': {
          'url': 'https://uploads-ssl.webflow.com/5aa70c9a526eee5ec6f75daf/5aeb87ba132ff65b5d48ddcd_Xsolla---Optimization-ok.jpg'
        },
        'bg04': {
          'url': 'https://uploads-ssl.webflow.com/5aa70c9a526eee5ec6f75daf/5aeb87ba64a573677763a204_Xsolla---Funding.jpg'
        },
        'og_thumb': {
          'url': 'https://uploads-ssl.webflow.com/5aa70c9a526eee5ec6f75daf/5b33114b35c7c085761210d4_og_thumb.png',
          'thumb': false,
        }

        // 'logo_fake_01': {
        // 'url': 'http://uploads.webflow.com/5adf1ca50e36ee404172a4da/5ae032618a4348ab39b90eb0_Logo_BardsTale4BD.png'
        // },


        // 'slide0': 'https://uploads-ssl.webflow.com/5aa70c9a526eee5ec6f75daf/5aaa49678a9e9e05ba24088d_Screen%20Shot%202018-03-15%20at%2003.22.06.png',
        // 'slide1': 'https://uploads-ssl.webflow.com/5aa70c9a526eee5ec6f75daf/5aaa49668a9e9e836824088c_Screen%20Shot%202018-03-15%20at%2003.22.17.png',
        // 'slide2': 'https://uploads-ssl.webflow.com/5aa70c9a526eee5ec6f75daf/5aaa49684385a1011364d90f_Screen%20Shot%202018-03-15%20at%2003.21.06.png',
        // 'bg01': 'https://cdn.cgsociety.org/cg/g15/221515/221515_1375774973_orig.jpg',
        // 'bg02': 'https://78.media.tumblr.com/a58bcef5668713531a7e45282069cda3/tumblr_oiwqc7yBy11rsdpaso1_500.gif',
        // 'bg03': 'http://coolvibe.com/wp-content/uploads/2015/01/Sci-Fi-Art-Serg-Soul-Alien-Landscape-992x442.jpg',
        // 'bg04': 'https://w-dog.net/wallpapers/15/19/438953501471203/sci-fi-art-fiction-future-street-road-building-destroyed-being-monster-chains.jpg',
        // 'bg05': 'https://cdna.artstation.com/p/assets/images/images/001/397/070/large/juan-pablo-roldan-alien-world-16.jpg?1445724887',
        // 'bg06': 'https://static1.squarespace.com/static/536a90dfe4b0fe2bd2fbae1f/536b214de4b086819503fb0f/548bc2f7e4b0602fc63fef4a/1516649658225/GEAR+Still1.jpg?format=1500w',
        // 'bg07': 'http://xsolla.chulakov.ru/assets/cover.bd01fe98.jpg',
        // 'bg07': 'http://xsolla.chulakov.ru/assets/cover.bd01fe98.jpg',
      },
      'languages': {
        'active': 'en_US',
        'en_US': true,
        'ru_RU': true,
        'pt_PT': true,
        'ch_CH': true,
      },
      'panel': false,
      'userTheme': this.defaultTheme,
      'userShapes': this.defaultShape,
    }






    this.modulesDefault = {
      'bg': {
        'position': -2,
        'shown': true,
        'config': {
          'w_video': {
            'shown': true,
          },
          'w_bg': {
            'shown': true
          },
        },
        'media': {
          'bg': this.globalDefault['media']['blank'],
        },
      },
      'widgets': {
        'position': -1,
        'shown': true,
        'config': {
          'widgets_w_bg': {
            'shown': true,
          },
          'widget_menu': {
            'shown': false,
          },
          'widget_menu_hero': {
            'shown': true,
          },
          'widget_menu_packs': {
            'shown': true,
          },
          'widget_menu_text': {
            'shown': true,
          },
          'widget_menu_gallery': {
            'shown': true,
          },
          'widget_menu_sysreq': {
            'shown': true,
          },
          'widget_menu_zendesk': {
            'shown': true,
          },
          'widget_menu_forum': {
            'shown': true,
          },
          'widget_menu_gallery': {
            'shown': true,
          },
          'widget_share': {
            'shown': true,
          },
          'widget_share_fb': {
            'shown': true,
          },
          'widget_lang': {
            'shown': true,
          },
          'widget_lang_en': {
            'shown': true
          },
          'widget_lang_ru': {
            'shown': true
          },
          'widget_lang_pt': {
            'shown': false
          },
          'widget_lang_ch': {
            'shown': false
          },
          'widgets_w_bg': {
            'shown': true
          }
        },
      },
      'hero': {
        'position': 0,
        'shown': true,
        'locked': true,
        'media': {
          'gameLogo': this.globalDefault['media']['gameLogo'],
          'companyLogo': this.globalDefault['media']['companyLogo'],
          'bg': this.globalDefault['media']['blank'],
        },
        'config': {
          'hero_logo': {
            'shown': true
          },
          'hero_h1': {
            'shown': true
          },
          'hero_lead': {
            'shown': true
          },
          'hero_platforms': {
            'shown': true
          },
          'w_buy': {
            'shown': true,
          },
          'w_google': {
            'shown': false,
          },
          'w_subscribe': {
            'shown': false,
          },
          'w_download': {
            'shown': false,
          },
          'w_trailer': {
            'shown': false,
          },
          'w_platforms': {
            'shown': true
          },
          'platforms_drm': {
            'shown': true
          },
          'platforms_gog': {
            'shown': false
          },
          'platforms_linux': {
            'shown': false
          },
          'platforms_mac': {
            'shown': false
          },
          'platforms_steam': {
            'shown': true
          },
          'platforms_hero1': {
            'shown': true
          },
          'platforms_hero2': {
            'shown': false
          },
          'platforms_hero3': {
            'shown': false
          },
          'hero_w_logo': {
            'shown': true
          },
          'hero_w_text': {
            'shown': true
          },

        },
        'content': {
          'en_US': {
            'title': {
              'hidden': false,
              'txt': 'Your Game Name',
            },
            'lead': {
              'hidden': false,
              'txt': this.dummyText[this.globalDefault['languages']['active']],
            },
            'available': {
              'hidden': false,
              'txt': 'Available For',
            },
          },
          'pt_PT': {
            'title': {
              'hidden': false,
              'txt': 'New Game',
            },
            'lead': {
              'hidden': false,
              'txt': this.dummyText[this.globalDefault['languages']['active']],
            },
            'available': {
              'hidden': false,
              'txt': 'Available For:',
            },
          },
          'ru_RU': {
            'title': {
              'hidden': false,
              'txt': 'Новая игра',
            },
            'lead': {
              'hidden': false,
              'txt': 'Краткое описание игры',
            },
            'available': {
              'hidden': false,
              'txt': 'Доступен для:',
            },
          },
          'ch_CH': {
            'buy': {
              'hidden': false,
              'txt': '立即购买',
            },
            'available': {
              'hidden': false,
              'txt': 'Доступен для:',
            },
          },
        },
      },

      'fpacks': {
        'position': 1,
        'shown': false,
        'config': {
          'fpacks_cols': {
            'shown': true
          },
          'fpacks_rows': {
            'shown': false
          },
          'w_pack1': {
            'shown': true
          },
          'w_pack2': {
            'shown': true
          },
          'w_pack3': {
            'shown': true
          },
          'w_pack4': {
            'shown': true
          },
          'w_pack_pic': {
            'shown': true
          },
          'w_pack1_badge': {
            'shown': true
          },
          'w_pack_shadow': {
            'shown': true
          },

          'w_pack2_badge': {
            'shown': true
          },
          'w_pack3_badge': {
            'shown': false
          },
          'w_pack4_badge': {
            'shown': false
          },
          'w_pack_pic': {
            'shown': true
          },
        },
        'media': {
          // 'pack1': {
          //   'url': 'https://uploads-ssl.webflow.com/5aa70c9a526eee5ec6f75daf/5aeb87ba4ab9c199090a63fc_Xsolla---User-acquisition.jpg',
          //   'tint': 'rgba(0, 0, 0, 0.0)'
          // },
          // 'pack2': {
          //   'url': 'https://uploads-ssl.webflow.com/5aa70c9a526eee5ec6f75daf/5aeb87ba64a573677763a204_Xsolla---Funding.jpg',
          //   'tint': 'rgba(0, 0, 0, 0.0)'
          // },
          // 'pack3': {
          //   'url': 'https://uploads-ssl.webflow.com/5aa70c9a526eee5ec6f75daf/5aeb87ba132ff65b5d48ddcd_Xsolla---Optimization-ok.jpg',
          //   'tint': 'rgba(0, 0, 0, 0.0)'
          // },
          // 'pack4': {
          //   'url': 'https://uploads-ssl.webflow.com/5aa70c9a526eee5ec6f75daf/5aeb87ba4ab9c199090a63fc_Xsolla---User-acquisition.jpg',
          //   'tint': 'rgba(0, 0, 0, 0.0)'
          // },
          // 'pack1_bg': {
          //   'url': 'https://uploads-ssl.webflow.com/5aa70c9a526eee5ec6f75daf/5ae94358873cad8d3bdbc768_blank.gif',
          //   'thumb': 'https://uploads-ssl.webflow.com/5aa70c9a526eee5ec6f75daf/5b0fa363b46f9a8c2dc23ee4_empty.svg'
          // },
          // 'pack2_bg': {
          //   'url': 'https://uploads-ssl.webflow.com/5aa70c9a526eee5ec6f75daf/5ae94358873cad8d3bdbc768_blank.gif',
          //   'thumb': 'https://uploads-ssl.webflow.com/5aa70c9a526eee5ec6f75daf/5b0fa363b46f9a8c2dc23ee4_empty.svg'
          // },
          // 'pack3_bg': {
          //   'url': 'https://uploads-ssl.webflow.com/5aa70c9a526eee5ec6f75daf/5ae94358873cad8d3bdbc768_blank.gif',
          //   'thumb': 'https://uploads-ssl.webflow.com/5aa70c9a526eee5ec6f75daf/5b0fa363b46f9a8c2dc23ee4_empty.svg'
          // },
          // 'pack4_bg': {
          //   'url': 'https://uploads-ssl.webflow.com/5aa70c9a526eee5ec6f75daf/5ae94358873cad8d3bdbc768_blank.gif',
          //   'thumb': 'https://uploads-ssl.webflow.com/5aa70c9a526eee5ec6f75daf/5b0fa363b46f9a8c2dc23ee4_empty.svg'
          // },
          // 'bg': {
          //   'url': 'https://uploads-ssl.webflow.com/5aa70c9a526eee5ec6f75daf/5ae94358873cad8d3bdbc768_blank.gif',
          //   'thumb': 'https://uploads-ssl.webflow.com/5aa70c9a526eee5ec6f75daf/5b0fa363b46f9a8c2dc23ee4_empty.svg'
          // },

          'pack1': this.globalDefault['media']['defaultPic'],
          'pack2': this.globalDefault['media']['defaultPic'],
          'pack3': this.globalDefault['media']['defaultPic'],
          'pack4': this.globalDefault['media']['defaultPic'],
          'pack1_bg': this.globalDefault['media']['blank'],
          'pack2_bg': this.globalDefault['media']['blank'],
          'pack3_bg': this.globalDefault['media']['blank'],
          'pack4_bg': this.globalDefault['media']['blank'],
          'bg': this.globalDefault['media']['blank'],

        },
        'content': {
          'en_US': {
            'title': {
              'hidden': false,
              // 'txt': dummyTitle['en_US'],
            },
            'lead': {
              'hidden': false,
              'txt': this.dummyText['en_US'],
            },
            'available': {
              'hidden': false,
              'txt': 'Available For',
            },
          },
          'ru_RU': {
            'title': {
              'hidden': false,
            },
            'content': {
              'hidden': false,
            },
          },
        },
      },

      'gallery1': {
        'position': 2,
        'shown': false,
        'media': {
          'bg': this.globalDefault['media']['blank'],
        },
        'slider': {
          'slide': this.globalDefault['media']['sliderBlank'],
          'slide0': this.globalDefault['media']['sliderBlank'],
          'slide1': this.globalDefault['media']['sliderBlank'],
        },
        'gallery': {
          'gall_regular': {
            'loop': false,
          },
          'gall_full': {
            // 'loop': true,
            // 'coverflowEffect': {
            //   'rotate': 50,
            //   'stretch': 0,
            //   'depth': 100,
            //   'modifier': 1,
            //   'slideShadows' : true,
            // },
          },
          'gall_phone': {
            'loop': false,
          },
        },
      },

      'text': {
        'shown': false,
        'media': {
          'bg': this.globalDefault['media']['blank'],
          'text_pic_1': this.globalDefault['media']['defaultPic'],
          'text_pic_2': this.globalDefault['media']['defaultPic'],
          'text_pic_3': this.globalDefault['media']['defaultPic'],
          'text_pic_4': this.globalDefault['media']['defaultPic'],
        },
        'position': 3,
      },

      'sysreq': {
        'shown': false,
        'media': {
          'bg': this.globalDefault['media']['blank'],
        },
        'content': {
          'en_US': {
            'title': {
              'hidden': false,
              'txt': 'System Requirements',
            },
          }
        },
        'position': 4,
      },

      'store': {
        'shown': false,
        'media': {
          'bg': this.globalDefault['media']['blank'],
        },
        'position': 5,
        'config': {
          'store_featured': {
            'shown': true
          },
          'store_regular': {
            'shown': false
          },
          'store_small': {
            'shown': false
          },
        }
      },

      'reviews': {
        'position': 6,
        'shown': false,
        'media': {
          'bg': this.globalDefault['media']['blank'],
          'review1_bg': this.globalDefault['media']['blank'],
          'review2_bg': this.globalDefault['media']['blank'],
          'review3_bg': this.globalDefault['media']['blank'],
          'review4_bg': this.globalDefault['media']['blank'],
        },
        'content': {
          'en_US': {
            'title': {
              'hidden': false,
              'txt': 'Press Reviews',
            },
            'review_1': {
              'hidden': false,
              'txt': 'The next big thing in the genre',
            },
            'review_1_author': {
              'hidden': false,
              'txt': 'John Smith, Influencer',
            },
            'review_2': {
              'hidden': false,
              'txt': 'The game generates some wonderful stories. It\'s fantastic!',
            },
            'review_2_author': {
              'hidden': false,
              'txt': 'Caren Stone, Game Reviewer',
            },
            'review_3': {
              'hidden': false,
              'txt': 'A genuine spiritual successor to the classics',
            },
            'review_3_author': {
              'hidden': false,
              'txt': 'Stan Cole, Blogger',
            },
            'review_4': {
              'hidden': false,
              'txt': 'One of my gaming highlights of the year',
            },
            'review_4_author': {
              'hidden': false,
              'txt': 'Alicia Adams, Influencer',
            },
          },
          'ru_RU': {
            'title': {
              'hidden': false,
              'txt': 'Отзывы',
            },
          },
        },
      },


      'html': {
        'shown': false,
        'position': 6,
        'media': {
          'bg': this.globalDefault['media']['blank'],
        },
      },

      'hero_small': {
        'shown': false,
        'position': 7,
        'media': {
          'bg': this.globalDefault['media']['blank'],
        },
      },

      'footer': {
        'shown': true,
        'position': 8,
        'locked': true,
        'media': {
          'bg': { 'tint': 'rgba(0,0,0,0.9)' },
          'companyLogo': {
            'default': this.globalDefault['media']['companyLogo'],
          },
        },
        'content': {
          'en_US': {
            'footer': {
              'hidden': false,
              'txt': '©2018 Company Name',
            },
          },
        },
        'config': {
          'rus_pegi': {
            'shown': true
          },
          'rus_pegi_21': {
            'shown': true,
          },
          'pegi': {
            'shown': true
          },
          'pegi_18': {
            'shown': true,
          },
          'social': {
            'shown': true
          },
          'social_facebook': {
            'shown': true,
            'url': 'https://www.facebook.com/',
          },
          'social_twitter': {
            'shown': true,
            'url': 'https://www.twitter.com/',
          },
          'social_twitch': {
            'shown': false,
            'url': 'https://www.twitch.com/',
          },
          'social_youtube': {
            'shown': true,
            'url': 'https://www.youtube.com/',
          },
          'social_vk': {
            'shown': false,
            'url': 'https://www.vk.com/',
          }
        }
      },


      'mail_trans1': {
        'shown': true,
        'position': 0,
        'media': {
          'bg': this.globalDefault['media']['blank'],
        },
        'content': {
          'en_US': {
            'title': {
              'txt': 'Successfull Purchase Title',
            },
            'mail_trans_1': {
              'txt': 'Optional Transactional Mail Text',
            },
            'cta': {
              'txt': 'Download',
            },
          }
        }
      },


      'mail_subs_verif': {
        'position': 0,
        'shown': true,
        'media': {
          'bg': this.globalDefault['media']['blank'],
        },
        'content': {
          'en_US': {
            'title': {
              'txt': 'Verify Email Address',
            },
            'mail_trans_1': {
              'txt': this.dummyText['en_US'],
            },
            'cta': {
              'txt': 'Verify',
            },
          }
        }
      },


      'login_pop1': {
        'media': {
          'bg': this.globalDefault['media']['blank'],
        },
        'position': 0,
        'shown': true,
        'content': {
          'en_US': {

          }
        }
      },


      'ps_card': {
        'media': {
          'bg': this.globalDefault['media']['blank'],
        },
        'position': 0,
        'shown': true,
        'content': {
          'en_US': {

          }
        }
      },


      'store_hero': {
        'media': {
          'bg': this.globalDefault['media']['blank'],
        },
        'position': 0,
        'shown': true,
        'content': {
          'en_US': {

          }
        }
      },

      'store_featured': {
        'media': {
          'bg': this.globalDefault['media']['blank'],
        },
        'position': 0,
        'shown': true,
        'content': {
          'en_US': {
            'store_title_featured': {
              'txt': 'Featured',
            },
          }
        }
      },

      'store_grid1': {
        'media': {
          'bg': this.globalDefault['media']['blank'],
        },
        'position': 0,
        'shown': true,
        'content': {
          'en_US': {
            'store_title_regular': {
              'txt': 'Featured',
            },
          }
        }
      },

      'store_grid_small': {
        'shown': true,
        'media': {
          'bg': this.globalDefault['media']['blank'],
        },
        'position': 0,
        'content': {
          'en_US': {
            'store_title_small': {
              'txt': 'Small',
            },
          }
        }
      },


      'seo_gtm': {
        'shown': true,
      },

      'seo_favicon': {
        'shown': true,
      },

      'seo_fb': {
        'media': {
          'seo_fb_og': this.globalDefault['media']['og_thumb'],
        },
        'shown': true,
        'content': {
          'en_US': {
            'seo_fb_title': {
              'txt': 'The New Game is out now!',
            },
            'seo_og_desc': {
              'txt': this.dummyText['en_US'],
            }
          }
        },
      },

      'seo_google': {
        'shown': true,
      },


      'seo_code': {
        'shown': true,
      },




      'faq_1': {
        'shown': true,
      },


    }


    this.localization = {
      'en_US': {
        'modules_title': 'Xsolla Site Builder',

        'modules_widgets': 'Widgets',
        'xsb_modules_adv_widgets': 'Widgets',

        'modules_hero': 'Hero',
        'modules_hero_platforms_title': 'Platforms',
        'modules_hero_platforms_steam': 'Steam',
        'modules_hero_platforms_mac': 'App Store',
        'modules_hero_platforms_linux': 'Linux',
        'modules_hero_platforms_gog': 'GOG',
        'modules_hero_platforms_drm': 'DRM-free',
        'modules_hero_platforms_play': 'Google Play',
        'modules_hero_platforms_win': 'Windows',


        'modules_resore': 'Unhide (3)',

        'modules_hero_cta_note': 'The button will work after publishing',



        'xsb_modules_adv_hero': 'Hero Block',
        'xsb_modules_adv_packs': 'Packs Block',
        'xsb_modules_adv_description': 'Description Block',
        'xsb_modules_adv_gallery': 'Gallery Block',
        'xsb_modules_adv_sysreq': 'Requirements Block',
        'xsb_modules_adv_rewiews': 'Reviews Block',
        'xsb_modules_adv_cta': 'Call to Action Block',
        'xsb_modules_adv_footer': 'Footer Block',

        'modules_description1': 'Packs',
        'modules_gallery': 'Gallery',
        'modules_description2': 'Description',
        'modules_store': 'Store',
        'modules_requirements': 'Requirements',
        'modules_cta': 'Call to Action',
        'modules_footer': 'Footer',
        'modules_advanced_title': 'Block Settings',

        'modules_advanced_choseimage': 'Background',

        'modules_footer_pegi_title_eu': 'PEGI Rating',
        'modules_footer_pegi_3': 'Pegi 3',
        'modules_footer_pegi_7': 'Pegi 7',
        'modules_footer_pegi_12': 'Pegi 12',
        'modules_footer_pegi_16': 'Pegi 16',
        'modules_footer_pegi_18': 'Pegi 18',
        'modules_footer_pegi_title_ru': 'Age Restrictions',
        'modules_footer_rus_pegi_3': '0+',
        'modules_footer_rus_pegi_6': '6+',
        'modules_footer_rus_pegi_12': '12+',
        'modules_footer_rus_pegi_18': '18+',
        'modules_footer_rus_pegi_21': '21+',


        'modules_sysreq_var1': '1 Platform',
        'modules_sysreq_var2': '2 Platforms',
        'modules_sysreq_var3': '3 Platforms',


        'mail_title': 'Mail',
        'mail_trans1': 'Transactional Email 1',
        'mail_email1': 'Email Verification',

        'global_back_title': 'Background Media',
        'global_back_vidback': 'Video Background',
        'global_back_picback': 'Picture Background',
        'global_back_choseimage': 'Choose Image',
        'global_back_videonote': 'Add YouTube link to set the background video',
        'global_back_picnote': 'Maximum image size: 1MB',

        'global_colors_title': 'Custom Colors',
        'global_colors_extitle': 'Main Text Color',
        'global_colors_exbutt': 'Button Text',
        'global_colors_text': 'Text:',
        'global_colors_accent': 'Accent:',
        'global_colors_bg': 'Bg:',
        'global_colors_style': 'Roundness:',
        'widget_loc_h': 'Translations',
        'widget_menu_h': 'Menu',
        'widget_share_h': 'Share',



        'media_image_title': 'Images',
        'media_style_cover': 'Cover',
        'media_style_contain': 'Contain',
        'media_image_upload': 'Upload',
        'media_style_tint': 'Tint',
        'media_image_clear': 'Clear',

        'xsb_xsb_hint': 'Back to Publisher Account',
        'xsb_modules_hint': 'Landing Page Design',
        'xsb_mail_hint': 'Email Design',
        'xsb_login_hint': 'User Login and Account',
        'xsb_ps_hint': 'Payment Customisation',
        'xsb_store_hint': 'Store Customization',
        'xsb_global_hint': 'Custom Theme',


        'xsb_media_hint': 'Assets',
        'xsb_seo_hint': 'SEO Settings',

        'modules_reviews': 'Reviews',
        'modules_reviews_var_reviews_2': '2 Reviews',
        'modules_reviews_var_reviews_3': '3 Reviews',
        'modules_reviews_var_reviews_4': '4 Reviews',


        'modules_html': 'Custom Code',
        'modules_html_var_html_full': 'Full-width',
        'modules_html_var_html_centered': 'Centered',
        'modules_html_edit': 'Edit HTML',
        'modules_html_note': 'The code is not validated. Use at your own risk',
        // 'modules_html_apply_all': 'Apply to 🇺🇸 🇷🇺 🇨🇳 🇧🇷',
        'modules_html_apply_all': 'Apply to all',
        'modules_html_apply_all_note': 'Apply this code to all localisations',



        'xsb_publish_last': 'Last published:',
        'xsb_publish_time': 'May 2, 2018 6:33PM (PST)',
        'xsb_publish_publish': 'Publish',

        'xsb_content_requirements_title': 'System Requirements',
        'xsb_content_requirements_pc': 'PC',
        'xsb_content_requirements_mac': 'Mac',
        'xsb_content_requirements_linux': 'Mac',
        'xsb_content_requirements_os': 'OS',
        'xsb_content_requirements_processor': 'Processor',
        'xsb_content_requirements_memory': 'Memory',
        'xsb_content_requirements_graphics': 'Graphics',
        'xsb_content_requirements_directx': 'DirectX',
        'xsb_content_requirements_storage': 'Storage',
        'xsb_content_requirements_soundcard': 'Soundcard',

        'xsb_content_footer_xsolla': 'Media',

      },

      'pt_PT': {
        'modules_title': 'Xsolla Site Builder',
        'modules_hero': 'Hero',
        'modules_description1': 'Packs',
        'modules_gallery': 'Gallery',
        'modules_gallery_var_1': 'Regular',
        'modules_gallery_var_2': 'Full Width',


        'modules_description2': 'Description',
        'modules_store': 'Store',
        'modules_requirements': 'Requirements',
        'modules_cta': 'Call to Action',
        'modules_footer': 'Footer',
        'modules_advanced_title': 'Module Settings',

        'modules_hero_var_hero': 'Hero',
        'modules_hero_var_herominimal': 'Hero Minimal',
        'modules_hero_var_hero2cols': '2 Columns',

        'modules_hero_var_default': 'Default',
        'modules_hero_var_columns1': 'Columns 1',
        'modules_hero_var_columns2': 'Columns 2',
        'modules_hero_var_text0': 'Text Only',


        'modules_fpacks_var_2packs': '2 packs',
        'modules_fpacks_var_3packs': '3 packs',
        'modules_fpacks_var_4packs': '4 packs',

        'modules_footer_social': 'Social',
        'modules_footer_social_facebook': 'Facebook',
        'modules_footer_social_twitch': 'Twitch',
        'modules_footer_social_youtube': 'YouTube',
        'modules_footer_social_vk': 'VK',



        'mail_title': 'Mail',
        'mail_trans1': 'Transactional Email 1',
        'mail_email1': 'Email Verification',

        'global_back_title': 'Background Media',
        'global_back_vidback': 'Video Background',
        'global_back_picback': 'Picture Background',
        'global_back_choseimage': 'Upload',
        'global_back_videonote': 'Add YouTube link to set the background video',
        'global_back_picnote': 'Maximum image size: 1MB',

        'global_colors_title': 'Custom Colors',
        'global_colors_extitle': 'Main Text Color',
        'global_colors_exbutt': 'Accent Color',
        'global_colors_text': 'Text:',
        'global_colors_accent': 'Accent:',
        'global_colors_bg': 'Bg:',
        'global_colors_style': 'Style:',
        'global_trans_title': 'Translations',

        'media_style_cover': 'Cover',
        'media_style_contain': 'Contain',
        'media_image_upload': 'Upload',
        'media_style_tint': 'Tint',

        'xsb_xsb_hint': 'Back to Publisher Settings',
        'xsb_modules_hint': 'Landing Page Design',
        'xsb_mail_hint': 'Email Design',
        'xsb_login_hint': 'User Login and Account',
        'xsb_ps_hint': 'Payment Customisation',
        'xsb_store_hint': 'Store Customization',
        'xsb_global_hint': 'Custom Theme',
        'xsb_media_hint': 'Media',

        'xsb_publish_last': 'Last published:',
        'xsb_publish_time': 'May 2, 2018 6:33PM (PST)',
        'xsb_publish_publish': 'Publish',
      },

      'ru_RU': {
        'modules_title': 'Xsolla Site Builder',
        'modules_hero': 'Заглавный блок',
        'modules_description1': 'Паки',
        'modules_gallery': 'Галерея',
        'modules_description2': 'Описание',
        'modules_store': 'Магазин',
        'modules_requirements': 'Системные требования',
        'modules_cta': 'Блок «Купить»',
        'modules_footer': 'Футер',
        'modules_advanced_title': 'Настройка модуля',

        'mail_title': 'Письма',
        'mail_trans1': 'Транзакционное Письмо 1',
        'mail_email1': 'Письмо подтверждения',


        'global_back_vidback': 'Видео фон',
        'global_back_picback': 'Статичный фон',
        'global_back_choseimage': 'Фоновое Изображение',
        'global_back_videonote': 'Вставьте ссылку на видео с YouTube',
        'global_back_picnote': 'Maximum image size: 1MB',

        'global_colors_title': 'Основные цвета',
        'global_colors_extitle': 'Цвет текста',
        'global_colors_exbutt': 'Акцент',
        'global_colors_text': 'Текст:',
        'global_colors_accent': 'Акцент:',
        'global_colors_bg': 'Фон:',
        'global_colors_style': 'Стиль:',
        'global_trans_title': 'Переводы',

        'media_style_cover': 'Cover',
        'media_style_contain': 'Contain',
        'media_style_tint': 'Tint',

        'xsb_xsb_hint': 'Назад в Xsolla Publisher',
        'xsb_modules_hint': 'Дизайн посадочной страницы',
        'xsb_mail_hint': 'Дизайн писем',
        'xsb_login_hint': 'Дизайн логина и личного кабинета',
        'xsb_ps_hint': 'Дизайн оформления заказа',
        'xsb_store_hint': 'Дизайн магазина',
        'xsb_global_hint': 'Глобальные настройки',
        'xsb_media_hint': 'Изображения',

        'xsb_publish_last': 'Last published:',
        'xsb_publish_time': 'May 2, 2018 6:33PM (PST)',
        'xsb_publish_publish': 'Publish',
      },

      'ch_CH': {
        'modules_title': '模Xsolla Site Builder 1.0块',
        'modules_hero': '主人翁',
        'modules_description1': '描述 1',
        'modules_gallery': '画廊',
        'modules_description2': '描述 2',
        'modules_store': '商店',
        'modules_requirements': '要求',
        'modules_cta': '呼吁采取行动',
        'modules_footer': '页脚',
        'modules_advanced_title': 'Module Settings',

        'mail_title': '邮件',
        'mail_trans1': '交易电子邮件 1',
        'mail_email1': '电子邮件验证',

        'global_back_vidback': 'Video Background',
        'global_back_picback': 'Picture Background',
        'global_back_choseimage': 'Upload',
        'global_back_videonote': 'Add YouTube link to set the background video',
        'global_back_picnote': 'Maximum image size: 1MB',

        'global_back_title': '背景媒体',
        'global_back_vidback': '视频背景',
        'global_back_picback': '图片背景',
        'global_colors_title': '自定义颜色',
        'global_colors_extitle': '主文本颜色',
        'global_colors_exbutt': '口音颜色',
        'global_colors_text': '文本',
        'global_colors_accent': '口音',
        'global_colors_bg': '背景',
        'global_colors_style': '样式:',
        'global_trans_title': 'Translations',

        'media_style_cover': 'Cover',
        'media_style_contain': 'Contain',
        'media_style_tint': 'Tint',

        'xsb_xsb_hint': '返回到发布商设置',
        'xsb_modules_hint': '着陆页面设计',
        'xsb_mail_hint': '电邮设计',
        'xsb_login_hint': '用户登录和帐户',
        'xsb_ps_hint': '付款定制',
        'xsb_store_hint': '商店定制',
        'xsb_global_hint': '自定义主题',
        'xsb_media_hint': 'Media',

        'xsb_publish_last': 'Last published:',
        'xsb_publish_time': 'May 2, 2018 6:33PM (PST)',
        'xsb_publish_publish': 'Publish',
      },

    };


  }
  return Defaults;

});