## Unit Assignment: Flixster

Submitted by: Virsaviya Efraim

Estimated time spent: **10** hours spent in total

Deployed Application (**required**):
[Flixster Deployed Site](https://codepath-2025-project2-flixster-starter.onrender.com/)

### Application Features

### Walkthrough Video

- [Part 1 on Loom](https://www.loom.com/embed/d1527b1ebd944fbfb0b21ce8e8396106?sid=32666610-ff23-4768-b9ea-87afa01c372e)
- [Part 2 on Loom](https://www.loom.com/share/a2525e51b41a4fee93afcbf4810cd896?sid=476c6301-3087-48bc-b14d-da71d0b785c4)

#### REQUIRED FEATURES

- [x] **Display Movies**
  - [x] Users can view a list of current movies from The Movie Database API in a
        grid view.
    - [x] Movie tiles should be reasonably sized (at least 6 playlists on your
          laptop when full screen; large enough that the playlist components
          detailed in the next feature are legible).
  - [x] For each movie displayed, users can see the movie's:
    - [x] Title
    - [x] Poster image
    - [x] Votes (I assume this means vote average, not votes themselves)
  - [x] Users can load more current movies by clicking a button at the bottom of
        the list, which automatically updates page with new movies (no reloading
        by clicking the browser's refresh button).
- [ ] **Search Functionality**
  - [x] Users can use a search bar to search for movies by title.
  - [x] The search bar should include:
    - [x] Text input field
    - [x] Submit/Search button
    - [x] Clear button
  - [x] Movies with a title containing the search query in the text input field
        are displayed in a grid view when the user either:
    - [x] Presses the Enter key // @TODO
    - [x] Clicks the Submit/Search button
  - [x] Users can click the Clear button. When clicked:
    - [x] Most recent search results are cleared from the text input field and
          the grid view and all current movies are displayed in a grid view
- [ ] **Design Features**
  - [x] Website implements all of the following accessibility features:
    - [x] Semantic HTML
    - [x] [Color contrast](https://webaim.org/resources/contrastchecker/)
    - [x] Alt text for images
  - [x] Website implements responsive web design.
    - [x] Uses CSS Flexbox or CSS Grid
    - [x] Movie tiles and images shrink/grow in response to window size
  - [x] Users can click on a movie tile to view more details about a movie in a
        pop-up modal.
    - [x] The pop-up window is centered in the screen and does not occupy the
          entire screen.
    - [x] The pop-up window has a shadow to show that it is a pop-up and appears
          floating on the screen.
    - [x] The backdrop of the pop-up appears darker or in a different shade than
          before. including:
    - [x] The pop-up displays additional details about the moving including:
      - [x] Runtime in minutes
      - [x] Backdrop poster
      - [x] Release date
      - [x] Genres
      - [x] An overview
  - [ ] Users can use a drop-down menu to sort movies.
    - [x] Drop-down allows movies to be sorted by:
      - [x] Title (alphabetic, A-Z)
      - [x] Release date (chronologically, most recent to oldest)
      - [x] Rating (descending, highest to lowest)
    - [x] When a sort option is clicked, movies display in a grid according to
          selected criterion.
  - [x] Website displays:
    - [x] Header section
    - [x] Banner section
    - [x] Search bar
    - [x] Movie grid
    - [x] About section
    - [x] Contact section
    - [x] Footer section
    - [ ] **VIDEO WALKTHROUGH SPECIAL INSTRUCTIONS**: To ease the grading
          process, please use the
          [color contrast checker](https://webaim.org/resources/contrastchecker/)
          to demonstrate to the grading team that text and background colors on
          your website have appropriate contrast. The Contrast Ratio should be
          above 4.5:1 and should have a green box surrounding it.
  - [x] **Deployment**
  - [x] Website is deployed via Render.
  - [ ] **VIDEO WALKTHROUGH SPECIAL INSTRUCTIONS**: For ease of grading, please
        use the deployed version of your website when creating your walkthrough.

#### STRETCH FEATURES

- [ ] **Embedded Movie Trailers**
  - [ ] Within the pop-up modal displaying a movie's details, the movie trailer
        is viewable.
    - [ ] When the trailer is clicked, users can play the movie trailer.
- [ ] **Favorite Button**
  - [ ] For each movie displayed, users can favorite the movie.
  - [ ] There should be visual element (such as a heart icon) on each movie's
        tile to show whether or not the movie has been favorited.
  - [ ] If the movie is not favorited:
    - [ ] Clicking on the visual element should mark the movie as favorited
    - [ ] There should be visual feedback (such as the heart turning a different
          color) to show that the movie has been favorited by the user.
  - [ ] If the movie is already favorited:
    - [ ] Clicking on the visual element should mark the movie as _not_
          favorited.
    - [ ] There should be visual feedback (such as the heart turning a different
          color) to show that the movie has been unfavorited.
- [ ] **Watched Checkbox**
  - [ ] For each movie displayed, users can mark the movie as watched.
  - [ ] There should be visual element (such as an eye icon) on each movie's
        tile to show whether or not the movie has been watched.
  - [ ] If the movie has not been watched:
    - [ ] Clicking on the visual element should mark the movie as watched
    - [ ] There should be visual feedback (such as the eye turning a different
          color) to show that the movie has been watched by the user.
  - [ ] If the movie is already watched:
    - [ ] Clicking on the visual element should mark the movie as _not_ watched.
    - [ ] There should be visual feedback (such as the eye turning a different
          color) to show that the movie has not been watched.
- [ ] **Sidebar**
  - [ ] The website includes a side navigation bar.
  - [ ] The sidebar has three pages:
    - [ ] Home
    - [ ] Favorites
    - [ ] Watched
  - [ ] The Home page displays all current movies in a grid view, the search
        bar, and the sort movies drop-down.
  - [ ] The Favorites page displays all favorited movies in a grid view.
  - [ ] The Watched page displays all watched movies in a grid view.

### Reflection

- Did the topics discussed in your labs prepare you to complete the assignment?
  Be specific, which features in your weekly assignment did you feel unprepared
  to complete?

N/A

- If you had more time, what would you have done differently? Would you have
  added additional features? Changed the way your project responded to a
  particular event, etc.

N/A

- Reflect on your project demo, what went well? Were there things that maybe
  didn't go as planned? Did you notice something that your peer did that you
  would like to try next time?

N/A

### Open-source libraries used

- [Google Fonts](https://fonts.googleapis.com/css2)
- [Normalize.CSS](https://cdn.jsdelivr.net/npm/normalize.css)
- [Font Awesome](https://cdnjs.cloudflare.com/ajax/libs/font-awesome)

### Shout out

N/A
