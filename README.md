# AI Avatar Alpha Testing Insights Dashboard

This static dashboard synthesizes the seven AI Avatar alpha testing feedback workbooks in the parent folder into executive-ready insights, coded signals, feature requests, priority recommendations, charts, evidence quotes, and a normalized signal log.

## Run Locally

From this folder:

```bash
python3 -m http.server 4174
```

Then open:

```text
http://localhost:4174
```

If `http://localhost:4174` opens a different project, another local server is already using that port. Stop the other server, or run this dashboard on a different port:

```bash
python3 -m http.server 4180
```

Then open:

```text
http://localhost:4180
```

## Share Or Publish

The site is self-contained in `index.html`, `styles.css`, and `app.js`. It can be hosted on any static site host, including GitHub Pages, Netlify, Vercel, or an internal web server.

GitHub repository:

```text
https://github.com/kobowood1/product-and-data-dashboard
```

GitHub Pages site:

```text
https://kobowood1.github.io/product-and-data-dashboard/
```

This repo includes a GitHub Actions workflow that deploys the root folder to GitHub Pages whenever changes are pushed to `main`.
