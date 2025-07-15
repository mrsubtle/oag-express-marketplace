"use client";
"use client";

// #style-inject:#style-inject
function styleInject(css, { insertAt } = {}) {
  if (!css || typeof document === "undefined") return;
  const head = document.head || document.getElementsByTagName("head")[0];
  const style = document.createElement("style");
  style.type = "text/css";
  if (insertAt === "top") {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

// src/styles.css
styleInject(`*,
::before,
::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x: ;
  --tw-pan-y: ;
  --tw-pinch-zoom: ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position: ;
  --tw-gradient-via-position: ;
  --tw-gradient-to-position: ;
  --tw-ordinal: ;
  --tw-slashed-zero: ;
  --tw-numeric-figure: ;
  --tw-numeric-spacing: ;
  --tw-numeric-fraction: ;
  --tw-ring-inset: ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur: ;
  --tw-brightness: ;
  --tw-contrast: ;
  --tw-grayscale: ;
  --tw-hue-rotate: ;
  --tw-invert: ;
  --tw-saturate: ;
  --tw-sepia: ;
  --tw-drop-shadow: ;
  --tw-backdrop-blur: ;
  --tw-backdrop-brightness: ;
  --tw-backdrop-contrast: ;
  --tw-backdrop-grayscale: ;
  --tw-backdrop-hue-rotate: ;
  --tw-backdrop-invert: ;
  --tw-backdrop-opacity: ;
  --tw-backdrop-saturate: ;
  --tw-backdrop-sepia: ;
  --tw-contain-size: ;
  --tw-contain-layout: ;
  --tw-contain-paint: ;
  --tw-contain-style: ;
}
::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x: ;
  --tw-pan-y: ;
  --tw-pinch-zoom: ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position: ;
  --tw-gradient-via-position: ;
  --tw-gradient-to-position: ;
  --tw-ordinal: ;
  --tw-slashed-zero: ;
  --tw-numeric-figure: ;
  --tw-numeric-spacing: ;
  --tw-numeric-fraction: ;
  --tw-ring-inset: ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur: ;
  --tw-brightness: ;
  --tw-contrast: ;
  --tw-grayscale: ;
  --tw-hue-rotate: ;
  --tw-invert: ;
  --tw-saturate: ;
  --tw-sepia: ;
  --tw-drop-shadow: ;
  --tw-backdrop-blur: ;
  --tw-backdrop-brightness: ;
  --tw-backdrop-contrast: ;
  --tw-backdrop-grayscale: ;
  --tw-backdrop-hue-rotate: ;
  --tw-backdrop-invert: ;
  --tw-backdrop-opacity: ;
  --tw-backdrop-saturate: ;
  --tw-backdrop-sepia: ;
  --tw-contain-size: ;
  --tw-contain-layout: ;
  --tw-contain-paint: ;
  --tw-contain-style: ;
}
*,
::before,
::after {
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: #e5e7eb;
}
::before,
::after {
  --tw-content: "";
}
html,
:host {
  line-height: 1.5;
  -webkit-text-size-adjust: 100%;
  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;
  font-family:
    InterVariable,
    Inter,
    sans-serif;
  font-feature-settings: normal;
  font-variation-settings: normal;
  -webkit-tap-highlight-color: transparent;
}
body {
  margin: 0;
  line-height: inherit;
}
hr {
  height: 0;
  color: inherit;
  border-top-width: 1px;
}
abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}
a {
  color: inherit;
  text-decoration: inherit;
}
b,
strong {
  font-weight: bolder;
}
code,
kbd,
samp,
pre {
  font-family:
    Roboto Mono,
    ui-monospace,
    SFMono-Regular,
    Menlo,
    Monaco,
    Consolas,
    "Liberation Mono",
    "Courier New",
    monospace;
  font-feature-settings: normal;
  font-variation-settings: normal;
  font-size: 1em;
}
small {
  font-size: 80%;
}
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sub {
  bottom: -0.25em;
}
sup {
  top: -0.5em;
}
table {
  text-indent: 0;
  border-color: inherit;
  border-collapse: collapse;
}
button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-feature-settings: inherit;
  font-variation-settings: inherit;
  font-size: 100%;
  font-weight: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  color: inherit;
  margin: 0;
  padding: 0;
}
button,
select {
  text-transform: none;
}
button,
input:where([type=button]),
input:where([type=reset]),
input:where([type=submit]) {
  -webkit-appearance: button;
  background-color: transparent;
  background-image: none;
}
:-moz-focusring {
  outline: auto;
}
:-moz-ui-invalid {
  box-shadow: none;
}
progress {
  vertical-align: baseline;
}
::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}
[type=search] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}
::-webkit-search-decoration {
  -webkit-appearance: none;
}
::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}
summary {
  display: list-item;
}
blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}
fieldset {
  margin: 0;
  padding: 0;
}
legend {
  padding: 0;
}
ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}
dialog {
  padding: 0;
}
textarea {
  resize: vertical;
}
input::-moz-placeholder,
textarea::-moz-placeholder {
  opacity: 1;
  color: #9ca3af;
}
input::placeholder,
textarea::placeholder {
  opacity: 1;
  color: #9ca3af;
}
button,
[role=button] {
  cursor: pointer;
}
:disabled {
  cursor: default;
}
img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block;
  vertical-align: middle;
}
img,
video {
  max-width: 100%;
  height: auto;
}
[hidden]:where(:not([hidden=until-found])) {
  display: none;
}
* {
  border-color: var(--border-base);
}
:root {
  --tag-neutral-border: rgba(228, 228, 231, 1);
  --tag-neutral-icon: rgba(161, 161, 170, 1);
  --bg-switch-off-hover: rgba(212, 212, 216, 1);
  --border-menu-bot: rgba(255, 255, 255, 1);
  --border-menu-top: rgba(228, 228, 231, 1);
  --bg-subtle-hover: rgba(244, 244, 245, 1);
  --contrast-fg-primary: rgba(255, 255, 255, 0.88);
  --bg-switch-off: rgba(228, 228, 231, 1);
  --contrast-bg-base-pressed: rgba(63, 63, 70, 1);
  --bg-field-component-hover: rgba(250, 250, 250, 1);
  --bg-base-pressed: rgba(228, 228, 231, 1);
  --tag-neutral-text: rgba(82, 82, 91, 1);
  --tag-red-text: rgba(159, 18, 57, 1);
  --contrast-bg-base: rgba(24, 24, 27, 1);
  --border-strong: rgba(212, 212, 216, 1);
  --contrast-border-base: rgba(255, 255, 255, 0.15);
  --bg-field: rgba(250, 250, 250, 1);
  --tag-blue-text: rgba(30, 64, 175, 1);
  --button-inverted-pressed: rgba(82, 82, 91, 1);
  --border-interactive: rgba(59, 130, 246, 1);
  --bg-base-hover: rgba(244, 244, 245, 1);
  --contrast-bg-subtle: rgba(39, 39, 42, 1);
  --bg-highlight: rgba(239, 246, 255, 1);
  --contrast-fg-secondary: rgba(255, 255, 255, 0.56);
  --tag-red-bg: rgba(255, 228, 230, 1);
  --button-transparent: rgba(255, 255, 255, 0);
  --button-danger-pressed: rgba(159, 18, 57, 1);
  --fg-on-color: rgba(255, 255, 255, 1);
  --button-inverted-hover: rgba(63, 63, 70, 1);
  --bg-field-component: rgba(255, 255, 255, 1);
  --tag-orange-text: rgba(154, 52, 18, 1);
  --tag-green-icon: rgba(16, 185, 129, 1);
  --border-base: rgba(228, 228, 231, 1);
  --bg-base: rgba(255, 255, 255, 1);
  --tag-orange-border: rgba(254, 215, 170, 1);
  --tag-red-border: rgba(254, 205, 211, 1);
  --tag-green-border: rgba(167, 243, 208, 1);
  --tag-green-text: rgba(6, 95, 70, 1);
  --button-neutral: rgba(255, 255, 255, 1);
  --tag-blue-border: rgba(191, 219, 254, 1);
  --fg-interactive-hover: rgba(37, 99, 235, 1);
  --tag-orange-icon: rgba(249, 115, 22, 1);
  --button-neutral-hover: rgba(244, 244, 245, 1);
  --fg-interactive: rgba(59, 130, 246, 1);
  --bg-component-pressed: rgba(228, 228, 231, 1);
  --tag-purple-bg: rgba(237, 233, 254, 1);
  --contrast-bg-base-hover: rgba(39, 39, 42, 1);
  --bg-component: rgba(250, 250, 250, 1);
  --bg-subtle: rgba(250, 250, 250, 1);
  --tag-purple-text: rgba(91, 33, 182, 1);
  --contrast-border-bot: rgba(255, 255, 255, 0.1);
  --button-inverted: rgba(39, 39, 42, 1);
  --tag-red-icon: rgba(244, 63, 94, 1);
  --button-transparent-hover: rgba(244, 244, 245, 1);
  --button-neutral-pressed: rgba(228, 228, 231, 1);
  --tag-purple-icon: rgba(167, 139, 250, 1);
  --bg-field-hover: rgba(244, 244, 245, 1);
  --fg-on-inverted: rgba(255, 255, 255, 1);
  --bg-interactive: rgba(59, 130, 246, 1);
  --border-danger: rgba(190, 18, 60, 1);
  --button-transparent-pressed: rgba(228, 228, 231, 1);
  --tag-purple-border: rgba(221, 214, 254, 1);
  --bg-highlight-hover: rgba(219, 234, 254, 1);
  --border-error: rgba(225, 29, 72, 1);
  --button-danger: rgba(225, 29, 72, 1);
  --tag-blue-bg: rgba(219, 234, 254, 1);
  --border-transparent: rgba(255, 255, 255, 0);
  --button-danger-hover: rgba(190, 18, 60, 1);
  --bg-subtle-pressed: rgba(228, 228, 231, 1);
  --fg-error: rgba(225, 29, 72, 1);
  --bg-component-hover: rgba(244, 244, 245, 1);
  --bg-disabled: rgba(244, 244, 245, 1);
  --tag-blue-icon: rgba(96, 165, 250, 1);
  --fg-subtle: rgba(82, 82, 91, 1);
  --tag-orange-bg-hover: rgba(254, 215, 170, 1);
  --tag-green-bg-hover: rgba(167, 243, 208, 1);
  --tag-red-bg-hover: rgba(254, 205, 211, 1);
  --tag-purple-bg-hover: rgba(221, 214, 254, 1);
  --tag-neutral-bg-hover: rgba(228, 228, 231, 1);
  --tag-blue-bg-hover: rgba(191, 219, 254, 1);
  --tag-green-bg: rgba(209, 250, 229, 1);
  --tag-neutral-bg: rgba(244, 244, 245, 1);
  --tag-orange-bg: rgba(255, 237, 213, 1);
  --fg-base: rgba(24, 24, 27, 1);
  --contrast-border-top: rgba(24, 24, 27, 1);
  --bg-overlay: rgba(24, 24, 27, 0.4);
  --fg-disabled: rgba(161, 161, 170, 1);
  --fg-muted: rgba(113, 113, 122, 1);
  --alpha-400: rgba(24, 24, 27, 0.24);
  --alpha-250: rgba(24, 24, 27, 0.1);
  --borders-interactive-with-active: 0px 0px 0px 1px rgba(59, 130, 246, 1), 0px 0px 0px 4px rgba(59, 130, 246, 0.2);
  --buttons-danger-focus:
    0px 0.75px 0px 0px rgba(255, 255, 255, 0.2) inset,
    0px 1px 2px 0px rgba(190, 18, 60, 0.4),
    0px 0px 0px 1px rgba(190, 18, 60, 1),
    0px 0px 0px 2px rgba(255, 255, 255, 1),
    0px 0px 0px 4px rgba(59, 130, 246, 0.6);
  --details-contrast-on-bg-interactive: 0px 1px 2px 0px rgba(30, 58, 138, 0.6);
  --borders-interactive-with-focus:
    0px 1px 2px 0px rgba(30, 58, 138, 0.5),
    0px 0px 0px 1px rgba(59, 130, 246, 1),
    0px 0px 0px 2px rgba(255, 255, 255, 1),
    0px 0px 0px 4px rgba(59, 130, 246, 0.6);
  --borders-error: 0px 0px 0px 1px rgba(225, 29, 72, 1), 0px 0px 0px 3px rgba(225, 29, 72, 0.15);
  --borders-focus: 0px 0px 0px 1px rgba(255, 255, 255, 1), 0px 0px 0px 3px rgba(59, 130, 246, 0.6);
  --borders-interactive-with-shadow: 0px 1px 2px 0px rgba(30, 58, 138, 0.5), 0px 0px 0px 1px rgba(59, 130, 246, 1);
  --buttons-danger:
    0px 0.75px 0px 0px rgba(255, 255, 255, 0.2) inset,
    0px 1px 2px 0px rgba(190, 18, 60, 0.4),
    0px 0px 0px 1px rgba(190, 18, 60, 1);
  --buttons-inverted-focus:
    0px 0.75px 0px 0px rgba(255, 255, 255, 0.2) inset,
    0px 1px 2px 0px rgba(0, 0, 0, 0.4),
    0px 0px 0px 1px rgba(24, 24, 27, 1),
    0px 0px 0px 2px rgba(255, 255, 255, 1),
    0px 0px 0px 4px rgba(59, 130, 246, 0.6);
  --elevation-card-hover:
    0px 0px 0px 1px rgba(0, 0, 0, 0.08),
    0px 1px 2px -1px rgba(0, 0, 0, 0.08),
    0px 2px 8px 0px rgba(0, 0, 0, 0.1);
  --details-switch-handle:
    0px 0px 2px 1px rgba(255, 255, 255, 1) inset,
    0px 1px 0px 0px rgba(255, 255, 255, 1) inset,
    0px 0px 0px 0.5px rgba(0, 0, 0, 0.02),
    0px 5px 4px 0px rgba(0, 0, 0, 0.02),
    0px 3px 3px 0px rgba(0, 0, 0, 0.04),
    0px 1px 2px 0px rgba(0, 0, 0, 0.12),
    0px 0px 1px 0px rgba(0, 0, 0, 0.08);
  --buttons-neutral: 0px 1px 2px 0px rgba(0, 0, 0, 0.12), 0px 0px 0px 1px rgba(0, 0, 0, 0.08);
  --borders-base: 0px 1px 2px 0px rgba(0, 0, 0, 0.12), 0px 0px 0px 1px rgba(0, 0, 0, 0.08);
  --elevation-card-rest:
    0px 0px 0px 1px rgba(0, 0, 0, 0.08),
    0px 1px 2px -1px rgba(0, 0, 0, 0.08),
    0px 2px 4px 0px rgba(0, 0, 0, 0.04);
  --buttons-neutral-focus:
    0px 1px 2px 0px rgba(0, 0, 0, 0.12),
    0px 0px 0px 1px rgba(0, 0, 0, 0.08),
    0px 0px 0px 2px rgba(255, 255, 255, 1),
    0px 0px 0px 4px rgba(59, 130, 246, 0.6);
  --details-switch-background-focus:
    0px 0px 0px 1px rgba(255, 255, 255, 1),
    0px 0px 0px 3px rgba(59, 130, 246, 0.6),
    0px 1px 1px 0px rgba(0, 0, 0, 0.04) inset,
    0px 2px 4px 0px rgba(0, 0, 0, 0.04) inset,
    0px 0px 0px 0.75px rgba(0, 0, 0, 0.06) inset,
    0px 0px 8px 0px rgba(0, 0, 0, 0.02) inset,
    0px 2px 4px 0px rgba(0, 0, 0, 0.04);
  --details-switch-background:
    0px 1px 1px 0px rgba(0, 0, 0, 0.04) inset,
    0px 2px 4px 0px rgba(0, 0, 0, 0.04) inset,
    0px 0px 0px 0.75px rgba(0, 0, 0, 0.06) inset,
    0px 0px 8px 0px rgba(0, 0, 0, 0.02) inset,
    0px 2px 4px 0px rgba(0, 0, 0, 0.04);
  --elevation-flyout:
    0px 0px 0px 1px rgba(0, 0, 0, 0.08),
    0px 4px 8px 0px rgba(0, 0, 0, 0.08),
    0px 8px 16px 0px rgba(0, 0, 0, 0.08);
  --elevation-tooltip:
    0px 0px 0px 1px rgba(0, 0, 0, 0.08),
    0px 2px 4px 0px rgba(0, 0, 0, 0.08),
    0px 4px 8px 0px rgba(0, 0, 0, 0.08);
  --elevation-modal:
    0px 0px 0px 1px rgba(255, 255, 255, 1) inset,
    0px 0px 0px 1.5px rgba(228, 228, 231, 0.6) inset,
    0px 0px 0px 1px rgba(0, 0, 0, 0.08),
    0px 8px 16px 0px rgba(0, 0, 0, 0.08),
    0px 16px 32px 0px rgba(0, 0, 0, 0.08);
  --elevation-code-block: 0px 0px 0px 1px rgba(24, 24, 27, 1) inset, 0px 0px 0px 1.5px rgba(255, 255, 255, 0.2) inset;
  --buttons-inverted:
    0px 0.75px 0px 0px rgba(255, 255, 255, 0.2) inset,
    0px 1px 2px 0px rgba(0, 0, 0, 0.4),
    0px 0px 0px 1px rgba(24, 24, 27, 1);
  --elevation-commandbar:
    0px 0px 0px 0.75px rgba(39, 39, 42, 1) inset,
    0px 0px 0px 1.25px rgba(255, 255, 255, 0.3) inset,
    0px 8px 16px 0px rgba(0, 0, 0, 0.08),
    0px 16px 32px 0px rgba(0, 0, 0, 0.08);
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --card: 0 0% 100%;
  --card-foreground: 222.2 84% 4.9%;
  --popover: 0 0% 100%;
  --popover-foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  --secondary: 210 40% 96%;
  --secondary-foreground: 222.2 47.4% 11.2%;
  --muted: 210 40% 96%;
  --muted-foreground: 215.4 16.3% 46.9%;
  --accent: 210 40% 96%;
  --accent-foreground: 222.2 47.4% 11.2%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 210 40% 98%;
  --border: 214.3 31.8% 91.4%;
  --input: 214.3 31.8% 91.4%;
  --ring: 222.2 84% 4.9%;
  --chart-1: 12 76% 61%;
  --chart-2: 173 58% 39%;
  --chart-3: 197 37% 24%;
  --chart-4: 43 74% 66%;
  --chart-5: 27 87% 67%;
  --radius: 0.5rem;
}
* {
  border-color: hsl(var(--border));
}
body {
  background-color: hsl(var(--background));
  color: hsl(var(--foreground));
  font-family:
    system-ui,
    -apple-system,
    sans-serif;
  font-weight: 400;
}
.container {
  width: 100%;
}
@media (min-width: 640px) {
  .container {
    max-width: 640px;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}
@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }
}
@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
  }
}
@media (min-width: 1536px) {
  .container {
    max-width: 1536px;
  }
}
.txt-compact-xsmall {
  font-size: 0.75rem;
  line-height: 1.25rem;
  font-weight: 400;
  font-family:
    Inter,
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    Segoe UI,
    Roboto,
    Helvetica Neue,
    Arial,
    Noto Sans,
    sans-serif,
    Apple Color Emoji,
    Segoe UI Emoji,
    Segoe UI Symbol,
    Noto Color Emoji;
}
.txt-compact-xsmall-plus {
  font-size: 0.75rem;
  line-height: 1.25rem;
  font-weight: 500;
  font-family:
    Inter,
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    Segoe UI,
    Roboto,
    Helvetica Neue,
    Arial,
    Noto Sans,
    sans-serif,
    Apple Color Emoji,
    Segoe UI Emoji,
    Segoe UI Symbol,
    Noto Color Emoji;
}
.txt-xlarge {
  font-size: 1.125rem;
  line-height: 1.6875rem;
  font-weight: 400;
  font-family:
    Inter,
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    Segoe UI,
    Roboto,
    Helvetica Neue,
    Arial,
    Noto Sans,
    sans-serif,
    Apple Color Emoji,
    Segoe UI Emoji,
    Segoe UI Symbol,
    Noto Color Emoji;
}
.txt-compact-small-plus {
  font-size: 0.8125rem;
  line-height: 1.25rem;
  font-weight: 500;
  font-family:
    Inter,
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    Segoe UI,
    Roboto,
    Helvetica Neue,
    Arial,
    Noto Sans,
    sans-serif,
    Apple Color Emoji,
    Segoe UI Emoji,
    Segoe UI Symbol,
    Noto Color Emoji;
}
.txt-compact-medium {
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 400;
  font-family:
    Inter,
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    Segoe UI,
    Roboto,
    Helvetica Neue,
    Arial,
    Noto Sans,
    sans-serif,
    Apple Color Emoji,
    Segoe UI Emoji,
    Segoe UI Symbol,
    Noto Color Emoji;
}
.txt-compact-large-plus {
  font-size: 1rem;
  line-height: 1.25rem;
  font-weight: 500;
  font-family:
    Inter,
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    Segoe UI,
    Roboto,
    Helvetica Neue,
    Arial,
    Noto Sans,
    sans-serif,
    Apple Color Emoji,
    Segoe UI Emoji,
    Segoe UI Symbol,
    Noto Color Emoji;
}
.txt-medium {
  font-size: 0.875rem;
  line-height: 1.3125rem;
  font-weight: 400;
  font-family:
    Inter,
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    Segoe UI,
    Roboto,
    Helvetica Neue,
    Arial,
    Noto Sans,
    sans-serif,
    Apple Color Emoji,
    Segoe UI Emoji,
    Segoe UI Symbol,
    Noto Color Emoji;
}
.txt-compact-large {
  font-size: 1rem;
  line-height: 1.25rem;
  font-weight: 400;
  font-family:
    Inter,
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    Segoe UI,
    Roboto,
    Helvetica Neue,
    Arial,
    Noto Sans,
    sans-serif,
    Apple Color Emoji,
    Segoe UI Emoji,
    Segoe UI Symbol,
    Noto Color Emoji;
}
.txt-compact-medium-plus {
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  font-family:
    Inter,
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    Segoe UI,
    Roboto,
    Helvetica Neue,
    Arial,
    Noto Sans,
    sans-serif,
    Apple Color Emoji,
    Segoe UI Emoji,
    Segoe UI Symbol,
    Noto Color Emoji;
}
.txt-compact-xlarge {
  font-size: 1.125rem;
  line-height: 1.25rem;
  font-weight: 400;
  font-family:
    Inter,
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    Segoe UI,
    Roboto,
    Helvetica Neue,
    Arial,
    Noto Sans,
    sans-serif,
    Apple Color Emoji,
    Segoe UI Emoji,
    Segoe UI Symbol,
    Noto Color Emoji;
}
.txt-compact-small {
  font-size: 0.8125rem;
  line-height: 1.25rem;
  font-weight: 400;
  font-family:
    Inter,
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    Segoe UI,
    Roboto,
    Helvetica Neue,
    Arial,
    Noto Sans,
    sans-serif,
    Apple Color Emoji,
    Segoe UI Emoji,
    Segoe UI Symbol,
    Noto Color Emoji;
}
.txt-small {
  font-size: 0.8125rem;
  line-height: 1.21875rem;
  font-weight: 400;
  font-family:
    Inter,
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    Segoe UI,
    Roboto,
    Helvetica Neue,
    Arial,
    Noto Sans,
    sans-serif,
    Apple Color Emoji,
    Segoe UI Emoji,
    Segoe UI Symbol,
    Noto Color Emoji;
}
.txt-small-plus {
  font-size: 0.8125rem;
  line-height: 1.21875rem;
  font-weight: 500;
  font-family:
    Inter,
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    Segoe UI,
    Roboto,
    Helvetica Neue,
    Arial,
    Noto Sans,
    sans-serif,
    Apple Color Emoji,
    Segoe UI Emoji,
    Segoe UI Symbol,
    Noto Color Emoji;
}
.txt-large {
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
  font-family:
    Inter,
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    Segoe UI,
    Roboto,
    Helvetica Neue,
    Arial,
    Noto Sans,
    sans-serif,
    Apple Color Emoji,
    Segoe UI Emoji,
    Segoe UI Symbol,
    Noto Color Emoji;
}
.txt-xsmall {
  font-size: 0.75rem;
  line-height: 1.125rem;
  font-weight: 400;
  font-family:
    Inter,
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    Segoe UI,
    Roboto,
    Helvetica Neue,
    Arial,
    Noto Sans,
    sans-serif,
    Apple Color Emoji,
    Segoe UI Emoji,
    Segoe UI Symbol,
    Noto Color Emoji;
}
.h2-core {
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 500;
  font-family:
    Inter,
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    Segoe UI,
    Roboto,
    Helvetica Neue,
    Arial,
    Noto Sans,
    sans-serif,
    Apple Color Emoji,
    Segoe UI Emoji,
    Segoe UI Symbol,
    Noto Color Emoji;
}
.h3-core {
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  font-family:
    Inter,
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    Segoe UI,
    Roboto,
    Helvetica Neue,
    Arial,
    Noto Sans,
    sans-serif,
    Apple Color Emoji,
    Segoe UI Emoji,
    Segoe UI Symbol,
    Noto Color Emoji;
}
.h1-core {
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 500;
  font-family:
    Inter,
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    Segoe UI,
    Roboto,
    Helvetica Neue,
    Arial,
    Noto Sans,
    sans-serif,
    Apple Color Emoji,
    Segoe UI Emoji,
    Segoe UI Symbol,
    Noto Color Emoji;
}
.code-body {
  font-size: 0.75rem;
  line-height: 1.125rem;
  font-weight: 400;
  font-family:
    Roboto Mono,
    ui-monospace,
    SFMono-Regular,
    Menlo,
    Monaco,
    Consolas,
    Liberation Mono,
    Courier New,
    monospace;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
.pointer-events-none {
  pointer-events: none;
}
.fixed {
  position: fixed;
}
.absolute {
  position: absolute;
}
.relative {
  position: relative;
}
.sticky {
  position: sticky;
}
.inset-0 {
  inset: 0px;
}
.inset-2 {
  inset: 0.5rem;
}
.inset-x-0 {
  left: 0px;
  right: 0px;
}
.inset-y-2 {
  top: 0.5rem;
  bottom: 0.5rem;
}
.bottom-0 {
  bottom: 0px;
}
.bottom-8 {
  bottom: 2rem;
}
.bottom-\\[3px\\] {
  bottom: 3px;
}
.left-0 {
  left: 0px;
}
.left-1\\/2 {
  left: 50%;
}
.left-2 {
  left: 0.5rem;
}
.left-\\[50\\%\\] {
  left: 50%;
}
.left-\\[calc\\(20px\\+24px\\+24px\\)\\] {
  left: calc(20px + 24px + 24px);
}
.right-0 {
  right: 0px;
}
.right-4 {
  right: 1rem;
}
.top-0 {
  top: 0px;
}
.top-4 {
  top: 1rem;
}
.top-\\[50\\%\\] {
  top: 50%;
}
.isolate {
  isolation: isolate;
}
.z-50 {
  z-index: 50;
}
.z-\\[1\\] {
  z-index: 1;
}
.-mx-1 {
  margin-left: -0.25rem;
  margin-right: -0.25rem;
}
.mx-1 {
  margin-left: 0.25rem;
  margin-right: 0.25rem;
}
.mx-4 {
  margin-left: 1rem;
  margin-right: 1rem;
}
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
.my-1 {
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
}
.mb-2 {
  margin-bottom: 0.5rem;
}
.mb-3 {
  margin-bottom: 0.75rem;
}
.mb-4 {
  margin-bottom: 1rem;
}
.ml-1 {
  margin-left: 0.25rem;
}
.ml-2 {
  margin-left: 0.5rem;
}
.ml-3 {
  margin-left: 0.75rem;
}
.ml-auto {
  margin-left: auto;
}
.mr-3 {
  margin-right: 0.75rem;
}
.mt-1 {
  margin-top: 0.25rem;
}
.mt-2 {
  margin-top: 0.5rem;
}
.mt-4 {
  margin-top: 1rem;
}
.mt-6 {
  margin-top: 1.5rem;
}
.box-border {
  box-sizing: border-box;
}
.line-clamp-2 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.flex {
  display: flex;
}
.inline-flex {
  display: inline-flex;
}
.table {
  display: table;
}
.grid {
  display: grid;
}
.hidden {
  display: none;
}
.aspect-square {
  aspect-ratio: 1 / 1;
}
.size-11 {
  width: 2.75rem;
  height: 2.75rem;
}
.size-4 {
  width: 1rem;
  height: 1rem;
}
.size-5 {
  width: 1.25rem;
  height: 1.25rem;
}
.size-6 {
  width: 1.5rem;
  height: 1.5rem;
}
.size-7 {
  width: 1.75rem;
  height: 1.75rem;
}
.size-8 {
  width: 2rem;
  height: 2rem;
}
.size-9 {
  width: 2.25rem;
  height: 2.25rem;
}
.size-\\[15px\\] {
  width: 15px;
  height: 15px;
}
.size-\\[3px\\] {
  width: 3px;
  height: 3px;
}
.size-full {
  width: 100%;
  height: 100%;
}
.h-0\\.5 {
  height: 0.125rem;
}
.h-1\\.5 {
  height: 0.375rem;
}
.h-10 {
  height: 2.5rem;
}
.h-11 {
  height: 2.75rem;
}
.h-12 {
  height: 3rem;
}
.h-16 {
  height: 4rem;
}
.h-2\\.5 {
  height: 0.625rem;
}
.h-3\\.5 {
  height: 0.875rem;
}
.h-4 {
  height: 1rem;
}
.h-5 {
  height: 1.25rem;
}
.h-6 {
  height: 1.5rem;
}
.h-7 {
  height: 1.75rem;
}
.h-8 {
  height: 2rem;
}
.h-9 {
  height: 2.25rem;
}
.h-\\[12px\\] {
  height: 12px;
}
.h-\\[14px\\] {
  height: 14px;
}
.h-\\[15px\\] {
  height: 15px;
}
.h-\\[16px\\] {
  height: 16px;
}
.h-\\[18px\\] {
  height: 18px;
}
.h-\\[52px\\] {
  height: 52px;
}
.h-\\[var\\(--radix-select-trigger-height\\)\\] {
  height: var(--radix-select-trigger-height);
}
.h-fit {
  height: -moz-fit-content;
  height: fit-content;
}
.h-full {
  height: 100%;
}
.h-px {
  height: 1px;
}
.max-h-\\[--radix-select-content-available-height\\] {
  max-height: var(--radix-select-content-available-height);
}
.max-h-\\[200px\\] {
  max-height: 200px;
}
.max-h-\\[var\\(--radix-popper-available-height\\)\\] {
  max-height: var(--radix-popper-available-height);
}
.min-h-0 {
  min-height: 0px;
}
.min-h-10 {
  min-height: 2.5rem;
}
.min-h-\\[250px\\] {
  min-height: 250px;
}
.min-h-\\[60px\\] {
  min-height: 60px;
}
.w-1 {
  width: 0.25rem;
}
.w-1\\.5 {
  width: 0.375rem;
}
.w-10 {
  width: 2.5rem;
}
.w-11 {
  width: 2.75rem;
}
.w-12 {
  width: 3rem;
}
.w-16 {
  width: 4rem;
}
.w-2\\.5 {
  width: 0.625rem;
}
.w-24 {
  width: 6rem;
}
.w-3\\.5 {
  width: 0.875rem;
}
.w-4 {
  width: 1rem;
}
.w-5 {
  width: 1.25rem;
}
.w-6 {
  width: 1.5rem;
}
.w-7 {
  width: 1.75rem;
}
.w-8 {
  width: 2rem;
}
.w-\\[128px\\] {
  width: 128px;
}
.w-\\[12px\\] {
  width: 12px;
}
.w-\\[138px\\] {
  width: 138px;
}
.w-\\[14px\\] {
  width: 14px;
}
.w-\\[15px\\] {
  width: 15px;
}
.w-\\[180px\\] {
  width: 180px;
}
.w-\\[28px\\] {
  width: 28px;
}
.w-\\[32px\\] {
  width: 32px;
}
.w-\\[66px\\] {
  width: 66px;
}
.w-\\[calc\\(20px\\+24px\\+24px\\)\\] {
  width: calc(20px + 24px + 24px);
}
.w-\\[calc\\(28px\\+24px\\+4px\\)\\] {
  width: calc(28px + 24px + 4px);
}
.w-fit {
  width: -moz-fit-content;
  width: fit-content;
}
.w-full {
  width: 100%;
}
.w-px {
  width: 1px;
}
.min-w-0 {
  min-width: 0px;
}
.min-w-\\[20px\\] {
  min-width: 20px;
}
.min-w-\\[220px\\] {
  min-width: 220px;
}
.min-w-\\[32px\\] {
  min-width: 32px;
}
.min-w-\\[360px\\] {
  min-width: 360px;
}
.min-w-\\[8rem\\] {
  min-width: 8rem;
}
.min-w-\\[calc\\(20px\\+24px\\+24px\\)\\] {
  min-width: calc(20px + 24px + 24px);
}
.min-w-\\[calc\\(28px\\+24px\\+4px\\)\\] {
  min-width: calc(28px + 24px + 4px);
}
.min-w-\\[var\\(--radix-select-trigger-width\\)\\] {
  min-width: var(--radix-select-trigger-width);
}
.max-w-2xl {
  max-width: 42rem;
}
.max-w-\\[200px\\] {
  max-width: 200px;
}
.max-w-\\[400px\\] {
  max-width: 400px;
}
.max-w-\\[440px\\] {
  max-width: 440px;
}
.max-w-\\[90\\%\\] {
  max-width: 90%;
}
.max-w-\\[calc\\(20px\\+24px\\+24px\\)\\] {
  max-width: calc(20px + 24px + 24px);
}
.max-w-\\[calc\\(28px\\+24px\\+4px\\)\\] {
  max-width: calc(28px + 24px + 4px);
}
.max-w-md {
  max-width: 28rem;
}
.flex-1 {
  flex: 1 1 0%;
}
.flex-shrink-0 {
  flex-shrink: 0;
}
.shrink-0 {
  flex-shrink: 0;
}
.origin-\\[--radix-select-content-transform-origin\\] {
  transform-origin: var(--radix-select-content-transform-origin);
}
.-translate-x-1\\/2 {
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.-translate-y-1 {
  --tw-translate-y: -0.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-x-\\[-50\\%\\] {
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-y-\\[-50\\%\\] {
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.transform {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
@keyframes pulse {
  50% {
    opacity: .5;
  }
}
.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
.animate-spin {
  animation: spin 1s linear infinite;
}
.cursor-default {
  cursor: default;
}
.cursor-not-allowed {
  cursor: not-allowed;
}
.cursor-pointer {
  cursor: pointer;
}
.cursor-text {
  cursor: text;
}
.select-none {
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}
.appearance-none {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.grid-cols-1 {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}
.grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
.grid-cols-\\[15px_1fr\\] {
  grid-template-columns: 15px 1fr;
}
.grid-cols-\\[20px_1fr\\] {
  grid-template-columns: 20px 1fr;
}
.grid-cols-\\[20px_1fr_20px\\] {
  grid-template-columns: 20px 1fr 20px;
}
.grid-cols-\\[28px_1fr\\] {
  grid-template-columns: 28px 1fr;
}
.grid-cols-\\[28px_1fr_28px\\] {
  grid-template-columns: 28px 1fr 28px;
}
.grid-cols-\\[32px_1fr\\] {
  grid-template-columns: 32px 1fr;
}
.grid-cols-\\[32px_1fr_32px\\] {
  grid-template-columns: 32px 1fr 32px;
}
.grid-cols-\\[4px_1fr\\] {
  grid-template-columns: 4px 1fr;
}
.grid-cols-\\[auto\\,1fr\\] {
  grid-template-columns: auto 1fr;
}
.flex-col {
  flex-direction: column;
}
.flex-wrap {
  flex-wrap: wrap;
}
.flex-nowrap {
  flex-wrap: nowrap;
}
.items-start {
  align-items: flex-start;
}
.items-center {
  align-items: center;
}
.items-stretch {
  align-items: stretch;
}
.justify-start {
  justify-content: flex-start;
}
.justify-end {
  justify-content: flex-end;
}
.justify-center {
  justify-content: center;
}
.justify-between {
  justify-content: space-between;
}
.gap-1 {
  gap: 0.25rem;
}
.gap-2 {
  gap: 0.5rem;
}
.gap-3 {
  gap: 0.75rem;
}
.gap-4 {
  gap: 1rem;
}
.gap-6 {
  gap: 1.5rem;
}
.gap-x-0\\.5 {
  -moz-column-gap: 0.125rem;
  column-gap: 0.125rem;
}
.gap-x-1 {
  -moz-column-gap: 0.25rem;
  column-gap: 0.25rem;
}
.gap-x-1\\.5 {
  -moz-column-gap: 0.375rem;
  column-gap: 0.375rem;
}
.gap-x-2 {
  -moz-column-gap: 0.5rem;
  column-gap: 0.5rem;
}
.gap-x-3 {
  -moz-column-gap: 0.75rem;
  column-gap: 0.75rem;
}
.gap-x-4 {
  -moz-column-gap: 1rem;
  column-gap: 1rem;
}
.gap-y-1 {
  row-gap: 0.25rem;
}
.gap-y-2 {
  row-gap: 0.5rem;
}
.gap-y-3 {
  row-gap: 0.75rem;
}
.gap-y-4 {
  row-gap: 1rem;
}
.space-x-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.5rem * var(--tw-space-x-reverse));
  margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));
}
.space-y-1 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.25rem * var(--tw-space-y-reverse));
}
.space-y-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));
}
.space-y-3 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.75rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.75rem * var(--tw-space-y-reverse));
}
.space-y-4 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1rem * var(--tw-space-y-reverse));
}
.space-y-6 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1.5rem * var(--tw-space-y-reverse));
}
.divide-x > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-x-reverse: 0;
  border-right-width: calc(1px * var(--tw-divide-x-reverse));
  border-left-width: calc(1px * calc(1 - var(--tw-divide-x-reverse)));
}
.divide-y > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-y-reverse: 0;
  border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
  border-bottom-width: calc(1px * var(--tw-divide-y-reverse));
}
.overflow-auto {
  overflow: auto;
}
.overflow-hidden {
  overflow: hidden;
}
.overflow-x-auto {
  overflow-x: auto;
}
.overflow-y-auto {
  overflow-y: auto;
}
.overflow-x-hidden {
  overflow-x: hidden;
}
.overscroll-none {
  overscroll-behavior: none;
}
.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.text-ellipsis {
  text-overflow: ellipsis;
}
.whitespace-nowrap {
  white-space: nowrap;
}
.whitespace-pre-wrap {
  white-space: pre-wrap;
}
.text-pretty {
  text-wrap: pretty;
}
.rounded {
  border-radius: 0.25rem;
}
.rounded-2xl {
  border-radius: 1rem;
}
.rounded-\\[10px\\] {
  border-radius: 10px;
}
.rounded-\\[3px\\] {
  border-radius: 3px;
}
.rounded-\\[4px\\] {
  border-radius: 4px;
}
.rounded-full {
  border-radius: 9999px;
}
.rounded-lg {
  border-radius: 0.5rem;
}
.rounded-md {
  border-radius: 0.375rem;
}
.rounded-none {
  border-radius: 0px;
}
.rounded-sm {
  border-radius: 0.125rem;
}
.rounded-xl {
  border-radius: 0.75rem;
}
.border {
  border-width: 1px;
}
.border-2 {
  border-width: 2px;
}
.border-y {
  border-top-width: 1px;
  border-bottom-width: 1px;
}
.border-b {
  border-bottom-width: 1px;
}
.border-b-0 {
  border-bottom-width: 0px;
}
.border-l {
  border-left-width: 1px;
}
.border-r {
  border-right-width: 1px;
}
.border-t {
  border-top-width: 1px;
}
.border-t-0 {
  border-top-width: 0px;
}
.border-dashed {
  border-style: dashed;
}
.border-\\[\\#fafafa\\] {
  --tw-border-opacity: 1;
  border-color: rgb(250 250 250 / var(--tw-border-opacity, 1));
}
.border-blue-200 {
  --tw-border-opacity: 1;
  border-color: rgb(191 219 254 / var(--tw-border-opacity, 1));
}
.border-blue-600 {
  --tw-border-opacity: 1;
  border-color: rgb(37 99 235 / var(--tw-border-opacity, 1));
}
.border-gray-300 {
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-border-opacity, 1));
}
.border-gray-50 {
  --tw-border-opacity: 1;
  border-color: rgb(249 250 251 / var(--tw-border-opacity, 1));
}
.border-gray-500 {
  --tw-border-opacity: 1;
  border-color: rgb(107 114 128 / var(--tw-border-opacity, 1));
}
.border-gray-800 {
  --tw-border-opacity: 1;
  border-color: rgb(31 41 55 / var(--tw-border-opacity, 1));
}
.border-green-200 {
  --tw-border-opacity: 1;
  border-color: rgb(187 247 208 / var(--tw-border-opacity, 1));
}
.border-red-200 {
  --tw-border-opacity: 1;
  border-color: rgb(254 202 202 / var(--tw-border-opacity, 1));
}
.border-red-300 {
  --tw-border-opacity: 1;
  border-color: rgb(252 165 165 / var(--tw-border-opacity, 1));
}
.border-transparent {
  border-color: transparent;
}
.border-ui-border-base {
  border-color: var(--border-base);
}
.border-ui-contrast-border-base {
  border-color: var(--contrast-border-base);
}
.border-ui-contrast-border-bot {
  border-color: var(--contrast-border-bot);
}
.border-ui-tag-blue-border {
  border-color: var(--tag-blue-border);
}
.border-ui-tag-green-border {
  border-color: var(--tag-green-border);
}
.border-ui-tag-neutral-border {
  border-color: var(--tag-neutral-border);
}
.border-ui-tag-orange-border {
  border-color: var(--tag-orange-border);
}
.border-ui-tag-purple-border {
  border-color: var(--tag-purple-border);
}
.border-ui-tag-red-border {
  border-color: var(--tag-red-border);
}
.border-yellow-200 {
  --tw-border-opacity: 1;
  border-color: rgb(254 240 138 / var(--tw-border-opacity, 1));
}
.border-b-ui-border-menu-bot {
  border-bottom-color: var(--border-menu-bot);
}
.border-r-ui-border-base {
  border-right-color: var(--border-base);
}
.border-t-transparent {
  border-top-color: transparent;
}
.border-t-ui-border-menu-top {
  border-top-color: var(--border-menu-top);
}
.\\!bg-ui-bg-disabled {
  background-color: var(--bg-disabled) !important;
}
.\\!bg-ui-bg-interactive {
  background-color: var(--bg-interactive) !important;
}
.bg-blue-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(239 246 255 / var(--tw-bg-opacity, 1));
}
.bg-blue-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(37 99 235 / var(--tw-bg-opacity, 1));
}
.bg-blue-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(30 64 175 / var(--tw-bg-opacity, 1));
}
.bg-gray-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity, 1));
}
.bg-gray-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(209 213 219 / var(--tw-bg-opacity, 1));
}
.bg-gray-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(249 250 251 / var(--tw-bg-opacity, 1));
}
.bg-green-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(240 253 244 / var(--tw-bg-opacity, 1));
}
.bg-red-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(254 242 242 / var(--tw-bg-opacity, 1));
}
.bg-red-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(220 38 38 / var(--tw-bg-opacity, 1));
}
.bg-transparent {
  background-color: transparent;
}
.bg-ui-bg-base {
  background-color: var(--bg-base);
}
.bg-ui-bg-component {
  background-color: var(--bg-component);
}
.bg-ui-bg-component-hover {
  background-color: var(--bg-component-hover);
}
.bg-ui-bg-disabled {
  background-color: var(--bg-disabled);
}
.bg-ui-bg-field {
  background-color: var(--bg-field);
}
.bg-ui-bg-interactive {
  background-color: var(--bg-interactive);
}
.bg-ui-bg-overlay {
  background-color: var(--bg-overlay);
}
.bg-ui-bg-subtle {
  background-color: var(--bg-subtle);
}
.bg-ui-bg-switch-off {
  background-color: var(--bg-switch-off);
}
.bg-ui-border-base {
  background-color: var(--border-base);
}
.bg-ui-border-menu-bot {
  background-color: var(--border-menu-bot);
}
.bg-ui-border-menu-top {
  background-color: var(--border-menu-top);
}
.bg-ui-button-danger {
  background-color: var(--button-danger);
}
.bg-ui-button-inverted {
  background-color: var(--button-inverted);
}
.bg-ui-button-neutral {
  background-color: var(--button-neutral);
}
.bg-ui-button-transparent {
  background-color: var(--button-transparent);
}
.bg-ui-contrast-bg-base {
  background-color: var(--contrast-bg-base);
}
.bg-ui-contrast-bg-subtle {
  background-color: var(--contrast-bg-subtle);
}
.bg-ui-contrast-border-base {
  background-color: var(--contrast-border-base);
}
.bg-ui-contrast-border-top {
  background-color: var(--contrast-border-top);
}
.bg-ui-contrast-fg-primary {
  background-color: var(--contrast-fg-primary);
}
.bg-ui-fg-on-color {
  background-color: var(--fg-on-color);
}
.bg-ui-tag-blue-bg {
  background-color: var(--tag-blue-bg);
}
.bg-ui-tag-green-bg {
  background-color: var(--tag-green-bg);
}
.bg-ui-tag-green-icon {
  background-color: var(--tag-green-icon);
}
.bg-ui-tag-neutral-bg {
  background-color: var(--tag-neutral-bg);
}
.bg-ui-tag-neutral-icon {
  background-color: var(--tag-neutral-icon);
}
.bg-ui-tag-orange-bg {
  background-color: var(--tag-orange-bg);
}
.bg-ui-tag-orange-icon {
  background-color: var(--tag-orange-icon);
}
.bg-ui-tag-purple-bg {
  background-color: var(--tag-purple-bg);
}
.bg-ui-tag-red-bg {
  background-color: var(--tag-red-bg);
}
.bg-ui-tag-red-icon {
  background-color: var(--tag-red-icon);
}
.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));
}
.bg-yellow-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(254 252 232 / var(--tw-bg-opacity, 1));
}
.bg-\\[linear-gradient\\(0deg\\,var\\(--border-strong\\)_1px\\,transparent_1px\\)\\] {
  background-image:
    linear-gradient(
      0deg,
      var(--border-strong) 1px,
      transparent 1px);
}
.bg-\\[linear-gradient\\(90deg\\,var\\(--border-strong\\)_1px\\,transparent_1px\\)\\] {
  background-image:
    linear-gradient(
      90deg,
      var(--border-strong) 1px,
      transparent 1px);
}
.bg-\\[length\\:1px_4px\\] {
  background-size: 1px 4px;
}
.bg-\\[length\\:4px_1px\\] {
  background-size: 4px 1px;
}
.fill-current {
  fill: currentColor;
}
.fill-ui-fg-muted {
  fill: var(--fg-muted);
}
.fill-ui-fg-subtle {
  fill: var(--fg-subtle);
}
.object-cover {
  -o-object-fit: cover;
  object-fit: cover;
}
.object-center {
  -o-object-position: center;
  object-position: center;
}
.p-0 {
  padding: 0px;
}
.p-0\\.5 {
  padding: 0.125rem;
}
.p-1 {
  padding: 0.25rem;
}
.p-1\\.5 {
  padding: 0.375rem;
}
.p-2 {
  padding: 0.5rem;
}
.p-2\\.5 {
  padding: 0.625rem;
}
.p-3 {
  padding: 0.75rem;
}
.p-3\\.5 {
  padding: 0.875rem;
}
.p-4 {
  padding: 1rem;
}
.p-6 {
  padding: 1.5rem;
}
.p-8 {
  padding: 2rem;
}
.px-0\\.5 {
  padding-left: 0.125rem;
  padding-right: 0.125rem;
}
.px-1 {
  padding-left: 0.25rem;
  padding-right: 0.25rem;
}
.px-1\\.5 {
  padding-left: 0.375rem;
  padding-right: 0.375rem;
}
.px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
.px-2\\.5 {
  padding-left: 0.625rem;
  padding-right: 0.625rem;
}
.px-3 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}
.px-3\\.5 {
  padding-left: 0.875rem;
  padding-right: 0.875rem;
}
.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}
.px-5 {
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}
.px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
.px-8 {
  padding-left: 2rem;
  padding-right: 2rem;
}
.px-\\[5px\\] {
  padding-left: 5px;
  padding-right: 5px;
}
.px-\\[6px\\] {
  padding-left: 6px;
  padding-right: 6px;
}
.py-0 {
  padding-top: 0px;
  padding-bottom: 0px;
}
.py-1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}
.py-1\\.5 {
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
}
.py-12 {
  padding-top: 3rem;
  padding-bottom: 3rem;
}
.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.py-2\\.5 {
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
}
.py-3\\.5 {
  padding-top: 0.875rem;
  padding-bottom: 0.875rem;
}
.py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.py-\\[3px\\] {
  padding-top: 3px;
  padding-bottom: 3px;
}
.py-\\[5px\\] {
  padding-top: 5px;
  padding-bottom: 5px;
}
.py-\\[7px\\] {
  padding-top: 7px;
  padding-bottom: 7px;
}
.py-\\[9px\\] {
  padding-top: 9px;
  padding-bottom: 9px;
}
.py-px {
  padding-top: 1px;
  padding-bottom: 1px;
}
.pb-3 {
  padding-bottom: 0.75rem;
}
.pb-4 {
  padding-bottom: 1rem;
}
.pb-\\[5px\\] {
  padding-bottom: 5px;
}
.pb-\\[9px\\] {
  padding-bottom: 9px;
}
.pl-0 {
  padding-left: 0px;
}
.pl-7 {
  padding-left: 1.75rem;
}
.pl-8 {
  padding-left: 2rem;
}
.pl-\\[31px\\] {
  padding-left: 31px;
}
.pl-\\[88px\\] {
  padding-left: 88px;
}
.pr-1 {
  padding-right: 0.25rem;
}
.pr-10 {
  padding-right: 2.5rem;
}
.pr-2 {
  padding-right: 0.5rem;
}
.pr-3 {
  padding-right: 0.75rem;
}
.pr-6 {
  padding-right: 1.5rem;
}
.pr-7 {
  padding-right: 1.75rem;
}
.pr-8 {
  padding-right: 2rem;
}
.pr-\\[calc\\(15px\\+2px\\+8px\\)\\] {
  padding-right: calc(15px + 2px + 8px);
}
.pt-1 {
  padding-top: 0.25rem;
}
.pt-2 {
  padding-top: 0.5rem;
}
.pt-2\\.5 {
  padding-top: 0.625rem;
}
.pt-4 {
  padding-top: 1rem;
}
.pt-6 {
  padding-top: 1.5rem;
}
.text-left {
  text-align: left;
}
.text-center {
  text-align: center;
}
.text-right {
  text-align: right;
}
.font-inter {
  font-family:
    InterVariable,
    Inter,
    sans-serif;
}
.font-manrope {
  font-family:
    ManropeVariable,
    Manrope,
    sans-serif;
}
.font-mono {
  font-family:
    Roboto Mono,
    ui-monospace,
    SFMono-Regular,
    Menlo,
    Monaco,
    Consolas,
    "Liberation Mono",
    "Courier New",
    monospace;
}
.font-sans {
  font-family:
    InterVariable,
    Inter,
    sans-serif;
}
.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}
.text-base {
  font-size: 1rem;
  line-height: 1.5rem;
}
.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}
.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}
.text-xs {
  font-size: 0.75rem;
  line-height: 1rem;
}
.font-bold {
  font-weight: 700;
}
.font-light {
  font-weight: 300;
}
.font-medium {
  font-weight: 500;
}
.font-normal {
  font-weight: 400;
}
.font-semibold {
  font-weight: 600;
}
.uppercase {
  text-transform: uppercase;
}
.tabular-nums {
  --tw-numeric-spacing: tabular-nums;
  font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction);
}
.leading-none {
  line-height: 1;
}
.tracking-widest {
  letter-spacing: 0.1em;
}
.\\!text-ui-contrast-fg-secondary {
  color: var(--contrast-fg-secondary) !important;
}
.\\!text-ui-fg-on-color {
  color: var(--fg-on-color) !important;
}
.text-black {
  --tw-text-opacity: 1;
  color: rgb(0 0 0 / var(--tw-text-opacity, 1));
}
.text-blue-400 {
  --tw-text-opacity: 1;
  color: rgb(96 165 250 / var(--tw-text-opacity, 1));
}
.text-blue-700 {
  --tw-text-opacity: 1;
  color: rgb(29 78 216 / var(--tw-text-opacity, 1));
}
.text-current {
  color: currentColor;
}
.text-gray-400 {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity, 1));
}
.text-gray-500 {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity, 1));
}
.text-gray-600 {
  --tw-text-opacity: 1;
  color: rgb(75 85 99 / var(--tw-text-opacity, 1));
}
.text-green-600 {
  --tw-text-opacity: 1;
  color: rgb(22 163 74 / var(--tw-text-opacity, 1));
}
.text-green-700 {
  --tw-text-opacity: 1;
  color: rgb(21 128 61 / var(--tw-text-opacity, 1));
}
.text-red-500 {
  --tw-text-opacity: 1;
  color: rgb(239 68 68 / var(--tw-text-opacity, 1));
}
.text-red-600 {
  --tw-text-opacity: 1;
  color: rgb(220 38 38 / var(--tw-text-opacity, 1));
}
.text-red-800 {
  --tw-text-opacity: 1;
  color: rgb(153 27 27 / var(--tw-text-opacity, 1));
}
.text-ui-contrast-fg-primary {
  color: var(--contrast-fg-primary);
}
.text-ui-contrast-fg-secondary {
  color: var(--contrast-fg-secondary);
}
.text-ui-fg-base {
  color: var(--fg-base);
}
.text-ui-fg-disabled {
  color: var(--fg-disabled);
}
.text-ui-fg-error {
  color: var(--fg-error);
}
.text-ui-fg-muted {
  color: var(--fg-muted);
}
.text-ui-fg-on-color {
  color: var(--fg-on-color);
}
.text-ui-fg-on-inverted {
  color: var(--fg-on-inverted);
}
.text-ui-fg-subtle {
  color: var(--fg-subtle);
}
.text-ui-tag-blue-icon {
  color: var(--tag-blue-icon);
}
.text-ui-tag-blue-text {
  color: var(--tag-blue-text);
}
.text-ui-tag-green-icon {
  color: var(--tag-green-icon);
}
.text-ui-tag-green-text {
  color: var(--tag-green-text);
}
.text-ui-tag-neutral-icon {
  color: var(--tag-neutral-icon);
}
.text-ui-tag-neutral-text {
  color: var(--tag-neutral-text);
}
.text-ui-tag-orange-icon {
  color: var(--tag-orange-icon);
}
.text-ui-tag-orange-text {
  color: var(--tag-orange-text);
}
.text-ui-tag-purple-text {
  color: var(--tag-purple-text);
}
.text-ui-tag-red-icon {
  color: var(--tag-red-icon);
}
.text-ui-tag-red-text {
  color: var(--tag-red-text);
}
.text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1));
}
.text-yellow-600 {
  --tw-text-opacity: 1;
  color: rgb(202 138 4 / var(--tw-text-opacity, 1));
}
.text-yellow-800 {
  --tw-text-opacity: 1;
  color: rgb(133 77 14 / var(--tw-text-opacity, 1));
}
.underline-offset-4 {
  text-underline-offset: 4px;
}
.\\!placeholder-ui-fg-disabled::-moz-placeholder {
  color: var(--fg-disabled) !important;
}
.\\!placeholder-ui-fg-disabled::placeholder {
  color: var(--fg-disabled) !important;
}
.placeholder-ui-fg-muted::-moz-placeholder {
  color: var(--fg-muted);
}
.placeholder-ui-fg-muted::placeholder {
  color: var(--fg-muted);
}
.caret-ui-fg-base {
  caret-color: var(--fg-base);
}
.opacity-0 {
  opacity: 0;
}
.opacity-100 {
  opacity: 1;
}
.opacity-50 {
  opacity: 0.5;
}
.\\!shadow-borders-error {
  --tw-shadow: var(--borders-error) !important;
  --tw-shadow-colored: var(--borders-error) !important;
  box-shadow:
    var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000),
    var(--tw-shadow) !important;
}
.\\!shadow-buttons-neutral {
  --tw-shadow: var(--buttons-neutral) !important;
  --tw-shadow-colored: var(--buttons-neutral) !important;
  box-shadow:
    var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000),
    var(--tw-shadow) !important;
}
.shadow-\\[0_1px_1px_0\\] {
  --tw-shadow: 0 1px 1px 0;
  --tw-shadow-colored: 0 1px 1px 0 var(--tw-shadow-color);
  box-shadow:
    var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000),
    var(--tw-shadow);
}
.shadow-borders-base {
  --tw-shadow: var(--borders-base);
  --tw-shadow-colored: var(--borders-base);
  box-shadow:
    var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000),
    var(--tw-shadow);
}
.shadow-borders-error {
  --tw-shadow: var(--borders-error);
  --tw-shadow-colored: var(--borders-error);
  box-shadow:
    var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000),
    var(--tw-shadow);
}
.shadow-borders-interactive-with-active {
  --tw-shadow: var(--borders-interactive-with-active);
  --tw-shadow-colored: var(--borders-interactive-with-active);
  box-shadow:
    var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000),
    var(--tw-shadow);
}
.shadow-buttons-danger {
  --tw-shadow: var(--buttons-danger);
  --tw-shadow-colored: var(--buttons-danger);
  box-shadow:
    var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000),
    var(--tw-shadow);
}
.shadow-buttons-inverted {
  --tw-shadow: var(--buttons-inverted);
  --tw-shadow-colored: var(--buttons-inverted);
  box-shadow:
    var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000),
    var(--tw-shadow);
}
.shadow-buttons-neutral {
  --tw-shadow: var(--buttons-neutral);
  --tw-shadow-colored: var(--buttons-neutral);
  box-shadow:
    var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000),
    var(--tw-shadow);
}
.shadow-details-contrast-on-bg-interactive {
  --tw-shadow: var(--details-contrast-on-bg-interactive);
  --tw-shadow-colored: var(--details-contrast-on-bg-interactive);
  box-shadow:
    var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000),
    var(--tw-shadow);
}
.shadow-details-switch-handle {
  --tw-shadow: var(--details-switch-handle);
  --tw-shadow-colored: var(--details-switch-handle);
  box-shadow:
    var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000),
    var(--tw-shadow);
}
.shadow-elevation-card-rest {
  --tw-shadow: var(--elevation-card-rest);
  --tw-shadow-colored: var(--elevation-card-rest);
  box-shadow:
    var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000),
    var(--tw-shadow);
}
.shadow-elevation-code-block {
  --tw-shadow: var(--elevation-code-block);
  --tw-shadow-colored: var(--elevation-code-block);
  box-shadow:
    var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000),
    var(--tw-shadow);
}
.shadow-elevation-flyout {
  --tw-shadow: var(--elevation-flyout);
  --tw-shadow-colored: var(--elevation-flyout);
  box-shadow:
    var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000),
    var(--tw-shadow);
}
.shadow-elevation-modal {
  --tw-shadow: var(--elevation-modal);
  --tw-shadow-colored: var(--elevation-modal);
  box-shadow:
    var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000),
    var(--tw-shadow);
}
.shadow-elevation-tooltip {
  --tw-shadow: var(--elevation-tooltip);
  --tw-shadow-colored: var(--elevation-tooltip);
  box-shadow:
    var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000),
    var(--tw-shadow);
}
.shadow-lg {
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow:
    var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000),
    var(--tw-shadow);
}
.shadow-md {
  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
  box-shadow:
    var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000),
    var(--tw-shadow);
}
.shadow-ui-border-base {
  --tw-shadow-color: var(--border-base);
  --tw-shadow: var(--tw-shadow-colored);
}
.outline-none {
  outline: 2px solid transparent;
  outline-offset: 2px;
}
.outline {
  outline-style: solid;
}
.invert {
  --tw-invert: invert(100%);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.\\!filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow) !important;
}
.filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-colors {
  transition-property:
    color,
    background-color,
    border-color,
    text-decoration-color,
    fill,
    stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-fg {
  transition-property:
    color,
    background-color,
    border-color,
    box-shadow,
    opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-opacity {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-shadow {
  transition-property: box-shadow;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-transform {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.duration-150 {
  transition-duration: 150ms;
}
.duration-200 {
  transition-duration: 200ms;
}
.ease-linear {
  transition-timing-function: linear;
}
@keyframes enter {
  from {
    opacity: var(--tw-enter-opacity, 1);
    transform: translate3d(var(--tw-enter-translate-x, 0), var(--tw-enter-translate-y, 0), 0) scale3d(var(--tw-enter-scale, 1), var(--tw-enter-scale, 1), var(--tw-enter-scale, 1)) rotate(var(--tw-enter-rotate, 0));
  }
}
@keyframes exit {
  to {
    opacity: var(--tw-exit-opacity, 1);
    transform: translate3d(var(--tw-exit-translate-x, 0), var(--tw-exit-translate-y, 0), 0) scale3d(var(--tw-exit-scale, 1), var(--tw-exit-scale, 1), var(--tw-exit-scale, 1)) rotate(var(--tw-exit-rotate, 0));
  }
}
.animate-in {
  animation-name: enter;
  animation-duration: 150ms;
  --tw-enter-opacity: initial;
  --tw-enter-scale: initial;
  --tw-enter-rotate: initial;
  --tw-enter-translate-x: initial;
  --tw-enter-translate-y: initial;
}
.fade-in-0 {
  --tw-enter-opacity: 0;
}
.zoom-in-95 {
  --tw-enter-scale: .95;
}
.duration-150 {
  animation-duration: 150ms;
}
.duration-200 {
  animation-duration: 200ms;
}
.ease-linear {
  animation-timing-function: linear;
}
.select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  background-repeat: no-repeat;
  padding-right: 1rem;
  background-image: url('data:image/svg+xml,<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.6666 10L7.99994 13.3333L11.3333 10" stroke="%239CA3AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.6666 5.99993L7.99994 2.6666L11.3333 5.99993" stroke="%239CA3AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>');
  background-size: 16px;
  background-position: right top 50%;
  background-color: transparent;
}
.data-\\[state\\=checked\\]\\:txt-compact-small-plus[data-state=checked] {
  font-size: 0.8125rem;
  line-height: 1.25rem;
  font-weight: 500;
  font-family:
    Inter,
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    Segoe UI,
    Roboto,
    Helvetica Neue,
    Arial,
    Noto Sans,
    sans-serif,
    Apple Color Emoji,
    Segoe UI Emoji,
    Segoe UI Symbol,
    Noto Color Emoji;
}
.\\[\\&\\>\\*\\]\\:txt-compact-small-plus > * {
  font-size: 0.8125rem;
  line-height: 1.25rem;
  font-weight: 500;
  font-family:
    Inter,
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    Segoe UI,
    Roboto,
    Helvetica Neue,
    Arial,
    Noto Sans,
    sans-serif,
    Apple Color Emoji,
    Segoe UI Emoji,
    Segoe UI Symbol,
    Noto Color Emoji;
}
.\\[\\&\\>code\\]\\:code-body > code {
  font-size: 0.75rem;
  line-height: 1.125rem;
  font-weight: 400;
  font-family:
    Roboto Mono,
    ui-monospace,
    SFMono-Regular,
    Menlo,
    Monaco,
    Consolas,
    Liberation Mono,
    Courier New,
    monospace;
}
.file\\:border-0::file-selector-button {
  border-width: 0px;
}
.file\\:bg-transparent::file-selector-button {
  background-color: transparent;
}
.file\\:text-sm::file-selector-button {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.file\\:font-medium::file-selector-button {
  font-weight: 500;
}
.before\\:absolute::before {
  content: var(--tw-content);
  position: absolute;
}
.before\\:inset-0::before {
  content: var(--tw-content);
  inset: 0px;
}
.before\\:rounded-full::before {
  content: var(--tw-content);
  border-radius: 9999px;
}
.before\\:shadow-details-switch-background::before {
  content: var(--tw-content);
  --tw-shadow: var(--details-switch-background);
  --tw-shadow-colored: var(--details-switch-background);
  box-shadow:
    var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000),
    var(--tw-shadow);
}
.before\\:content-\\[\\'\\'\\]::before {
  --tw-content: "";
  content: var(--tw-content);
}
.after\\:pointer-events-none::after {
  content: var(--tw-content);
  pointer-events: none;
}
.after\\:absolute::after {
  content: var(--tw-content);
  position: absolute;
}
.after\\:inset-0::after {
  content: var(--tw-content);
  inset: 0px;
}
.after\\:inset-y-0::after {
  content: var(--tw-content);
  top: 0px;
  bottom: 0px;
}
.after\\:right-0::after {
  content: var(--tw-content);
  right: 0px;
}
.after\\:hidden::after {
  content: var(--tw-content);
  display: none;
}
.after\\:h-full::after {
  content: var(--tw-content);
  height: 100%;
}
.after\\:w-px::after {
  content: var(--tw-content);
  width: 1px;
}
.after\\:rounded-full::after {
  content: var(--tw-content);
  border-radius: 9999px;
}
.after\\:bg-transparent::after {
  content: var(--tw-content);
  background-color: transparent;
}
.after\\:bg-ui-border-base::after {
  content: var(--tw-content);
  background-color: var(--border-base);
}
.after\\:shadow-elevation-flyout::after {
  content: var(--tw-content);
  --tw-shadow: var(--elevation-flyout);
  --tw-shadow-colored: var(--elevation-flyout);
  box-shadow:
    var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000),
    var(--tw-shadow);
}
.after\\:transition-fg::after {
  content: var(--tw-content);
  transition-property:
    color,
    background-color,
    border-color,
    box-shadow,
    opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.after\\:content-\\[\\'\\'\\]::after {
  --tw-content: "";
  content: var(--tw-content);
}
.last-of-type\\:-mr-1:last-of-type {
  margin-right: -0.25rem;
}
.last-of-type\\:border-b-0:last-of-type {
  border-bottom-width: 0px;
}
.last-of-type\\:pr-4:last-of-type {
  padding-right: 1rem;
}
.invalid\\:border-ui-border-error:invalid {
  border-color: var(--border-error);
}
.invalid\\:\\!shadow-borders-error:invalid {
  --tw-shadow: var(--borders-error) !important;
  --tw-shadow-colored: var(--borders-error) !important;
  box-shadow:
    var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000),
    var(--tw-shadow) !important;
}
.invalid\\:shadow-borders-error:invalid {
  --tw-shadow: var(--borders-error);
  --tw-shadow-colored: var(--borders-error);
  box-shadow:
    var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000),
    var(--tw-shadow);
}
.focus-within\\:shadow-borders-interactive-with-active:focus-within {
  --tw-shadow: var(--borders-interactive-with-active);
  --tw-shadow-colored: var(--borders-interactive-with-active);
  box-shadow:
    var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000),
    var(--tw-shadow);
}
.hover\\:\\!bg-ui-bg-base:hover {
  background-color: var(--bg-base) !important;
}
.hover\\:bg-ui-bg-base-hover:hover {
  background-color: var(--bg-base-hover);
}
.hover\\:bg-ui-bg-field-hover:hover {
  background-color: var(--bg-field-hover);
}
.hover\\:bg-ui-bg-subtle-hover:hover {
  background-color: var(--bg-subtle-hover);
}
.hover\\:bg-ui-bg-switch-off-hover:hover {
  background-color: var(--bg-switch-off-hover);
}
.hover\\:bg-ui-button-danger-hover:hover {
  background-color: var(--button-danger-hover);
}
.hover\\:bg-ui-button-inverted-hover:hover {
  background-color: var(--button-inverted-hover);
}
.hover\\:bg-ui-button-neutral-hover:hover {
  background-color: var(--button-neutral-hover);
}
.hover\\:bg-ui-button-transparent-hover:hover {
  background-color: var(--button-transparent-hover);
}
.hover\\:bg-ui-contrast-bg-base-hover:hover {
  background-color: var(--contrast-bg-base-hover);
}
.hover\\:text-ui-fg-base:hover {
  color: var(--fg-base);
}
.hover\\:text-ui-fg-subtle:hover {
  color: var(--fg-subtle);
}
.hover\\:underline:hover {
  text-decoration-line: underline;
}
.hover\\:shadow-lg:hover {
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow:
    var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000),
    var(--tw-shadow);
}
.focus\\:z-\\[1\\]:focus {
  z-index: 1;
}
.focus\\:bg-ui-bg-component-hover:focus {
  background-color: var(--bg-component-hover);
}
.focus\\:outline-none:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}
.focus\\:ring-2:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow:
    var(--tw-ring-offset-shadow),
    var(--tw-ring-shadow),
    var(--tw-shadow, 0 0 #0000);
}
.focus\\:ring-blue-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(59 130 246 / var(--tw-ring-opacity, 1));
}
.focus\\:ring-offset-2:focus {
  --tw-ring-offset-width: 2px;
}
.focus-visible\\:border-ui-border-interactive:focus-visible {
  border-color: var(--border-interactive);
}
.focus-visible\\:bg-ui-bg-base:focus-visible {
  background-color: var(--bg-base);
}
.focus-visible\\:bg-ui-bg-component-hover:focus-visible {
  background-color: var(--bg-component-hover);
}
.focus-visible\\:bg-ui-bg-interactive:focus-visible {
  background-color: var(--bg-interactive);
}
.focus-visible\\:text-ui-fg-base:focus-visible {
  color: var(--fg-base);
}
.focus-visible\\:text-ui-fg-on-color:focus-visible {
  color: var(--fg-on-color);
}
.focus-visible\\:\\!shadow-borders-focus:focus-visible {
  --tw-shadow: var(--borders-focus) !important;
  --tw-shadow-colored: var(--borders-focus) !important;
  box-shadow:
    var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000),
    var(--tw-shadow) !important;
}
.focus-visible\\:\\!shadow-buttons-inverted-focus:focus-visible {
  --tw-shadow: var(--buttons-inverted-focus) !important;
  --tw-shadow-colored: var(--buttons-inverted-focus) !important;
  box-shadow:
    var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000),
    var(--tw-shadow) !important;
}
.focus-visible\\:shadow-borders-focus:focus-visible {
  --tw-shadow: var(--borders-focus);
  --tw-shadow-colored: var(--borders-focus);
  box-shadow:
    var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000),
    var(--tw-shadow);
}
.focus-visible\\:shadow-borders-interactive-with-active:focus-visible {
  --tw-shadow: var(--borders-interactive-with-active);
  --tw-shadow-colored: var(--borders-interactive-with-active);
  box-shadow:
    var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000),
    var(--tw-shadow);
}
.focus-visible\\:shadow-borders-interactive-with-focus:focus-visible {
  --tw-shadow: var(--borders-interactive-with-focus);
  --tw-shadow-colored: var(--borders-interactive-with-focus);
  box-shadow:
    var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000),
    var(--tw-shadow);
}
.focus-visible\\:shadow-buttons-danger-focus:focus-visible {
  --tw-shadow: var(--buttons-danger-focus);
  --tw-shadow-colored: var(--buttons-danger-focus);
  box-shadow:
    var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000),
    var(--tw-shadow);
}
.focus-visible\\:shadow-buttons-neutral-focus:focus-visible {
  --tw-shadow: var(--buttons-neutral-focus);
  --tw-shadow-colored: var(--buttons-neutral-focus);
  box-shadow:
    var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000),
    var(--tw-shadow);
}
.focus-visible\\:shadow-details-switch-background-focus:focus-visible {
  --tw-shadow: var(--details-switch-background-focus);
  --tw-shadow-colored: var(--details-switch-background-focus);
  box-shadow:
    var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000),
    var(--tw-shadow);
}
.focus-visible\\:outline-none:focus-visible {
  outline: 2px solid transparent;
  outline-offset: 2px;
}
.focus-visible\\:ring-2:focus-visible {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow:
    var(--tw-ring-offset-shadow),
    var(--tw-ring-shadow),
    var(--tw-shadow, 0 0 #0000);
}
.focus-visible\\:ring-offset-2:focus-visible {
  --tw-ring-offset-width: 2px;
}
.focus-visible\\:hover\\:bg-ui-contrast-bg-base-hover:hover:focus-visible {
  background-color: var(--contrast-bg-base-hover);
}
.active\\:bg-ui-bg-base-pressed:active {
  background-color: var(--bg-base-pressed);
}
.active\\:bg-ui-bg-component-hover:active {
  background-color: var(--bg-component-hover);
}
.active\\:bg-ui-bg-component-pressed:active {
  background-color: var(--bg-component-pressed);
}
.active\\:bg-ui-button-danger-pressed:active {
  background-color: var(--button-danger-pressed);
}
.active\\:bg-ui-button-inverted-pressed:active {
  background-color: var(--button-inverted-pressed);
}
.active\\:bg-ui-button-neutral-pressed:active {
  background-color: var(--button-neutral-pressed);
}
.active\\:bg-ui-button-transparent-pressed:active {
  background-color: var(--button-transparent-pressed);
}
.active\\:bg-ui-contrast-bg-base-pressed:active {
  background-color: var(--contrast-bg-base-pressed);
}
.active\\:text-ui-fg-base:active {
  color: var(--fg-base);
}
.focus-visible\\:active\\:bg-ui-contrast-bg-base-pressed:active:focus-visible {
  background-color: var(--contrast-bg-base-pressed);
}
.hover\\:enabled\\:bg-ui-bg-base-hover:enabled:hover {
  background-color: var(--bg-base-hover);
}
.disabled\\:pointer-events-none:disabled {
  pointer-events: none;
}
.disabled\\:cursor-not-allowed:disabled {
  cursor: not-allowed;
}
.disabled\\:border-ui-border-base:disabled {
  border-color: var(--border-base);
}
.disabled\\:\\!bg-transparent:disabled {
  background-color: transparent !important;
}
.disabled\\:\\!bg-ui-bg-disabled:disabled {
  background-color: var(--bg-disabled) !important;
}
.disabled\\:bg-ui-bg-disabled:disabled {
  background-color: var(--bg-disabled);
}
.disabled\\:\\!text-ui-fg-disabled:disabled {
  color: var(--fg-disabled) !important;
}
.disabled\\:text-ui-fg-disabled:disabled {
  color: var(--fg-disabled);
}
.disabled\\:text-ui-fg-muted:disabled {
  color: var(--fg-muted);
}
.disabled\\:placeholder-ui-fg-disabled:disabled::-moz-placeholder {
  color: var(--fg-disabled);
}
.disabled\\:placeholder-ui-fg-disabled:disabled::placeholder {
  color: var(--fg-disabled);
}
.disabled\\:opacity-50:disabled {
  opacity: 0.5;
}
.disabled\\:\\!shadow-none:disabled {
  --tw-shadow: 0 0 #0000 !important;
  --tw-shadow-colored: 0 0 #0000 !important;
  box-shadow:
    var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000),
    var(--tw-shadow) !important;
}
.disabled\\:shadow-buttons-neutral:disabled {
  --tw-shadow: var(--buttons-neutral);
  --tw-shadow-colored: var(--buttons-neutral);
  box-shadow:
    var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000),
    var(--tw-shadow);
}
.disabled\\:after\\:hidden:disabled::after {
  content: var(--tw-content);
  display: none;
}
.group\\/row:hover .group-hover\\/row\\:bg-ui-bg-base-hover {
  background-color: var(--bg-base-hover);
}
.group:hover .group-hover\\:opacity-100 {
  opacity: 1;
}
.group:focus-visible .group-focus-visible\\:\\!shadow-borders-interactive-with-focus {
  --tw-shadow: var(--borders-interactive-with-focus) !important;
  --tw-shadow-colored: var(--borders-interactive-with-focus) !important;
  box-shadow:
    var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000),
    var(--tw-shadow) !important;
}
.group:disabled .group-disabled\\:cursor-not-allowed {
  cursor: not-allowed;
}
.group\\/trigger:disabled .group-disabled\\/trigger\\:text-ui-fg-disabled {
  color: var(--fg-disabled);
}
.group:disabled .group-disabled\\:text-ui-fg-disabled {
  color: var(--fg-disabled);
}
.group:disabled .group-disabled\\:opacity-50 {
  opacity: 0.5;
}
.peer:disabled ~ .peer-disabled\\:cursor-not-allowed {
  cursor: not-allowed;
}
.peer:disabled ~ .peer-disabled\\:opacity-70 {
  opacity: 0.7;
}
.aria-\\[invalid\\=true\\]\\:border-ui-border-error[aria-invalid=true] {
  border-color: var(--border-error);
}
.aria-\\[invalid\\=true\\]\\:\\!shadow-borders-error[aria-invalid=true] {
  --tw-shadow: var(--borders-error) !important;
  --tw-shadow-colored: var(--borders-error) !important;
  box-shadow:
    var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000),
    var(--tw-shadow) !important;
}
.aria-\\[invalid\\=true\\]\\:shadow-borders-error[aria-invalid=true] {
  --tw-shadow: var(--borders-error);
  --tw-shadow-colored: var(--borders-error);
  box-shadow:
    var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000),
    var(--tw-shadow);
}
.data-\\[disabled\\]\\:pointer-events-none[data-disabled] {
  pointer-events: none;
}
.data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom] {
  --tw-translate-y: 0.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.data-\\[side\\=left\\]\\:-translate-x-1[data-side=left] {
  --tw-translate-x: -0.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.data-\\[side\\=right\\]\\:translate-x-1[data-side=right] {
  --tw-translate-x: 0.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.data-\\[side\\=top\\]\\:-translate-y-1[data-side=top] {
  --tw-translate-y: -0.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.data-\\[state\\=checked\\]\\:translate-x-3\\.5[data-state=checked] {
  --tw-translate-x: 0.875rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked] {
  --tw-translate-x: 1rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.data-\\[state\\=unchecked\\]\\:translate-x-0\\.5[data-state=unchecked] {
  --tw-translate-x: 0.125rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
@keyframes accordion-up {
  from {
    height: var(--radix-accordion-content-height);
  }
  to {
    height: 0px;
  }
}
.data-\\[state\\=closed\\]\\:animate-accordion-up[data-state=closed] {
  animation: accordion-up 0.2s ease-out;
}
@keyframes accordion-down {
  from {
    height: 0px;
  }
  to {
    height: var(--radix-accordion-content-height);
  }
}
.data-\\[state\\=open\\]\\:animate-accordion-down[data-state=open] {
  animation: accordion-down 0.2s ease-out;
}
.data-\\[state\\=active\\]\\:bg-ui-bg-base[data-state=active] {
  background-color: var(--bg-base);
}
.data-\\[state\\=checked\\]\\:bg-ui-bg-interactive[data-state=checked] {
  background-color: var(--bg-interactive);
}
.data-\\[state\\=open\\]\\:\\!bg-ui-bg-component-hover[data-state=open] {
  background-color: var(--bg-component-hover) !important;
}
.data-\\[disabled\\]\\:text-ui-fg-disabled[data-disabled] {
  color: var(--fg-disabled);
}
.data-\\[placeholder\\]\\:text-ui-fg-muted[data-placeholder] {
  color: var(--fg-muted);
}
.data-\\[state\\=active\\]\\:text-ui-fg-base[data-state=active] {
  color: var(--fg-base);
}
.data-\\[disabled\\]\\:opacity-50[data-disabled] {
  opacity: 0.5;
}
.data-\\[state\\=active\\]\\:shadow-elevation-card-rest[data-state=active] {
  --tw-shadow: var(--elevation-card-rest);
  --tw-shadow-colored: var(--elevation-card-rest);
  box-shadow:
    var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000),
    var(--tw-shadow);
}
.data-\\[state\\=checked\\]\\:shadow-borders-interactive-with-shadow[data-state=checked] {
  --tw-shadow: var(--borders-interactive-with-shadow);
  --tw-shadow-colored: var(--borders-interactive-with-shadow);
  box-shadow:
    var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000),
    var(--tw-shadow);
}
.data-\\[state\\=open\\]\\:\\!shadow-borders-interactive-with-active[data-state=open] {
  --tw-shadow: var(--borders-interactive-with-active) !important;
  --tw-shadow-colored: var(--borders-interactive-with-active) !important;
  box-shadow:
    var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000),
    var(--tw-shadow) !important;
}
.data-\\[state\\=open\\]\\:animate-in[data-state=open] {
  animation-name: enter;
  animation-duration: 150ms;
  --tw-enter-opacity: initial;
  --tw-enter-scale: initial;
  --tw-enter-rotate: initial;
  --tw-enter-translate-x: initial;
  --tw-enter-translate-y: initial;
}
.data-\\[state\\=closed\\]\\:animate-out[data-state=closed] {
  animation-name: exit;
  animation-duration: 150ms;
  --tw-exit-opacity: initial;
  --tw-exit-scale: initial;
  --tw-exit-rotate: initial;
  --tw-exit-translate-x: initial;
  --tw-exit-translate-y: initial;
}
.data-\\[state\\=closed\\]\\:fade-out-0[data-state=closed] {
  --tw-exit-opacity: 0;
}
.data-\\[state\\=open\\]\\:fade-in-0[data-state=open] {
  --tw-enter-opacity: 0;
}
.data-\\[state\\=closed\\]\\:zoom-out-95[data-state=closed] {
  --tw-exit-scale: .95;
}
.data-\\[state\\=open\\]\\:zoom-in-95[data-state=open] {
  --tw-enter-scale: .95;
}
.data-\\[side\\=bottom\\]\\:slide-in-from-top-2[data-side=bottom] {
  --tw-enter-translate-y: -0.5rem;
}
.data-\\[side\\=left\\]\\:slide-in-from-right-2[data-side=left] {
  --tw-enter-translate-x: 0.5rem;
}
.data-\\[side\\=right\\]\\:slide-in-from-left-2[data-side=right] {
  --tw-enter-translate-x: -0.5rem;
}
.data-\\[side\\=top\\]\\:slide-in-from-bottom-2[data-side=top] {
  --tw-enter-translate-y: 0.5rem;
}
.data-\\[state\\=closed\\]\\:slide-in-from-bottom-2[data-state=closed] {
  --tw-enter-translate-y: 0.5rem;
}
.data-\\[state\\=closed\\]\\:slide-out-to-left-1\\/2[data-state=closed] {
  --tw-exit-translate-x: -50%;
}
.data-\\[state\\=closed\\]\\:slide-out-to-right-1\\/2[data-state=closed] {
  --tw-exit-translate-x: 50%;
}
.data-\\[state\\=closed\\]\\:slide-out-to-top-\\[48\\%\\][data-state=closed] {
  --tw-exit-translate-y: -48%;
}
.data-\\[state\\=open\\]\\:slide-in-from-bottom-0[data-state=open] {
  --tw-enter-translate-y: 0px;
}
.data-\\[state\\=open\\]\\:slide-in-from-left-1\\/2[data-state=open] {
  --tw-enter-translate-x: -50%;
}
.data-\\[state\\=open\\]\\:slide-in-from-right-1\\/2[data-state=open] {
  --tw-enter-translate-x: 50%;
}
.data-\\[state\\=open\\]\\:slide-in-from-top-\\[48\\%\\][data-state=open] {
  --tw-enter-translate-y: -48%;
}
.group[data-state=open] .group-data-\\[state\\=open\\]\\:rotate-45 {
  --tw-rotate: 45deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.group[data-state=checked] .group-data-\\[state\\=checked\\]\\:bg-ui-bg-interactive {
  background-color: var(--bg-interactive);
}
.group[data-state=indeterminate] .group-data-\\[state\\=indeterminate\\]\\:bg-ui-bg-interactive {
  background-color: var(--bg-interactive);
}
.group\\/trigger[data-state=active] .group-data-\\[state\\=active\\]\\/trigger\\:text-ui-fg-interactive {
  color: var(--fg-interactive);
}
.group[data-state=open] .group-data-\\[state\\=open\\]\\:text-ui-fg-interactive {
  color: var(--fg-interactive);
}
.group[data-state=checked] .group-data-\\[state\\=checked\\]\\:shadow-borders-interactive-with-shadow {
  --tw-shadow: var(--borders-interactive-with-shadow);
  --tw-shadow-colored: var(--borders-interactive-with-shadow);
  box-shadow:
    var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000),
    var(--tw-shadow);
}
.group[data-state=indeterminate] .group-data-\\[state\\=indeterminate\\]\\:shadow-borders-interactive-with-shadow {
  --tw-shadow: var(--borders-interactive-with-shadow);
  --tw-shadow-colored: var(--borders-interactive-with-shadow);
  box-shadow:
    var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000),
    var(--tw-shadow);
}
.group:hover:enabled[data-state=unchecked] .group-hover\\:group-enabled\\:group-data-\\[state\\=unchecked\\]\\:bg-ui-bg-base-hover {
  background-color: var(--bg-base-hover);
}
@media (prefers-reduced-motion: reduce) {
  .motion-reduce\\:transition-none {
    transition-property: none;
  }
}
@media not all and (min-width: 640px) {
  .max-sm\\:inset-x-2 {
    left: 0.5rem;
    right: 0.5rem;
  }
  .max-sm\\:w-\\[calc\\(100\\%-16px\\)\\] {
    width: calc(100% - 16px);
  }
}
@media (min-width: 640px) {
  .sm\\:right-2 {
    right: 0.5rem;
  }
  .sm\\:max-w-\\[560px\\] {
    max-width: 560px;
  }
  .sm\\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (min-width: 768px) {
  .md\\:flex-row {
    flex-direction: row;
  }
  .md\\:flex-wrap {
    flex-wrap: wrap;
  }
  .md\\:text-sm {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
}
@media (min-width: 1024px) {
  .lg\\:mx-auto {
    margin-left: auto;
    margin-right: auto;
  }
  .lg\\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
@media (min-width: 1280px) {
  .xl\\:grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}
.\\[\\&\\:\\:--webkit-search-cancel-button\\]\\:hidden::--webkit-search-cancel-button {
  display: none;
}
.\\[\\&\\:\\:-webkit-search-cancel-button\\]\\:hidden::-webkit-search-cancel-button {
  display: none;
}
.\\[\\&\\:\\:-webkit-search-decoration\\]\\:hidden::-webkit-search-decoration {
  display: none;
}
.\\[\\&\\>\\*\\]\\:flex > * {
  display: flex;
}
.\\[\\&\\>\\*\\]\\:items-center > * {
  align-items: center;
}
.\\[\\&\\>\\*\\]\\:justify-center > * {
  justify-content: center;
}
.\\[\\&\\>code\\]\\:mx-2 > code {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}
.\\[\\&\\>code\\]\\:text-ui-contrast-fg-primary > code {
  color: var(--contrast-fg-primary);
}
.\\[\\&\\>span\\]\\:line-clamp-1 > span {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
.\\[\\&\\>svg\\]\\:text-ui-fg-subtle > svg {
  color: var(--fg-subtle);
}
.\\[\\&_div\\]\\:h-2 div {
  height: 0.5rem;
}
.\\[\\&_div\\]\\:w-2 div {
  width: 0.5rem;
}
.\\[\\&_div\\]\\:rounded-sm div {
  border-radius: 0.125rem;
}
.\\[\\&_div\\]\\:bg-ui-tag-blue-icon div {
  background-color: var(--tag-blue-icon);
}
.\\[\\&_div\\]\\:bg-ui-tag-green-icon div {
  background-color: var(--tag-green-icon);
}
.\\[\\&_div\\]\\:bg-ui-tag-neutral-icon div {
  background-color: var(--tag-neutral-icon);
}
.\\[\\&_div\\]\\:bg-ui-tag-orange-icon div {
  background-color: var(--tag-orange-icon);
}
.\\[\\&_div\\]\\:bg-ui-tag-purple-icon div {
  background-color: var(--tag-purple-icon);
}
.\\[\\&_div\\]\\:bg-ui-tag-red-icon div {
  background-color: var(--tag-red-icon);
}
.\\[\\&_path\\]\\:shadow-details-contrast-on-bg-interactive path {
  --tw-shadow: var(--details-contrast-on-bg-interactive);
  --tw-shadow-colored: var(--details-contrast-on-bg-interactive);
  box-shadow:
    var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000),
    var(--tw-shadow);
}
.\\[\\&_svg\\]\\:pointer-events-none svg {
  pointer-events: none;
}
.\\[\\&_svg\\]\\:size-4 svg {
  width: 1rem;
  height: 1rem;
}
.\\[\\&_svg\\]\\:shrink-0 svg {
  flex-shrink: 0;
}
.\\[\\&_svg\\]\\:text-ui-tag-blue-icon svg {
  color: var(--tag-blue-icon);
}
.\\[\\&_svg\\]\\:text-ui-tag-green-icon svg {
  color: var(--tag-green-icon);
}
.\\[\\&_svg\\]\\:text-ui-tag-neutral-icon svg {
  color: var(--tag-neutral-icon);
}
.\\[\\&_svg\\]\\:text-ui-tag-orange-icon svg {
  color: var(--tag-orange-icon);
}
.\\[\\&_svg\\]\\:text-ui-tag-purple-icon svg {
  color: var(--tag-purple-icon);
}
.\\[\\&_svg\\]\\:text-ui-tag-red-icon svg {
  color: var(--tag-red-icon);
}
.\\[\\&_td\\:first-child\\]\\:pl-6 td:first-child {
  padding-left: 1.5rem;
}
.\\[\\&_td\\:last-child\\]\\:pr-6 td:last-child {
  padding-right: 1.5rem;
}
.\\[\\&_th\\:first-child\\]\\:pl-6 th:first-child {
  padding-left: 1.5rem;
}
.\\[\\&_th\\:first-of-type\\]\\:w-\\[1\\%\\] th:first-of-type {
  width: 1%;
}
.\\[\\&_th\\:first-of-type\\]\\:whitespace-nowrap th:first-of-type {
  white-space: nowrap;
}
.\\[\\&_th\\:last-child\\]\\:pr-6 th:last-child {
  padding-right: 1.5rem;
}
.\\[\\&_th\\:last-of-type\\]\\:w-\\[1\\%\\] th:last-of-type {
  width: 1%;
}
.\\[\\&_th\\:last-of-type\\]\\:whitespace-nowrap th:last-of-type {
  white-space: nowrap;
}
.\\[\\&_tr\\]\\:bg-ui-bg-subtle tr {
  background-color: var(--bg-subtle);
}
.\\[\\&_tr\\]\\:hover\\:bg-ui-bg-subtle:hover tr {
  background-color: var(--bg-subtle);
}
`);

// src/components/Layout/index.tsx
import { clx as clx2 } from "@medusajs/ui";

// src/providers/region.tsx
import { createContext, useState, useEffect, useContext } from "react";

// src/lib/sdk.ts
import Medusa from "@medusajs/js-sdk";
var currentConfig = {
  backendUrl: "http://localhost:9000",
  publishableKey: void 0
};
var _a;
var sdkInstance = new Medusa({
  baseUrl: currentConfig.backendUrl,
  debug: typeof process !== "undefined" && ((_a = process.env) == null ? void 0 : _a.NODE_ENV) === "development",
  publishableKey: currentConfig.publishableKey
});
var updateSDKConfig = (config) => {
  var _a2;
  if (config.backendUrl) {
    currentConfig.backendUrl = config.backendUrl;
  }
  if (config.publishableKey) {
    currentConfig.publishableKey = config.publishableKey;
  }
  sdkInstance = new Medusa({
    baseUrl: currentConfig.backendUrl,
    debug: typeof process !== "undefined" && ((_a2 = process.env) == null ? void 0 : _a2.NODE_ENV) === "development",
    publishableKey: currentConfig.publishableKey
  });
};
var sdk = new Proxy({}, {
  get(_, prop) {
    return sdkInstance[prop];
  }
});

// src/providers/region.tsx
import { jsx } from "react/jsx-runtime";
var RegionContext = createContext(null);
var RegionProvider = ({ children }) => {
  const [regions, setRegions] = useState([]);
  const [region, setRegion] = useState();
  useEffect(() => {
    if (regions.length) {
      return;
    }
    sdk.store.region.list().then(({ regions: regions2 }) => {
      setRegions(regions2);
      setRegion(regions2[0]);
    });
  }, []);
  useEffect(() => {
    if (region) {
      localStorage.setItem("region_id", region.id);
      return;
    }
    const regionId = localStorage.getItem("region_id");
    if (!regionId) {
      if (regions.length) {
        setRegion(regions[0]);
      }
    } else {
      sdk.store.region.retrieve(regionId).then(({ region: dataRegion }) => {
        setRegion(dataRegion);
      });
    }
  }, [region, regions]);
  return /* @__PURE__ */ jsx(
    RegionContext.Provider,
    {
      value: {
        region,
        regions,
        setRegion
      },
      children
    }
  );
};
var useRegion = () => {
  const context = useContext(RegionContext);
  if (!context) {
    throw new Error("useRegion must be used within a RegionProvider");
  }
  return context;
};

// src/components/SecondCol/index.tsx
import { clx } from "@medusajs/ui";

// src/providers/cart.tsx
import { createContext as createContext2, useState as useState2, useEffect as useEffect2, useContext as useContext2 } from "react";
import { jsx as jsx2 } from "react/jsx-runtime";
var CartContext = createContext2(null);
var CartProvider = ({ children }) => {
  const [cart, setCart] = useState2();
  const { region } = useRegion();
  useEffect2(() => {
    if (!region) {
      return;
    }
    if (cart) {
      localStorage.setItem("cart_id", cart.id);
      return;
    }
    const cartId = localStorage.getItem("cart_id");
    if (!cartId) {
      refreshCart();
    } else {
      sdk.store.cart.retrieve(cartId, {
        fields: "+items.*,+items.variant.*,+items.variant.options.*,+items.variant.options.option.*,+items.variant.product.*"
      }).then(({ cart: dataCart }) => {
        setCart(dataCart);
      });
    }
  }, [cart, region]);
  useEffect2(() => {
    if (!cart || !region || cart.region_id === region.id) {
      return;
    }
    sdk.store.cart.update(cart.id, {
      region_id: region.id
    }, {
      fields: "+items.*,+items.variant.*,+items.variant.options.*,+items.variant.options.option.*,+items.variant.product.*"
    }).then(({ cart: dataCart }) => {
      setCart(dataCart);
    });
  }, [region]);
  const refreshCart = async () => {
    if (!region) {
      return;
    }
    const { cart: dataCart } = await sdk.store.cart.create({
      region_id: region.id
    });
    localStorage.setItem("cart_id", dataCart.id);
    setCart(dataCart);
    return dataCart;
  };
  const addToCart = async (variantId, quantity) => {
    let currentCart = cart;
    if (!currentCart) {
      currentCart = await refreshCart();
      if (!currentCart) {
        throw new Error("Could not create cart");
      }
    }
    const { cart: dataCart } = await sdk.store.cart.createLineItem(
      currentCart.id,
      {
        variant_id: variantId,
        quantity
      },
      {
        fields: "+items.*,+items.variant.*,+items.variant.options.*,+items.variant.options.option.*,+items.variant.product.*"
      }
    );
    setCart(dataCart);
    return dataCart;
  };
  const updateCart = async ({
    updateData,
    shippingMethodData
  }) => {
    if (!updateData && !shippingMethodData) {
      return cart;
    }
    let returnedCart = cart;
    const cartFields = {
      fields: "+items.*,+items.variant.*,+items.variant.options.*,+items.variant.options.option.*,+items.variant.product.*"
    };
    if (updateData) {
      returnedCart = (await sdk.store.cart.update(cart.id, updateData, cartFields)).cart;
    }
    if (shippingMethodData) {
      returnedCart = (await sdk.store.cart.addShippingMethod(cart.id, shippingMethodData, cartFields)).cart;
    }
    setCart(returnedCart);
    return returnedCart;
  };
  const updateItemQuantity = async (itemId, quantity) => {
    const { cart: dataCart } = await sdk.store.cart.updateLineItem(
      cart.id,
      itemId,
      {
        quantity
      },
      {
        fields: "+items.*,+items.variant.*,+items.variant.options.*,+items.variant.options.option.*,+items.variant.product.*"
      }
    );
    setCart(dataCart);
    return dataCart;
  };
  const unsetCart = () => {
    localStorage.removeItem("cart_id");
    setCart(void 0);
  };
  return /* @__PURE__ */ jsx2(
    CartContext.Provider,
    {
      value: {
        cart,
        addToCart,
        updateCart,
        refreshCart,
        updateItemQuantity,
        unsetCart
      },
      children
    }
  );
};
var useCart = () => {
  const context = useContext2(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

// src/lib/price-utils.ts
var formatPrice = (amount, currencyCode = "CAD") => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currencyCode
  }).format(amount);
};

// src/components/ui/button.tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

// src/lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/components/ui/button.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
var buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx3(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";

// src/components/SecondCol/index.tsx
import { ShoppingCart } from "lucide-react";
import { jsx as jsx4, jsxs } from "react/jsx-runtime";
var SecondCol = ({ onCheckoutClick }) => {
  var _a2;
  const { region, regions, setRegion } = useRegion();
  const { cart } = useCart();
  console.log("Cart data:", cart);
  console.log("Cart items:", cart == null ? void 0 : cart.items);
  if ((_a2 = cart == null ? void 0 : cart.items) == null ? void 0 : _a2[0]) {
    console.log("First item structure:", cart.items[0]);
    console.log("First item variant:", cart.items[0].variant);
    console.log("First item unit_price:", cart.items[0].unit_price);
    console.log("First item subtotal:", cart.items[0].subtotal);
    console.log("First item total:", cart.items[0].total);
  }
  return /* @__PURE__ */ jsxs("div", { className: clx("flex flex-0 flex-col gap-6", "w-xs"), children: [
    cart && cart.items && cart.items.length > 0 && /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg border p-4 space-y-4", children: [
      /* @__PURE__ */ jsx4("h3", { className: "font-medium text-lg font-manrope", children: "Cart Summary" }),
      /* @__PURE__ */ jsx4("div", { className: "space-y-3", children: cart.items.map((item) => {
        var _a3, _b, _c, _d, _e;
        return /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
          ((_b = (_a3 = item.variant) == null ? void 0 : _a3.product) == null ? void 0 : _b.thumbnail) && /* @__PURE__ */ jsx4(
            "img",
            {
              src: item.variant.product.thumbnail,
              alt: item.variant.product.title || "Product",
              className: "w-16 h-16 object-cover rounded-md bg-gray-100"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsx4("h4", { className: "text-sm font-medium truncate font-manrope", children: (_d = (_c = item.variant) == null ? void 0 : _c.product) == null ? void 0 : _d.title }),
            ((_e = item.variant) == null ? void 0 : _e.title) && /* @__PURE__ */ jsx4("p", { className: "text-xs text-gray-500", children: item.variant.title }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mt-1", children: [
              /* @__PURE__ */ jsxs("span", { className: "text-xs text-gray-500", children: [
                "Qty: ",
                item.quantity
              ] }),
              /* @__PURE__ */ jsx4("span", { className: "text-sm font-medium", children: formatPrice(
                item.subtotal || item.total || (item.unit_price || 0) * item.quantity,
                cart.currency_code
              ) })
            ] })
          ] })
        ] }, item.id);
      }) }),
      /* @__PURE__ */ jsxs("div", { className: "border-t pt-4 space-y-2 text-sm", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsx4("span", { children: "Subtotal:" }),
          /* @__PURE__ */ jsx4("span", { children: cart.subtotal !== void 0 && formatPrice(cart.subtotal, cart.currency_code) })
        ] }),
        cart.shipping_total !== void 0 && cart.shipping_total > 0 && /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsx4("span", { children: "Shipping:" }),
          /* @__PURE__ */ jsx4("span", { children: formatPrice(cart.shipping_total, cart.currency_code) })
        ] }),
        cart.tax_total !== void 0 && cart.tax_total > 0 && /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsx4("span", { children: "Tax:" }),
          /* @__PURE__ */ jsx4("span", { children: formatPrice(cart.tax_total, cart.currency_code) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "border-t pt-2 flex justify-between font-medium", children: [
          /* @__PURE__ */ jsx4("span", { children: "Total:" }),
          /* @__PURE__ */ jsx4("span", { children: cart.total !== void 0 && formatPrice(cart.total, cart.currency_code) })
        ] }),
        onCheckoutClick && /* @__PURE__ */ jsxs(
          Button,
          {
            onClick: onCheckoutClick,
            className: "w-full mt-4 flex items-center justify-center gap-2",
            size: "sm",
            children: [
              /* @__PURE__ */ jsx4(ShoppingCart, { className: "w-4 h-4" }),
              "Checkout"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg border p-4 space-y-3", children: [
      /* @__PURE__ */ jsx4("h3", { className: "font-medium font-manrope", children: "Settings" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx4("span", { className: "text-sm text-ui-fg-muted", children: "Region:" }),
        /* @__PURE__ */ jsxs(
          "select",
          {
            value: (region == null ? void 0 : region.id) || "",
            onChange: (e) => {
              const selectedRegion = regions.find(
                (r) => r.id === e.target.value
              );
              setRegion(selectedRegion);
            },
            className: "w-full p-2 text-sm border border-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
            children: [
              /* @__PURE__ */ jsx4("option", { value: "", children: "Select Region" }),
              regions.map((r) => /* @__PURE__ */ jsx4("option", { value: r.id, children: r.name }, r.id))
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "text-center space-y-2", children: [
      /* @__PURE__ */ jsx4("span", { className: "text-xs text-ui-fg-subtle", children: "Powered by" }),
      /* @__PURE__ */ jsx4(
        "img",
        {
          src: "https://opticag.com/img/brand/OAG_Logo_f_dark.svg",
          alt: "OpticAg",
          width: 32,
          height: 19,
          className: "mx-auto"
        }
      )
    ] })
  ] });
};

// src/lib/routing.ts
import { useCallback, useEffect as useEffect3, useState as useState3 } from "react";
var _baseRoute = "";
var setBaseRoute = (baseRoute) => {
  _baseRoute = baseRoute;
};
var getBaseRoute = () => _baseRoute;
var useSearchParams = () => {
  const [searchParams, setSearchParams] = useState3(() => {
    if (typeof window !== "undefined") {
      return new URLSearchParams(window.location.search);
    }
    return new URLSearchParams();
  });
  const updateSearchParams = useCallback((newParams) => {
    if (typeof window !== "undefined") {
      const newUrl = `${window.location.pathname}?${newParams.toString()}`;
      window.history.pushState({}, "", newUrl);
      setSearchParams(new URLSearchParams(newParams));
    }
  }, []);
  useEffect3(() => {
    const handleUrlChange = () => {
      if (typeof window !== "undefined") {
        setSearchParams(new URLSearchParams(window.location.search));
      }
    };
    if (typeof window !== "undefined") {
      window.addEventListener("popstate", handleUrlChange);
      window.addEventListener("routechange", handleUrlChange);
      return () => {
        window.removeEventListener("popstate", handleUrlChange);
        window.removeEventListener("routechange", handleUrlChange);
      };
    }
  }, []);
  return {
    get: (key) => searchParams.get(key),
    set: (key, value) => {
      const newParams = new URLSearchParams(searchParams);
      newParams.set(key, value);
      updateSearchParams(newParams);
    },
    delete: (key) => {
      const newParams = new URLSearchParams(searchParams);
      newParams.delete(key);
      updateSearchParams(newParams);
    },
    toString: () => searchParams.toString()
  };
};
var useRouter = () => {
  const [currentPath, setCurrentPath] = useState3(() => {
    if (typeof window !== "undefined") {
      return window.location.pathname;
    }
    return "/";
  });
  const push = useCallback((url) => {
    if (typeof window !== "undefined") {
      window.history.pushState({}, "", url);
      setCurrentPath(window.location.pathname);
      window.dispatchEvent(new CustomEvent("routechange", { detail: { url } }));
    }
  }, []);
  const replace = useCallback((url) => {
    if (typeof window !== "undefined") {
      window.history.replaceState({}, "", url);
      setCurrentPath(window.location.pathname);
      window.dispatchEvent(new CustomEvent("routechange", { detail: { url } }));
    }
  }, []);
  useEffect3(() => {
    const handlePopState = () => {
      if (typeof window !== "undefined") {
        setCurrentPath(window.location.pathname);
      }
    };
    const handleRouteChange = () => {
      if (typeof window !== "undefined") {
        setCurrentPath(window.location.pathname);
      }
    };
    if (typeof window !== "undefined") {
      window.addEventListener("popstate", handlePopState);
      window.addEventListener("routechange", handleRouteChange);
      return () => {
        window.removeEventListener("popstate", handlePopState);
        window.removeEventListener("routechange", handleRouteChange);
      };
    }
  }, []);
  return {
    push,
    replace,
    pathname: currentPath,
    back: () => {
      if (typeof window !== "undefined") {
        window.history.back();
      }
    },
    forward: () => {
      if (typeof window !== "undefined") {
        window.history.forward();
      }
    }
  };
};
var getProductHandle = () => {
  if (typeof window === "undefined") return null;
  const currentPath = window.location.pathname;
  const baseRoute = getBaseRoute();
  const relativePath = baseRoute && currentPath.startsWith(baseRoute) ? currentPath.substring(baseRoute.length) : currentPath;
  const pathSegments = relativePath.split("/").filter(Boolean);
  return pathSegments[pathSegments.length - 1] || null;
};
var getMarketplaceView = () => {
  const productHandle = getProductHandle();
  const searchParams = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "");
  const hasStep = searchParams.has("step");
  if (productHandle && (hasStep || searchParams.get("view") === "product")) {
    return "product";
  }
  return "catalog";
};
var _navigationInProgress = false;
var navigateToProduct = (productHandle, step) => {
  if (typeof window === "undefined") return;
  if (_navigationInProgress) {
    return;
  }
  _navigationInProgress = true;
  const baseRoute = getBaseRoute();
  const basePath = baseRoute.endsWith("/") ? baseRoute.slice(0, -1) : baseRoute;
  const url = step ? buildUrl(`${basePath}/${productHandle}`, { step }) : `${basePath}/${productHandle}?view=product`;
  console.log("navigateToProduct - final URL:", url);
  window.history.pushState({}, "", url);
  window.dispatchEvent(new CustomEvent("routechange", { detail: { url } }));
  console.log("navigateToProduct - dispatched routechange event");
  setTimeout(() => {
    _navigationInProgress = false;
  }, 200);
};
var navigateToCatalog = () => {
  if (typeof window === "undefined") return;
  if (_navigationInProgress) {
    return;
  }
  _navigationInProgress = true;
  const currentParams = new URLSearchParams(window.location.search);
  currentParams.delete("step");
  currentParams.delete("view");
  const baseRoute = getBaseRoute();
  const baseUrl = baseRoute || "/";
  const url = currentParams.toString() ? `${baseUrl}?${currentParams.toString()}` : baseUrl;
  window.history.pushState({}, "", url);
  window.dispatchEvent(new CustomEvent("routechange", { detail: { url } }));
  setTimeout(() => {
    _navigationInProgress = false;
  }, 200);
};
var buildUrl = (path, params) => {
  const url = new URL(path, typeof window !== "undefined" ? window.location.origin : "");
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.set(key, value);
    });
  }
  return url.pathname + url.search;
};

