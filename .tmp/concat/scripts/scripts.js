/**
 * HOMER - Responsive Admin Theme
 * version 2.0
 *
 */

$(document).ready(function () {

    // Set minimal height of #wrapper to fit the window
    fixWrapperHeight();

    // Add special class to minimalize page elements when screen is less than 768px
    setBodySmall();

});

$(window).bind("load", function () {

    // Remove splash screen after load
    $('.splash').css('display', 'none')
});

$(window).bind("resize click", function () {

    // Add special class to minimalize page elements when screen is less than 768px
    setBodySmall();

    // Waint until metsiMenu, collapse and other effect finish and set wrapper height
    setTimeout(function () {
        fixWrapperHeight();
    }, 300);
});

function fixWrapperHeight() {

    // Get and set current height
    var headerH = 62;
    var navigationH = $("#navigation").height();
    var contentH = $(".content").height();

    // Set new height when contnet height is less then navigation
    if (contentH < navigationH) {
        $("#wrapper").css("min-height", navigationH + 'px');
    }

    // Set new height when contnet height is less then navigation and navigation is less then window
    if (contentH < navigationH && navigationH < $(window).height()) {
        $("#wrapper").css("min-height", $(window).height() - headerH  + 'px');
    }

    // Set new height when contnet is higher then navigation but less then window
    if (contentH > navigationH && contentH < $(window).height()) {
        $("#wrapper").css("min-height", $(window).height() - headerH + 'px');
    }
}


function setBodySmall() {
    if ($(this).width() < 769) {
        $('body').addClass('page-small');
    } else {
        $('body').removeClass('page-small');
        $('body').removeClass('show-sidebar');
    }
}
/**
 * HOMER - Responsive Admin Theme
 * version 2.0
 *
 */
(function () {
    angular.module('homer', [
        'ui.router',                // Angular flexible routing
        'ngSanitize',               // Angular-sanitize
        'ui.bootstrap',             // AngularJS native directives for Bootstrap
        'angular-flot',             // Flot chart
        'angular-peity',            // Peity (small) charts
        'cgNotify',                 // Angular notify
        'chart.js',                   // Angular ChartJS
        'ngAnimate',                // Angular animations
        'ui.map',                   // Ui Map for Google maps
        'ui.calendar',              // UI Calendar
        'summernote',               // Summernote plugin
        'ngGrid',                   // Angular ng Grid
        'ui.tree',                  // Angular ui Tree
        'bm.bsTour',                // Angular bootstrap tour
        'datatables',               // Angular datatables plugin
        'xeditable',                // Angular-xeditable
        'ui.select',                // AngularJS ui-select
        'ui.sortable',              // AngularJS ui-sortable
        'ui.footable',              // FooTable
        'angular-chartist',         // Chartist
        'gridshore.c3js.chart',     // C3 charts
        'datatables.buttons',       // Datatables Buttons
        'angular-ladda',            // Ladda - loading buttons
        'ui.codemirror'             // Ui Codemirror
    ])
})();


