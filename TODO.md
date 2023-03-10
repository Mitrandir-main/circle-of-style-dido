# Todo

## Early user feedback

-   There are not enough ways to filter products
    -   Time: 3hr
    -   It is not super clear on what is needed.
    -   Needed Info: What the current filters are? What user might have tried to filter? What the filter UX is?
    -   Priority: 4
-   There is no accessibility support for screen readers
    -   Time: 2hr
    -   Accessibility support is a must thing to do on every website. Many users can benefit from it.
    -   Needed Info: What places don't have Accessibility support in the product.
    -   Priority: 2
-   I can't search by product name
    -   Time: 2hr or 14hr
    -   It can be done very quick with frontend filtering, however the best way to do it is with backend api. Therefore it can be delivered in two stages.
    -   Needed Info: What might be the needed search? WHat part of product data would be searched from user? Do we have business benefit from user having to scroll and check out many products before finding the one they are searching for?
    -   Priority: 3 (for first stage)
-   I am seeing lot of products that are out of stock
    -   Time: 1hr
    -   It is very annoying experience and can even loose clients. It is very quick and easy to do.
    -   Needed Info: Where exactly the out of stock is visible, if it is after ordering, then it is possible the most annoying experience. If it is on product page, it is not that bad. Do we have business goal for showing out of stock - FOMO, etc.
    -   Priority: 1
-   I can't see my order history

    -   Time: 8hr - 13hr
    -   Seems like a nice feature to have, but negative experience is not much. It wont affect buying that much.
    -   Needed Info: Is there something special that might be done with order history?
    -   Priority: 5

-   For all feedback it will be very helpful to me to know the following things:
    -   Basic user profile data
    -   Analytics of user's usage, cohorts, timeline in product, etc. For instance we might want to focus on the users spending the most or inviting people the most.
    -   Maybe most important of all. What are the different user journeys for the different cohorts of users and therefore what is the end goal or KPI? If end goal is buying a product => all feedback addressing should be done for the goal improvement. MIght also be inviting people, buying large amounts, etc.

## Feature backlog

-   Some of our API integrations have the credentials hard-coded into our private repository

    -   Time: 2hr
    -   It is definitely a good practice to fix that. It is relatively quick but not urgent from client perspective.
    -   Needed info: How many are these integrations, and what are the risks of keeping them there?
    -   Priority: 5

-   We need to display the product image in the cart

    -   Time: 0.5hr
    -   It is nice to have and very quick and easy to do
    -   Needed info: What is the api endpoint that the card product data uses?
    -   Priority: 3

-   One of our testers reported a crash that recurs once every few days. Cursory investigation hasn't been able to reproduce the issue

    -   Time: 2hr to 12hr
    -   The first thing to see would be the investigation approach, if it wasn't reproduced it might happen again in future, if the approach of reproducing itself is the problem.
    -   Needed info: What the reproduction approach was? How bad the crash place is for the user?
    -   Priority: 2 for quick investigation, to get all variables needed

-   Users on mobile should be able to remove items from their cart with intuitive swipe gestures

    -   Time: 16hr
    -   It is nice to have as UX but hard to develop on browser and might cause problems. Could be substituted with some animation.
    -   Needed info: How many users are using on phone? They might want a native app?
    -   Priority: 7

-   Users should be able to favourite products they like

    -   Time: 5hr
    -   Nice to have, will take some time to develop api and page or filter for the favorites
    -   Needed info: Business goals behind the feature?
    -   Priority: 4

-   The Cart button should be contained within the Navbar and visible on every page

    -   Time: 2hr
    -   It is definitely a must have feature for basic usage. Also it is easy and quick.
    -   Needed info: Is there already global state management?
    -   Priority: 1

-   Once a customer checks out we need to display a receipt in PDF format that comes from from our third-party inventory management system
    -   Time: 16hr
    -   Depending on how the inventory management system works and if we need to create the pdf on the website the time may vary.
    -   Needed info: What are goals, if it is legal requirement or lots of users need it then can of more priority.
    -   Priority: 6
