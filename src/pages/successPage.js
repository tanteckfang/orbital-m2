import { createClient } from '@supabase/supabase-js';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const supabase = createClient(
  "https://jktiyufbqkbomnsychbf.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImprdGl5dWZicWtib21uc3ljaGJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY5NzM4NDcsImV4cCI6MjAwMjU0OTg0N30.Pd6CPCGtJsRRZCnOlY9-VrVE_y6aYZP7_LNPsBqBris"
);

function Success() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    async function checkUser() {
      const currentUser = await supabase.auth.getUser();
      if (currentUser) {
        setUser(currentUser);
      } else {
        navigate("/"); // Redirect to login page
      }
    }
    checkUser();
  }, [navigate]);

  async function signOutUser() {
    const { error } = await supabase.auth.signOut();
    navigate("/");
  }

  return (
    <div className="App">
      <header className="App-header">
        {Object.keys(user).length !== 0 ? (
          <>
            <h1>Success</h1>
            <button onClick={signOutUser}>Sign Out</button>
          </>
        ) : (
          <>
            <h1>User is not logged in</h1>
            <button onClick={() => navigate("/")}>Go Back Home!</button>
          </>
        )}
      </header>
    </div>
  );
}

export default Success;
