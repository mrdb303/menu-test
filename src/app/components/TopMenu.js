"use client";

import React from 'react';
import { styled, keyframes } from '@stitches/react';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { CaretDownIcon } from '@radix-ui/react-icons';
import { purple, iris, blackA } from '@radix-ui/colors';


const enterFromRight = keyframes({
  from: { transform: 'translateX(200px)', opacity: 0 },
  to: { transform: 'translateX(0)', opacity: 1 },
});

const enterFromLeft = keyframes({
  from: { transform: 'translateX(-200px)', opacity: 0 },
  to: { transform: 'translateX(0)', opacity: 1 },
});

const exitToRight = keyframes({
  from: { transform: 'translateX(0)', opacity: 1 },
  to: { transform: 'translateX(200px)', opacity: 0 },
});

const exitToLeft = keyframes({
  from: { transform: 'translateX(0)', opacity: 1 },
  to: { transform: 'translateX(-200px)', opacity: 0 },
});

const scaleIn = keyframes({
  from: { transform: 'rotateX(-30deg) scale(0.9)', opacity: 0 },
  to: { transform: 'rotateX(0deg) scale(1)', opacity: 1 },
});

const scaleOut = keyframes({
  from: { transform: 'rotateX(0deg) scale(1)', opacity: 1 },
  to: { transform: 'rotateX(-10deg) scale(0.95)', opacity: 0 },
});

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const fadeOut = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
});

const StyledMenu = styled(NavigationMenuPrimitive.Root, {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  width: '100vw',
  zIndex: 1,
});

const StyledList = styled(NavigationMenuPrimitive.List, {
  all: 'unset',
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: 'white',
  padding: 4,
  borderRadius: 6,
  listStyle: 'none',
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
});

const itemStyles = {
  padding: '8px 12px',
  outline: 'none',
  userSelect: 'none',
  fontWeight: 500,
  lineHeight: 1,
  borderRadius: 4,
  fontSize: 15,
  color: purple.purple11,
  '&:focus': { position: 'relative', boxShadow: `0 0 0 2px ${purple.purple7}` },
  '&:hover': { backgroundColor: purple.purple6 },
};

const StyledTrigger = styled(NavigationMenuPrimitive.Trigger, {
  all: 'unset',
  ...itemStyles,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 2,
});

const StyledCaret = styled(CaretDownIcon, {
  position: 'relative',
  color: purple.purple10,
  top: 1,
  '[data-state=open] &': { transform: 'rotate(-180deg)' },
  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'transform 250ms ease',
  },
});

const StyledTriggerWithCaret = React.forwardRef(({ children, ...props }, forwardedRef) => (
  <StyledTrigger {...props} ref={forwardedRef}>
    {children}
    <StyledCaret aria-hidden />
  </StyledTrigger>
));

const StyledLink = styled(NavigationMenuPrimitive.Link, {
  ...itemStyles,
  display: 'block',
  textDecoration: 'none',
  fontSize: 15,
  lineHeight: 1,
});

const StyledContent = styled(NavigationMenuPrimitive.Content, {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  '@media only screen and (min-width: 600px)': { width: 'auto' },
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '250ms',
    animationTimingFunction: 'ease',
    '&[data-motion="from-start"]': { animationName: enterFromLeft },
    '&[data-motion="from-end"]': { animationName: enterFromRight },
    '&[data-motion="to-start"]': { animationName: exitToLeft },
    '&[data-motion="to-end"]': { animationName: exitToRight },
  },
});

const StyledIndicator = styled(NavigationMenuPrimitive.Indicator, {
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
  height: 10,
  top: '100%',
  overflow: 'hidden',
  zIndex: 1,

  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'width, transform 250ms ease',
    '&[data-state="visible"]': { animation: `${fadeIn} 200ms ease` },
    '&[data-state="hidden"]': { animation: `${fadeOut} 200ms ease` },
  },
});

const StyledArrow = styled('div', {
  position: 'relative',
  top: '70%',
  backgroundColor: 'white',
  width: 15,
  height: 15,
  transform: 'rotate(45deg)',
  borderTopLeftRadius: 2,
});

const StyledIndicatorWithArrow = React.forwardRef((props, forwardedRef) => (
  <StyledIndicator {...props} ref={forwardedRef}>
    <StyledArrow />
  </StyledIndicator>
));

const StyledViewport = styled(NavigationMenuPrimitive.Viewport, {
  position: 'relative',
  transformOrigin: 'top center',
  marginTop: 10,
  width: '100%',
  backgroundColor: 'white',
  borderRadius: 6,
  overflow: 'hidden',
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  height: 'var(--radix-navigation-menu-viewport-height)',

  '@media only screen and (min-width: 600px)': {
    width: 'var(--radix-navigation-menu-viewport-width)',
  },
  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'width, height, 300ms ease',
    '&[data-state="open"]': { animation: `${scaleIn} 200ms ease` },
    '&[data-state="closed"]': { animation: `${scaleOut} 200ms ease` },
  },
});

// Exports
const NavigationMenu = StyledMenu;
const NavigationMenuList = StyledList;
const NavigationMenuItem = NavigationMenuPrimitive.Item;
const NavigationMenuTrigger = StyledTriggerWithCaret;
const NavigationMenuLink = StyledLink;
const NavigationMenuContent = StyledContent;
const NavigationMenuViewport = StyledViewport;
const NavigationMenuIndicator = StyledIndicatorWithArrow;

