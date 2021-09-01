## Start the project localy:

Clone this repository and run 

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Decisions:

-I used TypeScript to keep everything tidy, since there are forms and different objects being manipulated and the render of some components depend on the accuracy of the object passed.

-Implemented Formik/Yup to avoid verbose validations.

-I used Context API to handle state that would be shared between several components. Simpler than Redux since there arent many actions.
