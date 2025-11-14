import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import logo from "@/assets/codelab-logo.jpeg";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={logo} alt="codeLab" className="w-12 h-12 object-contain" />
              <span className="font-bold text-xl">codeLab</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Transformando devs iniciantes em profissionais completos.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Cursos</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-foreground cursor-pointer transition-colors">Web Development</li>
              <li className="hover:text-foreground cursor-pointer transition-colors">Mobile</li>
              <li className="hover:text-foreground cursor-pointer transition-colors">Backend</li>
              <li className="hover:text-foreground cursor-pointer transition-colors">DevOps</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-primary">Empresa</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-foreground cursor-pointer transition-colors">Sobre</li>
              <li className="hover:text-foreground cursor-pointer transition-colors">Blog</li>
              <li className="hover:text-foreground cursor-pointer transition-colors">Carreiras</li>
              <li className="hover:text-foreground cursor-pointer transition-colors">Contato</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Comunidade</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-card hover:bg-primary/10 flex items-center justify-center transition-colors group">
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-card hover:bg-primary/10 flex items-center justify-center transition-colors group">
                <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-card hover:bg-primary/10 flex items-center justify-center transition-colors group">
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-card hover:bg-primary/10 flex items-center justify-center transition-colors group">
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
            <p className="text-xs text-muted-foreground mt-6 font-mono">
              <span className="text-primary">$</span> git commit -m "keep learning"
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} codeLab. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
