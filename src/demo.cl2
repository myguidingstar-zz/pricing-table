(include! "../node_modules/angular-cl2/lib/angular.cl2")

(defapp myApp [ui.bootstrap $strap.directives])
;; don't have to specify app name as compiler remember the last app name
;; defined in `defapp`

(defroute
  "/default" {:controller 'emptyCtrl
              :template
              (hiccup
               [:h2
                "This is a demo. Please choose an account to log in."])}
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
                   {:ng-model "buffer.name" :type "text" :required "" :name "name"}]]]
                [:div.control-group
                 [:label.control-label "Email"]
                 [:div.controls
                  [:input.span4
                   {:ng-model "buffer.email" :type "email" :required ""}]]]
                [:div.control-group
                 [:label.control-label "Phone"]
                 [:div.controls
                  [:input.span4
                   {:ng-model "buffer.phone" :type "text" :required ""}]]]
                [:div.control-group
                 [:label.control-label "Password"]
                 [:div.controls
                  [:input.span4
                   {:ng-model "buffer.password" :type "password" :required ""}]]]
                [:div.control-group
                 [:label.control-label "DOB"]
                 [:div.controls
                  [:div.input-append
                   [:input.span2
                    {:type "text" :data-date-format "dd/mm/yyyy"
                     :ng-model "buffer.dob"
                     :bs-datepicker "" :required ""}]
                   [:button.btn {:data-toggle "datepicker"}
                    [:i.icon-calendar]]]]]
                [:div.control-group
                 [:div.controls
                  [:button.btn.btn-success
                   {:ng-click "save_profile()"}
                   "Save"]]]])}
  "/faculty" {:controller 'facultyCtrl
              :template
              (hiccup
               [:div {:modal "show_edit_box"
                      :close "close()"}
                [:div.modal-header
                 [:h3 "Please fill course information"]]
                [:div.modal-body
                 [:form.form-horizontal.well
                  {:name "profileForm"}
                  [:div.control-group
                   [:label.control-label "Title"]
                   [:div.controls
                    [:input.span3
                     {:ng-model "buffer.title" :type "text" :required "" :name "title"}]]]
                  [:div.control-group
                   [:label.control-label "Description"]
                   [:div.controls
                    [:textarea.span3
                     {:ng-model "buffer.desc"
                      :row 3
                      :name "desc"}]]]
                  [:div.control-group
                   [:div.controls
                    [:button.btn.btn-success
                     {:ng-click "save_course()"}
                     "Save"]]]]]
                [:div.modal-footer
                 [:button.btn.btn-warning.cancel
                  {:ng-click "close()"}
                  "Cancel"]]]

               [:h2 "Course list"]

               [:button.btn.btn-success
                {:ng-click "add_course_box()"}
                [:i.icon-plus " "]
                "Add course"]

               [:form.well.well-small
                {:style "margin: 30px 0px"}
                [:input.search-query
                 {:ng-model "query" :type "text"
                  :placeholder "filter list"}]]
               [:table.table.table-bordered
                [:thead
                 [:tr
                  [:th "Title"]
                  [:th "Time"]
                  [:th "Paid/Total registered"]
                  [:th "Actions"]]]
                [:tbody
                 {:ng-repeat "course in courses | filter:query | filter:session.username"}
                 [:tr
                  [:td
                   [:i.icon-info-sign.pull-right.muted
                    {:tooltip "{{course.desc}}"
                     :tooltip-placement "right"}]
                   "{{course.title}}"]
                  [:td "-"]
                  [:td "{{course.registered|count_paid_students}} / {{course.registered.length}}"]
                  [:td
                   [:i.icon-pencil
                    {:ng-click "edit_course_box(course.id)"}]
                   [:i.icon-remove.icon-danger.pull-right
                    {:style "color: #BD4247"
                     :ng-click "remove_course(course.id)"}]]]]])}

  "/student" {:controller 'studentCtrl
              :template
              (hiccup
               [:h2 "Current courses"]
               [:div {:ng-show "courses|show_payment_status:session.id"}
                [:h3 "Your've paid for {{courses|total_paid:session.id}}/{{courses|total_registered:session.id}} registered courses."]
                [:div.progress.progress-info.progress-striped.active
                 [:div.bar
                  {:style "width: {{courses|payment_percent:session.id}}%"}]]]
               [:form.well.well-small
                {:style "margin: 30px 0px"}
                [:input.search-query
                 {:ng-model "query" :type "text"
                  :placeholder "filter list"}]]
               [:table.table.table-bordered
                [:thead
                 [:tr
                  [:th "Title"]
                  [:th "Time"]
                  [:th "Actions"]]]
                [:tbody
                 {:ng-repeat "course in courses | filter:query"}
                 [:tr {:ng-class "course|registration_to_row_class:session.id"}
                  [:td
                   [:i.icon-info-sign.pull-right.muted
                    {:tooltip "{{course.desc}}"
                     :tooltip-placement "right"}]
                   "{{course.title}}"]
                  [:td "-"]
                  [:td
                   [:i.icon-ok
                    {:tooltip "Register course"
                     :tooltip-placement "right"
                     :ng-show "course|can_register:session.id"
                     :style "color: #369629"
                     :ng-click "register_course(course.id)"}]
                   [:i.icon-remove
                    {:tooltip "Unregister course"
                     :tooltip-placement "right"
                     :ng-show "course|can_remove:session.id"
                     :style "color: #BD4247"
                     :ng-click "unregister_course(course.id)"}]]]]])}

  "/accountant" {:controller 'accountantCtrl
                 :template
                 (hiccup
                  [:h2 "Current registration"]
                  [:form.well.well-small
                   {:style "margin: 30px 0px"}
                   [:input.search-query
                    {:ng-model "query" :type "text"
                     :placeholder "filter list"}]]
                  [:table.table.table-bordered
                   [:thead
                    [:tr
                     [:th "Course"]
                     [:th "Student"]
                     [:th "DOB"]
                     [:th "Actions"]]]
                   [:tbody
                    [:tr {:ng-repeat "record in registrations | filter:query"}
                     [:td
                      "{{record.course_title}}"]
                     [:td "{{record.name}}"]
                     [:td "{{record.dob}}"]
                     [:td
                      [:i.icon-ok
                       {:tooltip "Confirm payment"
                        :tooltip-placement "right"
                        :ng-hide "record.paid"
                        :style "color: #369629"
                        :ng-click "confirm_payment(record.id, record.course_id)"}]
                      [:i.icon-remove
                       {:tooltip "Unconfirm payment"
                        :tooltip-placement "right"
                        :ng-show "record.paid"
                        :style "color: #BD4247"
                        :ng-click "unconfirm_payment(record.id, record.course_id)"}]]]]])}
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
    [user-id]
    (def user (first (filter #(= user-id (:id %))
                             users.users)))
    (merge! session
            {:name "" :email "" :phone "" :dob ""} ;;clear previous session
            (select-keys user [:id :group :username :name
                               :email :phone :dob])
            {:url (:url (get users.groups (:group user)))
             :logged_in true})
    ($location.path (:url session))
    (def$ show_login_box false)))

