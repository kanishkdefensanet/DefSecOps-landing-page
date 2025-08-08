
import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Shield, Zap, Eye, Cog, TrendingUp, Brain, Lock, Star, Sparkles, AlertTriangle, Clock, Users, FileCheck, Bug, Search } from "lucide-react";
import CodeDropZone from "@/components/CodeDropZone";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const securityFeatures = [
    {
      icon: Eye,
      title: "IDE-Integrated Scanning",
      description: "Catch issues as developers write code"
    },
    {
      icon: Bug,
      title: "SAST & SCA",
      description: "Identify logic flaws, license risks, and vulnerabilities"
    },
    {
      icon: FileCheck,
      title: "SBOM Generation",
      description: "Ensure compliance with a transparent bill of materials"
    },
    {
      icon: Lock,
      title: "Secret & Container Scanning",
      description: "Detect hardcoded credentials and secure images"
    },
    {
      icon: Shield,
      title: "Malware & OWASP Scans",
      description: "Harden your app against known threat vectors"
    },
    {
      icon: TrendingUp,
      title: "One-Click Reports",
      description: "RBI, CERT-In, ISO27001-ready documentation"
    }
  ];

  const problemStats = [
    { stat: "60-80%", label: "of modern codebases are open-source components" },
    { stat: "72 days", label: "average time to fix a vulnerability" },
    { stat: "85%", label: "of teams will adopt DevSecOps by 2027" },
    { stat: "60%", label: "more costly incidents without DevSecOps" }
  ];

  const benefits = [
    { icon: Shield, title: "Unified Dashboard", description: "Complete risk visibility across code, containers, and third-party components" },
    { icon: Brain, title: "Cultural Shift Built-In", description: "Empower teams with integrated security workflows and hands-on training" },
    { icon: Zap, title: "Plug-and-Play", description: "No need to rip and replace. Integrates directly into your existing CI/CD pipeline" },
    { icon: FileCheck, title: "Audit-Ready Reports", description: "Meet compliance needs instantly—impress clients and pass audits" }
  ];

  const revenueImpacts = [
    { title: "Reduced Downtime", description: "Early vulnerability detection prevents production outages" },
    { title: "Faster Sales Cycles", description: "Enterprise-ready compliance boosts buyer trust" },
    { title: "Fewer Fines", description: "Avoid penalties by automating regulatory reporting" },
    { title: "Higher Trust", description: "SBOMs and transparent security earn investor confidence" }
  ];

  return (
    <div className="min-h-screen bg-luxury-gradient text-white font-inter overflow-x-hidden relative">
      {/* Premium Floating Orbs */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="floating-orb w-96 h-96 top-20 -left-48 animate-float"></div>
        <div className="floating-orb w-64 h-64 top-1/3 -right-32 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="floating-orb w-80 h-80 bottom-1/4 left-1/4 animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="floating-orb w-56 h-56 bottom-40 right-1/3 animate-float" style={{ animationDelay: '6s' }}></div>
      </div>

      {/* Premium Navigation */}
      <nav className="relative z-50 px-8 py-6 glass-effect">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/14a45521-9cda-4d82-9a16-efbe85cad2af.png" 
              alt="DefSecOps Logo" 
              className="w-[250px] h-[150px]"
            />
          </div>
          <div className="hidden md:flex items-center space-x-10">
            <a href="#features" className="text-lg hover:text-luxury-400 transition-all duration-300 hover:scale-105">Features</a>
            <a href="#benefits" className="text-lg hover:text-luxury-400 transition-all duration-300 hover:scale-105">Benefits</a>
            <a href="#roi" className="text-lg hover:text-luxury-400 transition-all duration-300 hover:scale-105">ROI</a>
            <Button className="bg-gradient-to-r from-luxury-600 to-electric-600 hover:from-luxury-700 hover:to-electric-700 luxury-shadow px-8 py-3 text-lg font-semibold">
              Schedule Demo
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-8 pt-20">
        <div className="max-w-7xl mx-auto text-center space-y-12 animate-fade-in-up">
          <Badge className="bg-luxury-500/20 text-luxury-300 border-luxury-500/40 px-6 py-3 text-lg font-medium">
            <Shield className="w-5 h-5 mr-2" />
            End-to-End SDLC Security
          </Badge>
          
          <h1 className="text-6xl md:text-8xl font-black leading-tight text-white">
            Secure Every Line of Code,
            <br />
            <span className="text-gradient">Every Step of the Way</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-300 max-w-5xl mx-auto leading-relaxed font-light">
            DefSecOps: End-to-End Security Across Your SDLC – <span className="text-luxury-400 font-semibold">Without the Complexity</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-16">
            <Button size="lg" className="bg-gradient-to-r from-luxury-600 to-electric-600 hover:from-luxury-700 hover:to-electric-700 px-12 py-6 text-xl font-semibold luxury-shadow animate-glow">
              Schedule Demo
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-luxury-500 text-luxury-300 hover:bg-luxury-500/10 px-12 py-6 text-xl font-semibold glass-effect">
              Request POC
            </Button>
          </div>
        </div>
      </section>

      {/* Code Drop Zone Section */}
      <section className="py-32 px-8 premium-gradient">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-5xl md:text-7xl font-black mb-8 text-white">
              Try DefSecOps Now
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
              Upload your code and get an instant security analysis report
            </p>
          </div>
          
          <CodeDropZone />
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-32 px-8 premium-gradient">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-5xl md:text-7xl font-black mb-8 text-white">
              The Problem Has Escalated
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {problemStats.map((item, index) => (
              <Card key={index} className="glass-effect text-center animate-fade-in luxury-shadow" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-10">
                  <div className="text-4xl font-black text-gradient mb-4">{item.stat}</div>
                  <div className="text-gray-300 text-lg leading-tight">{item.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="space-y-8 text-center">
            <div className="flex items-center justify-center space-x-4 text-2xl">
              <AlertTriangle className="w-8 h-8 text-red-400" />
              <span>Just one vulnerable library can expose your entire application.</span>
            </div>
            
            <div className="bg-luxury-500/10 border border-luxury-500/30 rounded-xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-luxury-300">Gartner Insights</h3>
              <div className="space-y-4 text-lg">
                <p>"By 2027, 85% of product development teams will adopt DevSecOps practices, up from just 30% in 2022."</p>
                <p className="text-gray-400 italic">Source: Gartner, "Innovation Insight for DevSecOps", 2023.</p>
                <p>"Failure to integrate security into DevOps will lead to 60% more costly incidents by 2026."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="features" className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-5xl md:text-7xl font-black mb-8 text-white">
              Your All-in-One DevSecOps Solution
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
              DefSecOps helps you ship faster — <span className="text-luxury-400 font-semibold">without sacrificing security.</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="glass-effect hover:bg-white/10 transition-all duration-500 group animate-slide-in-left luxury-shadow" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-10">
                    <div className="flex items-center space-x-6 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-luxury-500 to-electric-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center">
                        <Check className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                    <p className="text-gray-300 text-lg leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-32 px-8 premium-gradient">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-5xl md:text-7xl font-black mb-8 text-white">
              Why Teams Trust DefSecOps
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="glass-effect hover:bg-white/10 transition-all duration-500 animate-slide-in-left luxury-shadow" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-10">
                    <div className="flex items-center space-x-6 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-luxury-500 to-electric-500 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">{benefit.title}</h3>
                    <p className="text-gray-300 text-lg leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section id="roi" className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-5xl md:text-7xl font-black mb-8 text-white">
              Revenue Impact
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {revenueImpacts.map((impact, index) => (
              <Card key={index} className="glass-effect hover:bg-white/10 transition-all duration-500 animate-slide-in-left luxury-shadow" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-10">
                  <h3 className="text-2xl font-bold mb-4 text-white flex items-center">
                    <div className="w-3 h-3 bg-gradient-to-r from-luxury-500 to-electric-500 rounded-full mr-4"></div>
                    {impact.title}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">{impact.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-luxury-500/10 border border-luxury-500/30 rounded-xl p-8 text-center">
            <p className="text-xl text-gray-300 mb-4">
              <strong className="text-luxury-300">RBI Guidelines</strong> emphasize traceability, transparency, and third-party risk management—our SBOM and scanning modules align perfectly.
            </p>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-32 px-8 premium-gradient">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-5xl md:text-7xl font-black mb-8 text-white">
              For Whom?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "CTOs & CISOs securing modern applications",
              "DevOps teams under audit pressure", 
              "Engineering teams building fast, but securely",
              "Product leaders prioritizing secure SDLC visibility"
            ].map((audience, index) => (
              <Card key={index} className="glass-effect text-center animate-fade-in luxury-shadow" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-luxury-500 to-electric-500 flex items-center justify-center mx-auto mb-6">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-lg font-medium">{audience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8">
        <div className="max-w-5xl mx-auto text-center space-y-12 animate-fade-in-up">
          <h2 className="text-5xl md:text-7xl font-black text-white">
            Real Security. Real ROI.
          </h2>
          
          <p className="text-2xl text-gray-300 font-light leading-relaxed">
            DefSecOps isn't just a tool—it's a <span className="text-luxury-400 font-semibold">security governance layer</span> for the software you ship.
          </p>

          <div className="space-y-6">
            <p className="text-xl text-white font-medium">Start building securely — from Day One.</p>
            <p className="text-lg text-gray-300">Book a free 15-minute walkthrough today.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-luxury-600 to-electric-600 hover:from-luxury-700 hover:to-electric-700 px-12 py-6 text-xl font-semibold luxury-shadow animate-glow">
              Schedule Demo
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-luxury-500 text-luxury-300 hover:bg-luxury-500/10 px-12 py-6 text-xl font-semibold glass-effect">
              Request POC
            </Button>
          </div>
        </div>
      </section>

      {/* Premium Footer */}
      <footer className="py-16 px-8 glass-effect border-t border-luxury-500/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/14a45521-9cda-4d82-9a16-efbe85cad2af.png" 
                alt="DefSecOps Logo" 
                className="w-[250px] h-[150px]"
              />
            </div>
            
            <div className="flex space-x-10 text-gray-400">
              <a href="#" className="hover:text-luxury-300 transition-colors text-lg">Privacy</a>
              <a href="#" className="hover:text-luxury-300 transition-colors text-lg">Terms</a>
              <a href="#" className="hover:text-luxury-300 transition-colors text-lg">Contact</a>
              <a href="#" className="hover:text-luxury-300 transition-colors text-lg">Support</a>
            </div>
          </div>
          
          <div className="text-center mt-12 text-gray-500 text-lg">
            © 2024 DefSecOps. All rights reserved. Securing innovation at every step.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
