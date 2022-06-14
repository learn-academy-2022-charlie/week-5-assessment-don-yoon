# ASSESSMENT 5: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

### 1. What is a hash in Ruby?

  #### Your answer:
> A hash is a collection of key value pairs. It is very similar to objects we learned in JavaScript. There are a few ways to declare a new hash. One way would be to:  
```ruby
some_hash = Hash.new
```  
>The step shown above would create an empty hash, some_hash, for us to work with. To put our data into it, we would need to do the following steps show below.  
```ruby
some_hash = {potato: 1, salt: 0.01, pepper: 0.01, butter: 0.1}
```  
>We have added some ingredients and ratios needed to make some hash browns. If we wanted to changed a certain value, we could access and change it using the following notation  
```ruby
p some_hash[:potato] = 2
# => {:potato=>2, :salt=>0.01, :pepper=>0.01, :butter=>0.1} 
```  
  #### Researched answer:
> We can even add new key value pairs like so:
```ruby
some_hash[:onion_powder] = 0.01
p some_hash
# 3.0.0 :012 > some_hash
 => {:potato=>2, :salt=>0.01, :pepper=>0.01, :butter=>0.1, :onion_powder=>0.01} 
```  
>An important fact about hashes are that they are enumberable. This means we can use many of the same methods that we use on arrays to iterate over the key value pairs in a hash. I would like to spend more time later on researching setting up default procs in ruby hash assignments.
```ruby
hash_browns = Hash.new { |hash, key| hash[key] = []}
```


### 2. What is a gem?

  #### Your answer:
> Ruby gems are small libraries that can be installed using a package manager like yarn. We used gems in class to do Rspec testing as well as create new rails apps. Without these libraries, we as developers would have to either create the necessary from scratch every time, or create our own libraries. Having access to so many gems increases productivity and the time needed to produce an MVP.  
  #### Researched answer:
>Gems are more than simply a library. Each gem comes with its own name, which version it is,  and the platform it works on. Within the gem are 3 major components, the necessary code, the documentation, and the gemspec. The code contains the library, the tests, a Rakefile used to automatically generate tests, code, and other various tasks, and also an executable file that will be placed in whichever path the gem gets installed into. The documentation can be located in the README. The last part is the gemspec which has information about not only the code within, but the author's name and email.


### 3. What is Ruby on Rails?

 #### Your answer:
> Ruby on rails is a framework, not a library. Unlike React, which is a library, Rails is very opinionated. This means that there is a very specific way to accomplish certain tasks. For this tradeoff, Rails accomplishes a very large number of setup processes that developers do not have to worry about. With our limited time with Rails so far, it seems that we do not have to worry about the exact syntax when interacting with databases. Rails will generate its own queries when given the proper commands. This allows us to mainly stay in "Ruby land".  
 #### Researched answer:
 >Ruby on Rails follows the model-view-controller framework. Using the active records pattern, Rails can create a model which maps to a Ruby file and the database table. Once the model has been created, the controller is responsible for determining how to deal with all the requests. It needs to be able to query one or models and render the correct information. An example would be if a user makes a request about certain genres of video games made past the year 2010, the controller would have to query multiple models about games made past the year 2010 and perhaps another model that hold information about all the genres the game falls under. The controller would then take this new subset of the information and pass it along to the view. The view in a basic Rails application is found in the erb file.



### 4. What is a relational database? Are there other kinds of databases?

#### Your answer:
> In class we have learned about PostgreSQL, which is a relational database. These databases allow us to organize the data we need into tables. These tables are akin to classes we have learned throughout the course. Each table is populated by rows of information following a similar data structure as the header. So we can see them as objects created from the class(table). All the data can then be queried using relational operators because all the data has some sort of relation with every other piece of data. The opposite would be non relational databases. Perhaps these would be unstructured as opposed to the structured data we have in relational databases.
####  Researched answer:
> (continued) Other than relational databases, there are non-sql databases and object-oriented databases. As we have learned in class, relational databases are stored as tables. Non-sql databases are stored in a similar manner as nested folders. This allows for storing a lot of data quickly, but comes at the cost of being not as organized. Object-oriented databases store data in objects. Hierarchical databases are stored in a way similar to how parent and child classes work. Information can be passed down depending on the level of access and separate child databases do not interact with each other and the information does not flow up. How these databases are implemented are widely varied as well.


5. What are primary keys? Why are they important?

#### Your answer:
> We can think of them as the unique key for every row created in a table. Whether they are created or deleted, each row will have its own primary key and will not be reused. This way we can keep track of how many had been created and deleted throughout the lifespan of the database.
#### Researched answer:
> Fortunately in Rails, each time we create a row, a primary key is automatically assigned and we do not have to worry about it. The primary key is by default an integer, however more identifiers can be added as long as the value is not full and not repeated. If we were able to add the name of the user to the primary key, we can easily keep track of the number of queries a user has made by querying all the rows with the same user name. However since the default ID is a unique integer, we don't run the risk of mistaking one of potentially thousands of records for a duplicate. Also great when querying specific rows when given the primary key.


## Looking Ahead: Terms for Next Week
Research and define the following terms to the best of your ability.

1. RESTful routes:
> REST stands for Representational State Transfer and it is a style of web architecture. It is a way to organize the way different systems interact with one another. RESTful applications treat the web like a resource(something we have in our application, something we would create a table for). We want to map a path between what the user wants to do and the actual HTTP verbs needed to perform that action on the specified resource.   
2. JSON:
> JSON is short for JavaScript Object Notation and is a format for data. We often see it when data is being sent from a server to a web page. It is the exactly the same as JavaScript objects when it comes to syntax. We see this often when adding Jest dependencies.
```javascript
{
  "dependencies": {
    "jest": "^28.1.1"
  }
}
```

3. ERB:
> ERB stands for embedded ruby. This is how Ruby is embedded into HTML.
```
<li> What: <%= @somethings.method %></li>
```
> This allows us to tell the controller to retrieve some information from the database. If we want to execute something without returning, we use the execution tag.
```
<ol>
  <% @somethings.each do |something|>
    <li> What: <%= @somethings.method %></li>
  <% end %>
</ol>
```

4. Params:
> Params is a class that is used to create Parameter objects which is from the ActionController library denoted by the ::. This syntax is used so that Rails knows that we are calling on parameters from the ActionController namespace. Once we have instantiated a new object from the Parameter class, we can append methods such as .permit or .require to allow permissions for certain actions.

5. API:
> The name Application Programming Interface is quite misleading for someone who has no idea what it is. It doesn't really do anything, but rather it is all the documentation required for using the features whatever particular language has to offer. This is also important because it restricts the access of resources through only the ways mentioned in the API.