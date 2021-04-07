# Udemy Coding Challenge Solution

We are building a simple Multiple Choice Question quiz app.

Here, I used the MERN stack because I am most familiar with this stack.

We only have the Questions table in the database with attributes:
* Question title
* Array of Options
* Correct answer among the Options

I played around with the idea that each option could be a sub-document in mongoose(which would reduce the chances of having a very large document) but I decided against this as it would be a little too complex.

We store the options in an Array then iterate over it on the frontend. So, we are able to have as much or little options as we want. This allows for true or false questions as well.

## Checking the answers
Initially, I thought that we could get all the questions, along with their answers from the backend API.

But, it turns out you are not able to stop React-Dev-Tools to not see that array.

So, instead I added another endpoint to the API that takes the id and users answer, then returns a boolean on whether it is correct or not.

#### Testing for endpoints done through postman

## TODOS:
* Loading page
* Ability to add new questions
* Better UI/UX design (A "check all" button for questions.)
* Unit tests
