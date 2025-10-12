---
title: "Chapter 1: Getting started with HTML"
keywords: html document structure, html elements, html head, html title, html base, doctype, html lang attribute, html metadata, web accessibility, html semantics, html document root, html getting started
description: Master the fundamental HTML document structure. Learn about the html, head, title, and base elements, DOCTYPE declarations, and essential attributes for web accessibility and SEO.
---

## Learning Objectives

By the end of this chapter, you will be able to:

- Understand the role and syntax of the DOCTYPE declaration
- Use the root `html` element with appropriate language settings
- Structure document metadata using the `head` element
- Implement essential meta elements for character encoding, viewport settings, and SEO
- Apply accessibility best practices to document-level markup

## Introduction

Every HTML document follows a fundamental structure that ensures proper rendering across browsers and platforms. This chapter examines the essential elements that form the foundation of any HTML document: the DOCTYPE declaration, the root `html` element, and the metadata container `head` element with its child elements.

You will learn how these elements work together to provide critical information to browsers, search engines, and assistive technologies. Understanding this foundational structure is essential for creating accessible, performant, and standards-compliant web documents. The chapter emphasizes practical implementation while explaining the technical reasoning behind each requirement.

## The DOCTYPE Declaration

Before examining HTML elements, you must understand the DOCTYPE declaration. While not technically an HTML element, the DOCTYPE is required at the beginning of every HTML document:

```html
<!DOCTYPE html>
```

The DOCTYPE serves a critical purpose: it instructs the browser to render the page in standards mode rather than quirks mode. In standards mode, browsers follow the HTML specification as closely as possible. In quirks mode, browsers emulate legacy behavior from the 1990s to maintain backward compatibility with old websites. Omitting the DOCTYPE or using an incorrect declaration triggers quirks mode, which can cause unexpected layout and rendering issues.

The HTML5 DOCTYPE shown above is the only version you need to use. While legacy DOCTYPEs exist from earlier HTML versions, they are verbose and unnecessary for modern web development.

## The `html` Element

Following the DOCTYPE, every HTML document contains a root `html` element (either explicitly or implicitly) that encapsulates all other elements. While the opening and closing tags are technically optional under certain conditions, you should always include them explicitly:

```html
<!DOCTYPE html>
<html>
  <!-- All other elements go here -->
</html>
```

The `html` element serves as the document's root container and provides essential metadata about the document through its attributes. While the element itself is straightforward, its `lang` attribute is critical for accessibility and internationalization.

### The `lang` Attribute

The `lang` attribute on the `html` element declares the primary natural language of the document's content. This attribute is essential for:

- **Screen readers**: Determines correct pronunciation rules
- **Translation tools**: Identifies the source language for translation
- **Search engines**: Helps deliver region-appropriate results
- **Browsers**: Enables language-specific typography and features

The attribute uses https://www.rfc-editor.org/info/bcp47. Common examples include:

html

```html
<!-- English -->
<html lang="en"></html>
<!-- US English -->
<html lang="en-US"></html>
<!-- British English -->
<html lang="en-GB"></html>
<!-- French -->
<html lang="fr"></html>
<!-- Canadian French -->
<html lang="fr-CA"></html>
<!-- Simplified Chinese -->
<html lang="zh-Hans"></html>
```

You can override the language for specific elements within the document by applying the `lang` attribute to child elements:

```html
<html lang="en">
  <body>
    <p>This paragraph is in English.</p>
    <p lang="fr">Ce paragraphe est en français.</p>
    <blockquote lang="de">Dieser Absatz ist auf Deutsch.</blockquote>
  </body>
</html>
```

### The `translate` Attribute

The `translate` attribute controls whether the element's content should be translated by automatic translation services. Set to `"no"` to prevent translation:

```html
<html lang="en" translate="no"></html>
```

This attribute is particularly useful for:

- Brand names and product names
- Technical code or commands
- Content where the specific wording is critical

Like the `lang` attribute, `translate` can be applied to specific child elements to provide granular control over translation behavior.

## The `meta` Element

