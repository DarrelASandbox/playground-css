## About The Project

- Build Responsive Real-World Websites with HTML and CSS
- Learn modern HTML5, CSS3 and web design by building a stunning website for your portfolio! Includes flexbox and CSS Grid
- Tutorial for CSS Layouts, design & components
- [GitHub - Jonas Schmedtmann](https://github.com/jonasschmedtmann)
- [GitHub - Original Repo](https://github.com/jonasschmedtmann/html-css-course)
- [codingheroes - JONAS' RESOURCES FOR HAND-CRAFTING BEAUTIFUL AND PERFORMANT WEBSITES](https://codingheroes.io/resources/)

&nbsp;

## Notes

> <b>Maqsud: </b>How can we write media queries for new Macbooks or like for 2k, 4k displays?

> <b>Jonas: </b>As I say in the lecture on images, on high-resolution displays, 1 design pixel is represented using 2 actual physical pixels on the screen. So in CSS, when we say for example <code>20px</code>, a 4K screen will usually actually render that using <code>40px</code> of the screen.
>
> So for our effects in CSS, a 4K screen still has a width of 1920px. Now we could target that using media queries, like setting a breakpoint at 1600px or 1800px or so, but on simple websites that's not really necessary, and it's not something usual. I hope this makes sense :)

&nbsp;

---

&nbsp;

> <b>Harley France: </b>What is the preferred way of including Google Web Fonts to a page via link or import?

> <b>Sebastian: </b>For 90%+ of the cases, you likely want the &lt;link&gt; tag. As a rule of thumb, you want to avoid @import rules because they defer the loading of the included resource until the file is fetched.. and if you have a build process which "flattens" the @import's, then you create another problem with web fonts: dynamic providers like Google WebFonts serve platform-specific versions of the fonts, so if you simply inline the content, then you'll end up with broken fonts on some platforms.
>
> Now, why would you use the web font loader? If you need complete control over how the fonts are loaded. Most browsers will defer painting the content to the screen until all of the CSS is downloaded and applied - this avoids the "flash of unstyled content" problem. The downside is.. you may have an extra pause and delay until the content is visible. With the JS loader, you can define how and when the fonts become visible.. for example, you can even fade them in after the original content is painted on the screen.
>
> Once again, the 90% case is the &lt;link&gt; tag: use a good CDN and the fonts will come down quickly and even more likely, be served out of the cache.
>
> For more info, and an in-depth look at Google Web Fonts, check out this [GDL video](https://www.youtube.com/watch?v=sqesm0euf9M)

&nbsp;

---

&nbsp;
