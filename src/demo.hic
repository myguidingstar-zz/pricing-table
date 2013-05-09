[:html
 {:ng-app "myApp", :lang "en"}
 [:head
  [:meta {:charset "utf-8"}]
  [:title "Children Palace - Course registration - Demo"]
  [:link
   {:href "css/bootstrap.min.css",
    :rel "stylesheet"}]
  [:link
   {:href "css/responsive.min.css",
    :rel "stylesheet"}]
  [:link
   {:href "components/angular-strap/vendor/bootstrap-datepicker.css"}]
  [:link
   {:href
    "http://fonts.googleapis.com/css?family=Arimo|Open+Sans+Condensed:300|Noto+Serif:700italic&subset=vietnamese,latin"
    :rel "stylesheet"}]
  [:script
   "document.write('<base href=\"' + document.location + '\" />')"]
  [:script {:src "http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"}]
  [:script {:src "components/angular/angular.min.js"}]
  [:script {:src "components/angular-bootstrap/ui-bootstrap-tpls.min.js"}]
  [:script {:src "components/angular-strap/dist/angular-strap.min.js"}]
  [:script {:src "components/angular-strap/vendor/bootstrap-datepicker.js"}]
  [:script {:src "demo.js"}]]
 [:body
  [:div.navbar {:ng-controller "sessionCtrl"}
   [:div.navbar-inner
    [:div.container
     [:a.brand {:href "../"} "Children Palace"]
     [:div#main-menu.nav-collapse.collapse
      [:ul.nav
       [:li [:a {:ng-show "session.logged_in"
                 :ng-href "#{{session.url}}"} "Courses"]]]
      [:ul.nav.pull-right
       [:li [:a [:span.badge.badge-important "3"]]]
       [:li [:a {:href "#/profile"}
             [:i.icon-user] "You're {{session.name}}"]]
       [:li [:a {:ng-click "login_box()"}
             [:i.icon-exchange] "Log in as..."]]]
      [:div {:modal "show_login_box"
             :close "close()"}
       [:div.modal-header
        [:h3 "Please choose an user to login as"]]
       [:div.modal-body
        [:ul {:ng-repeat "user in users"}
         [:li [:a {:ng-click "login_as(user)"} "{{user.name}}"]]]]
       [:div.modal-footer
        [:button.btn.btn-warning.cancel
         {:ng-click "close()"}
         "Cancel"]]]]]]]
  [:div.container.row.span12
   [:div.span8.offset2
    [:ng-view]]]]]
