(include! "../lib/angular.cl2")

(defapp myApp [ui.bootstrap])
;; don't have to specify app name as compiler remember the last app name
;; defined in `defapp`
(defdirective myDirective
  []
  ;; can be a directive-definition object or a link function
  (fn [scope elm attrs]
    (.
     scope
     ($watch
      (. attrs -myDirective)
      (fn [value] (. elm (text (+ value 4))))))))

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
      :choices ["One" "Two" "Three"]}])
  (def$ myStyle
    {:width "25%"}))
;; example of specifying app name

(deffilter autoWidth []
  [choices]
  {:width (+* "" (/ 75 (count choices)) "%")})

(deffilter mouseClass []
  [mouseState]
  (if (= 1 mouseState)
    ""
    "icon-muted"))