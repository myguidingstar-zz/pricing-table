(include! "../lib/angular.cl2")

(defapp myApp [ui.bootstrap])
;; don't have to specify app name as compiler remember the last app name
;; defined in `defapp`

(defdirective mouseoverRemoveClass
  []
  ;; can be a directive-definition object or a link function
  (fn [scope elm attrs]
    (..
     elm
     (bind
      "mouseenter"
      (fn [] (. elm (removeClass attrs.mouseoverRemoveClass))))
     (bind
      "mouseleave"
      (fn [] (. elm (addClass attrs.mouseoverRemoveClass)))))))

(defcontroller pricingCtrl
  [$scope]
  (def$ features
    [{:name "Foo" :image "http://placekitten.com/600/400"
      :desc "Lorem ipsum"
      :choices ["One" "Two" "Three" "Four"]}
     {:name "Bar" :image "http://placekitten.com/600/400"
      :desc "Lorem ipsum"
      :choices ["One" "Two" "Three" "Four"]}
     {:name "Bazz"  :image "http://placekitten.com/600/400"
      :desc "Lorem ipsum"
      :choices ["One" "Two" "Three"]}]))

(deffilter autoWidth []
  [choices]
  {:width (+* "" (/ 75 (count choices)) "%")})