// src/components/Layout/index.tsx
import { jsx as jsx5, jsxs as jsxs2 } from "react/jsx-runtime";
function LayoutContent({ children, className }) {
  const { cart } = useCart();
  const handleCheckout = () => {
    var _a2, _b;
    if (cart && cart.items && cart.items.length > 0) {
      const firstProduct = cart.items[0];
      const productHandle = (_b = (_a2 = firstProduct.variant) == null ? void 0 : _a2.product) == null ? void 0 : _b.handle;
      if (productHandle) {
        navigateToProduct(productHandle, "address");
      }
    }
  };
  return /* @__PURE__ */ jsxs2(
    "div",
    {
      className: clx2(
        "flex flex-1 gap-2 pb-4",
        "lg:mx-auto md:flex-row flex-col mx-4"
      ),
      children: [
        /* @__PURE__ */ jsx5("div", { className: "flex flex-1 flex-col gap-2", children }),
        /* @__PURE__ */ jsx5(SecondCol, { onCheckoutClick: handleCheckout })
      ]
    }
  );
}
function Layout({ children, className }) {
  return /* @__PURE__ */ jsx5("div", { className: clx2("font-inter bg-ui-bg-subtle w-full", className), children: /* @__PURE__ */ jsx5("div", { className: clx2("flex justify-center items-start w-full"), children: /* @__PURE__ */ jsx5(RegionProvider, { children: /* @__PURE__ */ jsx5(CartProvider, { children: /* @__PURE__ */ jsx5(LayoutContent, { className, children }) }) }) }) });
}

