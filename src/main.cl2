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

(defcontroller myCtrl
  [$scope myService]
  (def$ someNumber 12)
  (defn$ addTwo [n] {:result (+ n 2)})
  (defn$ serviceAdd [n]
    (myService.addThree n)))

(defcontroller pricingCtrl
  [$scope]
  (def$ features
    [{:name "Foo" :image "http://placekitten.com/200/200"
      :desc "Lorem ipsum"
      :choices ["One" "Two" "Three" "Four"]}
     {:name "Bar" :image "http://placekitten.com/200/200"
      :desc "Lorem ipsum"
      :choices ["One" "Two" "Three" "Four"]}
     {:name "Bazz"  :image "http://placekitten.com/200/200"
      :desc "Lorem ipsum"
      :choices ["One" "Two" "Three"]}])
  (def$ myStyle
    {:width "25%"}))
;; example of specifying app name
(defservice myApp myService
 []
 (defn! addThree [n] (+ n 3)))

;; generic defmodule usage
(defmodule myApp
  (:filter (myFilter [] [s] (+ s 5))))

(deffilter yourFilter []
  [s]
  (+ s 6))

(deffilter autoWidth []
  [choices]
  {:width (+* "" (/ 75 (count choices)) "%")})