## About The Project

- Build Responsive Real-World Websites with HTML and CSS
- Learn modern HTML5, CSS3 and web design by building a stunning website for your portfolio! Includes flexbox and CSS Grid
- Tutorial for CSS Layouts
- [GitHub - Jonas Schmedtmann](https://github.com/jonasschmedtmann)
- [GitHub - Original Repo](https://github.com/jonasschmedtmann/html-css-course)
- [codingheroes - JONAS' RESOURCES FOR HAND-CRAFTING BEAUTIFUL AND PERFORMANT WEBSITES](https://codingheroes.io/resources/)

&nbsp;

## Notes

> <b>Geo: </b>Please explain <meta> values

```js
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width", initial-scale="1.0">
```

> <b>Sebastian: </b>We use the meta tag <code>&lt;meta http-equiv="X-UA-Compatible" content="IE=edge"/&gt;</code> to tell Microsoft Internet Explorer to use the latest rendering engine (edge). This tag's result and value are to increase our code's compatibility with IE.
>
> We use the meta tag <code>&lt;meta name="viewport" content="width=device-width", initial-scale="1.0"&gt;</code> to give the browser instructions on how to control the page's dimensions and scaling. The <code>width=device-width</code> part sets the width of the page to follow the screen-width of the device (which will vary depending on the device). This tag's result and value are to enable us to perform responsive design using media queries.
>
> It's really quite essential.

&nbsp;

---

&nbsp;

> <b>Janko: </b>Question about &lt;button&gt; tag
>
> Is there a rule explaining why we should never use &lt;button&gt; element when decorating links? Because you are using &lt;a&gt; element and decorating it just like a button. Is that only situation when we should decorate something like a button and don't use &lt;button&gt; tag itself?

> <b>Sebastian: </b>Let's see this choice from a semantics and accessibility viewpoint:
>
> Links (&lt;a&gt;) are for "going someplace" such as "jumping to a different section of a page, going to another URL, etc. Whereas, buttons &lt;button&gt; are for "doing something" such as a function on the page to expand/collapse a menu, submit a form or etc.
>
> Adding to this, there are some accessibility concerns when using links styled as buttons instead of plain buttons, as you can read [here](https://a11y-101.com/design/button-vs-link). However, &lt;button&gt; is indeed considered more semantic, since it is easier for other devs (and search engine bots) to understand its intended purpose in our html code at a glance.
>
> One reason we use links instead of button elements is that those elements have innate styling that we want to tweak to make our own custom button, and it's a bit more work to strip away that styling when building our own than to start from zero with a link.
>
> In other words, when you customize a button, it's simply easier to start from zero - from a link - than to have to first strip away undesirable default styling, and then introduce your own as well. It saves us a whole first step - stripping the old styling away.

&nbsp;

---

&nbsp;
