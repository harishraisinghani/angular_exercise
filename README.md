# angular_exercise
Angular Exercise from Code School - http://campus.codeschool.com/courses/shaping-up-with-angular-js/level/1/

#### What is Angular

* Angular.js  is a client-side JS Framework for adding interactivity to HTML 
* Angular is really easy to test and emphasizes BDD and TDD
* Just a front-end framework so leans on HTML/CSS/JS

#### Why even use Angular?
* Use it if using JS to create dynamic websites
* Organizes your JS
* Helps to create really responsive sites (fast) because it only makes requests to update the existing page

#### Directives 
* In Angular, you add behaviour to HTML through 'Directives'
* Directive: is a marker on a HTML tag that tells Angular to run/reference some JS code
* Example:
    
    (in your `index.html` file):
    `<body ng-controller="StoreController">`

    (in your `javascript` file):
    `function StoreController() { alert.... }`

#### Modules
* Pieces of angular code - hence what you typical write when coding in Angular are **modules**
* Define dependencies
* **Modules can use other modules** 
* Creating a module:

    `var app = angular.module('store', [ ] );`
    
    Here, `angular` refers to AngularJS, `'store'` is the application name and the `[]` is the list of dependencies or other libraries that we might need - empty for now but **still need to send in an empty array**.
    
    To use this app, need to do the following:
    1. This app will live inside of a `app.js` file.
    2. Add a script tag to reference this file (`<script type="text/javascript" src="app.js"></script>`)
    3. Add a **directive**  _ng-app="store"_ to the html tag: `<html ng-app="store">` By doing this, when the document runs, the content between the html tags will now be treated as an _angular app_.  

#### Expressions
* How we insert dynamic values into the HTML
* Use double curly brackets for notation {{ }}
* Example:
    
    `<p> I am {{4+6}} </p>` will render on the page as `I am 10`

#### Controllers
* Help get data onto the view page
* **It's where we define the app's functions and values**
* **Get into the habit of wrapping up Angular app's into closures (ie. JS functions)**
* Example controller:

        (function() {
          var app = angular.module('store', []);
          app.controller('StoreController', function() {
            this.product = gem; //This is how we link the gem to the Controller
          });
          
          var gem = {
            name: 'Dodecahedron',
            price: 2.95,
            description: 'this is one nice gem',
          }
          
        })():

* The name of the controller here is 'StoreController'. It's important that it's in capital camel case and contains the word _Controller_ in it.
* The second parameter passed into the controller is an anonymous function which is executed with the StoreController is called. 
* From inside the controller, need to set gem to be a **property of the controller.** The property in this case is a **product** of the store. In the above code, we do this with `this.product = gem;`

* **Attaching and accessing controller data to HTML**

        <body>
          <div ng-controller="StoreController as store">
            <h1>{{store.product.name}}</h1>
            <h2>${{store.product.price}}</h2>
            <p>{{store.product.description}}</p>
          </div>

* where `ng-controller` is the **directive**, `StoreController` is the **Controller name** and `store` is the **Alias** used  inside of expressions. Note how the product name, price and description are accessed in the expressions

        
    
