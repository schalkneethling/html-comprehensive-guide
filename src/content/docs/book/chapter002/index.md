---
title: "Chapter 2: The link element"
keywords: html link element, link rel attribute, link href attribute, link media attribute, stylesheet linking, favicon icon, resource hints, dns-prefetch, preconnect, prefetch, preload, modulepreload, html performance optimization, web performance, link crossorigin, alternate stylesheet, search link, pingback
description: Master the HTML link element and its powerful attributes. Learn stylesheet linking, favicon implementation, resource hints for performance optimization, and advanced techniques like preconnect, prefetch, and modulepreload.
---

Chapter two covers the `link` element, its attributes, and use cases. The `link` element connects documents and resources. You may know it primarily for linking stylesheets, but it does much more. We start with well-known attributes and move to newer, lesser-known ones.

## The `href` attribute

The `href` attribute is the core of this element. It is required (unless `imagesrcset` is present) and must contain a valid uniform resource locator (URL). The most common use case is linking an external stylesheet:

```html
<link href="style/main.css" />
```

## The `media` attribute

This attribute was primarily used to link separate stylesheets for screen or print rendering. For example:

```html
<link rel="stylesheet" href="screen.css" media="screen" />
<link rel="stylesheet" href="print.css" media="print" />
```

Since CSS added media queries, developers commonly use `@media print` in stylesheets for print styling. However, separating print rules into a dedicated stylesheet has benefits. When viewing on a display, the browser marks print stylesheets as low-priority. It defers downloading and parsing until screen resources are complete. When the browser downloads print stylesheets it does so in a non-blocking manner.

> **Note:** What is render blocking? When the browser encounters a CSS file, it stops parsing the HTML document and downloads the CSS file. Once downloaded, the browser parses the CSS file and applies the styles to the HTML document. This process is render blocking because it prevents the rest of the document from rendering until the CSS file has been downloaded, parsed, and applied.

Besides the common values `all`, `screen`, and `print`, the `media` attribute supports any valid media query. You can specify that a stylesheet is only needed for a specific screen size, such as a tablet:

```html
<link
  rel="stylesheet"
  href="tablet.css"
  media="screen and (width >= 48rem) and (width < 64rem)"
/>
```