// src/components/Marketplace/index.tsx
import { useEffect as useEffect9, useState as useState10 } from "react";

// src/components/ProductCatalog/index.tsx
import { useEffect as useEffect4, useState as useState4 } from "react";

// src/components/ui/input.tsx
import * as React2 from "react";
import { jsx as jsx6 } from "react/jsx-runtime";
var Input = React2.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsx6(
      "input",
      {
        type,
        className: cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";

// src/components/ProductCatalog/index.tsx
import { Search } from "lucide-react";
import { jsx as jsx7, jsxs as jsxs3 } from "react/jsx-runtime";
var ProductCatalog = ({
  onProductSelect,
  onCheckoutClick,
  searchPlaceholder = "Search products...",
  showSearch = true,
  showCategories = true,
  productsPerPage = 12
}) => {
  var _a2;
  const { region } = useRegion();
  const { cart } = useCart();
  const [products, setProducts] = useState4([]);
  const [categories, setCategories] = useState4([]);
  const [loading, setLoading] = useState4(true);
  const [searchQuery, setSearchQuery] = useState4("");
  const [committedSearchQuery, setCommittedSearchQuery] = useState4("");
  const [selectedCategory, setSelectedCategory] = useState4(null);
  const [currentPage, setCurrentPage] = useState4(1);
  const [hasMore, setHasMore] = useState4(false);
  const [error, setError] = useState4(null);
  useEffect4(() => {
    const fetchCategories = async () => {
      if (!showCategories) return;
      try {
        const { product_categories } = await sdk.store.category.list({
          fields: "id,name,handle,description"
        });
        setCategories(product_categories);
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };
    fetchCategories();
  }, [showCategories]);
  useEffect4(() => {
    const fetchProducts = async () => {
      if (!region) return;
      try {
        setLoading(true);
        setError(null);
        const searchParams = {
          limit: productsPerPage,
          offset: (currentPage - 1) * productsPerPage,
          fields: "id,title,handle,description,thumbnail,status,created_at,updated_at",
          region_id: region.id
        };
        if (committedSearchQuery.trim()) {
          searchParams.q = committedSearchQuery.trim();
        }
        if (selectedCategory) {
          searchParams.category_id = [selectedCategory];
        }
        const { products: fetchedProducts, count } = await sdk.store.product.list(searchParams);
        if (currentPage === 1) {
          setProducts(fetchedProducts);
        } else {
          setProducts((prev) => [...prev, ...fetchedProducts]);
        }
        setHasMore(
          fetchedProducts.length === productsPerPage && currentPage * productsPerPage < count
        );
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [
    region,
    committedSearchQuery,
    selectedCategory,
    currentPage,
    productsPerPage
  ]);
  const handleSearchInputChange = (query) => {
    setSearchQuery(query);
  };
  const handleSearch = () => {
    setCommittedSearchQuery(searchQuery);
    setCurrentPage(1);
    setProducts([]);
  };
  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1);
    setProducts([]);
  };
  const loadMore = () => {
    setCurrentPage((prev) => prev + 1);
  };
  const formatProductPrice = (variants) => {
    if (!variants || variants.length === 0) return "Price unavailable";
    const firstVariant = variants[0];
    if (!firstVariant.calculated_price || !firstVariant.calculated_price.calculated_amount)
      return "Price unavailable";
    return formatPrice(
      firstVariant.calculated_price.calculated_amount,
      firstVariant.calculated_price.currency_code || "CAD"
    );
  };
  if (loading && products.length === 0) {
    return /* @__PURE__ */ jsx7("div", { className: "flex items-center justify-center p-8", children: /* @__PURE__ */ jsxs3("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx7("div", { className: "w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" }),
      /* @__PURE__ */ jsx7("p", { className: "text-gray-600", children: "Loading products..." })
    ] }) });
  }
  if (error && products.length === 0) {
    return /* @__PURE__ */ jsxs3("div", { className: "p-6 bg-red-50 border border-red-200 rounded-lg", children: [
      /* @__PURE__ */ jsx7("h3", { className: "text-red-800 font-medium mb-2", children: "Error Loading Products" }),
      /* @__PURE__ */ jsx7("p", { className: "text-red-600", children: error }),
      /* @__PURE__ */ jsx7(
        Button,
        {
          onClick: () => window.location.reload(),
          className: "mt-4",
          variant: "secondary",
          children: "Try Again"
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsxs3("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxs3("div", { className: "space-y-4", children: [
      showSearch && /* @__PURE__ */ jsxs3("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsx7(
          Input,
          {
            type: "search",
            placeholder: searchPlaceholder,
            value: searchQuery,
            onChange: (e) => handleSearchInputChange(e.target.value),
            onKeyDown: (e) => {
              if (e.key === "Enter") handleSearch();
            },
            className: "flex-1"
          }
        ),
        /* @__PURE__ */ jsx7(
          Button,
          {
            type: "button",
            variant: "default",
            onClick: handleSearch,
            "aria-label": "Search",
            size: "icon",
            children: /* @__PURE__ */ jsx7(Search, { className: "w-5 h-5" })
          }
        )
      ] }),
      showCategories && categories.length > 0 && /* @__PURE__ */ jsxs3("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx7("h3", { className: "text-sm font-medium text-muted-foreground font-manrope", children: "Categories" }),
        /* @__PURE__ */ jsxs3("div", { className: "flex flex-wrap gap-2", children: [
          /* @__PURE__ */ jsx7(
            Button,
            {
              variant: selectedCategory === null ? "default" : "secondary",
              size: "sm",
              onClick: () => handleCategorySelect(null),
              children: "All Products"
            }
          ),
          categories.map((category) => /* @__PURE__ */ jsx7(
            Button,
            {
              variant: selectedCategory === category.id ? "default" : "secondary",
              size: "sm",
              onClick: () => handleCategorySelect(category.id),
              children: category.name
            },
            category.id
          ))
        ] })
      ] })
    ] }),
    (committedSearchQuery || selectedCategory) && /* @__PURE__ */ jsxs3("div", { className: "text-sm text-gray-600", children: [
      committedSearchQuery && `Results for "${committedSearchQuery}"`,
      committedSearchQuery && selectedCategory && " in ",
      selectedCategory && ((_a2 = categories.find((c) => c.id === selectedCategory)) == null ? void 0 : _a2.name),
      products.length > 0 && ` (${products.length} products)`
    ] }),
    products.length === 0 && !loading ? /* @__PURE__ */ jsxs3("div", { className: "text-center py-12", children: [
      /* @__PURE__ */ jsx7("div", { className: "text-gray-500 mb-4", children: /* @__PURE__ */ jsx7(
        "svg",
        {
          className: "mx-auto h-12 w-12",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
          children: /* @__PURE__ */ jsx7(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 1,
              d: "M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2 2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
            }
          )
        }
      ) }),
      /* @__PURE__ */ jsx7("h3", { className: "text-lg font-medium text-foreground mb-2 font-manrope", children: "No products found" }),
      /* @__PURE__ */ jsx7("p", { className: "text-muted-foreground", children: committedSearchQuery || selectedCategory ? "Try adjusting your search or filters" : "No products are available at the moment" })
    ] }) : /* @__PURE__ */ jsx7("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3", children: products.map((product) => /* @__PURE__ */ jsxs3(
      "div",
      {
        className: "flex flex-col flex-1 bg-white border border-[#fafafa] rounded-2xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer",
        onClick: () => onProductSelect(product.handle),
        children: [
          /* @__PURE__ */ jsx7("div", { className: "aspect-square bg-gray-100", children: product.thumbnail ? /* @__PURE__ */ jsx7(
            "img",
            {
              src: product.thumbnail,
              alt: product.title,
              className: "w-full h-full object-cover"
            }
          ) : /* @__PURE__ */ jsx7("div", { className: "w-full h-full flex items-center justify-center text-gray-400", children: /* @__PURE__ */ jsx7(
            "svg",
            {
              className: "h-16 w-16",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ jsx7(
                "path",
                {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 1,
                  d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                }
              )
            }
          ) }) }),
          /* @__PURE__ */ jsxs3("div", { className: "flex flex-1 flex-col p-4", children: [
            /* @__PURE__ */ jsx7("h3", { className: "flex-1 font-medium text-foreground mb-2 line-clamp-2 font-manrope", children: product.title }),
            /* @__PURE__ */ jsxs3("div", { className: "flex flex-col flex-1 gap-6 items-start justify-start", children: [
              /* @__PURE__ */ jsx7("span", { className: "text-lg font-semibold", children: formatProductPrice(product.variants) }),
              /* @__PURE__ */ jsx7(Button, { size: "sm", className: "w-full shadow-lg", children: "View Details" })
            ] })
          ] })
        ]
      },
      product.id
    )) }),
    hasMore && !loading && /* @__PURE__ */ jsx7("div", { className: "text-center", children: /* @__PURE__ */ jsx7(Button, { onClick: loadMore, variant: "secondary", children: "Load More Products" }) }),
    loading && products.length > 0 && /* @__PURE__ */ jsx7("div", { className: "text-center py-4", children: /* @__PURE__ */ jsx7("div", { className: "w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto" }) })
  ] });
};

