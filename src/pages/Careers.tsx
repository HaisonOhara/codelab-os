import { MapPin, Clock, Briefcase, Code, Users, Rocket, Heart, Coffee } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

const jobs = [
  {
    id: 1,
    title: "Instrutor(a) de JavaScript",
    department: "Educação",
    type: "Full-time",
    location: "Remoto",
    level: "Pleno/Senior",
    description: "Buscamos um(a) desenvolvedor(a) apaixonado por ensinar para conduzir nosso curso de JavaScript.",
  },
  {
    id: 2,
    title: "Desenvolvedor(a) Full-Stack",
    department: "Produto",
    type: "Full-time",
    location: "Híbrido - SP",
    level: "Pleno",
    description: "Ajude a construir a melhor plataforma de ensino de tecnologia do Brasil.",
  },
  {
    id: 3,
    title: "Designer de Conteúdo Educacional",
    department: "Educação",
    type: "PJ",
    location: "Remoto",
    level: "Pleno",
    description: "Crie materiais didáticos envolventes e efetivos para nossos cursos.",
  },
];

const benefits = [
  {
    icon: Rocket,
    title: "Crescimento Rápido",
    description: "Oportunidades reais de evolução profissional",
  },
  {
    icon: Users,
    title: "Time de Elite",
    description: "Trabalhe com os melhores profissionais do mercado",
  },
  {
    icon: Code,
    title: "Stack Moderna",
    description: "Use as tecnologias mais atuais do mercado",
  },
  {
    icon: Heart,
    title: "Propósito",
    description: "Transforme vidas através da educação",
  },
  {
    icon: MapPin,
    title: "Trabalho Remoto",
    description: "Flexibilidade para trabalhar de onde quiser",
  },
  {
    icon: Coffee,
    title: "Work-Life Balance",
    description: "Ambiente saudável e horários flexíveis",
  },
];

const Careers = () => {
  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 to-transparent" />
        
        {/* Floating particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-bounce opacity-40" style={{ animationDelay: "0s" }} />
        <div className="absolute top-40 right-20 w-3 h-3 bg-accent rounded-full animate-bounce opacity-40" style={{ animationDelay: "0.5s" }} />
        <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-secondary rounded-full animate-bounce opacity-40" style={{ animationDelay: "1s" }} />
        
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6 animate-fade-in">
          <Badge variant="outline" className="border-secondary/50 text-secondary">
            // careers
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold">
            Construa o futuro da
            <br />
            <span className="gradient-text">educação tech</span>
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Junte-se ao nosso time e ajude a transformar a vida de milhares de desenvolvedores.
          </p>

          {/* Terminal-style message */}
          <div className="terminal-border bg-background/50 backdrop-blur-sm p-6 text-left font-mono text-sm max-w-2xl mx-auto mt-8">
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <p className="text-muted-foreground">
              <span className="text-primary">$</span> git clone https://github.com/codelab/future
            </p>
            <p className="mt-2 text-accent">
              → Cloning into 'your-career'...
            </p>
            <p className="text-muted-foreground">
              → Join a team that codes with purpose <span className="animate-terminal-blink">▮</span>
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Por que <span className="gradient-text">codeLab</span>?
            </h2>
            <p className="text-muted-foreground font-mono">
              <span className="text-primary">//</span> Benefícios e cultura
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card
                  key={index}
                  className="terminal-border p-6 hover:scale-105 transition-all duration-300 group animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Vagas <span className="gradient-text">abertas</span>
            </h2>
            <p className="text-muted-foreground font-mono">
              <span className="text-primary">$</span> npm run find-your-role
            </p>
          </div>

          <div className="space-y-6">
            {jobs.map((job, index) => (
              <Card
                key={job.id}
                className="terminal-border p-8 hover:glow-cyan transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="space-y-3 flex-1">
                    <div className="flex items-center flex-wrap gap-2">
                      <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                        {job.title}
                      </h3>
                      <Badge variant="outline" className="border-primary/50 text-primary">
                        {job.level}
                      </Badge>
                    </div>

                    <p className="text-muted-foreground">
                      {job.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground font-mono">
                      <span className="flex items-center space-x-1">
                        <Briefcase className="w-4 h-4" />
                        <span>{job.department}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{job.type}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </span>
                    </div>
                  </div>

                  <Button className="terminal-border font-mono whitespace-nowrap">
                    Candidatar-se →
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* No perfect match */}
          <div className="mt-12 text-center">
            <Card className="terminal-border p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold mb-3">
                Não encontrou a vaga ideal?
              </h3>
              <p className="text-muted-foreground mb-6">
                Estamos sempre em busca de talentos excepcionais. Envie seu currículo e vamos conversar!
              </p>
              <Button variant="outline" className="terminal-border font-mono">
                Enviar currículo espontâneo
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
