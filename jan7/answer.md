a. Package Managers
What is a package manager?
A package manager is a tool that helps developers install, update, remove, and manage libraries (packages) required for a project.
Example:
Instead of manually downloading code files, we use a package manager to install them with one command.
npm install express

Why do we need package managers in backend development?
Package managers are needed because:
They save time by automatically installing libraries
They manage dependencies and their versions
They make projects easy to share and run on other systems
They help maintain consistent environments
Problems faced if package managers are not used
If we don’t use package managers:
We must manually download and copy files
Dependency versions may conflict
Project setup becomes slow and confusing
Team members may face errors while running the project
b. NPM (Node Package Manager)
What is NPM?
NPM is the default package manager for Node.js.
It helps install and manage third-party packages for Node.js applications.
Why is NPM important for Node.js applications?
NPM is important because:
It provides access to thousands of libraries
It manages dependencies automatically
It tracks package versions
It helps run scripts like start, test, etc.
How NPM helps in managing dependencies
NPM stores dependency details in package.json
It installs all required packages into node_modules
It uses package-lock.json to lock exact versions
One command can install all dependencies:
npm install


c. Backend Project Initialization
What is the command used to initialize a backend (Node.js) project?
The command used is:
npm init

Explain what npm init and npm init -y do
npm init
Asks questions like project name, version, entry file
Creates a package.json file based on answers
npm init -y
Skips all questions
Creates package.json with default values
Faster way to initialize a project
d. Files and Folders Created After Project Initialization
package.json
Contains project details
Lists dependencies and scripts
Helps others understand and run the project
node_modules
Stores all installed packages
Created automatically by NPM
Can be recreated using npm install
package-lock.json
Stores exact versions of dependencies
Ensures same packages are installed everywhere
Improves consistency and security
Which files/folders should NOT be pushed to GitHub and why?
node_modules/
Very large in size
Can be regenerated using npm install
Which files must be committed and why?
package.json
Needed to know dependencies and scripts
package-lock.json
Ensures same dependency versions for everyone
Source code files
Main project logic