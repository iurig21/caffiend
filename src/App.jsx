import Layout from "./components/Layout";
import Hero from "./components/Hero"
import CoffeForm from "./components/CoffeeForm"
import Stats from "./components/Stats"
import History from "./components/History"
import '/src/global.css'
import '/src/fanta.css'
import { useAuth } from "./Context/AuthContext";

function App() {

  const {GlobalUser,globalData,isLoading} = useAuth()
  const isAuthenticated = GlobalUser;
  const isData = globalData && !!Object.keys(globalData || {}).length

  const authenticatedContent = (
    <div>
      <Stats/>
      <History/>
    </div>
  )

  return (
    <div>
        <Layout>
           <Hero/>
           <CoffeForm isAuthenticated={isAuthenticated}/>
           {(isAuthenticated && isLoading) && (
            <p> Loading data... </p>
           )}
           {(isAuthenticated && isData) && authenticatedContent}
        </Layout>
    </div>
  )
}

export default App