// src/components/ExpressCheckout/index.tsx
import { useEffect as useEffect8, useMemo, useState as useState9 } from "react";

// src/components/ProductSelection/index.tsx
import { useEffect as useEffect5, useState as useState5 } from "react";

// src/components/ui/label.tsx
import * as React3 from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva as cva2 } from "class-variance-authority";
import { jsx as jsx8 } from "react/jsx-runtime";
var labelVariants = cva2(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
var Label = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx8(
  LabelPrimitive.Root,
  {
    ref,
    className: cn(labelVariants(), className),
    ...props
  }
));
Label.displayName = LabelPrimitive.Root.displayName;

// src/components/ui/select.tsx
import * as React4 from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { jsx as jsx9, jsxs as jsxs4 } from "react/jsx-runtime";
var Select = SelectPrimitive.Root;
var SelectValue = SelectPrimitive.Value;
var SelectTrigger = React4.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs4(
  SelectPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx9(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ jsx9(ChevronDown, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
var SelectScrollUpButton = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx9(
  SelectPrimitive.ScrollUpButton,
  {
    ref,
    className: cn(
      "flex cursor-default items-center justify-center py-1",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx9(ChevronUp, { className: "h-4 w-4" })
  }
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
var SelectScrollDownButton = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx9(
  SelectPrimitive.ScrollDownButton,
  {
    ref,
    className: cn(
      "flex cursor-default items-center justify-center py-1",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx9(ChevronDown, { className: "h-4 w-4" })
  }
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;
var SelectContent = React4.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsx9(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs4(
  SelectPrimitive.Content,
  {
    ref,
    className: cn(
      "relative z-50 max-h-[--radix-select-content-available-height] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-select-content-transform-origin]",
      position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    ),
    position,
    ...props,
    children: [
      /* @__PURE__ */ jsx9(SelectScrollUpButton, {}),
      /* @__PURE__ */ jsx9(
        SelectPrimitive.Viewport,
        {
          className: cn(
            "p-1",
            position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children
        }
      ),
      /* @__PURE__ */ jsx9(SelectScrollDownButton, {})
    ]
  }
) }));
SelectContent.displayName = SelectPrimitive.Content.displayName;
var SelectLabel = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx9(
  SelectPrimitive.Label,
  {
    ref,
    className: cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className),
    ...props
  }
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;
var SelectItem = React4.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs4(
  SelectPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx9("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx9(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx9(Check, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ jsx9(SelectPrimitive.ItemText, { children })
    ]
  }
));
SelectItem.displayName = SelectPrimitive.Item.displayName;
var SelectSeparator = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx9(
  SelectPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

// src/components/ProductSelection/index.tsx
import { jsx as jsx10, jsxs as jsxs5 } from "react/jsx-runtime";
var ProductSelection = ({
  productHandle,
  onContinue
}) => {
  var _a2;
  const [product, setProduct] = useState5(null);
  const [selectedVariant, setSelectedVariant] = useState5(null);
  const [quantity, setQuantity] = useState5(1);
  const [loading, setLoading] = useState5(true);
  const [addingToCart, setAddingToCart] = useState5(false);
  const [error, setError] = useState5(null);
  const { addToCart, cart } = useCart();
  const { region } = useRegion();
  useEffect5(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);
        const { products } = await sdk.store.product.list({
          handle: productHandle,
          fields: "id,title,handle,description,thumbnail,status,created_at,updated_at",
          region_id: region == null ? void 0 : region.id
        });
        if (!products || products.length === 0) {
          throw new Error(`Product with handle "${productHandle}" not found`);
        }
        const foundProduct = products[0];
        const { product: productData } = await sdk.store.product.retrieve(
          foundProduct.id,
          {
            fields: "+variants.*,+variants.options.*,+variants.options.option.*"
          }
        );
        setProduct(productData);
        if (productData.variants && productData.variants.length > 0) {
          setSelectedVariant(productData.variants[0]);
        }
      } catch (err) {
        console.error("Error fetching product:", err);
        setError("Failed to load product details");
      } finally {
        setLoading(false);
      }
    };
    if (productHandle && region) {
      fetchProduct();
    }
  }, [productHandle, region]);
  const handleAddToCart = async () => {
    if (!selectedVariant) {
      setError("Please select a product variant");
      return;
    }
    if (quantity < 1) {
      setError("Quantity must be at least 1");
      return;
    }
    try {
      setAddingToCart(true);
      setError(null);
      await addToCart(selectedVariant.id, quantity);
      onContinue();
    } catch (err) {
      console.error("Error adding to cart:", err);
      setError("Failed to add product to cart");
    } finally {
      setAddingToCart(false);
    }
  };
  if (loading) {
    return /* @__PURE__ */ jsx10("div", { className: "flex items-center justify-center p-8", children: /* @__PURE__ */ jsxs5("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx10("div", { className: "w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" }),
      /* @__PURE__ */ jsx10("p", { className: "text-gray-600", children: "Loading product details..." })
    ] }) });
  }
  if (error && !product) {
    return /* @__PURE__ */ jsxs5("div", { className: "p-6 bg-red-50 border border-red-200 rounded-lg", children: [
      /* @__PURE__ */ jsx10("h3", { className: "text-red-800 font-medium mb-2", children: "Error Loading Product" }),
      /* @__PURE__ */ jsx10("p", { className: "text-red-600", children: error })
    ] });
  }
  if (!product) {
    return /* @__PURE__ */ jsxs5("div", { className: "p-6 bg-yellow-50 border border-yellow-200 rounded-lg", children: [
      /* @__PURE__ */ jsx10("h3", { className: "text-yellow-800 font-medium mb-2", children: "Product Not Found" }),
      /* @__PURE__ */ jsx10("p", { className: "text-yellow-600", children: "The requested product could not be found." })
    ] });
  }
  const currentProductInCart = (_a2 = cart == null ? void 0 : cart.items) == null ? void 0 : _a2.find(
    (item) => {
      var _a3, _b;
      return ((_b = (_a3 = item.variant) == null ? void 0 : _a3.product) == null ? void 0 : _b.handle) === productHandle;
    }
  );
  return /* @__PURE__ */ jsxs5("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxs5("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxs5("div", { children: [
        /* @__PURE__ */ jsx10("h1", { className: "text-2xl font-bold text-foreground font-manrope", children: product.title }),
        product.description && /* @__PURE__ */ jsx10("p", { className: "text-muted-foreground mt-2", children: product.description })
      ] }),
      product.thumbnail && /* @__PURE__ */ jsx10("div", { className: "aspect-square w-full max-w-md mx-auto overflow-hidden rounded-lg bg-gray-100", children: /* @__PURE__ */ jsx10(
        "img",
        {
          src: product.thumbnail,
          alt: product.title,
          className: "w-full h-full object-cover"
        }
      ) }),
      product.variants && product.variants.length > 1 && /* @__PURE__ */ jsxs5("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx10(Label, { htmlFor: "variant-select", children: "Select Variant" }),
        /* @__PURE__ */ jsxs5(
          Select,
          {
            value: (selectedVariant == null ? void 0 : selectedVariant.id) || "",
            onValueChange: (value) => {
              var _a3;
              const variant = (_a3 = product.variants) == null ? void 0 : _a3.find((v) => v.id === value);
              setSelectedVariant(variant || null);
            },
            children: [
              /* @__PURE__ */ jsx10(SelectTrigger, { children: /* @__PURE__ */ jsx10(SelectValue, { placeholder: "Choose a variant" }) }),
              /* @__PURE__ */ jsx10(SelectContent, { children: product.variants.map((variant) => /* @__PURE__ */ jsx10(SelectItem, { value: variant.id, children: /* @__PURE__ */ jsxs5("div", { className: "flex justify-between items-center w-full", children: [
                /* @__PURE__ */ jsx10("span", { children: variant.title }),
                variant.calculated_price && /* @__PURE__ */ jsx10("span", { className: "ml-2 font-medium", children: formatPrice(
                  variant.calculated_price.calculated_amount || 0,
                  variant.calculated_price.currency_code || "CAD"
                ) })
              ] }) }, variant.id)) })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs5("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx10(Label, { htmlFor: "quantity", children: "Quantity" }),
        /* @__PURE__ */ jsx10(
          Input,
          {
            id: "quantity",
            type: "number",
            min: "1",
            max: (selectedVariant == null ? void 0 : selectedVariant.inventory_quantity) || 99,
            value: quantity,
            onChange: (e) => setQuantity(parseInt(e.target.value) || 1),
            className: "w-24"
          }
        ),
        (selectedVariant == null ? void 0 : selectedVariant.inventory_quantity) !== void 0 && /* @__PURE__ */ jsxs5("p", { className: "text-sm text-gray-500", children: [
          selectedVariant.inventory_quantity,
          " available"
        ] })
      ] }),
      (selectedVariant == null ? void 0 : selectedVariant.calculated_price) && /* @__PURE__ */ jsx10("div", { className: "p-4 bg-gray-50 rounded-lg", children: /* @__PURE__ */ jsxs5("div", { className: "flex justify-between items-center", children: [
        /* @__PURE__ */ jsx10("span", { className: "text-lg font-medium", children: "Price:" }),
        /* @__PURE__ */ jsx10("span", { className: "text-2xl font-bold text-green-600", children: formatPrice(
          (selectedVariant.calculated_price.calculated_amount || 0) * quantity,
          selectedVariant.calculated_price.currency_code || "CAD"
        ) })
      ] }) })
    ] }),
    error && /* @__PURE__ */ jsx10("div", { className: "p-4 bg-red-50 border border-red-200 rounded-lg", children: /* @__PURE__ */ jsx10("p", { className: "text-red-600", children: error }) }),
    currentProductInCart && /* @__PURE__ */ jsx10("div", { className: "p-4 bg-green-50 border border-green-200 rounded-lg", children: /* @__PURE__ */ jsxs5("p", { className: "text-green-700", children: [
      "\u2713 This product is already in your cart (",
      currentProductInCart.quantity,
      " items)"
    ] }) }),
    /* @__PURE__ */ jsxs5("div", { className: "flex gap-4", children: [
      /* @__PURE__ */ jsx10(
        Button,
        {
          onClick: handleAddToCart,
          disabled: !selectedVariant || addingToCart || quantity < 1,
          className: "flex-1",
          size: "lg",
          children: addingToCart ? "Adding to Cart..." : currentProductInCart ? "Update Cart" : "Add to Cart"
        }
      ),
      currentProductInCart && /* @__PURE__ */ jsx10(
        Button,
        {
          onClick: onContinue,
          variant: "secondary",
          className: "flex-1",
          size: "lg",
          children: "Continue to Checkout"
        }
      )
    ] })
  ] });
};

