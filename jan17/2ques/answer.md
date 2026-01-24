Q.2 Database Relationships
1. Definition of Database Relationship
A database relationship is a logical connection between two or more tables in a database based on common fields.
These relationships help maintain data integrity, avoid duplication, and allow meaningful retrieval of related data.
In relational databases, relationships are usually created using primary keys and foreign keys.
2. Types of Database Relationships
There are mainly three types of database relationships:
One-to-One (1:1)
One-to-Many (1:N)
Many-to-Many (M:N)
Each type is explained below with an e-commerce example.
2.1 One-to-One Relationship (1:1)
Definition:
In a one-to-one relationship, one record in Table A is related to only one record in Table B, and vice versa.
Example in E-Commerce:
Each Customer has only one Customer Profile.
One customer → One profile
One profile → One customer
Tables Example:
 code

Customer (CustomerID, Name, Email)
CustomerProfile (ProfileID, Address, Phone, CustomerID)
Diagram:
 code

Customer 1 ───────── 1 CustomerProfile
Explanation:
Each customer has exactly one profile that stores additional personal details.
2.2 One-to-Many Relationship (1:N)
Definition:
In a one-to-many relationship, one record in Table A can be related to many records in Table B, but each record in Table B is related to only one record in Table A.
Example in E-Commerce:
One Customer can place many Orders, but each order belongs to only one customer.
Tables Example:
 code

Customer (CustomerID, Name)
Orders (OrderID, OrderDate, CustomerID)
Diagram:
 code

Customer 1 ───────── N Orders
Explanation:
A single customer can place multiple orders over time.
2.3 Many-to-Many Relationship (M:N)
Definition:
In a many-to-many relationship, many records in Table A are related to many records in Table B.
This type requires a junction (bridge) table.
Example in E-Commerce:
Many Customers can buy many Products.
This is implemented using an OrderItems table.
Tables Example:
 code

Customer (CustomerID, Name)
Product (ProductID, ProductName, Price)
OrderItems (OrderID, ProductID, Quantity)
Diagram:
 code

Customer M ──── N Product
        │        │
        └── OrderItems ──┘
Explanation:
A customer can purchase many products, and a product can be purchased by many customers.
3. Importance of Database Relationships
Database relationships are important because they:
Maintain data consistency
Reduce data redundancy
Enable accurate queries and reports
Improve database design and performance
4. Conclusion
Database relationships define how tables are connected in a relational database.
The three main types — one-to-one, one-to-many, and many-to-many — are widely used in e-commerce applications to manage customers, orders, and products efficiently.
A proper understanding of these relationships is essential for designing reliable and scalable database systems.