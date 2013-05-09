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
   {:href
    "http://fonts.googleapis.com/css?family=Arimo|Open+Sans+Condensed:300|Noto+Serif:700italic&subset=vietnamese,latin"
    :rel "stylesheet"}]
  [:script
   "document.write('<base href=\"' + document.location + '\" />')"]
  [:script {:src "components/angular/angular.min.js"}]
  [:script {:src "components/angular-bootstrap/ui-bootstrap-tpls.min.js"}]
  [:script {:src "demo.js"}]]
 [:body
  [:div.navbar {:ng-controller "sessionCtrl"}
   [:div.navbar-inner
    [:div.container
     [:a.brand {:href "../"} "Children Palace"]
     [:div#main-menu.nav-collapse.collapse
      [:ul.nav.pull-right
       [:li [:a "You're {{session.name}}"]]
       [:li [:a {:ng-click "login_box()"} "Log in as..."]]]
      [:div {:modal "show_login_box"
             :close "close()"}
       [:div.modal-header
        "Please choose an user to login as"]
       [:div.modal-body
        [:ul {:ng-repeat "user in users"}
         [:li [:a {:ng-click "login_as(user)"} "{{user.name}}"]]]]
       [:div.modal-footer
        [:button.btn.btn-warning.cancel
         {:ng-click "close()"}
         "Cancel"]]]]]]]
  [:div.container
   [:h1 "Title"]
   [:div.span12
    ]]]]
