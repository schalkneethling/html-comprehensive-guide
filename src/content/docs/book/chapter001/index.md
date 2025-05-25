---
title: "Chapter 1: A Condensed History of HTML"
keywords: html, html standard, history, web standards
description: "A brief history of HTML, from its origins at CERN to the modern HTML Living Standard."
---

The World Wide Web and HTML trace back to 1989 at CERN, when Tim Berners-Lee envisioned a global hypertext system. Over 1989–1990 he wrote the first Web browser/editor and server on a NeXT machine, and published the first website (info.cern.ch) in late 1990. HTML began as a very simple Standard Generalized Mark-up Language (SGML) based markup: in October 1991 Berners-Lee [released a short “HTML Tags” document](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Tags.html) listing just 18 element types (e.g. `<title>`, `<h1>`…`<h6>`, `<p>`, `<a>`, basic lists and addresses). These original tags supported document structure and hyperlinks, reflecting the goal of linking physics papers worldwide.

In mid-1993 the first proposal for an HTML specification the "Hypertext Markup Language (HTML)" Internet Draft by Berners-Lee and Dan Connolly, was defined. At the same time, Dave Raggett's competing proposal for a "[HTML+ (HTML Plus)](https://www.w3.org/MarkUp/htmlplus_paper/htmlplus.html)" specification was being developed. HTML+ suggested standardizing already-implemented features like tables and fill-out forms. When both the HTML and HTML+ drafts expired in early 1994, the Internet Engineering Task Force (IETF) formed an HTML Working Group.

