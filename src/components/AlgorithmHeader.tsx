import { Badge } from "@/components/ui/badge";

const AlgorithmHeader = () => {
  return (
    <div className="text-center space-y-4 mb-8">
      <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
        <Badge variant="default" className="text-sm font-semibold">
          Transform and Conquer
        </Badge>
      </div>
      <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        Hashing Algorithm
      </h1>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Retrieve customer account details instantly using efficient hash table lookups
      </p>
    </div>
  );
};

export default AlgorithmHeader;