function configState($stateProvider, $urlRouterProvider, $compileProvider) {

    // Optimize load start with remove binding information inside the DOM element
    $compileProvider.debugInfoEnabled(true);

    // Set default state
    $urlRouterProvider.otherwise("/dashboard");
    $stateProvider

        // Landing page
        .state('landing', {
            url: "/landing_page",
            templateUrl: "views/landing_page.html",
            data: {
                pageTitle: 'Landing page',
                specialClass: 'landing-page'
            }
        })

        // Dashboard - Main page
        .state('dashboard', {
            url: "/dashboard",
            templateUrl: "views/dashboard.html",
            data: {
                pageTitle: 'Dashboard'
            }
        })

        // Analytics
        .state('analytics', {
            url: "/analytics",
            templateUrl: "views/analytics.html",
            data: {
                pageTitle: 'Analytics'
            }
        })

        // Widgets
        .state('widgets', {
            url: "/widgets",
            templateUrl: "views/widgets.html",
            data: {
                pageTitle: 'Widgets'
            }
        })

        // Widgets
        .state('options', {
            url: "/options",
            templateUrl: "views/options.html",
            data: {
                pageTitle: 'Options',
                pageDesc: 'Example small header for demo purpose.'
            }
        })

        // Interface
        .state('interface', {
            abstract: true,
            url: "/interface",
            templateUrl: "views/common/content.html",
            data: {
                pageTitle: 'Interface'
            }
        })
        .state('interface.buttons', {
            url: "/buttons",
            templateUrl: "views/interface/buttons.html",
            data: {
                pageTitle: 'Colors and Buttons',
                pageDesc: 'The basic color palette'
            }
        })
        .state('interface.typography', {
            url: "/typography",
            templateUrl: "views/interface/typography.html",
            data: {
                pageTitle: 'Typography',
                pageDesc: 'The basic elements of typography'
            }
        })
        .state('interface.components', {
            url: "/components",
            templateUrl: "views/interface/components.html",
            data: {
                pageTitle: 'Components',
                pageDesc: 'Tabs, according, collapse and other UI components'
            }
        })
        .state('interface.icons', {
            url: "/icons",
            templateUrl: "views/interface/icons.html",
            data: {
                pageTitle: 'Icons',
                pageDesc: 'Two great icon libraries. Pe-icon-7-stroke and Font Awesome'
            }
        })
        .state('interface.panels', {
            url: "/panels",
            templateUrl: "views/interface/panels.html",
            data: {
                pageTitle: 'Panels',
                pageDesc: 'Two great icon libraries. Pe-icon-7-stroke and Font Awesome'
            }
        })
        .state('interface.alerts', {
            url: "/alerts",
            templateUrl: "views/interface/alerts.html",
            data: {
                pageTitle: 'Alerts',
                pageDesc: 'Notification and custom alerts'
            }
        })
        .state('interface.modals', {
            url: "/modals",
            templateUrl: "views/interface/modals.html",
            data: {
                pageTitle: 'Modals',
                pageDesc: 'Modal window examples'
            }
        })
        .state('interface.loading_buttons', {
            url: "/loading_buttons",
            templateUrl: "views/interface/loading_buttons.html",
            data: {
                pageTitle: 'Ladda',
                pageDesc: 'Loading buttons'
            }
        })
        .state('interface.list', {
            url: "/list",
            templateUrl: "views/interface/list.html",
            data: {
                pageTitle: 'Nestable list',
                pageDesc: 'Nestable - Drag & drop hierarchical list.'
            }
        })

        .state('interface.tour', {
            url: "/tour",
            templateUrl: "views/interface/tour.html",
            data: {
                pageTitle: 'Tour',
                pageDesc: 'The easiest way to show people how to use your website.'
            }
        })

        .state('interface.draggable_panels', {
            url: "/draggable_panels",
            templateUrl: "views/interface/draggable_panels.html",
            data: {
                pageTitle: 'Draggable panels',
                pageDesc: 'Example page for draggable panels'
            }
        })

        .state('interface.code_editor', {
            url: "/code_editor",
            templateUrl: "views/interface/code_editor.html",
            data: {
                pageTitle: 'Code editor',
                pageDesc: 'Versatile text editor implemented in JavaScript for the browser.'
            }
        })

        // App views
        .state('app_views', {
            abstract: true,
            url: "/app_views",
            templateUrl: "views/common/content.html",
            data: {
                pageTitle: 'App Views'
            }
        })
        .state('app_views.timeline', {
            url: "/timeline",
            templateUrl: "views/app_views/timeline.html",
            data: {
                pageTitle: 'Timeline',
                pageDesc: 'Present your events in timeline style.'
            }
        })
        .state('app_views.contacts', {
            url: "/contacts",
            templateUrl: "views/app_views/contacts.html",
            data: {
                pageTitle: 'Contacts',
                pageDesc: 'Show users list in nice and color panels'
            }
        })
        .state('app_views.profile', {
            url: "/profile",
            templateUrl: "views/app_views/profile.html",
            data: {
                pageTitle: 'Profile',
                pageDesc: 'Show user data in clear profile design'
            }
        })
        .state('app_views.calendar', {
            url: "/calendar",
            templateUrl: "views/app_views/calendar.html",
            data: {
                pageTitle: 'Calendar',
                pageDesc: 'Full-sized, drag & drop event calendar.'
            }
        })
        .state('app_views.projects', {
            url: "/projects",
            templateUrl: "views/app_views/projects.html",
            data: {
                pageTitle: 'Projects',
                pageDesc: 'List of projects.'
            }
        })
        .state('app_views.project_detail', {
            url: "/project_detail",
            templateUrl: "views/app_views/project_detail.html",
            data: {
                pageTitle: 'Project detail',
                pageDesc: 'Special page for project detail.'
            }
        })
        .state('app_views.app_plans', {
            url: "/app_plans",
            templateUrl: "views/app_views/app_plans.html",
            data: {
                pageTitle: 'App plans',
                pageDesc: 'Present pricing option for your app'
            }
        })
        .state('app_views.social_board', {
            url: "/social_board",
            templateUrl: "views/app_views/social_board.html",
            data: {
                pageTitle: 'Social board',
                pageDesc: 'Message board for social interactions.'
            }
        })
        .state('app_views.blog', {
            url: "/blog",
            templateUrl: "views/app_views/blog.html",
            data: {
                pageTitle: 'Blog',
                pageDesc: 'Article board for blog page.'
            }
        })
        .state('blog_details', {
            url: "/blog_details",
            templateUrl: "views/app_views/blog_details.html",
            data: {
                pageTitle: 'Article',
                pageDesc: 'Article blog page.'
            }
        })
        .state('app_views.forum', {
            url: "/forum",
            templateUrl: "views/app_views/forum.html",
            data: {
                pageTitle: 'Forum',
                pageDesc: 'Topics board for forum page.'
            }
        })
        .state('app_views.forum_details', {
            url: "/forum_details",
            templateUrl: "views/app_views/forum_details.html",
            data: {
                pageTitle: 'Topic',
                pageDesc: 'Topic for forum page.'
            }
        })
        .state('app_views.gallery', {
            url: "/gallery",
            templateUrl: "views/app_views/gallery.html",
            data: {
                pageTitle: 'Galery',
                pageDesc: 'Touch-enabled, responsive and customizable image & video gallery.'
            }
        })

        .state('app_views.notes', {
            url: "/notes",
            templateUrl: "views/app_views/notes.html",
            data: {
                pageTitle: 'Notes',
                pageDesc: 'Build notebook functionality in your app'
            }
        })

        .state('app_views.mailbox', {
            url: "/mailbox",
            templateUrl: "views/app_views/mailbox.html",
            data: {
                pageTitle: 'Mailbox',
                pageDesc: 'Mailbox - Email list.'
            }
        })

        .state('app_views.faq', {
            url: "/faq",
            templateUrl: "views/app_views/faq.html",
            data: {
                pageTitle: 'FAQ',
                pageDesc: 'FAQ page - build faq/support page for your app'
            }
        })

        .state('app_views.email_compose', {
            url: "/email_compose",
            templateUrl: "views/app_views/email_compose.html",
            data: {
                pageTitle: 'Mailbox',
                pageDesc: 'Mailbox - Email compose.'
            }
        })

        .state('app_views.email_view', {
            url: "/email_view",
            templateUrl: "views/app_views/email_view.html",
            data: {
                pageTitle: 'Mailbox',
                pageDesc: 'Mailbox - Email view.'
            }
        })

        .state('app_views.invoice', {
            url: "/invoice",
            templateUrl: "views/app_views/invoice.html",
            data: {
                pageTitle: 'Invoice',
                pageDesc: 'Clean invoice template.'
            }
        })

        .state('app_views.file_manager', {
            url: "/mailbox",
            templateUrl: "views/app_views/file_manager.html",
            data: {
                pageTitle: 'File manager',
                pageDesc: 'Show you files in a nica manager design.'
            }
        })

        .state('app_views.search', {
            url: "/search",
            templateUrl: "views/app_views/search.html",
            data: {
                pageTitle: 'Search view',
                pageDesc: 'Use search view to show search functionality.'
            }
        })

        .state('app_views.chat_view', {
            url: "/chat_view",
            templateUrl: "views/app_views/chat_view.html",
            data: {
                pageTitle: 'Chat view',
                pageDesc: 'Create a chat room in your app'
            }
        })

        // Transitions
        .state('transitions', {
            abstract: true,
            url: "/transitions",
            templateUrl: "views/common/content_blank.html",
            data: {
                pageTitle: 'Transitions'
            }
        })
        .state('transitions.overview', {
            url: "/overview",
            templateUrl: "views/transitions/overview.html",
            data: {
                pageTitle: 'Overview of transitions Effect'
            }
        })
        .state('transitions.transition_one', {
            url: "/transition_one",
            templateUrl: "views/transitions/transition_one.html"
        })
        .state('transitions.transition_two', {
            url: "/transition_two",
            templateUrl: "views/transitions/transition_two.html"
        })
        .state('transitions.transition_three', {
            url: "/transition_three",
            templateUrl: "views/transitions/transition_three.html"
        })
        .state('transitions.transition_four', {
            url: "/transition_four",
            templateUrl: "views/transitions/transition_four.html"
        })
        .state('transitions.transition_five', {
            url: "/transition_five",
            templateUrl: "views/transitions/transition_five.html"
        })

        // Charts
        .state('charts', {
            abstract: true,
            url: "/charts",
            templateUrl: "views/common/content.html",
            data: {
                pageTitle: 'Charts'
            }
        })
        .state('charts.flot', {
            url: "/flot",
            templateUrl: "views/charts/flot.html",
            data: {
                pageTitle: 'Flot chart',
                pageDesc: 'Flot is a pure JavaScript plotting library for jQuery, with a focus on simple usage, attractive looks and interactive features.'
            }
        })
        .state('charts.chartjs', {
            url: "/chartjs",
            templateUrl: "views/charts/chartjs.html",
            data: {
                pageTitle: 'ChartJS',
                pageDesc: 'Simple HTML5 Charts using the canvas element'
            }
        })
        .state('charts.inline', {
            url: "/inline",
            templateUrl: "views/charts/inline.html",
            data: {
                pageTitle: 'Inline charts',
                pageDesc: 'Small inline charts directly in the browser using data supplied in the controller.'
            }
        })

        .state('charts.chartist', {
            url: "/chartist",
            templateUrl: "views/charts/chartist.html",
            data: {
                pageTitle: 'Chartist',
                pageDesc: 'Chartist.js is a simple responsive charting library built with SVG.'
            }
        })
        .state('charts.c3Charts', {
            url: "/c3Charts",
            templateUrl: "views/charts/c3Charts.html",
            data: {
                pageTitle: 'C3 Charts',
                pageDesc: 'D3-based reusable chart library'
            }
        })

        // Common views
        .state('common', {
            abstract: true,
            url: "/common",
            templateUrl: "views/common/content_empty.html",
            data: {
                pageTitle: 'Common'
            }
        })
        .state('common.login', {
            url: "/login",
            templateUrl: "views/common_app/login.html",
            data: {
                pageTitle: 'Login page',
                specialClass: 'blank'
            }
        })
        .state('common.register', {
            url: "/register",
            templateUrl: "views/common_app/register.html",
            data: {
                pageTitle: 'Register page',
                specialClass: 'blank'
            }
        })
        .state('common.error_one', {
            url: "/error_one",
            templateUrl: "views/common_app/error_one.html",
            data: {
                pageTitle: 'Error 404',
                specialClass: 'blank'
            }
        })
        .state('common.error_two', {
            url: "/error_two",
            templateUrl: "views/common_app/error_two.html",
            data: {
                pageTitle: 'Error 505',
                specialClass: 'blank'
            }
        })
        .state('common.lock', {
            url: "/lock",
            templateUrl: "views/common_app/lock.html",
            data: {
                pageTitle: 'Lock page',
                specialClass: 'blank'
            }
        })
        .state('common.password_recovery', {
            url: "/password_recovery",
            templateUrl: "views/common_app/password_recovery.html",
            data: {
                pageTitle: 'Password recovery',
                specialClass: 'blank'
            }
        })
        // Tables views
        .state('tables', {
            abstract: true,
            url: "/tables",
            templateUrl: "views/common/content.html",
            data: {
                pageTitle: 'Tables'
            }
        })
        .state('tables.tables_design', {
            url: "/tables_design",
            templateUrl: "views/tables/tables_design.html",
            data: {
                pageTitle: 'Tables design',
                pageDesc: 'Examples of various designs of tables.'
            }
        })
        .state('tables.ng_grid', {
            url: "/ng_grid",
            templateUrl: "views/tables/ng_grid.html",
            data: {
                pageTitle: 'ngGgrid',
                pageDesc: 'Examples of various designs of tables.'
            }
        })
        .state('tables.datatables', {
            url: "/datatables",
            templateUrl: "views/tables/datatables.html",
            data: {
                pageTitle: 'DataTables',
                pageDesc: 'Advanced interaction controls to any HTML table'
            }
        })
        .state('tables.footable', {
            url: "/footable",
            templateUrl: "views/tables/footable.html",
            data: {
                pageTitle: 'FooTable',
                pageDesc: 'Advanced interaction controls to any HTML table'
            }
        })

        // Forms views
        .state('forms', {
            abstract: true,
            url: "/forms",
            templateUrl: "views/common/content_small.html",
            data: {
                pageTitle: 'Forms'
            }
        })
        .state('forms.forms_elements', {
            url: "/forms_elements",
            templateUrl: "views/forms/forms_elements.html",
            data: {
                pageTitle: 'Forms elements',
                pageDesc: 'Examples of various form controls.'
            }
        })
        .state('forms.forms_extended', {
            url: "/forms_extended",
            templateUrl: "views/forms/forms_extended.html",
            data: {
                pageTitle: 'Forms extended',
                pageDesc: 'Examples of various extended form controls.'
            }
        })
        .state('forms.text_editor', {
            url: "/text_editor",
            templateUrl: "views/forms/text_editor.html",
            data: {
                pageTitle: 'Text editor',
                pageDesc: 'Examples of text editor.'
            }
        })
        .state('forms.wizard', {
            url: "/wizard",
            templateUrl: "views/forms/wizard.html",
            data: {
                pageTitle: 'Wizard',
                pageDesc: 'Build a form with wizard functionality.'
            }
        })

        .state('forms.validation', {
            url: "/validation",
            templateUrl: "views/forms/validation.html",
            data: {
                pageTitle: 'Validation',
                pageDesc: 'Build a form with validation functionality.'
            }
        })

        // Grid system
        .state('grid_system', {
            url: "/grid_system",
            templateUrl: "views/grid_system.html",
            data: {
                pageTitle: 'Grid system'
            }
        })
}

angular
    .module('homer')
    .config(configState)
    .run(function($rootScope, $state, editableOptions) {
        $rootScope.$state = $state;
        editableOptions.theme = 'bs3';
    });
/**
 *
 * propsFilter
 *
 */

angular
    .module('homer')
    .filter('propsFilter', propsFilter)

function propsFilter(){
    return function(items, props) {
        var out = [];

        if (angular.isArray(items)) {
            items.forEach(function(item) {
                var itemMatches = false;

                var keys = Object.keys(props);
                for (var i = 0; i < keys.length; i++) {
                    var prop = keys[i];
                    var text = props[prop].toLowerCase();
                    if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
                        itemMatches = true;
                        break;
                    }
                }

                if (itemMatches) {
                    out.push(item);
                }
            });
        } else {
            // Let the output be the input untouched
            out = items;
        }

        return out;
    }
}
/**
 * HOMER - Responsive Admin Theme
 * Copyright 2015 Webapplayers.com
 *
 */

