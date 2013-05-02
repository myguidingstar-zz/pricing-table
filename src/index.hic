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
  [:link {:href "/testem/qunit.css", :rel "stylesheet"}]
  [:script {:src "components/angular/angular.min.js"}]
  [:script {:src "main.js"}]]
 [:body
  {:ng-controller "myCtrl"}
  [:p "My controller: {{addTwo(2)}}"]
  [:p "Service: {{serviceAdd(5)}}"]
  [:p "My filter: {{2|myFilter}}"]
  [:p {:my-directive "3"}]
  [:div {:my-directive "someNumber"}]]]