The `meta` element provides metadata about the HTML document that cannot be expressed through other HTML elements. This element appears only within the `head` element and uses attributes rather than content to convey information. The `meta` element serves three primary purposes:

1. **Character encoding declaration** using the `charset` attribute
2. **Pragma directives** using the `http-equiv` attribute
3. **Document metadata** using the `name` attribute paired with `content`

Each `meta` element must include exactly one of these primary attributes: `charset`, `http-equiv`, or `name`.

### Character Encoding with `charset`

The `charset` attribute declares the character encoding used to interpret the document's bytes as text. While technically not mandatory, you should always specify the character encoding explicitly for both performance and reliability:

html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Page Title</title>
  </head>
</html>
```

**Critical requirement**: The `meta` element with `charset` must appear within the first 1024 bytes of the document. This positioning allows browsers to determine the encoding early in the parsing process, avoiding the performance penalty of restarting the parser with a different encoding.

#### Why UTF-8?

The HTML specification strongly recommends UTF-8 as the document encoding for several reasons:

- **Universal character support**: UTF-8 can represent any character in the Unicode standard
- **Backward compatibility**: ASCII text is valid UTF-8
- **Security**: Reduces encoding-related security vulnerabilities
- **Consistency**: Simplifies form submissions and URL encoding
- **Broad support**: Universal browser and platform support

While other encodings are technically permitted, UTF-8 has become the de facto standard for web content. Using any other encoding requires compelling justification and may introduce compatibility issues.

#### Technical Implementation Notes

Only one `meta` element with the `charset` attribute is permitted per document. If multiple charset declarations exist, browsers will use the first one encountered. The value is case-insensitive, though convention uses uppercase "UTF-8".

The browser's encoding detection algorithm is complex and involves multiple steps:

1. [Byte Order Mark (BOM) detection](https://www.w3.org/International/questions/qa-byte-order-mark)
2. HTTP Content-Type header
3. `meta` charset within first 1024 bytes
4. Heuristic analysis (unreliable fallback)

By declaring charset early in the document, you ensure the browser uses step 3 rather than falling back to potentially incorrect heuristic detection.

### Pragma Directives with `http-equiv`

The `http-equiv` attribute specifies pragma directives that control browser behavior. Despite the name suggesting "HTTP equivalent," these pragma directives are largely unrelated to HTTP headers. While the attribute name reflects historical conventions, the processing models for pragma directives and their similarly-named HTTP headers differ significantly, often with dramatically different behavior. The `refresh` directive is the sole exception, sharing its processing model with the corresponding `Refresh` HTTP header.

You should think of pragma directives as document-level processing instructions rather than HTTP header equivalents. When possible, prefer using actual HTTP headers or alternative implementation methods over pragma directives, as the DOM's mutability can create complex timing issues during parsing.

The HTML specification defines several pragma directives, though only three warrant detailed discussion for modern development.

#### `default-style`

The `default-style` pragma specifies which linked stylesheet set should be applied by default. The `content` attribute value must match the `title` attribute of a linked stylesheet:

```html
<head>
  <meta http-equiv="default-style" content="default" />
  <title>Document Title</title>
  <link
    rel="stylesheet"
    href="./css/default.css"
    media="screen"
    title="default"
  />
  <link rel="stylesheet" href="./css/main.css" media="screen" title="main" />
</head>
```

In this example, `default.css` will be applied despite appearing before `main.css` in the document. Both stylesheets are downloaded, but only the designated default is initially active. Users can switch between stylesheet sets through the browser's View menu, though this functionality has limited browser support (currently only Firefox).

Given the limited support and the availability of more flexible JavaScript-based solutions, this pragma directive sees minimal practical use.

#### `refresh`

The `refresh` pragma directive controls automatic page refreshing or redirection. While powerful, this feature requires careful consideration of accessibility and user experience impacts.

##### Automatic Refresh

To refresh the current page at a specified interval:

```html
<meta http-equiv="refresh" content="30" />
```

The `content` value specifies the delay in seconds between refreshes. The page will reload every 30 seconds until the user navigates away or closes the browser tab.

##### Automatic Redirection

To redirect to a different URL after a delay:

```html
<meta http-equiv="refresh" content="5; URL=https://example.com/new-location" />
```

This redirects to the specified URL after 5 seconds. When implementing redirects, always provide a manual fallback:

```html
<head>
  <meta
    http-equiv="refresh"
    content="5; URL=https://example.com/new-location"
  />
