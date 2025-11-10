import { Card } from "@/components/ui/card";
import { ArrowRight, Hash } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface HashVisualizationProps {
  accountNumber: string;
  hashValue: number;
  isActive: boolean;
}

const HashVisualization = ({ accountNumber, hashValue, isActive }: HashVisualizationProps) => {
  const numericPart = accountNumber ? accountNumber.split('-')[1] : "";
  
  return (
    <Card className={`p-8 transition-all duration-500 ${isActive ? 'border-primary border-2 shadow-xl bg-primary/5' : 'border-muted'}`}>
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-2">Hash Function Transformation</h3>
        <p className="text-muted-foreground">Watch how the account number transforms into a hash index</p>
      </div>

      {/* Step-by-step visualization */}
      <div className="space-y-6">
        {/* Step 1: Input */}
        <div className={`p-4 rounded-lg border-2 transition-all duration-500 ${isActive ? 'border-primary bg-primary/5' : 'border-muted'}`}>
          <Badge className="mb-2">Step 1: Input</Badge>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-muted-foreground mb-1">Account Number</div>
              <div className="text-2xl font-mono font-bold text-foreground">{accountNumber || "ACC-XXXX"}</div>
            </div>
            {isActive && (
              <div className="text-sm text-muted-foreground">
                Complete account identifier
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-center">
          <ArrowRight className={`w-8 h-8 transition-all duration-500 ${isActive ? 'text-primary scale-125' : 'text-muted-foreground'}`} />
        </div>

        {/* Step 2: Extract numeric part */}
        <div className={`p-4 rounded-lg border-2 transition-all duration-500 ${isActive ? 'border-accent bg-accent/5' : 'border-muted'}`}>
          <Badge className="mb-2 bg-accent text-accent-foreground">Step 2: Extract Numeric Value</Badge>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-muted-foreground mb-1">Extracted Number</div>
              <div className="text-2xl font-mono font-bold text-foreground">{numericPart || "XXXX"}</div>
            </div>
            {isActive && (
              <div className="bg-code-bg rounded-lg p-3 font-mono text-sm text-code-text">
                split(<span className="text-orange-400">'-'</span>)[<span className="text-orange-400">1</span>]
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-center">
          <ArrowRight className={`w-8 h-8 transition-all duration-500 ${isActive ? 'text-accent scale-125' : 'text-muted-foreground'}`} />
        </div>

        {/* Step 3: Hash function */}
        <div className={`p-4 rounded-lg border-2 transition-all duration-500 ${isActive ? 'border-primary bg-primary/5' : 'border-muted'}`}>
          <Badge className="mb-2">Step 3: Apply Hash Function</Badge>
          <div className="flex items-center justify-between gap-4">
            <div className="p-4 bg-code-bg rounded-lg flex items-center gap-3">
              <Hash className="w-8 h-8 text-code-text" />
              <div>
                <div className="text-sm text-code-text/70 mb-1">Modulo Operation</div>
                <div className="font-mono text-code-text text-lg font-bold">
                  {numericPart || "k"} mod 100
                </div>
              </div>
            </div>
            {isActive && numericPart && (
              <div className="text-right">
                <div className="text-sm text-muted-foreground mb-1">Calculation</div>
                <div className="text-lg font-mono">
                  {numericPart} ÷ 100 = <span className="text-muted-foreground">{Math.floor(parseInt(numericPart) / 100)}</span> remainder <span className="font-bold text-accent">{hashValue}</span>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-center">
          <ArrowRight className={`w-8 h-8 transition-all duration-500 ${isActive ? 'text-accent scale-125' : 'text-muted-foreground'}`} />
        </div>

        {/* Step 4: Result */}
        <div className={`p-6 rounded-lg border-2 transition-all duration-500 ${isActive ? 'border-accent bg-accent/10' : 'border-muted'}`}>
          <Badge className="mb-2 bg-accent text-accent-foreground">Step 4: Hash Table Index</Badge>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-muted-foreground mb-1">Final Hash Index</div>
              <div className="text-4xl font-mono font-bold text-accent">
                {hashValue >= 0 ? hashValue : "--"}
              </div>
            </div>
            {isActive && (
              <div className="text-right">
                <div className="text-sm text-muted-foreground mb-2">Data Location</div>
                <div className="bg-accent/20 px-4 py-2 rounded-lg">
                  <span className="text-sm">HashTable[</span>
                  <span className="font-mono font-bold text-lg">{hashValue}</span>
                  <span className="text-sm">]</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Code implementation */}
      <div className="mt-6 pt-6 border-t border-border">
        <div className="bg-code-bg rounded-lg p-4 font-mono text-sm text-code-text">
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
    </Card>
  );
};

export default HashVisualization;
