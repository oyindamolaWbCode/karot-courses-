import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ErrorPage from "./screens/ErrorPage";
import { ToastContainer } from "react-toastify";
import Loadable from "react-loadable";
import PreLoader from "./components/loader/Preloader";
import "react-toastify/dist/ReactToastify.css";

const AdminLogin = Loadable({
  loader: () => import("./screens/AdminLogin"),
  loading: PreLoader,
});
const AdminLayout = Loadable({
  loader: () => import("./components/layouts/AdminLayout"),
  loading: PreLoader,
});
const Overviewpage = Loadable({
  loader: () => import("./screens/Overviewpage"),
  loading: PreLoader,
});
const Parentspage = Loadable({
  loader: () => import("./screens/ParentsPage"),
  loading: PreLoader,
});
const Studentspage = Loadable({
  loader: () => import("./screens/StudentsPage"),
  loading: PreLoader,
});
const Coursespage = Loadable({
  loader: () => import("./screens/CoursesPage"),
  loading: PreLoader,
});
const SubscriptionPage = Loadable({
  loader: () => import("./screens/SubscriptionPage"),
  loading: PreLoader,
});
const AnalyticsPage = Loadable({
  loader: () => import("./screens/AnalyticsPage"),
  loading: PreLoader,
});
const SettingsPage = Loadable({
  loader: () => import("./screens/SettingsPage"),
  loading: PreLoader,
});

const SingleParentPage = Loadable({
  loader: () => import("./screens/SingleParent"),
  loading: PreLoader,
});
const SingleStudentPage = Loadable({
  loader: () => import("./screens/SingleStudent"),
  loading: PreLoader,
});

const CreateCourse = Loadable({
  loader: () => import("./screens/CreateCourse"),
  loading: PreLoader,
});

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<AdminLogin />} />
          <Route path="*" element={<ErrorPage />} />

          <Route
            path="/admin"
            element={<Navigate replace to="/admin/overview" />}
          />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="overview" element={<Overviewpage />} />
            <Route path="parents" element={<Parentspage />} />
            <Route path="students" element={<Studentspage />} />
            <Route path="courses" element={<Coursespage />} />
            <Route path="subscription" element={<SubscriptionPage />} />
            <Route path="analytics" element={<AnalyticsPage />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="parent/:id" element={<SingleParentPage />} />
            <Route path="student/:id" element={<SingleStudentPage />} />
            <Route path="create-course" element={<CreateCourse />} />
          </Route>
        </Routes>
      </Router>

      <ToastContainer />
    </>
  );
}