</head>
<body>
  <h1>This page has moved</h1>
  <p>
    You will be redirected automatically in 5 seconds. If not, please visit
    <a href="https://example.com/new-location">our new location</a>.
  </p>
</body>
```

##### Accessibility Considerations

Automatic refresh and redirection present significant accessibility challenges:

- **WCAG 2.2.1 Timing Adjustable**: Users must be able to control time limits. Automatic refresh violates this principle unless users can pause, stop, or adjust the timing.
- **Reading interruption**: Users with cognitive disabilities or those using screen readers may have their reading interrupted mid-sentence.
- **Loss of context**: Form data and scroll position are typically lost on refresh.
- **Unexpected behavior**: Users may not anticipate or desire automatic navigation.

For these reasons, prefer JavaScript-based solutions that provide user control over refresh behavior. Server-side redirects (HTTP 301/302 responses) are superior for permanent URL changes.

#### `content-security-policy`

The `content-security-policy` (CSP) pragma provides a declarative security policy that helps prevent cross-site scripting (XSS) and other code injection attacks. While comprehensive CSP coverage exceeds this chapter's scope, understanding basic implementation is valuable.

A minimal CSP that restricts script execution:

```html
<meta
  http-equiv="content-security-policy"
  content="script-src 'self'; object-src 'none'"
/>
```

This policy:

- `script-src 'self'`: Allows only scripts from the same origin
- `object-src 'none'`: Blocks all `<object>`, `<embed>`, and `<applet>` elements

With this CSP in place, inline scripts and scripts from external domains will be blocked, significantly reducing XSS attack vectors. However, HTTP response headers provide more robust and flexible CSP implementation than meta elements. Use the meta element approach only when you cannot modify server headers.

### Document Metadata with the `name` Attribute

The `name` attribute paired with a `content` attribute provides document-level metadata. Unlike pragma directives, these metadata entries primarily serve external consumers such as search engines, social media platforms, and browser features. Each `name` value defines a specific type of metadata.

#### `application-name`

The `application-name` metadata identifies web applications (not regular websites). Use this only when your HTML document represents an application with interactive functionality:

```html
<meta name="application-name" content="Task Manager Pro" />
```

For multi-language applications, specify translations of the application name using the `lang` attribute:

```html
<meta name="application-name" content="Task Manager Pro" lang="en" />
<meta name="application-name" content="Gestionnaire de Tâches Pro" lang="fr" />
<meta name="application-name" content="Aufgabenmanager Pro" lang="de" />
```

Include only one `application-name` per language. Browsers may display this name when users bookmark or install the application.

#### `author`

Identifies the document's author:

```html
<meta name="author" content="Jane Smith" />
```

The value must be a free-form string giving the name of one of the page's authors. For multiple authors, the specification's wording ("one of the page's authors") suggests using separate meta elements:

```html
<meta name="author" content="Jane Smith" />
<meta name="author" content="John Doe" />
```

This metadata has minimal practical impact but can be useful for attribution and contact purposes.

#### `description`

Provides a concise summary of the page's content. This metadata is crucial for SEO and user experience, as search engines often display it in search results:

```html
<meta
  name="description"
  content="Learn HTML document structure, including DOCTYPE, meta elements, and accessibility best practices in this comprehensive guide."
/>
```

**Best practices for descriptions:**

- Keep length between 150-160 characters for optimal display in search results
- Write unique descriptions for each page
- Include relevant keywords naturally
- Focus on user value rather than keyword stuffing
- Make it compelling. This is often users' first interaction with your content

#### `generator`

Identifies software that generated the document:

```html
<meta name="generator" content="Astro 3.0" />
<meta name="generator" content="11ty 2.0.1" />
```

Hand-coded documents should omit this metadata. Content management systems and static site generators typically add this automatically. While having minimal impact on functionality, it can be useful for analytics and debugging.

#### `keywords`

Specifies keywords relevant to the page content:

```html
<meta
  name="keywords"
  content="HTML, web development, meta tags, SEO, accessibility"
