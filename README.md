# Can of Books

***

**Author**: 

Mohammad Abu Mattar [GitHub](https://github.com/MKAbuMattar/)

Mahmood Al-Ashqar [GitHub](https://github.com/mahmood-alashqar)

**Version**: 1.2.0
<!-- (increment the patch/fix version number if you make more commits past your first submission) -->

***

## Overview
<!-- Provide a high level overview of what this application is and why you are building it, beyond the fact that it's an assignment for this class. (i.e. What's your problem domain?) -->

Design website, I will sell books that have inspired me or my favorite books. The problem The visitor must be logged in to access the site's properties.

## Getting Started
<!-- What are the steps that a user must take in order to build this app on their own machine and get it running? -->

Follow these steps to install this app:

```bash
git clone https://github.com/MKAbuMattar/can-of-books-frontend.git

cd can-of-books-frontend

# for instal all package
npm i

npm start
```

## Architecture
<!-- Provide a detailed description of the application design. What technologies (languages, libraries, etc) you're using, and any other relevant design information. -->

Languages
```
JavaScript (ReactJS)
CSS
```

Package

1. auth0 / [npm link](https://www.npmjs.com/package/@auth0/auth0-react)

```bash
npm i --save @auth0/auth0-react
```

2. Rreact BootStrap / [npm link](https://www.npmjs.com/package/react-bootstrap)

```bash
npm i --save react-bootstrap bootstrap
```

3. React Router DOM / [npm link](https://www.npmjs.com/package/react-router-dom)

```bash
npm i --save react-router-dom
```

4. Axios / [npm link](https://www.npmjs.com/package/axios)

```bash
npm i --save axios
```

## Change Log
<!-- Use this area to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an example:

01-01-2001 4:59pm - Application now has a fully-functional express server, with a GET route for the location resource. -->

this app has a quick and fast connection to the auth0 for authorization and authentication, 4ms forget data, and your components for broke large component to simplify the code,
after user log in success and  enter to the profile page , the best book to that user will be shown .

## Credit and Collaborations
<!-- Give credit (and a link) to other people or resources that helped you build this application. -->

Collaborations with Mahmood Al-Ashqar [GitHub](https://github.com/mahmood-alashqar)

***

## Time Estimates

lab work 11

Name of feature: login and logout using `Auth0`, if the user try to open any page not allow to open using URL it'll redirect to 404 page.

Estimate of time needed to complete: 3h

Start time: 2:20 PM

Finish time: 5:15 PM

Actual time needed to complete: ~3h

***

lab work 12

Name of feature: login and logout using `Auth0`, if the user try to open any page not allow to open using URL it'll redirect to 404 page,
i added a new component named 'BestBooks.js' and that one is responsable to display the favourite books that user select.


Estimate of time needed to complete: 3h

Start time: 3:00 PM

Finish time: 6:30 PM

Actual time needed to complete: ~3h

***

***

lab work 13

Name of feature: login and logout using `Auth0`, if the user try to open any page not allow to open using URL it'll redirect to 404 page,
i added a new component named 'BestBooks.js' and that one is responsable to display the favourite books that user select.
new you can add/delete new books


Estimate of time needed to complete: 1:30h

Start time: 3:45 PM

Finish time: 5:30 PM

Actual time needed to complete: ~1:45h

***

***

lab work 14

Name of feature: login and logout using `Auth0`, if the user try to open any page not allow to open using URL it'll redirect to 404 page,
i added a new component named 'BestBooks.js' and that one is responsable to display the favourite books that user select.
new you can add/delete new books, add update books


Estimate of time needed to complete: 2h

Start time: 09:30 PM

Finish time: 11:30 PM

Actual time needed to complete: ~2h

***


A link to the deployed version of your latest code.

https://can-of-books.netlify.app/

A link to your public Trello board.

https://trello.com/b/aeKZgfat

A question within the context of today’s lab assignment.

nothing

An observation about the lab assignment, or related ‘Ah-hah!’ moment.

nothing

How long you spent working on this assignment.

~9:45h
