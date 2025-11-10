import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Search, User, Mail, Phone, MapPin, DollarSign } from "lucide-react";
import { toast } from "sonner";

interface CustomerData {
  accountNumber: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  balance: string;
}

interface AccountLookupProps {
  onSearch: (accountNumber: string, hashValue: number) => void;
  customerData: CustomerData | null;
}

const AccountLookup = ({ onSearch, customerData }: AccountLookupProps) => {
  const [accountNumber, setAccountNumber] = useState("");

  const handleSearch = () => {
    if (!accountNumber) {
      toast.error("Please enter an account number");
      return;
    }

    // Extract numeric part and compute hash
    const numericPart = accountNumber.split('-')[1];
    if (!numericPart || isNaN(parseInt(numericPart))) {
      toast.error("Invalid account number format. Use ACC-XXXX");
      return;
    }

    const hashValue = parseInt(numericPart) % 100;
    onSearch(accountNumber, hashValue);
  };

  return (
    <div className="space-y-6">
      <Card className="p-6 bg-card">
        <div className="space-y-4">
          <div>
            <label className="text-sm font-semibold text-foreground mb-2 block">
              Enter Account Number
            </label>
            <div className="flex gap-3">
              <Input
                placeholder="ACC-1001"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                className="font-mono text-lg"
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              />
              <Button onClick={handleSearch} size="lg" className="gap-2">
                <Search className="w-4 h-4" />
                Search
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Try: ACC-1001, ACC-1002, ACC-1003, ACC-1004, ACC-1005
            </p>
          </div>
        </div>
      </Card>

      {customerData && (
        <Card className="p-6 border-2 border-primary/30 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-2xl font-bold text-foreground">Customer Details</h3>
            <div className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-semibold">
              Found
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <User className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Name</div>
                <div className="font-semibold">{customerData.name}</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Email</div>
                <div className="font-semibold">{customerData.email}</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Phone</div>
                <div className="font-semibold">{customerData.phone}</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 bg-accent/10 rounded-lg">
                <DollarSign className="w-5 h-5 text-accent" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Balance</div>
                <div className="font-semibold text-accent">{customerData.balance}</div>
              </div>
            </div>

            <div className="flex items-center gap-3 md:col-span-2">
              <div className="p-2 bg-primary/10 rounded-lg">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Address</div>
                <div className="font-semibold">{customerData.address}</div>
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default AccountLookup;
