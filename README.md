# Utah Maps — The Weber County Hive

Maps of Utah public records. Every pin comes from a public document and links to its source and to the case file behind it in the Hive's other repos.

## How to add a map

1. Add an entry to `utah-maps-data.js` with the next map ID (`MAP 008`, `MAP 009`, ...). Never reuse or renumber an ID.
2. Upload the map page and set its `status` to `"live"` and its `link` to the page's exact filename.
3. The index (`index.html`) updates itself.
