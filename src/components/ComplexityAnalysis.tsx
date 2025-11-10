import { Card } from "@/components/ui/card";
import { Clock, Database } from "lucide-react";

const ComplexityAnalysis = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <Card className="p-6 border-2 border-primary/20 hover:border-primary/40 transition-colors">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-primary/10 rounded-lg">
            <Clock className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Time Complexity</h3>
            <div className="space-y-2">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-mono font-bold text-accent">O(1)</span>
                <span className="text-sm text-muted-foreground">Average Case</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Direct access via hash function enables constant-time lookups regardless of dataset size.
              </p>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6 border-2 border-accent/20 hover:border-accent/40 transition-colors">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-accent/10 rounded-lg">
            <Database className="w-6 h-6 text-accent" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Space Complexity</h3>
            <div className="space-y-2">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-mono font-bold text-accent">O(n)</span>
                <span className="text-sm text-muted-foreground">Linear Space</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Hash table stores n customer records, with additional space for handling collisions.
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ComplexityAnalysis;
