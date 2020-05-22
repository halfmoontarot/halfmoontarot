This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Routing 

Using github pages prevents from using any routing which uses the HTML5 history API.
React-router uses this API with BrowserRouter but not with the older HashRouter.
However their use of Link wich doesn't let the user easily assign urls programmatically turned out to be a problem (and has been multiple times in other apps).
I ended up coding it manually (extremely simple!), using https://reactarmory.com/answers/push-state-vs-hash-based-routing as a reference.

## Hosting

Hosted on github pages. 

### `npm run deploy`
Follow this to deploy: https://create-react-app.dev/docs/deployment/

> Deploy on master branch
> Keeop code on this-is-where-the-code-is branch

!!!!! For some reason on deploy, sometimes this breaks github. The site will appear on github but not on the custom domain. Indeed in Settings > Custom domain, the name is erased. So you have to go there and rewrite the custom domain (halfmoontarot.com) in the input, save, and then it's back on the custom domain too/. GO figure.

## CSS

I am using CSS modules + variables with vanilla css :root

## App Structure

In MyComponent
`
import styles from './myComponentStyles'

function MyComponent() {
  const {props} = useMyComponentBehaviour
  <MyComponentPresentation styles={styles} props={props}/>
}
`

## Storybook

Using storybook to unit test at the design level

## React-testing library

Not used here but would if I was implementing tests


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
