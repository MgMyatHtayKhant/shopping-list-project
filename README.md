# Memory

### [Video Demo](https://www.youtube.com/watch?v=8YBiQSOyIGI)

#### Description:
The project is a webpage where you can save your day-to-day activities otherwise you will forget about them. You can look back your activities that what time you created. The project is simply based on game memory card. This web project is work on both mobile and computer.

### Technologies used:

- [HTML](https://www.w3schools.com/html/default.asp)
- [CSS](https://www.w3schools.com/css/default.asp)
- [JavaScript](https://www.w3schools.com/js/default.asp)
- [Python](https://www.w3schools.com/python/default.asp)
- [SQL](https://www.w3schools.com/sql/default.asp)
- [Email-Validation](https://mailvalidation.io/support/python-email-validation/)

## How to launch application
1. Install requirements.txt by 'pip install -r requirements.txt'
2. First you need to create an account at `https://app.mailvalidation.io/accounts/signup/`
3. Get Team name (When you sign up you have a team, its in the URL then use that)
4. Get API KEY `https://mailvalidation.io/support/email-validation-api-key/`
5. Make them environment variables if you don't, there will be error.
- `export API_KEY='your api key'`
- `export TEAM_SLUG='your team name'`
6. Just run `flask run`

## How to use this web

- ### Register
  You are going to fill your username, real email, password twice.

- ### Log in
   You are going to fill your registered username, password.

- ### Notes Tab
   There are 3 tabs in the page.
   You are in Notes tab now.
   You can add notes, delete notes and search a note or notes by its created date time.
   You can add a note by clicking Add button and filling Title and Text then click submit button.
   You can delete note by clicking cross icon button.
   You can check notes created date time by hovering notes title. So you can use it for searching.
   You can search specific a note or notes by typing its created date time on search input field near log out.
   Next you click Images Tab.

- ### Images Tab
   You are in Images Tab now.
   You can add images, delete images and search an image or images by its created date time.
   You can add an image by clicking Add button and filling Title and an image file then click submit button.
   You can click images - cross icon, images title and date time will appear.
   if you click images again. Thoese cross icon, images title and created date time will disapper.
   You can delete image by clicking cross icon button.
   You can search specific an image or images by typing its created date time on search input field near log out.
   Next you click Audio Tab.

- ### Audio Tab
   You are in Audios Tab now.
   You can add audios, delete audios and search an audio or audios by its created date time.
   You can add an audio by clicking Add button and filling Title and an audio file then click submit button.
   You can play an audio by clicking respective list items.
   You can check audios created date time by hovering list items. So you can use it for searching.
   If you already clicked a list item, you can use next and previous buttons to play sibling audios also you can pause it.
   You can delete an audio by clicking trash icon button.
   You can search specific an audio or audios by typing its created date time on search input field near log out.

## Explaing the import part of the project

I think you know most part of the codes by looking at it. A few code need to explain so I am here to explain it.

### Email validation

I check a email is a valid or not in two ways. First I check with [email_validator](https://pypi.org/project/email-validator/) and then I check with [mailvalidation](https://mailvalidation.io/) API by creating a function inside the 'helpers.py' file then use this function in /register route that is in 'app.py' file.

```
from email_validator import validate_email, EmailNotValidError

def email_validation(email):
    """Accept email and check it is valid or not"""
    try:
        validation = validate_email(email, check_deliverability=False)
        email = validation.email
    except EmailNotValidError as e:
        print(str(e))
        return False

    # API Validation from https://mailvalidation.io/
    api_key = os.environ.get("API_KEY")
    team_slug = os.environ.get("TEAM_SLUG")

    response = requests.post(
        "https://app.mailvalidation.io/a/" + team_slug + "/validate/api/validate/",
        json={'email': email},
        headers={
            'content-type': 'application/json',
            'accept': 'application/json',
            'Authorization': 'Api-Key ' + api_key,
        })

    valid = response.json()["is_valid"]

    return valid
```

```
# Ensure email was validated
if not email_validation(email):
    return apology("invalid email")
```

### Create folders when log in
when you log in, The web app is going to create a folder named with your session user id and inside that folder create two more folder named audio and image. I used python [pathlib](https://docs.python.org/3/library/pathlib.html) library to create folders, to add files and delete files.


```
session["user_id"] = rows[0]["id"]

session['static'] = Path('static')

session['my-folder'] = session['static'] / str(session['user_id'])
session['my-image'] = session['my-folder'] / 'image'
session['my-audio'] = session['my-folder'] / 'audio'

if not session['my-folder'].exists():
    session['my-folder'].mkdir()
    session['my-image'].mkdir()
    session['my-audio'].mkdir()
```
