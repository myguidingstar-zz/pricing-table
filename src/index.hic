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
  [:div.navbar
   [:div.navbar-inner
    [:div.container
     [:a.brand {:href "../"} "Bluestrap"]
     [:div#main-menu.nav-collapse.collapse]]]]
  [:div.container
   [:h1 "Feature group"]
   [:div.span12 {:ng-controller "pricingCtrl"}
    [:table.table.table-condensed       ;.table-bordered
     {:ng-repeat "feature in features"}
     [:tr {:ng-controller "priceRowCtrl"}
      [:td {:style "width: 25%"}
       [:h2 {:tooltip-html-unsafe
             "{{'<img src=\"'+feature.image+'\">'}}"
             :tooltip-placement "right"}
        "{{feature.name}}"
        [:i.icon-question-sign.pull-right.hidden-phone.icon-muted
         {:mouseover-remove-class "icon-muted"}]]
       [:ul ;; features from pricing choice
        [:li "Show features provided with moused-over price choice"]
        [:li "If no price is moused-over, show current price's features "]
        [:li "{{hoverValue||currentValue}}"]
        [:li "{{currentChoices}}"]
        [:li "{{currentHovers}}"]]]
      [:td {:ng-style "{{feature.choices|autoWidth}}"
            :ng-repeat "choice in feature.choices"}
       [:h3.text-center
        [:i.icon-ok
         {:ng-class "isChosen($index)|currentClass:isHovered($index)"
          :ng-click "setChoice($index,choice)"
          :ng-mouseenter "setHover($index,choice)"
          :ng-mouseleave "clearHovers()"
          :style "cursor:pointer"}
         "  {{choice}}"]]]]]]]]]
