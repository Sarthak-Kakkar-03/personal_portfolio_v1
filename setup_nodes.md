# HOW DID I SET THIS SHIT UP
## A link to the video used
- https://www.youtube.com/watch?v=YQCDUJ6hhNY
- Time stamp is 12 minutes something but took me an hour to reach lol
- Used npm create vite@latest
- Then used vite to create project -> Project Name -> React -> JavaScript
- Index.html is used for overall structure
- Cleared App.css and renamed to App.module.css
- Created vars.css
- Put common vars needed across the application
- Added couple of fonts to main.jsx
- Put assets from the tutorial in assets and a tab icon in public
- Linked that with index.html outside
- Also made an utils with a helper that gets the url of an image

# NAVBAR SETUP
- Created a Navbar.jsx and Navbar.modules.css in a new dir called components/Navbar
- Made a const navbar using export const Navbar = () => {return (blah blah);};
- Navbar can be made with nav, then a hyper link tag to home on the button Portfolio
- Then a div called menu on navbar, then an unordered list of lists
- Then created styles in Navbar.module.css so the thing actually works