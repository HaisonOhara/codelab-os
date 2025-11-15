import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  ArrowLeft, 
  Code2, 
  Database, 
  Smartphone, 
  Cloud, 
  Brain, 
  Rocket,
  Clock,
  BarChart3,
  CheckCircle2,
  Terminal
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const coursesData = {
  "web-fullstack": {
    icon: Code2,
    title: "Desenvolvimento Web Full-Stack",
    description: "Domine React, Node.js, TypeScript e construa aplicações modernas do zero.",
    level: "Intermediário",
    duration: "12 semanas",
    color: "primary",
    detailedDescription: "Aprenda a criar aplicações web completas, desde o frontend até o backend. Você vai dominar React para interfaces modernas, Node.js para APIs robustas e TypeScript para código type-safe.",
    modules: [
      "Fundamentos de React e Hooks",
      "TypeScript avançado",
      "Node.js e Express",
      "Banco de dados (SQL e NoSQL)",
      "Autenticação e Segurança",
      "Deploy e DevOps básico"
    ],
    skills: ["React", "Node.js", "TypeScript", "PostgreSQL", "MongoDB", "REST APIs"]
  },
  "mobile-react-native": {
    icon: Smartphone,
    title: "Mobile com React Native",
    description: "Crie apps nativos para iOS e Android com JavaScript e React.",
    level: "Intermediário",
    duration: "10 semanas",
    color: "accent",
    detailedDescription: "Desenvolva aplicativos móveis nativos usando React Native. Aprenda a criar interfaces fluidas, integrar APIs e publicar na App Store e Google Play.",
    modules: [
      "Fundamentos React Native",
      "Navigation e Routing",
      "Animações e Gestos",
      "Integração com APIs",
      "Push Notifications",
      "Publicação nas Stores"
    ],
    skills: ["React Native", "Expo", "Redux", "AsyncStorage", "Native Modules"]
  },
  "backend-apis": {
    icon: Database,
    title: "Backend & APIs",
    description: "Arquitetura de microsserviços, bancos de dados e APIs escaláveis.",
    level: "Avançado",
    duration: "14 semanas",
    color: "secondary",
    detailedDescription: "Mergulhe profundamente em arquitetura backend. Aprenda a construir APIs escaláveis, implementar microsserviços e otimizar performance de banco de dados.",
    modules: [
      "Arquitetura de Microsserviços",
      "Design de APIs RESTful e GraphQL",
      "Otimização de Queries",
      "Cache e Redis",
      "Message Queues",
      "Testes e Documentação"
    ],
    skills: ["Node.js", "GraphQL", "PostgreSQL", "Redis", "Docker", "Microservices"]
  },
  "devops-cloud": {
    icon: Cloud,
    title: "DevOps & Cloud",
    description: "Deploy, CI/CD, Docker, Kubernetes e infraestrutura moderna.",
    level: "Avançado",
    duration: "16 semanas",
    color: "success",
    detailedDescription: "Domine ferramentas e práticas DevOps modernas. Automatize deploys, gerencie infraestrutura como código e escale aplicações na cloud.",
    modules: [
      "Docker e Containerização",
      "Kubernetes e Orquestração",
      "CI/CD com GitHub Actions",
      "AWS/GCP fundamentals",
      "Terraform e IaC",
      "Monitoring e Observability"
    ],
    skills: ["Docker", "Kubernetes", "AWS", "Terraform", "CI/CD", "Monitoring"]
  },
  "machine-learning": {
    icon: Brain,
    title: "Machine Learning para Devs",
    description: "IA e ML aplicado: modelos, APIs e integração em aplicações reais.",
    level: "Avançado",
    duration: "18 semanas",
    color: "warning",
    detailedDescription: "Integre inteligência artificial em suas aplicações. Aprenda Machine Learning aplicado, desde conceitos até implementação prática em projetos reais.",
    modules: [
      "Fundamentos de ML",
      "Python para Data Science",
      "TensorFlow e PyTorch",
      "APIs de ML (OpenAI, Hugging Face)",
      "MLOps e Deploy de Modelos",
      "Ética em IA"
    ],
    skills: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "ML APIs", "Data Analysis"]
  },
  "fundamentos": {
    icon: Rocket,
    title: "Fundamentos de Programação",
    description: "Aprenda lógica, algoritmos e sua primeira linguagem do zero.",
    level: "Iniciante",
    duration: "8 semanas",
    color: "primary",
    detailedDescription: "Comece sua jornada na programação do absoluto zero. Aprenda lógica, algoritmos e domine os fundamentos que todo desenvolvedor precisa.",
    modules: [
      "Lógica de Programação",
      "Estruturas de Dados",
      "Algoritmos Fundamentais",
      "JavaScript Básico",
      "Git e GitHub",
      "Primeiro Projeto Completo"
    ],
    skills: ["JavaScript", "HTML", "CSS", "Git", "Algoritmos", "Problem Solving"]
  }
};

const CourseDetail = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const { toast } = useToast();
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const course = courseId ? coursesData[courseId as keyof typeof coursesData] : null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "✓ Solicitação enviada!",
        description: "Entraremos em contato em breve via WhatsApp.",
      });
      setPhone("");
      setIsSubmitting(false);
    }, 1000);
  };

  if (!course) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404: Curso não encontrado</h1>
          <Link to="/">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const Icon = course.icon;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link to="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              <span className="font-mono">cd ..</span>
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-start gap-6">
            <div className={`w-16 h-16 rounded-xl bg-${course.color}/10 flex items-center justify-center shrink-0`}>
              <Icon className={`w-8 h-8 text-${course.color}`} />
            </div>
            <div className="space-y-4 flex-1">
              <div className="flex items-center gap-3 flex-wrap">
                <Badge variant="outline" className="border-primary/50 text-primary">
                  {course.level}
                </Badge>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  {course.duration}
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold gradient-text">
                {course.title}
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl">
                {course.detailedDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid lg:grid-cols-3 gap-8">
        {/* Left Column - Course Info */}
        <div className="lg:col-span-2 space-y-8">
          {/* Modules */}
          <Card className="terminal-border p-6">
            <div className="flex items-center gap-2 mb-6">
              <Terminal className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-bold">Módulos do Curso</h2>
            </div>
            <div className="space-y-3">
              {course.modules.map((module, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/5 transition-colors">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-mono text-sm text-muted-foreground">módulo {index + 1}</p>
                    <p className="font-medium">{module}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Skills */}
          <Card className="terminal-border p-6">
            <div className="flex items-center gap-2 mb-6">
              <BarChart3 className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-bold">Tecnologias</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {course.skills.map((skill, index) => (
                <Badge key={index} variant="secondary" className="font-mono">
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        </div>

        {/* Right Column - Contact Form */}
        <div className="lg:col-span-1">
          <Card className="terminal-border p-6 sticky top-24">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2">Interessado?</h3>
                <p className="text-sm text-muted-foreground">
                  Deixe seu telefone e entraremos em contato
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="font-mono text-xs text-muted-foreground">
                    // seu telefone
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(11) 99999-9999"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="font-mono"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="font-mono">enviando...</span>
                  ) : (
                    <span className="font-mono">git push --contact</span>
                  )}
                </Button>
              </form>

              <div className="pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground font-mono">
                  <span className="text-primary">$</span> Resposta em até 24h
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
