import { useState, useEffect } from "react";
import { Hash, Database, Code, Search, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check initial theme
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    if (newIsDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 bg-card/80 backdrop-blur-xl border border-border/50 rounded-full px-4 py-2 shadow-lg">
        {/* Logo */}
        <div className="flex items-center gap-2 pr-4 border-r border-border/50">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <Hash className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-foreground hidden sm:inline">HashLookup</span>
        </div>

        {/* Nav Items */}
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="sm"
            className="rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/50 gap-2"
            onClick={() => scrollToSection("complexity")}
          >
            <Database className="w-4 h-4" />
            <span className="hidden md:inline">Complexity</span>
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            className="rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/50 gap-2"
            onClick={() => scrollToSection("database")}
          >
            <Database className="w-4 h-4" />
            <span className="hidden md:inline">Database</span>
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            className="rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/50 gap-2"
            onClick={() => scrollToSection("c-code")}
          >
            <Code className="w-4 h-4" />
            <span className="hidden md:inline">C Code</span>
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            className="rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/50 gap-2"
            onClick={() => scrollToSection("search")}
          >
            <Search className="w-4 h-4" />
            <span className="hidden md:inline">Search</span>
          </Button>
        </div>

        {/* Theme Toggle */}
        <div className="pl-4 border-l border-border/50">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full w-9 h-9 hover:bg-muted/50"
            onClick={toggleTheme}
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-accent" />
            ) : (
              <Moon className="w-4 h-4 text-primary" />
            )}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
