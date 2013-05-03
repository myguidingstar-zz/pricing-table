(include! "../lib/angular.cl2")

(defapp myApp [ui.bootstrap])
;; don't have to specify app name as compiler remember the last app name
;; defined in `defapp`

(defdirective mouseoverRemoveClass
  []
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
      :choices [0 10 20 30]}
     {:name "Feature Bar"  :image "/img/feature.jpg"
      :choices [10 20 30]}
     {:name "Feature Bazz" :image "/img/feature.jpg"
      :choices [10 20 30 40]}]))

(defcontroller priceRowCtrl
  [$scope]
  (def$ currentValue)
  (def$ hoverValue)
  (defn blank []
    (repeat (count $scope.feature.choices) 0))

  (defn$ clearChoices []
    (def$ currentChoices (blank)))

  ($scope.clearChoices)

  (defn$ setChoice [position choice]
    (. $scope clearChoices)
    (def$ currentValue choice)
    (assoc! $scope.currentChoices position choice))

  (defn$ isChosen [position]
    (!== 0 (get $scope.currentChoices position)))

  (defn$ clearHovers []
    (def$ hoverValue)
    (def$ currentHovers (blank)))

  ($scope.clearHovers)

  (defn$ isHovered [position]
    (!== 0 (get $scope.currentHovers position)))

  (defn$ setHover [position choice]
    (. $scope clearHovers)
    (def$ hoverValue choice)
    (assoc! $scope.currentHovers position choice)))

(deffilter autoWidth []
  [choices]
  {:width (+* "" (/ 75 (count choices)) "%")})

(deffilter currentClass []
  [chosen? hovered?]
  (+* (if chosen?
         "icon-success text-success"
         "")
       (if hovered?
         " icon-hand-right"
         "")
       (if (not (or chosen? hovered?))
         " icon-muted"
         "")))