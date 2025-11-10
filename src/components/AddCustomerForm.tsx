import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { UserPlus } from "lucide-react";
import { toast } from "sonner";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface AddCustomerFormProps {
  onAddCustomer: (customer: any) => void;
  existingAccountNumbers: string[];
}

const AddCustomerForm = ({ onAddCustomer, existingAccountNumbers }: AddCustomerFormProps) => {
  const [formData, setFormData] = useState({
    accountNumber: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    balance: "",
    accountType: "Savings",
    branch: "",
    ifsc: "",
    openDate: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.accountNumber.startsWith("ACC-")) {
      toast.error("Account number must start with ACC-");
      return;
    }

    if (existingAccountNumbers.includes(formData.accountNumber)) {
      toast.error("Account number already exists!");
      return;
    }

    if (!formData.name || !formData.phone || !formData.email) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Add customer
    onAddCustomer({ ...formData });
    
    toast.success("Customer Added Successfully!", {
      description: `${formData.name} has been added to the database`
    });

    // Reset form
    setFormData({
      accountNumber: "",
      name: "",
      email: "",
      phone: "",
      address: "",
      balance: "",
      accountType: "Savings",
      branch: "",
      ifsc: "",
      openDate: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
    });
  };

  return (
    <Card className="p-6 border-2 border-accent/20">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-accent rounded-lg">
          <UserPlus className="w-6 h-6 text-accent-foreground" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Add New Customer</h2>
          <p className="text-sm text-muted-foreground">Register a new account in the database</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="accountNumber" className="text-sm font-semibold">Account Number *</Label>
            <Input
              id="accountNumber"
              placeholder="ACC-1009"
              value={formData.accountNumber}
              onChange={(e) => setFormData({ ...formData, accountNumber: e.target.value })}
              className="font-mono"
              required
            />
          </div>

          <div>
            <Label htmlFor="name" className="text-sm font-semibold">Full Name *</Label>
            <Input
              id="name"
              placeholder="Enter customer name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          <div>
            <Label htmlFor="phone" className="text-sm font-semibold">Phone Number *</Label>
            <Input
              id="phone"
              placeholder="1234567890"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="font-mono"
              required
            />
          </div>

          <div>
            <Label htmlFor="email" className="text-sm font-semibold">Email Address *</Label>
            <Input
              id="email"
              type="email"
              placeholder="customer@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div>
            <Label htmlFor="accountType" className="text-sm font-semibold">Account Type</Label>
            <Select value={formData.accountType} onValueChange={(value) => setFormData({ ...formData, accountType: value })}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Savings">Savings</SelectItem>
                <SelectItem value="Current">Current</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="balance" className="text-sm font-semibold">Initial Balance</Label>
            <Input
              id="balance"
              placeholder="$10,000.00"
              value={formData.balance}
              onChange={(e) => setFormData({ ...formData, balance: e.target.value })}
            />
          </div>

          <div>
            <Label htmlFor="branch" className="text-sm font-semibold">Branch</Label>
            <Input
              id="branch"
              placeholder="Main Branch"
              value={formData.branch}
              onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
            />
          </div>

          <div>
            <Label htmlFor="ifsc" className="text-sm font-semibold">IFSC Code</Label>
            <Input
              id="ifsc"
              placeholder="BANK0001234"
              value={formData.ifsc}
              onChange={(e) => setFormData({ ...formData, ifsc: e.target.value })}
              className="font-mono"
            />
          </div>

          <div className="md:col-span-2">
            <Label htmlFor="address" className="text-sm font-semibold">Address</Label>
            <Input
              id="address"
              placeholder="Full address"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            />
          </div>
        </div>

        <Button type="submit" size="lg" className="w-full gap-2">
          <UserPlus className="w-4 h-4" />
          Add Customer to Database
        </Button>
      </form>
    </Card>
  );
};

export default AddCustomerForm;
