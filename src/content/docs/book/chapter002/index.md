---
title: "Chapter 2: The link element and style elements"
keywords: html link element, link rel attribute, link href attribute, link media attribute, stylesheet linking, favicon icon, resource hints, dns-prefetch, preconnect, prefetch, preload, modulepreload, html performance optimization, web performance, link crossorigin, alternate stylesheet, search link, pingback
description: Master the HTML link element and its powerful attributes. Learn stylesheet linking, favicon implementation, resource hints for performance optimization, and advanced techniques like preconnect, prefetch, and modulepreload.
---

After completing this chapter, you will be able to:

- **Implement** the `link` element with appropriate attributes to connect external resources to HTML documents
- **Configure** alternative stylesheets and content versions using the `alternate` keyword
- **Apply** resource hints (`dns-prefetch`, `preconnect`, `prefetch`, `preload`) to optimize page performance
- **Create** accessible favicon implementations supporting multiple formats and resolutions
- **Distinguish** between required and optional attributes for different `link` relationships
- **Evaluate** browser compatibility differences for `link` element features
- **Implement** metadata relationships including canonical URLs, licenses, and privacy policies

## Introduction

The `link` element establishes relationships between an HTML document and external resources. While most developers know it primarily for connecting stylesheets, the element provides extensive functionality for resource optimization, metadata declaration, and content relationships. This chapter examines the `link` element's attributes, keywords, and implementation patterns, progressing from common use cases to advanced optimization techniques.

The `link` element is primarily used in the document's `<head>` section ([with specific exceptions for certain `rel` values](https://html.spec.whatwg.org/multipage/links.html#body-ok)) and requires both `href` and `rel` attributes to function correctly. The `rel` attribute defines the relationship type between the current document and the linked resource, while `href` specifies the resource location. Without valid values for both attributes, browsers cannot establish the intended connection.

Modern web development increasingly relies on the `link` element's advanced capabilities. Resource hints enable preemptive DNS resolution and connection establishment, reducing latency for critical resources. Alternative content versions support internationalization and accessibility requirements. Metadata relationships improve search engine optimization and provide standardized information about document licensing and privacy policies. Understanding these capabilities allows developers to create faster, more accessible, and better-optimized web experiences.

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

In `main.css`, you have the following style rule:

```css
h1 {
  color: red;
}
```

Loading the document in your browser shows the heading, but the color will be black. Because the `rel` attribute is missing, the browser creates no link and does not load the CSS file. If you add a `rel` attribute with an invalid value like "css", it produces the same result.

To create the link and load the stylesheet, specify a valid value such as `stylesheet`:

```html
<link rel="stylesheet" href="style/main.css" media="screen" />
```

Reloading the document now shows the heading as red.

## The `href` attribute

The `href` attribute is the core of this element. It is required (unless `imagesrcset` is present) and must contain a valid uniform resource locator (URL). The most common use case is linking an external stylesheet:

```html
<link href="style/main.css" />
```

## The `stylesheet` keyword

The `stylesheet` keyword of the `rel` attribute can be used on the `link` element and indicates that the referenced document is an external resource that contributes to the styling processing model for the current document.

```html
<link rel="stylesheet" href="./css/main.css" />
```

