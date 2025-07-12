import { Route  , Routes} from "react-router-dom"
import User from "./pages/User";
import Home from "./pages/Home";
import Layout from "./Layout/Layout";
import Setlike from "./pages/Setlike";
import Settings from "./pages/Settings";
import Notfound from "./components/Notfaund";
import Notification from "./pages/Notification";

function App() {

  return (
    <>
         <Routes>
                <Route path="/" element={<Layout><Home/></Layout>} />
                <Route path="/notification" element={<Layout><Notification/></Layout>} />
                <Route path="/settings" element={<Layout><Settings/></Layout>} />
                <Route path="/user" element={<User/>} />
                <Route path="/bylike" element={<Layout><Setlike/></Layout>} />
                <Route path="*" element={<Notfound/>} />
         </Routes>
    </>
  )
}

export default App