(defcontroller emptyCtrl [])

(defcontroller profileCtrl [$scope session users]
  (def$ buffer (select-keys session
                            [:name :email :phone :dob]))

  (defn$ save_profile []
    (merge! session (select-keys $scope.buffer
                                 [:name :email :phone :dob]))
    (doseq [user users.users]
      (when (= session.id (:id user))
        (merge! user (select-keys $scope.buffer
                                  [:name :email :phone :dob]))))))

(defcontroller facultyCtrl [$scope session courses]
  (def$ session session)
  (def$ courses courses.courses)
  (def$ show_edit_box)

  ;; true if is adding course, false means editing old course
  (def$ add_mode true)

  (defn$ close []
    (def$ show_edit_box false))

  (defn$ add_course_box []
    (def$ buffer {})
    (def$ add_mode true)
    (def$ show_edit_box true))

  (defn$ edit_course_box [id]
    (def$ add_mode false)

    (def$ buffer (select-keys
                  (first (filter
                          #(= id (:id %))
                          courses.courses))
                  [:id :title :desc :registered]))
    (def$ show_edit_box true))

  (defn$ remove_course [id]
    (courses.remove_course id))

  (defn$ save_course []
    (if $scope.add_mode
      (courses.add_courses
       (merge $scope.buffer
              {:faculty session.username
               :registered []}))
      (courses.update_course $scope.buffer))
    (def$ show_edit_box false)))

(defcontroller studentCtrl [$scope session courses]
  (def$ session session)
  (def$ courses courses.courses)

  (defn$ register_course [course-id]
    (doseq [course courses.courses]
      (when (= course-id (:id course))
        (conj! (:registered course)
               {:id session.id}))))

  (defn$ unregister_course [course-id]
    (doseq [course courses.courses]
      (when (= course-id (:id course))
        (doseq [[n student] (:registered course)]
          (dissoc! (:registered course) n))))))

