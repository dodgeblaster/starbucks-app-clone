# Starter Service

To create this service locally on your machine:

```
serverless create --template-url https://github.com/dodgeblaster/sls-starter
```

### Overview

There are 5 parts to this service:

-   domain
-   infra
-   triggers
-   io
-   interfaces

![Overview](https://design-autrpctplz.now.sh/arch-overview.png)

### Flow of execution

![Drivers](https://design-autrpctplz.now.sh/arch-drivers.png)

### Testing

We test the following:

-   100% of the domain with unit tests
-   100% of the triggers with unit tests
-   100% of the real adaptors in infra with integration tests

We use interfaces to insure that each part of the system is following contract between layers.
