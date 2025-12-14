import { useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Hash, Zap, Database, Search } from "lucide-react";

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      char: string;
    }> = [];

    const chars = ["#", "0", "1", "%", "&", "@", "→", "█", "▓", "░"];

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 16 + 10,
        opacity: Math.random() * 0.3 + 0.1,
        char: chars[Math.floor(Math.random() * chars.length)],
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.font = `${p.size}px monospace`;
        ctx.fillStyle = `rgba(34, 197, 94, ${p.opacity})`;
        ctx.fillText(p.char, p.x, p.y);
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden rounded-2xl mb-12">
      {/* Animated canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: "linear-gradient(135deg, hsl(220 25% 8%) 0%, hsl(220 25% 15%) 50%, hsl(217 91% 20%) 100%)" }}
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-primary/20 blur-xl animate-pulse" />
        <div className="absolute top-1/4 right-20 w-32 h-32 rounded-full bg-accent/20 blur-2xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-20 left-1/4 w-24 h-24 rounded-full bg-primary/15 blur-xl animate-pulse" style={{ animationDelay: "0.5s" }} />
        <div className="absolute bottom-10 right-10 w-16 h-16 rounded-full bg-accent/25 blur-lg animate-pulse" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 py-16">
        <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-primary/30">
          <Badge variant="default" className="text-sm font-semibold bg-primary text-primary-foreground">
            Transform and Conquer
          </Badge>
        </div>

        <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white tracking-tight">
          <span className="bg-gradient-to-r from-white via-primary-foreground to-accent bg-clip-text text-transparent">
            Hashing Algorithm
          </span>
        </h1>

        <p className="text-xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed">
          Retrieve customer account details instantly using efficient hash table lookups.
          Experience O(1) constant time complexity in action.
        </p>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
            <Hash className="w-5 h-5 text-accent" />
            <span className="text-white/90 text-sm font-medium">Hash Function</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
            <Zap className="w-5 h-5 text-accent" />
            <span className="text-white/90 text-sm font-medium">O(1) Lookup</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
            <Database className="w-5 h-5 text-accent" />
            <span className="text-white/90 text-sm font-medium">Hash Table</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
            <Search className="w-5 h-5 text-accent" />
            <span className="text-white/90 text-sm font-medium">Instant Search</span>
          </div>
        </div>

        {/* Animated hash visualization */}
        <div className="flex justify-center items-center gap-4 text-white/60 font-mono text-lg">
          <span className="animate-pulse">ACC-1001</span>
          <span className="text-accent animate-bounce">→</span>
          <span className="text-accent font-bold">h(k) = k mod 100</span>
          <span className="text-accent animate-bounce">→</span>
          <span className="animate-pulse text-primary font-bold text-2xl">01</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;