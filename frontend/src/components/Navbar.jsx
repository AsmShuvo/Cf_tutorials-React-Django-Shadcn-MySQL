import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../components/ui/sheet';
import { Menu, Home, Book, LogIn } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: Book },
    { name: 'Tutorials', path: '/tutorials', icon: Book },
    { name: 'Login', path: '/login', icon: LogIn },
  ];

  const SidebarContent = () => {
    return (
      <div className="flex h-full flex-col space-y-4 py-4">
        <div className="px-4">
          <h2 className="text-xl font-bold">Codeforces Tutorials</h2>
        </div>
        <nav className="flex-1 space-y-2">
          {navLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive
                    ? 'bg-accent text-accent-foreground'
                    : 'hover:bg-accent hover:text-accent-foreground'
                }`
              }
            >
              <item.icon className="h-5 w-5" />
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    );
  };

  return (
    <header className="sticky top-0 z-50 bg-background border-b">
      <div className="container mx-auto flex items-center justify-between">
        {/* Desktop Sidebar */}
        <aside className="hidden md:block w-64 bg-background border-r h-screen fixed top-0 left-0">
          <SidebarContent />
        </aside>

        {/* Mobile Header */}
        <div className="flex items-center space-x-4">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle sidebar</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 p-0">
              <SidebarContent />
            </SheetContent>
          </Sheet> 
        </div>

        {/* Desktop Login Button
        <div className="hidden md:flex items-center space-x-2">
          <NavLink to="/login">
            <Button>
              <LogIn className="h-5 w-5 mr-1" /> Login
            </Button>
          </NavLink>
        </div> */}
      </div>
    </header>
  );
};

export default Navbar;