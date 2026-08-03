# Ember & Oak — React + Ant Design Assignment

A single-page website for a wood-fired restaurant, built with **React (Create React App)**
and **Ant Design v5**, plus **react-icons** for iconography.

## Components used

This project uses **15** components from the assignment list, plus several supporting
Ant Design layout/typography components:

| # | Component | Where |
|---|-----------|-------|
| 1 | Button | Hero CTAs, menu "Add", reservation submit, cart checkout |
| 2 | DatePicker | Reservation form |
| 3 | Rate | Menu dish cards, guest reviews |
| 4 | Select | Reservation form (time slot, party size) |
| 5 | Upload | "Add your own review" photo upload |
| 6 | Card | Menu dish cards, review cards |
| 7 | Carousel | Hero section |
| 8 | QRCode | "Scan for tonight's menu" section |
| 9 | Table | Kitchen board (live tickets) |
| 10 | Tag | Menu category filter (CheckableTag), kitchen board status |
| 11 | Drawer | Mobile nav menu, shopping cart |
| 12 | message | Add-to-cart / photo-upload feedback |
| 13 | Modal | Reservation confirmation |
| 14 | Notification | Reservation confirmed, order sent to kitchen |
| 15 | Progress | Kitchen board "prep" column |

Supporting components: `Layout`, `Row`/`Col`, `Typography`, `Avatar`, `Badge`, `Space`,
`Form`, `Empty`, `ConfigProvider` (custom dark theme).

## Project structure

```
src/
  index.js              entry point
  App.js                composes the page, holds cart state, theme config
  App.css               design tokens + all component styling
  data/
    menuData.js
    reviewData.js
    bookingsData.js
  components/
    Navbar.js
    HeroCarousel.js
    EmberDivider.js      signature section-divider element
    MenuSection.js
    MenuCard.js
    ReservationSection.js
    KitchenBoard.js
    ReviewsSection.js
    QRMenuSection.js
    CartDrawer.js
    Footer.js
```

Every component is in its own file and exported with `export default`, then imported
into `App.js` or its parent section.

## Design

- **Palette:** charcoal `#1E1A16` background, cream `#F4EEDD` text, ember `#C1502E`
  primary accent, sage `#7C8B6F` secondary, gold `#C9A86A` accent/dividers.
- **Type:** Fraunces (display/serif headings), Work Sans (body), IBM Plex Mono
  (prices, table data, timestamps).
- **Signature element:** a small ember/flame mark between hairlines
  (`EmberDivider.js`) used between every major section instead of a plain rule.
- Fully responsive: nav collapses into a Drawer on small screens, the menu grid
  and reservation form reflow with Ant's `Row`/`Col` breakpoints.

## Running the project

This was generated as a Create React App project. On your own machine:

```bash
npm install
npm start
```

Then open http://localhost:3000.

> Note: image URLs point to Unsplash for placeholder food photography — an
> internet connection is needed to see the images load.
