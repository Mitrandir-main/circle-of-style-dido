# Take-home Challenge

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Challenge

If you're reading this, then we think you could be a good fit for our team. We'd like to give you a small challenge to see how you work. We're not looking for a perfect solution, but we are looking for a solution that is well thought out and demonstrates your ability to work with code.

Below, you'll find 2 exercises we've chosen to represent the work you may encounter in this role.

Our goals with this challenge are:

- Learn as much as we can about how you work.
- Require as a little of your time as possible.
- Introduce you to the types of challenges we have.

This codebase is a small e-commerce site that is somewhat chaotic and we would like you to add a new major feature, a product page.

In the second part of the test, you will be presented with user feedback and a short backlog of around 5 items each. Your task is to prioritize them and look for opportunities to cut scope.

## Task 1 - Extend the prototype

> Spend 1-2 hours on this task

We would like you to extend the prototype to include a new feature.

Your task is not only to add the feature but also to clean up any issues you find in the code as you go. You should note down any issues you find but decide not to fix in the time given. Consider both UX and DevEx in your decision making.

Security is not a concern for this prototype, so you can assume that the data is safe and the API is secure.

### Deliverable 1: Product page
As a user, I want to be able to view a product page so that I can see more information about a product.

#### Acceptance criteria
- A product page exists at `/products/:id`
- The product page displays the product name, description, and price
- The product page displays a list of reviews for the product (see `./pages/api/data.ts` for the data)
- The product page displays multiple images for the product
- users can add and remove the product from their cart

### Deliverable 2: Notes
As you work on adding the new feature, you will likely encounter several issues with the existing codebase. Take notes on any issues you find and try to fix them as you go. However, it's important to prioritize your efforts and not get bogged down in minor issues. 

- Note down any issues you fix as you go and state why you chose to fix them.
- Note down any issues you find but decide not to fix in the time given and state why you chose not to fix them.
- If required note any improvements you would make to your feature if you had more time.
- Finally, is there anything you would want to have in place before taking this application to production?

Keep the notes brief and to the point. You should be able to explain the issue and why you chose to fix it in a few sentences. You can add these notes to the []`NOTES.md`](./TODO.md). file.

## Task 2 - Prioritization
> Spend 15 minutes on this task

Being in a fast-paced environment means we have to deal with many competing priorities. Our ideal candidate can prioritize effectively, think through tradeoffs, and clearly articulate their reasoning.

Our prototype is now live and we've collected some feedback from users and a backlog of features.

### Deliverable 3: 

Take a look at the feature backlog and product feedback the in [`TODO.md`](./TODO.md) file and prioritize them. You should be able to explain your reasoning for each item. 

Consider the following questions when prioritizing:

- Why did you make the choices you did?
- Are there questions you need to answer first to prioritize effectively?
- What new information would cause you to shift your priorities?
- Are there any opportunities to cut scope or deliver the feature in phases?


## How to submit

When you're done, please send us a link or, if private, invite @binzcodes to your repository. We'll review your submission and get back to you as soon as we can.

Please don't hesitate to reach out if you have any questions or concerns. We're happy to help!