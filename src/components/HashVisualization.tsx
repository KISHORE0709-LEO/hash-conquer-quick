import { Card } from "@/components/ui/card";
import { ArrowRight, Hash } from "lucide-react";

interface HashVisualizationProps {
  accountNumber: string;
  hashValue: number;
  isActive: boolean;
}

const HashVisualization = ({ accountNumber, hashValue, isActive }: HashVisualizationProps) => {
  return (
    <Card className={`p-6 transition-all duration-500 ${isActive ? 'border-primary border-2 shadow-lg' : 'border-muted'}`}>
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1">
          <div className="text-sm text-muted-foreground mb-1">Input</div>
          <div className="text-xl font-mono font-bold text-foreground">{accountNumber || "ACC-XXXX"}</div>
        </div>

        <div className={`transition-all duration-500 ${isActive ? 'scale-110' : 'scale-100'}`}>
          <ArrowRight className="w-8 h-8 text-primary" />
        </div>

        <div className="p-4 bg-code-bg rounded-lg flex items-center gap-3">
          <Hash className="w-6 h-6 text-code-text" />
          <div>
            <div className="text-sm text-code-text/70 mb-1">Hash Function</div>
            <div className="font-mono text-code-text text-sm">h(k) = k mod 100</div>
          </div>
        </div>

        <div className={`transition-all duration-500 ${isActive ? 'scale-110' : 'scale-100'}`}>
          <ArrowRight className="w-8 h-8 text-accent" />
        </div>

        <div className="flex-1 text-right">
          <div className="text-sm text-muted-foreground mb-1">Index</div>
          <div className="text-2xl font-mono font-bold text-accent">
            {hashValue >= 0 ? hashValue : "--"}
          </div>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-border">
        <div className="bg-code-bg rounded-lg p-4 font-mono text-sm text-code-text">
          <div className="opacity-60">// Hash Function Implementation</div>
          <div className="mt-2">
            <span className="text-code-text/80">function</span> <span className="text-accent">hashFunction</span>(accountNum: <span className="text-primary">string</span>) {"{"}
          </div>
          <div className="ml-4">
            <span className="text-code-text/80">const</span> numericValue = <span className="text-accent">parseInt</span>(accountNum.split(<span className="text-orange-400">'-'</span>)[<span className="text-orange-400">1</span>]);
          </div>
          <div className="ml-4">
            <span className="text-code-text/80">return</span> numericValue % <span className="text-orange-400">100</span>;
          </div>
          <div>{"}"}</div>
        </div>
      </div>
    </Card>
  );
};

export default HashVisualization;
