import './App.css';
import {useAuth0} from "@auth0/auth0-react"
function App() {
  const{loginWithRedirect,logout,user,isAuthenticated,} = useAuth0()
  return (
    <div className="App">
      <h1>Auto Authentication</h1>
      
      {!isAuthenticated && (
                <button onClick={loginWithRedirect}>login</button>
      )}
      {isAuthenticated && (
        <button onClick={logout}>logout</button>
      )}
            
              <h3>{isAuthenticated ? "user is logged in ": "user is not logged in"}</h3>
              {isAuthenticated && (
              <pre style={{textAlign: "start"}}>{JSON.stringify(user,null, 5)}</pre>
              )}
    </div>
    
  );
}

export default App;
