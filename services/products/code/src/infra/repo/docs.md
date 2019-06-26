# Infra

### Overview

We have the following in infra:

-   repo
    -   real
    -   mock
-   emit
    -   real
    -   mock

### Testing

We test 100% of the real adapters of each, which means

-   100% of repo/real
-   100% of emit/real (TODO: figure out how to generate int sns topics)

The mock adaptors are for domain tests

![Int test](https://design-autrpctplz.now.sh/arch-int-test.png)

### Repo Testing

One way to integration test the repo:

1. first test all get requests, and insure they respond with intended empty response
2. test create
3. get created items
4. test update
5. test remove, which acts as a db teardown as well so the next test run can work
   on a clean db

6. test everything while forcing errors (TODO: havent figured out how to do that with real dynamo db setup)
