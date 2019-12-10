# gobarber-mobile
A complete application for scheduling and managing beauty services.

This client is implemented in  **React-Native**, consumes the backend API available at [gobarber-backend](https://github.com/jonathasgabriel/gobarber-backend) and is used by customers only. The reactjs web application is used by providers only and is available at [gobarber-frontend](https://github.com/jonathasgabriel/gobarber-frontend).

## features
- Login with email and password
- View and edit profile
- View appointments
- Create and cancel appointments

## some of the leveraged techs/libs/tools
- Axios
- ESLint, Prettier, EditorConfig
- Styled components
- Reactotron
- React redux
- Redux saga
- Async storage
- React native gesture handler

##  demo
![](gobarber-mobile.gif)

## how to run

- You need to have the backend API running in order to be able to use this client. Please refer to [gobarber-backend](https://github.com/jonathasgabriel/gobarber-backend) for further instructions
- In the root directory, run `yarn` to resolve node packages and then `yarn react-native run-ios` or `yarn react-native run-android `to start the application in your mobile device emulator/via usb
