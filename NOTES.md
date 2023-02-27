Issues and Features for future addressing

1. Card is not in Navigation bar and is not in global state that can be addressable.
    - Decided not to address it as the time will not be enough. However it is definitely a major first thing to implement as it will help DRY in product components.
2. No pagination or lazy loading on products list. Not noticeable now because of few products, but will be a problem with more data.
    - If the app uses lots of data the Home page will need pagination for faster loading. Definitely is a first thing to implement once using real data.
3. filteredProducts constant should be a state.
    - the filteredData value for batter practices can be implemented in use state. Also the filtering can use some improvements but it is not it does the job for now.
4. Product Card hoover feels strange
    - The hoovering of the hover color of the product card is a bit strange, depending on what data would be in the card, based on UX specific different interaction can be done. But for mock app is not needed.
5. Static props in index.tsx are not used in products page.
    - The getStaticProps fetch is not used in Products Page, and there fetch is done again. It should be done in one place and used in the best Next.js way possible. The whole app can use lighter next.js best practices when getting to production. Should warm up my Next.js skills and check out v13.
6. Way of tracking state of fetch request, loading, error, etc.
    - requests should have fetch state tracking, can be done with the state manager of choice. Still it is not urgent and is production level implementation.
7. Use and refactor global styles accordingly
    - All used styles should be put in global styles modules, and the modules should be cleared refactored based on new UI needs. Saves time in development, so should be next thing to do.
8. UI
    - UI needs lots of improvement. There is a quick implementation that can be done for usability, cleanness and positioning. It can be done in an hour and will be the next thing I will get on with. And a second UI implementation that covers also UX will take more time so I will leave it for production level.

Issues Fixed

1. Order of functions and constants in product page to more be intuitive.
    - I knew I couldn't implement lots of features, so I made sure to be at least more understandable to improve on. Also if it is super quick and 0 thought, I do it immediately
2. props in product card to be in interface and have function types
    - More understandable and usable props for future improvements. Quick to do and 0 thought

Implemented Features

1. Product Card Content to be clickable next Link to product page
2. Product Page that fetches the product api based on the id from params
3. Product Page with all data + reviews
4. Used moment. js to have date from now on the reviews.
    - Under 2 minutes and gives lots of value in date viewing experience

-   Generally aimed to do the main requirements and keep it clean
