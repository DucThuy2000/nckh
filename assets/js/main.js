window.onload = () => {
  const owl = {
    init: function () {
      this.slider('#category-carousel-1');
      this.slider('#category-carousel-2');
      this.slider('#shop-main-product-1');
      this.slider('#shop-main-product-2');
      this.slider('#shop-main-product-3');
      this.slider('#shop-main-product-4');
      this.slider('#shop-main-product-5');
      this.slider('#shop-header-carousel');
      this.slider('#product-same-carousel');
      this.slider('#product-detail');
      this.slider('#contact-client');
      this.slider('#order-carousel');
    },
    slider: function (target) {
      const mainWrap = $(target)
      let options = {}
      switch (target) {
        case '#shop-header-carousel':
          options = {
            loop: true,
            margin: 0,
            dots: true,
            nav: false,
            autoplay: true,
            responsive: {
              0: {
                items: 1
              },
            }
          }
          break;
        case '#category-carousel-1':
          options = {
            loop: false,
            margin: 0,
            dots: false,
            nav: true,
            navElement: '<div class="arrow-carousel"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 492 492" style="enable-background:new 0 0 492 492;" xml:space="preserve"><path d="M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12 C361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084 c-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864 l16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z"/></svg></div>',
            navText: '',
            responsive: {
              0: {
                items: 1
              },
            }
          }
          break;
        case '#category-carousel-2':
          options = {
            loop: false,
            margin: 0,
            dots: false,
            nav: true,
            navElement: '<div class="arrow-carousel"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 492 492" style="enable-background:new 0 0 492 492;" xml:space="preserve"><path d="M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12 C361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084 c-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864 l16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z"/></svg></div>',
            navText: '',
            responsive: {
              0: {
                items: 1
              },
            }
          }
          break;
        case '#shop-main-product-1':
          options = {
            loop: false,
            margin: 10,
            dots: false,
            nav: true,
            navElement: '<div class="arrow-carousel"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 492 492" style="enable-background:new 0 0 492 492;" xml:space="preserve"><path d="M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12 C361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084 c-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864 l16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z"/></svg></div>',
            navText: '',
            responsive: {
              0: {
                items: 1
              },
              425: {
                items: 2
              },
              575: {
                items: 4
              },
            }
          }
          break;
        case '#shop-main-product-2':
          options = {
            loop: false,
            margin: 10,
            dots: false,
            nav: true,
            navElement: '<div class="arrow-carousel"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 492 492" style="enable-background:new 0 0 492 492;" xml:space="preserve"><path d="M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12 C361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084 c-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864 l16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z"/></svg></div>',
            navText: '',
            responsive: {
              0: {
                items: 1
              },
            }
          }
          break;
        case '#shop-main-product-3':
          options = {
            loop: false,
            margin: 10,
            dots: true,
            nav: false,
            responsive: {
              0: {
                items: 1
              },
            }
          }
          break;
        case '#shop-main-product-4':
          options = {
            loop: false,
            margin: 10,
            dots: true,
            nav: false,
            responsive: {
              0: {
                items: 1
              },
            }
          }
          break;
        case '#shop-main-product-5':
          options = {
            loop: false,
            margin: 10,
            dots: false,
            nav: true,
            navElement: '<div class="arrow-carousel"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 492 492" style="enable-background:new 0 0 492 492;" xml:space="preserve"><path d="M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12 C361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084 c-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864 l16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z"/></svg></div>',
            navText: '',
            responsive: {
              0: {
                items: 2
              },
              425: {
                items: 3
              },
              575: {
                items: 5
              },
            }
          }
          break;
        case '#product-detail':
          options = {
            loop: false,
            margin: 0,
            dots: false,
            nav: false,
            dotsContainer: '#product-detail-dots',
            responsive: {
              0: {
                items: 1
              },
            }
          }
          break;
        case '#product-same-carousel':
          options = {
            loop: false,
            margin: 10,
            dots: false,
            nav: true,
            navElement: '<div class="arrow-carousel"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 492 492" style="enable-background:new 0 0 492 492;" xml:space="preserve"><path d="M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12 C361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084 c-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864 l16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z"/></svg></div>',
            navText: '',
            responsive: {
              0: {
                items: 1
              },
            }
          }
          break;
        case '#contact-client':
          options = {
            loop: false,
            margin: 10,
            dots: false,
            nav: true,
            navElement: '<div class="arrow-carousel"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 492 492" style="enable-background:new 0 0 492 492;" xml:space="preserve"><path d="M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12 C361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084 c-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864 l16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z"/></svg></div>',
            navText: '',
            responsive: {
              0: {
                items: 2
              },
              425: {
                items: 2
              },
              768: {
                items: 3
              },
              1024: {
                items: 5
              },
              1520: {
                items: 6
              }
            }
          }
          break;
          case '#order-carousel':
          options = {
            loop: false,
            margin: 10,
            dots: false,
            nav: false,
            navText: '',
            responsive: {
              0: {
                items: 2
              },
              425: {
                items: 3
              },
              575: {
                items: 4
              },
              1024:{
                items: 6
              }
            }
          }
          break;
        default:
          return true
      }
      if (mainWrap) {
        const owl = $(mainWrap).owlCarousel(options)
        if (target === '#product-detail') {
          const owlDotsCustom = $('#product-detail-dots .preview-image-item')
          owl.on('changed.owl.carousel', function (event) {
            owlDotsCustom.removeClass('active')
            owlDotsCustom[event.item.index].classList.add('active')
          })
          owlDotsCustom.click(function (item) {
            owlDotsCustom.removeClass('active')
            item.currentTarget.classList.add('active')
            owl.trigger('to.owl.carousel', [$(this).index(), 300]);
          });
        }
      }
    },
  }
  owl.init();

  const login_register = {
    init: function () {
      this.login_Register();
      this.tabsLogin();
    },
    login_Register: function () {
      const login = document.querySelector(
        ".user-account .user--login"
      );
      const register = document.querySelector(
        ".user-account .user--register"
      );
      const clickLogin = document.querySelector(
        ".user--login .link--login"
      );
      const clickRegister = document.querySelector(
        ".user--register .register__login"
      );
      if (login && register && clickLogin && clickRegister) {
        clickLogin.addEventListener("click", function () {
          register.classList.add('active');
          login.classList.add('active');
        });
        clickRegister.addEventListener("click", function () {
          register.classList.remove('active');
          login.classList.remove('active');
        });
      }
    },
    tabsLogin:function(){
      const userList = document.querySelector(
        ".user__list"
      );
      const userListAD = document.querySelector(
        ".user__listad"
      );
      const clickCustom = document.querySelector(
        ".user--login .custom"
      );
      const clickAdmin = document.querySelector(
        ".user--login .admin"
      );
      if (userList && userListAD && clickCustom && clickAdmin) {
        clickAdmin.addEventListener("click", function () {
          userListAD.classList.add('active');
          userList.classList.add('active');
        });
        clickCustom.addEventListener("click", function () {
          userListAD.classList.remove('active');
          userList.classList.remove('active');
        });
      }
    }
  };
  login_register.init();

  const slidebarBlog = {
    init: function () {
      this.sidebarBlog();
    },
    sidebarBlog: function () {
      const sidebar = document.querySelector(
        ".categories .categories__sidebar"
      );
      const activesidebar = document.querySelector(
        ".categories .categories--reponsive"
      );
      const closesidebar = document.querySelector(
        ".categories .categories__close"
      );
      const panelOverlay = document.querySelector(
        ".categories .panel-overlay"
      );
      if (sidebar && activesidebar && closesidebar && panelOverlay) {
        sidebar.addEventListener("click", function () {
          activesidebar.classList.toggle('active');
          panelOverlay.classList.toggle('active');
        });
        closesidebar.addEventListener("click", function () {
          activesidebar.classList.remove('active');
          panelOverlay.classList.remove('active');
        });
        panelOverlay.addEventListener("click", function () {
          activesidebar.classList.remove('active');
          panelOverlay.classList.remove('active');
        });
      }
    }
  };
  slidebarBlog.init();

  const category = {
    init: function () {
      this.openMenu()
      this.openReady('#category-open-ready')
      this.autoClose('#category-open-ready')
      this.openMobileCategory('#category-mobile-open', '#category-mobile')
      this.openMobileSubCategory('#category-mobile')
    },
    openMobileSubCategory: function(target) {
      const mainMenu = document.querySelector(target)
      if (mainMenu) {
        const arrowSub = mainMenu.querySelectorAll('.category-item .item-arrow')
        arrowSub.forEach((item, index) => item.addEventListener('click', () => {
          item.parentNode.classList.toggle('active')
        }))
      }
    },
    openMenu: function () {
      const main = document.querySelector('#category-menu')
      if (main) {
        const menuLevel = main.querySelectorAll('.menu-level')
  
        menuLevel.forEach((item, index) => item.addEventListener('click', () => {
          item.classList.toggle('active')
  
          const menuChild = item.querySelector('.menu-item-child')
          if (menuChild) {
            menuChild.classList.toggle('active')
          }
        }))
      }
    },
    openMobileCategory: function(btn, target) {
      const btnOpen = document.querySelector(btn)
      const main = document.querySelector(target)
      if (btnOpen && main) {
        btnOpen.addEventListener('click', () => {
          btnOpen.classList.toggle('active')
          main.classList.toggle('active')
        })
      }
    },
    openReady: function(target) {
      const main = document.querySelector(target)
      if (main) {
        if (window.innerWidth > 1200) {
          const btn = document.querySelector('#department-button')
          btn.classList.add('active')
        }
      }
    },
    autoClose: function(target) {
      const main = document.querySelector(target)
      if (main) {
        const btn = document.querySelector('#department-button')
        if (btn) {
          window.addEventListener('resize', () => {
            if (window.innerWidth <= 1200) {
              btn.classList.remove('active')
            } else {
              btn.classList.add('active')
            }
          })
        }
      }
    }
  }
  category.init()

  const tab_content = {
    init:function(){
      this.active();
      this.order();
    },
    active:function(){
      $(document).ready(function(){
	
        $('ul.content__tabs li').click(function(){
          var tab_id = $(this).attr('data-tab');
          console.log(tab_id);
      
          $('ul.content__tabs li').removeClass('current');
          $('.content__inner').removeClass('current');
      
          $(this).addClass('current');
          $("#"+tab_id).addClass('current');
        })
      
      })
    },

    order:function(){
      $(document).ready(function(){
	
        $('ul.order__tab li').click(function(){
          var tab_id = $(this).attr('data-tab');
          console.log(tab_id);
      
          $('ul.order__tab li').removeClass('current');
          $('.order__tab-content').removeClass('current');
      
          $(this).addClass('current');
          $("#"+tab_id).addClass('current');
        })
      
      })
    }
  }
  tab_content.init();
  const eventClick = {
    init: function() {
      this.toggleEvent('#department-button')
    },
    toggleEvent: function(target) {
      const btn = document.querySelector(target)
      if (btn) {
        btn.addEventListener('click', () => {
          btn.classList.toggle('active')
        })
      }
    }
  }
  eventClick.init()
  
  const imageZoom = {
    init: function () {
      this.setupImageZoom('.preview-image-js')
    },
    setupImageZoom: function (target) {
      new Zooming().listen(target);
    },
  }
  imageZoom.init()

  const menu = {
    init: function() {
      this.openCloseMenu()
      this.openCloseSubMenu()
    },
    openCloseMenu: function() {
      const btnMenu = document.querySelector('#header-btn-nav')
      const mainMenu = document.querySelector('.nav-mobile')

      if (btnMenu && mainMenu) {
        const overlay = mainMenu.querySelector('.nav-overlay')
        const mainSubMenu = mainMenu.querySelectorAll('.nav-list-main .nav-list-item .nav-list-child')
        btnMenu.addEventListener('click', () => {
          mainMenu.classList.add('active')
        })
        overlay.addEventListener('click', () => {
          mainMenu.classList.remove('active')
          mainSubMenu.forEach(main => main.classList.remove('active'))
        })
      }
    },
    openCloseSubMenu: function() {
      const mainMenu = document.querySelector('.nav-mobile')
      if (mainMenu) {
        // Open Method
        const btnSubMenu = mainMenu.querySelectorAll('.nav-list-main .nav-list-item .nav-arrow')
        const mainSubMenu = mainMenu.querySelectorAll('.nav-list-main .nav-list-item .nav-list-child')
        if (btnSubMenu.length !== 0 && mainSubMenu.length !== 0) {
          btnSubMenu.forEach((item, index) => item.addEventListener('click', () => {
            mainSubMenu[index].classList.add('active')
          }))
        }

        // Close Method
        const closeSubMenu = mainMenu.querySelectorAll('.nav-title .nav-arrow-back')
        closeSubMenu.forEach((item, index) => item.addEventListener('click', () => {
          mainSubMenu.forEach(main => main.classList.remove('active'))
        }))
      }
    },
  }
  menu.init()

  const qualityControl = {
    init: function () {
      this.setupQuanlity('.js-qty-increase', '.js-qty-decrease', '.js-product-qty')
    },
    setupQuanlity: function(increase, decrease, quality) {
      let value = 1
      const max = 20
      const min = 1
      const increaseBtn = document.querySelectorAll(increase)
      const decreaseBtn = document.querySelectorAll(decrease)
      const qualityView = document.querySelectorAll(quality)
      if (increaseBtn && decreaseBtn && qualityView) {
        increaseBtn.forEach((item, index) => item.addEventListener('click', () => {
          if (value < max) {
            value++
            qualityView[index].innerHTML = value
          }
        }))

        decreaseBtn.forEach((item, index) => item.addEventListener('click', () => {
          if (value > min) {
            value--
            qualityView[index].innerHTML = value
          }
        }))
      }
    },
  }
  qualityControl.init()

  const optionsControl = {
    init: function() {
      this.setupOptions('.js-options-wrap', '.js-option-btn')
    },
    setupOptions: function(main, options) {
      const wrap = document.querySelector(main)
      if (wrap) {
        const optionsBtn = wrap.querySelectorAll(options)
        optionsBtn.forEach((item, index) => item.addEventListener('click', () => {
          optionsBtn.forEach(btn => btn.classList.remove('active'))
          item.classList.add('active')
        }))
      }
    }
  }
  optionsControl.init()

  const nDropdown = {
    init: function() {
      this.openDropdown('.n-dropdown')
      this.clickOut()
    },
    openDropdown: function(className) {
      const buttons = document.querySelectorAll(`${className} .n-dropdown-btn`)
      if (buttons.length !== 0) {
        buttons.forEach((item) => item.addEventListener('click', () => {
          const wrap = item.parentNode.querySelector('.n-dropdown-content')
          wrap.classList.toggle('active')
        }))
      }
    },
    clickOut: function() {
      window.onclick = function(event) {
        if (!event.target.matches('.n-dropdown-btn')) {
          const dropdowns = document.querySelectorAll('.n-dropdown-content')
          dropdowns.forEach((item) => {
            if (item.classList.contains('active')) {
              setTimeout(() => {
                item.classList.remove('active')
              }, 100)
            }
          })
        }
      }
    },
  }
  nDropdown.init()

  const quality ={
    init : function(){
      this.quality();
    },
    quality :function(){
      var minVal = 1, maxVal = 20; 
      $(".qty-increase").on('click', function(){
          var $parentElm = $(this).parents(".product__qty");
  
          var value = $parentElm.find(".number").val();
          if (value < maxVal) {
            value++;
          }
          $parentElm.find(".number").val(value);
      });
      // Decrease product quantity on cart page
      $(".qty-decrease").on('click', function(){
          var $parentElm = $(this).parents(".product__qty");
         
          var value = $parentElm.find(".number").val();
          if (value > 1) {
            value--;
          }
          $parentElm.find(".number").val(value);
        });
    }
  };
  quality.init();

  const optionsLogin = {
    init: function() {
      this.setupLogin('.user__tabs', 'li')
    },
    setupLogin: function(main, options) {
      const wrap = document.querySelector(main)
      if (wrap) {
        const optionsBtn = wrap.querySelectorAll(options)
        optionsBtn.forEach((item, index) => item.addEventListener('click', () => {
          optionsBtn.forEach(btn => btn.classList.remove('active'))
          item.classList.add('active')
        }))
      }
    }
  }
  optionsLogin.init()
}
