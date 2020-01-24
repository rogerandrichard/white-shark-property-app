# Git Commands and Heroku - Test

- git init - Create a new git repo
- git status - View the changes to your project code
git add - Add files to staging area
git commit - Creates a new commit with files from staging area
git log - View recent commits

-------------------------
heroku --version

heroku login (authenticate with heroku account)
heroku create expensify-white-shark

Behind scenes it is:
1) setting up new application
2) adding a new remote to git(run git remote -v)

git push origin master OR git push (defaults to origin master)
git push heroku master
   - installing dependencies
   - run webpack
   - start server

heroku open(will open your app url in browser)

When Heroku starts us it will try and run the 'start' script in package.json, so we have to create that:

"start": "node server/server.js"

Also, change server.js so port is dynamically created by heroku:

const port = process.env.PORT || 3000

Teach Heroku how to run webpack. It will run webpack to generate bundle.js, bundle.js.map, styles.css, styles.css.map.
The following will run after Heroku installs all of the dependencies:

"heroku-postbuild": "yarn run build:prod"


Heroku logs shows logs on Heroku server