angular
    .module('homer')
    .directive('pageTitle', pageTitle)
    .directive('sideNavigation', sideNavigation)
    .directive('minimalizaMenu', minimalizaMenu)
    .directive('sparkline', sparkline)
    .directive('icheck', icheck)
    .directive('panelTools', panelTools)
    .directive('panelToolsFullscreen', panelToolsFullscreen)
    .directive('smallHeader', smallHeader)
    .directive('animatePanel', animatePanel)
    .directive('landingScrollspy', landingScrollspy)
    .directive('clockPicker', clockPicker)
    .directive('dateTimePicker', dateTimePicker)

/**
 * pageTitle - Directive for set Page title - mata title
 */
function pageTitle($rootScope, $timeout) {
    return {
        link: function(scope, element) {
            var listener = function(event, toState, toParams, fromState, fromParams) {
                // Default title
                var title = 'HOMER | AngularJS Responsive WebApp';
                // Create your own title pattern
                if (toState.data && toState.data.pageTitle) title = 'HOMER | ' + toState.data.pageTitle;
                $timeout(function() {
                    element.text(title);
                });
            };
            $rootScope.$on('$stateChangeStart', listener);
        }
    }
};

/**
 * sideNavigation - Directive for run metsiMenu on sidebar navigation
 */
function sideNavigation($timeout) {
    return {
        restrict: 'A',
        link: function(scope, element) {
            // Call the metsiMenu plugin and plug it to sidebar navigation
            element.metisMenu();

            // Colapse menu in mobile mode after click on element
            var menuElement = $('#side-menu a:not([href$="\\#"])');
            menuElement.click(function(){

                if ($(window).width() < 769) {
                    $("body").toggleClass("show-sidebar");
                }
            });

            // Check if sidebar scroll is enabled
            if($('body').hasClass('sidebar-scroll')) {
                var navigation = element.parent();
                navigation.slimScroll({
                    height: '100%',
                    opacity: 0.3,
                    size : 0,
                    wheelStep : 5,
                    allowPageScroll : true,
                });
            }


        }
    };
};

/**
 * minimalizaSidebar - Directive for minimalize sidebar
 */
function minimalizaMenu($rootScope) {
    return {
        restrict: 'EA',
        template: '<div class="header-link hide-menu" ng-click="minimalize()"><i class="fa fa-bars"></i></div>',
        controller: function ($scope, $element) {

            $scope.minimalize = function () {
            if ($(window).width() < 769) {
                    $("body").toggleClass("show-sidebar");
                } else {
                    $("body").toggleClass("hide-sidebar");
                }
            }
        }
    };
};


/**
 * sparkline - Directive for Sparkline chart
 */
function sparkline() {
    return {
        restrict: 'A',
        scope: {
            sparkData: '=',
            sparkOptions: '=',
        },
        link: function (scope, element, attrs) {
            scope.$watch(scope.sparkData, function () {
                render();
            });
            scope.$watch(scope.sparkOptions, function(){
                render();
            });
            var render = function () {
                $(element).sparkline(scope.sparkData, scope.sparkOptions);
            };
        }
    }
};

/**
 * icheck - Directive for custom checkbox icheck
 */
function icheck($timeout) {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function($scope, element, $attrs, ngModel) {
            return $timeout(function() {
                var value;
                value = $attrs['value'];

                $scope.$watch($attrs['ngModel'], function(newValue){
                    $(element).iCheck('update');
                })

                return $(element).iCheck({
                    checkboxClass: 'icheckbox_square-green',
                    radioClass: 'iradio_square-green'

                }).on('ifChanged', function(event) {
                        if ($(element).attr('type') === 'checkbox' && $attrs['ngModel']) {
                            $scope.$apply(function() {
                                return ngModel.$setViewValue(event.target.checked);
                            });
                        }
                        if ($(element).attr('type') === 'radio' && $attrs['ngModel']) {
                            return $scope.$apply(function() {
                                return ngModel.$setViewValue(value);
                            });
                        }
                    });
            });
        }
    };
}


/**
 * panelTools - Directive for panel tools elements in right corner of panel
 */
function panelTools($timeout) {
    return {
        restrict: 'A',
        scope: true,
        templateUrl: 'views/common/panel_tools.html',
        controller: function ($scope, $element) {
            // Function for collapse ibox
            $scope.showhide = function () {
                var hpanel = $element.closest('div.hpanel');
                var icon = $element.find('i:first');
                var body = hpanel.find('div.panel-body');
                var footer = hpanel.find('div.panel-footer');
                body.slideToggle(300);
                footer.slideToggle(200);
                // Toggle icon from up to down
                icon.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
                hpanel.toggleClass('').toggleClass('panel-collapse');
                $timeout(function () {
                    hpanel.resize();
                    hpanel.find('[id^=map-]').resize();
                }, 50);
            },

            // Function for close ibox
            $scope.closebox = function () {
                var hpanel = $element.closest('div.hpanel');
                hpanel.remove();
            }

        }
    };
};

/**
 * panelToolsFullscreen - Directive for panel tools elements in right corner of panel with fullscreen option
 */
function panelToolsFullscreen($timeout) {
    return {
        restrict: 'A',
        scope: true,
        templateUrl: 'views/common/panel_tools_fullscreen.html',
        controller: function ($scope, $element) {
            // Function for collapse ibox
            $scope.showhide = function () {
                var hpanel = $element.closest('div.hpanel');
                var icon = $element.find('i:first');
                var body = hpanel.find('div.panel-body');
                var footer = hpanel.find('div.panel-footer');
                body.slideToggle(300);
                footer.slideToggle(200);
                // Toggle icon from up to down
                icon.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
                hpanel.toggleClass('').toggleClass('panel-collapse');
                $timeout(function () {
                    hpanel.resize();
                    hpanel.find('[id^=map-]').resize();
                }, 50);
            };

            // Function for close ibox
            $scope.closebox = function () {
                var hpanel = $element.closest('div.hpanel');
                hpanel.remove();
                if($('body').hasClass('fullscreen-panel-mode')) { $('body').removeClass('fullscreen-panel-mode');}
            };

            // Function for fullscreen
            $scope.fullscreen = function () {
                var hpanel = $element.closest('div.hpanel');
                var icon = $element.find('i:first');
                $('body').toggleClass('fullscreen-panel-mode');
                icon.toggleClass('fa-expand').toggleClass('fa-compress');
                hpanel.toggleClass('fullscreen');
                setTimeout(function() {
                    $(window).trigger('resize');
                }, 100);
            }

        }
    };
};

/**
 * smallHeader - Directive for page title panel
 */
function smallHeader() {
    return {
        restrict: 'A',
        scope:true,
        controller: function ($scope, $element) {
            $scope.small = function() {
                var icon = $element.find('i:first');
                var breadcrumb  = $element.find('#hbreadcrumb');
                $element.toggleClass('small-header');
                breadcrumb.toggleClass('m-t-lg');
                icon.toggleClass('fa-arrow-up').toggleClass('fa-arrow-down');
            }
        }
    }
}

function animatePanel($timeout,$state) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {

            //Set defaul values for start animation and delay
            var startAnimation = 0;
            var delay = 0.06;   // secunds
            var start = Math.abs(delay) + startAnimation;

            // Store current state where directive was start
            var currentState = $state.current.name;

            // Set default values for attrs
            if(!attrs.effect) { attrs.effect = 'zoomIn'};
            if(attrs.delay) { delay = attrs.delay / 10 } else { delay = 0.06 };
            if(!attrs.child) { attrs.child = '.row > div'} else {attrs.child = "." + attrs.child};

            // Get all visible element and set opactiy to 0
            var panel = element.find(attrs.child);
            panel.addClass('opacity-0');

            // Count render time
            var renderTime = panel.length * delay * 1000 + 700;

            // Wrap to $timeout to execute after ng-repeat
            $timeout(function(){

                // Get all elements and add effect class
                panel = element.find(attrs.child);
                panel.addClass('stagger').addClass('animated-panel').addClass(attrs.effect);

                var panelsCount = panel.length + 10;
                var animateTime = (panelsCount * delay * 10000) / 10;

                // Add delay for each child elements
                panel.each(function (i, elm) {
                    start += delay;
                    var rounded = Math.round(start * 10) / 10;
                    $(elm).css('animation-delay', rounded + 's');
                    // Remove opacity 0 after finish
                    $(elm).removeClass('opacity-0');
                });

                // Clear animation after finish
                $timeout(function(){
                    $('.stagger').css('animation', '');
                    $('.stagger').removeClass(attrs.effect).removeClass('animated-panel').removeClass('stagger');
                    panel.resize();
                }, animateTime)

            });



        }
    }
}

function landingScrollspy(){
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.scrollspy({
                target: '.navbar-fixed-top',
                offset: 80
            });
        }
    }
}

/**
 * clockPicker - Directive for clock picker plugin
 */
function clockPicker() {
    return {
        restrict: 'A',
        link: function(scope, element) {
            element.clockpicker();
        }
    };
};

function dateTimePicker(){
    return {
        require: '?ngModel',
        restrict: 'AE',
        scope: {
            pick12HourFormat: '@',
            language: '@',
            useCurrent: '@',
            location: '@'
        },
        link: function (scope, elem, attrs) {
            elem.datetimepicker({
                pick12HourFormat: scope.pick12HourFormat,
                language: scope.language,
                useCurrent: scope.useCurrent
            })

            //Local event change
            elem.on('blur', function () {

                // For test
                //console.info('this', this);
                //console.info('scope', scope);
                //console.info('attrs', attrs);


                /*// returns moments.js format object
                 scope.dateTime = new Date(elem.data("DateTimePicker").getDate().format());
                 // Global change propagation
                 $rootScope.$broadcast("emit:dateTimePicker", {
                 location: scope.location,
                 action: 'changed',
                 dateTime: scope.dateTime,
                 example: scope.useCurrent
                 });
                 scope.$apply();*/
            })
        }
    };
}



