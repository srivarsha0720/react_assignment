# Database Fundamentals – Conceptual Understanding

## 1. Why is db.json not suitable as a database for real projects?

A `db.json` file is a simple file-based storage system and is not suitable for real-world projects because of the following reasons:

- **Performance issues:**  
  Reading and writing the entire file for every operation becomes very slow as data grows.

- **No concurrency support:**  
  If multiple users try to access or modify the file at the same time, data can get corrupted.

- **Poor scalability:**  
  It cannot handle large amounts of data or high traffic efficiently.

- **No reliability:**  
  If the server crashes while writing to the file, data may be lost or damaged.

- **No advanced features:**  
  It does not support indexing, transactions, backups, or complex queries.

Therefore, `db.json` is suitable only for learning and small demos, not for production systems.

---

## 2. What are the ideal characteristics of a database system (apart from just storage)?

An ideal database system should have the following characteristics:

- **Performance:**  
  It should read and write data quickly, even with large datasets.

- **Concurrency:**  
  It should allow multiple users to access and modify data at the same time safely.

- **Reliability:**  
  Data should remain safe even if the system crashes or restarts.

- **Data Integrity:**  
  It should maintain accuracy and consistency of data using constraints and validations.

- **Scalability:**  
  It should handle growth in data size and number of users without performance loss.

- **Fault Tolerance:**  
  It should recover automatically from hardware or software failures.

These features make the database suitable for real-world applications.

---

## 3. How many types of databases are there? What are their use cases or applications?

There are mainly two major types of databases:

### 1. Relational Databases (SQL)

These store data in tables with rows and columns and use structured schemas.

**Examples:** MySQL, PostgreSQL, Oracle  

**Use cases:**
- Banking systems  
- Student management systems  
- E-commerce applications  
- Any system with structured and relational data  

They are best when data consistency and relationships are important.

---

### 2. Non-Relational Databases (NoSQL)

These store data in flexible formats like documents, key-value pairs, or graphs.

**Examples:** MongoDB, Redis, Cassandra  

**Use cases:**
- Social media applications  
- Real-time chat applications  
- Big data and analytics systems  
- Applications with fast-changing or unstructured data  

They are best when high scalability and flexibility are required.

---