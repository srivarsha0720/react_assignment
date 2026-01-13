1. Node.js Architecture
Node.js is built to run JavaScript outside the browser and handle many users efficiently using non-blocking operations.
JavaScript Engine (V8):
V8 is the JavaScript engine developed by Google.
It converts JavaScript code into machine code so it can be executed fast.
Node.js uses V8 to execute all JavaScript logic.
V8 also manages memory using garbage collection.
Node.js Core APIs:
These are built-in modules provided by Node.js.
Examples: fs, http, path, os, crypto.
They allow JavaScript to interact with the system (files, network, OS).
Most core APIs are asynchronous by default.
Native Bindings:
Native bindings connect JavaScript with C/C++ code.
They act as a bridge between Node.js APIs and low-level system operations.
Heavy operations are written in C/C++ for better performance.
Example: file system operations use native bindings internally.
Event Loop:
The event loop allows Node.js to perform non-blocking operations.
It continuously checks for completed tasks and executes their callbacks.
Helps Node.js handle multiple requests using a single main thread.
2. libuv
What is libuv?
libuv is a C library used by Node.js.
It provides asynchronous I/O capabilities.
It handles the event loop and thread pool internally.
Why Node.js needs libuv:
JavaScript alone cannot handle OS-level operations.
libuv provides:
File system access
Networking
Timers
It makes Node.js cross-platform (works on Windows, Linux, macOS).
Responsibilities of libuv:
Managing the event loop
Handling asynchronous I/O
Maintaining the thread pool
Managing timers and callbacks
Handling network operations
3. Thread Pool
What is a thread pool?
A thread pool is a group of worker threads.
These threads execute heavy or blocking tasks in the background.
Default size is 4 threads (can be increased).
Why Node.js uses a thread pool:
JavaScript runs on a single thread.
Some tasks are CPU-intensive or blocking.
Thread pool prevents blocking the main event loop.
Improves performance and responsiveness.
Operations handled by the thread pool:
File system operations (fs.readFile, fs.writeFile)
Cryptography (crypto.pbkdf2, crypto.randomBytes)
Compression (zlib)
DNS lookup (dns.lookup)
4. Worker Threads
What are worker threads?
Worker threads allow running JavaScript in parallel.
Each worker has its own event loop and memory.
Introduced to handle CPU-intensive tasks.
Why are worker threads needed?
Heavy calculations can block the main thread.
Worker threads run tasks in parallel.
Improves performance for CPU-heavy work like:
Image processing
Data analysis
Large calculations
Difference between Thread Pool and Worker Threads:
Thread Pool
Worker Threads
Used internally by Node.js
Used by developers
Handles background tasks
Runs custom JS code
Shared memory
Separate memory
Limited control
Full control
5. Event Loop Queues
The event loop processes tasks using different queues.
Macro Task Queue
Handles larger asynchronous tasks.
Executed after microtasks.
Examples:
setTimeout
setInterval
setImmediate
I/O callbacks
Micro Task Queue
Has higher priority than macro tasks.
Executed immediately after current execution.
Examples:
Promise.then()
Promise.catch()
queueMicrotask()
Execution Priority
Current JavaScript execution
Micro Task Queue
Macro Task Queue
Examples
Microtask: Promise.resolve().then(() => {})
Macrotask: setTimeout(() => {}, 0)