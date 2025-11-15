import { Code, Users, Target, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";

const values = [
  {
    icon: Code,
    title: "Code First",
    description: "Acreditamos que a melhor forma de aprender é codando. Projetos reais desde o dia 1.",
  },
  {
    icon: Users,
    title: "Comunidade",
    description: "Aprendizado colaborativo. Crescemos juntos, compartilhamos conhecimento.",
  },
  {
    icon: Target,
    title: "Foco no Mercado",
    description: "Cursos alinhados com as demandas reais do mercado tech brasileiro.",
  },
  {
    icon: Zap,
    title: "Aprendizado Ágil",
    description: "Metodologia prática e intensiva. Transforme sua carreira em semanas, não anos.",
  },
];

const stats = [
  { value: "500+", label: "Alunos formados" },
  { value: "95%", label: "Taxa de empregabilidade" },
  { value: "4.9/5", label: "Avaliação média" },
  { value: "100%", label: "Online e ao vivo" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6 animate-fade-in">
          <Badge variant="outline" className="border-primary/50 text-primary">
            // about us
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold">
            Transformando <span className="gradient-text">devs iniciantes</span>
            <br />
            em profissionais de mercado
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A codeLab nasceu da missão de democratizar o ensino de tecnologia no Brasil. 
            Acreditamos que qualquer pessoa, com dedicação e o método certo, pode se tornar 
            um desenvolvedor de sucesso.
          </p>

          {/* Terminal-style quote */}
          <div className="terminal-border bg-background/50 backdrop-blur-sm p-6 text-left font-mono text-sm max-w-2xl mx-auto mt-8">
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <p className="text-muted-foreground">
              <span className="text-primary">$</span> cat missao.txt
            </p>
            <p className="mt-2 text-foreground">
              "Capacitar desenvolvedores com habilidades práticas e demandadas pelo mercado, 
              através de educação de qualidade, acessível e focada em resultados reais."
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="terminal-border p-6 text-center hover:glow-cyan transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-mono">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nossos <span className="gradient-text">valores</span>
            </h2>
            <p className="text-muted-foreground font-mono">
              <span className="text-primary">//</span> O que nos move
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="terminal-border p-8 hover:scale-105 transition-all duration-300 group animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Time de <span className="gradient-text">instrutores</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Profissionais atuantes no mercado, com experiência real em grandes empresas de tecnologia.
          </p>
          
          <div className="terminal-border bg-background p-6 text-left font-mono text-sm max-w-xl mx-auto">
            <p className="text-primary">
              <span className="animate-terminal-blink">▮</span> ls -la /team/
            </p>
            <div className="mt-4 space-y-1 text-muted-foreground">
              <p>→ Senior Developers @ FAANG</p>
              <p>→ Tech Leads @ Startups</p>
              <p>→ Open Source Contributors</p>
              <p>→ Award-winning Educators</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
