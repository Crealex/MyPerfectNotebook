import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HomePage } from "./pages/Home";
import { NewNotePage } from "./pages/NewNote";
import { SettingsPage } from "./pages/Settings";
import { HomeIcon, Plus, SettingsIcon } from "lucide-react";
import { ThemeProvider } from "./myComponents/themeProvider";
import { ModeToggle } from "./myComponents/ModeToggle";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-background ">
          {/* Navigation */}
          <nav className="border-b">
            <div className="flex justify-between p-4">
              <div className="flex gap-4">
                <Link to="/">
                  <Button>
                    <HomeIcon />
                  </Button>
                </Link>
                <Link to="/new">
                  <Button>
                    <Plus />
                  </Button>
                </Link>
                <Link to="/settings">
                  <Button>
                    <SettingsIcon />
                  </Button>
                </Link>
              </div>
              <ModeToggle />
            </div>
          </nav>

          {/* Routes */}
          <main className="max-w-3/4 mx-auto">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/new" element={<NewNotePage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
