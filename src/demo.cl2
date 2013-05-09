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
  [$scope session users]
  ;; "links" some scope vars to services' so we don't have to
  ;; watch for changes in those services.
  (def$ id       session.id)
  (def$ group    session.group)
  (def$ username session.username)
  ;; (def$ picture  session.picture)
  (def$ name     session.name)
  (def$ users    users.users))

(defservice session
  "Stores current logged-in user's information."
  []
  (def! id       -1)
  (def! group    "hell")
  (def! username "satan")
  ;(def! picture )
  (def! name     "Mr Satan"))

(defservice users
  "Stores system users."
  []
  (def! users
    [{:id 0 :username "faculty-a" :group "faculties" :name "Faculty A" :picture ""}
     {:id 1 :username "faculty-b" :group "faculties" :name "Faculty B" :picture ""}
     {:id 2 :username "accountant" :group "accountants" :name "Accountant C" :picture ""}
     {:id 3 :username "student-d" :group "students" :name "Student D" :picture ""}
     {:id 4 :username "student-g" :group "students" :name "Student G" :picture ""}
     {:id 5 :username "student-h" :group "students" :name "Student H" :picture ""}
     {:id 6 :username "student-k" :group "students" :name "Student K" :picture ""}
     {:id 7 :username "student-l" :group "students" :name "Student L" :picture ""}
     ]))
