Customer Account Management System Using Hashing
📌 Project Title
Retrieve a Customer’s Account Details Instantly Using Their Account Number

📝 Introduction
This project demonstrates the use of hashing to store and retrieve customer account details efficiently.
Hashing is a transform and conquer technique in computer science that maps data to a fixed-size table using a hash function, enabling constant time retrieval in most cases.
In this project, customer account numbers are used as keys to access their corresponding information like name, phone number, and account balance.

🎯 Objective
The main objectives of this project are:

To implement a hash table for storing customer records.

To provide instant retrieval of customer details using the account number.

To demonstrate the use of chaining for handling collisions in hashing.

To compare efficiency of hashing versus sequential search.

⚙️ Functionality
The project allows the user to:

Insert customer details into the hash table.

Search customer details using the account number.

Display customer account information if found.

Handle collisions using chaining, ensuring no data is lost.

The system is interactive and supports both:

Pre-inserted sample customers for demonstration, and

User input for adding multiple customers dynamically.

📊 Efficiency
Time Complexity:

Average case (search, insert): O(1) – constant time retrieval.

Worst case (all keys hash to same index): O(n) – linear search in a chain.

Space Complexity: O(n) – proportional to the number of customers stored.

Hashing significantly reduces the time needed to find a customer compared to linear search or sequential scanning.

💻 Code Quality
Modular design with clear functions: insert() and search().

Use of structs to store customer details.

Proper memory allocation and string handling for customer records.

Clean and readable code with comments explaining each step.

🐞 Debugging and Testing
The program has been tested with multiple scenarios:

Searching for an existing customer – returns full account details.

Searching for a non-existing customer – shows "Customer not found."

Inserting multiple customers and checking chaining for collisions.

Input validation for account numbers, names, and balance.

The program has been successfully compiled and executed in GCC using the terminal:

gcc customer_hashing.c -o customer_hashing.exe -Wall
./customer_hashing.exe
🔑 Key Concepts Covered
Hashing and hash functions

Collision handling using chaining

Transform and Conquer algorithmic technique

Time and space complexity analysis

Structured programming in C

👤 Author
Your Name / Student ID
Course: Data Structures and Algorithms / C Programming
Institution: Your College Name

📄 References
C Programming Language – Kernighan & Ritchie

GeeksforGeeks – Hashing in C

Data Structures and Algorithms textbooks

