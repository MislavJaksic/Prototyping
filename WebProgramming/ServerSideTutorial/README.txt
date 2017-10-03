## Mozilla tutorial, Server-side website programming

Source: https://developer.mozilla.org/en-US/docs/Learn/Server-side

## Server-side website programming first steps

### Introduction to the server side

## Django Web Framework (Python)

### Django introduction

Django: Python web framework, Model-View-Template.
        "Complete, Versatile, Secure, Scalable, Maintainable, Portable".
        groups up files for each of the steps below into a seperate file.
        
Web app waits for a HTTP request.
Client sends a HTTP request.
Web app determines what the client wants by looking at the HTTP request.
Web app prepares to answer the client by performing intermidiate steps.
Web app sends a HTTP response to the client.

Django: has a seperate view function for each resource. URI mapper parses and directs HTTP requests and URI data to the appropriate view.
        view is a request handler function which recieves data from the URI mapper and returns HTTP resposnes. Views access data through a model and allow templates to format the response.
        models define the structure, the way to query and manage data.
        template defines the structure of another file (such as a HTML page) with placeholders used to represent content.
        views dynamiclly create HTML pages using templates and populating them with data from a model.
        
urls.py: urlpatterns is the URI mapper.
         sends requests to the right view.

views.py: the heart of the application.
          handles HTTP requests.
          queries data.

models.py: define data models.

templates: specify the structure of the output document.

Other features: Forms, User auth and permission, Chaching, Admin site, Serialising data.
                 
### Setting up a Django development environment