// src/components/AddressForm/index.tsx
import { useState as useState6 } from "react";

// src/components/ui/checkbox.tsx
import * as React5 from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check as Check2 } from "lucide-react";
import { jsx as jsx11 } from "react/jsx-runtime";
var Checkbox = React5.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx11(
  CheckboxPrimitive.Root,
  {
    ref,
    className: cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx11(
      CheckboxPrimitive.Indicator,
      {
        className: cn("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ jsx11(Check2, { className: "h-4 w-4" })
      }
    )
  }
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

// src/components/AddressForm/index.tsx
import { jsx as jsx12, jsxs as jsxs6 } from "react/jsx-runtime";
var AddressForm = ({ onContinue, onBack }) => {
  var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
  const { updateCart, cart } = useCart();
  const { region } = useRegion();
  const [shippingAddress, setShippingAddress] = useState6({
    first_name: ((_a2 = cart == null ? void 0 : cart.shipping_address) == null ? void 0 : _a2.first_name) || "",
    last_name: ((_b = cart == null ? void 0 : cart.shipping_address) == null ? void 0 : _b.last_name) || "",
    address_1: ((_c = cart == null ? void 0 : cart.shipping_address) == null ? void 0 : _c.address_1) || "",
    address_2: ((_d = cart == null ? void 0 : cart.shipping_address) == null ? void 0 : _d.address_2) || "",
    city: ((_e = cart == null ? void 0 : cart.shipping_address) == null ? void 0 : _e.city) || "",
    postal_code: ((_f = cart == null ? void 0 : cart.shipping_address) == null ? void 0 : _f.postal_code) || "",
    province: ((_g = cart == null ? void 0 : cart.shipping_address) == null ? void 0 : _g.province) || "",
    country_code: ((_h = cart == null ? void 0 : cart.shipping_address) == null ? void 0 : _h.country_code) || ((_j = (_i = region == null ? void 0 : region.countries) == null ? void 0 : _i[0]) == null ? void 0 : _j.iso_2) || "",
    phone: ((_k = cart == null ? void 0 : cart.shipping_address) == null ? void 0 : _k.phone) || "",
    company: ((_l = cart == null ? void 0 : cart.shipping_address) == null ? void 0 : _l.company) || ""
  });
  const [billingAddress, setBillingAddress] = useState6({
    first_name: ((_m = cart == null ? void 0 : cart.billing_address) == null ? void 0 : _m.first_name) || "",
    last_name: ((_n = cart == null ? void 0 : cart.billing_address) == null ? void 0 : _n.last_name) || "",
    address_1: ((_o = cart == null ? void 0 : cart.billing_address) == null ? void 0 : _o.address_1) || "",
    address_2: ((_p = cart == null ? void 0 : cart.billing_address) == null ? void 0 : _p.address_2) || "",
    city: ((_q = cart == null ? void 0 : cart.billing_address) == null ? void 0 : _q.city) || "",
    postal_code: ((_r = cart == null ? void 0 : cart.billing_address) == null ? void 0 : _r.postal_code) || "",
    province: ((_s = cart == null ? void 0 : cart.billing_address) == null ? void 0 : _s.province) || "",
    country_code: ((_t = cart == null ? void 0 : cart.billing_address) == null ? void 0 : _t.country_code) || ((_v = (_u = region == null ? void 0 : region.countries) == null ? void 0 : _u[0]) == null ? void 0 : _v.iso_2) || "",
    phone: ((_w = cart == null ? void 0 : cart.billing_address) == null ? void 0 : _w.phone) || "",
    company: ((_x = cart == null ? void 0 : cart.billing_address) == null ? void 0 : _x.company) || ""
  });
  const [sameAsShipping, setSameAsShipping] = useState6(
    (cart == null ? void 0 : cart.billing_address) ? false : true
  );
  const [loading, setLoading] = useState6(false);
  const [errors, setErrors] = useState6({});
  const validateAddress = (address, prefix = "") => {
    const addressErrors = {};
    if (!address.first_name.trim()) {
      addressErrors[`${prefix}first_name`] = "First name is required";
    }
    if (!address.last_name.trim()) {
      addressErrors[`${prefix}last_name`] = "Last name is required";
    }
    if (!address.address_1.trim()) {
      addressErrors[`${prefix}address_1`] = "Address is required";
    }
    if (!address.city.trim()) {
      addressErrors[`${prefix}city`] = "City is required";
    }
    if (!address.postal_code.trim()) {
      addressErrors[`${prefix}postal_code`] = "Postal code is required";
    }
    if (!address.country_code.trim()) {
      addressErrors[`${prefix}country_code`] = "Country is required";
    }
    return addressErrors;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    const shippingErrors = validateAddress(shippingAddress, "shipping_");
    const billingErrors = sameAsShipping ? {} : validateAddress(billingAddress, "billing_");
    const allErrors = { ...shippingErrors, ...billingErrors };
    if (Object.keys(allErrors).length > 0) {
      setErrors(allErrors);
      return;
    }
    try {
      setLoading(true);
      const finalBillingAddress = sameAsShipping ? shippingAddress : billingAddress;
      await updateCart({
        updateData: {
          shipping_address: shippingAddress,
          billing_address: finalBillingAddress
        }
      });
      console.log("AddressForm calling onContinue");
      onContinue();
    } catch (err) {
      console.error("Error updating addresses:", err);
      setErrors({ general: "Failed to save addresses. Please try again." });
    } finally {
      setLoading(false);
    }
  };
  const updateShippingAddress = (field, value) => {
    setShippingAddress((prev) => ({ ...prev, [field]: value }));
    if (errors[`shipping_${field}`]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[`shipping_${field}`];
        return newErrors;
      });
    }
  };
  const updateBillingAddress = (field, value) => {
    setBillingAddress((prev) => ({ ...prev, [field]: value }));
    if (errors[`billing_${field}`]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[`billing_${field}`];
        return newErrors;
      });
    }
  };
  const countries = (region == null ? void 0 : region.countries) || [];
  return /* @__PURE__ */ jsxs6("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
    /* @__PURE__ */ jsxs6("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx12("h2", { className: "text-xl font-semibold font-manrope", children: "Shipping Address" }),
      /* @__PURE__ */ jsxs6("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxs6("div", { children: [
          /* @__PURE__ */ jsx12(Label, { htmlFor: "shipping_first_name", children: "First Name *" }),
          /* @__PURE__ */ jsx12(
            Input,
            {
              id: "shipping_first_name",
              value: shippingAddress.first_name,
              onChange: (e) => updateShippingAddress("first_name", e.target.value),
              className: errors.shipping_first_name ? "border-red-300" : ""
            }
          ),
          errors.shipping_first_name && /* @__PURE__ */ jsx12("p", { className: "text-red-500 text-sm mt-1", children: errors.shipping_first_name })
        ] }),
        /* @__PURE__ */ jsxs6("div", { children: [
          /* @__PURE__ */ jsx12(Label, { htmlFor: "shipping_last_name", children: "Last Name *" }),
          /* @__PURE__ */ jsx12(
            Input,
            {
              id: "shipping_last_name",
              value: shippingAddress.last_name,
              onChange: (e) => updateShippingAddress("last_name", e.target.value),
              className: errors.shipping_last_name ? "border-red-300" : ""
            }
          ),
          errors.shipping_last_name && /* @__PURE__ */ jsx12("p", { className: "text-red-500 text-sm mt-1", children: errors.shipping_last_name })
        ] })
      ] }),
      /* @__PURE__ */ jsxs6("div", { children: [
        /* @__PURE__ */ jsx12(Label, { htmlFor: "shipping_company", children: "Company" }),
        /* @__PURE__ */ jsx12(
          Input,
          {
            id: "shipping_company",
            value: shippingAddress.company,
            onChange: (e) => updateShippingAddress("company", e.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ jsxs6("div", { children: [
        /* @__PURE__ */ jsx12(Label, { htmlFor: "shipping_address_1", children: "Address *" }),
        /* @__PURE__ */ jsx12(
          Input,
          {
            id: "shipping_address_1",
            value: shippingAddress.address_1,
            onChange: (e) => updateShippingAddress("address_1", e.target.value),
            className: errors.shipping_address_1 ? "border-red-300" : ""
          }
        ),
        errors.shipping_address_1 && /* @__PURE__ */ jsx12("p", { className: "text-red-500 text-sm mt-1", children: errors.shipping_address_1 })
      ] }),
      /* @__PURE__ */ jsxs6("div", { children: [
        /* @__PURE__ */ jsx12(Label, { htmlFor: "shipping_address_2", children: "Address Line 2" }),
        /* @__PURE__ */ jsx12(
          Input,
          {
            id: "shipping_address_2",
            value: shippingAddress.address_2,
            onChange: (e) => updateShippingAddress("address_2", e.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ jsxs6("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxs6("div", { children: [
          /* @__PURE__ */ jsx12(Label, { htmlFor: "shipping_city", children: "City *" }),
          /* @__PURE__ */ jsx12(
            Input,
            {
              id: "shipping_city",
              value: shippingAddress.city,
              onChange: (e) => updateShippingAddress("city", e.target.value),
              className: errors.shipping_city ? "border-red-300" : ""
            }
          ),
          errors.shipping_city && /* @__PURE__ */ jsx12("p", { className: "text-red-500 text-sm mt-1", children: errors.shipping_city })
        ] }),
        /* @__PURE__ */ jsxs6("div", { children: [
          /* @__PURE__ */ jsx12(Label, { htmlFor: "shipping_postal_code", children: "Postal Code *" }),
          /* @__PURE__ */ jsx12(
            Input,
            {
              id: "shipping_postal_code",
              value: shippingAddress.postal_code,
              onChange: (e) => updateShippingAddress("postal_code", e.target.value),
              className: errors.shipping_postal_code ? "border-red-300" : ""
            }
          ),
          errors.shipping_postal_code && /* @__PURE__ */ jsx12("p", { className: "text-red-500 text-sm mt-1", children: errors.shipping_postal_code })
        ] })
      ] }),
      /* @__PURE__ */ jsxs6("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxs6("div", { children: [
          /* @__PURE__ */ jsx12(Label, { htmlFor: "shipping_province", children: "State/Province" }),
          /* @__PURE__ */ jsx12(
            Input,
            {
              id: "shipping_province",
              value: shippingAddress.province,
              onChange: (e) => updateShippingAddress("province", e.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ jsxs6("div", { children: [
          /* @__PURE__ */ jsx12(Label, { htmlFor: "shipping_country", children: "Country *" }),
          /* @__PURE__ */ jsxs6(
            "select",
            {
              id: "shipping_country",
              value: shippingAddress.country_code,
              onChange: (e) => updateShippingAddress("country_code", e.target.value),
              className: `w-full p-2 border rounded-md ${errors.shipping_country_code ? "border-red-300" : "border-gray-300"}`,
              children: [
                /* @__PURE__ */ jsx12("option", { value: "", children: "Select Country" }),
                countries.map((country) => /* @__PURE__ */ jsx12("option", { value: country.iso_2, children: country.display_name }, country.iso_2))
              ]
            }
          ),
          errors.shipping_country_code && /* @__PURE__ */ jsx12("p", { className: "text-red-500 text-sm mt-1", children: errors.shipping_country_code })
        ] })
      ] }),
      /* @__PURE__ */ jsxs6("div", { children: [
        /* @__PURE__ */ jsx12(Label, { htmlFor: "shipping_phone", children: "Phone" }),
        /* @__PURE__ */ jsx12(
          Input,
          {
            id: "shipping_phone",
            type: "tel",
            value: shippingAddress.phone,
            onChange: (e) => updateShippingAddress("phone", e.target.value)
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs6("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxs6("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsx12(
          Checkbox,
          {
            id: "same_as_shipping",
            checked: sameAsShipping,
            onCheckedChange: (checked) => setSameAsShipping(!!checked)
          }
        ),
        /* @__PURE__ */ jsx12(Label, { htmlFor: "same_as_shipping", children: "Billing address is the same as shipping address" })
      ] }),
      !sameAsShipping && /* @__PURE__ */ jsxs6("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsx12("h3", { className: "text-lg font-medium font-manrope", children: "Billing Address" }),
        /* @__PURE__ */ jsxs6("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxs6("div", { children: [
            /* @__PURE__ */ jsx12(Label, { htmlFor: "billing_first_name", children: "First Name *" }),
            /* @__PURE__ */ jsx12(
              Input,
              {
                id: "billing_first_name",
                value: billingAddress.first_name,
                onChange: (e) => updateBillingAddress("first_name", e.target.value),
                className: errors.billing_first_name ? "border-red-300" : ""
              }
            ),
            errors.billing_first_name && /* @__PURE__ */ jsx12("p", { className: "text-red-500 text-sm mt-1", children: errors.billing_first_name })
          ] }),
          /* @__PURE__ */ jsxs6("div", { children: [
            /* @__PURE__ */ jsx12(Label, { htmlFor: "billing_last_name", children: "Last Name *" }),
            /* @__PURE__ */ jsx12(
              Input,
              {
                id: "billing_last_name",
                value: billingAddress.last_name,
                onChange: (e) => updateBillingAddress("last_name", e.target.value),
                className: errors.billing_last_name ? "border-red-300" : ""
              }
            ),
            errors.billing_last_name && /* @__PURE__ */ jsx12("p", { className: "text-red-500 text-sm mt-1", children: errors.billing_last_name })
          ] })
        ] }),
        /* @__PURE__ */ jsxs6("div", { children: [
          /* @__PURE__ */ jsx12(Label, { htmlFor: "billing_address_1", children: "Address *" }),
          /* @__PURE__ */ jsx12(
            Input,
            {
              id: "billing_address_1",
              value: billingAddress.address_1,
              onChange: (e) => updateBillingAddress("address_1", e.target.value),
              className: errors.billing_address_1 ? "border-red-300" : ""
            }
          ),
          errors.billing_address_1 && /* @__PURE__ */ jsx12("p", { className: "text-red-500 text-sm mt-1", children: errors.billing_address_1 })
        ] }),
        /* @__PURE__ */ jsxs6("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxs6("div", { children: [
            /* @__PURE__ */ jsx12(Label, { htmlFor: "billing_city", children: "City *" }),
            /* @__PURE__ */ jsx12(
              Input,
              {
                id: "billing_city",
                value: billingAddress.city,
                onChange: (e) => updateBillingAddress("city", e.target.value),
                className: errors.billing_city ? "border-red-300" : ""
              }
            ),
            errors.billing_city && /* @__PURE__ */ jsx12("p", { className: "text-red-500 text-sm mt-1", children: errors.billing_city })
          ] }),
          /* @__PURE__ */ jsxs6("div", { children: [
            /* @__PURE__ */ jsx12(Label, { htmlFor: "billing_postal_code", children: "Postal Code *" }),
            /* @__PURE__ */ jsx12(
              Input,
              {
                id: "billing_postal_code",
                value: billingAddress.postal_code,
                onChange: (e) => updateBillingAddress("postal_code", e.target.value),
                className: errors.billing_postal_code ? "border-red-300" : ""
              }
            ),
            errors.billing_postal_code && /* @__PURE__ */ jsx12("p", { className: "text-red-500 text-sm mt-1", children: errors.billing_postal_code })
          ] })
        ] }),
        /* @__PURE__ */ jsxs6("div", { children: [
          /* @__PURE__ */ jsx12(Label, { htmlFor: "billing_country", children: "Country *" }),
          /* @__PURE__ */ jsxs6(
            "select",
            {
              id: "billing_country",
              value: billingAddress.country_code,
              onChange: (e) => updateBillingAddress("country_code", e.target.value),
              className: `w-full p-2 border rounded-md ${errors.billing_country_code ? "border-red-300" : "border-gray-300"}`,
              children: [
                /* @__PURE__ */ jsx12("option", { value: "", children: "Select Country" }),
                countries.map((country) => /* @__PURE__ */ jsx12("option", { value: country.iso_2, children: country.display_name }, country.iso_2))
              ]
            }
          ),
          errors.billing_country_code && /* @__PURE__ */ jsx12("p", { className: "text-red-500 text-sm mt-1", children: errors.billing_country_code })
        ] })
      ] })
    ] }),
    errors.general && /* @__PURE__ */ jsx12("div", { className: "p-4 bg-red-50 border border-red-200 rounded-lg", children: /* @__PURE__ */ jsx12("p", { className: "text-red-600", children: errors.general }) }),
    /* @__PURE__ */ jsxs6("div", { className: "flex gap-4", children: [
      /* @__PURE__ */ jsx12(
        Button,
        {
          type: "button",
          onClick: onBack,
          variant: "secondary",
          className: "flex-1",
          disabled: loading,
          children: "Back to Product"
        }
      ),
      /* @__PURE__ */ jsx12(
        Button,
        {
          type: "submit",
          className: "flex-1",
          disabled: loading,
          children: loading ? "Saving..." : "Continue to Shipping"
        }
      )
    ] })
  ] });
};

