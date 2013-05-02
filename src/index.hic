[:html
 {:ng-app "myApp", :lang "en"}
 [:head
  [:meta {:charset "utf-8"}]
  [:title "My HTML File"]
  [:link
   {:href "css/bootstrap.min.css",
    :rel "stylesheet"}]
  [:link
   {:href "css/responsive.min.css",
    :rel "stylesheet"}]
  [:link
   {:href "more.css",
    :rel "stylesheet"}]
  [:script
   "document.write('<base href=\"' + document.location + '\" />')"]
  [:script {:src "components/angular/angular.min.js"}]
  [:script {:src "components/angular-bootstrap/ui-bootstrap-tpls.min.js"}]
  [:script {:src "main.js"}]]
 [:body
  {:ng-controller "myCtrl"}
  [:div.navbar
   [:div.navbar-inner
    [:div.container
     [:a.brand {:href "../"} "Bootswatch"]
     [:div#main-menu.nav-collapse.collapse
      ]]]]
  [:div.span12 {:ng-controller "pricingCtrl"}
   [:table.table.table-bordered
    {:ng-repeat "feature in features"}
    [:tr
     [:td {:ng-style "myStyle"
           :tooltip-html-unsafe "{{'<image src=\"'+feature.image+'\">'+feature.desc+'<br />'}}"
           :tooltip-placement "right"}
      "{{feature.name}}"]
     [:td {:ng-style "{{feature.choices|autoWidth}}"
           :ng-repeat "choice in feature.choices"}
      "{{choice}}"]]]]
  [:div.span12
   [:p "My controller: {{addTwo(2)}}"]
   [:p "{{serviceAdd(5)}}"]
   [:p "My filter: {{2|myFilter}}"]
   [:p {:my-directive "3"}]
   [:div {:my-directive "someNumber"}]]]]
