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
1. First you need to create an account at `https://app.mailvalidation.io/accounts/signup/`
2. Get Team name (When you sign up you have a team, its in the URL then use that)
3. Get API KEY `https://mailvalidation.io/support/email-validation-api-key/`
4. Make them environment variables if you don't, there will be error.
- `export API_KEY='your api key'`
- `export TEAM_SLUG='your team name'`
5. Just run `flask run`

## How to use this web

- ### Register
  You are going to fill your username, real email, password twice.

- ### 2. Log in
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
