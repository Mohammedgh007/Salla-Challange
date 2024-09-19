# Welcome to Salla Challange Repository

First of all, I would like to say thank you for your consideration; it means a lot for me.  
You can access the deployed Next website on https://salla-front-end-react-typescript-challenge.vercel.app/catalog  
This file will explain several aspect regarding this dummy project that are The code architecture, 
the framework selection, Important consideration regarding the website quality, incomplete features, and special thank.  


## 1. The code architecture
The project is using a simplified version of Clean Architecture. The project code is split within the following layers:   
#### * Presenetation
It handles rendering the user interfacee with processing the displayed text including the translation files. 
  * Layout: each page has a layout file that coordinates between the interactor props and the components to make UI match the design
    and to make using the props central.
  * Component: represents the building unit for the UI.
  * Formatters: It formats enums and primitive into UI or formatted text; for example, converting '2300' into '2300 [local_currency]'
  * translations: It includes the translations file and the localization setup.

#### * App/Intercator
It coordinates between the presentation, business, and infastructure.
  * pages: It coordinates between the business logic, the infastructure logic, and the presentation logic.
  * exception: It represnts the possible errors where each one is throws and handled by different layers.

#### * Business 
It handles the business logic that is done locally in the client side.
  * validators: they validate the user inputs and return the error message if needed.
  * policies: they process a specific domain computation. There was supposed to be CartPolicies class with
    with a method called mergeCarts. It is called when the non-signed user login, and then the website merge beween the local cart
    with the saved cart online, but the api did not include a user based cart access (explain below).

#### * Infastructure
It handles accessing the functionalities of rest api and local storage.
  * rest: It abstracts sending rest api
  * storage: It abstracts accessing the local storage

#### * data
data is the reason for calling **simplified** Clean Arceticture. Each layer was supposed to have its own model and dto, but it will make a lot of 
boilerplate for a frontend code. 
  * reqeustDto: represents the required fields for infastructure, which it needs to access the backend and local storage.
  * model: represents the required fields of a domain model besides deserlization and clone methods.

#### * dependencyInjectionHandler
It handles implementing dependency injection for facilating unit testing, better encapsulation, and better decoupling.
This file is created because Next nor React support dependency injection out of the box.

## 2. The framework selection
The website is for an e-commerical website that requires seo optimization, so I need to utilize something that support SSR.
The great advantage of Next compared to React is that it is a framework instead of a library, and it comes with many features
and configuration out of the box, which saves a lot time. Therefore, Next is much more rubust option. Regarding Vue, it has not yet offered
a mature ssr based on my knowladge. 

## 3. Important consideration regarding the website quality
The project exhibit several challanges for me:
  * It is my first time using Next, and it is my first time building a website that focuses a lot on seo instead of being spa. However,
    I managed to deliever a reasonable result.
  * I work full time, so finishing such a website is not an easy task within the 7/8 periods. I do appreciate exending the deadline one
    day, but it still challanging.
I mentioned those points not because I want to complain, but because I want to say it was not easy, and I promise to deleiver even
better results over time.


## 4. incomplete features
because of the limited scope as well as the limited functionality of fake store api; some features were not complete:
  * User reset password/forgot password: It was not required
  * user sign up: It was not requried.
  * Saving cart online: fake api does not offer a way to store cart products based on the auth token, so the cart is saved locally only.


## 5. Special thank
Again, I would like to express my gratitude for this opporunity. More importantly, I loved this way of testing even though it can be exhausting.
I tried other ways such as solving a coding puzzle during a limited time; it feels like a tool of filtering out instead of a way to demonstrate writing clean code
and using unique framework features. In other words, I loved that it let me feel I am tested on something I will work on.