/**
 *
 * appCtrl
 *
 */

angular
    .module('homer')
    .controller('appCtrl', appCtrl);

function appCtrl($http, $scope, $timeout) {

    // For iCheck purpose only
    $scope.checkOne = true;

    /**
     * Sparkline bar chart data and options used in under Profile image on left navigation panel
     */

    $scope.barProfileData = [5, 6, 7, 2, 0, 4, 2, 4, 5, 7, 2, 4, 12, 11, 4];
    $scope.barProfileOptions = {
        type: 'bar',
        barWidth: 7,
        height: '30px',
        barColor: '#62cb31',
        negBarColor: '#53ac2a'
    };
    $scope.chartIncomeData = [
        {
            label: "line",
            data: [ [1, 10], [2, 26], [3, 16], [4, 36], [5, 32], [6, 51] ]
        }
    ];

    $scope.chartIncomeOptions = {
        series: {
            lines: {
                show: true,
                lineWidth: 0,
                fill: true,
                fillColor: "#64cc34"

            }
        },
        colors: ["#62cb31"],
        grid: {
            show: false
        },
        legend: {
            show: false
        }
    };

    /**
     * Tooltips and Popover - used for tooltips in components view
     */
    $scope.dynamicTooltip = 'Hello, World!';
    $scope.htmlTooltip = "I\'ve been made <b>bold</b>!";
    $scope.dynamicTooltipText  = 'Dynamic';
    $scope.dynamicPopover = 'Hello, World!';
    $scope.dynamicPopoverTitle = 'Title';

    /**
     * Pagination - used for pagination in components view
     */
    $scope.totalItems = 64;
    $scope.currentPage = 4;

    $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
    };

    /**
     * Typehead - used for typehead in components view
     */
    $scope.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
    // Any function returning a promise object can be used to load values asynchronously
    $scope.getLocation = function(val) {
        return $http.get('http://maps.googleapis.com/maps/api/geocode/json', {
            params: {
                address: val,
                sensor: false
            }
        }).then(function(response){
                return response.data.results.map(function(item){
                    return item.formatted_address;
                });
            });
    };

    /**
     * Rating - used for rating in components view
     */
    $scope.rate = 7;
    $scope.max = 10;

    $scope.hoveringOver = function(value) {
        $scope.overStar = value;
        $scope.percent = 100 * (value / this.max);
    };

    /**
     * groups - used for Collapse panels in Tabs and Panels view
     */
    $scope.groups = [
        {
            title: 'Dynamic Group Header - 1',
            content: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. '
        },
        {
            title: 'Dynamic Group Header - 2',
            content: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. '
        }
    ];

    $scope.oneAtATime = true;

    /**
     * Some Flot chart data and options used in Dashboard
     */

    var data1 = [ [0, 55], [1, 48], [2, 40], [3, 36], [4, 40], [5, 60], [6, 50], [7, 51] ];
    var data2 = [ [0, 56], [1, 49], [2, 41], [3, 38], [4, 46], [5, 67], [6, 57], [7, 59] ];

    $scope.chartUsersData = [data1, data2];
    $scope.chartUsersOptions = {
        series: {
            splines: {
                show: true,
                tension: 0.4,
                lineWidth: 1,
                fill: 0.4
            },
        },
        grid: {
            tickColor: "#f0f0f0",
            borderWidth: 1,
            borderColor: 'f0f0f0',
            color: '#6a6c6f'
        },
        colors: [ "#62cb31", "#efefef"],
    };


    /**
     * Some Pie chart data and options
     */

    $scope.PieChart = {
        data: [1, 5],
        options: {
            fill: ["#62cb31", "#edf0f5"]
        }
    };

    $scope.PieChart2 = {
        data: [226, 360],
        options: {
            fill: ["#62cb31", "#edf0f5"]
        }
    };
    $scope.PieChart3 = {
        data: [0.52, 1.561],
        options: {
            fill: ["#62cb31", "#edf0f5"]
        }
    };
    $scope.PieChart4 = {
        data: [1, 4],
        options: {
            fill: ["#62cb31", "#edf0f5"]
        }
    };
    $scope.PieChart5 = {
        data: [226, 134],
        options: {
            fill: ["#62cb31", "#edf0f5"]
        }
    };
    $scope.PieChart6 = {
        data: [0.52, 1.041],
        options: {
            fill: ["#62cb31", "#edf0f5"]
        }
    };

    $scope.BarChart = {
        data: [5, 3, 9, 6, 5, 9, 7, 3, 5, 2],
        options: {
            fill: ["#dbdbdb", "#62cb31"],
        }
    };

    $scope.LineChart = {
        data: [5, 9, 7, 3, 5, 2, 5, 3, 9, 6, 5, 9, 4, 7, 3, 2, 9, 8, 7, 4, 5, 1, 2, 9, 5, 4, 7],
        options: {
            fill: '#62cb31',
            stroke: '#62cb31',
            width: 64
        }
    };


    $scope.stanimation = 'bounceIn';
    $scope.runIt = true;
    $scope.runAnimation = function(){

        $scope.runIt = false;
        $timeout(function(){
            $scope.runIt = true;
        }, 100)

    };

}

/**
 * HOMER - Responsive Admin Theme
 * Copyright 2015 Webapplayers.com
 *
 * Sweet Alert Directive
 * Official plugin - http://tristanedwards.me/sweetalert
 * Angular implementation inspiring by https://github.com/oitozero/ngSweetAlert
 */


function sweetAlert($timeout, $window) {
    var swal = $window.swal;
    return {
        swal: function (arg1, arg2, arg3) {
            $timeout(function () {
                if (typeof(arg2) === 'function') {
                    swal(arg1, function (isConfirm) {
                        $timeout(function () {
                            arg2(isConfirm);
                        });
                    }, arg3);
                } else {
                    swal(arg1, arg2, arg3);
                }
            }, 200);
        },
        success: function (title, message) {
            $timeout(function () {
                swal(title, message, 'success');
            }, 200);
        },
        error: function (title, message) {
            $timeout(function () {
                swal(title, message, 'error');
            }, 200);
        },
        warning: function (title, message) {
            $timeout(function () {
                swal(title, message, 'warning');
            }, 200);
        },
        info: function (title, message) {
            $timeout(function () {
                swal(title, message, 'info');
            }, 200);
        }

    };
};

/**
 * Pass function into module
 */
angular
    .module('homer')
    .factory('sweetAlert', sweetAlert)

/**
 *
 * alertsCtrl
 *
 */

angular
    .module('homer')
    .controller('alertsCtrl', alertsCtrl)

function alertsCtrl($scope, sweetAlert, notify) {

    $scope.demo1 = function () {
        sweetAlert.swal({
            title: "Welcome in Alerts",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        });
    }

    $scope.demo2 = function () {
        sweetAlert.swal({
            title: "Good job!",
            text: "You clicked the button!",
            type: "success"
        });
    }

    $scope.demo3 = function () {
        sweetAlert.swal({
                title: "Are you sure?",
                text: "Your will not be able to recover this imaginary file!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, delete it!"
            },
            function () {
                sweetAlert.swal("Booyah!");
            });
    }

    $scope.demo4 = function () {
        sweetAlert.swal({
                title: "Are you sure?",
                text: "Your will not be able to recover this imaginary file!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, delete it!",
                cancelButtonText: "No, cancel plx!",
                closeOnConfirm: false,
                closeOnCancel: false },
            function (isConfirm) {
                if (isConfirm) {
                    sweetAlert.swal("Deleted!", "Your imaginary file has been deleted.", "success");
                } else {
                    sweetAlert.swal("Cancelled", "Your imaginary file is safe :)", "error");
                }
            });
    }

    $scope.msg = 'Hello! This is a sample message!';
    $scope.demo = function () {
        notify({
            message: $scope.msg,
            classes: $scope.classes,
            templateUrl: $scope.template,
            position: 'center'
        });
    };
    $scope.closeAll = function () {
        notify.closeAll();
    };

    $scope.homerTemplate = 'views/common/notify.html';
    $scope.homerDemo1 = function(){
        notify({ position: 'center', message: 'Info - This is a Homer info notification', classes: 'alert-info', templateUrl: $scope.homerTemplate});
    }
    $scope.homerDemo2 = function(){
        notify({ position: 'center', message: 'Success - This is a Homer success notification', classes: 'alert-success', templateUrl: $scope.homerTemplate});
    }
    $scope.homerDemo3 = function(){
        notify({ position: 'center', message: 'Warning - This is a Homer warning notification', classes: 'alert-warning', templateUrl: $scope.homerTemplate});
    }
    $scope.homerDemo4 = function(){
        notify({ position: 'center', message: 'Danger - This is a Homer danger notification', classes: 'alert-danger', templateUrl: $scope.homerTemplate});
    }

}
/**
 *
 * modalCtrl
 *
 */

angular
    .module('homer')
    .controller('modalCtrl', modalCtrl)

function modalCtrl($scope, $uibModal) {

    $scope.open = function () {

        var modalInstance = $uibModal.open({
            templateUrl: 'views/modal/modal_example.html',
            controller: ModalInstanceCtrl,
        });
    };

    $scope.open1 = function () {
        var modalInstance = $uibModal.open({
            templateUrl: 'views/modal/modal_example1.html',
            controller: ModalInstanceCtrl
        });
    };

    $scope.open3 = function (size) {
        var modalInstance = $uibModal.open({
            templateUrl: 'views/modal/modal_example3.html',
            size: size,
            controller: ModalInstanceCtrl,
        });
    };

    $scope.open2 = function () {
        var modalInstance = $uibModal.open({
            templateUrl: 'views/modal/modal_example2.html',
            controller: ModalInstanceCtrl,
            windowClass: "hmodal-info"
        });
    };

    $scope.open4 = function () {
        var modalInstance = $uibModal.open({
            templateUrl: 'views/modal/modal_example2.html',
            controller: ModalInstanceCtrl,
            windowClass: "hmodal-warning"
        });
    };

    $scope.open5 = function () {
        var modalInstance = $uibModal.open({
            templateUrl: 'views/modal/modal_example2.html',
            controller: ModalInstanceCtrl,
            windowClass: "hmodal-success"
        });
    };

    $scope.open6 = function () {
        var modalInstance = $uibModal.open({
            templateUrl: 'views/modal/modal_example2.html',
            controller: ModalInstanceCtrl,
            windowClass: "hmodal-danger"
        });
    };
};

