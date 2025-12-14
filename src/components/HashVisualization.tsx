import { Card } from "@/components/ui/card";
import { ArrowDown, Hash, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface HashVisualizationProps {
  accountNumber: string;
  hashValue: number;
  isActive: boolean;
}

const HashVisualization = ({ accountNumber, hashValue, isActive }: HashVisualizationProps) => {
  const numericPart = accountNumber ? accountNumber.split('-')[1] : "";
  
  return (
    <Card className={`p-8 transition-all duration-500 relative overflow-hidden ${isActive ? 'border-primary border-2 shadow-2xl' : 'border-muted'}`}>
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 animate-pulse" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-primary animate-pulse" />
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Hash Function Transformation
            </h3>
            <Sparkles className="w-6 h-6 text-accent animate-pulse" />
          </div>
          <p className="text-muted-foreground">Watch how the account number transforms into a hash index</p>
        </div>

        {/* Step-by-step visualization - Vertical layout */}
        <div className="flex flex-col items-center space-y-4">
          {/* Step 1: Input */}
          <div className={`w-full max-w-lg p-6 rounded-xl border-2 transition-all duration-500 backdrop-blur-sm ${isActive ? 'border-primary bg-primary/10 shadow-lg shadow-primary/20' : 'border-muted bg-card/50'}`}>
            <Badge className="mb-3 bg-primary text-primary-foreground">Step 1: Input</Badge>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-muted-foreground mb-1">Account Number</div>
                <div className="text-3xl font-mono font-bold text-foreground tracking-wider">{accountNumber || "ACC-XXXX"}</div>
              </div>
              {isActive && (
                <div className="text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                  Complete identifier
                </div>
              )}
            </div>
          </div>

          {/* Arrow Down */}
          <div className={`transition-all duration-500 ${isActive ? 'text-primary scale-125' : 'text-muted-foreground'}`}>
            <ArrowDown className="w-10 h-10 animate-bounce" />
          </div>

          {/* Step 2: Extract numeric part */}
          <div className={`w-full max-w-lg p-6 rounded-xl border-2 transition-all duration-500 backdrop-blur-sm ${isActive ? 'border-accent bg-accent/10 shadow-lg shadow-accent/20' : 'border-muted bg-card/50'}`}>
            <Badge className="mb-3 bg-accent text-accent-foreground">Step 2: Extract Numeric Value</Badge>
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-sm text-muted-foreground mb-1">Extracted Number</div>
                <div className="text-3xl font-mono font-bold text-foreground tracking-wider">{numericPart || "XXXX"}</div>
              </div>
              {isActive && (
                <div className="bg-code-bg rounded-lg p-3 font-mono text-sm text-code-text">
                  split(<span className="text-orange-400">'-'</span>)[<span className="text-orange-400">1</span>]
                </div>
              )}
            </div>
          </div>

          {/* Arrow Down */}
          <div className={`transition-all duration-500 ${isActive ? 'text-accent scale-125' : 'text-muted-foreground'}`}>
            <ArrowDown className="w-10 h-10 animate-bounce" style={{ animationDelay: '0.1s' }} />
          </div>

          {/* Step 3: Hash function */}
          <div className={`w-full max-w-lg p-6 rounded-xl border-2 transition-all duration-500 backdrop-blur-sm ${isActive ? 'border-primary bg-primary/10 shadow-lg shadow-primary/20' : 'border-muted bg-card/50'}`}>
            <Badge className="mb-3 bg-primary text-primary-foreground">Step 3: Apply Hash Function</Badge>
            <div className="flex items-center justify-between gap-4">
              <div className="p-4 bg-code-bg rounded-xl flex items-center gap-3">
                <Hash className="w-8 h-8 text-code-text" />
                <div>
                  <div className="text-sm text-code-text/70 mb-1">Modulo Operation</div>
                  <div className="font-mono text-code-text text-xl font-bold">
                    {numericPart || "k"} mod 100
                  </div>
                </div>
              </div>
              {isActive && numericPart && (
                <div className="text-right bg-muted/50 p-3 rounded-xl">
                  <div className="text-sm text-muted-foreground mb-1">Calculation</div>
                  <div className="text-lg font-mono">
                    {numericPart} ÷ 100 = <span className="text-muted-foreground">{Math.floor(parseInt(numericPart) / 100)}</span> R <span className="font-bold text-accent text-xl">{hashValue}</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Arrow Down */}
          <div className={`transition-all duration-500 ${isActive ? 'text-primary scale-125' : 'text-muted-foreground'}`}>
            <ArrowDown className="w-10 h-10 animate-bounce" style={{ animationDelay: '0.2s' }} />
          </div>

          {/* Step 4: Result */}
          <div className={`w-full max-w-lg p-6 rounded-xl border-2 transition-all duration-500 backdrop-blur-sm ${isActive ? 'border-accent bg-gradient-to-r from-accent/20 to-primary/20 shadow-xl' : 'border-muted bg-card/50'}`}>
            <Badge className="mb-3 bg-accent text-accent-foreground">Step 4: Hash Table Index</Badge>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-muted-foreground mb-1">Final Hash Index</div>
                <div className={`text-5xl font-mono font-bold transition-all ${isActive ? 'text-accent' : 'text-muted-foreground'}`}>
                  {hashValue >= 0 ? hashValue : "--"}
                </div>
              </div>
              {isActive && (
                <div className="text-right">
                  <div className="text-sm text-muted-foreground mb-2">Data Location</div>
                  <div className="bg-accent/20 px-6 py-3 rounded-xl border border-accent/30">
                    <span className="text-sm">HashTable[</span>
                    <span className="font-mono font-bold text-2xl text-accent">{hashValue}</span>
                    <span className="text-sm">]</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Code implementation */}
        <div className="mt-8 pt-6 border-t border-border">
          <div className="bg-code-bg rounded-xl p-6 font-mono text-sm text-code-text shadow-inner">
            <div className="opacity-60 mb-3">// Complete Hash Function Implementation</div>
            <div>
              <span className="text-code-text/80">function</span> <span className="text-accent">hashFunction</span>(accountNum: <span className="text-primary">string</span>): <span className="text-primary">number</span> {"{"}
            </div>
            <div className="ml-4 my-1">
              <span className="text-code-text/60">// Step 1: Split the account number</span>
            </div>
            <div className="ml-4">
              <span className="text-code-text/80">const</span> parts = accountNum.<span className="text-accent">split</span>(<span className="text-orange-400">'-'</span>);
            </div>
            <div className="ml-4 my-1">
              <span className="text-code-text/60">// Step 2: Extract numeric part</span>
            </div>
            <div className="ml-4">
              <span className="text-code-text/80">const</span> numericValue = <span className="text-accent">parseInt</span>(parts[<span className="text-orange-400">1</span>]);
            </div>
            <div className="ml-4 my-1">
              <span className="text-code-text/60">// Step 3: Apply modulo operation (hash function)</span>
            </div>
            <div className="ml-4">
              <span className="text-code-text/80">const</span> hashIndex = numericValue % <span className="text-orange-400">100</span>;
            </div>
            <div className="ml-4 my-1">
              <span className="text-code-text/60">// Step 4: Return hash table index</span>
            </div>
            <div className="ml-4">
              <span className="text-code-text/80">return</span> hashIndex;
            </div>
            <div>{"}"}</div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default HashVisualization;
