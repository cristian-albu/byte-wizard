import { ChapterStructureType } from "@/app/lib/types";

export const chapters: ChapterStructureType[] = [
    {
        chapterTitle: "Workspace setup",
        chapterLink: "workspace-setup",
        chapterImage: "",
        chapters: [
            {
                title: "Install Node, yarn, git, vscode, extensions",
                link: "install-node-yarn",
            },
            {
                title: "Linux and bash basics: Introduction to Linux and command line basics",
                link: "linux-and-bash",
            },
            {
                title: "Git and Github basics: Understanding version control and collaborating on Github",
                link: "git-and-github",
            },
            {
                title: "Chrome and local server setup: Setting up Chrome browser and local development server",
                link: "chrome-and-local",
            },
        ],
    },
    {
        chapterTitle: "Basic JavaScript",
        chapterLink: "basic-javascript",
        chapterImage: "",
        chapters: [
            {
                title: "What is JS: Introduction to JavaScript as a programming language",
                link: "what-is-js-introduction",
            },
            {
                title: "History of JS: Brief overview of JavaScript's development",
                link: "history-of-js-brief",
            },
            {
                title: "Variables and data types: Working with variables and basic data types",
                link: "variables-and-data-types",
            },
            {
                title: "Comments and console.log: Adding comments and debugging with console.log",
                link: "comments-and-console-log",
            },
            {
                title: "Functions: Creating and using functions to organize code",
                link: "functions-creating-and-using",
            },
            {
                title: "Operators: equality, and, or, greater, lesser, modulo: Using various operators for operations",
                link: "operators-equality-and-or",
            },
            {
                title: "If/else: Implementing conditional statements with if/else",
                link: "if-else-implementing-conditional",
            },
            {
                title: "Arrays and indexes: Storing and accessing data using arrays and indexes",
                link: "arrays-and-indexes-storing",
            },
            {
                title: "Array methods: push, pop, shift, unshift: Modifying arrays using array methods",
                link: "array-methods-push-pop",
            },
            {
                title: "For loop: Iterating over sequences using for loops",
                link: "for-loop-iterating-over",
            },
            {
                title: "While loop: Repeating code with while loops",
                link: "while-loop-repeating-code",
            },
            {
                title: "Switch statement: Implementing multi-case conditional statements",
                link: "switch-statement-implementing-multi-case",
            },
            {
                title: "Ternary operator: Using the ternary operator for concise conditionals",
                link: "ternary-operator-using-the",
            },
            {
                title: "Objects: Creating and working with objects and key-value pairs",
                link: "objects-creating-and-working",
            },
            {
                title: "Built in Objects: Exploring built-in objects like Date, Math, etc.",
                link: "built-in-objects-exploring-built-in",
            },
            {
                title: "typeof operator: Checking the type of a variable using typeof",
                link: "typeof-operator-checking-the",
            },
            {
                title: "Type casting: Converting between different data types",
                link: "type-casting-converting-between",
            },
            {
                title: "Hoisting: Understanding variable and function hoisting",
                link: "hoisting-understanding-variable-and",
            },
            {
                title: "Scope and function stack: Exploring scope and the call stack",
                link: "scope-and-function-stack-exploring",
            },
            {
                title: "Closures: Creating and understanding closures in JavaScript",
                link: "closures-creating-and-understanding",
            },
            {
                title: "Recursion: Solving problems using recursive functions",
                link: "recursion-solving-problems-using",
            },
            {
                title: "IIFEs: Using Immediately Invoked Function Expressions for scoping",
                link: "iifes-using-immediately-invoked-function",
            },
            {
                title: "Built in function: Utilizing built-in functions for common tasks",
                link: "built-in-function-utilizing-built-in",
            },
            {
                title: '"this" keyword: Understanding the context of "this" in different scenarios',
                link: "this-keyword-understanding-the-context",
            },
            {
                title: 'Binding: call, apply, bind: Manipulating the value of "this" using bind, call, and apply',
                link: "binding-call-apply-bind-manipulating",
            },
        ],
    },
    {
        chapterTitle: "ES6-ES6",
        chapterLink: "es6-es6",
        chapterImage: "",
        chapters: [
            {
                title: "let and const: Understanding block-scoped variables",
                link: "let-and-const-understanding-block-scoped",
            },
            {
                title: "Arrow Functions: Writing concise function expressions",
                link: "arrow-functions-writing-concise-function",
            },
            {
                title: "Array.forEach: Iterating over arrays with forEach",
                link: "array-foreach-iterating-over-arrays",
            },
            {
                title: "Array.map: Transforming arrays using map",
                link: "array-map-transforming-arrays-using",
            },
            {
                title: "Array.filter: Filtering arrays based on conditions",
                link: "array-filter-filtering-arrays-based",
            },
            {
                title: "Array.slice: Creating new arrays using slice",
                link: "array-slice-creating-new-arrays",
            },
            {
                title: "Array.splice: Modifying arrays using splice",
                link: "array-splice-modifying-arrays-using",
            },
            {
                title: "Array.reduce: Reducing arrays to a single value",
                link: "array-reduce-reducing-arrays-to",
            },
            {
                title: "Array.sort: Sorting arrays with custom comparison",
                link: "array-sort-sorting-arrays-with",
            },
            {
                title: "Array.every: Checking if all elements meet a condition",
                link: "array-every-checking-if-all-elements",
            },
            {
                title: "Array.some: Checking if any element meets a condition",
                link: "array-some-checking-if-any-element",
            },
            {
                title: "Array.indexOf: Finding the index of an element in an array",
                link: "array-indexof-finding-the-index",
            },
            {
                title: "Array.isArray: Checking if a value is an array",
                link: "array-isarray-checking-if-a",
            },
            {
                title: "Array.find: Finding the first element that satisfies a condition",
                link: "array-find-finding-the-first-element",
            },
            {
                title: "for/of: Iterating over iterable objects with for/of loop",
                link: "for-of-iterating-over-iterable",
            },
            {
                title: "The spread operator: Spreading elements of an iterable",
                link: "the-spread-operator-spreading-elements",
            },
            {
                title: "Object entries: Converting objects into arrays of key-value pairs",
                link: "object-entries-converting-objects-into",
            },
            {
                title: "Maps: Working with key-value pairs using Map objects",
                link: "maps-working-with-key-value-pairs",
            },
            {
                title: "Sets: Managing collections of unique values with Set objects",
                link: "sets-managing-collections-of-unique",
            },
        ],
    },
    {
        chapterTitle: "Object Oriented Programming",
        chapterLink: "object-oriented-programming",
        chapterImage: "",
        chapters: [
            {
                title: "Intro to classes: Understanding the concept of classes and objects",
                link: "intro-to-classes-understanding-the-concept",
            },
            {
                title: "Encapsulation: Wrapping data and methods into a single unit",
                link: "encapsulation-wrapping-data-and-methods",
            },
            {
                title: "Abstraction: Simplifying complex systems by hiding unnecessary details",
                link: "abstraction-simplifying-complex-systems",
            },
            {
                title: "Inheritance: Creating new classes based on existing ones",
                link: "inheritance-creating-new-classes-based",
            },
            {
                title: "Polymorphism: Implementing multiple behaviors using a common interface",
                link: "polymorphism-implementing-multiple-behaviors",
            },
            {
                title: "Constructor: Initializing objects with a constructor function",
                link: "constructor-initializing-objects-with",
            },
            {
                title: "Extends: Inheriting properties and methods from a parent class",
                link: "extends-inheriting-properties-and-methods",
            },
            {
                title: "Static props and methods: Using static members shared across instances",
                link: "static-props-and-methods-using-static-members",
            },
            {
                title: "Private, public, protected: Controlling access levels to class members",
                link: "private-public-protected-controlling-access",
            },
        ],
    },
    {
        chapterTitle: "Algorithms & Data Structures 1: Arrays",
        chapterLink: "algorithms-data-structures-1-arrays",
        chapterImage: "",
        chapters: [
            {
                title: "Symmetric Difference",
                link: "symmetric-difference",
            },
            {
                title: "Inventory Update",
                link: "inventory-update",
            },
            {
                title: "No repeats please",
                link: "no-repeats-please",
            },
            {
                title: "Pairwise",
                link: "pairwise",
            },
            {
                title: "Contains Duplicate",
                link: "contains-duplicate",
            },
            {
                title: "Valid Anagram",
                link: "valid-anagram",
            },
            {
                title: "Two Sum",
                link: "two-sum",
            },
            {
                title: "Group Anagrams",
                link: "group-anagrams",
            },
            {
                title: "Top K Frequent Elements",
                link: "top-k-frequent-elements",
            },
            {
                title: "Product of Array Except Self",
                link: "product-of-array-except-self",
            },
            {
                title: "Valid Sudoku",
                link: "valid-sudoku",
            },
            {
                title: "Valid Palindrome",
                link: "valid-palindrome",
            },
            {
                title: "Longest Consecutive Sequence",
                link: "longest-consecutive-sequence",
            },
            {
                title: "Two Sum II Input Array is Sorted",
                link: "two-sum-ii-input-array-is-sorted",
            },
            {
                title: "Typed Arrays",
                link: "typed-arrays",
            },
        ],
    },
    {
        chapterTitle: "HTML & CSS: Beginner",
        chapterLink: "html-css-beginner",
        chapterImage: "",
        chapters: [
            {
                title: "Head and Body: Structuring a basic HTML document with head and body",
                link: "head-and-body-structuring-a-basic",
            },
            {
                title: "Headings & Paragraphs: Creating meaningful headings and paragraphs in HTML",
                link: "headings-paragraphs-creating-meaningful",
            },
            {
                title: "Lists: Organizing content using ordered and unordered lists",
                link: "lists-organizing-content-using-ordered",
            },
            {
                title: "Images: Embedding images to enhance visual content",
                link: "images-embedding-images-to-enhance",
            },
            {
                title: "Anchors and Buttons: Crafting interactive elements with hyperlinks and buttons",
                link: "anchors-and-buttons-crafting-interactive",
            },
            {
                title: "Divs and Spans: Utilizing divs and spans for improved layout and styling",
                link: "divs-and-spans-utilizing-divs-and",
            },
            {
                title: "Design Principles: Understanding fundamental design principles for effective web layouts",
                link: "design-principles-understanding-fundamental",
            },
            {
                title: "Basic CSS: Styling HTML elements with basic CSS properties",
                link: "basic-css-styling-html-elements",
            },
            {
                title: "Flexbox: Mastering flexible layouts using CSS Flexbox",
                link: "flexbox-mastering-flexible-layouts-using",
            },
            {
                title: "Visibility and display",
                link: "visibility-and-display",
            },
            {
                title: "Grid: Creating responsive grids with CSS Grid",
                link: "grid-creating-responsive-grids-with",
            },
            {
                title: "CSS States: Applying styles to different states of elements (hover, active, etc.)",
                link: "css-states-applying-styles-to-different",
            },
            {
                title: "Script: Enhancing interactivity with JavaScript code integrated into HTML documents",
                link: "script-enhancing-interactivity-with",
            },
        ],
    },
    {
        chapterTitle: "The DOM",
        chapterLink: "the-dom",
        chapterImage: "",
        chapters: [
            {
                title: "What is the DOM: Understanding the Document Object Model",
                link: "what-is-the-dom-understanding-the-document",
            },
            {
                title: "DOM data types: Exploring the different data types in the DOM",
                link: "dom-data-types-exploring-the-different",
            },
            {
                title: "Getting elements: Selecting and manipulating DOM elements",
                link: "getting-elements-selecting-and-manipulating",
            },
            {
                title: "Creating and setting elements: Dynamically creating and modifying DOM elements",
                link: "creating-and-setting-elements-dynamically",
            },
            {
                title: "Other DOM APIs: Exploring additional DOM interfaces and methods",
                link: "other-dom-apis-exploring-additional",
            },
            {
                title: "Events: Handling user interactions and events with the DOM",
                link: "events-handling-user-interactions-and",
            },
            {
                title: "Iterating with the DOM: Looping through and processing DOM elements",
                link: "iterating-with-the-dom-looping-through",
            },
        ],
    },
    {
        chapterTitle: "First project: Simple website",
        chapterLink: "first-project-simple-website",
        chapterImage: "",
        chapters: [],
    },
    {
        chapterTitle: "Algorithms & Data Structures 2: Stacks, Queues, Hash Tables",
        chapterLink: "algorithms-data-structures-2-stacks-queues-hash-tables",
        chapterImage: "",
        chapters: [
            {
                title: "Learn how a Stack Works",
                link: "learn-how-a-stack-works",
            },
            {
                title: "Create a Stack Class",
                link: "create-a-stack-class",
            },
            {
                title: "Create a Queue Class",
                link: "create-a-queue-class",
            },
            {
                title: "Create a Priority Queue",
                link: "create-a-priority-queue",
            },
            {
                title: "Create a Circular Queue",
                link: "create-a-circular-queue",
            },
            {
                title: "Create a Set Class",
                link: "create-a-set-class",
            },
            {
                title: "Create a Union on Two Sets",
                link: "create-a-union-on-two-sets",
            },
            {
                title: "Perform an Intersection on Two Sets of Data",
                link: "perform-an-intersection-on-two-sets-of-data",
            },
            {
                title: "Perform an Difference on Two Sets of Data",
                link: "perform-an-difference-on-two-sets-of-data",
            },
            {
                title: "Perform an Subset Check on Two Sets of Data",
                link: "perform-an-subset-check-on-two-sets-of-data",
            },
            {
                title: "Create a Map Data Structure",
                link: "create-a-map-data-structure",
            },
            {
                title: "Create a Hash Table",
                link: "create-a-hash-table",
            },
            {
                title: "Valid Parentheses",
                link: "valid-parentheses",
            },
            {
                title: "Min Stack",
                link: "min-stack",
            },
            {
                title: "Evaluate Reverse Polish Notation",
                link: "evaluate-reverse-polish-notation",
            },
            {
                title: "Generate Parentheses",
                link: "generate-parentheses",
            },
            {
                title: "Daily Temperatures",
                link: "daily-temperatures",
            },
            {
                title: "Car Fleet",
                link: "car-fleet",
            },
            {
                title: "Largest Rectangle in Histogram",
                link: "largest-rectangle-in-histogram",
            },
        ],
    },
    {
        chapterTitle: "Understanding APIs, databases, and servers",
        chapterLink: "understanding-apis-databases-and-servers",
        chapterImage: "",
        chapters: [
            {
                title: "Basic backend structure: Exploring components of a backend system",
                link: "basic-backend-structure-exploring-components",
            },
            {
                title: "NodeJs: Introduction to Node.js for server-side JavaScript development",
                link: "nodejs-introduction-to-nodejs-for",
            },
            {
                title: "SQL and NoSQL: Understanding different types of databases",
                link: "sql-and-nosql-understanding-different-types",
            },
            {
                title: "REST APIs: Designing and building RESTful APIs for communication",
                link: "rest-apis-designing-and-building-restful",
            },
            {
                title: "NPM: Managing dependencies and packages with Node Package Manager",
                link: "npm-managing-dependencies-and-packages",
            },
            {
                title: "Module bundler: Using tools like Webpack for bundling and optimizing code",
                link: "module-bundler-using-tools-like-webpack",
            },
            {
                title: "Basic Node app: Building a simple Node.js application for server tasks",
                link: "basic-node-app-building-a-simple",
            },
        ],
    },
    {
        chapterTitle: "Basic TypeScript",
        chapterLink: "basic-typescript",
        chapterImage: "",
        chapters: [
            {
                title: "What is TypeScript: Introduction to TypeScript and its benefits",
                link: "what-is-typescript-introduction-to",
            },
            {
                title: "Installing and running TypeScript: Setting up the TypeScript environment",
                link: "installing-and-running-typescript-setting-up",
            },
            {
                title: "Types: Understanding basic data types in TypeScript",
                link: "types-understanding-basic-data-types",
            },
            {
                title: "Combining types: Creating complex types using unions and intersections",
                link: "combining-types-creating-complex-types",
            },
            {
                title: "Functions: Typing functions and function parameters",
                link: "functions-typing-functions-and-function",
            },
            {
                title: "Type guards: Ensuring type safety with type guards",
                link: "type-guards-ensuring-type-safety",
            },
            {
                title: "Interfaces: Defining and implementing interfaces for structured data",
                link: "interfaces-defining-and-implementing-interfaces",
            },
            {
                title: "Classes: Using classes to create object-oriented structures",
                link: "classes-using-classes-to-create-object-oriented",
            },
            {
                title: "Generics: Writing flexible and reusable code with generics",
                link: "generics-writing-flexible-and-reusable-code",
            },
            {
                title: "Decorators: Enhancing classes and properties using decorators",
                link: "decorators-enhancing-classes-and-properties",
            },
            {
                title: "Best practices: Following TypeScript coding conventions and best practices",
                link: "best-practices-following-typescript-coding-conventions",
            },
        ],
    },
    {
        chapterTitle: "RegEx",
        chapterLink: "regex",
        chapterImage: "",
        chapters: [
            {
                title: "Search: Using regular expressions to search for patterns in strings",
                link: "search-using-regular-expressions-to-search",
            },
            {
                title: "Replace: Replacing matched patterns with desired content",
                link: "replace-replacing-matched-patterns-with",
            },
            {
                title: "Common patterns: Exploring common regular expression patterns",
                link: "common-patterns-exploring-common-regular",
            },
            {
                title: "Test: Testing strings against regular expressions for pattern matching",
                link: "test-testing-strings-against-regular-expressions",
            },
        ],
    },
    {
        chapterTitle: "HTML & CSS: Intermediate",
        chapterLink: "html-css-intermediate",
        chapterImage: "",
        chapters: [
            {
                title: "Semantic HTML: Being precise in defining the project structure",
                link: "semantic-html-being-precise-in-defining",
            },
            {
                title: "Forms: Creating interactive forms with HTML and CSS",
                link: "forms-creating-interactive-forms-with",
            },
            {
                title: "Text Inputs: Creating single-line text input fields",
                link: "text-inputs-creating-single-line-text",
            },
            {
                title: "Textarea: Implementing multi-line text input areas",
                link: "textarea-implementing-multi-line-text",
            },
            {
                title: "Radio Buttons: Creating mutually exclusive selection options",
                link: "radio-buttons-creating-mutually-exclusive",
            },
            {
                title: "Checkboxes: Enabling multiple selection choices",
                link: "checkboxes-enabling-multiple-selection-choices",
            },
            {
                title: "Select Dropdowns: Designing dropdown menus for selection",
                link: "select-dropdowns-designing-dropdown-menus",
            },
            {
                title: "Form Elements: Organizing inputs within HTML forms",
                link: "form-elements-organizing-inputs-within",
            },
            {
                title: "Labels and Accessibility: Associating labels with inputs for improved accessibility",
                link: "labels-and-accessibility-associating-labels",
            },
            {
                title: "SEO: Optimizing web pages for search engines",
                link: "seo-optimizing-web-pages-for-search-engines",
            },
            {
                title: "A11Y: Ensuring web accessibility and usability",
                link: "a11y-ensuring-web-accessibility-and-usability",
            },
            {
                title: "PostCSS: Enhancing CSS with PostCSS plugins and tools",
                link: "postcss-enhancing-css-with-postcss-plugins",
            },
            {
                title: "SASS: Leveraging the power of SASS for more efficient and modular CSS",
                link: "sass-leveraging-the-power-of-sass",
            },
        ],
    },
    {
        chapterTitle: "Async JS",
        chapterLink: "async-js",
        chapterImage: "",
        chapters: [
            {
                title: "How browsers work: Understanding the browser's architecture and rendering process",
                link: "how-browsers-work-understanding-the-browsers",
            },
            {
                title: "Garbage collector and memory management: Exploring memory allocation and cleanup",
                link: "garbage-collector-and-memory-management-exploring",
            },
            {
                title: "Event loop: Learning how the event loop handles asynchronous operations",
                link: "event-loop-learning-how-the-event-loop",
            },
            {
                title: "Callbacks: Using callbacks for asynchronous programming",
                link: "callbacks-using-callbacks-for-asynchronous",
            },
            {
                title: "Callbacks reminder: Reinforcing the concept of callbacks for asynchronous tasks",
                link: "callbacks-reminder-reinforcing-the-concept",
            },
            {
                title: "Asynchronous: Handling asynchronous tasks in JavaScript",
                link: "asynchronous-handling-asynchronous-tasks",
            },
            {
                title: "Promises: Managing asynchronous operations using promises",
                link: "promises-managing-asynchronous-operations-using",
            },
            {
                title: "Async/Await: Simplifying asynchronous code using async/await syntax",
                link: "async-await-simplifying-asynchronous-code-using",
            },
        ],
    },
    {
        chapterTitle: "Requests and Responses",
        chapterLink: "requests-and-responses",
        chapterImage: "",
        chapters: [
            {
                title: "XMLHttp: Making HTTP requests using the XMLHttp object",
                link: "xmlhttp-making-http-requests-using-the",
            },
            {
                title: "Request: Sending HTTP requests to servers",
                link: "request-sending-http-requests-to-servers",
            },
            {
                title: "Response: Handling server responses",
                link: "response-handling-server-responses",
            },
            {
                title: "Fetch API: Using the modern Fetch API for making network requests",
                link: "fetch-api-using-the-modern-fetch-api",
            },
            {
                title: "Headers and Parameters: Customizing requests with headers and query parameters",
                link: "headers-and-parameters-customizing-requests",
            },
            {
                title: "Error Handling: Managing errors and exceptions in network operations",
                link: "error-handling-managing-errors-and-exceptions",
            },
            {
                title: "JSON: Working with JSON data format",
                link: "json-working-with-json-data-format",
            },
            {
                title: "CORS and Security: Exploring Cross-Origin Resource Sharing and security considerations",
                link: "cors-and-security-exploring-cross-origin-resource-sharing",
            },
        ],
    },
    {
        chapterTitle: "Second project: API website",
        chapterLink: "second-project-api-website",
        chapterImage: "",
        chapters: [],
    },
    {
        chapterTitle: "Algorithms & Data Structures 3: Sorting and Linked Lists",
        chapterLink: "algorithms-data-structures-3-sorting-linked-lists",
        chapterImage: "",
        chapters: [
            {
                title: "Bubble sort",
                link: "bubble-sort",
            },
            {
                title: "Selection sort",
                link: "selection-sort",
            },
            {
                title: "Insertion sort",
                link: "insertion-sort",
            },
            {
                title: "Quick sort",
                link: "quick-sort",
            },
            {
                title: "Merge sort",
                link: "merge-sort",
            },
            {
                title: "Work with nodes in a Linked List",
                link: "work-with-nodes-in-a-linked-list",
            },
            {
                title: "Create a Linked List Class",
                link: "create-a-linked-list-class",
            },
            {
                title: "Search within a Linked List",
                link: "search-within-a-linked-list",
            },
            {
                title: "Remove Elements from a Linked List by Index",
                link: "remove-elements-from-a-linked-list-by-index",
            },
            {
                title: "Add Elements at a specific index in a Linked List",
                link: "add-elements-at-a-specific-index-in-a-linked-list",
            },
            {
                title: "Create a Doubly Linked List",
                link: "create-a-doubly-linked-list",
            },
            {
                title: "Reverse a Doubly Linked List",
                link: "reverse-a-doubly-linked-list",
            },
        ],
    },
    {
        chapterTitle: "Testing with Jest",
        chapterLink: "testing-with-jest",
        chapterImage: "",
        chapters: [
            {
                title: "Setup Jest: Configuring Jest for testing in your project",
                link: "setup-jest-configuring-jest-for-testing",
            },
            {
                title: "Matchers: Using matchers to perform assertions in test cases",
                link: "matchers-using-matchers-to-perform-assertions",
            },
            {
                title: "Async code: Testing asynchronous functions and handling promises",
                link: "async-code-testing-asynchronous-functions-and",
            },
            {
                title: "Setup and teardown: Preparing the environment before and after tests",
                link: "setup-and-teardown-preparing-the-environment",
            },
            {
                title: "Mock functions: Creating and using mock functions to isolate code",
                link: "mock-functions-creating-and-using-mock-functions",
            },
        ],
    },
    {
        chapterTitle: "Third project: Chess website",
        chapterLink: "third-project-chess-website",
        chapterImage: "",
        chapters: [],
    },
    {
        chapterTitle: "Algorithms & Data Structures 4: Binary Search and Sliding Window",
        chapterLink: "algorithms-data-structures-4-binary-search-sliding-window",
        chapterImage: "",
        chapters: [
            {
                title: "Binary search",
                link: "binary-search",
            },
            {
                title: "3Sum",
                link: "3sum",
            },
            {
                title: "Container With Most Water",
                link: "container-with-most-water",
            },
            {
                title: "Trapping Rain Water",
                link: "trapping-rain-water",
            },
            {
                title: "Search a 2d Matrix",
                link: "search-a-2d-matrix",
            },
            {
                title: "Koko Eating bananas",
                link: "koko-eating-bananas",
            },
            {
                title: "Find minimum in rotated sorted array",
                link: "find-minimum-in-rotated-sorted-array",
            },
            {
                title: "Search in a rotated sorted array",
                link: "search-in-a-rotated-sorted-array",
            },
            {
                title: "Time based key value store",
                link: "time-based-key-value-store",
            },
            {
                title: "Median of Two sorted arrays",
                link: "median-of-two-sorted-arrays",
            },
            {
                title: "Best time to buy and sell stock",
                link: "best-time-to-buy-and-sell-stock",
            },
            {
                title: "Longest substring without repeating characters",
                link: "longest-substring-without-repeating-characters",
            },
            {
                title: "Longest repeating character replacement",
                link: "longest-repeating-character-replacement",
            },
            {
                title: "Permutation in string",
                link: "permutation-in-string",
            },
            {
                title: "Minimum window substring",
                link: "minimum-window-substring",
            },
            {
                title: "Sliding window maximum",
                link: "sliding-window-maximum",
            },
        ],
    },
    {
        chapterTitle: "React basics and setup",
        chapterLink: "react-basics-and-setup",
        chapterImage: "",
        chapters: [
            {
                title: "What is React: Understanding the purpose and benefits of React",
                link: "what-is-react-understanding-the-purpose",
            },
            {
                title: "How does React work: Exploring the virtual DOM and reconciliation process",
                link: "how-does-react-work-exploring-the-virtual",
            },
            {
                title: "Vite: Introduction to the Vite build tool for modern web development",
                link: "vite-introduction-to-the-vite-build-tool",
            },
            {
                title: "JSX: Using JSX for writing declarative and expressive React components",
                link: "jsx-using-jsx-for-writing-declarative",
            },
            {
                title: "Components: Building reusable UI blocks with React components",
                link: "components-building-reusable-ui-blocks",
            },
            {
                title: "Props: Passing data and behavior to components using props",
                link: "props-passing-data-and-behavior-to-components",
            },
            {
                title: "Events: Handling user interactions with event handling in React",
                link: "events-handling-user-interactions-with-event",
            },
            {
                title: "Conditionals: Using conditional rendering to display content dynamically",
                link: "conditionals-using-conditional-rendering",
            },
            {
                title: "Rendering lists: Mapping data to components for efficient list rendering",
                link: "rendering-lists-mapping-data-to-components",
            },
            {
                title: "Routing: Navigating between different views using React Router",
                link: "routing-navigating-between-different-views",
            },
        ],
    },
    {
        chapterTitle: "React Class Components",
        chapterLink: "react-class-components",
        chapterImage: "",
        chapters: [
            {
                title: "Constructor: Initializing component state, bindings, and props handling",
                link: "constructor-initializing-component-state-bindings",
            },
            {
                title: "Mounting: Component lifecycle phase when the component is created",
                link: "mounting-component-lifecycle-phase-when-the",
            },
            {
                title: "Rendering: Displaying content and handling updates in the DOM",
                link: "rendering-displaying-content-and-handling-updates",
            },
            {
                title: "Updating: Managing changes and re-renders based on state or props changes",
                link: "updating-managing-changes-and-re-renders",
            },
            {
                title: "Lifecycle Methods: Exploring methods like shouldComponentUpdate and componentDidUpdate",
                link: "lifecycle-methods-exploring-methods-like-shouldcomponentupdate",
            },
            {
                title: "Unmounting: Cleanup and resource release when the component is removed",
                link: "unmounting-cleanup-and-resource-release-when-the",
            },
            {
                title: "Class Component State: Managing local state within class-based components",
                link: "class-component-state-managing-local-state-within",
            },
            {
                title: "Component Composition: Composing complex UIs by nesting class components",
                link: "component-composition-composing-complex-uis-by",
            },
            {
                title: "Error Handling: Implementing error boundaries for better error handling",
                link: "error-handling-implementing-error-boundaries-for",
            },
            {
                title: "Optimization Techniques: Optimizing class components for better performance",
                link: "optimization-techniques-optimizing-class-components",
            },
            {
                title: "Ref Handling: Using refs to access DOM elements and manage focus",
                link: "ref-handling-using-refs-to-access-dom-elements",
            },
        ],
    },
    {
        chapterTitle: "React Hooks",
        chapterLink: "react-hooks",
        chapterImage: "",
        chapters: [
            {
                title: "Introduction to React Hooks and their benefits",
                link: "introduction-to-react-hooks-and-their-benefits",
            },
            {
                title: "useState: Managing component state in functional components",
                link: "usestate-managing-component-state-in-functional-components",
            },
            {
                title: "useEffect: Handling side effects and component lifecycle",
                link: "useeffect-handling-side-effects-and-component-lifecycle",
            },
            {
                title: "useRef: Accessing and manipulating the DOM",
                link: "useref-accessing-and-manipulating-the-dom",
            },
            {
                title: "useCallback: Optimizing performance with memoized callbacks",
                link: "usecallback-optimizing-performance-with-memoized-callbacks",
            },
            {
                title: "useMemo: Caching values for performance optimization",
                link: "usememo-caching-values-for-performance-optimization",
            },
            {
                title: "useReducer: Managing complex state logic with reducers",
                link: "usereducer-managing-complex-state-logic-with-reducers",
            },
            {
                title: "useContext: Sharing data across components efficiently",
                link: "usecontext-sharing-data-across-components-efficiently",
            },
            {
                title: "Custom Hooks: Creating custom hooks to encapsulate reusable logic",
                link: "custom-hooks-creating-custom-hooks-to-encapsulate-reusable-logic",
            },
            {
                title: "Rules of Hooks: Understanding and adhering to the rules of using hooks",
                link: "rules-of-hooks-understanding-and-adhering-to-the-rules",
            },
            {
                title: "Hooks vs. Class Components: Comparing hooks with class component approaches",
                link: "hooks-vs-class-components-comparing-hooks-with-class-component-approaches",
            },
            {
                title: "State and Lifecycle in Hooks: How hooks address state and lifecycle management",
                link: "state-and-lifecycle-in-hooks-how-hooks-address-state-and-lifecycle-management",
            },
            {
                title: "Advanced Hooks Patterns: Exploring advanced patterns like useLayoutEffect",
                link: "advanced-hooks-patterns-exploring-advanced-patterns-like-uselayouteffect",
            },
            {
                title: "Hooks Best Practices: Following best practices for clean and maintainable code",
                link: "hooks-best-practices-following-best-practices-for-clean-and-maintainable-code",
            },
        ],
    },
    {
        chapterTitle: "Redux",
        chapterLink: "redux",
        chapterImage: "",
        chapters: [
            {
                title: "Introduction to Redux and its core principles for state management",
                link: "introduction-to-redux-and-its-core-principles",
            },
            {
                title: "Redux Store, Actions, and Reducers: Understanding the fundamental components",
                link: "redux-store-actions-and-reducers-understanding-the-fundamental-components",
            },
            {
                title: "Managing Application State: Implementing and organizing state using Redux",
                link: "managing-application-state-implementing-and-organizing-state",
            },
            {
                title: "Connecting React Components: Integrating React components with the Redux store",
                link: "connecting-react-components-integrating-react-components",
            },
            {
                title: "Async Actions and Thunk: Managing asynchronous data fetching using Redux Thunk middleware",
                link: "async-actions-and-thunk-managing-asynchronous-data-fetching",
            },
            {
                title: "Redux DevTools: Debugging and inspecting Redux state changes with DevTools",
                link: "redux-devtools-debugging-and-inspecting-redux-state-changes",
            },
            {
                title: "Structuring Redux Code: Best practices for organizing Redux code for scalability",
                link: "structuring-redux-code-best-practices-for-organizing-redux-code",
            },
            {
                title: "Redux in Real Projects: Evaluating scenarios when Redux is a valuable choice",
                link: "redux-in-real-projects-evaluating-scenarios-when-redux-is-a-valuable-choice",
            },
            {
                title: "Reducers and Immutability: Adhering to immutable data principles in reducers",
                link: "reducers-and-immutability-adhering-to-immutable-data-principles",
            },
            {
                title: "Selector Functions: Creating efficient selectors for accessing and transforming state",
                link: "selector-functions-creating-efficient-selectors-for-accessing-and-transforming-state",
            },
            {
                title: "Performance Optimization: Techniques for optimizing performance in Redux applications",
                link: "performance-optimization-techniques-for-optimizing-performance",
            },
            {
                title: "Redux Toolkit: Introducing Redux Toolkit for simplified Redux setup",
                link: "redux-toolkit-introducing-redux-toolkit-for-simplified-redux-setup",
            },
        ],
    },
    {
        chapterTitle: "React Testing Library",
        chapterLink: "react-testing-library",
        chapterImage: "",
        chapters: [
            {
                title: "Introduction to testing React components",
                link: "introduction-to-testing-react-components",
            },
            {
                title: "Writing unit tests using React Testing Library",
                link: "writing-unit-tests-using-react-testing-library",
            },
            {
                title: "Testing user interactions and behavior",
                link: "testing-user-interactions-and-behavior",
            },
            {
                title: "Mocking and simulating data and events",
                link: "mocking-and-simulating-data-and-events",
            },
            {
                title: "Snapshot testing and component rendering",
                link: "snapshot-testing-and-component-rendering",
            },
            {
                title: "Testing asynchronous code and async utilities",
                link: "testing-asynchronous-code-and-async-utilities",
            },
            {
                title: "Best practices for effective component testing",
                link: "best-practices-for-effective-component-testing",
            },
            {
                title: "Integrating testing into your development workflow",
                link: "integrating-testing-into-your-development-workflow",
            },
            {
                title: "Common pitfalls and how to avoid them",
                link: "common-pitfalls-and-how-to-avoid-them",
            },
        ],
    },
    {
        chapterTitle: "Algorithms & Data Structures 5: Trees",
        chapterLink: "algorithms-data-structures-5-trees",
        chapterImage: "",
        chapters: [
            {
                title: "Add a New element to a Binary Search Tree",
                link: "add-a-new-element-to-a-binary-search-tree",
            },
            {
                title: "Find the minimum and maximum value in a binary search tree",
                link: "find-the-minimum-and-maximum-value-in-a-binary-search-tree",
            },
            {
                title: "Check if an element is present in a binary search tree",
                link: "check-if-an-element-is-present-in-a-binary-search-tree",
            },
            {
                title: "Check if tree is binary search tree",
                link: "check-if-tree-is-binary-search-tree",
            },
            {
                title: "Find the minimum and maximum height in a binary search tree",
                link: "find-the-minimum-and-maximum-height-in-a-binary-search-tree",
            },
            {
                title: "Use Depth First Search in a binary search tree",
                link: "use-depth-first-search-in-a-binary-search-tree",
            },
            {
                title: "Use Breath first Search in a Binary Search Tree",
                link: "use-breath-first-search-in-a-binary-search-tree",
            },
            {
                title: "Delete a Leaf Node in a Binary Search Tree",
                link: "delete-a-leaf-node-in-a-binary-search-tree",
            },
            {
                title: "Delete a Node with one children in Binary Search Tree",
                link: "delete-a-node-with-one-children-in-binary-search-tree",
            },
            {
                title: "Delete a Node with Two Children in Binary Search Tree",
                link: "delete-a-node-with-two-children-in-binary-search-tree",
            },
            {
                title: "Invert a Binary Tree",
                link: "invert-a-binary-tree",
            },
        ],
    },
    {
        chapterTitle: "Authentication and Security Concepts",
        chapterLink: "authentication-and-security-concepts",
        chapterImage: "",
        chapters: [
            {
                title: "Introduction to Authentication and Security: Understanding the importance of security in web applications",
                link: "introduction-to-authentication-and-security-understanding-the-importance",
            },
            {
                title: "Authentication vs. Authorization: Differentiating between user identity and access rights",
                link: "authentication-vs-authorization-differentiating-between-user-identity-and-access-rights",
            },
            {
                title: "Common Security Threats: Exploring common vulnerabilities like XSS, CSRF, SQL injection, etc.",
                link: "common-security-threats-exploring-common-vulnerabilities-like-xss-csrf-sql-injection-etc",
            },
            {
                title: "User Authentication Methods: Learning about token-based authentication, sessions, OAuth, etc.",
                link: "user-authentication-methods-learning-about-token-based-authentication-sessions-oauth-etc",
            },
            {
                title: "Hashing and Encryption: Using techniques to secure sensitive data",
                link: "hashing-and-encryption-using-techniques-to-secure-sensitive-data",
            },
            {
                title: "Secure Communication: Ensuring data security during transmission with HTTPS and SSL",
                link: "secure-communication-ensuring-data-security-during-transmission-with-https-and-ssl",
            },
            {
                title: "Security Best Practices: Following guidelines for secure coding, input validation, and more",
                link: "security-best-practices-following-guidelines-for-secure-coding-input-validation-and-more",
            },
            {
                title: "Data Privacy and GDPR: Understanding data protection laws and user privacy concerns",
                link: "data-privacy-and-gdpr-understanding-data-protection-laws-and-user-privacy-concerns",
            },
            {
                title: "Identity Providers: Integrating third-party identity providers for single sign-on (SSO)",
                link: "identity-providers-integrating-third-party-identity-providers-for-single-sign-on-sso",
            },
        ],
    },
    {
        chapterTitle: "CMS",
        chapterLink: "cms",
        chapterImage: "",
        chapters: [
            {
                title: "About WordPress",
                link: "about-wordpress",
            },
            {
                title: "Comparison of Wix, Webflow, and Squarespace",
                link: "comparison-of-wix-webflow-and-squarespace",
            },
            {
                title: "Introduction to Contentful",
                link: "introduction-to-contentful",
            },
            {
                title: "Using Sanity as a CMS",
                link: "using-sanity-as-a-cms",
            },
            {
                title: "Managing content with Shopify",
                link: "managing-content-with-shopify",
            },
            {
                title: "Setting up and defining schema in Contentful",
                link: "setting-up-and-defining-schema-in-contentful",
            },
            {
                title: "Working with the Contentful API",
                link: "working-with-the-contentful-api",
            },
        ],
    },
    {
        chapterTitle: "Fourth project: Personal Portfolio",
        chapterLink: "fourth-project-personal-portfolio",
        chapterImage: "",
        chapters: [],
    },
    {
        chapterTitle: "Deployment",
        chapterLink: "deployment",
        chapterImage: "",
        chapters: [
            {
                title: "Understanding Hosting, domains, DNS, SSL",
                link: "understanding-hosting-domains-dns-ssl",
            },
            {
                title: "Deploying applications with Netlify",
                link: "deploying-applications-with-netlify",
            },
            {
                title: "Deploying applications with Vercel",
                link: "deploying-applications-with-vercel",
            },
        ],
    },
    {
        chapterTitle: "LinkedIn",
        chapterLink: "linkedin",
        chapterImage: "",
        chapters: [
            {
                title: "Building a strong profile",
                link: "building-a-strong-profile",
            },
            {
                title: "Finding jobs and opportunities",
                link: "finding-jobs-and-opportunities",
            },
            {
                title: "Connecting to people with similar interests",
                link: "connecting-to-people-with-similar-interests",
            },
        ],
    },
    {
        chapterTitle: "Algorithms & Data Structures 6: Backtracking",
        chapterLink: "algorithms-data-structures-6-backtracking",
        chapterImage: "",
        chapters: [
            {
                title: "Subsets",
                link: "subsets",
            },
            {
                title: "Combination Sum",
                link: "combination-sum",
            },
            {
                title: "Permutations",
                link: "permutations",
            },
            {
                title: "Subsets II",
                link: "subsets-ii",
            },
            {
                title: "Combination Sum II",
                link: "combination-sum-ii",
            },
            {
                title: "Word Search",
                link: "word-search",
            },
            {
                title: "Create a Trie Search Tree",
                link: "create-a-trie-search-tree",
            },
            {
                title: "Implement Trie Prefix Tree",
                link: "implement-trie-prefix-tree",
            },
            {
                title: "Design add and search words data structure",
                link: "design-add-and-search-words-data-structure",
            },
            {
                title: "Word Search II",
                link: "word-search-ii",
            },
        ],
    },
];

export default chapters;

const chaptersObject = (chapters: ChapterStructureType[]) => {
    const chapterObj: { [key: string]: ChapterStructureType } = {};

    chapters.forEach((chapter: ChapterStructureType) => {
        chapterObj[chapter.chapterLink] = chapter;
    });

    return chapterObj;
};

export const chapterObject = chaptersObject(chapters);
