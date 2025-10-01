# Wildlife Website

This is a project for CS408 showcasing a wildlife website that focuses on accessibility for users who aren't able to fully interact with the website.


## Running this Project

To get started, clone this repository and run the following commands:

```bash
npm -g install http-server
http-server
```
This will launch the webserver, and open a url for you to interact with the website.

## Sources

I developed this while asking questions to my cousin's cousin, who has been a professional web dev for almost 8 years. I did not share the project or code, but asked how to accomplish specific tasks I was trying to do. 

## Accessibility Lab Answers

Color
 - The original color contrast is 3.84:1, I updated to the soft pink background color, which has a contrast of 14.72

Semantic HTML
 - When cycling through html elements using tab, you skip to the bottom where the audio is, before going up to the tabs on the right.
 - It should be updated to the Nav element.

Images
 - I added alt text to the images for screen readers.

Audio Player
 - I used the `<figure>` and `<figcaption>` for audio to add an example description that screen readers could use.
 - Download links for the audio file are available for browsers that do not support HTML audio.

Forms
 - Added a label with the class sr-only for only screenreaders that need it.
 - Made `<label for>` associations, and changed the input to `<textarea>`

Show/Hide
 - Converted the clicking div into a `<button>`

Table
 - Added `<caption>`, and `<th scope="xxx">` tags for screenreaders.

Two things that could be added or changed for accessibility could be changing the font choice for the titles, as it could be a bit hard to read, and add extra highlighting/contrast for any buttons or links that are on the page. A specific layout or screenreader mode would be good to add as well.