/>
```

**Important context**: Major search engines, particularly Google, no longer use the keywords meta tag for ranking purposes due to historical abuse through keyword stuffing. However, this metadata may still serve purposes for:

- Internal site search functionality
- Specialized search engines or directories
- Content categorization systems

If you include keywords, use them sparingly and ensure they accurately reflect your content. Focus your SEO efforts on quality content, semantic HTML, and the description meta tag instead.

#### `referrer`

Controls what referrer information is sent when users navigate from your page:

```html
<meta name="referrer" content="origin-when-cross-origin" />
```

Common referrer policies:

- `no-referrer`: Never send referrer information
- `no-referrer-when-downgrade`: Don't send referrer when navigating from HTTPS to HTTP (default)
- `origin`: Send only the origin (domain) without the path
- `origin-when-cross-origin`: Send full URL for same-origin, only origin for cross-origin
- `strict-origin-when-cross-origin`: Similar to above but omits referrer on HTTPS→HTTP
- `unsafe-url`: Always send full URL (privacy concern)

**Legacy compatibility note**: Due to a historical specification error, include both versions for maximum compatibility:

```html
<!-- Legacy -->
<meta name="referrer" content="origin-when-crossorigin" />
<!-- Current -->
<meta name="referrer" content="origin-when-cross-origin" />
```

Consider privacy implications when setting referrer policies. More restrictive policies protect user privacy but may affect analytics and some third-party services.

#### `theme-color`

Suggests a color for browser UI elements when displaying your page:

```html
<meta name="theme-color" content="#2c3e50" />
```

You can provide different colors for light and dark modes:

```html
<meta
  name="theme-color"
  content="#ffffff"
  media="(prefers-color-scheme: light)"
/>
<meta
  name="theme-color"
  content="#1a1a1a"
  media="(prefers-color-scheme: dark)"
/>
```

**Browser support**:

- **Mobile browsers**: Widely supported for coloring the address bar and system UI
- **Desktop browsers**: Primarily affects Progressive Web Apps when installed
- **Safari**: Supports `theme-color` for tab bar coloring in macOS 11.3+

The color should complement your design while maintaining sufficient contrast for UI elements overlaid on it.

#### Custom Metadata Extensions

You can create custom metadata by using any `name` value not defined in the specification. Common extensions include social media metadata (Open Graph, Twitter Cards) and application-specific data. While registration is not required for most extensions, check the [WHATWG Wiki MetaExtensions page](https://wiki.whatwg.org/wiki/MetaExtensions) to avoid naming conflicts.

## The `head` Element

The `head` element serves as the container for document metadata. In other words, information about the document rather than document content. This element must be the first child of the `html` element and must precede the `body` element:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Metadata elements go here -->
  </head>
  <body>
    <!-- Content elements go here -->
  </body>
</html>
```

While the `head` element's opening and closing tags are technically optional in certain conditions (similar to the `html` element), you should always include them explicitly for clarity and maintainability.

### Permitted Content

The `head` element may contain only metadata elements:

- **One required element**: `title`
- **Optional unique elements** (maximum one instance):
  - `base`
  - `meta` with `charset` attribute
- **Optional repeatable elements** (multiple instances allowed):
  - `meta` (with `name` or `http-equiv` attributes)
  - `link`
  - `style`
  - `script`
  - `noscript` (when in `head`, can only contain `link`, `style`, and `meta` elements)

While `template` is technically permitted as metadata content, it typically appears in the `body` where its content templates are more useful.

The order of elements within `head` can affect processing:

1. Character encoding (`meta charset`) should appear early (within first 1024 bytes)
2. Viewport meta should appear before any content that depends on viewport dimensions
3. CSS links typically precede scripts to optimize rendering