function ModalInstanceCtrl ($scope, $uibModalInstance) {

    $scope.ok = function () {
        $uibModalInstance.close();
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
};
/**
 *
 * charts_flotCtrl
 *
 */

angular
    .module('homer')
    .controller('charts_flotCtrl', charts_flotCtrl)

function charts_flotCtrl($scope) {

    /**
     * Bar Chart Options
     */
    $scope.flotBarOptions = {
        series: {
            bars: {
                show: true,
                barWidth: 0.8,
                fill: true,
                fillColor: {
                    colors: [ { opacity: 0.6 }, { opacity: 0.6 } ]
                },
                lineWidth: 1
            }
        },
        xaxis: {
            tickDecimals: 0
        },
        colors: ["#62cb31"],
        grid: {
            color: "#e4e5e7",
            hoverable: true,
            clickable: true,
            tickColor: "#D4D4D4",
            borderWidth: 0,
            borderColor: 'e4e5e7',
        },
        legend: {
            show: false
        },
        tooltip: true,
        tooltipOpts: {
            content: "x: %x, y: %y"
        }
    };

    /**
     * Bar Chart Options for Analytics
     */
    $scope.flotBarOptionsDas = {
        series: {
            bars: {
                show: true,
                barWidth: 0.8,
                fill: true,
                fillColor: {
                    colors: [ { opacity: 1 }, { opacity: 1 } ]
                },
                lineWidth: 1
            }
        },
        xaxis: {
            tickDecimals: 0
        },
        colors: ["#62cb31"],
        grid: {
            show: false
        },
        legend: {
            show: false
        }
    };

    /**
     * Bar Chart Options for Widget
     */
    $scope.flotBarOptionsWid = {
        series: {
            bars: {
                show: true,
                barWidth: 0.8,
                fill: true,
                fillColor: {
                    colors: [ { opacity: 1 }, { opacity: 1 } ]
                },
                lineWidth: 1
            }
        },
        xaxis: {
            tickDecimals: 0
        },
        colors: ["#3498db"],
        grid: {
            show: false
        },
        legend: {
            show: false
        }
    };

    /**
     * Bar Chart data
     */
    $scope.flotChartData = [
        {
            label: "bar",
            data: [ [1, 12], [2, 14], [3, 18], [4, 24], [5, 32], [6, 22] ]
        }
    ];

    /**
     * Line Chart Data
     */
    $scope.flotLineAreaData = [
        {
            label: "line",
            data: [ [1, 34], [2, 22], [3, 19], [4, 12], [5, 32], [6, 54], [7, 23], [8, 57], [9, 12], [10, 24], [11, 44], [12, 64], [13, 21] ]
        }
    ]

    var data1 = [ [0, 26], [1, 24], [2, 29], [3, 26], [4, 33], [5, 26], [6, 36], [7, 28] ];

    $scope.chartUsersData = [data1];
    $scope.chartUsersOptions = {
        series: {
            splines: {
                show: true,
                tension: 0.4,
                lineWidth: 1,
                fill: 0.5
            },
        },
        grid: {
            tickColor: "#e4e5e7",
            borderWidth: 1,
            borderColor: '#e4e5e7',
            color: '#6a6c6f'
        },
        colors: [ "#62cb31", "#efefef"],
    };

    /**
     * Pie Chart Data
     */
    $scope.pieChartData = [
        { label: "Data 1", data: 16, color: "#84c465", },
        { label: "Data 2", data: 6, color: "#8dd76a", },
        { label: "Data 3", data: 22, color: "#a2c98f", },
        { label: "Data 4", data: 32, color: "#c7eeb4", }
    ];

    $scope.pieChartDataDas = [
        { label: "Data 1", data: 16, color: "#62cb31", },
        { label: "Data 2", data: 6, color: "#A4E585", },
        { label: "Data 3", data: 22, color: "#368410", },
        { label: "Data 4", data: 32, color: "#8DE563", }
    ];

    $scope.pieChartDataWid = [
        { label: "Data 1", data: 16, color: "#fad57c", },
        { label: "Data 2", data: 6, color: "#fde5ad", },
        { label: "Data 3", data: 22, color: "#fcc43c", },
        { label: "Data 4", data: 32, color: "#ffb606", }
    ];

    /**
     * Pie Chart Options
     */
    $scope.pieChartOptions = {
        series: {
            pie: {
                show: true
            }
        },
        grid: {
            hoverable: true
        },
        tooltip: true,
        tooltipOpts: {
            content: "%p.0%, %s", // show percentages, rounding to 2 decimal places
            shifts: {
                x: 20,
                y: 0
            },
            defaultTheme: false
        }
    };

    $scope.lineChartData = [
        {
            label: "line",
            data: [ [1, 24], [2, 15], [3, 29], [4, 34], [5, 30], [6, 40], [7, 23], [8, 27], [9, 40] ]
        }
    ];

    /**
     * Line Chart Options
     */
    $scope.lineChartOptions = {
        series: {
            lines: {
                show: true,
                lineWidth: 1,
                fill: true,
                fillColor: {
                    colors: [ { opacity: 0.5 }, { opacity: 0.5 }
                    ]
                }
            }
        },
        xaxis: {
            tickDecimals: 0
        },
        colors: ["#62cb31"],
        grid: {
            tickColor: "#e4e5e7",
            borderWidth: 1,
            borderColor: '#e4e5e7',
            color: '#6a6c6f'
        },
        legend: {
            show: false
        },
        tooltip: true,
        tooltipOpts: {
            content: "x: %x, y: %y"
        }
    };

    /**
     * Line Chart Options for Dashboard
     */
    $scope.lineChartOptionsDas = {
        series: {
            lines: {
                show: true,
                lineWidth: 1,
                fill: true,
                fillColor: {
                    colors: [ { opacity: 1 }, { opacity: 1}
                    ]
                }
            }
        },
        xaxis: {
            tickDecimals: 0
        },
        colors: ["#62cb31"],
        grid: {
            tickColor: "#e4e5e7",
            borderWidth: 1,
            borderColor: '#e4e5e7',
            color: '#6a6c6f'
        },
        legend: {
            show: false
        },
        tooltip: true,
        tooltipOpts: {
            content: "x: %x, y: %y"
        }
    };

    /**
     * Sin cos Chart Options
     */

    var sin = [],
        cos = [];
    for (var i = 0; i < 14; i += 0.5) {
        sin.push([i, Math.sin(i)]);
        cos.push([i, Math.cos(i)]);
    }

    $scope.sinCosChartData =
        [
            { data: sin, label: "sin(x)"},
            { data: cos, label: "cos(x)"}
        ];
    $scope.sinCosChartOptions = {
        series: {
            lines: {
                show: true
            },
            points: {
                show: true
            }
        },
        grid: {
            tickColor: "#e4e5e7",
            borderWidth: 1,
            borderColor: '#e4e5e7',
            color: '#6a6c6f'
        },
        yaxis: {
            min: -1.2,
            max: 1.2
        },
        colors: [ "#62cb31", "#efefef"],
    }
}
/**
 *
 * chartjsCtrl
 *
 */

angular
    .module('homer')
    .controller('chartjsCtrl', chartjsCtrl)

function chartjsCtrl($scope) {

    /**
     * Global options
     */
    $scope.globalOptions = {
        responsive: true
    };

    /**
     * Data for Radar chart
     */
    $scope.radarData = [
        [65, 59, 66, 45, 56, 55, 40],
        [28, 12, 40, 19, 63, 27, 87]
    ];

    $scope.radarLabels = ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"];

    $scope.radarOverride = [
        {
            label: "Dt 1",
            backgroundColor: "rgba(98,203,49,0.2)",
            borderColor: "rgba(98,203,49,1)",
            pointBackgroundColor: "rgba(98,203,49,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "#62cb31",
            borderWidth: 1
        },
        {
            label: "Dt 2",
            backgroundColor: "rgba(98,203,49,0.4)",
            borderColor: "rgba(98,203,49,1)",
            pointBackgroundColor: "rgba(98,203,49,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "#62cb31",
            borderWidth: 1
        }
    ];

    $scope.doughnutData = [20, 120, 100];
    $scope.doughnutLabels = [
        "App",
        "Software",
        "Laptop"
    ];
    $scope.doughnutColors = [
        "#62cb31",
        "#91dc6e",
        "#a3e186"
    ];

    $scope.polardata = [[120, 130, 100]];
    $scope.polarLabels = ["Homer", "Inspinia", "Luna"];
    $scope.polarOverride = [
        {
            backgroundColor: [
                "#62cb31",
                "#80dd55",
                "#a3e186"
            ],
            borderColor: [
                "#ffffff"
            ]
        }
    ];

    $scope.lineData = [
        [16, 32, 18, 26, 42, 33, 44],
        [22, 44, 67, 43, 76, 45, 12]
    ];

    $scope.lineLabels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.lineOverride = [
        {
            label: "Dt 1",
            backgroundColor: 'rgba(98,203,49, 0.5)',
            pointBorderWidth: 1,
            pointBackgroundColor: "rgba(98,203,49,1)",
            pointRadius: 3,
            pointBorderColor: '#ffffff',
            borderWidth: 1
        },
        {
            label: "Dt 2",
            backgroundColor: 'rgba(220,220,220,0.5)',
            borderColor: "rgba(220,220,220,0.7)",
            pointBorderWidth: 1,
            pointBackgroundColor: "rgba(220,220,220,1)",
            pointRadius: 3,
            pointBorderColor: '#ffffff',
            borderWidth: 1
        }
    ];

    $scope.barData = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
    ];

    $scope.barLabels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.barSeries = ["Dt 1", "Dt 2"];
    $scope.barOverride =  [
        {
            label: "Dt 1",
            backgroundColor: "rgba(220,220,220,0.5)",
            borderColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            borderWidth: 1
        },
        {
            label: "Dt 2",
            backgroundColor: "rgba(98,203,49,0.5)",
            borderColor: "rgba(98,203,49,0.8)",
            highlightFill: "rgba(98,203,49,0.75)",
            highlightStroke: "rgba(98,203,49,1)",
            borderWidth: 1
        }
    ]

    $scope.singleBarData = [
        [15, 20, 30, 40, 30, 50, 60]
    ];

    $scope.singleBarLabels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.singleBarSeries = ["Dt 1"];
    $scope.singleBarOverride =  [
        {
            label: "Dt 1",
            backgroundColor: "rgba(98,203,49,0.5)",
            borderColor: "rgba(98,203,49,0.8)",
            highlightFill: "rgba(98,203,49,0.75)",
            highlightStroke: "rgba(98,203,49,1)",
            borderWidth: 1,
        }
    ]

    $scope.sharplineData = [
        [33, 48, 40, 19, 54, 27, 54]
    ];

    $scope.sharplineLabels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.sharplineOverride = [
        {
            label: "Dt 1",
            backgroundColor: "rgba(98,203,49,0.5)",
            data: [33, 48, 40, 19, 54, 27, 54],
            lineTension: 0,
            pointBorderWidth: 1,
            pointBackgroundColor: "rgba(98,203,49,1)",
            pointRadius: 3,
            pointBorderColor: '#ffffff',
            borderWidth: 1
        }
    ];

    $scope.lineProjectData = [
        [17,21,19,24]
    ];

    $scope.lineProjectLabels = ["January", "February", "March", "April"];
    $scope.lineProjectOverride = [
        {
            label: "Example dataset",
            backgroundColor: "rgba(98,203,49,0.5)",
            borderColor: "rgba(98,203,49,0.7)",
            pointBackgroundColor: "rgba(98,203,49,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(26,179,148,1)",
        }
    ];
}
/**
 *
 * inlineChartsCtrl
 *
 */

