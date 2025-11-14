import { Terminal, GitBranch, Users, Zap } from "lucide-react";

const features = [
  {
    icon: Terminal,
    title: "Learn by Coding",
    description: "Nada de teoria sem prática. Cada aula inclui desafios reais e projetos para portfolio.",
  },
  {
    icon: GitBranch,
    title: "Code Review Real",
    description: "Seu código revisado por devs experientes. Feedback detalhado e dicas de mercado.",
  },
  {
    icon: Users,
    title: "Comunidade Ativa",
    description: "Discord com milhares de devs, pair programming e networking constante.",
  },
  {
    icon: Zap,
    title: "Sempre Atualizado",
    description: "Conteúdo atualizado com as últimas tecnologias e tendências do mercado.",
  },
];

const Features = () => {
  return (
    <section className="py-20 px-4 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Por que <span className="gradient-text">codeLab</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Uma plataforma feita por devs, para devs
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="terminal-border rounded-lg p-8 hover:glow-pink transition-all duration-300"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Code Snippet Decoration */}
        <div className="mt-16 terminal-border rounded-lg p-6 max-w-3xl mx-auto">
          <div className="font-mono text-sm space-y-2">
            <div className="flex gap-2">
              <span className="text-secondary">const</span>
              <span className="text-foreground">sucesso</span>
              <span className="text-muted-foreground">=</span>
              <span className="text-accent">await</span>
              <span className="text-foreground">codeLab</span>
              <span className="text-muted-foreground">.</span>
              <span className="text-warning">aprender</span>
              <span className="text-muted-foreground">();</span>
            </div>
            <div className="flex gap-2">
              <span className="text-foreground">console</span>
              <span className="text-muted-foreground">.</span>
              <span className="text-warning">log</span>
              <span className="text-muted-foreground">(</span>
              <span className="text-success">"🚀 Carreira decolando!"</span>
              <span className="text-muted-foreground">);</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
