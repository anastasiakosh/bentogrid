# Bento Grid Layout

## Project Idea
The Bento Grid is an asymmetrical UI layout designed to organize multiple distinct pieces of content—such as metrics, visuals, and text—into a cohesive, hierarchical structure. Inspired by physical bento boxes, it compartmentalizes information into varying-sized rectangular blocks within a unified grid system, optimizing screen space and scannability.

## Technical Realization

This layout is built entirely with plain HTML and CSS, requiring no JavaScript for its core structure. 

### 1. Grid Architecture (CSS Grid)
The foundation of the layout is CSS Grid (`display: grid`). 
* The parent container defines a strict column structure using fractional units (e.g., `grid-template-columns: repeat(4, 1fr)`) and consistent row heights (`grid-auto-rows: 250px`).
* The asymmetry is achieved by applying `grid-column: span X` and `grid-row: span Y` to specific child items. This allows certain blocks (like the header or primary visual) to occupy multiple grid cells, creating visual hierarchy.

### 2. Styling & Glassmorphism
The visual design utilizes a monochrome dark theme with a glassmorphism effect:
* **Background:** An animated linear gradient serves as the base layer (`animation` with `background-position` shifts).
* **Glass Effect:** The individual bento items use a combination of highly transparent background colors (`rgba`), thin semi-transparent borders, and `backdrop-filter: blur()` to simulate frosted glass.
* **State Changes:** CSS `transition` properties handle hover states, applying a slight negative `translateY` and adjusting the `box-shadow` to create depth when a user interacts with a card.

### 3. Responsive Design
The grid adapts to different screen sizes using standard CSS media queries:
* On tablet viewports (e.g., `< 900px`), the grid collapses from 4 columns to 2 columns, and spanning items are adjusted accordingly to fit the narrower width.
* On mobile viewports (e.g., `< 600px`), the grid collapses into a single-column layout (`1fr`), stacking all bento items vertically for readable scrolling.
