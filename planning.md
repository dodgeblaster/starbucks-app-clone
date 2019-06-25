# initial ideas
Make an app that mimics what a company like starbucks would want.
- have users
- users can order coffee
- have clerks
- clerks and process orders from til
- have tv views for store front
- have managers
- managers can manage what each store has in stock
- have shipping app
- shipping automatically gets store stock info and gets tasks to ship items to stores

## for clients:
- customer
- clerk
- manager
- stock / shipping
- storefront-screens

## for backend services:
- GraphQL API which manages all talk between clients and backend services
- products
  - create
  - update
  - remove
  - get
  - getByType
  - getAll
  
- stores
  - create
  - update
  - remove
  - get
  - assignManager
  - updateStock
  
- users (type customer, clerk, manager, stocker)
  - create
  - update
  - remove
  
- promotions (needs products, stores)
  - create
  - update
  - remove
  
- billing (needs users, stores)
  - processAppPayment
  - processTilPayment
  
- shipping (needs stores)
  - addProductToWarehouse
  - addStoreOrder
  - completeStoreOrder
  