angular
    .module('homer')
    .controller('inlineChartsCtrl', inlineChartsCtrl)

function inlineChartsCtrl($scope) {

    /**
     * Inline chart
     */
    $scope.inlineData = [34, 43, 43, 35, 44, 32, 44, 52, 25];
    $scope.inlineOptions = {
        type: 'line',
        lineColor: '#54ab2c',
        fillColor: '#62cb31',
    };

    /**
     * Bar chart
     */
    $scope.barSmallData = [5, 6, 7, 2, 0, -4, -2, 4];
    $scope.barSmallOptions = {
        type: 'bar',
        barColor: '#62cb31',
        negBarColor: '#c6c6c6'
    };

    /**
     * Pie chart
     */
    $scope.smallPieData = [1, 1, 2];
    $scope.smallPieOptions = {
        type: 'pie',
        sliceColors: ['#62cb31', '#b3b3b3', '#e4f0fb']
    };

    /**
     * Long line chart
     */
    $scope.longLineData = [34, 43, 43, 35, 44, 32, 15, 22, 46, 33, 86, 54, 73, 53, 12, 53, 23, 65, 23, 63, 53, 42, 34, 56, 76, 15, 54, 23, 44];
    $scope.longLineOptions = {
        type: 'line',
        lineColor: '#62cb31',
        fillColor: '#ffffff'
    };

    /**
     * Tristate chart
     */
    $scope.tristateData = [1, 1, 0, 1, -1, -1, 1, -1, 0, 0, 1, 1];
    $scope.tristateOptions = {
        type: 'tristate',
        posBarColor: '#62cb31',
        negBarColor: '#bfbfbf'
    };

    /**
     * Discrate chart
     */
    $scope.discreteData = [4, 6, 7, 7, 4, 3, 2, 1, 4, 4, 5, 6, 3, 4, 5, 8, 7, 6, 9, 3, 2, 4, 1, 5, 6, 4, 3, 7, ];
    $scope.discreteOptions = {
        type: 'discrete',
        lineColor: '#62cb31'
    };

    /**
     * Pie chart
     */
    $scope.pieCustomData = [52, 12, 44];
    $scope.pieCustomOptions = {
        type: 'pie',
        height: '150px',
        sliceColors: ['#1ab394', '#b3b3b3', '#e4f0fb']
    };

    /**
     * Bar chart
     */
    $scope.barCustomData = [5, 6, 7, 2, 0, 4, 2, 4, 5, 7, 2, 4, 12, 14, 4, 2, 14, 12, 7];
    $scope.barCustomOptions = {
        type: 'bar',
        barWidth: 8,
        height: '150px',
        barColor: '#1ab394',
        negBarColor: '#c6c6c6'
    };

    /**
     * Line chart
     */
    $scope.lineCustomData = [34, 43, 43, 35, 44, 32, 15, 22, 46, 33, 86, 54, 73, 53, 12, 53, 23, 65, 23, 63, 53, 42, 34, 56, 76, 15, 54, 23, 44];
    $scope.lineCustomOptions = {
        type: 'line',
        lineWidth: 1,
        height: '150px',
        lineColor: '#17997f',
        fillColor: '#ffffff',
    };
}
/**
 *
 * clockCtrl
 *
 */

angular
    .module('homer')
    .controller('clockCtrl', clockCtrl)

function clockCtrl($scope, $timeout) {
    $scope.tickInterval = 1000 //ms

    var tick = function() {
        $scope.clock = Date.now() // get the current time
        $timeout(tick, $scope.tickInterval); // reset the timer
    }

    // Start the timer
    $timeout(tick, $scope.tickInterval);
}
/**
 *
 * timelineCtrl
 *
 */

angular
    .module('homer')
    .controller('timelineCtrl', timelineCtrl)

function timelineCtrl($scope) {


    $scope.timelineItems = [
        {
            type: "The standard chunk of Lorem Ipsum",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to ",
            date: 1423063721,
            info: "It is a long established fact that"
        },
        {
            type: "There are many variations",
            content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here",
            date: 1423063721,
            info: "It is a long established fact that"
        },
        {
            type: "Contrary to popular belief",
            content: " If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
            date: 1423063721,
            info: "It is a long established fact that"
        },
        {
            type: "Lorem Ipsum",
            content: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words.",
            date: 1423063721,
            info: "It is a long established fact that"
        },
        {
            type: "The generated Lorem Ipsum",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to ",
            date: 1423063721,
            info: "It is a long established fact that"
        },
        {
            type: "The standard chunk",
            content: "Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            date: 1423063721,
            info: "It is a long established fact that"
        }
    ];

}
/**
 *
 * googleMapCtrl
 *
 */

angular
    .module('homer')
    .controller('googleMapCtrl', googleMapCtrl)

function googleMapCtrl($scope, $timeout) {
    $scope.mapOptions = {
        zoom: 14,
        center: new google.maps.LatLng(40.6700, -73.9400),
        // Style for Google Maps
        styles: [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}],
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
}
/**
 *
 * calendarCtrl
 *
 */

angular
    .module('homer')
    .controller('calendarCtrl', calendarCtrl)