### Metadata vs. Content

Not all metadata lives in the `head` element. Microdata and other semantic markup appear in the `body`. Conversely, not all elements in the `head` are purely descriptive; `script` and `style` elements actively affect page behavior and presentation. The distinction is that `head` contains elements that don't produce visible content directly, while `body` contains the document's renderable content.

## The `title` Element

The `title` element defines the document's title, serving multiple critical functions:

- **Browser UI**: Displayed in browser tabs, window titles, and bookmarks
- **Accessibility**: First element announced by screen readers when loading a page
- **Search results**: Used as the clickable headline in search engine results
- **Social sharing**: Default title when sharing on social media platforms
- **Browser history**: Identifies the page in browsing history

Every HTML document must contain exactly one `title` element within the `head` (except when the title is provided by higher-level protocols, which is rare in practice).

### Writing Effective Titles

Document titles should be:

- **Descriptive**: Clearly identify the page's content and purpose
- **Unique**: Distinguish each page within your site
- **Concise**: Front-load important information
- **Contextual**: Make sense when read outside the page context

**Length considerations**: While no technical limit exists, practical constraints apply:

- **Search engines**: Typically display 50-60 characters in desktop results (less on mobile)
- **Browser tabs**: May show as few as 10-20 characters when multiple tabs are open
- **Social media**: Platforms have varying limits (e.g., Twitter ~70 characters)

Structure titles hierarchically, from specific to general:

html

```html
<!-- Good: Specific to general -->
<title>Getting Started with HTML - Chapter 1 - Web Development Guide</title>

<!-- Avoid: Too vague -->
<title>Chapter 1</title>

<!-- Avoid: Too long for most displays -->
<title>
  A Comprehensive Introduction to Hypertext Markup Language Including Document
  Structure, Semantic Elements, and Modern Best Practices for Web Development
</title>
```

### Translation and Language Considerations

The `title` element supports the `translate` attribute to control localization:

html

```html
<!-- Prevent translation of artistic works -->
<title translate="no" lang="fr">Les Misérables</title>

<!-- Allow translation for descriptive text -->
<title>Recipe for French Onion Soup</title>
```

When the title contains text in a different language than the document, include the `lang` attribute to ensure proper pronunciation by assistive technologies.

### Dynamic Titles

For single-page applications or dynamic content, update the title to reflect state changes:

javascript

```javascript
// Update title to reflect current state
document.title = `Inbox (${unreadCount}) - Email Client`;
```

This helps users navigate browser history and understand tab contents at a glance.

### Accessibility Requirements

Per WCAG 2.1 Success Criterion 2.4.2 (Page Titled), every web page must have a title that describes its topic or purpose. Titles are particularly crucial for users who:

- Navigate multiple windows or tabs
- Use screen readers
- Have cognitive disabilities
- Review browsing history

Avoid generic titles like "Untitled Document" or "Page" that provide no meaningful context.

## The `base` Element

The `base` element specifies a base URL and/or default browsing context for all relative URLs in the document. As a void element, it is self-closing and must appear in the `head` element:

```html
<base href="https://example.com/resources/" />
```

A document may contain at most one `base` element. If multiple `base` elements exist, only the first is used and all others are ignored.

### The `href` Attribute

The `href` attribute establishes a base URL for resolving relative URLs throughout the document. This affects all elements with URL attributes: `<a>`, `<link>`, `<img>`, `<form>`, `<script>`, and others.

Consider a document with multiple links sharing a common base URL:

```html
<!-- Without base element -->
<a href="https://www.goodreads.com/book/show/11588.The_Shining">The Shining</a>
<a href="https://www.goodreads.com/book/show/149267.The_Stand">The Stand</a>
<a href="https://www.goodreads.com/book/show/10614.Misery">Misery</a>
```

Using the `base` element eliminates repetition:

```html
<head>
  <base href="https://www.goodreads.com/" />
</head>
<body>
  <a href="book/show/11588.The_Shining">The Shining</a>
  <a href="book/show/149267.The_Stand">The Stand</a>
  <a href="book/show/10614.Misery">Misery</a>
</body>
```

