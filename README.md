# Programming Camp Website

Welcome to the Programming Camp website project! This web application allows users to browse and select courses, with the selected courses displayed in a cart on the right side. It implements the following features:

## Project Features

1. **Course Selection**: Users can browse a list of available courses displayed as cards. They can select a course by clicking on it, and the selected course's name and credit hours will appear in the cart.

2. **Credit Limit**: The system enforces a maximum credit limit of 20 hours. Once the total credit hours of selected courses exceed this limit, users cannot add more courses. This ensures that users do not exceed their allotted study time.

3. **Unique Course Selection**: Users can only add a particular course to the cart once. This prevents duplicate entries in the cart.

## State Management

In this project, state management is handled using React's built-in state management capabilities. Specifically:

- **Component State**: Each course card component manages its own local state to track whether it's selected or not. When a user clicks on a course card, the component's state is updated to reflect its selection status.

- By lifting up the state from card to App which is the parent component for both card and carts makes it possible to pass the prop data to the carts.

- **State Validation**: Before adding a course to the cart, the system checks the global state to ensure that the course is not already selected and that adding it will not exceed the credit limit. If validation fails, the user is notified with an appropriate message.

Feel free to explore the code in the GitHub repository to see the implementation details and the specific state management tools and libraries used in the project.

Happy learning and course registration!
