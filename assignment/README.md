# Frontend Engineer Assignment


## Problem Statement
Build an email client app like Outlook.
Following APIs are provided:
1. Get all emails
2. Get email body for a particular email


## Sample UI
1. Email List View (http://bit.ly/2VtQGcb)
2. Email body View (http://bit.ly/2I5DemI)
3. Color codes (http://bit.ly/2wa2pCa)


## Product Features

1. The app features an email list page. This page shows the list of emails sent to a user.
2. Clicking on any email item in the list should split the screen into a master-slave
(left-right) screen type where the master (left) shows the email list (with the selected
email item) while the slave (right) shows the body of the email. The body of the email is
not known ahead of time and should be loaded only when the email item is clicked.
3. The app should allow any particular email item to be marked as “favorite”, it should be
done via clicking on an email item and then clicking the “Mark as Favorite” button in the
email body section.
4. The app should show read and unread mails in different CSS styles to distinguish
between the same.
5. Upon opening an email that email should be considered as read.
6. Allow filtering emails by “favorites”, “read” and “unread”.
7. Persist favorited and read emails across sessions using persistent storage technologies.
8. Provide the ability to perform bulk actions using checkbox on email list to mark them as read, unread , and delete.


## Must Haves:
1. Render all emails page using the API
2, Each email should have from, subject, short description, date and time.
3. The avatar (circular logo) in each email item should be populated with the first
character of first name (sent in API response).
4. Upon clicking a particular email, render the body section for it using the API. Email body
has 3 sections:
  *  Email subject
  *  Email body
  *  Email date and time
5. Allow email to be marked favorite in the body section of the email
6. Filter emails marked as favorite, read and unread
7. UI should be as close to the mocks provided
8. The date should be rendered in format dd/MM/yyyy hh:mm .
9. Your code should be deployed and available through any of the tools like Heroku, Netlify etc.

## Good to Have:
1. Email list could be long and hence is paginated. There are 2 pages i.e. page 1 and page
2 which can be accessed via the APIs provided below.
2. Provide search functionality on frontend using the email contents.
3. Exception handling within components and API interactions.


## Points to consider:
1. Focus on the modularity of code and design of the solution. Keep performance of the
application in mind.
2. The solution should be coded using React , vanilla JavaScript, HTML and CSS.You can use tooling such as webpack, grunt, gulp, etc.
3. The final solution should work without errors.
4. Do not completely ignore the layout / visual design. A minimalist visual design / layout
must be followed, it is also important for us to evaluate your CSS knowledge.
5. Do not create a div soup instead use semantic HTML tags


## You will be evaluated based on:

1. Correctness and completeness of the solution.
2. Code design and quality.
3. Visual aesthetics (the UI should be as close as possible to the given design).
4. Your understanding of the problem statement.

##  API Sources 

1. Email List API's: 
GET https://6366339879b0914b75cba9c2.mockapi.io/api/email

2. Email Body API:
https://6366339879b0914b75cba9c2.mockapi.io/api/email/<email-item-id>
e.g. GET https://6366339879b0914b75cba9c2.mockapi.io/api/email/3

## To complete your assignment, please fork this repo and commit your work to your fork. When you are ready for us to look at it, give us access to your fork so we can review and run it. Only commits before the due date would be considered.
