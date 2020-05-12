## What it is

A basic HTML, CSS and JavaScript webpage to display what I'm currently reading from [Goodreads](https://www.goodreads.com/).

## How it works

Spins up a basic express.js server that serves a single html page.

This page has a little JavaScript that hits the express server to retrieve my currently reading shelf from Goodreads. This is driven by the Goodreads [API](https://www.goodreads.com/api).

Also uses [node-cache](https://www.npmjs.com/package/node-cache) in the express server to cache the currently reading response.

## Areas for expansion
- Currently only displays one book, could improve to display multiple.
- Could display additional author information.
- Style it up!
- Goodreads doesn't have rights to return all cover images via their developer API ([reference](https://www.goodreads.com/topic/show/18208456-api-issue---cover-images)). Could possibly use the ISBN code if no cover image is returned from Goodreads and use the [OpenLibrary](https://openlibrary.org/dev/docs/api/covers) cover API instead.