// src/components/ShippingOptions/index.tsx
import { useEffect as useEffect6, useState as useState7 } from "react";

// src/components/ui/radio-group.tsx
import * as React6 from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";
import { jsx as jsx13 } from "react/jsx-runtime";
var RadioGroup = React6.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx13(
    RadioGroupPrimitive.Root,
    {
      className: cn("grid gap-2", className),
      ...props,
      ref
    }
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;
var RadioGroupItem = React6.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx13(
    RadioGroupPrimitive.Item,
    {
      ref,
      className: cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx13(RadioGroupPrimitive.Indicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx13(Circle, { className: "h-2.5 w-2.5 fill-current text-current" }) })
    }
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

// src/components/ShippingOptions/index.tsx
import { jsx as jsx14, jsxs as jsxs7 } from "react/jsx-runtime";
var ShippingOptions = ({
  onContinue,
  onBack
}) => {
  const { cart, updateCart } = useCart();
  const [shippingOptions, setShippingOptions] = useState7([]);
  const [selectedOptionId, setSelectedOptionId] = useState7("");
  const [loading, setLoading] = useState7(true);
  const [saving, setSaving] = useState7(false);
  const [error, setError] = useState7(null);
  useEffect6(() => {
    const fetchShippingOptions = async () => {
      if (!(cart == null ? void 0 : cart.id)) {
        setError("No cart found");
        setLoading(false);
        return;
      }
      try {
        setLoading(true);
        setError(null);
        const { shipping_options } = await sdk.store.fulfillment.listCartOptions({
          cart_id: cart.id
        });
        setShippingOptions(shipping_options);
        if (cart.shipping_methods && cart.shipping_methods.length > 0) {
          setSelectedOptionId(
            cart.shipping_methods[0].shipping_option_id || ""
          );
        }
      } catch (err) {
        console.error("Error fetching shipping options:", err);
        setError("Failed to load shipping options");
      } finally {
        setLoading(false);
      }
    };
    fetchShippingOptions();
  }, [cart == null ? void 0 : cart.id]);
  const handleContinue = async () => {
    if (!selectedOptionId) {
      setError("Please select a shipping method");
      return;
    }
    if (!(cart == null ? void 0 : cart.id)) {
      setError("No cart found");
      return;
    }
    try {
      setSaving(true);
      setError(null);
      await updateCart({
        shippingMethodData: {
          option_id: selectedOptionId
        }
      });
      onContinue();
    } catch (err) {
      console.error("Error saving shipping method:", err);
      setError("Failed to save shipping method");
    } finally {
      setSaving(false);
    }
  };
  if (loading) {
    return /* @__PURE__ */ jsx14("div", { className: "flex items-center justify-center p-8", children: /* @__PURE__ */ jsxs7("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx14("div", { className: "w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" }),
      /* @__PURE__ */ jsx14("p", { className: "text-gray-600", children: "Loading shipping options..." })
    ] }) });
  }
  if (error && shippingOptions.length === 0) {
    return /* @__PURE__ */ jsxs7("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx14("h2", { className: "text-xl font-semibold", children: "Shipping Options" }),
      /* @__PURE__ */ jsxs7("div", { className: "p-6 bg-red-50 border border-red-200 rounded-lg", children: [
        /* @__PURE__ */ jsx14("h3", { className: "text-red-800 font-medium mb-2", children: "Error Loading Shipping Options" }),
        /* @__PURE__ */ jsx14("p", { className: "text-red-600", children: error })
      ] }),
      /* @__PURE__ */ jsx14("div", { className: "flex gap-4", children: /* @__PURE__ */ jsx14(Button, { onClick: onBack, variant: "secondary", className: "flex-1", children: "Back to Address" }) })
    ] });
  }
  if (shippingOptions.length === 0) {
    return /* @__PURE__ */ jsxs7("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx14("h2", { className: "text-xl font-semibold", children: "Shipping Options" }),
      /* @__PURE__ */ jsxs7("div", { className: "p-6 bg-yellow-50 border border-yellow-200 rounded-lg", children: [
        /* @__PURE__ */ jsx14("h3", { className: "text-yellow-800 font-medium mb-2", children: "No Shipping Options Available" }),
        /* @__PURE__ */ jsx14("p", { className: "text-yellow-600", children: "No shipping options are available for your address. Please check your address or contact support." })
      ] }),
      /* @__PURE__ */ jsx14("div", { className: "flex gap-4", children: /* @__PURE__ */ jsx14(Button, { onClick: onBack, variant: "secondary", className: "flex-1", children: "Back to Address" }) })
    ] });
  }
  return /* @__PURE__ */ jsxs7("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsx14("h2", { className: "text-xl font-semibold font-manrope", children: "Choose Shipping Method" }),
    /* @__PURE__ */ jsx14("div", { className: "space-y-4", children: /* @__PURE__ */ jsx14(
      RadioGroup,
      {
        value: selectedOptionId,
        onValueChange: setSelectedOptionId,
        className: "space-y-3",
        children: shippingOptions.map((option) => {
          var _a2, _b;
          return /* @__PURE__ */ jsxs7(
            "div",
            {
              className: `relative border rounded-lg p-4 cursor-pointer transition-colors ${selectedOptionId === option.id ? "border-primary bg-accent" : "border-border hover:border-muted-foreground"}`,
              onClick: () => setSelectedOptionId(option.id),
              children: [
                /* @__PURE__ */ jsx14(
                  RadioGroupItem,
                  {
                    value: option.id,
                    id: option.id,
                    className: "absolute top-4 right-4"
                  }
                ),
                /* @__PURE__ */ jsxs7("div", { style: { paddingRight: 40 }, children: [
                  /* @__PURE__ */ jsxs7("div", { className: "flex justify-between items-start mb-2", children: [
                    /* @__PURE__ */ jsxs7("div", { children: [
                      /* @__PURE__ */ jsx14("h3", { className: "font-medium text-foreground font-manrope", children: option.name }),
                      ((_a2 = option.data) == null ? void 0 : _a2.description) && /* @__PURE__ */ jsx14("p", { className: "text-sm text-muted-foreground mt-1", children: String(option.data.description) })
                    ] }),
                    /* @__PURE__ */ jsx14("div", { className: "text-right", children: /* @__PURE__ */ jsx14("p", { className: "font-semibold text-foreground", children: option.calculated_price && option.calculated_price.calculated_amount ? formatPrice(
                      option.calculated_price.calculated_amount,
                      option.calculated_price.currency_code || "CAD"
                    ) : "Free" }) })
                  ] }),
                  ((_b = option.data) == null ? void 0 : _b.estimated_delivery) && /* @__PURE__ */ jsxs7("p", { className: "text-sm text-muted-foreground", children: [
                    "Estimated delivery: ",
                    String(option.data.estimated_delivery)
                  ] })
                ] })
              ]
            },
            option.id
          );
        })
      }
    ) }),
    cart && /* @__PURE__ */ jsxs7("div", { className: "bg-gray-50 rounded-lg p-4", children: [
      /* @__PURE__ */ jsx14("h3", { className: "font-medium mb-2 font-manrope", children: "Order Summary" }),
      /* @__PURE__ */ jsxs7("div", { className: "space-y-1 text-sm", children: [
        /* @__PURE__ */ jsxs7("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsx14("span", { children: "Subtotal:" }),
          /* @__PURE__ */ jsx14("span", { children: cart.subtotal !== void 0 && formatPrice(cart.subtotal, cart.currency_code) })
        ] }),
        selectedOptionId && /* @__PURE__ */ jsxs7("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsx14("span", { children: "Shipping:" }),
          /* @__PURE__ */ jsx14("span", { children: (() => {
            const selectedOption = shippingOptions.find(
              (opt) => opt.id === selectedOptionId
            );
            return (selectedOption == null ? void 0 : selectedOption.calculated_price) && selectedOption.calculated_price.calculated_amount ? formatPrice(
              selectedOption.calculated_price.calculated_amount,
              selectedOption.calculated_price.currency_code || "CAD"
            ) : "Free";
          })() })
        ] }),
        /* @__PURE__ */ jsxs7("div", { className: "border-t pt-1 flex justify-between font-medium", children: [
          /* @__PURE__ */ jsx14("span", { children: "Total:" }),
          /* @__PURE__ */ jsx14("span", { children: cart.total !== void 0 && formatPrice(cart.total, cart.currency_code) })
        ] })
      ] })
    ] }),
    error && /* @__PURE__ */ jsx14("div", { className: "p-4 bg-red-50 border border-red-200 rounded-lg", children: /* @__PURE__ */ jsx14("p", { className: "text-red-600", children: error }) }),
    /* @__PURE__ */ jsxs7("div", { className: "flex gap-4", children: [
      /* @__PURE__ */ jsx14(
        Button,
        {
          onClick: onBack,
          variant: "secondary",
          className: "flex-1",
          disabled: saving,
          children: "Back to Address"
        }
      ),
      /* @__PURE__ */ jsx14(
        Button,
        {
          onClick: handleContinue,
          className: "flex-1",
          disabled: !selectedOptionId || saving,
          children: saving ? "Saving..." : "Continue to Payment"
        }
      )
    ] })
  ] });
};

