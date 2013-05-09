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

(defcontroller sessionCtrl
  [$scope session]
  ;; "links" some scope vars to services' so we don't have to
  ;; watch for changes in those services.
  (def$ id       session.id)
  (def$ group    session.group)
  (def$ username session.username)
  ;; (def$ picture  session.picture)
  (def$ name     session.name))

(defservice session
  "Stores current logged-in user's information."
  []
  (def! id       0)
  (def! group    "hell")
  (def! username "satan")
  ;(def! picture )
  (def! name     "Mr Satan"))