(defcontroller accountantCtrl [$scope session courses users]
  (def$ session session)
  (def$ courses courses.courses)

  (def$ registrations
    (for [course courses.courses
          student course.registered]
      (merge {:course_id course.id
              :course_title course.title
              :course_desc course.desc
              :paid student.paid}
             (select-keys
              (first (filter #(== (:id student) (:id %)) users.users))
              [:id :name :username :dob :email]))))

  (defn$ confirm_payment [student-id course-id]
    (doseq [course courses.courses
            :when (= course-id (:id course))
            student course.registered
            :when (= student-id (:id student))]
      (assoc! student :paid true))
    (doseq [registration $scope.registrations
            :when (= student-id (:id registration))
            :when (= course-id (:course_id registration))]
      (assoc! registration :paid true)))

  (defn$ unconfirm_payment [student-id course-id]
    (doseq [course courses.courses
            :when (= course-id (:id course))
            student course.registered
            :when (= student-id (:id student))]
      (assoc! student :paid false))
    (doseq [registration $scope.registrations
            :when (= student-id (:id registration))
            :when (= course-id (:course_id registration))]
      (assoc! registration :paid false))))

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

(defservice courses
  "Stores global courses (including registration and payment status)"
  []
  (def counter 0)
  (def! courses [])
  (def that this)

  (defn! add_courses [& courses]
    (doseq [course courses]
      (def n (inc! counter))
      (conj! that.courses (merge course {:id n}))))

  (defn! update_course [new-course]
    (doseq [course that.courses]
      (when (= (:id course) (:id new-course))
        (merge! course new-course))))

  (defn! remove_course [id]
    (doseq [[n course] that.courses]
      (when (= (:id course) id)
        (dissoc! that.courses n))))

  (this.add_courses
   {:title "Basic programming" :desc "Learn how to write hello world"
    :faculty "faculty-a"
    :registered [{:id 3 :paid true}
                 {:id 4 :paid false}
                 {:id 5 :paid true}]}
   {:title "Medium programming" :desc "Learn how to calculate 1+1"
    :faculty "faculty-a"
    :registered [{:id 3 :paid false}
                 {:id 4 :paid false}
                 {:id 5 :paid true}
                 {:id 6 :paid true}]}
   {:title "Basic drawing" :desc "Learn how to draw a line"
    :faculty "faculty-b"
    :registered [{:id 3 :paid true}
                 {:id 4 :paid false}
                 {:id 5 :paid true}
                 {:id 6 :paid true}
                 {:id 7 :paid true}]}
   {:title "Medium drawing" :desc "Learn how to draw a worm"
    :faculty "faculty-b"
    :registered []}
   {:title "Advanced drawing" :desc "Learn how to draw a chicken"
    :faculty "faculty-b"
    :registered [{:id 3 :paid true}
                 {:id 4 :paid false}
                 {:id 5 :paid true}
                 {:id 6 :paid true}
                 {:id 7 :paid true}]}))

(deffilter count_paid_students
  []
  [coll]
  (count (filter
          #(true? (:paid %))
          coll)))

(defn registered?
  "Helper function.
  Checks if a course was registered by an user."
  [course user-id]
  (= 1 (count (filter
               #(= user-id (:id %))
               (:registered course)))))

(defn paid?
  "Helper function.
  Checks if a course is paid by current user."
  [course user-id]
  (= 1 (count (filter
               #(and (= user-id (:id %))
                     (true?     (:paid %)))
               (:registered course)))))

(deffilter can_register []
  [course user-id]
  (not (registered? course user-id)))

(deffilter can_remove []
  [course user-id]
  (and (registered? course user-id)
       (not (paid? course user-id))))

(deffilter registration_to_row_class []
  [course user-id]
  (if (paid? course user-id)
    "success"
    (if (registered? course user-id)
      "warning"
      "")))

(deffilter total_paid []
  [courses user-id]
  (count (filter #(paid? % user-id) courses)))

(deffilter total_registered []
  [courses user-id]
  (count (filter #(registered? % user-id) courses)))

(defn payment-percent
  "Helper function"
  [courses user-id]
  (or (* 100 (/ (count (filter #(paid? % user-id) courses))
                (count (filter #(registered? % user-id) courses))))
      0))

(deffilter payment_percent []
  [courses user-id]
  (payment-percent courses user-id))

(deffilter show_payment_status []
  "Only show payment status if current student has some unpaid courses."
  [courses user-id]
  (let [x (payment-percent courses user-id)]
    (and (< 0 x)
         (< x 100))))
