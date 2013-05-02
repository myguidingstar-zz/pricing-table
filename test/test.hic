[:html
 [:head
  [:script {:src "/testem/qunit.js"}]
  [:script {:src "/testem.js"}]
  [:link
   {:href "css/bootstrap.min.css",
    :rel "stylesheet"}]
  [:link
   {:href "css/responsive.min.css",
    :rel "stylesheet"}]
  [:link {:href "/testem/qunit.css", :rel "stylesheet"}]
  [:script {:src "components/angular/angular.min.js"}]
  [:script {:src "test.js"}]]
 [:body
  {:ng-app "myApp"}
  [:div#qunit-userAgent]
  [:ol#qunit-tests]
  [:div#qunit-fixture]]]
