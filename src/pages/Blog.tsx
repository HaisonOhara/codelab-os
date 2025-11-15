import { Calendar, Clock, ArrowRight, Code, TrendingUp, Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

const blogPosts = [
  {
    id: 1,
    title: "Como Aprender Programação do Zero em 2024",
    excerpt: "Um guia completo para iniciantes que querem entrar no mundo da programação. Descubra o caminho ideal para sua carreira tech.",
    category: "Iniciantes",
    icon: Lightbulb,
    date: "15 Nov 2024",
    readTime: "5 min",
    featured: true,
  },
  {
    id: 2,
    title: "As 10 Linguagens Mais Demandadas do Mercado",
    excerpt: "Análise detalhada das tecnologias mais procuradas pelas empresas brasileiras em 2024.",
    category: "Mercado",
    icon: TrendingUp,
    date: "12 Nov 2024",
    readTime: "8 min",
    featured: true,
  },
  {
    id: 3,
    title: "Clean Code: Princípios que Todo Dev Precisa Saber",
    excerpt: "Escrever código limpo é uma habilidade essencial. Veja os princípios fundamentais que vão transformar seu código.",
    category: "Boas Práticas",
    icon: Code,
    date: "08 Nov 2024",
    readTime: "6 min",
    featured: false,
  },
  {
    id: 4,
    title: "Algoritmos e Estruturas de Dados Essenciais",
    excerpt: "Domine os fundamentos que são cobrados em entrevistas técnicas das melhores empresas.",
    category: "Fundamentos",
    icon: Code,
    date: "05 Nov 2024",
    readTime: "10 min",
    featured: false,
  },
  {
    id: 5,
    title: "Como Montar um Portfólio que Impressiona Recrutadores",
    excerpt: "Dicas práticas para criar projetos que destacam suas habilidades e chamam atenção no mercado.",
    category: "Carreira",
    icon: TrendingUp,
    date: "01 Nov 2024",
    readTime: "7 min",
    featured: false,
  },
  {
    id: 6,
    title: "Git e GitHub: Guia Completo para Iniciantes",
    excerpt: "Aprenda a versionar seu código como um profissional e colaborar em projetos open source.",
    category: "Ferramentas",
    icon: Code,
    date: "28 Out 2024",
    readTime: "9 min",
    featured: false,
  },
];

const Blog = () => {
  const featuredPosts = blogPosts.filter((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6 animate-fade-in">
          <Badge variant="outline" className="border-accent/50 text-accent">
            // blog
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold">
            Conteúdo <span className="gradient-text">tech</span> que
            <br />
            acelera sua carreira
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Artigos, tutoriais e insights sobre programação, carreira e tecnologia.
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center space-x-2 mb-8">
            <span className="text-primary font-mono text-sm">$</span>
            <span className="text-muted-foreground font-mono text-sm">
              cat featured_posts.json
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {featuredPosts.map((post, index) => {
              const Icon = post.icon;
              return (
                <Card
                  key={post.id}
                  className="terminal-border p-8 hover:scale-105 transition-all duration-300 cursor-pointer group hover:glow-cyan animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="border-primary/50 text-primary">
                        {post.category}
                      </Badge>
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center space-x-4 text-xs text-muted-foreground font-mono">
                        <span className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{post.date}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </span>
                      </div>
                      <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Regular Posts */}
          <div className="flex items-center space-x-2 mb-8">
            <span className="text-primary font-mono text-sm">$</span>
            <span className="text-muted-foreground font-mono text-sm">
              ls -la posts/
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {regularPosts.map((post, index) => {
              const Icon = post.icon;
              return (
                <Card
                  key={post.id}
                  className="terminal-border p-6 hover:scale-105 transition-all duration-300 cursor-pointer group animate-fade-in"
                  style={{ animationDelay: `${(index + 2) * 100}ms` }}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="text-xs">
                        {post.category}
                      </Badge>
                      <Icon className="w-4 h-4 text-primary" />
                    </div>

                    <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center space-x-3 text-xs text-muted-foreground font-mono pt-3 border-t border-border">
                      <span className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </span>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" className="terminal-border font-mono group">
              Carregar mais posts
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
