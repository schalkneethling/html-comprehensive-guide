---
title: "Chapter 1: Getting started with HTML"
keywords: html, html standard, how-to, learn html
description: Learn the elements of the core, semantic language of the web.
---

If one has always thought of HTML as just some form elements, div and span elements, links and paragraph tags, it seems strange that one would dedicate an entire book to the language. As you will see throughout this book, there is a **lot** more to the HTML language.

## What is HTML?

HTML stands for **H**yper**T**ext **M**arkup **L**anguage and has been at the core of [the web](https://en.wikipedia.org/wiki/World_Wide_Web) since its very inception in 1989. It forms the bases of all things on the web no matter how simple or how complex. Without HTML, there are no webpages or applications. HTML also provides the [semantic structure of our documents and applications](https://webaim.org/techniques/semanticstructure/) and this is where knowing the language really pays off. Semantic structure is also critical when it comes to the accessibility of your documents, a topic I will cover throughout the book.

There is a lot to HTML and some aspects of the language such as canvas can take up an entire book on their own. For some topics such as this I will provide an overview and then provide resources for further reading.

## The `html` element

We will start with the first element in every HTML document, the `html` element.

> What about the `DOCTYPE`? That is a good question. While the `DOCTYPE` is the very first entry in our HTML documents, it is in fact not an HTML element. The sole purpose of the `DOCTYPE` is to ensure that the browser does not switch into what is commonly known as [quirks mode](https://developer.mozilla.org/en-US/docs/Web/HTML/Quirks_Mode_and_Standards_Mode), but instead, makes a best effort attempt at following the relevant specification. I say, "best effort attempt", as not all browsers have implemented the entirety of the HTML specification. This is especially true of older browsers and so, these browsers will do their best to interpret the language and use a fallback where it does not understand the specific syntax.

The `DOCTYPE` is required for all HTML documents and takes the following form:

```html
<!DOCTYPE html>
```

> There is an [extended legacy form](https://html.spec.whatwg.org/multipage/syntax.html#the-doctype), but the above is all that you will ever need to be concerned with.

Now that the browser knows that what follows will be HTML, we start our document with our root element.

```html
<html>
  ...
</html>
```

### `lang`

Being at the root of our document, there is one attribute that should always be set on the `html` element. The `lang` attribute on the `html` element indicates the primary natural language the document is written in. It also assists speech synthesis tools in what pronunciations to use, and helps translation tools select the rules they should apply. This is critical for the overall accessibility of your documents. It takes the following form:

```html
<html lang="en">
  ...
</html>
```

Should you not want your entire document to be localizable through translation tools, you can specify the [`translate` property](https://html.spec.whatwg.org/#attr-translate), setting its value to `no` :

```html
<html lang="en" translate="no">
  ...
</html>
```

## The `head` element

The `head` of our HTML document contains metadata about the document. So what is metadata? In short, it is [“data about data”](https://en.wikipedia.org/wiki/Metadata). Not all metadata lives in the `head` though, and not all metadata that lives in the `head` is necessarily descriptive, more on this later.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    ...
  </head>
  ...
</html>
```

## The `title` element

The first piece of metadata we will add to our webpages is the `title` tag. Seems like such a simple element, and it is, but while simple, it is critical to orient a user. The `title` uniquely identifies the current page in the browser's history, is the first piece of information read to users using screen readers; is the title shown to users in search results, when sharing on social media, and is crucial [for SEO](https://moz.com/learn/seo/title-tag)(search engine optimization).

With that said, keep the following guidelines in mind when writing your title:

- Be concise when writing your titles and aim to keep the total character count at around 60.
- Remember that document titles should make sense when read out of context.

> See the web content accessibility guidelines (WCAG) for more information on [providing descriptive titles for web pages](https://www.w3.org/WAI/WCAG22/Techniques/general/G88.html).

For example, the title for this chapter would read:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>
      Chapter 1: Getting started with HTML - HTML Comprehensive Guide
    </title>
  </head>
  ...
</html>
```

The `title` tag does not have any special attributes but supports all the global attributes, one of which is `translate`. Using this attribute, you can prevent translation tools from localizing your page title.

Why would you want to do that? Your page title could be the title of a poem or a song. In those cases you do not want the title translated. For example:

```html
<title translate="no">Revoir Paris | Roland Dyens</title>
```

Here, it would also be prudent to add a `lang` attribute indicating the primary language used in the `title` tag. As mentioned earlier, this will assist speech synthesis tools in what pronunciations to use. For example:

```html
<title translate="no" lang="fr">Revoir Paris | Roland Dyens</title>
```

## The `base` element

The `base` element is written as self-closing, or void, tag. This means that, while a lot of tags in HTML are written as follows:

```html
<title>My page title</title>
```

A self-closing tag is written like this:

```html
<base href="https://html-comprehensive-guide.dev/" />
```

The `base` element allows you to set a base URL for all links on the current page, set a base browsing context, or both, for all links on the page. Let’s look at an example.

```html
<ul>
  <li>
    <a href="https://www.goodreads.com/book/show/11588.The_Shining"
      >The Shining</a
    >
  </li>
  <li>
    <a href="https://www.goodreads.com/book/show/149267.The_Stand">The Stand</a>
  </li>
  <li><a href="https://www.goodreads.com/book/show/10614.Misery">Misery</a></li>
  <li><a href="https://www.goodreads.com/book/show/10592.Carrie">Carrie</a></li>
</ul>
```

All of those links share the same **base** URL. Using the `base` element, you can avoid repeating the base URL in every link tag:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>I got your base</title>
    <base href="https://www.goodreads.com/" />
  </head>
  <body>
    <ul>
      <li><a href="book/show/11588.The_Shining">The Shining</a></li>
      <li><a href="book/show/149267.The_Stand">The Stand</a></li>
      <li><a href="book/show/10614.Misery">Misery</a></li>
      <li><a href="book/show/10592.Carrie">Carrie</a></li>
    </ul>
  </body>
</html>
```

> NOTE: If the HTML above was on a page that was hosted as part of the Goodreads website, you would not include the URL as part of the link and instead, opt for using relative URLs. In other words, instead of `https://www.goodreads.com/book/show/11588.The_Shining` you will do just `book/show/11588.The_Shining`. The `base` element would therefore not be useful in this case.

Now, you may also want those links to always open in a new tab (browsing context). One option is to do:

```html
<ul>
  <li><a href="book/show/11588.The_Shining" target="_blank">The Shining</a></li>
  <li><a href="book/show/149267.The_Stand" target="_blank">The Stand</a></li>
  <li><a href="book/show/10614.Misery" target="_blank">Misery</a></li>
  <li><a href="book/show/10592.Carrie" target="_blank">Carrie</a></li>
</ul>
```

As mentioned, there is a second attribute you can set on the `base` element, and that attribute is the `target` attribute. We can therefore avoid repeating `target`:

> **NOTE:** Be careful here as this could negatively impact the user experience and accessibility as there is nothing indicating to the user that all links will open in a new window or tab. While not a blanket statement, I almost always prefer to leave the choice of whether a link should open in the same or a different tab or window up to the user.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>I got your base</title>
    <base href="https://www.goodreads.com/" target="_blank" />
  </head>
  <body>
    <ul>
      <li><a href="book/show/11588.The_Shining">The Shining</a></li>
      <li><a href="book/show/149267.The_Stand">The Stand</a></li>
      <li><a href="book/show/10614.Misery">Misery</a></li>
      <li><a href="book/show/10592.Carrie">Carrie</a></li>
    </ul>
  </body>
</html>
```

With the above in place, **all** links in the current page will use `https://www.googreads.com` as its base URL and all links will open in a new tab. The thing is, it does mean that **all** "links" will have this behavior. Not only are anchor tags affected but _all_ elements with a `href` attribute are affected. For example:

```html
<base href="https://www.goodreads.com/" />
<link rel="stylesheet" type="text/css" href="css/pink.css" media="screen" />
```

In the above scenario, the browser will attempt to load the stylesheet from the Goodreads website, which is probably not what you intended. Thankfully, the `base` element only affects elements below it in source order, so changing the above as follows will solve the problem:

```html
<link rel="stylesheet" type="text/css" href="css/pink.css" media="screen" />
<base href="https://www.goodreads.com/" />
```

Remember that `_blank` is not the only possible value for the `target` attribute. One other value is `_top`. Using `_top` as the value of `target` might be useful as a means of [frame busting](https://en.wikipedia.org/wiki/Framekiller) aka, prevent your site from being displayed in an `iframe`.

```html
<base target="_top" />
```

While this will not prevent the site from initially being loaded in an `iframe`, it _will_ cause clicks on any links in the page to bust out of the `iframe` by setting its browsing context to the topmost browsing context i.e. the browser window itself.

I will close this chapter with an example use case that might be a bit of a stretch. I am using a combination of the `base` element, a specific CSS `class` on certain elements, and some JavaScript. The result is something that could be useful in a web application.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <base target="_blank" />
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>The HTML base element</title>
    <link rel="stylesheet" type="text/css" href="css/pink.css" media="screen" />
  </head>

  <body>
    <ul>
      <li><a class="native" href="add-book">Add Book</a></li>
      <li><a class="native" href="view">View Bookshelf</a></li>
    </ul>

    <ul>
      <li>
        <a href="https://amzn.to/3Olm2de">Misery</a>
      </li>
      <li>
        <a href="https://amzn.to/3OlsCQM">Carrie</a>
      </li>
    </ul>
  </body>
  <script>
    document.addEventListener("click", (event) => {
      if (event.target.classList.contains("native")) {
        event.preventDefault();
        window.location = event.target.href;
      }
    });
  </script>
</html>
```

With the above, clicks on any link that has a `class` attribute with the value `native` will be intercepted by JavaScript and opened in the same tab/window. All other links will open in a new tab. One interesting aspect to note about the above is that, even when intercepted by JavaScript, the value of `event.target.href` will use the base `href` value defined on the `base` element, for example `https://www.goodreads.com/add-book`. So be careful 😄

Some final notes on the `base` element. There must be no more than one `base` element per page. If there are multiple, all but the first will be ignored. As with `href`, all elements that have a `target` attribute set are affected by the value of the `target` attribute of the `base` element. This means that forms with a `target` will also be affected.

In case you are interested, here is the URL parsing algorithm (from the W3C documentation):

```html
<base href="https://www.example.com/news/index.html" />
...
<a href="archives.html">archives</a>
<!-- The above URL will be https://www.example.com/news/archives.html -->

<a href="/blog/archives.html">archives</a>
<!-- The above URL will be https://www.example.com/blog/archives.html -->

<a href="./blog/archives.html">archives</a>
<!-- The above URL will be https://www.example.com/news/blog/archives.html -->

<a href="https://www.otherwebsite.com/blog/archives.html">archives</a>
<!-- The above URL will be https://www.otherwebsite.com/blog/archives.html -->
```

## Related Reading

- [The `html` element on MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html)
- [Understanding Success Criterion 2.4.2: Page Titled](https://www.w3.org/WAI/WCAG22/Understanding/page-titled.html)
- [title element on MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title)
- [base element on MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base)