// src/components/Payment/index.tsx
import { useEffect as useEffect7, useState as useState8 } from "react";
import { jsx as jsx15, jsxs as jsxs8 } from "react/jsx-runtime";
var Payment = ({ onBack, onComplete }) => {
  var _a2;
  const { cart, unsetCart } = useCart();
  const [paymentProviders, setPaymentProviders] = useState8([]);
  const [selectedProviderId, setSelectedProviderId] = useState8("");
  const [loading, setLoading] = useState8(true);
  const [processing, setProcessing] = useState8(false);
  const [error, setError] = useState8(null);
  const [paymentStatus, setPaymentStatus] = useState8(null);
  useEffect7(() => {
    const fetchPaymentProviders = async () => {
      if (!(cart == null ? void 0 : cart.id)) {
        setError("No cart found");
        setLoading(false);
        return;
      }
      try {
        setLoading(true);
        setError(null);
        const { payment_providers } = await sdk.store.payment.listPaymentProviders();
        setPaymentProviders(payment_providers);
        if (payment_providers.length === 1) {
          setSelectedProviderId(payment_providers[0].id);
        }
      } catch (err) {
        console.error("Error fetching payment providers:", err);
        setError("Failed to load payment methods");
      } finally {
        setLoading(false);
      }
    };
    fetchPaymentProviders();
  }, [cart == null ? void 0 : cart.id]);
  const handleCompleteOrder = async () => {
    var _a3, _b, _c, _d, _e, _f, _g, _h, _i;
    if (!selectedProviderId) {
      setError("Please select a payment method");
      return;
    }
    if (!(cart == null ? void 0 : cart.id)) {
      setError("No cart found");
      return;
    }
    try {
      setProcessing(true);
      setError(null);
      setPaymentStatus("Initializing payment...");
      console.log("Initializing payment session for provider:", selectedProviderId);
      const paymentCollectionResponse = await sdk.store.payment.initiatePaymentSession(cart, {
        provider_id: selectedProviderId
      });
      if (!paymentCollectionResponse.payment_collection) {
        throw new Error("Failed to initialize payment session");
      }
      const paymentCollection = paymentCollectionResponse.payment_collection;
      console.log("Payment collection created:", paymentCollection.id);
      const paymentSession = (_a3 = paymentCollection.payment_sessions) == null ? void 0 : _a3.find(
        (session) => session.provider_id === selectedProviderId
      );
      if (!paymentSession) {
        throw new Error(`Payment session not found for provider: ${selectedProviderId}`);
      }
      console.log("Payment session found:", paymentSession.id);
      if (selectedProviderId === "stripe") {
        setPaymentStatus("Processing payment...");
        console.log("Using Stripe payment session:", paymentSession.id);
      }
      setPaymentStatus("Creating order...");
      console.log("Completing cart:", cart.id);
      const completeResponse = await sdk.store.cart.complete(cart.id);
      if (completeResponse.type !== "order" || !completeResponse.order) {
        throw new Error("Failed to create order from cart");
      }
      const order = completeResponse.order;
      setPaymentStatus("Order completed successfully!");
      unsetCart();
      if (onComplete) {
        onComplete(order);
      } else {
        alert(`Order completed successfully! Order ID: ${order.id}`);
      }
    } catch (err) {
      console.error("Error completing order:", err);
      if (((_b = err.response) == null ? void 0 : _b.status) === 400) {
        setError("Invalid payment information. Please check your details and try again.");
      } else if (((_c = err.response) == null ? void 0 : _c.status) === 402) {
        setError("Payment declined. Please check your payment method and try again.");
      } else if (((_d = err.response) == null ? void 0 : _d.status) === 404) {
        setError("Cart not found. Please refresh the page and try again.");
      } else if (((_e = err.response) == null ? void 0 : _e.status) === 409) {
        setError("Cart has been modified. Please refresh and try again.");
      } else if ((_f = err.message) == null ? void 0 : _f.toLowerCase().includes("payment")) {
        setError("Payment processing failed. Please verify your payment method and try again.");
      } else if ((_g = err.message) == null ? void 0 : _g.toLowerCase().includes("inventory")) {
        setError("Some items in your cart are no longer available. Please refresh and try again.");
      } else if ((_h = err.message) == null ? void 0 : _h.toLowerCase().includes("session")) {
        setError("Payment session expired. Please try again.");
      } else if ((_i = err.message) == null ? void 0 : _i.toLowerCase().includes("network")) {
        setError("Network error. Please check your connection and try again.");
      } else {
        setError(err.message || "Failed to complete order. Please try again or contact support.");
      }
    } finally {
      setProcessing(false);
      if (!error) {
        setTimeout(() => setPaymentStatus(null), 3e3);
      }
    }
  };
  if (loading) {
    return /* @__PURE__ */ jsx15("div", { className: "flex items-center justify-center p-8", children: /* @__PURE__ */ jsxs8("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx15("div", { className: "w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" }),
      /* @__PURE__ */ jsx15("p", { className: "text-gray-600", children: "Loading payment options..." })
    ] }) });
  }
  if (error && paymentProviders.length === 0) {
    return /* @__PURE__ */ jsxs8("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx15("h2", { className: "text-xl font-semibold", children: "Payment" }),
      /* @__PURE__ */ jsxs8("div", { className: "p-6 bg-red-50 border border-red-200 rounded-lg", children: [
        /* @__PURE__ */ jsx15("h3", { className: "text-red-800 font-medium mb-2", children: "Error Loading Payment Options" }),
        /* @__PURE__ */ jsx15("p", { className: "text-red-600", children: error })
      ] }),
      /* @__PURE__ */ jsx15("div", { className: "flex gap-4", children: /* @__PURE__ */ jsx15(Button, { onClick: onBack, variant: "secondary", className: "flex-1", children: "Back to Shipping" }) })
    ] });
  }
  if (paymentProviders.length === 0) {
    return /* @__PURE__ */ jsxs8("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx15("h2", { className: "text-xl font-semibold", children: "Payment" }),
      /* @__PURE__ */ jsxs8("div", { className: "p-6 bg-yellow-50 border border-yellow-200 rounded-lg", children: [
        /* @__PURE__ */ jsx15("h3", { className: "text-yellow-800 font-medium mb-2", children: "No Payment Methods Available" }),
        /* @__PURE__ */ jsx15("p", { className: "text-yellow-600", children: "No payment methods are currently available. Please contact support." })
      ] }),
      /* @__PURE__ */ jsx15("div", { className: "flex gap-4", children: /* @__PURE__ */ jsx15(Button, { onClick: onBack, variant: "secondary", className: "flex-1", children: "Back to Shipping" }) })
    ] });
  }
  return /* @__PURE__ */ jsxs8("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsx15("h2", { className: "text-xl font-semibold font-manrope", children: "Payment Method" }),
    cart && /* @__PURE__ */ jsxs8("div", { className: "bg-gray-50 rounded-lg p-6", children: [
      /* @__PURE__ */ jsx15("h3", { className: "font-medium mb-4 font-manrope", children: "Order Summary" }),
      /* @__PURE__ */ jsx15("div", { className: "space-y-2 mb-4", children: (_a2 = cart.items) == null ? void 0 : _a2.map((item) => {
        var _a3, _b, _c;
        return /* @__PURE__ */ jsxs8("div", { className: "flex justify-between text-sm", children: [
          /* @__PURE__ */ jsxs8("span", { children: [
            (_b = (_a3 = item.variant) == null ? void 0 : _a3.product) == null ? void 0 : _b.title,
            " ",
            ((_c = item.variant) == null ? void 0 : _c.title) && `(${item.variant.title})`,
            " \xD7 ",
            item.quantity
          ] }),
          /* @__PURE__ */ jsx15("span", { children: formatPrice(item.total || 0, cart.currency_code) })
        ] }, item.id);
      }) }),
      /* @__PURE__ */ jsxs8("div", { className: "space-y-1 text-sm border-t pt-4", children: [
        /* @__PURE__ */ jsxs8("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsx15("span", { children: "Subtotal:" }),
          /* @__PURE__ */ jsx15("span", { children: cart.subtotal !== void 0 && formatPrice(cart.subtotal, cart.currency_code) })
        ] }),
        /* @__PURE__ */ jsxs8("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsx15("span", { children: "Shipping:" }),
          /* @__PURE__ */ jsx15("span", { children: cart.shipping_total !== void 0 ? formatPrice(cart.shipping_total, cart.currency_code) : "Free" })
        ] }),
        cart.tax_total !== void 0 && cart.tax_total > 0 && /* @__PURE__ */ jsxs8("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsx15("span", { children: "Tax:" }),
          /* @__PURE__ */ jsx15("span", { children: formatPrice(cart.tax_total, cart.currency_code) })
        ] }),
        /* @__PURE__ */ jsxs8("div", { className: "border-t pt-2 flex justify-between font-medium text-base", children: [
          /* @__PURE__ */ jsx15("span", { children: "Total:" }),
          /* @__PURE__ */ jsx15("span", { children: cart.total !== void 0 && formatPrice(cart.total, cart.currency_code) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs8("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx15(Label, { children: "Select Payment Method" }),
      /* @__PURE__ */ jsx15(
        RadioGroup,
        {
          value: selectedProviderId,
          onValueChange: setSelectedProviderId,
          className: "space-y-3",
          children: paymentProviders.map((provider) => /* @__PURE__ */ jsxs8(
            "div",
            {
              className: `relative border rounded-lg p-4 cursor-pointer transition-colors ${selectedProviderId === provider.id ? "border-primary bg-accent" : "border-border hover:border-muted-foreground"}`,
              onClick: () => setSelectedProviderId(provider.id),
              children: [
                /* @__PURE__ */ jsx15(
                  RadioGroupItem,
                  {
                    value: provider.id,
                    id: provider.id,
                    className: "absolute top-4 right-4"
                  }
                ),
                /* @__PURE__ */ jsxs8("div", { className: "pr-10", children: [
                  /* @__PURE__ */ jsxs8("h3", { className: "font-medium text-foreground font-manrope", children: [
                    provider.id === "stripe" && "Credit/Debit Card",
                    provider.id === "paypal" && "PayPal",
                    provider.id === "manual" && "Manual Payment",
                    !["stripe", "paypal", "manual"].includes(provider.id) && provider.id.charAt(0).toUpperCase() + provider.id.slice(1)
                  ] }),
                  /* @__PURE__ */ jsxs8("p", { className: "text-sm text-muted-foreground mt-1", children: [
                    provider.id === "stripe" && "Pay securely with your credit or debit card via Stripe",
                    provider.id === "paypal" && "Pay with your PayPal account",
                    provider.id === "manual" && "Manual payment processing (for testing)",
                    !["stripe", "paypal", "manual"].includes(provider.id) && `Secure payment with ${provider.id}`
                  ] }),
                  provider.id === "stripe" && /* @__PURE__ */ jsxs8("div", { className: "flex items-center gap-2 mt-2", children: [
                    /* @__PURE__ */ jsxs8("div", { className: "flex gap-1", children: [
                      /* @__PURE__ */ jsx15("div", { className: "w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold", children: "Visa" }),
                      /* @__PURE__ */ jsx15("div", { className: "w-8 h-5 bg-red-600 rounded text-white text-xs flex items-center justify-center font-bold", children: "MC" }),
                      /* @__PURE__ */ jsx15("div", { className: "w-8 h-5 bg-blue-800 rounded text-white text-xs flex items-center justify-center font-bold", children: "AE" })
                    ] }),
                    /* @__PURE__ */ jsx15("span", { className: "text-xs text-muted-foreground", children: "and more" })
                  ] })
                ] })
              ]
            },
            provider.id
          ))
        }
      )
    ] }),
    /* @__PURE__ */ jsx15("div", { className: "bg-blue-50 border border-blue-200 rounded-lg p-4", children: /* @__PURE__ */ jsxs8("div", { className: "flex items-start", children: [
      /* @__PURE__ */ jsx15("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx15("svg", { className: "h-5 w-5 text-blue-400", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx15("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z", clipRule: "evenodd" }) }) }),
      /* @__PURE__ */ jsx15("div", { className: "ml-3", children: /* @__PURE__ */ jsx15("p", { className: "text-sm text-blue-700", children: "Your payment information is processed securely. We do not store your payment details." }) })
    ] }) }),
    error && /* @__PURE__ */ jsx15("div", { className: "p-4 bg-red-50 border border-red-200 rounded-lg", children: /* @__PURE__ */ jsx15("p", { className: "text-red-600", children: error }) }),
    paymentStatus && !error && /* @__PURE__ */ jsx15("div", { className: "p-4 bg-blue-50 border border-blue-200 rounded-lg", children: /* @__PURE__ */ jsxs8("div", { className: "flex items-center", children: [
      processing && /* @__PURE__ */ jsx15("div", { className: "w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mr-3" }),
      /* @__PURE__ */ jsx15("p", { className: "text-blue-700", children: paymentStatus })
    ] }) }),
    /* @__PURE__ */ jsxs8("div", { className: "flex gap-4", children: [
      /* @__PURE__ */ jsx15(
        Button,
        {
          onClick: onBack,
          variant: "secondary",
          className: "flex-1",
          disabled: processing,
          children: "Back to Shipping"
        }
      ),
      /* @__PURE__ */ jsx15(
        Button,
        {
          onClick: handleCompleteOrder,
          className: "flex-1",
          disabled: !selectedProviderId || processing,
          children: processing ? "Processing..." : `Complete Order (${(cart == null ? void 0 : cart.total) !== void 0 ? formatPrice(cart.total, cart.currency_code) : "..."})`
        }
      )
    ] })
  ] });
};

// src/components/ExpressCheckout/index.tsx
import { clx as clx3 } from "@medusajs/ui";
import { jsx as jsx16, jsxs as jsxs9 } from "react/jsx-runtime";
var ExpressCheckout = ({
  productHandle,
  onOrderComplete
}) => {
  const { cart } = useCart();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState9(false);
  const currentStep = searchParams.get("step");
  console.log("ExpressCheckout - currentStep from URL:", currentStep);
  const isCartValid = useMemo(() => {
    return (cart == null ? void 0 : cart.items) && cart.items.length > 0 && cart.items.some((item) => {
      var _a2, _b;
      return ((_b = (_a2 = item.variant) == null ? void 0 : _a2.product) == null ? void 0 : _b.handle) === productHandle;
    });
  }, [cart, productHandle]);
  const activeStep = currentStep === "product" || currentStep === "address" || currentStep === "shipping" || currentStep === "payment" ? currentStep : "product";
  console.log("ExpressCheckout - activeStep:", activeStep);
  const navigateToStep = (step) => {
    console.log("ExpressCheckout navigateToStep called with:", step);
    if (isLoading) {
      console.log("Navigation blocked - already loading");
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      console.log("Executing navigation to step:", step);
      if (step === "product") {
        navigateToProduct(productHandle);
      } else {
        navigateToProduct(productHandle, step);
      }
      setIsLoading(false);
    }, 100);
  };
  useEffect8(() => {
    var _a2;
    if (!cart || isLoading) {
      return;
    }
    if (activeStep !== "product" && !isCartValid) {
      navigateToStep("product");
      return;
    }
    if (activeStep === "shipping" && (!(cart == null ? void 0 : cart.shipping_address) || !(cart == null ? void 0 : cart.billing_address))) {
      navigateToStep("address");
      return;
    }
    if (activeStep === "payment") {
      if (!(cart == null ? void 0 : cart.shipping_address) || !(cart == null ? void 0 : cart.billing_address)) {
        navigateToStep("address");
        return;
      }
      if (!((_a2 = cart == null ? void 0 : cart.shipping_methods) == null ? void 0 : _a2.length)) {
        navigateToStep("shipping");
        return;
      }
    }
  }, [
    isCartValid,
    activeStep,
    cart == null ? void 0 : cart.shipping_address,
    cart == null ? void 0 : cart.billing_address,
    cart == null ? void 0 : cart.shipping_methods,
    productHandle,
    isLoading
  ]);
  const handleOrderComplete = (order) => {
    if (onOrderComplete) {
      onOrderComplete(order);
    } else {
      alert(`Order completed successfully! Order ID: ${order.id}`);
      navigateToStep("product");
    }
  };
  const renderStepContent = () => {
    switch (activeStep) {
      case "product":
        return /* @__PURE__ */ jsx16(
          ProductSelection,
          {
            productHandle,
            onContinue: () => navigateToStep("address")
          }
        );
      case "address":
        return /* @__PURE__ */ jsx16(
          AddressForm,
          {
            onContinue: () => navigateToStep("shipping"),
            onBack: () => navigateToStep("product")
          }
        );
      case "shipping":
        return /* @__PURE__ */ jsx16(
          ShippingOptions,
          {
            onContinue: () => navigateToStep("payment"),
            onBack: () => navigateToStep("address")
          }
        );
      case "payment":
        return /* @__PURE__ */ jsx16(
          Payment,
          {
            onBack: () => navigateToStep("shipping"),
            onComplete: handleOrderComplete
          }
        );
      default:
        return null;
    }
  };
  const renderStepIndicator = () => {
    const steps = ["product", "address", "shipping", "payment"];
    const stepNames = {
      product: "Product",
      address: "Address",
      shipping: "Shipping",
      payment: "Payment"
    };
    return /* @__PURE__ */ jsx16(
      "div",
      {
        className: "flex items-center justify-between",
        style: { marginBottom: 24 },
        children: steps.map((step, index) => {
          const isActive = step === activeStep;
          const isCompleted = steps.indexOf(activeStep) > index;
          return /* @__PURE__ */ jsxs9(
            "div",
            {
              className: clx3(
                "flex",
                index == steps.length - 1 ? "flex-0" : "flex-1",
                "items-center justify-between"
              ),
              children: [
                /* @__PURE__ */ jsx16(
                  "div",
                  {
                    className: `
                  w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
                  ${isActive ? "bg-gray-100 text-black font-bold" : isCompleted ? "bg-gray-100 text-gray-500" : "bg-white border border-gray-500 text-gray-500"}
                `,
                    children: isCompleted ? "\u2713" : index + 1
                  }
                ),
                /* @__PURE__ */ jsx16(
                  "span",
                  {
                    className: `p-2 text-sm ${isActive ? "font-bold border-gray-800" : "font-light"}`,
                    children: stepNames[step]
                  }
                ),
                index < steps.length - 1 && /* @__PURE__ */ jsx16("div", { className: "flex-1 h-px bg-gray-300 mx-4" })
              ]
            },
            step
          );
        })
      }
    );
  };
  return /* @__PURE__ */ jsxs9("div", { className: "max-w-2xl mx-auto p-6", children: [
    renderStepIndicator(),
    renderStepContent()
  ] });
};

