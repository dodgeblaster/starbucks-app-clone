# Post

#### Intro

In this service, we are using DynamoDB as the example. DynamoDB is a schemaless No SQL database. In order to get at things in this databse you need to define keys, often called Partition keys and Sort keys. There is a strategy called index overloading, which you can learn about [here](https://www.youtube.com/watch?v=HaEPXoXVf2k), which is why we always call our Partition key PK and our sort key SK.

#### Signature

```
PK: user_id
SK: post#type#id
...
```

#### Access Patterns

| access            | PK      | SK                     |
| ----------------- | ------- | ---------------------- |
| getPost           | user_id | post#type#id           |
| getAllPosts       | user_id | begins_with(post)      |
| getAllPostsByType | user_id | begins_with(post#type) |
