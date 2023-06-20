import { createClient } from '@supabase/supabase-js';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const supabase = createClient(
  "https://jktiyufbqkbomnsychbf.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImprdGl5dWZicWtib21uc3ljaGJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY5NzM4NDcsImV4cCI6MjAwMjU0OTg0N30.Pd6CPCGtJsRRZCnOlY9-VrVE_y6aYZP7_LNPsBqBris"
);

function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuthStateChange = (event, session) => {
      if (event === 'SIGNED_IN') {
        navigate('/success');
      }
    };

    supabase.auth.onAuthStateChange(handleAuthStateChange);

    return () => {
      // No need to unsubscribe here
    };
  }, [navigate]);

  return (
    <div className="App">
      <header className="App-header">
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme="dark"
          providers={[]}
        />
      </header>
    </div>
  );
}

export default Login;
