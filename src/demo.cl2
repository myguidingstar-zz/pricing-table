(include! "../lib/angular.cl2")

(defapp myApp [ui.bootstrap $strap.directives])
;; don't have to specify app name as compiler remember the last app name
;; defined in `defapp`

(defroute
  "/default" {:controller 'emptyCtrl
              :template
              (hiccup
               [:div.input-append
                [:input.input-small {:type "text" :data-date-format "dd/mm/yyyy"
                                     :bs-datepicker ""}]
                [:button.btn {:data-toggle "datepicker"}
                 [:i.icon-calendar]]])}
  "/profile" {:controller 'profileCtrl
              :template
              (hiccup
               [:h2 "Please fill your information"]
               [:form.form-horizontal.well
                {:name "profileForm"}
                [:div.control-group
                 [:label.control-label "Name"]
                 [:div.controls
                  [:input.span5
                   {:ng-model "name" :type "text" :required "" :name "name"}]]]
                [:div.control-group
                 [:label.control-label "Email"]
                 [:div.controls
                  [:input.span4
                   {:ng-model "email" :type "email" :required ""}]]]
                [:div.control-group
                 [:label.control-label "Phone"]
                 [:div.controls
                  [:input.span4
                   {:ng-model "email" :type "text" :required ""}]]]
                [:div.control-group
                 [:label.control-label "Password"]
                 [:div.controls
                  [:input.span4
                   {:ng-model "password" :type "password" :required ""}]]]
                [:div.control-group
                 [:label.control-label "DOB"]
                 [:div.controls
                  [:div.input-append
                   [:input.span2
                    {:type "text" :data-date-format "dd/mm/yyyy"
                     :ng-model "dob"
                     :bs-datepicker "" :required ""}]
                   [:button.btn {:data-toggle "datepicker"}
                    [:i.icon-calendar]]]]]
                [:div.control-group
                 [:div.controls
                  [:button.btn.btn-success
                   "Save"]]]])}
  "/faculty" {:controller 'emptyCtrl
              :template (hiccup [:div "Faculty!"])}
  "/student" {:controller 'emptyCtrl
              :template (hiccup [:div "Student!"])}
  "/accountant" {:controller 'emptyCtrl
                 :template (hiccup [:foo "Accountant, really?"])}
  "/alias" "/default"
  :default "/default")

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
  [$scope session users $location]
  ;; "links" some scope vars to services' so we don't have to
  ;; watch for changes in those services.
  (def$ session       session)
  ;; (def$ picture  session.picture)
  (def$ users    users.users)

  (def$ show_login_box false)

  (defn$ close []
    (def$ show_login_box false))

  (defn$ login_box []
    (def$ show_login_box true))

  (defn$ login_as
    "Updates current session to passed user."
    [user]
    (merge! session
            (select-keys user [:id :group :username :name])
            {:url (:url (get users.groups (:group user)))
             :logged_in true})
    ($location.path (:url session))
    (def$ show_login_box false)))

(defcontroller emptyCtrl [])

(defcontroller profileCtrl [])

(defservice session
  "Stores current logged-in user's information."
  []
  (def! id       -1)
  (def! group    "guest")
  (def! username "guest")
  ;(def! picture )
  (def! name     "Guest"))

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
     ])
  (def! groups
    {:faculties   {:id 0 :url "/faculty"}
     :accountants {:id 1 :url "/accountant"}
     :students    {:id 2 :url "/student"}}))
