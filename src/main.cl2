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

(defcontroller priceRowCtrl
  [$scope]
  (def$ currentValue)
  (def$ hoverValue)
  (defn$ setHoverValue [val]
    (def$ hoverValue val))
  (defn$ clearChoices []
    (def$ currentChoices (repeat (count $scope.feature.choices) 0)))
  ($scope.clearChoices)
  (defn$ setChoice [position choice]
    (. $scope clearChoices)
    (def$ currentValue choice)
    (assoc! $scope.currentChoices position choice))
  (defn$ isActive [position]
    (!== 0 (get $scope.currentChoices position))))

(deffilter autoWidth []
  [choices]
  {:width (+* "" (/ 75 (count choices)) "%")})