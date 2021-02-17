# Chakra Test

## Live demos

This website was created for learning purpose only. None of the content is connected to a real company.

- Check out the finished app here: [APP](https://richi0.github.io/chakra-test/)
- Check out the Storybook of the app here: [STORYBOOK](https://5ffb27a971cbd90021dfa627-xoqacfdefr.chromatic.com/?path=/story/app-site--app-1)

## The purpose

The purpose of this project was to test [Chakra](https://chakra-ui.com/). I wanted to find out if I prefere it over [Tailwindcss](https://tailwindcss.com/). I recreated some of the components I created in my storybook-test project added additional ones and createt a complete website in the end.

## The structure

Every component consits of 4 files:

1. The index.tsx file to provide a default import
2. The componentName.tsx file is the components itself
3. The componentName.test.tsx file to test the component
4. The componentName.stories.tsx file to define the Storybook stories of the component

I wrote a script to create components from a template. This allowed me to create new components quickly and make sure they work as intended. The tests are kept extremely simple, they only check if the component can be renderd. This simple test helped me tremendously in finding bugs in nested components nevertheless.

### The app consists of 3 types of components.

### 1. Display component

All the components in the src/components folder are display components. These components have the following characteristic:

- Stateless
- Callbacks are passed down through props
- Contain their own styles
- Pure functions

This is basicly the components library used to build the website. These components can easily be reused on other websites in the future.

### 2. Page component

All the components in the src/pages folder are page comoponent. These components store the date used to fill the display components and to create individual pages. For a real webapp project these components would most likely fetch the necessary data from a api inside a useEffect function. The layout component provides the data that is identical in every page component. These components need to change if they are used for future web apps because the layout and the data changes.

### 3. App component

The app component is used to provide everything that is used globaly like the ChakraProvider, routing or global css-styles. This component changes for new websites as well.

## The conclusion

Chakra is a great package and the use of it helped me to create this project in react faster, with better quality and higher maintainability. It allowed me to reduce the need of writing css almost complitly. I like the flexibility Chakra provides. The look and feel of every component can be changed and you don't realise a website was created using Chakra, like it is the case in some css framworks. My knowlage of Tailwindcss helped me to learn Chakra within a really shot timespan. I think Chakra and Tailwindcss provide almost the exact same tools, their usage is just a bit diffrent. Chakra removes the need of the Tailwindcss's typical long classnames and that is a great plus for me and the readibility of my code. In the futur I will use Chakra in my react projects and Tailwindcss in all other cases.