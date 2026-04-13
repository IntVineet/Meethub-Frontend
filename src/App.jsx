import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { SocketProvider } from "./context/SocketContext";
import PrivateRoute from "./components/common/PrivateRoute";

import LandingPage from "./pages/public/LandingPage";
import AuthPage from "./pages/public/AuthPage";
import ForgotPassword from "./pages/public/ForgotPassword";
import ResetPassword from "./pages/public/ResetPassword";
import AuthSuccess from "./pages/public/AuthSuccess";

import Dashboard from "./pages/dashboard/Dashboard";
import CreateMeeting from "./pages/dashboard/CreateMeeting";
import JoinMeeting from "./pages/dashboard/JoinMeeting";

import WaitingRoom from "./pages/meeting/WaitingRoom";
import MeetingRoom from "./pages/meeting/MeetingRoom";

import Profile from "./pages/user/Profile";
import EditProfile from "./pages/user/EditProfile";
import ChangePassword from "./pages/user/ChangePassword";

import MeetingHistory from "./pages/meetings/MeetingHistory";
import MeetingDetails from "./pages/meetings/MeetingDetails";

import Settings from "./pages/settings/Settings";

import NotFound from "./pages/errors/NotFound";
import Unauthorized from "./pages/errors/Unauthorized";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <SocketProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<AuthPage />} />
            <Route path="/signup" element={<AuthPage />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/auth-success" element={<AuthSuccess />} />
            <Route path="/unauthorized" element={<Unauthorized />} />

            <Route element={<PrivateRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/create-meeting" element={<CreateMeeting />} />
              <Route path="/join-meeting" element={<JoinMeeting />} />
              <Route path="/waiting/:roomId" element={<WaitingRoom />} />
              <Route path="/meeting/:roomId" element={<MeetingRoom />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/profile/edit" element={<EditProfile />} />
              <Route path="/profile/password" element={<ChangePassword />} />
              <Route path="/meetings/history" element={<MeetingHistory />} />
              <Route path="/meetings/:id" element={<MeetingDetails />} />
              <Route path="/settings" element={<Settings />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </SocketProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
