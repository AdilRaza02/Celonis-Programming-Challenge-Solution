**Programming Challenge Solution**

**Formulas:**

** **

(1)

The possible solution can be that we extract so-called nodes with locations (left or right). To find the location, I would extract the operation character (+, \*, /, -, etc.) with the highest precedence and then would consider the right side of the expression as right location and left side of the expression as left location. I would do this same operation recursively always from the left side until all operational characters are covered. Moreover, create a node class with variables as following:

- type (String)
- value (Float)
- peration (String)
- leftNode (Object)
- rightNode (Object)

Add all extracted so-called nodes according to the location into the node object. Furthermore, write a recursive function on the node object to convert the output to JSON format. I will consider JSON as it is human-readable and easy to handle on any programming platform.

Lastly, if we want to evaluate the expression string we can use the same recursive function with conditional statements according to the operation variable and do calculations.



(2)

 A recursive function with conditional statements on type of nodes (ADDITION, MULTIPLICATION, etc.) of the AST JSON. Inside the conditional block doing the operation with a recursive call to the left and right nodes. When all nodes are covered returning the value. Additionally, pushing the content inside another array while an operation is performed inside the conditional block. And later converting the array indices to input fields for a visualize view. Any changes occurred in the input would be directly reflected or change to that array which would be further converted to string type to perform the whole operation again. From AST to the visualize version.



 (3)

In the case of interpretation, the operations or functions used in the formula would be evaluated every single time. However, in JIT compilation the formula would be optimized using multiple techniques such as caching the frequently used operations or functions.

**Short Description (only considering cache process):**

 For JIT Compilation feature we would need to add three additional modules.

**Functions to be implemented:**

- Identification Module:
    - Get input
    - Check if it is already in the cache module
    - If no, send to threshold module

- Threshold Module:
    - Get input
    - Get frequency
    - Check the frequency
    - If condition matches, send to cache module
    - Else, set the frequency

- Cache Module
    - Get input
    - Set input
    - Store input



**Algorithms:**

(1)

It uses Dijkstra&#39;s algorithm to find the shortest path between nodes.

Following is the high-level description of the algorithm:

The algorithm selects an initial node (in our case we select one) and then analyze the distance of the edges to the other adjacent nodes. Furthermore, the algorithm selects the adjacent node with the shortest distance and continues to perform this same operation to all other nodes and calculates the shortest path.

(2)

The time complexity of the algorithm completely depends on how the searching suitable node operation is performed. In our case, there are four main operations involved.

- Analyse all adjacent nodes distance and find the node with the shortest distance.
- Mark that node as visited by popping it from the queue.
- Update the object (the node which we are analyzing from) by assigning the shortest path adjacent node in the previous variable of the   object.
- Track the parent node.

The expected time complexity is going to be the following:

- For the analyzing part, it will be N iterations which is the number of edges we have. O(N)
- For the marking and tracking the parent node part, it will be a constant which we can ignore.
- For the updating part, it will be M iterations which is the number of nodes we have. O(M)

**The final expected time complexity is O(N\*M).**

(3)

The bug appears at the L node where no edges are defined. I identified the bug by first adding a console.log for the queue object in the exception block and used the breaking point debugging process. Finally, with the output from the debugging process, I drew the rough sketch of the node inputs on the paper and then compared it with the edges input.

To resolve this bug either we can remove the L node completely or assign some edges to connect it with other nodes.



**Architecture:**

(1)

Vue.js is a progressive front-end framework to develop UI on the web. Because of its independent nature, the features of this framework can be used as a library to compliment the already existing web applications.

Its high-level architecture is divided into five different segments.

- Build System which contains all essential libraries and an npm package to be used.
- State management system which is used to manage the current state of the application.
- Routing system which routes relevant component from the Component system according to the state.
- Component system which has all the components.
- Render system which compiles and renders the relevant component on the browser according to the route.

(2)

- The mountComponent calls the render function to compile the template and simultaneously pass the dependencies of that component to the Watcher (Observer) to apply it to the DOM. This method is directly linked to the State management where changes are observed and Render system where the template is compiled and rendered on the browser.

- The compiler consists of three main methods. The parser which converts the template string to Abstract syntax tree string. The optimizer which identifies the static parts that are used by renderer at a later stage to optimize the rendering process. A generator which combines Parser and Optimizer outputs. This is part of the Render system.

- The initMixin is the first entry point of the code, where all required dependencies such as props, methods and variables to run the framework are defined. This is part of the Build system.

- The initState consists of all required dependencies related to state management such as props, methods and watcher functions are defined. This is part of the State management system.

(3)

According to their GitHub repository following are the community guidelines:

- All development should be done in dedicated branches.
- Checkout from the topic branch from the relevant branch and then merge.
- Always work in the src folder.
- Multiple small commits are acceptable.
- Always pass the npm test.
- To add a new feature, add the test case and a reason to add the new feature.
- To fix a bug, add issue id along in the PR title, add a detailed description if possible add the demo. and also add test coverage if     applicable.

The project is maintained by a small core team and a 300+ open source community. Mostly, the development is done on GitHub platform by using the Pull Request mechanism.