### URL Resolution Rules

The base URL affects different URL patterns differently:

```html
<base href="https://example.com/news/index.html" />

<!-- Relative URL: resolved relative to base path -->
<a href="archives.html">Link</a>
<!-- Result: https://example.com/news/archives.html -->

<!-- Root-relative URL: uses base origin, ignores base path -->
<a href="/blog/page.html">Link</a>
<!-- Result: https://example.com/blog/page.html -->

<!-- Protocol-relative URL: uses base protocol -->
<a href="//other.com/page.html">Link</a>
<!-- Result: https://other.com/page.html -->

<!-- Absolute URL: ignores base entirely -->
<a href="https://different.com/page.html">Link</a>
<!-- Result: https://different.com/page.html -->
```

### The `target` Attribute

The `target` attribute sets a default browsing context for all hyperlinks and forms in the document. A browsing context is the environment where a document is displayed, such as a browser tab, window, or iframe.

```html
<base target="_blank" />
```

Common target values:

- `_blank`: New window or tab
- `_self`: Current browsing context (default)
- `_parent`: Parent browsing context
- `_top`: Top-level browsing context

### Important Considerations

**Source order dependency**: The `base` element affects only elements that appear after it in the document. Place it early in the `head` to ensure consistent behavior:

```html
<head>
  <meta charset="UTF-8" />
  <base href="https://example.com/" />
  <!-- All subsequent URLs will use this base -->
  <link rel="stylesheet" href="styles/main.css" />
</head>
```

**Unintended consequences**: The `base` element affects ALL relative URLs, including:

- Stylesheet and script references
- Form action attributes
- Internal page anchors (though these can be worked around)

**Accessibility concerns**: Setting `target="_blank"` globally can disorient users, particularly those using assistive technologies. Users cannot predict when links will open in new windows, and they lose the ability to use the back button. Consider whether global target modification truly serves user needs.

**Modern alternatives**: Before implementing `base`, consider whether your needs might be better served by:

- Build tools that handle URL resolution
- Template systems with URL helpers
- JavaScript-based routing for single-page applications

The `base` element remains useful for specific scenarios such as serving mirrored content from different domains or simplifying URL management in generated documentation. However, it requires careful consideration of its document-wide effects.

## Related Reading

### Specifications

- [HTML Living Standard](https://html.spec.whatwg.org/) - The authoritative, continuously updated HTML specification
- [Content Security Policy](https://w3c.github.io/webappsec-csp/) - W3C specification for CSP
- [Referrer Policy](https://w3c.github.io/webappsec-referrer-policy/) - W3C specification for referrer policies

### MDN Web Docs References

- [The `html` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html)
- [The `head` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head)
- [The `title` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title)
- [The `base` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base)
- [The `meta` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta)
- [Alternative stylesheets](https://developer.mozilla.org/en-US/docs/Web/CSS/Alternative_style_sheets)
- [`theme-color` browser compatibility](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name/theme-color#Browser_compatibility)

### Accessibility Resources

- [WCAG 2.1 - Understanding Page Titled](https://www.w3.org/WAI/WCAG22/Understanding/page-titled.html)
- [Providing Descriptive Titles](https://www.w3.org/WAI/WCAG22/Techniques/general/G88.html)

### SEO and Best Practices

- [How to Write Meta Descriptions for SEO](https://www.searchenginewatch.com/2016/05/26/how-to-write-meta-descriptions-for-seo-with-good-and-bad-examples/)
- [Google's Guidelines on Irrelevant Keywords](https://support.google.com/webmasters/answer/66358)
- [HTML Code and Search Engine Ranking](https://searchengineland.com/guide/seo/html-code-search-engine-ranking)

### Additional Resources

- [Quirks Mode and Standards Mode](https://developer.mozilla.org/en-US/docs/Web/HTML/Quirks_Mode_and_Standards_Mode)
- [WHATWG Wiki - MetaExtensions](https://wiki.whatwg.org/wiki/MetaExtensions)
