import { useState } from "react";
import { Mail, MessageSquare, Send, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Footer from "@/components/Footer";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "contato@codelab.com.br",
    description: "Resposta em até 24h",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp",
    value: "+55 11 99999-9999",
    description: "Segunda a Sexta, 9h-18h",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Entraremos em contato em breve.",
    });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6 animate-fade-in">
          <Badge variant="outline" className="border-accent/50 text-accent">
            // contato
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold">
            Vamos <span className="gradient-text">conversar</span>?
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas, envie sugestões ou fale sobre parcerias. Estamos aqui para ajudar!
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card
                  key={index}
                  className="terminal-border p-8 hover:scale-105 transition-all duration-300 group animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg font-bold">{method.title}</h3>
                      <p className="text-primary font-mono text-sm">{method.value}</p>
                      <p className="text-xs text-muted-foreground">{method.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Contact Form */}
          <Card className="terminal-border p-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Envie sua mensagem</h2>
              <p className="text-muted-foreground font-mono text-sm">
                <span className="text-primary">$</span> git commit -m "nova mensagem"
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-mono text-sm">
                    Nome completo
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="terminal-border font-mono"
                    placeholder="Seu nome"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="font-mono text-sm">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="terminal-border font-mono"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="font-mono text-sm">
                  Assunto
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="terminal-border font-mono"
                  placeholder="Sobre o que quer falar?"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="font-mono text-sm">
                  Mensagem
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="terminal-border font-mono resize-none"
                  placeholder="Digite sua mensagem aqui..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full terminal-border font-mono group"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar mensagem
                    <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </Card>

          {/* FAQ Quick Links */}
          <div className="mt-12 text-center">
            <Card className="terminal-border p-6 inline-block">
              <div className="flex items-center space-x-2 text-sm">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">
                  Perguntas frequentes? Confira nosso{" "}
                  <a href="/blog" className="text-primary hover:underline font-mono">
                    Blog
                  </a>
                </span>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
