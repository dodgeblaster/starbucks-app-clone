# starbucks-app-clone

This is a demo app, demonstrating how to build a solution with multiple clients accessing a set of serverless microservices. 

### FRONT
For the front end, we will be building:
- app for store clerks to take orders in store
- app for tvs in store to show the menu
- app for store managers to manage store stock
- app for shipping warehouse to manage shipments to stores
- app for customer to buy coffee on their way to store to pick up

All of these different apps will be using React.JS, 

### BACK
All frontend apps will talk to a GraphQL API (acting as a BFF (Backend for Frontend)) which talks to the following microservices:
- products
- stores
- users
- billing
- promotions
- shipping
