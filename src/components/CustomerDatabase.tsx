import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Database, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Customer {
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

interface CustomerDatabaseProps {
  customers: { [key: string]: Customer };
}

const CustomerDatabase = ({ customers }: CustomerDatabaseProps) => {
  const customerArray = Object.values(customers);

  return (
    <Card className="p-6 border-2 border-primary/20">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-primary rounded-lg">
            <Database className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Customer Database</h2>
            <p className="text-sm text-muted-foreground">All registered accounts in the system</p>
          </div>
        </div>
        <Badge variant="default" className="text-lg px-4 py-2">
          <Users className="w-4 h-4 mr-2" />
          {customerArray.length} Accounts
        </Badge>
      </div>

      <div className="rounded-lg border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="font-bold">Account No.</TableHead>
                <TableHead className="font-bold">Name</TableHead>
                <TableHead className="font-bold">Phone</TableHead>
                <TableHead className="font-bold">Email</TableHead>
                <TableHead className="font-bold">Type</TableHead>
                <TableHead className="font-bold">Branch</TableHead>
                <TableHead className="font-bold">Balance</TableHead>
                <TableHead className="font-bold">Hash Index</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customerArray.map((customer) => {
                const numericPart = parseInt(customer.accountNumber.split('-')[1]);
                const hashIndex = numericPart % 100;
                
                return (
                  <TableRow key={customer.accountNumber} className="hover:bg-muted/30 transition-colors">
                    <TableCell className="font-mono font-semibold">{customer.accountNumber}</TableCell>
                    <TableCell className="font-semibold">{customer.name}</TableCell>
                    <TableCell className="font-mono">{customer.phone}</TableCell>
                    <TableCell className="text-sm">{customer.email}</TableCell>
                    <TableCell>
                      <Badge variant={customer.accountType === "Savings" ? "secondary" : "default"}>
                        {customer.accountType}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm">{customer.branch}</TableCell>
                    <TableCell className="font-bold text-accent">{customer.balance}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="font-mono font-bold">
                        {hashIndex}
                      </Badge>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </Card>
  );
};

export default CustomerDatabase;