function calendarCtrl($scope) {

    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    $scope.alertMessage = "Report all events from UI calendar.";

    // Events
    $scope.events = [
        {title: 'All Day Event',start: new Date(y, m, 1)},
        {id: 999,title: 'Repeating Event',start: new Date(y, m, d - 3, 16, 0),allDay: false},
        {id: 999,title: 'Repeating Event',start: new Date(y, m, d + 4, 16, 0),allDay: false},
        {title: 'Birthday Party',start: new Date(y, m, d + 1, 19, 0),end: new Date(y, m, d + 1, 22, 30),allDay: false},
        {title: 'Homer task',start: new Date(y, m, d + 5, 19, 0),end: new Date(y, m, d + 6, 22, 30),allDay: false, backgroundColor :"#62cb31", borderColor :"#62cb31"},
        {title: 'Click for Google',start: new Date(y, m, 28),end: new Date(y, m, 29),url: 'http://google.com/'}
    ];


    /* message on eventClick */
    $scope.alertOnEventClick = function( event, allDay, jsEvent, view ){
        $scope.alertMessage = (event.title + ': Clicked ');
    };
    /* message on Drop */
    $scope.alertOnDrop = function(event, dayDelta, minuteDelta, allDay, revertFunc, jsEvent, ui, view){
        $scope.alertMessage = (event.title +': Droped to make dayDelta ' + dayDelta);
    };
    /* message on Resize */
    $scope.alertOnResize = function(event, dayDelta, minuteDelta, revertFunc, jsEvent, ui, view ){
        $scope.alertMessage = (event.title +': Resized to make dayDelta ' + minuteDelta);
    };

    /* config object */
    $scope.uiConfig = {
        calendar:{
            height: 550,
            editable: true,
            header: {
                left: 'prev,next',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            eventClick: $scope.alertOnEventClick,
            eventDrop: $scope.alertOnDrop,
            eventResize: $scope.alertOnResize
        }
    };

    /* Event sources array */
    $scope.eventSources = [$scope.events];

}
/**
 *
 * editorCtrl
 *
 */

angular
    .module('homer')
    .controller('editorCtrl', editorCtrl)

function editorCtrl($scope) {

    $scope.summernoteText = ['<h3>Hello Jonathan! </h3>',
        '<p>dummy text of the printing and typesetting industry. <strong>Lorem Ipsum has been the dustrys</strong> standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more',
        '<br/><br/>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.',
        'recently with.</p><p>Mark Smith</p>'].join('');

    $scope.summernoteTextTwo = ['<h4>It is a long established fact</h4>',
        '<p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)',
        '<p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)',
        'with.</p>'].join('');

    $scope.summernoteOpt = {
        toolbar: [
            ['headline', ['style']],
            ['style', ['bold', 'italic', 'underline', 'superscript', 'subscript', 'strikethrough', 'clear']],
            ['textsize', ['fontsize']],
            ['alignment', ['ul', 'ol', 'paragraph', 'lineheight']],
        ]
    };

}
/**
 *
 * nggridCtrl
 *
 */

angular
    .module('homer')
    .controller('nggridCtrl', nggridCtrl)

function nggridCtrl($scope) {

    $scope.exampleData = [ { "Name": "Jakeem", "Email": "imperdiet@vulputatevelit.com", "Company": "Laoreet Lectus Corporation", "City": "Vaux-sur-Sure", "Country": "Papua New Guinea" }, { "Name": "Kadeem", "Email": "sit.amet.risus@scelerisquenequesed.net", "Company": "Mi Felis Adipiscing Institute", "City": "Fauglia", "Country": "Bouvet Island" }, { "Name": "Paula", "Email": "venenatis.lacus@milorem.net", "Company": "Libero LLP", "City": "Tirupati", "Country": "Antigua and Barbuda" }, { "Name": "Bree", "Email": "adipiscing.non.luctus@loremutaliquam.edu", "Company": "Vitae Purus Gravida Institute", "City": "Chatteris", "Country": "Poland" }, { "Name": "Quinn", "Email": "Nunc@ac.com", "Company": "Dui Lectus Rutrum Consulting", "City": "Wolverhampton", "Country": "Venezuela" }, { "Name": "Magee", "Email": "pretium.aliquet.metus@venenatislacus.co.uk", "Company": "Dui Associates", "City": "Stokrooie", "Country": "Japan" }, { "Name": "Rowan", "Email": "mus@rutrum.net", "Company": "Diam Pellentesque Habitant Institute", "City": "Ashburton", "Country": "Taiwan" }, { "Name": "Nina", "Email": "lobortis.augue@feugiatnec.org", "Company": "Auctor Velit Eget Consulting", "City": "Stevenage", "Country": "Denmark" }, { "Name": "Chava", "Email": "nec@ipsumSuspendissesagittis.com", "Company": "Egestas Company", "City": "Aulnay-sous-Bois", "Country": "Togo" }, { "Name": "Uma", "Email": "tincidunt.nunc@vestibulumneque.net", "Company": "Sem Semper Corp.", "City": "Dalkeith", "Country": "Nigeria" }, { "Name": "Amal", "Email": "laoreet.posuere@eu.net", "Company": "Non Massa PC", "City": "Stafford", "Country": "South Sudan" }, { "Name": "Dana", "Email": "Nulla.dignissim@mattisornarelectus.co.uk", "Company": "Laoreet PC", "City": "Gentinnes", "Country": "Korea, South" }, { "Name": "Iris", "Email": "nostra.per.inceptos@magnamalesuada.co.uk", "Company": "Diam Vel LLC", "City": "Oudekapelle", "Country": "Dominican Republic" }, { "Name": "Joshua", "Email": "Duis@enimgravidasit.com", "Company": "Magna Foundation", "City": "San Francisco", "Country": "Guinea-Bissau" }, { "Name": "Rosalyn", "Email": "egestas.ligula.Nullam@auctorullamcorpernisl.ca", "Company": "Sodales Mauris LLC", "City": "Seydişehir", "Country": "Sudan" }, { "Name": "Hilary", "Email": "et.pede.Nunc@accumsanneque.co.uk", "Company": "Et Rutrum Corp.", "City": "Broechem", "Country": "Bulgaria" }, { "Name": "Amena", "Email": "nisl.Maecenas.malesuada@vitaeorci.edu", "Company": "Quis LLC", "City": "Joliet", "Country": "Saint Lucia" }, { "Name": "Rashad", "Email": "Pellentesque.tincidunt@euneque.org", "Company": "Suspendisse Tristique Neque Industries", "City": "Amlwch", "Country": "Timor-Leste" }, { "Name": "Sharon", "Email": "ornare.sagittis@vitaeeratvel.ca", "Company": "Tellus Foundation", "City": "Woodstock", "Country": "Chile" } ];

    $scope.gridOptions = {
        data: 'exampleData'
    };
//
    $scope.gridOptionsTwo = {
        data: 'exampleData',
        showGroupPanel: true,
        jqueryUIDraggable: true
    }
}
/**
 *
 * nestableCtrl
 *
 */

angular
    .module('homer')
    .controller('nestableCtrl', nestableCtrl)

function nestableCtrl($scope) {

    // Handle actions
    $scope.remove = function(scope) {
        scope.remove();
    };
    $scope.toggle = function(scope) {
        scope.toggle();
    };
    $scope.moveLastToTheBeginning = function () {
        var a = $scope.data.pop();
        $scope.data.splice(0,0, a);
    };
    $scope.newSubItem = function(scope) {
        var nodeData = scope.$modelValue;
        nodeData.nodes.push({
            id: nodeData.id * 10 + nodeData.nodes.length,
            title: nodeData.title + '.' + (nodeData.nodes.length + 1),
            nodes: []
        });
    };
    $scope.collapseAll = function() {
        $scope.$broadcast('collapseAll');
    };
    $scope.expandAll = function() {
        $scope.$broadcast('expandAll');
    };

    // Nestable list example data
    $scope.data = [{
        "id": 1,
        "title": "Sem fringilla",
        "nodes": [
            {
                "id": 11,
                "title": "Nisl lacus et, ultricies",
                "nodes": [
                    {
                        "id": 111,
                        "title": "Congue hac",
                        "nodes": []
                    }
                ]
            },
            {
                "id": 12,
                "title": "Consectetuer orci mollis",
                "nodes": []
            }
        ],
    }, {
        "id": 2,
        "title": "Gravida morbi non",
        "nodes": [
            {
                "id": 21,
                "title": "Lorem aliquam",
                "nodes": []
            },
            {
                "id": 22,
                "title": "Inceptos nibh",
                "nodes": []
            }
        ],
    }, {
        "id": 3,
        "title": "Pede hymenaeos",
        "nodes": [
            {
                "id": 31,
                "title": "Magnis morbi orci",
                "nodes": []
            },
            {
                "id": 32,
                "title": "Ad tortor, auctor dui",
                "nodes": []
            },
            {
                "id": 33,
                "title": "Orci magnis, mauris",
                "nodes": []
            }
        ],
    }];
}
/**
 *
 * tourCtrl
 *
 */

angular
    .module('homer')
    .controller('tourCtrl', tourCtrl)

function tourCtrl($scope) {





}
/**
 *
 * datatablesCtrl
 *
 */

angular
    .module('homer')
    .controller('datatablesCtrl', datatablesCtrl)

function datatablesCtrl($scope, DTOptionsBuilder, DTColumnBuilder) {

    // See all possibility of fetch data with example code at:
    // http://l-lin.github.io/angular-datatables/#/withAjax

    // Please note that api file is not included to grunt build process
    // As it will be probably replacement to some REST service we only add it for demo purpose

    $scope.dtOptions = DTOptionsBuilder.fromSource('api/datatables.json')
        .withDOM("<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>tp")
        .withButtons([
            {extend: 'copy',className: 'btn-sm'},
            {extend: 'csv',title: 'ExampleFile', className: 'btn-sm'},
            {extend: 'pdf', title: 'ExampleFile', className: 'btn-sm'},
            {extend: 'print',className: 'btn-sm'}
        ]);
    $scope.dtColumns = [
        DTColumnBuilder.newColumn('Name').withTitle('Name'),
        DTColumnBuilder.newColumn('Position').withTitle('Position'),
        DTColumnBuilder.newColumn('Office').withTitle('Office'),
        DTColumnBuilder.newColumn('Age').withTitle('Age'),
        DTColumnBuilder.newColumn('Start_date').withTitle('Start_date'),
        DTColumnBuilder.newColumn('Salary').withTitle('Salary')
    ];
}
/**
 *
 * wizardCtrl
 *
 */

angular
    .module('homer')
    .controller('wizardOneCtrl', wizardOneCtrl)

function wizardOneCtrl($scope, notify, sweetAlert) {

    // Initial user
    $scope.user = {
        username: 'Mark Smith',
        email: 'mark@company.com',
        password: 'secret_password',
        approve: false
    }

    // Initial step
    $scope.step = 1;

    // Wizard functions
    $scope.wizard =  {
        show: function(number) {
            $scope.step = number;
        },
        next: function() {
            $scope.step++ ;
        },
        prev: function() {
            $scope.step-- ;
        }
    };

    $scope.submit = function()
    {
        // Show notification
        sweetAlert.swal({
            title: "Thank you!",
            text: "You approved our example form!",
            type: "success"
        });

        // 'Redirect' to step 1
        $scope.step = 1;

    }

}


/**
 *
 * formsCtrl
 *
 */

angular
    .module('homer')
    .controller('formsCtrl', formsCtrl)
    .controller('SelectLocalCtrl', SelectLocalCtrl)
    .controller('RadiolistCtrl', RadiolistCtrl)
    .controller('Html5InputsCtrl', Html5InputsCtrl)
    .controller('DatepickerDemoCtrl', DatepickerDemoCtrl)
    .controller('spinCtrl', spinCtrl)

function formsCtrl($scope) {

    $scope.user = {
        name: 'awesome user',
        desc: 'Awesome user \ndescription!',
        remember: true
    };


    $scope.person = {};
    $scope.people = [
        { name: 'Adam',      email: 'adam@email.com',      age: 10 },
        { name: 'Amalie',    email: 'amalie@email.com',    age: 12 },
        { name: 'Wladimir',  email: 'wladimir@email.com',  age: 30 },
        { name: 'Samantha',  email: 'samantha@email.com',  age: 31 },
        { name: 'Estefanía', email: 'estefanía@email.com', age: 16 },
        { name: 'Natasha',   email: 'natasha@email.com',   age: 54 },
        { name: 'Nicole',    email: 'nicole@email.com',    age: 43 },
        { name: 'Adrian',    email: 'adrian@email.com',    age: 21 }
    ];

    $scope.availableColors = ['Red','Green','Blue','Yellow','Magenta','Maroon','Umbra','Turquoise'];
    $scope.multipleDemo = {};
    $scope.multipleDemo.colors = ['Blue','Red'];

    $scope.availableTags = ['Branding','Website','Design','Ilustration','New','Important','External'];
    $scope.multipleTags = {};
    $scope.multipleTags.tags = ['Branding','Website','Design','Ilustration','New'];

    $scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.opened = true;
    };
}

