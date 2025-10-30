import { Mail, LinkedinIcon, Github, Twitter } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: LinkedinIcon, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <footer id="contact" className="bg-muted/30 border-t">
      <div className="section-container py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="gradient-primary rounded-lg p-2">
                <span className="text-white font-bold text-xl">AD</span>
              </div>
              <span className="text-2xl font-bold gradient-text">AppDost</span>
            </div>
            <p className="text-muted-foreground">
              Transform Your Ideas Into Digital Reality. Your trusted partner
              for comprehensive IT solutions.
            </p>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Mail className="h-4 w-4" />
              <a
                href="mailto:hr@appdost.in"
                className="hover:text-primary transition-colors"
              >
                hr@appdost.in
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-card border rounded-full p-3 hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 AppDost. All Rights Reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Founded in 2025 | Made with ❤️ by AppDost
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
