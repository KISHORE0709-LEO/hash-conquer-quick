import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import ComplexityAnalysis from "@/components/ComplexityAnalysis";
import HashVisualization from "@/components/HashVisualization";
import AccountLookup from "@/components/AccountLookup";
import CustomerDatabase from "@/components/CustomerDatabase";
import AddCustomerForm from "@/components/AddCustomerForm";
import CCodeImplementation from "@/components/CCodeImplementation";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Sample customer database with comprehensive details
const customerDatabase: { [key: string]: any } = {
  "ACC-1001": {
    accountNumber: "ACC-1001",
    name: "Kishore Kumar",
    email: "kishore.kumar@email.com",
    phone: "1234567890",
    address: "123 MG Road, Bangalore, Karnataka 560001",
    balance: "$45,230.50",
    accountType: "Savings",
    branch: "Bangalore Main Branch",
    ifsc: "BANK0001234",
    openDate: "15-Jan-2020"
  },
  "ACC-1002": {
    accountNumber: "ACC-1002",
    name: "Priya Sharma",
    email: "priya.sharma@email.com",
    phone: "9876543210",
    address: "456 Nehru Place, New Delhi 110019",
    balance: "$78,450.00",
    accountType: "Current",
    branch: "Delhi Central Branch",
    ifsc: "BANK0005678",
    openDate: "22-Mar-2019"
  },
  "ACC-1003": {
    accountNumber: "ACC-1003",
    name: "Rajesh Patel",
    email: "rajesh.patel@email.com",
    phone: "8765432109",
    address: "789 CG Road, Ahmedabad, Gujarat 380009",
    balance: "$32,890.25",
    accountType: "Savings",
    branch: "Ahmedabad Branch",
    ifsc: "BANK0009012",
    openDate: "10-Jul-2021"
  },
  "ACC-1004": {
    accountNumber: "ACC-1004",
    name: "Sneha Reddy",
    email: "sneha.reddy@email.com",
    phone: "7654321098",
    address: "321 Banjara Hills, Hyderabad, Telangana 500034",
    balance: "$91,200.75",
    accountType: "Savings",
    branch: "Hyderabad Branch",
    ifsc: "BANK0003456",
    openDate: "05-Dec-2018"
  },
  "ACC-1005": {
    accountNumber: "ACC-1005",
    name: "Amit Desai",
    email: "amit.desai@email.com",
    phone: "6543210987",
    address: "654 Marine Drive, Mumbai, Maharashtra 400020",
    balance: "$56,780.00",
    accountType: "Current",
    branch: "Mumbai Central Branch",
    ifsc: "BANK0007890",
    openDate: "18-Sep-2020"
  },
  "ACC-1006": {
    accountNumber: "ACC-1006",
    name: "Anjali Nair",
    email: "anjali.nair@email.com",
    phone: "5432109876",
    address: "987 MG Road, Kochi, Kerala 682016",
    balance: "$24,560.00",
    accountType: "Savings",
    branch: "Kochi Branch",
    ifsc: "BANK0002345",
    openDate: "30-Nov-2021"
  },
  "ACC-1007": {
    accountNumber: "ACC-1007",
    name: "Vikram Singh",
    email: "vikram.singh@email.com",
    phone: "4321098765",
    address: "234 Park Street, Kolkata, West Bengal 700016",
    balance: "$65,340.50",
    accountType: "Savings",
    branch: "Kolkata Branch",
    ifsc: "BANK0006789",
    openDate: "12-Feb-2019"
  },
  "ACC-1008": {
    accountNumber: "ACC-1008",
    name: "Meera Iyer",
    email: "meera.iyer@email.com",
    phone: "3210987654",
    address: "567 Anna Salai, Chennai, Tamil Nadu 600002",
    balance: "$89,120.00",
    accountType: "Current",
    branch: "Chennai Branch",
    ifsc: "BANK0004567",
    openDate: "25-Aug-2020"
  }
};

const Index = () => {
  const [currentAccountNumber, setCurrentAccountNumber] = useState("");
  const [hashValue, setHashValue] = useState(-1);
  const [customerData, setCustomerData] = useState<any>(null);
  const [database, setDatabase] = useState(customerDatabase);

  const handleSearch = (accountNumber: string, hash: number) => {
    setCurrentAccountNumber(accountNumber);
    setHashValue(hash);
    
    // Simulate hash table lookup
    setTimeout(() => {
      const customer = database[accountNumber];
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

  const handleAddCustomer = (newCustomer: any) => {
    setDatabase(prev => ({
      ...prev,
      [newCustomer.accountNumber]: newCustomer
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <HeroSection />
        
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Algorithm Complexity - Show First */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-center">Algorithm Complexity Analysis</h2>
            <ComplexityAnalysis />
          </div>

          {/* Customer Database View */}
          <CustomerDatabase customers={database} />

          {/* C Code Implementation */}
          <CCodeImplementation />

          {/* Main Interaction Tabs */}
          <Tabs defaultValue="search" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="search" className="text-lg">Search Account</TabsTrigger>
              <TabsTrigger value="add" className="text-lg">Add New Customer</TabsTrigger>
            </TabsList>
            
            <TabsContent value="search" className="space-y-6">
              <HashVisualization 
                accountNumber={currentAccountNumber}
                hashValue={hashValue}
                isActive={!!currentAccountNumber}
              />

              <AccountLookup 
                onSearch={handleSearch}
                customerData={customerData}
              />
            </TabsContent>
            
            <TabsContent value="add">
              <AddCustomerForm 
                onAddCustomer={handleAddCustomer}
                existingAccountNumbers={Object.keys(database)}
              />
            </TabsContent>
          </Tabs>

          {/* How it works */}
          <div className="bg-card rounded-lg p-6 border-2 border-primary/20">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="text-primary">💡</span> Transform and Conquer Paradigm
            </h3>
            <div className="space-y-3 text-muted-foreground">
              <p>
                <span className="font-semibold text-foreground">Transform:</span> The account number is transformed into an array index using a hash function (modulo operation). This converts the search problem into a simple array access problem.
              </p>
              <p>
                <span className="font-semibold text-foreground">Conquer:</span> Once transformed, we can directly access the customer data at that index in O(1) constant time, regardless of how many customers exist in the database.
              </p>
              <p>
                This demonstrates the <span className="font-semibold text-primary">Transform and Conquer</span> paradigm where we transform the problem into a simpler form (hash index) before conquering it (direct access). The hash function h(k) = k mod 100 ensures all account numbers map to indices between 0-99.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
