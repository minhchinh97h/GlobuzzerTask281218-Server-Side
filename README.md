# GlobuzzerTask281218-Server-Side

This repository is created to hold the source code of the task requested by Globuzzer: to create a home page based on their design.

# The main targets here are:
 - To build a responsive web page whose design fits the origin as identically as possible.
 - To get some usable functions.
 - To connect with the backend to retrieve proper data.
 
#  What technologies?
  - Reactjs: 16.7.0
  - HTML5, CSS
  - Fontawesome for temporary icons.
  - Youtube embedded video links.
  - Google embedded map link.
  - Axios, Expressjs 4 and Mongodb for handling backend.

# This is the data from the Mlab's collection, which is used to represent the funtionality of the backend code:
![image](https://user-images.githubusercontent.com/25637330/50737432-d9b70c80-11d1-11e9-92f0-3a91363d5d52.png)
![image](https://user-images.githubusercontent.com/25637330/50737447-f3585400-11d1-11e9-954a-5fae5d070c13.png)

 - The collection's scheme: 
{
    "_id": "id",
    "name": "country name",
    "ISO-code-short": "country ISO-code-short",
    "ISO-code-long": "country ISO-code-long",
    "destination_banner": "country banner",
    "destination_description": "country description",
    "video_iframe": "https link (Youtube) of the country",
    "news": {
        "news1": "country news 1",
        "news2": "country news 2",
        "news3": "country news3"
    }
}
   

 
 
# Current archievements:
  - responsive up from 600px-width.
  - when user chooses a country, the page will be redirected to its dedicated page (backend involved).

# What needs to be considered?
  - because I do not have the design for lower than 600px-width (mobile version), so currently the web page will not function properly
  when scaling the page lower than 600px horizontally.
  - needs to add more transitions and animations, also icons as well.
  
# Some pictures of the web page (upper than 992px):

![image](https://user-images.githubusercontent.com/25637330/50737184-eab24e80-11ce-11e9-8d50-b9a7837ca651.png)

![image](https://user-images.githubusercontent.com/25637330/50737197-0fa6c180-11cf-11e9-8345-9f2b6783cbc2.png)

![image](https://user-images.githubusercontent.com/25637330/50737236-6f9d6800-11cf-11e9-8f03-33bcb5a9646f.png)

# Some pictures of the web page (min-width 600px to max-width 991px):

![image](https://user-images.githubusercontent.com/25637330/50737254-a3788d80-11cf-11e9-8c20-e3be71a01ca5.png)

![image](https://user-images.githubusercontent.com/25637330/50737272-c145f280-11cf-11e9-9796-537fb9126f4f.png)
