[![CodeFactor](https://www.codefactor.io/repository/github/adamelamrani/jump-to-digital-nuwe/badge)](https://www.codefactor.io/repository/github/adamelamrani/jump-to-digital-nuwe)

# About Jump2Digital/NUWE Hackathon challenge:

In the first phase of this challenge, the developers will have to lay out a group of modular price-cards with the subscription plans offered by a company.

## Solution:

The project was developed following the same structure as the one provided in the Figma document:
https://www.figma.com/file/8DTsCBsanZ0OEoLdiY1qzW/front_creator?node-id=4%3A194

The challenge is divided in three sections: - Develop the Desktop view ✅ - Make it responsive for Mobilephones ✅ - Add an extra dialog where the user will provide his email to get contacted by the personal of the company. ✅

### First part of the exercice:

In this part of the exercice I had to replicate what was provided in Figma.

### Second part of the exercice:

This was not provided in Figma, so I decided to do it my way.
I added media queries in the styles sheet to change how the view will be displayed. Instead of having it in a row, I changed it to a column.
Hover effects are not available on phone, since the phone will only support the "onClick" action

You can see the challenge deployed in the following link: https://jump-to-digital-nuwe.vercel.app/

### Third part of the exercice:

Once the first two were done, we are asked to add an extra dialog where the user will introduce his email.
My solution to this exercice has been to create a modal (responsive) that will validate if the email is correct (if not, it won't be possible to press the button).
I have added a close button to avoid being stuck with the modal, in case that the user didn't want to introduce the email.

## Technologies used:

This project was created using yarn create-react-app --template typescript.

## Folder structure:

<pre>
Inside the src folder:
.
├── components            # Folder containing all the components and their styles
├── pages                 # Folder all the pages and their styles
├── utils                 # Folder containing helpfull utilities such as functions
└── App.tsx               # Root component for React
   
</pre>

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn build`

Builds the app for production to the `build` folder.

### `yarn eject`
