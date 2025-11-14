import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Smartphone, Cloud, Brain, Rocket } from "lucide-react";

const courses = [
  {
    icon: Code2,
    title: "Desenvolvimento Web Full-Stack",
    description: "Domine React, Node.js, TypeScript e construa aplicações modernas do zero.",
    level: "Intermediário",
    duration: "12 semanas",
    color: "primary",
  },
  {
    icon: Smartphone,
    title: "Mobile com React Native",
    description: "Crie apps nativos para iOS e Android com JavaScript e React.",
    level: "Intermediário",
    duration: "10 semanas",
    color: "accent",
  },
  {
    icon: Database,
    title: "Backend & APIs",
    description: "Arquitetura de microsserviços, bancos de dados e APIs escaláveis.",
    level: "Avançado",
    duration: "14 semanas",
    color: "secondary",
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud",
    description: "Deploy, CI/CD, Docker, Kubernetes e infraestrutura moderna.",
    level: "Avançado",
    duration: "16 semanas",
    color: "success",
  },
  {
    icon: Brain,
    title: "Machine Learning para Devs",
    description: "IA e ML aplicado: modelos, APIs e integração em aplicações reais.",
    level: "Avançado",
    duration: "18 semanas",
    color: "warning",
  },
  {
    icon: Rocket,
    title: "Fundamentos de Programação",
    description: "Aprenda lógica, algoritmos e sua primeira linguagem do zero.",
    level: "Iniciante",
    duration: "8 semanas",
    color: "primary",
  },
];

const Courses = () => {
  return (
    <section id="courses" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="border-primary/50 text-primary">
            // cursos disponíveis
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold">
            Escolha seu <span className="gradient-text">path</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Todos os cursos incluem projetos reais, code reviews e certificação
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => {
            const Icon = course.icon;
            return (
              <Card
                key={index}
                className="terminal-border p-6 hover:scale-105 transition-all duration-300 cursor-pointer group hover:glow-cyan"
              >
                <div className="space-y-4">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-lg bg-${course.color}/10 flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 text-${course.color}`} />
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {course.description}
                    </p>
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <Badge variant="secondary" className="text-xs">
                      {course.level}
                    </Badge>
                    <span className="text-xs text-muted-foreground font-mono">
                      {course.duration}
                    </span>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground font-mono">
            <span className="text-primary">$</span> cat cursos.json | grep "seu-interesse"
          </p>
        </div>
      </div>
    </section>
  );
};

export default Courses;
