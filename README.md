# Personality Test Application

This is a full-stack personality test application, that takes 5 different questions, maps them into a score and produces a personality trait of either Introvert or Extrovert.

It includes the following:

- Backend REST API with Express & MongoDB Memory Server
- Routes to save, read and delete quiz data
- Custom logger
- Middleware to set and hide some headers for security purposes.
- Custom error middleware
- Middleware to enhance security by sanitizing requests with only whats defined in the schema.
- Unit tests with jest and supertest
- React frontend to complete the test by selecting and submitting answers and view the results.
- Redux, RTK
- React Tailwind css
- React Toastify notifications
- TypeScript

## Usage

- Run all scripts from the main project root directory to install dependencies and run the project itself

### Install Dependencies (frontend & backend)

```
# client & server
npm run init
```

### Run frontend & backend

```
# Run both client (:3000) & server (:4000)
npm run dev

# Run server only
npm run server

# Run client only
npm run client
```

### Run unit tests

```
# Api tests
npm test
```

## Documentation

- `You can view` - [API Documentation](https://documenter.getpostman.com/view/12461632/2s9YyvCLWp)