Unlike most `link` elements, this form of the link element is what is [referred to as `body-ok`](https://html.spec.whatwg.org/multipage/links.html#body-ok), meaning that the element can be used inside the `body` of the document. Other `link` element types that are also `body-ok` are:

- `dns-prefetch`
- `modulepreload`
- `pingback`
- `preconnect`
- `prefetch`
- `preload`

### The `disabled` attribute

The `disabled` attribute on `link` elements with `rel="stylesheet"` controls when a stylesheet is fetched and applied. According to the HTML Living Standard:

> The `disabled` attribute must only be specified on link elements that have a rel attribute containing the stylesheet keyword. Whenever the attribute is removed, the link element's "explicitly enabled" flag is set to true.

In practice, this means you can load a stylesheet in a disabled state and enable it later with JavaScript. Only when the attribute is removed should the browser fetch and apply the stylesheet.

#### Why might this be useful?

Because the attribute controls when a stylesheet is actually fetched and applied, it can open the door to several practical scenarios.

Potential use cases include:

- **Lazy loading**: Load a stylesheet only when its component is about to enter the viewport (for example, with IntersectionObserver).
- **Theming**: Toggle different stylesheets for light or dark mode.
- **Performance control**: Delay non‑critical styles until after the page becomes interactive.

#### Syntax and Behavior

```html
<!-- Stylesheet loaded but not applied -->
<link rel="stylesheet" href="styles.css" disabled />

<!-- Enable via JavaScript -->
<script>
  document.querySelector("link[disabled]").disabled = false;
</script>
```

#### Browser Implementation Differences

All major browsers support the attribute, but their behavior differs.

##### Firefox

- Fetches the CSS on page load.
- Does not apply the CSS initially.
- When enabled, it applies the stylesheet and loads any assets referenced in the CSS.

##### Chromium

- Fetches the CSS on page load.
- Does not apply the CSS initially.
- When enabled, it appears to fetch the CSS again (likely from cache), then applies the CSS and loads referenced assets.

##### Safari

- Does *not* fetch the CSS on page load.
- When enabled, it fetches and applies the stylesheet and any referenced assets.
- This matches the specification most closely.

> **Note**: Browser implementations for the `disabled` attribute continue to evolve. Check the current browser documentation for the latest behavior. Tracking issues exist for [Chrome](https://issues.chromium.org/issues/40286062) and [Firefox](https://bugzilla.mozilla.org/show_bug.cgi?id=1376729) to align implementations with the specification.

### The `media` attribute

This attribute was primarily used to link separate stylesheets for screen or print rendering. For example:

```html
<link rel="stylesheet" href="screen.css" media="screen" />
<link rel="stylesheet" href="print.css" media="print" />
```

Since CSS added media queries, developers commonly use `@media print` in stylesheets for print styling. However, separating print rules into a dedicated stylesheet has benefits. When viewing on a display, the browser marks print stylesheets as low-priority. It defers downloading and parsing until screen resources are complete. When the browser downloads print stylesheets, it does so in a non-blocking manner.

> **Note:** What is render blocking? When the browser encounters a CSS file, it stops parsing the HTML document and downloads the CSS file. Once downloaded, the browser parses the CSS file and applies the styles to the HTML document. This process is render-blocking because it prevents the rest of the document from rendering until the CSS file has been downloaded, parsed, and applied.

Besides the common values `all`, `screen`, and `print`, the `media` attribute supports any valid media query. You can specify that a stylesheet is only needed for a specific screen size, such as a tablet:

```html
<link
  rel="stylesheet"
  href="tablet.css"
  media="screen and (width >= 48rem) and (width < 64rem)"
/>
```

> **Note:** There are also around [8 more media types, which have been deprecated](https://drafts.csswg.org/mediaqueries/#media-types)

### The `title` attribute

Similar to the `link` element using the `alternate` keyword, a `style` element can also carry a `title` attribute that, when set, will make it part of a [CSS style sheet set](https://drafts.csswg.org/cssom/#css-style-sheet-set).

```html
<style title="Reader mode">
  ...;
</style>
```

### The `blocking` attribute

Similar to the `link` element, which uses `rel="expect"`, the `style` element can also carry the `blocking` attribute. As of this writing (September 29, 2025), the only valid value for this attribute is `render`, although there could be more defined in a future version of the specification.

When set, it indicates that this element is [potentially render-blocking](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#potentially-render-blocking).

```html
<style title="Reader mode" blocking="render">
  ...;
</style>
```

## The `alternate` keyword

The `alternate` keyword creates a link to an alternative version of the current document. The meaning depends on other attributes used with it or the keyword combination.

### When `alternate` is combined with `stylesheet`

The `alternate stylesheet` combination allows you to specify alternative CSS presentations for a document. The browser loads the primary stylesheet immediately and alternative stylesheets with low priority:

```html
<link rel="stylesheet" href="css/main.css" media="screen" />
<link
  rel="alternate stylesheet"
  href="css/high-contrast.css"
  media="screen"
  title="High Contrast"
/>
```

The browser applies the first stylesheet by default. Alternative stylesheets remain available but require user activation. Firefox provides access through View > Page Style menu, while Chromium-based browsers and Safari offer no built-in interface for switching stylesheets.

**Browser Behavior:**

- All browsers download alternate stylesheets using the lowest fetch priority
- Loading occurs in a non-blocking manner
- Only Firefox provides a native UI for stylesheet switching
- The `title` attribute is required when using `alternate stylesheet`

Due to limited browser support for stylesheet switching UI, this feature sees minimal use in modern web development. CSS media queries and JavaScript-based theme switching provide more reliable cross-browser alternatives.

### When `alternate` is combined with `hreflang`

The `hreflang` attribute with `alternate` specifies alternate language versions of the current document. This combination serves both users and search engines by identifying equivalent content in different languages:

```html
<link
  rel="alternate"
  href="/fr/document.html"
  hreflang="fr"
  title="French version"
/>
```

Search engines use this information to:

- Direct users to content in their preferred language
- Understand that multiple language versions represent the same content
- Avoid penalizing sites for duplicate content across language versions

The `hreflang` value must be a valid [BCP 47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag.

### When used with the `type` attribute

The `type` attribute with `alternate` specifies alternate formats of the current document. Common use cases include syndication feeds and downloadable document formats:

```html
<link
  rel="alternate"
  type="application/atom+xml"
  href="rss.xml"
  title="All the posts!"
/>
```

Browser extensions and feed readers detect these declarations to enable subscription features. You can combine `type` and `hreflang` for language-specific alternate formats:

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

The `type` attribute value must be a valid MIME type. Browsers use this information to determine appropriate handling for the linked resource.

version of the current document, it's important to indicate that the current document is the canonical (recognized, authoritative, authorized, accepted) version. For example:

```html
<link rel="canonical" href="https://www.example.com/" />
<link
  rel="alternate"
  href="/fr/document.html"
  hreflang="fr"
  title="French version"
/>
```

While not part of the HTML standard, search engines recognize `canonical` to identify the authoritative version of duplicate or similar content. Use `canonical` when:

- Content appears at multiple URLs
- Cross-posting content to multiple sites
- URL parameters create duplicate pages

Search engines treat the canonical URL as the primary version for indexing and ranking purposes.

## The `style` element

The `style` element embeds CSS directly within the HTML document:

```html
<style>
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
</style>
```

The `style` element supports the same `disabled`, `media`, `title`, and `blocking` attributes as described in the stylesheet section above.

## The `canonical` keyword `[NON-STANDARD]`

When specifying an alternate

## Resource Hints

The following keywords provide performance optimization through resource hints. These hints inform the browser about resources it should fetch or connections it should establish before they're explicitly needed. Browsers treat these as hints rather than directives and may choose whether to act on them based on current conditions.

### The `dns-prefetch` keyword

DNS resolution maps domain names to IP addresses, enabling browsers to connect to servers. This process involves querying DNS servers that may need to contact additional servers to resolve the address. DNS lookups typically take 20-120 milliseconds, depending on network conditions and DNS server proximity.

When a webpage loads resources from multiple domains, the browser performs a DNS lookup for each new domain it encounters. The `dns-prefetch` hint instructs the browser to resolve a domain's DNS entry before resources from that domain are requested:

```html
<link rel="dns-prefetch" href="https://unpkg.com/" />
```

This hint is most effective for domains you know the page will contact, but where the exact resource URLs vary or are determined dynamically. The browser performs DNS resolution during idle time, reducing latency when the resources are eventually requested.

### The `preconnect` keyword

Establishing a server connection requires more than DNS resolution. After obtaining the IP address, the browser must complete a TCP handshake to establish the connection. For HTTPS connections, an additional TLS handshake follows to establish encryption parameters.

The connection process includes:

1. **TCP handshake**: Client and server negotiate connection parameters
2. **TLS handshake** (for HTTPS): Client and server establish encryption keys and verify certificates

The `preconnect` hint instructs the browser to complete all connection steps proactively:

```html
<link rel="preconnect" href="https://unpkg.com/" />
```

Use `preconnect` for critical third-party origins where you need resources soon after page load. This hint consumes more resources than `dns-prefetch`, as it establishes a connection and maintains it in the [connection pool](https://fetch.spec.whatwg.org/#concept-connection-pool). The connection pool manages established connections for reuse across multiple requests, improving performance by avoiding repeated handshakes. Browsers may perform a full handshake (DNS+TCP for HTTP, DNS+TCP+TLS for HTTPS), a partial handshake, or skip the process entirely based on resource constraints and current conditions.

### The `prefetch` keyword

The `prefetch` hint identifies resources likely needed for future navigation. The browser fetches and caches these resources at low priority without executing or processing them:

```html
<link
  rel="prefetch"
  as="script"
  crossorigin="anonymous"
  href="https://unpkg.com/three"
/>
```

The optional `as` attribute specifies the resource type, enabling the browser to set appropriate request headers and priorities. Valid values include:

- `script` for JavaScript files
- `style` for CSS files
- `image` for images
- `document` for HTML documents
- `font` for web fonts
- `fetch` for resources loaded via fetch() or XMLHttpRequest

### The `preload` keyword

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

As with `prefetch`, the browser will fetch and cache the resource, but not execute. Preload is also only concerned with the current page. It's not to be used for resources that might be required later during subsequent navigation.

### The `modulepreload` keyword

The `modulepreload` keyword optimizes the loading of JavaScript ES modules and their dependencies. Unlike regular scripts, ES modules explicitly declare their dependencies through `import` statements, allowing browsers to build a complete dependency graph before execution.

```html
<link rel="modulepreload" href="main.mjs" />
<link rel="modulepreload" href="utils.mjs" />
<link rel="modulepreload" href="parser.mjs" />
<link rel="modulepreload" href="animation.mjs" />
```

The `modulepreload` keyword specifically targets JavaScript modules, with `as="script"` implied and no other `as` values permitted. The browser fetches the module, parses it, and constructs a module map that tracks all loaded modules.

Two approaches exist for using `modulepreload`:

#### Approach 1: Preload only the entry module

```html
<link rel="modulepreload" href="main.mjs" />
```

Some browser implementations inspect the module's `import` statements and automatically fetch declared dependencies. This approach relies on implementation-specific behavior.

#### Approach 2: Explicitly preload all dependencies

```html
<link rel="modulepreload" href="main.mjs" />
<link rel="modulepreload" href="utils.mjs" />
<link rel="modulepreload" href="parser.mjs" />
<link rel="modulepreload" href="animation.mjs" />
```

Explicitly declaring all dependencies ensures consistent behavior across browsers. The module map prevents duplicate fetches when multiple modules share dependencies.

The browser's module loading algorithm:

1. Fetches the specified module and adds it to the module map
2. Parses the module to identify dependencies (implementation-dependent)
3. For explicitly declared modules, the browser checks the module map before fetching
4. Skips fetching for modules already present in the map
5. Compiles but doesn't execute modules until explicitly imported

Use `modulepreload` when your application uses ES modules for critical path resources, particularly when module dependency chains would otherwise cause waterfall loading delays.

### The `crossorigin` attribute

When preloading cross-origin resources, you must specify the `crossorigin` attribute to match the credentials mode of the actual resource request. As such, the `crossorigin` attribute alone is not sufficient; the server hosting the resource must also be configured to accept cross-origin requests through appropriate CORS headers.

```html
<!-- Anonymous cross-origin request (no credentials) -->
<link rel="preload" href="https://widgets.com/widget.js" crossorigin />

<!-- Credentialed cross-origin request -->
<link
  rel="preload"
  href="https://widgets.com/widget.js"
  crossorigin="use-credentials"
/>
```

**Server Configuration Required**: The server at `widgets.com` must respond with appropriate CORS headers such as `Access-Control-Allow-Origin`. Without proper server configuration, the browser will block the request regardless of the `crossorigin` attribute setting. Common CORS-related errors appear in the browser console when the server configuration is missing or incorrect.

**Important**: Font resources always require the `crossorigin` attribute when preloaded, even when served from the same origin. This requirement stems from the CSS Fonts specification's fetching requirements. Same-origin fonts still require `crossorigin`, but won't need special server configuration.

### The `expect` keyword

The `expect` keyword of the `rel` attribute on the `link` element is primarily used with cross-document view transitions. The goal is to ensure that the page being navigated to is in a stable state with the most critical resources connected and parsed before the transition happens.

However, the `expect` keyword by itself will not have any effect and needs to be paired with both the `href` and `blocking` attributes. The `href` attribute should reference the value of an `id` element in the current document, for example:

```html
<main id="primary-content">...</main>
```

The `link` element then also must contain the `blocking` attribute with a value of `render`. Putting it all together, you would use it as follows:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <link rel="expect" href="#primary-content" blocking="render" />
  </head>

  <body>
    <main id="primary-content">...</main>
  </body>
</html>
```

It is important to note that the browser will not block rendering until external resources have been fully loaded. Instead, it blocks until the reference element has been connected to the DOM and the closing tag has been parsed. In the above example, this means it will end the render blocking phase as soon as `</main>` has been parsed.

## The `icon` keyword

The `icon` keyword specifies the favicon for a web page—the small icon displayed in browser tabs, bookmarks, and history entries. Beyond basic tab identification, favicons appear in bookmark lists, browser history, and search results. Progressive web applications use larger icon variants for home screen shortcuts and app launchers.

Due to the web platform's expansion across devices and display technologies, the requirements around favicons have also expanded. High-density displays require multiple resolutions to prevent blurry scaling. Platform-specific requirements, such as Apple's non-standard touch icons, can add complexity to favicon implementations. On the other hand, modern features like dark mode support through SVG and CSS create new possibilities for adaptive icon design.

Understanding the favicon loading algorithm and format priorities enables developers to provide appropriate icons for all contexts while maintaining backward compatibility.

### Favicon Loading Algorithm

When a browser loads a page, it searches for a favicon using this priority:

1. `link` elements with `rel="icon"` in document order
2. A file named `favicon.ico` at the domain root
3. No icon if neither exists (Browsers often show their own fallback in these instances)

### Icon Formats and Implementation

Modern favicon implementation requires supporting multiple formats for different browsers and use cases. When multiple icons are equally appropriate, browsers use the **last one declared in document order** according to the HTML specification. Browsers evaluate appropriateness based on the `type`, `media`, and `sizes` attributes.

### The Scalable Vector Graphics (SVG) format

SVG provides resolution-independent icons that scale perfectly across all display densities:

```html
<link rel="icon" href="favicon.svg" sizes="any" type="image/svg+xml" />
```

The `sizes="any"` attribute indicates the SVG scales to any size. SVG icons support CSS media queries internally, enabling features like automatic dark mode adaptation through embedded styles.

**Browser Support**: Chrome 80+, Firefox 41+, Edge 80+. Safari added support for SVG favicons in version 26.

### The Portable Network Graphics (PNG) format

PNG icons provide compatibility for browsers that don't support SVG:

```html
<link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
<link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
```

Multiple sizes ensure a sharp favicon display across different contexts. Common sizes include:

- 16x16: Browser tabs, bookmarks
- 32x32: High-DPI browser tabs
- 192x192: Android home screen
- 512x512: PWA install prompts

### ICO Format Legacy Support

The ICO format, while outdated, provides maximum backward compatibility. Place a `favicon.ico` containing 16x16 and 32x32 images at your domain root for legacy browser support.

### The `apple-touch-icon` keyword [NON-STANDARD]

iOS devices require specific icon declarations for home screen shortcuts and bookmarks:

```html
<link rel="apple-touch-icon" href="/apple-icon-180x180.png" sizes="180x180" />
```

Despite being non-standard, this declaration is widely recognized:

- HTML validators accept it without errors
- Lighthouse audits flag its absence
- Android and other platforms often use these icons as fallbacks

**Required Sizes**:

- 180x180: iPhone Retina displays
- 152x152: iPad Retina displays
- 120x120: Older iPhone Retina displays

### Implementation Strategy

A complete favicon implementation supporting modern and legacy browsers:

```html
<!-- SVG for modern browsers -->
<link rel="icon" href="/favicon.svg" sizes="any" type="image/svg+xml" />

<!-- PNG fallbacks -->
<link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
<link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />

<!-- Apple devices -->
<link rel="apple-touch-icon" href="/apple-icon-180x180.png" sizes="180x180" />

<!-- Ensure favicon.ico exists at root for legacy support -->
```

Tools like [RealFaviconGenerator](https://realfavicongenerator.net/) automate the creation of all required formats and sizes from a single source image.

### The `manifest` keyword

The `manifest` keyword references a web application manifest file:

```html
<link rel="manifest" href="./manifest.json" />
```

The manifest provides metadata for Progressive Web Apps (PWAs), including app name, icons, display mode, and theme colors. Only one manifest link per document is recognized; additional declarations are ignored.

You can find additional information on the format and content of a `mainfest.json` file from [this detailed article on MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Manifest).

## Sequential `link` types

Web documents often form logical sequences, such as paginated search results or multi-step processes. Sequential link types inform browsers about a document's position within a sequence, enabling optimization and improved user navigation.

The common refrain between these is their sequential nature. This is then what is referred to as sequential link types.

### The `next` keyword

The `next` keyword indicates the next document in a sequence. Browsers may use this information to optimize loading. The implementation will determine the best strategy to apply, if any, which can be one of a `dns-prefetch`, `preconnect`, or `prefetch`.

```html
<link rel="next" href="https://example.com/categories.html" />
```

### The `prev` keyword

Following on from the above, there is the `prev` keyword of the `rel` attribute. This keyword is used to indicate the most logical previous document in a sequence.

```html
<link rel="prev" href="https://example.com/intro.html" />
```

## Metadata Keywords

### The `author` keyword

When the `author` keyword is used with the `rel` attribute on the `link` element, it indicates that the referenced document contains more information about the author of the current document. The linked resource typically contains an author biography, contact information, or other published works.

```html
<link rel="author" href="/about" />
```

### The `license` keyword

Much like you would link to your license file from the README of a code repository to indicate the license under which the content, code, and so forth of your repository is licensed, you can do the same for your web document. The `license` keyword links to licensing terms governing the document's content

```html
<link rel="license" href="http://www.opensource.org/licenses/mit-license.php" />
```

When different document sections have different licenses, clarify these distinctions within the document content, as the `link` element cannot specify partial licensing.

### The `help` keyword

The `help` keyword identifies documentation for the current page:

```html
<link rel="help" href="/using-the-link-element/" />
```

### The `search` keyword

The `search` keyword allows you to create a link to a document that provides search functionality for the current document and related resources, such as a dedicated search page:

```html
<link rel="search" href="https://example.com/search" />
```

OpenSearch is a specification currently in draft form that can be used in conjunction with the `search` token to enable auto-discovery of search interfaces. For OpenSearch autodiscovery, include additional attributes:

```html
<link
  title="DuckDuckGo"
  type="application/opensearchdescription+xml"
  rel="search"
  href="https://duckduckgo.com/opensearch.xml?atb=v501-6__"
/>
```

While DuckDuckGo doesn't have it set, the [specification also calls for a `profile` attribute](https://github.com/dewitt/opensearch/blob/master/opensearch-1-1-draft-6.md#autodiscovery-in-htmlxhtml) that needs to be set on the head element as follows:

```html
<head profile="http://a9.com/-/spec/opensearch/1.1/">
  ...
</head>
```

### The `privacy-policy` keyword

The `privacy-policy` keyword links to the privacy policy governing data collection and usage

```html
<link rel="privacy-policy" href="/privacy" />
```

The reference can be to a standalone privacy document or a specific section of a more general document that contains other information in addition to the privacy-related information.

### The `terms-of-service` keyword

The `terms-of-service` keyword links to the terms governing use of the site or service:

```html
<link rel="terms-of-service" href="/terms-of-service" />
```

### The `pingback` keyword

The `pingback` keyword enables automatic notification when other sites link to your content:

```html
<link rel="pingback" href="https://example.com/xml-rpc" />
```

There may only be one `pingback` per document, and the `href` attribute must contain a valid absolute URL.

## Related Reading

### Favicons and Icons

- [SVG, Favicons, and All the Fun Things We Can Do With Them](https://css-tricks.com/svg-favicons-and-all-the-fun-things-we-can-do-with-them/) - Comprehensive guide to modern favicon implementation with SVG
- [The favicon quiz](https://css-tricks.com/favicon-quiz/) - Interactive quiz testing favicon knowledge
- [SVG favicon support](https://caniuse.com/#feat=link-icon-svg) - Browser compatibility data for SVG favicons
- [PNG favicon support](https://caniuse.com/#feat=link-icon-png) - Browser compatibility data for PNG favicons
- [favicon - Chrome on Android](https://realfavicongenerator.net/blog/android-chrome-and-its-favicon/) - Android-specific favicon requirements and behavior

### Resource Optimization and Performance

- [Resource Hints specification](https://w3c.github.io/resource-hints/) - Official W3C specification for dns-prefetch, preconnect, prefetch
- [Preload specification](https://w3c.github.io/preload/) - Official W3C specification for preload and modulepreload
- [Avoid render-blocking CSS](https://web.dev/render-blocking-resources/#how-to-eliminate-render-blocking-stylesheets) - Strategies for optimizing CSS loading

### Network Fundamentals

- [IP and DNS | Internet 101](https://www.youtube.com/watch?v=MwxMsaFFycg) - Video explanation of DNS resolution
- [TCP](https://youtu.be/AYdF7b3nMto?t=254) - Video explanation of TCP handshake process
- [The TLS Handshake](https://www.cloudflare.com/learning/ssl/what-happens-in-a-tls-handshake/) - Detailed explanation of HTTPS connection establishment
- [What is latency?](https://www.youtube.com/watch?v=TWoElF8NbWk) - Video explanation of network latency concepts

### CSS and Media Queries

- [Media Queries Level 4](https://drafts.csswg.org/mediaqueries/) - W3C specification for CSS media queries

### Cross-Origin Resources

- [CORS on MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) - Comprehensive guide to Cross-Origin Resource Sharing

### Additional Specifications

- [Pingback specification](https://www.hixie.ch/specs/pingback/pingback) - Protocol specification for pingback functionality
- [OpenSearch - Search autodiscovery specification](https://github.com/dewitt/opensearch)
