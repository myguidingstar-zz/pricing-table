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
   {:href
    "http://fonts.googleapis.com/css?family=Arimo|Open+Sans+Condensed:300|Noto+Serif:700italic&subset=vietnamese,latin"
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
  [:div.container
   [:h1 "Hello world"]
   [:div.span12 {:ng-controller "pricingCtrl"}
    [:table.table.table-condensed       ;.table-bordered
     {:ng-repeat "feature in features"}
     [:tr
      [:td {:ng-style "myStyle"}
       [:h2 "{{feature.name}}"
        [:i.icon-question-sign.pull-right.icon-muted.hidden-phone
         {:tooltip-html-unsafe "{{'<image src=\"'+feature.image+'\">'}}"
          :tooltip-placement "right"}]]]
      [:td {:ng-style "{{feature.choices|autoWidth}}"
            :ng-repeat "choice in feature.choices"}
       ;;icon-muted
       [:h3.text-center.muted
        [:i.icon-ok.icon-success.text-success " "] "{{choice}}"]]]]]]

  #_[:div.span12
     [:p "My controller: {{addTwo(2)}}"]
     [:p "{{serviceAdd(5)}}"]
     [:p "My filter: {{2|myFilter}}"]
     [:p {:my-directive "3"}]
     [:div {:my-directive "someNumber"}]]]]
