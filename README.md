# Angular Example using State Machine

This is an example project demonstrating how to use the
[**ngx-state-machine**](https://www.npmjs.com/package/@state-management/ngx-state-machine).
library with React. The project showcases:

- Injecting the StateMachine using Angular Dependency Injection
- Subscribing to state changes using the injected StateMachine.
- Dispatching commands using the injected StateMachine.
- Unit testing Angular components that use StateMachine.

The **ngx-state-machine** is an Angular specific wrapper for the core library, [simple-state-machine](https://www.npmjs.com/package/@state-management/simple-state-machine).


## Features
- **State Management**: Powered by `@state-management/state-machine-react`, this project integrates a simple yet powerful state management system.
- **Injecting StateMachine**: Includes examples of injecting the StateMachine using Angular dependency injection.
- **State Manipulation**: Demonstrates `dispatching` commands to execute logic and modify state, and `observing` state changes and modifying UI accordingly.
- **Unit Testing**: Demonstrates how to unit test Angular components that use state management.


## Prerequisites
Make sure you have the following installed:
- Node.js (16.x or later)
- npm (8.x or later)


## Getting Started

### 1. Install Dependencies
Clone the repository and install the required dependencies:
```bash
npm install
```

### 2. Run the application
```bash
npm run start
```

### 3. Run the unit tests
```bash
npm run test
```
