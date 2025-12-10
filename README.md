# Kanban Board

This is a simple Kanban-style task management application built with React, Vite, and Tailwind CSS. It allows users to manage their tasks by moving them between "Todo", "In Progress", and "Done" columns.

## Features

- Create new tasks
- Edit existing tasks
- Move tasks between columns
- Search for tasks by title

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd ass3
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br>
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npm run lint`

Lints the project files.

### `npm run preview`

Serves the production build locally.

## Project Structure

```
ass3
├───.gitignore
├───eslint.config.js
├───index.html
├───package-lock.json
├───package.json
├───README.md
├───vite.config.js
├───public
│   └───vite.svg
└───src
    ├───App.css
    ├───App.jsx
    ├───index.css
    ├───main.jsx
    ├───assets
    │   ├───logo.svg
    │   └───react.svg
    ├───Components
    │   ├───Board.jsx
    │   ├───Contents.jsx
    │   ├───DoneColumn.jsx
    │   ├───Header.jsx
    │   ├───InProgress.jsx
    │   ├───Sidebar.jsx
    │   ├───TodoColumn.jsx
    │   └───commonComponent
    │       ├───ColumnToolbar.jsx
    │       ├───EmptyCart.jsx
    │       ├───FilterOptions.jsx
    │       ├───ModalComponent.jsx
    │       ├───SortBy.jsx
    │       └───ThreeDot.jsx
    ├───Context
    │   └───index.js
    ├───data
    │   └───data.js
    └───utils
        ├───displayData.js
        ├───getUniqueCategory.js
        └───sortedData.js
```
