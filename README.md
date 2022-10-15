# [Qantas hotel frontend test](#markdown-header)

Dear Marcel,

Thank you again for this opportunity. 

I have spent around 6 hours for this test. The last 2 hours used to style mobile break-points and write this readme.

## Contents

- [Overview](#markdown-header)
- [Installation](#markdown-installation)
- [Framework](#markdown-framework)
- [Files structure](#markdown-files-structure) 
- [Styling](#markdown-styling)
- [Price sorting](#markdown-price-sorting)
- [Future improvements](#markdown-future-improvements)

---

## [Installation](#markdown-installation) [^](#markdown-header)
To run my app
```
yarn && yarn start
```

## [Framework](#markdown-framework) [^](#markdown-header)
I used a fresh install of [Create-React-App](https://create-react-app.dev/) as the base template.

## [Files structure](#markdown-files-structure) [^](#markdown-header)

I placed my code in sub-directories inside `src/components/` using below categorisation: 

`src/components/...`
- `/--atoms`        --------->   it is for the smallest and simplest components.
- `/--molecules`   ---->  it is for a combination of atoms components, it may include some functions and/or external component/library.
- `/--organisms`    ----->  it is for a full-page layout usually represents a page. e.g. header, body and footer components.

In this exercise, I placed `Dropdown` and `Rating` components in the **atoms** directory, `Header` and `TallyTable` components in the **molecules** directory.

## [Styling](#markdown-styling) [^](#markdown-header)
I added SASS library to improve styling experience. I also used the React [module styling feature](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet). It is taking advantage of the unique random string classname for each component taking advantage of React component-based approach as per Qantas holidays page.

## [Price sorting](#markdown-price-sorting) [^](#markdown-header)
For the price sorting functionality, I used an external library called [lodash/orderBy](https://lodash.com/docs/4.17.15#orderBy) to perform nested object values comparison.

## [Future improvements](#markdown-future-improvements) [^](#markdown-header)
I am happy to adapt my code to use Typescript instead of PropTypes.

I have tested my app on Google Chrome, Firefox and Safari browser.

I hope you can capture my approach and thinking method in this small code challenge and could meet your standard.

Many thanks,
Reg