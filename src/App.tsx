import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HomePage } from "./pages/Home";
import { NewNotePage } from "./pages/NewNote";
import { SettingsPage } from "./pages/Settings";
import { HomeIcon, Plus, SettingsIcon } from "lucide-react";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background">
        {/* Navigation */}
        <nav className="border-b">
          <div className="flex gap-4 p-4">
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
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/new" element={<NewNotePage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
