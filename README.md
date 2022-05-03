# dark-mode.js

Beautiful [Tailwindcss](https://tailwindcss.com/) dark mode.

## Getting started

```sh
npm install @anay69420/dark-mode.js
```

or

```html
<script src="https://cdn.jsdelivr.net/npm/@anay69420/dark-mode.js@1.0.0/src/index.js"></script>
```

Now run `darkMode.init()` to initialize the dark mode.
Now you have 2 options:

1. Use `darkMode.setDark()` to set dark mode.
1. Use an element with the attribute `data-dark-toggle` to toggle dark mode. By default, dark mode will toggle when it is clicked, but you can change the event with the attribute `data-dark-event`.

to see if dark mode is enabled, use `darkMode.isDark()`.
if you want to display if dark mode is on in the html, use the attributes `data-dark-on` and `data-dark-off`. For example: if it is dark mode then anything with `data-dark-on` will display `'dark'` and anything with `data-dark-off` will display `'light'`. You can also change what it displays with `data-dark-d` and `data-dark-l` respectively.

If you want some code to be executed when the mode toggles, you can do the following:

```javascript
darkMode.UpdateDarkHook = dark => {
    // Code here
    // dark will be `d` if it is dark mode and `l` if it is light mode
}
```

In the `tailwind.config.js`, you can also use the darkMode function called addThemePlugin. addThemePlugin takes 3 arguments: name, classname, and addVariant. Here's an example:

```javascript
const plugin = require('tailwindcss/plugin')
import '@anay69420/dark-mode.js'
module.exports = {
    plugins: [
        plugin({ addVariant }) {
            darkMode.addThemePlugin('theme-neon', 'neon', addVariant)
        }
    ]
}
```

So let's break this down. Basically what this does is it adds another variant, `theme-neon`. Any class with the variant `theme-neon` will **only** be enabled when the element that has the class is a descendant of an element with the class `neon`. Here's an example:

```html
  <div class="neon">
    <p class="theme-neon:text-yellow-400"></p> <!-- this p has text-yellow-400 -->
  </div>
  <p class="neon:text-yellow-400"></p> <!-- this p does not have text-yellow-400 -->
```

When dark mode is turned on, any tailwind class with the variant dark: (like `dark:text-gray-100`) will be used.

## Examples

You can find examples in /examples ( [preview](https://anay-v2.github.io/dark-mode.js/examples) )

## License

This project has the **MIT** license. See more at `LICENSE`
