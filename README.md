# Coffee Run

An app to keep track of all your coffee shop photos & visits. 

## Requirements
* Python 2.7
* Django 1.11.0
* React 15.5.4
* PostgreSQL 9.x
* Bulma 0.4.1
* Webpack 2.2.0
* Node 7.9.0

## Setting up the app
* In the `coffeerun` directory, create a `secrets.py`
    * Set the `db_user` variable to your postgres username
    * Set the `db_password` variable to your postgres password
* `source coffee-run-env/bin/activate`
    * Make sure to run this in every terminal window for the project!
* `python manage.py makemigrations`
* `python manage.py migrate`
* `npm install`
* `./node_modules/.bin/webpack --config webpack.config.js`

## Running the app
* `python manage.py runserver`
* Visit `http://localhost:8000` in your browser