// Your app...
const ContentList = styled('ul', {
  display: 'grid',
  padding: 22,
  margin: 0,
  columnGap: 10,
  listStyle: 'none',

  variants: {
    layout: {
      one: {
        '@media only screen and (min-width: 600px)': {
          width: 500,
          gridTemplateColumns: '.75fr 1fr',
        },
      },
      two: {
        '@media only screen and (min-width: 600px)': {
          width: 600,
          gridAutoFlow: 'column',
          gridTemplateRows: 'repeat(3, 1fr)',
        },
      },
      three: {
        '@media only screen and (min-width: 600px)': {
          width: 300,
          gridTemplateRows: 'repeat(3, 1fr)',
        },
      },
    },
  },
});

const ListItem = styled('li', {});

const LinkTitle = styled('div', {
  fontWeight: 500,
  lineHeight: 1.2,
  marginBottom: 5,
  color: purple.purple12,
});

const LinkText = styled('p', {
  all: 'unset',
  color: purple.purple11,
  lineHeight: 1.4,
  fontWeight: 'initial',
});

const ContentListItem = React.forwardRef(({ children, title, ...props }, forwardedRef) => (
  <ListItem>
    <NavigationMenuLink
      {...props}
      ref={forwardedRef}
      css={{
        padding: 12,
        borderRadius: 6,
        '&:hover': { backgroundColor: purple.purple6 },
      }}
    >
      <LinkTitle>{title}</LinkTitle>
      <LinkText>{children}</LinkText>
    </NavigationMenuLink>
  </ListItem>
));

const ContentListItemCallout = React.forwardRef(({ children, ...props }, forwardedRef) => (
  <ListItem css={{ gridRow: 'span 3' }}>
    <NavigationMenuLink
      {...props}
      href="/"
      ref={forwardedRef}
      css={{
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        background: `linear-gradient(140deg, ${purple.purple12} 3%, ${purple.purple12} 12%);`,
        borderRadius: 20,
        padding: 15,
      }}
    >
     
      <LinkTitle
        css={{
          fontSize: 18,
          color: 'white',
          marginTop: 10,
          marginBottom: 7,
        }}
      >
        Mrs Miggin&apos;s Pies
      </LinkTitle>
      <LinkText
        css={{
          fontSize: 14,
          color: purple.purple4,
          lineHeight: 1.3,
        }}
      >
        Quality fayre, as you&apos;d expect.
      </LinkText>
    </NavigationMenuLink>
  </ListItem>
));

const ViewportPosition = styled('div', {
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  top: '100%',
  left: 0,
  perspective: '2000px',
});

export const NavigationMenuDemo = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        
        <NavigationMenuItem>
          <NavigationMenuTrigger>About</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ContentList layout="one">
              <ContentListItemCallout />
              <ContentListItem href="https://stitches.dev/" title="Our mission">
                To provide you with quality pies.
              </ContentListItem>
              <ContentListItem href="/colors" title="Savour the flavours">
                Enjoy your favourite flavours, wrapped in pastry goodness. 
              </ContentListItem>

            </ContentList>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>The Staples</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ContentList layout="two">
              <ContentListItem title="Introduction" href="/docs/primitives/overview/introduction">
                Build high-quality, accessible design systems and web apps.
              </ContentListItem>
              <ContentListItem
                title="Getting started"
                href="/docs/primitives/overview/getting-started"
              >
                A quick tutorial to get you up and running with Radix Primitives.
              </ContentListItem>
              <ContentListItem title="Styling" href="/docs/primitives/overview/styling">
                Unstyled and compatible with any styling solution.
              </ContentListItem>
              <ContentListItem title="Animation" href="/docs/primitives/overview/animation">
                Use CSS keyframes or any animation library of your choice.
              </ContentListItem>
              <ContentListItem title="Accessibility" href="/docs/primitives/overview/accessibility">
                Tested in a range of browsers and assistive technologies.
              </ContentListItem>
              <ContentListItem title="Releases" href="/docs/primitives/overview/releases">
                Radix Primitives releases and their changelogs.
              </ContentListItem>
            </ContentList>
          </NavigationMenuContent>
        </NavigationMenuItem>



        <NavigationMenuItem>
          <NavigationMenuTrigger>New Flavours</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ContentList layout="three">
              <ContentListItem 
                title="Cheese &amp; pickle" href="/docs/primitives/overview/introduction">
                Build high-quality, accessible design systems.
              </ContentListItem>
              <ContentListItem
                title="Cheese &amp; sweetcorn" href="/docs/primitives/overview/getting-started">
                A quick tutorial to get you up and running with Radix Primitives.
              </ContentListItem>
              <ContentListItem title="Styling" href="/docs/primitives/overview/styling">
                Unstyled and compatible with any styling solution.
              </ContentListItem>
            </ContentList>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Worldwide Delivery</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ContentList layout="three">
              <ContentListItem 
                title="Cheese &amp; pickle" href="/docs/primitives/overview/introduction">
                Build high-quality, accessible design systems.
              </ContentListItem>
              <ContentListItem
                title="Cheese &amp; sweetcorn" href="/docs/primitives/overview/getting-started">
                A quick tutorial to get you up and running with Radix Primitives.
              </ContentListItem>
            </ContentList>
          </NavigationMenuContent>
        </NavigationMenuItem>


        <NavigationMenuItem>
          <NavigationMenuLink href="https://github.com/radix-ui">Our Bakery</NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink href="https://techeducators.co.uk/">Our Staff</NavigationMenuLink>
        </NavigationMenuItem>

        

        <NavigationMenuIndicator />
      </NavigationMenuList>

      <ViewportPosition>
        <NavigationMenuViewport />
      </ViewportPosition>
    </NavigationMenu>
  );
};

export default NavigationMenuDemo;

