### Using the demo example of a Radix-ui Navigation menu in a React/Nextjs project
---  

Create a new Nextjs/React project locally using npm in the console.

`npx create-next-app@latest`

The dependencies required are downloaded with the following console commands:<br>
`npm install @radix-ui/react-navigation-menu`<br>
`npm install @radix-ui/themes`<br>
`npm install @radix-ui/react-icons`<br>
`npm install classnames`<br>
`npm install @stitches/react`<br>
<br>

The example of the demo navigation menu is on a codesandbox page [here](https://codesandbox.io/p/sandbox/radix-ui-nav-menu-8r4sx4?file=%2Fsrc%2FApp.js).

-------------------------------------------------

The code from the code sandbox from the path `src>App.js` was copied and placed into a new component named 'TopMenu.js'.
The folder structure is `src>components>TopMenu.js`<br>

IMPORTANT! - Add this to the top of the 'TopMenu.js' script:<br>

`"use client";`<br>

Otherwise you will see the error:<br>
`[0 , react__WEBPACK_IMPORTED_MODULE_0__.createContext)]`

-------------------------------------------------------


The content of stylesheet 'styles.css' was copied into the project and placed into the globals.css file.

This file contains styling for the page itself and not the TopMenu.js component. The only exception is the 'svg' element.

-------------------------------------------------------

Now that the menu is saved as a component, the file can be added to your layout.js file.
Place it into the body section, but above any {children}:

```<TopMenu/>```

This will ensure that the menu is displayed on the template of your page, thus becoming the default menu, so can be seen regardless of any page you are are viewing within your application.
If you have a header section, you may want to place your `<TopMenu/>` below it in the layout.js file.

-----------------------------------------------

Brief explanation of the `TopMenu.js` file:

The first section of functions relate to css animations(keyframe functions).
These handle the animation of the menu.

The CSS for the TopMenu.js file is contained within the file and is generated by passing objects.




-----------------------------------------------


npm run dev

------------------------------------

You can apply a theme by importing the component and including it in your layout.js file.
For the purposes of this demo, it is not needed.


`const ContentListItemCallout = React.forwardRef(({ children, ...props }, forwardedRef) {`<br>
`}`

This is the section for the SVG image and text in the menu.

React.forwardRef()
forwardRef lets your component expose a DOM node to parent component with a ref.
------------------------------






-----------------

## Colours
===

Radix uses a set of pre-chosen colours and gives you 12 hues of the same colour to work with.
For example 'purple' ranges from 1 to 12. 

To use a colour, such as colour purple at hue level five, you would refer to it in the code as `purple.purple5`

The lighter the hue, the lower the number and the value will range from:

purple.purple1 to purple.purple12


The menu hover colour in the code is set in two places.

The colour for the parent section of the menu, is set within `const itemStyles`.<br>
For the child menu items, it is within `const ContentListItem`<br> 

---------

Line 184:
Maps styles to components.



<NavigationMenuItem> - encapsulates a top menu item
<NavigationMenuTrigger>Learn</NavigationMenuTrigger> - First child that instructs for an 
  action to be carried out, contains the text value of the top menu item.
  Not needed if the top menu item is a single link.  

<NavigationMenuContent> Next child, the start of the content.

<ContentList layout="one"> this relates to an object within the script that handles an unordered list, 
In this example, layout "one" is set to display at a certain screen width

Most basic menu item.

<NavigationMenuItem>
   <NavigationMenuLink href="https://github.com/radix-ui">Github</NavigationMenuLink>
</NavigationMenuItem>