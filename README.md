2 commits:
1) works, no `web_accessible_resources` in subdirectory
2) broken, `web_accessible_resources` in subdirectory

To make the broken version work, replace in `dist/page.js`
```
b.load([["page-snippet.html","foo/page-snippet.html"]])
```
with
```
b.load([["foo/page-snippet.html","foo/page-snippet.html"]])
```
