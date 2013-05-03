(include! "../lib/angular.cl2")

(defapp myApp [ui.bootstrap])
;; don't have to specify app name as compiler remember the last app name
;; defined in `defapp`

(defdirective mouseoverAddClass
  []
  (fn [scope elm attrs]
    (..
     elm
     (bind
      "mouseenter"
      (fn [] (. elm (addClass attrs.mouseoverAddClass))))
     (bind
      "mouseleave"
      (fn [] (. elm (removeClass attrs.mouseoverAddClass)))))))

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
    [{:name "Feature Foo"  :image "/img/feature.jpg"
      :choices [10 20 30]}
     {:name "Feature Bar"  :image "/img/feature.jpg"
      :choices [10 20 30]}
     {:name "Feature Bazz" :image "/img/feature.jpg"
      :choices [10 20 30 40]}]))

(deffilter autoWidth []
  [choices]
  {:width (+* "" (/ 75 (count choices)) "%")})