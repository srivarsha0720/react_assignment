# Schema Design Fundamentals – Theory

## 1. What is schema design and what does a database schema represent?

Schema design is the process of organizing data in a relational database by defining tables, columns, relationships, and constraints.  
A database schema represents the **logical structure** of the database. It acts as a blueprint that defines how data is stored, accessed, and related to each other.

It includes:
- Tables
- Columns and their data types
- Primary keys and foreign keys
- Constraints and relationships

Example: A `users` table schema defines columns like `id`, `name`, `email`, and their rules.

---

## 2. Why is schema design required before writing backend code?

Schema design is required before backend development because:
- Backend code depends on how data is structured
- APIs need clarity on tables and relationships
- Prevents frequent database changes later
- Improves development speed and reduces bugs

Without schema design, backend code becomes tightly coupled, error-prone, and hard to scale.

---

## 3. How poor schema design impacts data consistency, maintenance, and scalability

Poor schema design can cause:
- **Data inconsistency**: Same data stored in multiple places may not match
- **Maintenance issues**: Updating data becomes complex and risky
- **Scalability problems**: Queries become slow and inefficient as data grows

Example: Storing user address repeatedly in multiple tables causes redundancy and inconsistency.

---

## 4. What validations are in schema design and why databases enforce them?

Validations are rules applied to columns to ensure correct and reliable data.

Common validations:
- `NOT NULL` – prevents empty values
- `UNIQUE` – ensures no duplicate values
- `DEFAULT` – assigns default values
- `PRIMARY KEY` – uniquely identifies a row

Databases enforce validations to maintain **data integrity**, prevent invalid data, and reduce application-level errors.

---

## 5. Difference between a database schema and a database table

| Database Schema | Database Table |
|-----------------|----------------|
| Overall structure of database | Stores actual data |
| Contains multiple tables | Represents one entity |
| Logical design | Physical storage |

A schema is a **blueprint**, while a table is a **data container**.

---

## 6. Why a table should represent only one entity

Each table should represent only one entity to:
- Avoid data duplication
- Maintain clarity and simplicity
- Follow normalization principles
- Make updates and queries easier

Example: User details and order details should be in separate tables.

---

## 7. Why redundant or derived data should be avoided in table design

Redundant data increases:
- Storage usage
- Risk of inconsistency
- Maintenance complexity

Derived data (like total price) can be calculated instead of stored.  
Avoiding redundancy ensures **accuracy and efficiency**.

---

## 8. Importance of choosing correct data types while designing tables

Correct data types:
- Improve performance
- Reduce storage space
- Prevent invalid data
- Improve query efficiency

Example:
- Use `INT` for numeric values
- Use `DATE` for dates
- Use `VARCHAR` for text

Choosing the right data type ensures data reliability and optimal performance.

---

## Conclusion

Schema design is a crucial step in relational database development. A well-designed schema improves data consistency, simplifies backend development, ensures scalability, and maintains long-term database health.