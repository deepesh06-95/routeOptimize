import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Calendar from './pages/Calendar';
import Chart from './pages/Chart';
import ECommerce from './pages/Dashboard/ECommerce';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import DefaultLayout from './layout/DefaultLayout';
import Timeline from './pages/Timeline/timeline';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  // Check if the current path is for SignIn or SignUp
  const isAuthPage = pathname.includes("/auth/signin") || pathname.includes("/auth/signup");

  return loading ? (
    <Loader />
  ) : (
    // Render the DefaultLayout only for non-auth pages
    isAuthPage ? (
      <Routes>
        <Route
          path="/auth/signin"
          element={
            <>
              <PageTitle title="Signin" />
              <SignIn />
            </>
          }
        />
        <Route
          path="/auth/signup"
          element={
            <>
              <PageTitle title="Signup" />
              <SignUp />
            </>
          }
        />
      </Routes>
    ) : (
      <DefaultLayout>
        <Routes>
          <Route
            index
            element={
              <>
                <PageTitle title="Dashboard" />
                <ECommerce />
              </>
            }
          />
          <Route
            path="/calendar"
            element={
              <>
                <PageTitle title="Calendar" />
                <Calendar />
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                <PageTitle title="Profile" />
                <Profile />
              </>
            }
          />
          <Route
            path="/forms/form-elements"
            element={
              <>
                <PageTitle title="Form Elements" />
                <FormElements />
              </>
            }
          />
          <Route
            path="/contact-us"
            element={
              <>
                <PageTitle title="Contact Us" />
                <FormLayout />
              </>
            }
          />
          <Route
            path="/timeline"
            element={
              <>
                <Timeline />
              </>
            }
          />
          <Route
            path="/tables"
            element={
              <>
                <PageTitle title="Tables" />
                <Tables />
              </>
            }
          />
          <Route
            path="/settings"
            element={
              <>
                <PageTitle title="Settings" />
                <Settings />
              </>
            }
          />
          <Route
            path="/chart"
            element={
              <>
                <PageTitle title="Basic Chart" />
                <Chart />
              </>
            }
          />
          <Route
            path="/ui/alerts"
            element={
              <>
                <PageTitle title="Alerts" />
                <Alerts />
              </>
            }
          />
          <Route
            path="/ui/buttons"
            element={
              <>
                <PageTitle title="Buttons" />
                <Buttons />
              </>
            }
          />
        </Routes>
      </DefaultLayout>
    )
  );
}

export default App;