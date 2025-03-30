import { React, Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProtectRoute from './components/auth/ProtectRoute'
import { LayoutLoader } from './components/layout/Loaders'

const Home = lazy(() => import("./pages/Home"))
const Login = lazy(() => import("./pages/Login"))
const Chat = lazy(() => import("./pages/Chat"))
const Group = lazy(() => import("./pages/Groups"))
const NotFound = lazy(() => import("./pages/NotFound"))


//Admin page Material
const AdminLogin = lazy(() => import("./pages/admin/AdminLogin"))
const Dashboard = lazy(() => import("./pages/admin/Dashboad"))
const UserManagement = lazy(() => import("./pages/admin/UserManagement"))
const ChatManagement = lazy(() => import("./pages/admin/ChatManagement"))
const MessageManagements = lazy(() => import("./pages/admin/MessageManagements"))

let user = true;

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LayoutLoader/>}>
        <Routes>
          <Route element={<ProtectRoute user={user} />}>
            <Route path="/" element={<Home />} />
            <Route path="/chat/:chatId" element={<Chat />} />
            <Route path="/groups" element={<Group />} />
          </Route>

          <Route path="/login" element={<ProtectRoute user={!user} redirect="/"><Login /></ProtectRoute>} />

          //Admin
          <Route path="/admin" element={<AdminLogin/>} />  
          <Route path="/admin/dashboard" element={<Dashboard/>} />
          <Route path="/admin/users-management" element={<UserManagement/>} />
          <Route path="/admin/Chats-management" element={<ChatManagement/>} />
          <Route path="/admin/Messages-management" element={<MessageManagements/>} />


          <Route path="*" element={<NotFound />} />

        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App