// src/components/Marketplace/index.tsx
import { jsx as jsx17, jsxs as jsxs10 } from "react/jsx-runtime";
var Marketplace = ({
  initialView = "catalog",
  initialProductHandle,
  onOrderComplete,
  catalogOptions = {},
  headerContent
}) => {
  const [currentView, setCurrentView] = useState10(
    "catalog"
  );
  const [currentProductHandle, setCurrentProductHandle] = useState10("");
  const { cart } = useCart();
  useEffect9(() => {
    const urlView = getMarketplaceView();
    const urlProductHandle = getProductHandle();
    const view = urlView !== "catalog" ? urlView : initialView;
    const productHandle = urlProductHandle || initialProductHandle || "";
    setCurrentView(view);
    setCurrentProductHandle(productHandle);
  }, [initialView, initialProductHandle]);
  useEffect9(() => {
    const handleRouteChange = () => {
      const view = getMarketplaceView();
      const productHandle = getProductHandle() || "";
      setCurrentView(view);
      setCurrentProductHandle(productHandle);
    };
    if (typeof window !== "undefined") {
      window.addEventListener("routechange", handleRouteChange);
      window.addEventListener("popstate", handleRouteChange);
      return () => {
        window.removeEventListener("routechange", handleRouteChange);
        window.removeEventListener("popstate", handleRouteChange);
      };
    }
  }, []);
  const handleProductSelect = (productHandle) => {
    navigateToProduct(productHandle);
  };
  const handleBackToCatalog = () => {
    navigateToCatalog();
  };
  const handleCheckout = () => {
    var _a2, _b;
    if (cart && cart.items && cart.items.length > 0) {
      const firstProduct = cart.items[0];
      const productHandle = (_b = (_a2 = firstProduct.variant) == null ? void 0 : _a2.product) == null ? void 0 : _b.handle;
      if (productHandle) {
        navigateToProduct(productHandle, "address");
      }
    }
  };
  const handleOrderComplete = (order) => {
    if (onOrderComplete) {
      onOrderComplete(order);
    } else {
      alert(`Order completed successfully! Order ID: ${order.id}`);
      handleBackToCatalog();
    }
  };
  const renderContent = () => {
    switch (currentView) {
      case "catalog":
        return /* @__PURE__ */ jsx17(
          ProductCatalog,
          {
            onProductSelect: handleProductSelect,
            onCheckoutClick: handleCheckout,
            searchPlaceholder: catalogOptions.searchPlaceholder,
            showSearch: catalogOptions.showSearch,
            showCategories: catalogOptions.showCategories,
            productsPerPage: catalogOptions.productsPerPage
          }
        );
      case "product":
        if (!currentProductHandle) {
          return /* @__PURE__ */ jsxs10("div", { className: "text-center py-12", children: [
            /* @__PURE__ */ jsx17("div", { className: "text-gray-500 mb-4", children: /* @__PURE__ */ jsx17(
              "svg",
              {
                className: "mx-auto h-12 w-12",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /* @__PURE__ */ jsx17(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 1,
                    d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                  }
                )
              }
            ) }),
            /* @__PURE__ */ jsx17("h3", { className: "text-lg font-medium text-foreground mb-2 font-manrope", children: "Product Not Found" }),
            /* @__PURE__ */ jsx17("p", { className: "text-muted-foreground mb-4", children: "The requested product could not be found." }),
            /* @__PURE__ */ jsx17(Button, { onClick: handleBackToCatalog, children: "Browse Products" })
          ] });
        }
        return /* @__PURE__ */ jsxs10("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx17("div", { className: "flex items-center gap-2 pb-4 border-b", children: /* @__PURE__ */ jsxs10(
            Button,
            {
              variant: "secondary",
              size: "sm",
              onClick: handleBackToCatalog,
              className: "flex items-center gap-2",
              children: [
                /* @__PURE__ */ jsx17(
                  "svg",
                  {
                    className: "h-4 w-4",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /* @__PURE__ */ jsx17(
                      "path",
                      {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M15 19l-7-7 7-7"
                      }
                    )
                  }
                ),
                "Back to Catalog"
              ]
            }
          ) }),
          /* @__PURE__ */ jsx17(
            ExpressCheckout,
            {
              productHandle: currentProductHandle,
              onOrderComplete: handleOrderComplete
            }
          )
        ] });
      default:
        return null;
    }
  };
  return /* @__PURE__ */ jsx17("div", { className: "space-y-6", children: renderContent() });
};

// src/providers/fonts.tsx
import { createContext as createContext3, useContext as useContext3 } from "react";
import { jsx as jsx18 } from "react/jsx-runtime";
var FontContext = createContext3({
  fontBrand: "system-ui, -apple-system, sans-serif",
  fontUi: "system-ui, -apple-system, sans-serif"
});
var FontProvider = ({
  children,
  fontBrand = "system-ui, -apple-system, sans-serif",
  fontUi = "system-ui, -apple-system, sans-serif"
}) => {
  const value = {
    fontBrand: fontBrand || fontUi || "system-ui, -apple-system, sans-serif",
    fontUi: fontUi || "system-ui, -apple-system, sans-serif"
  };
  return /* @__PURE__ */ jsx18(FontContext.Provider, { value, children });
};
var useFont = () => {
  const context = useContext3(FontContext);
  if (!context) {
    throw new Error("useFont must be used within a FontProvider");
  }
  return context;
};

// src/providers/storefront.tsx
import { createContext as createContext4, useState as useState11, useEffect as useEffect10, useContext as useContext4 } from "react";

// src/components/ui/typography.tsx
import { jsx as jsx19 } from "react/jsx-runtime";
var BrandText = ({ children, className, style, ...props }) => {
  const { fontBrand } = useFont();
  return /* @__PURE__ */ jsx19(
    "span",
    {
      className,
      style: {
        fontFamily: fontBrand,
        ...style
      },
      ...props,
      children
    }
  );
};
var UIText = ({ children, className, style, ...props }) => {
  const { fontUi } = useFont();
  return /* @__PURE__ */ jsx19(
    "span",
    {
      className,
      style: {
        fontFamily: fontUi,
        ...style
      },
      ...props,
      children
    }
  );
};
var H1 = ({ children, className, style, ...props }) => {
  const { fontBrand } = useFont();
  return /* @__PURE__ */ jsx19(
    "h1",
    {
      className,
      style: {
        fontFamily: fontBrand,
        ...style
      },
      ...props,
      children
    }
  );
};
var H2 = ({ children, className, style, ...props }) => {
  const { fontBrand } = useFont();
  return /* @__PURE__ */ jsx19(
    "h2",
    {
      className,
      style: {
        fontFamily: fontBrand,
        ...style
      },
      ...props,
      children
    }
  );
};
var H3 = ({ children, className, style, ...props }) => {
  const { fontBrand } = useFont();
  return /* @__PURE__ */ jsx19(
    "h3",
    {
      className,
      style: {
        fontFamily: fontBrand,
        ...style
      },
      ...props,
      children
    }
  );
};
var H4 = ({ children, className, style, ...props }) => {
  const { fontBrand } = useFont();
  return /* @__PURE__ */ jsx19(
    "h4",
    {
      className,
      style: {
        fontFamily: fontBrand,
        ...style
      },
      ...props,
      children
    }
  );
};
var H5 = ({ children, className, style, ...props }) => {
  const { fontBrand } = useFont();
  return /* @__PURE__ */ jsx19(
    "h5",
    {
      className,
      style: {
        fontFamily: fontBrand,
        ...style
      },
      ...props,
      children
    }
  );
};
var H6 = ({ children, className, style, ...props }) => {
  const { fontBrand } = useFont();
  return /* @__PURE__ */ jsx19(
    "h6",
    {
      className,
      style: {
        fontFamily: fontBrand,
        ...style
      },
      ...props,
      children
    }
  );
};
var P = ({ children, className, style, ...props }) => {
  const { fontUi } = useFont();
  return /* @__PURE__ */ jsx19(
    "p",
    {
      className,
      style: {
        fontFamily: fontUi,
        ...style
      },
      ...props,
      children
    }
  );
};

// src/providers/storefront.tsx
import { jsx as jsx20, jsxs as jsxs11 } from "react/jsx-runtime";
var StorefrontContext = createContext4(null);
var StorefrontProvider = ({
  children,
  backendUrl,
  publishableKey,
  baseRoute
}) => {
  const [isReady, setIsReady] = useState11(false);
  const [capturedBaseRoute, setCapturedBaseRoute] = useState11("");
  useEffect10(() => {
    if (typeof window !== "undefined") {
      const currentBaseRoute = baseRoute || window.location.pathname;
      setCapturedBaseRoute(currentBaseRoute);
      setBaseRoute(currentBaseRoute);
    }
    updateSDKConfig({
      backendUrl,
      publishableKey
    });
    setIsReady(true);
  }, [backendUrl, publishableKey, baseRoute]);
  if (!isReady) {
    return /* @__PURE__ */ jsx20("div", { className: "flex items-center justify-center p-8", children: /* @__PURE__ */ jsxs11("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx20(H2, { className: "text-xl font-semibold text-muted-foreground mb-2", children: "Initializing Marketplace..." }),
      /* @__PURE__ */ jsx20("div", { className: "w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto" })
    ] }) });
  }
  return /* @__PURE__ */ jsx20(
    StorefrontContext.Provider,
    {
      value: {
        isReady,
        backendUrl,
        publishableKey,
        baseRoute: capturedBaseRoute
      },
      children
    }
  );
};
var useStorefront = () => {
  const context = useContext4(StorefrontContext);
  if (!context) {
    throw new Error("useStorefront must be used within a StorefrontProvider");
  }
  return context;
};

// src/components/OAGExpressMarketplace/index.tsx
import { jsx as jsx21 } from "react/jsx-runtime";
var OAGExpressMarketplace = ({
  backendUrl,
  publishableKey,
  productHandle,
  className,
  onOrderComplete,
  initialView = "catalog",
  catalogOptions,
  title = "OpticAg Marketplace",
  fontBrand,
  fontUi,
  baseRoute
}) => {
  return /* @__PURE__ */ jsx21(
    StorefrontProvider,
    {
      backendUrl,
      publishableKey,
      baseRoute,
      children: /* @__PURE__ */ jsx21(FontProvider, { fontBrand, fontUi, children: /* @__PURE__ */ jsx21(Layout, { className, children: /* @__PURE__ */ jsx21(
        Marketplace,
        {
          initialView,
          initialProductHandle: productHandle,
          onOrderComplete,
          catalogOptions
        }
      ) }) })
    }
  );
};
var OAGExpressMarketplace_default = OAGExpressMarketplace;

// src/components/Router/index.tsx
import { useEffect as useEffect11, useMemo as useMemo2 } from "react";
import { Fragment, jsx as jsx22 } from "react/jsx-runtime";
var Router = ({ handle }) => {
  const { cart } = useCart();
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentStep = searchParams.get("step");
  const isCartValid = useMemo2(() => {
    var _a2, _b;
    return ((_b = (_a2 = cart == null ? void 0 : cart.items) == null ? void 0 : _a2[0]) == null ? void 0 : _b.product_handle) === handle;
  }, [cart, handle]);
  const activeTab = currentStep === "product" || currentStep === "address" || currentStep === "shipping" || currentStep === "payment" ? currentStep : "product";
  useEffect11(() => {
    var _a2;
    if (!cart) {
      return;
    }
    if (activeTab !== "product" && !isCartValid) {
      return router.push(`/${handle}`);
    }
    if (activeTab === "shipping" && (!(cart == null ? void 0 : cart.shipping_address) || !(cart == null ? void 0 : cart.billing_address))) {
      return router.push(buildUrl(`/${handle}`, { step: "address" }));
    }
    if (activeTab === "payment" && (!(cart == null ? void 0 : cart.shipping_address) || !(cart == null ? void 0 : cart.billing_address) || !((_a2 = cart == null ? void 0 : cart.shipping_methods) == null ? void 0 : _a2.length))) {
      return router.push(buildUrl(`/${handle}`, { step: "shipping" }));
    }
  }, [isCartValid, activeTab, cart, handle, router]);
  return /* @__PURE__ */ jsx22(Fragment, {});
};
export {
  AddressForm,
  BrandText,
  CartProvider,
  ExpressCheckout,
  FontProvider,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Layout,
  Marketplace,
  OAGExpressMarketplace_default as OAGExpressMarketplace,
  P,
  Payment,
  ProductCatalog,
  ProductSelection,
  RegionProvider,
  Router,
  SecondCol,
  ShippingOptions,
  StorefrontProvider,
  UIText,
  buildUrl,
  getMarketplaceView,
  getProductHandle,
  navigateToCatalog,
  navigateToProduct,
  sdk,
  useCart,
  useFont,
  useRegion,
  useRouter,
  useSearchParams,
  useStorefront
};
