import { useState } from "react";
import AlgorithmHeader from "@/components/AlgorithmHeader";
import ComplexityAnalysis from "@/components/ComplexityAnalysis";
import HashVisualization from "@/components/HashVisualization";
import AccountLookup from "@/components/AccountLookup";
import { toast } from "sonner";

// Sample customer database
const customerDatabase: { [key: string]: any } = {
  "ACC-1001": {
    accountNumber: "ACC-1001",
    name: "John Anderson",
    email: "john.anderson@email.com",
    phone: "+1 (555) 123-4567",
    address: "123 Oak Street, New York, NY 10001",
    balance: "$45,230.50"
  },
  "ACC-1002": {
    accountNumber: "ACC-1002",
    name: "Sarah Martinez",
    email: "sarah.martinez@email.com",
    phone: "+1 (555) 234-5678",
    address: "456 Pine Avenue, Los Angeles, CA 90001",
    balance: "$78,450.00"
  },
  "ACC-1003": {
    accountNumber: "ACC-1003",
    name: "Michael Chen",
    email: "michael.chen@email.com",
    phone: "+1 (555) 345-6789",
    address: "789 Maple Drive, Chicago, IL 60601",
    balance: "$32,890.25"
  },
  "ACC-1004": {
    accountNumber: "ACC-1004",
    name: "Emily Johnson",
    email: "emily.johnson@email.com",
    phone: "+1 (555) 456-7890",
    address: "321 Elm Court, Houston, TX 77001",
    balance: "$91,200.75"
  },
  "ACC-1005": {
    accountNumber: "ACC-1005",
    name: "David Thompson",
    email: "david.thompson@email.com",
    phone: "+1 (555) 567-8901",
    address: "654 Birch Lane, Phoenix, AZ 85001",
    balance: "$56,780.00"
  }
};

const Index = () => {
  const [currentAccountNumber, setCurrentAccountNumber] = useState("");
  const [hashValue, setHashValue] = useState(-1);
  const [customerData, setCustomerData] = useState<any>(null);

  const handleSearch = (accountNumber: string, hash: number) => {
    setCurrentAccountNumber(accountNumber);
    setHashValue(hash);
    
    // Simulate hash table lookup
    setTimeout(() => {
      const customer = customerDatabase[accountNumber];
      if (customer) {
        setCustomerData(customer);
        toast.success("Customer account found!", {
          description: `Retrieved details for ${customer.name}`
        });
      } else {
        setCustomerData(null);
        toast.error("Account not found", {
          description: "No customer found with this account number"
        });
      }
    }, 800);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <AlgorithmHeader />
        
        <div className="max-w-6xl mx-auto space-y-8">
          <HashVisualization 
            accountNumber={currentAccountNumber}
            hashValue={hashValue}
            isActive={!!currentAccountNumber}
          />

          <AccountLookup 
            onSearch={handleSearch}
            customerData={customerData}
          />

          <div className="pt-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Algorithm Complexity</h2>
            <ComplexityAnalysis />
          </div>

          <div className="bg-card rounded-lg p-6 border border-border">
            <h3 className="text-xl font-bold mb-4">How It Works</h3>
            <div className="space-y-3 text-muted-foreground">
              <p>
                <span className="font-semibold text-foreground">Transform:</span> The account number is transformed into an array index using a hash function (modulo operation).
              </p>
              <p>
                <span className="font-semibold text-foreground">Conquer:</span> Once transformed, we can directly access the customer data at that index in O(1) time.
              </p>
              <p>
                This demonstrates the <span className="font-semibold text-primary">Transform and Conquer</span> paradigm where we transform the problem into a simpler form (hash index) before conquering it (direct access).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
