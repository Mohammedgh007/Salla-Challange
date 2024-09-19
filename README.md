TODO:
- Handle detecting internet connection exception.
- Handle showing an alert when detecting internet disconnection.
- depends more on url for seo
- add animation for appearing new items in search
- verifies each file has a documentation.
- reorganize file structure to remove a folder whose content is one file.
- adding alert for all users actions
- animation for adding a product.
- when user signs in, it integrates the cart, when the user signs out the cart is deleted locally.
- add CartRest for syncing online cart with local cart
- add CartPolicies for merging the carts products.


Since this is a demo, there are several non-working features, which were not required:
- user reset password
- user sign up
- user sign out 
TO REMARK:
- enum would have been included.
- more folders in components
- translations are used used per layout, component, or formatter. They are written now to save time.

important notes:
- cart is used locally, when storing too much data, it will remove the content because of browser restrictions.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
