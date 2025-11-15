import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Terminal, Code2, Sparkles } from "lucide-react";
import logo from "@/assets/codelab-logo.jpeg";

const Hero = () => {
  const [terminalText, setTerminalText] = useState("");
  const fullText = "$ npm install knowledge --save-dev";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTerminalText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px] animate-glow-pulse" style={{ animationDelay: "1s" }} />

      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8 animate-fade-in">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="relative group">
            {/* Glow effect behind logo */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-glow-pulse" />
            
            {/* Logo container */}
            <div className="relative">
              <div className="terminal-border rounded-2xl p-2 bg-background/50 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                <img 
                  src={logo} 
                  alt="codeLab" 
                  className="w-40 h-40 md:w-48 md:h-48 object-contain rounded-xl" 
                />
              </div>
              
              {/* Floating particles */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full animate-bounce opacity-60" style={{ animationDelay: "0s" }} />
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-accent rounded-full animate-bounce opacity-60" style={{ animationDelay: "0.3s" }} />
              <div className="absolute top-1/2 -right-4 w-2 h-2 bg-secondary rounded-full animate-bounce opacity-60" style={{ animationDelay: "0.6s" }} />
            </div>
          </div>
        </div>

        {/* Terminal Window */}
        <div className="terminal-border rounded-lg p-6 max-w-3xl mx-auto mb-8 glow-cyan">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-destructive" />
              <div className="w-3 h-3 rounded-full bg-warning" />
              <div className="w-3 h-3 rounded-full bg-success" />
            </div>
            <span className="text-muted-foreground text-sm ml-2">terminal</span>
          </div>
          <div className="font-mono text-left">
            <p className="text-foreground">
              {terminalText}
              <span className="animate-terminal-blink">_</span>
            </p>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          <span className="gradient-text">Código</span> que{" "}
          <span className="gradient-text">transforma</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
          Aprenda tecnologia de verdade. Do jeito que os desenvolvedores aprendem: 
          <span className="text-primary font-semibold"> fazendo</span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Button size="lg" className="group relative overflow-hidden glow-cyan">
            <span className="relative z-10 flex items-center gap-2">
              <Code2 className="w-5 h-5" />
              Explorar Cursos
            </span>
          </Button>
          
          <Button size="lg" variant="outline" className="border-primary/50 hover:border-primary hover:bg-primary/10">
            <Terminal className="w-5 h-5 mr-2" />
            Ver Demo
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 pt-16 max-w-3xl mx-auto">
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-primary">50+</div>
            <div className="text-sm text-muted-foreground">Cursos</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-accent">10k+</div>
            <div className="text-sm text-muted-foreground">Devs Ativos</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-secondary">100%</div>
            <div className="text-sm text-muted-foreground">Prático</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
