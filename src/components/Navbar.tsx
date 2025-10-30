import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/appdost-logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", path: "/" },
    { name: "Services", href: "#services", path: "/" },
    { name: "About", href: "#about", path: "/" },
    { name: "Projects", href: "#projects", path: "/" },
    { name: "Contact", href: "/contact", path: "/contact" },
  ];

  const handleNavClick = (link: typeof navLinks[0]) => {
    if (link.path === "/contact") {
      navigate("/contact");
      setIsMobileMenuOpen(false);
    } else if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
      setIsMobileMenuOpen(false);
    } else {
      document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => {
              e.preventDefault();
              if (location.pathname !== "/") {
                navigate("/");
              } else {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="flex items-center space-x-3 group"
          >
            <img 
              src={logo} 
              alt="AppDost Logo" 
              className="h-10 w-10 md:h-12 md:w-12 transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-xl md:text-2xl font-bold gradient-text">
              AppDost
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link)}
                className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
            <Button 
              variant="default" 
              className="gradient-primary"
              onClick={() => navigate("/contact")}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 bg-background/95 backdrop-blur-md border-t animate-slide-up">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link)}
                className="block w-full text-left py-3 text-foreground/80 hover:text-primary transition-colors duration-200 font-medium"
              >
                {link.name}
              </button>
            ))}
            <Button
              variant="default"
              className="gradient-primary w-full mt-4"
              onClick={() => {
                navigate("/contact");
                setIsMobileMenuOpen(false);
              }}
            >
              Get Started
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