> **Note:** There are also around [8 more media types, which have been deprecated](https://drafts.csswg.org/mediaqueries/#media-types).

## The `rel` attribute

The `rel` attribute indicates the relationship between the current document and the file referenced by the `href` attribute. The `rel` attribute is required and must contain one or more valid keywords for a link to be created.

What does this mean? Consider this HTML document:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Styled Heading</title>
    <link href="style/main.css" media="screen" />
  </head>
  <body>
    <h1>I am Red!!</h1>
  </body>
</html>
```

In `main.css` you have the following style rule:

```css
h1 {
  color: red;
}
```

Loading the document in your browser shows the heading, but the color will be black. Because the `rel` attribute is missing the browser creates no link and does not load the CSS file. If you add a `rel` attribute with an invalid value like "css", it produces the same result.

To create the link and load the stylesheet, specify a valid value such as `stylesheet`:

```html
<link rel="stylesheet" href="style/main.css" media="screen" />
```

Reloading the document now shows the heading as red.

## The `alternate` keyword

The `alternate` keyword creates a link to an alternative version of the current document. The meaning depends on other attributes used with it or the keyword combination.

### When `alternate` is combined with `stylesheet`

Consider a news website that wants to provide different reading experiences. The main site uses a modern design with small text and multiple columns, but some users prefer a simpler, more readable layout.

```html
<link rel="stylesheet" href="css/main.css" media="screen" />
<link
  rel="alternate stylesheet"
  href="css/reader-mode.css"
  media="screen"
  title="Reader Mode"
/>
<link
  rel="alternate stylesheet"
  href="css/print-friendly.css"
  media="screen"
  title="Print Friendly"
/>
```

Here's what each stylesheet might contain:

```css
/* main.css - Default modern layout */
.article {
  display: grid;
  font-family: "Helvetica Neue", sans-serif;
  font-size: 1rem;
  gap: 2rem;
  grid-template-columns: 1fr 18.75rem;
  line-height: 1.4;
  margin-block: 0;
  margin-inline: auto;
  max-width: 75rem;
  padding: 1.5rem;
}

/* reader-mode.css - Simplified reading experience */
.article {
  font-family: Georgia, serif;
  font-size: 1.2rem;
  line-height: 1.6;
  margin-block: 0;
  margin-inline: auto;
  max-width: 50rem;
  padding-block: 2rem;
  padding-inline: 1.5rem;
}

.article .sidebar,
.article .ads {
  display: none;
}

/* print-friendly.css - Optimized for printing */
.article {
  background: #fff;
  color: #212121;
  font-family: Arial, sans-serif;
  font-size: 12pt;
  line-height: 1.5;
  margin: 0;
  max-width: none;
  padding: 0;
}

.article .sidebar,
.article .ads,
.article .navigation {
  display: none;
}
```

Loading the document in a browser shows content styled by `main.css`. The other two stylesheets are available to users but not immediately obvious. In Firefox, click the `View` menu and hover over `Page Style`.

A couple of things to note. Chromium-based browsers and Safari don't provide an easy way to access these alternative stylesheets. However, all browsers will still load all three stylesheets. Each stylesheet is loaded using the lowest fetch priority and will load in a non-blocking manner.

### When `alternate` is combined with `hreflang`

As mentioned earlier, the meaning of `alternate` changes depending on the keyword it's paired with and the other attributes used. The `hreflang` attribute affects the meaning of `alternate`. This attribute defines an alternate language for the current page. For example, assuming our current page is in English:

```html
<link
  rel="alternate"
  href="/fr/document.html"
  hreflang="fr"
  title="French version"
/>
```

Search engines use this to determine whether an alternate version of the document is available in the user's preferred language. It prevents the [duplicate content](https://yoast.com/duplicate-content/) problem that can hurt your site's search engine optimization (SEO).

### The `canonical` keyword `[NON-STANDARD]`

While discussing alternate versions of the same page, let's discuss another `rel` attribute keyword. When specifying an alternate version of the current document, it's important to indicate that the current document is the canonical (recognized, authoritative, authorized, accepted) version. For example:

```html
<link rel="canonical" href="https://www.example.com/" />
<link
  rel="alternate"
  href="/fr/document.html"
  hreflang="fr"
  title="French version"
/>
```

This is used for search engines and to avoid the duplicate content problem mentioned before. According to the HTML standard, `canonical` is not a valid keyword of the `rel` attribute. It's mentioned here because search engine ranking plays a major part in how your content is found on the web.

> **Note:** This is also often used when cross-posting content from your own blog to sites such as Dev.to. This tells the search engine that the canonical (origin or source of truth) is located on your blog and that this is not simply duplicate content.

### When used with the `type` attribute

Using `alternate` with the `type` attribute specifies an alternate type or variant of the current document. A common use case is pointing to a syndication feed such as a Really Simple Syndication (RSS) feed:

```html
<link
  rel="alternate"
  type="application/atom+xml"
  href="rss.xml"
  title="All the posts!"
/>
```

Many tools and browser extensions surface this information to users and make it easy to subscribe to a blog or website feed. You can also use `type` and `hreflang` together with `alternate`:

```html
<link
  rel="alternate"
  href="/en/monkey-habits.pdf"
  hreflang="en"
  type="application/pdf"
  title="Download the English PDF version"
/>
<link
  rel="alternate"
  href="/fr/monkey-habits.pdf"
  hreflang="fr"
  type="application/pdf"
  title="Téléchargez la version PDF française"
/>
```

## The `icon` keyword

Before we look at the syntax, let's discuss what "icon" means here. If you've heard of the term favicon, this is the icon it refers to. You may have encountered an error in the developer console: `GET http://127.0.0.1:5500/favicon.ico 404 (Not Found)`

What is this icon the browser is looking for? It's the icon commonly seen in a browser tab for the website you're currently visiting.

Why the error? First, the file doesn't exist. But you probably haven't specified the file anywhere in your code, so why is the browser attempting to load it? This is due to the loading algorithm browsers use when finding a favicon for your website.

If you see the error above, based on this algorithm I can make some assumptions:

1. You don't have a `link` element in the `head` of your document with a `rel` attribute using the `icon` keyword.
2. You do, but the resource pointed to by the `href` attribute doesn't exist.
3. You don't have a file named `favicon.ico` at the root of your website.

I can make those assumptions because that's the browser's favicon loading process. It first looks for a `link` element with `rel="icon"`, attempts to load that resource, and if that fails, tries `www.yoursite.com/favicon.ico` before giving up silently (unless you're using developer tools, you won't see the 404 error).

We could avoid this by placing a favicon file at the root, but why make the browser jump through hoops when we can specify the location in a single line of code?

The `link` element offers more than just avoiding the browser's fallback algorithm. The `ico` format, while functional, is outdated. Microsoft designed it in the early web days to contain multiple sizes, with the browser choosing the appropriate one based on context and resolution.

Since then, screen resolutions have exploded, icons are used for more than just tabs, and we have dark mode to contend with. In short, the web has evolved and the humble favicon with it.

### `icon`

As with most browser-related things, browsers are very forgiving. They do their utmost to make up for things they don't understand (or support), or mistakes developers make. When a browser encounters a tag, attribute, or attribute value it doesn't understand, it doesn't give up and break down. Instead, it keeps going, trying to find a way to get as close to what the developer intended. Failing all else, it eventually gives up and fails silently, presenting the user with the best possible interpretation of what it could understand. Aren't browsers magical?

With this in mind, we start with the most modern approach for defining a favicon and work backward to ensure backward compatibility.

### The Scalable Vector Graphics (SVG) format

The easiest way to support the vast array of screen resolutions is to use a scalable image format. On the web, that format is SVG (Scalable Vector Graphics). Support for SVG icons is relatively new, but [browser support is good](https://caniuse.com/#feat=link-icon-svg). As some developers have discovered, beyond supporting various resolutions, because you can embed CSS inside an SVG, you can even [support dark mode with a single SVG icon](https://blog.tomayac.com/2019/09/21/prefers-color-scheme-in-svg-favicons-for-dark-mode-icons/).

The first icon we'll add to our head is an SVG icon:

```html
<link rel="icon" href="favicon.svg" sizes="all" type="image/svg+xml" />
```

You'll notice a new attribute in the above snippet: the `sizes` attribute. This allows us to define and specify different sized icons for different resolutions when using formats like Portable Network Graphics (PNG). Because an SVG can scale up or down infinitely, we use the special keyword `all`.

### The Portable Network Graphics (PNG) format

If the browser doesn't support SVG icons, it will ignore our line above and look at the next line of code. The next format with [much wider browser support](https://caniuse.com/#feat=link-icon-png) is the PNG image format. Because PNG images are [raster-based](https://developer.mozilla.org/en-US/docs/Glossary/Raster_image) and not [vector-based](https://www.adobe.com/africa/creativecloud/design/discover/vector-file.html), we need to specify (and have on disk) a couple of different sizes:

```html
<link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
<link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
```

That covers what's defined in the HTML standard. Unfortunately, there's one more thing we need: the non-standard `apple-touch-icon` keyword for `rel`.

### The `apple-touch-icon` keyword `[NON-STANDARD]`

Even though this is not a standard, [HTML validators won't error](https://github.com/validator/validator/issues/433#issuecomment-268984140) when present, but [Lighthouse will error if it's not present](https://web.dev/apple-touch-icon/). Other platforms also depend on it because it's so [well known and widely used](https://github.com/h5bp/html5-boilerplate/blob/master/src/index.html#L16), so it's best to include it as well. Thankfully there's no proprietary file format, just the non-standard keyword and some specific sizes:

```html
<link
  rel="apple-touch-icon"
  href="/media/apple-icon-152x152.png"
  sizes="152x152"
  type="image/png"
/>
<link
  rel="apple-touch-icon"
  href="/media/apple-icon-180x180.png"
  sizes="180x180"
  type="image/png"
/>
```

What about `rel="shortcut icon"`? This is another relic of the past, not defined in the HTML standard, and would only be used to specify the `ico` variant. Beyond that, even specifying the type when using an `ico` is [up for debate](https://stackoverflow.com/questions/13827325/correct-mime-type-for-favicon-ico) and contentious. If you want the widest possible browser support, ensure you have a `favicon.ico` at the root of your website.

> **Note:** You don't have to create all the needed files yourself. You can use a tool such as [The Real Favicon Generator](https://realfavicongenerator.net/) to create all the needed files for you. You can then download the zip file and extract it to the root of your website.

## Resource Hints

The next set of keywords are all about performance and, through performance, improving user experience and accessibility. Before we dig into the various [resource hints](https://w3c.github.io/resource-hints/), I want to be clear that this won't be a deep dive into resource hints. That's a topic all its own. In this chapter, we'll get to know the various resource hints and go over the basics of what they're used for.

> **Note:** As the name suggests, these are hints we as developers provide to the browser, so for the most part, it's still up to the browser to decide whether to follow our hints or not.

In the related reading section, I'll provide some resources should you wish to explore this topic further.

### 🐢 The `dns-prefetch` keyword

DNS (Domain Name Service) along with the Internet Protocol (IP) is the core addressing system used to connect you to the website you wish to visit. The internet is immense and dynamic, with new IP addresses and domain names constantly being added.

Your browser needs to know the IP address of the domain name you typed into the address bar to connect to it. Because of the internet's vastness, it's not always a quick and simple process for your browser to get this IP address. DNS is made up of an array of DNS zones and servers across the globe. The closest one to you might not have the address and related IP address in its database. So, the [first DNS server may need to ask a second and a third](https://nlp.stanford.edu/IR-book/html/htmledition/dns-resolution-1.html) before getting the IP address it needs to send back to the browser. A DNS lookup commonly [takes between 20-120 milliseconds](https://www.keycdn.com/support/reduce-dns-lookups).

It's also very common these days for a single webpage to connect to multiple domain names to get external resources such as custom fonts, JavaScript libraries, etc. For each new domain the browser encounters, it needs to do an initial DNS lookup request. You can see how this can add up.

> **Note:** Do take the time to read the following post: [Say goodbye to resource-caching across sites and domains](https://www.stefanjudis.com/notes/say-goodbye-to-resource-caching-across-sites-and-domains/)

This is where `dns-prefetch` comes into play. If we know, for example, that we'll be getting a JavaScript library from [unpkg](https://unpkg.com/), we can get some leg work out of the way by telling the browser about the domain name and asking it to do the DNS resolution/lookup as early as possible.

Using the UNPKG example domain above, we'll add the following to our `head`:

```html
<link rel="dns-prefetch" href="https://unpkg.com/" />
```

### 🐭 The `preconnect` keyword

There's more to connecting to another server than just DNS. DNS maintains a map of domain names to IP addresses, so it can tell the browser the IP address where the destination server exists, but that's where it ends. The next step is for the browser to initiate a connection to the IP address.

The first step in this process is the Transmission Control Protocol (TCP) handshake. This is the process whereby the [client (browser) negotiates a connection with the server](https://www.youtube.com/watch?v=xMtP5ZB3wSk). Essentially, the client sends a request to the server saying, "Hey, can you please open a connection for me?" The server then responds with, "Hi there! Sure, could you also open one for me on your end?" To which the client responds, "Yup, done." A two-way connection now exists between the client and the server.

If you're connecting to the other server via HyperText Transfer Protocol Secure (HTTPS), which is very common and almost universal these days, there's an additional handshake that needs to happen after the TCP handshake completes. This is known as the [Transport Layer Security (TLS)](https://en.wikipedia.org/wiki/Transport_Layer_Security) handshake.

The process goes something like this. The client sends a "hello" message to the server. This time, it includes the TLS version and cipher suites it supports, as well as a string of random bytes (aka "client random"). The server responds with a "hello" which includes its [SSL certificate](https://www.cloudflare.com/learning/ssl/what-is-an-ssl-certificate/), its chosen cipher suite, and the "server random". The browser verifies the SSL certificate and if verified, sends back one more string of random bytes known as the "premaster secret". The server decrypts the "premaster secret". Both client and server generate session keys from the client random, server random, and premaster secret. The client sends an encrypted "finish" message, the server replies with an encrypted "finish" message, the handshake completes and the connection continues using the session keys.

That's a lot! Thankfully this entire process takes only milliseconds, but it does add to the overall latency of getting the data your application needs and your user is interested in. Using `preconnect`, we're asking the browser to take all the above steps, including DNS lookup, as early as possible for the domain we specify. So, if that library you need to get from UNPKG is supercritical, and you want to reduce as much of the latency as possible, as early as possible, you want to reach for `preconnect` as opposed to just `dns-prefetch`. Let's change the above example to do a `preconnect`:

```html
<link rel="preconnect" href="https://unpkg.com/" />
```

## The `crossorigin` attribute

Before we move on to the next keyword, I want to quickly touch on the `crossorigin` attribute. This attribute is used, as the name suggests, when linking to cross-origin assets. More specifically, when `preloading` assets cross-origin. For example, on the domain `example.com` you may want to preload some JavaScript from `widgets.com`:

```html
<link rel="preload" href="https://widgets.com/widget/tabs.js" />
```

The above request will be blocked by the browser and fail to load. If you have [**C**ross-**O**rigin **R**esource **S**haring (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) correctly set up, you can resolve the problem by using the `crossorigin` attribute:

``` html
<link rel="preload" href="https://widgets.com/widget/tabs.js" crossorigin />
```

The above will initiate an anonymous cross-origin fetch. In other words, it won't pass along any credentials such as a cookie or HTTP basic authentication. Depending on your CORS setup requirements, the above might be sufficient. If, however, your endpoint does require credentials, you can specify this as follows:

```html
<link
  rel="preload"
  href="https://widgets.com/widget/tabs.js"
  crossorigin="use-credentials"
/>
```

> **An important side note:** While we're talking about preloading and cross-origin, there's a little gotcha to be aware of concerning preloading fonts. When preloading fonts, you always have to specify the `crossorigin` attribute whether the font is being loaded cross-origin or not. This is because of the [font fetching requirements](https://drafts.csswg.org/css-fonts/#font-fetching-requirements) as defined in the CSS font specification.

With that, we can get back to the remaining resource hints.

### 🦅 The `prefetch` keyword

While the above is mainly concerned with the current page, `prefetch` and its close cousin `prerender` are concerned with resources used on the next navigation. The `prefetch` resource hint informs the browser of a resource that is highly likely to be required on future navigation and as such, it would be beneficial to preemptively [fetch](https://fetch.spec.whatwg.org/#concept-fetch) and cache the resource.

> **Note:** While the browser might fetch and cache the resource, it will not process, parse or execute.

There are two optional attributes that can be used in combination with `prefetch`. These are [`as`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link#attr-as) and `crossorigin`. We've covered `crossorigin` before and its use in this context is the same. While the `as` attribute is optional, it's useful to indicate the type of resource that will be prefetched. This allows the browser to optimize the fetching process by setting appropriate request headers, transport priority, etc.

Let's look at prefetching a JavaScript resource:

```html
<link
  rel="prefetch"
  as="script"
  crossorigin="anonymous"
  href="https://unpkg.com/three"
/>
```

### 🐕 The `prerender` keyword

The next step up from `prefetch` is `prerender`. The first notable difference is that the browser will not only fetch the resource but also execute it. But `prerender` is only used for HTML documents. If you need to fetch a different type of resource, `prefetch` is your tool of choice. As such, the `as` and `crossorigin` attributes are not valid in this context.

> **Note:** What the browser does with regard to sub-resources (images, scripts, style, etc.) is implementation and context dependent.

```html
<link rel="prerender" href="https://example.com/search-results.html" />
```

### 🐈 The `preload` keyword

There's one more keyword that is related to the above resource hints. The `preload` keyword is different from the above in that it's not a hint, but an instruction to the browser to preload and cache the resource. Whereas the hints state that the browser _should_ take the action, `preload` indicates that the browser _must_ take the action.

The syntax of `preload` is the same as that of `prefetch`:

```html
<link
  rel="preload"
  href="https://unpkg.com/three"
  as="script"
  crossorigin="credentials"
/>
```

As with `prefetch`, the browser will fetch and cache the resource but not execute. Preload is also only concerned with the current page. It's not to be used for resources that might be required later during subsequent navigation.

## The `modulepreload` keyword

The `modulepreload` keyword is a specialized form of preload all about optimizing [ES module](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) loading. As such, the only valid type you can load with `modulepreload` is JavaScript with the `as` attribute being set to `script` by default. Discussing ES modules is way beyond the scope of the book, but I can highly recommend the [JavaScript Definitive Guide](https://www.oreilly.com/library/view/javascript-the-definitive/9781491952016/) or [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) and the resources in the related reading section for more info.

There are two ways you can approach using `modulepreload`. The specification calls out the fact that, because module scripts declare their dependencies, implementation can take advantage of this fact to preload all the declared dependencies of a module. For example, say we have a module script called `main.mjs`. This script then declares the following dependencies: `utils.mjs`, `parser.mjs`, `animation.mjs`. Now, assuming we have the following in the head of our document:

```html
<link rel="modulepreload" href="main.mjs" />
```

The implementation could introspect this module and discover the declared dependencies. With this knowledge, the implementation (JavaScript engine) could then go ahead and fetch and cache all the dependencies as well, setting everything up for a much speedier experience once the main module is parsed and executed.

As the above is implementation-dependent, a safer option would be to be explicit:

```html
<link rel="modulepreload" href="main.mjs" />
<link rel="modulepreload" href="utils.mjs" />
<link rel="modulepreload" href="parser.mjs" />
<link rel="modulepreload" href="animation.mjs" />
```

Now, if the implementation does take advantage of the fact that module dependencies are declared, it would run an algorithm that:

1. Fetches the main module (`main.mjs`) and adds it to the module map
2. Discovers the module's declared dependencies
3. Fetches and caches all dependencies, adding them to the module map
4. For any explicitly declared modules, checks if they're already in the module map before fetching
5. Skips fetching modules that are already cached

If, however, the JavaScript runtime implementation doesn't do the above, it will simply step through each link element and fetch and cache each module in turn.

## The `next` keyword

You remember how we talked about the various types of resource hints? Well, the `next` keyword of the `rel` attribute is a kind of shortcut for those. In particular, as the name suggests, a document resource that relates to the next navigation context.

With `next`, you essentially give up control and tell the browser, "This document here, this is where the user will go next, you do what you think is best." The implementation can then decide to only do a `dns-prefetch` or a full `prerender` of the resource.

```html
<link rel="next" href="https://example.com/next-step.html" />
```

> **Note:** While not currently in the list of [supported tokens](https://html.spec.whatwg.org/#attr-link-rel), there is also a `prev` keyword (aliased to previous) that indicates the logical previous document in the sequence.

## The `pingback` keyword

If you've spent some time reading blog posts on the internet, you've probably seen this section called "pingbacks" at the end of a post. The idea behind a pingback is to create a method by which an author can request to be notified when somebody links to one of their documents. This is in fact an entire specification all by itself, and as such, I won't cover the details here, but you'll find a link to the full specification in the related reading section.

The syntax for a `pingback` is:

```html
<link rel="pingback" href="https://example.com/xml-rpc" />
```

There may only be one `pingback` per document, and the `href` attribute must contain a valid absolute URL.

## The `search` keyword

The `search` keyword allows you to create a link to a document that provides search functionality for the current document and related resources such as a dedicated search page for your website:

```html
<link rel="search" href="https://example.com/search" />
```

OpenSearch is a specification currently in draft form that can be used in conjunction with the `search` token to enable auto-discovery of search interfaces. When used in this way, there are a couple of additional attributes that need to be added. Here, for example, is the `link` element from DuckDuckGo:

```html
<link
  title="DuckDuckGo"
  type="application/opensearchdescription+xml"
  rel="search"
  href="https://duckduckgo.com/opensearch.xml?atb=v223-5__"
/>
```

While DuckDuckGo doesn't have it set, the [specification also calls for a `profile` attribute](https://github.com/dewitt/opensearch/blob/master/opensearch-1-1-draft-6.md#autodiscovery-in-htmlxhtml) that needs to be set on the head element as follows:

```html
<head profile="http://a9.com/-/spec/opensearch/1.1/">
  ...
</head>
```

This concludes chapter two, but we're not done with the `link` element. We still need to cover the integrity attribute, `type`, `referrerpolicy`, `imagesrcset`, and `imagesizes`. All of these will be covered in chapter three.

## Related Reading

- [CORS on MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
- [Media Queries Level 4](https://drafts.csswg.org/mediaqueries/)
- [Avoid render-blocking CSS](https://web.dev/render-blocking-resources/#how-to-eliminate-render-blocking-stylesheets)
- [favicon - Chrome on Android](https://realfavicongenerator.net/blog/android-chrome-and-its-favicon/)
- [SVG favicon support](https://caniuse.com/#feat=link-icon-svg)
- [PNG favicon support](https://caniuse.com/#feat=link-icon-png)
- [SVG, Favicons, and All the Fun Things We Can Do With Them](https://css-tricks.com/svg-favicons-and-all-the-fun-things-we-can-do-with-them/)
- [The favicon quiz](https://css-tricks.com/favicon-quiz/)
- [IP and DNS | Internet 101](https://www.youtube.com/watch?v=MwxMsaFFycg)
- [TCP](https://youtu.be/AYdF7b3nMto?t=254)
- [What is latency?](https://www.youtube.com/watch?v=TWoElF8NbWk)
- [The TLS Handshake](https://www.cloudflare.com/learning/ssl/what-happens-in-a-tls-handshake/)
- [Resource Hints specification](https://w3c.github.io/resource-hints/)
- [Preload specification](https://w3c.github.io/preload/)
- [Pingback specification](https://www.hixie.ch/specs/pingback/pingback)
- [OpenSearch](https://github.com/dewitt/opensearch)
