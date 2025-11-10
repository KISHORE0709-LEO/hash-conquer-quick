import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Terminal } from "lucide-react";

const CCodeImplementation = () => {
  return (
    <Card className="p-6">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <Code className="w-6 h-6 text-primary" />
          <h3 className="text-2xl font-bold">C Language Implementation</h3>
        </div>
        <p className="text-muted-foreground">Complete hashing algorithm implementation with collision handling using chaining</p>
      </div>

      <Tabs defaultValue="code" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="code" className="flex items-center gap-2">
            <Code className="w-4 h-4" />
            C Program Code
          </TabsTrigger>
          <TabsTrigger value="output" className="flex items-center gap-2">
            <Terminal className="w-4 h-4" />
            Program Output
          </TabsTrigger>
        </TabsList>

        <TabsContent value="code" className="mt-4">
          <div className="bg-code-bg rounded-lg p-6 overflow-x-auto">
            <pre className="font-mono text-sm text-code-text">
              <code>{`#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define SIZE 10  // hash table size

// Structure to store customer details
struct Customer {
    int account_no;
    char name[50];
    char phone[15];
    float balance;
    struct Customer* next; // for chaining
};

// Hash table (array of pointers)
struct Customer* hashTable[SIZE];

// Hash function
int hashFunction(int account_no) {
    return account_no % SIZE;
}

// Insert a new customer
void insert(int account_no, char name[], char phone[], float balance) {
    int index = hashFunction(account_no);

    // Create new customer node
    struct Customer* newCustomer = (struct Customer*)malloc(sizeof(struct Customer));
    newCustomer->account_no = account_no;
    strcpy(newCustomer->name, name);
    strcpy(newCustomer->phone, phone);
    newCustomer->balance = balance;
    newCustomer->next = NULL;

    // Insert using chaining
    if (hashTable[index] == NULL) {
        hashTable[index] = newCustomer;
    } else {
        // Add to the beginning of the chain
        newCustomer->next = hashTable[index];
        hashTable[index] = newCustomer;
    }
}

// Retrieve customer by account number
struct Customer* search(int account_no) {
    int index = hashFunction(account_no);
    struct Customer* temp = hashTable[index];

    while (temp != NULL) {
        if (temp->account_no == account_no)
            return temp;
        temp = temp->next;
    }
    return NULL; // not found
}

int main() {
    // Initialize hash table
    for (int i = 0; i < SIZE; i++)
        hashTable[i] = NULL;

    // Insert some customers
    insert(1001, "Alice", "9876543210", 2500.50);
    insert(2002, "Bob", "8765432109", 1800.75);
    insert(3003, "Charlie", "7654321098", 1200.00);

    // Search
    int acc;
    printf("Enter account number to search: ");
    scanf("%d", &acc);

    struct Customer* result = search(acc);
    if (result != NULL) {
        printf("\\n--- Customer Found ---\\n");
        printf("Account No: %d\\n", result->account_no);
        printf("Name      : %s\\n", result->name);
        printf("Phone     : %s\\n", result->phone);
        printf("Balance   : %.2f\\n", result->balance);
    } else {
        printf("\\nCustomer not found!\\n");
    }

    return 0;
}`}</code>
            </pre>
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <Card className="p-4 bg-primary/5 border-primary">
              <Badge className="mb-2">Hash Function</Badge>
              <p className="text-sm font-mono text-foreground">account_no % SIZE</p>
              <p className="text-xs text-muted-foreground mt-2">Modulo operation for index calculation</p>
            </Card>
            <Card className="p-4 bg-accent/5 border-accent">
              <Badge variant="secondary" className="mb-2">Collision Handling</Badge>
              <p className="text-sm font-mono text-foreground">Chaining Method</p>
              <p className="text-xs text-muted-foreground mt-2">Linked list for same hash index</p>
            </Card>
            <Card className="p-4 bg-primary/5 border-primary">
              <Badge className="mb-2">Table Size</Badge>
              <p className="text-sm font-mono text-foreground">SIZE = 10</p>
              <p className="text-xs text-muted-foreground mt-2">Hash table array capacity</p>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="output" className="mt-4">
          <div className="space-y-4">
            {/* Output Example 1 - Customer Found */}
            <Card className="p-4 bg-code-bg border-accent">
              <div className="flex items-center gap-2 mb-3">
                <Terminal className="w-4 h-4 text-accent" />
                <Badge variant="secondary">Sample Run 1: Customer Found</Badge>
              </div>
              <pre className="font-mono text-sm text-code-text">
                <code>{`Enter account number to search: 1001

--- Customer Found ---
Account No: 1001
Name      : Alice
Phone     : 9876543210
Balance   : 2500.50`}</code>
              </pre>
              <div className="mt-3 pt-3 border-t border-border/50">
                <p className="text-xs text-muted-foreground">
                  <span className="font-semibold">Hash Calculation:</span> 1001 % 10 = <span className="text-accent font-bold">1</span>
                  {" → "}Customer stored at index 1
                </p>
              </div>
            </Card>

            {/* Output Example 2 - Another Customer */}
            <Card className="p-4 bg-code-bg border-primary">
              <div className="flex items-center gap-2 mb-3">
                <Terminal className="w-4 h-4 text-primary" />
                <Badge>Sample Run 2: Another Search</Badge>
              </div>
              <pre className="font-mono text-sm text-code-text">
                <code>{`Enter account number to search: 2002

--- Customer Found ---
Account No: 2002
Name      : Bob
Phone     : 8765432109
Balance   : 1800.75`}</code>
              </pre>
              <div className="mt-3 pt-3 border-t border-border/50">
                <p className="text-xs text-muted-foreground">
                  <span className="font-semibold">Hash Calculation:</span> 2002 % 10 = <span className="text-primary font-bold">2</span>
                  {" → "}Customer stored at index 2
                </p>
              </div>
            </Card>

            {/* Output Example 3 - Not Found */}
            <Card className="p-4 bg-code-bg border-destructive">
              <div className="flex items-center gap-2 mb-3">
                <Terminal className="w-4 h-4 text-destructive" />
                <Badge variant="destructive">Sample Run 3: Not Found</Badge>
              </div>
              <pre className="font-mono text-sm text-code-text">
                <code>{`Enter account number to search: 9999

Customer not found!`}</code>
              </pre>
              <div className="mt-3 pt-3 border-t border-border/50">
                <p className="text-xs text-muted-foreground">
                  <span className="font-semibold">Hash Calculation:</span> 9999 % 10 = <span className="text-destructive font-bold">9</span>
                  {" → "}No customer at index 9
                </p>
              </div>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  );
};

export default CCodeImplementation;
