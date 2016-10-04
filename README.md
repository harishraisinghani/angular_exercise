# AngularJS Exercise
Angular Exercise from Code School - http://campus.codeschool.com/courses/shaping-up-with-angular-js/level/1/

#### What is Angular

* Angular.js  is a client-side JS Framework for adding interactivity to HTML 
* Angular is really easy to test and emphasizes BDD and TDD
* Just a front-end framework so leans on HTML/CSS/JS

#### Why even use Angular?
* Use it if using JS to create dynamic websites
* Organizes your JS
* Helps to create really responsive sites (fast) because it only makes requests to update the existing page

#### Key components of Angular
1. **Directives** - HTML annotations that trigger JS behaviours (eg. show, hide, repeat). Live in HTML file.
2. **Modules** - Where the application components live (eg. store, house, some noun...). Defined and live in app.js file
3. **Controllers** - Where we add application behaviour. Created in app.js file, used in HTML file
4. **Expressions** - How values get displayed in HTML pages. Used in HTML file. 


#### Directives 
* In Angular, you add behaviour to HTML through 'Directives'
* Directive: is a marker on a HTML tag that tells Angular to run/reference some JS code
* Example:
    
    * `ng-app` (in your `index.html` file):
        `<html ng-app="gemStore">` This attaches the Application Module to the entire HTML
    
    * `ng-controller` (in your `index.html` file):
        `<body ng-controller="StoreController">` This attaches a Controller function to the body

    * (in your `javascript` file):
        `function StoreController() { alert.... }`
        

* Some useful built in Directives:
    
    * `ng-show = "some expression"` // This allows you to show HTML elements only when a certain expression is true. For example, the following button will only show if `store.product.canPurchase` is **true**:
    
            <button ng-show = "store.product.canPurchase"> Add to Cart </button>
            

    * `ng-hide = "some expression"` //Opposite of `ng-show`
    * `ng-repeat = "item in app.items"` // Here, you can list each item that are in the _app.items_ array, for example:
            
            <div ng-repeat="product in store.products"> // Will execute following code for each product in the store.product array         
   
    * `ng-src = {{image file }} ` // We need to use this directive to load images because trying to use `<img src = "{{ image file }}` causes an error as the browser tries to load the image _before_ the Expression evaluates
    
    * `ng-click = "some expression" ` // Use this to define the behaviour when the HTML element that has `ng-click` attributed to it, such as changing the value of the expression. This representes **2-way Data Binding**, which is when _Expressions are re-evaluated when a property changes._
    
    * `ng-init = "some value"` // This evaluates an express in the current scope as a default
    
    * `ng-class = "something"` // This allows us to do stuff with classes, such as appending a class if an expression is true
    
            <li ng-class="{ active:tab === 1 }" > // This appends a class='active' to the <li> when some tab === 1 is true
    
    
            
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
          {{store.product.name}} // Note this would never work because don't have access to controller outside of the <div>

* where `ng-controller` is the **directive**, `StoreController` is the **Controller name** and `store` is the **Alias** used  inside of expressions. Note how the product name, price and description are accessed in the expressions.
* Also note that we only have access to the Controller's data inside the div.


#### Filters
* Filters to help transform data
* list of filters: https://docs.angularjs.org/api/ng/filter
* Filters are added to expressions by using the `|` pipe character to take the output from an expression and input it into a filter

        {{ data | filter:options }}

* For example:

        {{ product.price | currency }} // Takes the price expression and puts it through the currency filter which helps format pricing nicely
        
        {{ '1388123412323' | data: 'MM/dd/yyyy @ h:mma' }} -> 12/26/2013 @ 12:50AM // We use a specific data format option

* It's useful to use options to limit the number of objects displayed from an array

        <li ng-repeat='product in store.products | limitTo:3'>

#### Forms

* Example of a form:

        <form name="reviewForm">
          <blockquote>
            <b>Stars: {{review.stars}}</b>
            {{review.body}}
            <cite>by: {{review.author}}</cite>
          </blockquote>
          <select>
            <option value="1">1 star</option>
            <option value="2">2 stars</option>
            <option value="3">3 stars</option>
            <textarea></textarea>
            <label>by:</label>
            <input type="email">
            <input type="submit" value="Submit">
          </select>
        </form>

* We need a way to 'bind' the form element value to the property of the review object. This is done using the `ng-model` directive.

            <select ng-model="review.stars">
            








        
    