function SelectLocalCtrl($scope, $filter) {
    $scope.user = {
        status: 2
    };

    $scope.statuses = [
        {value: 1, text: 'status1'},
        {value: 2, text: 'status2'},
        {value: 3, text: 'status3'},
        {value: 4, text: 'status4'}
    ];

    $scope.showStatus = function() {
        var selected = $filter('filter')($scope.statuses, {value: $scope.user.status});
        return ($scope.user.status && selected.length) ? selected[0].text : 'Not set';
    };
}

function RadiolistCtrl($scope, $filter){
    $scope.user = {
        status: 2
    };

    $scope.statuses = [
        {value: 1, text: 'status1'},
        {value: 2, text: 'status2'}
    ];

    $scope.showStatus = function() {
        var selected = $filter('filter')($scope.statuses, {value: $scope.user.status});
        return ($scope.user.status && selected.length) ? selected[0].text : 'Not set';
    };
}

function Html5InputsCtrl($scope) {
    $scope.user = {
        email: 'email@example.com',
        tel: '123-45-67',
        number: 29,
        range: 10,
        url: 'http://example.com',
        search: 'blabla',
        color: '#6a4415',
        date: null,
        time: '12:30',
        datetime: null,
        month: null,
        week: null
    };
}

function DatepickerDemoCtrl($scope) {
    $scope.today = function() {
        $scope.dt = new Date();
    };
    $scope.today();

    $scope.clear = function () {
        $scope.dt = null;
    };

    // Disable weekend selection
    $scope.disabled = function(date, mode) {
        return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
    };

    $scope.toggleMin = function() {
        $scope.minDate = $scope.minDate ? null : new Date();
    };
    $scope.toggleMin();

    $scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.opened = true;
    };

    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];
}

function spinCtrl($scope){

    $scope.inputteresxcs = 55;
    $scope.spinOption1 = {
        min: 0,
        max: 100,
        step: 0.1,
        decimals: 2,
        boostat: 5,
        maxboostedstep: 10,
    };

    $scope.spinOption2 = {
        verticalbuttons: true
    }

    $scope.spinOption3 = {
        postfix: '%'
    }

    $scope.spinOption4 = {
        postfix: "a button",
        postfix_extraclass: "btn btn-default"
    }

}
/**
 *
 * draggableCtrl
 *
 */

angular
    .module('homer')
    .controller('draggableCtrl', draggableCtrl)

function draggableCtrl($scope) {

    $scope.sortableOptions = {
        connectWith: ".connectPanels",
        handler: ".panel-body"
    };

}
/**
 *
 * validationCtrl
 *
 */

angular
    .module('homer')
    .controller('validationCtrl', validationCtrl)

function validationCtrl($scope) {

    $scope.signupForm = function() {

        if ($scope.signup_form.$valid) {
            // Submit as normal
        } else {
            $scope.signup_form.submitted = true;
        }
    }

}

/**
 *
 * chartistCtrl
 *
 */

angular
    .module('homer')
    .controller('chartistCtrl', chartistCtrl);

function chartistCtrl($scope) {


    $scope.lineData = {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        series: [
            [12, 9, 7, 8, 5],
            [2, 1, 3.5, 7, 3],
            [1, 3, 4, 5, 6]
        ]
    };

    $scope.lineOptions = {
        fullWidth: true,
        chartPadding: {
            right: 40
        }
    };

    $scope.pieData = {
        series: [10, 5, 5]
    };


    $scope.guageData = {
        series: [25, 25, 25, 25]
    };

    $scope.guageOptions = {
        donut: true,
        donutWidth: 60,
        startAngle: 270,
        total: 200,
        showLabel: false
    };


    $scope.hbarData = {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        series: [
            [2, 3, 4, 5, 6, 7, 8],
            [3, 4, 5, 6, 7, 8, 9]
        ]
    };

    $scope.hbarOptions = {
        seriesBarDistance: 10,
        reverseData: true,
        horizontalBars: true,
        axisY: {
            offset: 70
        }
    };

    $scope.sbarData = {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        series: [
            [800000, 1200000, 1400000, 1200000],
            [200000, 400000, 500000, 300000],
            [300000, 300000, 400000, 600000]
        ]
    };

    $scope.sbarOptions = {
        stackBars: true,
        axisY: {
            labelInterpolationFnc: function(value) {
                return (value / 1000) + 'k';
            }
        }
    };

    $scope.areaData = {
        labels: [1, 2, 3, 4, 5, 6, 7, 8],
        series: [[5, 9, 7, 8, 5, 3, 5, 4]
        ]
    };

    $scope.areaOptions = {
        low: 0,
        showArea: true
    };

}
/**
 *
 * codeEditorCtrl
 *
 */

angular
    .module('homer')
    .controller('codeEditorCtrl', codeEditorCtrl)

function codeEditorCtrl($scope) {

    $scope.editorOptions = {
        lineNumbers: true,
        matchBrackets: true,
        styleActiveLine: true
    };

}
/**
 *
 * loadingCtrl
 *
 */

angular
    .module('homer')
    .controller('loadingCtrl', loadingCtrl)

function loadingCtrl($scope, $timeout) {

    $scope.runLoading = function() {
        // start loading
        $scope.loading = true;

        $timeout(function(){
            // Simulate some service
            $scope.loading = false;
        },2000)
    };


    // Demo purpose actions
    $scope.runLoading1 = function () {
        // start loading
        $scope.loading1 = true;

        $timeout(function () {
            // Simulate some service
            $scope.loading1 = false;
        }, 2000)
    };
    $scope.runLoading2 = function () {
        // start loading
        $scope.loading2 = true;

        $timeout(function () {
            // Simulate some service
            $scope.loading2 = false;
        }, 2000)
    };
    $scope.runLoading3 = function () {
        // start loading
        $scope.loading3 = true;

        $timeout(function () {
            // Simulate some service
            $scope.loading3 = false;
        }, 2000)
    };
    $scope.runLoading4 = function () {
        // start loading
        $scope.loading4 = true;

        $timeout(function () {
            // Simulate some service
            $scope.loading4 = false;
        }, 2000)
    };
    $scope.runLoading5 = function () {
        // start loading
        $scope.loading5 = true;

        $timeout(function () {
            // Simulate some service
            $scope.loading5 = false;
        }, 2000)
    };
    $scope.runLoading6 = function () {
        // start loading
        $scope.loading6 = true;

        $timeout(function () {
            // Simulate some service
            $scope.loading6 = false;
        }, 2000)
    };
    $scope.runLoading7 = function () {
        // start loading
        $scope.loading7 = true;

        $timeout(function () {
            // Simulate some service
            $scope.loading7 = false;
        }, 2000)
    };
    $scope.runLoading8 = function () {
        // start loading
        $scope.loading8 = true;

        $timeout(function () {
            // Simulate some service
            $scope.loading8 = false;
        }, 2000)
    };
    $scope.runLoading9 = function () {
        // start loading
        $scope.loading9 = true;

        $timeout(function () {
            // Simulate some service
            $scope.loading9 = false;
        }, 2000)
    };
    $scope.runLoading10 = function () {
        // start loading
        $scope.loading10 = true;

        $timeout(function () {
            // Simulate some service
            $scope.loading10 = false;
        }, 2000)
    };
    $scope.runLoading11 = function () {
        // start loading
        $timeout(function() {
            $scope.loading11 = 0.1;
        }, 500);
        $timeout(function() {
            $scope.loading11 += 0.2;
        }, 1000);
        $timeout(function() {
            $scope.loading11 += 0.3;
        }, 1500);
        $timeout(function() {
            $scope.loading11 = false;
        }, 2000);

    };
    $scope.runLoading12 = function () {
        // start loading
        $timeout(function() {
            $scope.loading12 = 0.1;
        }, 500);
        $timeout(function() {
            $scope.loading12 += 0.2;
        }, 1000);
        $timeout(function() {
            $scope.loading12 += 0.3;
        }, 1500);
        $timeout(function() {
            $scope.loading12 = false;
        }, 2000);

    };

    $scope.runLoadingDemo = function() {
        // start loading
        $scope.loadingDemo = true;

        $timeout(function(){
            // Simulate some service
            $scope.loadingDemo = false;
        },2000)
    };


}
/**
 * HOMER - Responsive Admin Theme
 * Copyright 2015 Webapplayers.com
 *
 */

angular
    .module('homer')
    .directive('touchSpin', touchSpin)


/**
 * touchSpin - Directive for Bootstrap TouchSpin
 */
function touchSpin() {
    return {
        restrict: 'A',
        scope: {
            spinOptions: '=',
        },
        link: function (scope, element, attrs) {
            scope.$watch(scope.spinOptions, function(){
                render();
            });
            var render = function () {
                $(element).TouchSpin(scope.spinOptions);
            };
        }
    }
};