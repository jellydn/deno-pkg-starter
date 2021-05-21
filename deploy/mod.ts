function handleRequest(request: Request) {
  const { pathname } = new URL(request.url);

  // This is how the proxy works:
  // 1. A request comes in for a specific asset.
  // 2. We construct a URL to that asset.
  // 3. We fetch the asset and respond to the request.

  // Check if the request is for style.css.
  if (pathname.startsWith("/style.css")) {
    //  Construct a new URL to style.css by using the URL
    //  of the script (mod.ts) as base (import.meta.url).
    const style = new URL("style.css", import.meta.url);
    // Fetch the asset and return the fetched response
    // to the client.
    return fetch(style);
  }

  return new Response(
    `<html>
      <head>
        <link rel="stylesheet" href="style.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mini.css/3.0.1/mini-default.min.css">
      </head>
      <body>
        <h1>Deno Deploy Example with <a href="https://minicss.org/">https://minicss.org/</a></h1>
        <p>This is a paragraph. with some <strong>bold text</strong> and some <em>italics text</em>.</p>
<a href="https://minicss.org/">This is a link.</a>
<small>This is some small text.</small>
<sub>Subscript</sub>
<sup>Superscript</sup>
<hr/>
<p>This is some text with some inline <code>source code</code> and some keyboard <kbd>input</kbd>.</p>
<pre>function sum(num1, num2){
  return num1 + num2;
}</pre>
<blockquote cite="www.quotation.source">This is some text quoted from elsewhere.</blockquote>
      </body>
    </html>`,
    {
      headers: {
        "content-type": "text/html; charset=utf-8",
      },
    }
  );
}

addEventListener("fetch", (event: FetchEvent) => {
  event.respondWith(handleRequest(event.request));
});