In 1995 the IETF’s HTML Working Group published [HTML 2.0 (RFC 1866)](https://www.rfc-editor.org/rfc/rfc1866) as the first definitive standard for HTML. HTML 2.0 consolidated features that had emerged in early browsers such as text formatting, images (from the [Mosaic browser](<https://en.wikipedia.org/wiki/Mosaic_(web_browser)>)), hypertext links, and forms into a single specification intended to be treated as a standard against which future implementations should be based.

After this, work on HTML at the IETF largely stalled. Since 1996 the World Wide Web Consortium (W3C) with input from commercial software vendors took over the torch and have been responsible for maintaining the HTML specification. In January 1997 the W3C released HTML 3.2 as a W3C Recommendation initially code-named "Wilbur". HTML 3.2 dropped math formulas entirely, and adopted most of Netscape's visual markup tags while reconciling differences between Netscape and Internet Explorer. (Notably, it _omitted_ proprietary tags like Netscape's `<blink>` and Microsoft's `<marquee>` by mutual agreement.)

> Side note: It is a kind of funny story how the `<blink>` and `<marquee>` tags came to be. Netscape engineer Lou Montulli, co-creator of the [Lynx browser](<https://en.wikipedia.org/wiki/Lynx_(web_browser)>), went out with some friends. During a conversation Montulli joked that the only "effect" that Lynx could handle was probably blinking text. This, seemingly, did not garner much more than a few chuckles. However, one of the engineers like the idea so much that, when Montulli rolled into work on the Saturday morning, he found blinking text in the browser.
> This was worked into [the `<blink>` element](https://en.wikipedia.org/wiki/Blink_element) which later made its way into the Netscape browser. At this stage browser makers believed that the way to more users was unique propriety features. So, not to be undone, Microsoft followed suit and introduced [the `<marquee>` element](https://en.wikipedia.org/wiki/Marquee_element) in Internet Explorer. Both tags were never part of any official HTML standard, but they were widely used in the late 1990s.

Later that same year, in December 1997, HTML 4.0 (code-named Cougar) was published. HTML 4.0 introduced three variations (Strict, Transitional, Frameset), and signaled a push toward separating presentation from structure by deprecating most of Netscape's visual markup features and encouraging the use of Cascading Style Sheets.

By 1999 the W3C issued HTML 4.01 (an update to HTML 4.0). HTML 4.01 (Dec 1999) made only minor fixes and retained the same Strict/Transitional/Frameset variations. At this point HTML was stable and mature, it even became [ISO/IEC standard 15445:2000](https://www.iso.org/standard/27688.html) (an international standard based on HTML 4.01 Strict). After 4.01, however, the W3C halted any new HTML versions for many years. Instead, the Consortium’s focus shifted toward an XML-based approach (XHTML) and other Web technologies.

## Transition to XHTML (2000–2008)

In late 1998 the W3C published a draft titled, "Reformulating HTML in XML" codenamed Voyager. The idea was to enforce stricter syntax (well-formed XML), allow easier extensibility (for example by embedding SVG or MathML), and even rekindling an interest in dividing HTML into reusable components ([XHTML Modularization](https://en.wikipedia.org/wiki/XHTML_Modularization)). By February 1999 the spec was renamed XHTML 1.0 (The Extensible HyperText Markup Language) and on January 2000 it was published as a W3C Recommendation.

XHTML 1.0 simply recast HTML 4.01 (Strict, Transitional, Frameset) in XML, adding no new features but also only including features which were not deprecated in HTML 4.01. The first modular XHTML variants, XHTML 1.1 and XHTML Basic, reached Recommendation status in April 2001.

### XHTML 1.1: Module-based XHTML

XHTML 1.1 was essentially a recreation of XHTML 1.0 Strict with the addition of ruby annotations for improved support for East-Asia language, the removal of the `name` attribute from the `<a>` and `<map>` elements, and the removal of the `lanf` attribute in favor of the `xml:lang` attribute. While largely compatible with XHTML 1.0 and HTML 4.01, a formal note was issue by the working group in late 2002 that XHTML 1.1 document should be served with the `application/xhtml+xml` MIME type, rather than the `text/html`.

Due to a lack of uptake from browser vendors, this requirements was relaxed in January 2009.

### XHTML Basic

Along with XHTML print, and XHTML Mobile Profile, XHTML Basic was designed to be a simplified version of XHTML 1.1 for use in constrained environments like mobile devices. It included only the most essential elements and attributes, making it easier to implement in browsers with limited capabilities. XHTML Print was specifically intended for documents printed from [an information device](https://en.wikipedia.org/wiki/Information_appliance) (eg. personal digital assistants and mobile phones) to low-end printers.

The XHTML Mobile Profile (XHTML-MP) is a third-party variant of XHTML Basic, adapted by the Wireless Application Protocol Forum for the second version of the Wireless Application Protocol (WAP 2.0). Between 2004 and 2008, XHTML-MP went through three iteration with the final being XHTML-MP 1.3 finalized in September2008.

## XHTML 2.0

While there was consideration to create an XHTML 1.2 version of the language based on XHTML 1.1 with the addition of [Web Accessibility Initiative, Accessible Rich Internet Applications](https://en.wikipedia.org/wiki/WAI-ARIA) (WAI-ARIA) along with the `role` attribute, and enhanced support from the Semantic Web through [Resource Description Framework in Attributes](https://en.wikipedia.org/wiki/RDFa) (RDFa), this never came to be as the XHTML2 Working Group was never chartered to do the work and was shut down in 2010.

XHTML 2.0 was envisioned to entirely break from the past and no longer require backwards compatibility with HTML ([causing quite a bit of controversy](https://lists.w3.org/Archives/Public/www-html/2003Jan/0123.html)). Between 2002 and 2006 no less than eight drafts were published with a ninth draft expected to be released in 2009. However, by mid-2009 the W3C decided to let the XHTML2 Working Group charter expire and published XHTML 2.0 and related documents as [W3C Notes](https://en.wikipedia.org/wiki/W3C#Certification) in 2010.

## The Rise of HTML5 (2004–2014)

Interest in advancing HTML re‑emerged in the mid-2000s. At a W3C workshop in June 2004, the Mozilla Foundation and Opera Software [presented a position paper](https://www.w3.org/2004/04/webapps-cdf-ws/papers/opera.html) focusing on developing technologies which are backwards compatible with existing browsers and included and included an initial draft specification of Web Forms 2.0. The workshop concluded in a eight to fourteen vote against the continued development of HTML. Immediately following this outcome, the Web Hypertext Application Technology Working Group (WHATWG) was formed to start work based on the position paper. At this time a second draft, Web Application 1.0, was also announced. The later draft in combination with Web Forms 2.0 would eventually become the basis for HTML5.

In 2007 a new HTML working group was formed at the W3C and on January 22, 2008 Ian Hickson (Google) and David Hyatt (Apple) (WHATWG editors) published the W3C's first public Working Draft of HTML5.

HTML5 was designed to modernize HTML for web applications. Its stated goals were to support the latest multimedia and interactive features, stay readable by humans, maintain backward compatibility with older pages, and avoid the strictness of XML. The new HTML5 Recommendation was finalized on October 28, 2014. HTML5 added many key innovations: native multimedia elements (`<video>` and `<audio>` for embedding media without plugins, `<canvas>` for dynamic graphics), new semantic container tags (`<article>`, `<section>`, `<nav>`, `<header>`, `<footer>`, `<aside>`, `<main>`, `<figure>`/`<figcaption>`, etc.) to give structure to documents, and improved form controls (new input types like `email`, `date`, etc). It also defined APIs and behaviors for offline storage (localStorage, Application Cache), drag-and-drop, and other web app features. The HTML5 spec even included MathML and SVG integration and refined how invalid markup is parsed, aiming for “more interoperable implementations”. By late 2014 most browsers (Chrome, Firefox, Safari, IE, Opera) had built-in support for the majority of HTML5’s new elements and APIs.

## HTML5 and the Modern Web (2014–2025)

In January 2011, the WHATWG renamed its HTML5 specification as the "HTML Living Standard". In this model the spec is never "done". Instead, it is constantly evolving as the needs of the web evolves while ensuring backwards compatibility. The W3C published a small number of formal updates (called snapshots) namely HTML 5.1, HTML 5.2, and HTML 5.3 between 2012 and 2017, each incrementally adding features and clarifications. However, at the end of January 2021, these were all retired in favor of the HTML Living Standard.

As of 2025, HTML remains the core of the Web. The HTML standard today reflects lessons from twenty years of use: parsing rules are precisely defined, many legacy behaviors are clarified, and new capabilities can be added as needed. Throughout its history HTML has grown from a very simple hypertext format into a rich platform for applications. Each major version was motivated by practical needs of its time from static documents (HTML 2.0) to interactive sites and apps (HTML5 and beyond). Today’s HTML is robust and extensible, still building on Berners-Lee’s original vision of a universal, linkable document format. The language continues to evolve with the Web, guided by broad industry collaboration so that it meets both backward-compatibility and future requirements.

| **Version**          | **Release (Year)**    | **Key Features**                                                                                                                 |
| -------------------- | --------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| HTML Tags (draft)    | 1991                  | First draft (“HTML Tags”) listing \~18 elements (basic headings, paragraphs, lists, links)                                       |
| HTML 2.0             | 1995                  | First standard (RFC 1866); forms, tables, image maps, email links, baseline HTML feature set                                     |
| HTML 3.2             | 1997                  | Added tables, applets, text flow, more presentational markup; reconciled Netscape/IE extensions                                  |
| HTML 4.0             | 1997                  | CSS support; split into Strict/Transitional/Frameset DTDs; emphasized semantic markup over presentation                          |
| HTML 4.01            | 1999                  | Minor corrections; last HTML4 spec; ISO/IEC 15445:2000 (based on 4.01 Strict)                                                    |
| XHTML 1.0            | 2000                  | XML-serialized HTML4; three variants (Strict, Transitional, Frameset); well-formedness rules                                     |
| XHTML 1.1            | 2001                  | Modularized XHTML; added features like ruby for East Asian scripts; stricter rules                                               |
| HTML5 (W3C Rec)      | 2014                  | New semantic tags (`<article>`, `<nav>`, etc.), `<audio>`/`<video>`, `<canvas>`, local storage, form enhancements                |
| HTML 5.1             | 2016                  | Incremental update: e.g. `<picture>`/`srcset` for responsive images, ARIA enhancements, minor API changes                        |
| HTML 5.2             | 2017                  | Added `<dialog>`, native dialog; JS module integration; Referrer Policy; Payment and Presentation API hooks; ARIA 1.1; CSP nonce |
| HTML Living Standard | 2014–present (WHATWG) | Continuously updated: e.g. new input types, features for Web Components (`<slot>`), security enhancements, etc.                  |
