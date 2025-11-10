import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Search, User, Mail, Phone, MapPin, DollarSign, Building2, CreditCard, Calendar } from "lucide-react";
import { toast } from "sonner";

interface CustomerData {
  accountNumber: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  balance: string;
  accountType: string;
  branch: string;
  ifsc: string;
  openDate: string;
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
              Try: ACC-1001 (Kishore), ACC-1002 (Priya), ACC-1003 (Rajesh), ACC-1004 (Sneha), ACC-1005 (Amit), ACC-1006 (Anjali), ACC-1007 (Vikram), ACC-1008 (Meera)
            </p>
          </div>
        </div>
      </Card>

      {customerData && (
        <Card className="p-6 border-2 border-accent/40 bg-accent/5 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="text-sm text-accent font-semibold mb-1">--- Customer Found ---</div>
              <h3 className="text-3xl font-bold text-foreground">Account Details</h3>
            </div>
            <div className="px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-bold">
              ✓ FOUND
            </div>
          </div>
          
          <div className="space-y-6">
            {/* Primary Details */}
            <div className="grid md:grid-cols-2 gap-4 pb-6 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary rounded-lg">
                  <CreditCard className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">Account No</div>
                  <div className="text-lg font-bold font-mono">{customerData.accountNumber}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary rounded-lg">
                  <User className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">Name</div>
                  <div className="text-lg font-bold">{customerData.name}</div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">Phone</div>
                  <div className="font-semibold">{customerData.phone}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">Email</div>
                  <div className="font-semibold">{customerData.email}</div>
                </div>
              </div>
            </div>

            {/* Account Details */}
            <div className="grid md:grid-cols-2 gap-4 bg-muted/50 p-4 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-accent/20 rounded-lg">
                  <DollarSign className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">Balance</div>
                  <div className="text-xl font-bold text-accent">{customerData.balance}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Building2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">Account Type</div>
                  <div className="font-semibold">{customerData.accountType}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Building2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">Branch</div>
                  <div className="font-semibold">{customerData.branch}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <CreditCard className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">IFSC Code</div>
                  <div className="font-semibold font-mono">{customerData.ifsc}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">Account Opened</div>
                  <div className="font-semibold">{customerData.openDate}</div>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3 pt-4 border-t border-border">
              <div className="p-2 bg-primary/10 rounded-lg">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Address</div>
                <div className="font-semibold text-base">{customerData.address}</div>
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default AccountLookup;
