// Example of expected format
module.exports = [
  {
    /*
     * `name` - Required
     * Any string, will be used for color reference
     */
    name: 'primary',
    /*
     * `color` - Required
     * Any valid CSS color value
     */
    color: 'rebeccapurple'
    /*
     * `onColor` - Optional
     * enum: undefined | "[css color value]" | false
     *
     * If undefined, will be generated as relative tone of `color`
     * that meets contrast according to `ratioKey`
     *
     * If a color value provided, will still be checked for contrast
     * and a warning comment added if it doesn't pass
     *
     * Set to `false` to omit generation
     */
    /*
     * `ratioKey` - Optional
     * enum: undefined | "small" (default) | "large"
     *
     * Corresponds to mimimum contrast for either normal text ("small" = 4.5)
     * or large text/user interface components ("large" = 3)
     */
  },
  {
    name: 'secondary',
    color: 'rgb(95, 165, 26)'
  },
  {
    name: 'tertiary',
    color: 'hsl(245, 70%, 30%)'
  },
  {
    name: 'surface',
    color: '#f9f9f9',
    onColor: '#494848'
  },
  {
    name: 'Mangrove',
    color: '#7d7c6a'
  },
  {
    name: 'Edamame',
    color: '#a3a48a'
  },
  {
    name: 'ShallowSea',
    color: '#93b7be'
  },
  {
    name: 'MistyMorning',
    color: '#a7c7bf'
  },
  {
    name: 'Treasury',
    color: '#d6d38a'
  },
  {
    name: 'Hippy',
    color: '#eae371'
  },
  /*
 * {
  "Dried Tomatoes": "#aa5a4f",
  "Weissbier": "#b78746",
  "Money": "#77a075",
  "Waterfall": "#38aca0",
  "Aquarius": "#34afc9",
  "Glassmith": "#2eb7c7",
},
*/

  {
    name: 'UnderwaterMoonlight',
    color: '#54879f'
  },
  {
    name: 'HighSeas',
    color: '#79a6d8'
  },
  {
    name: 'PurpleIllusion',
    color: '#b2aae8'
  },
  {
    name: 'VioletHeaven',
    color: '#d1b4f3'
  },
  {
    name: 'NeonBoneyard',
    color: '#dec6f8'
  },
  {
    name: 'FoggyLove',
    color: '#e7dafc'
  },
  {
    name: 'gray-warm-1',
    color: '#fcfcfb'
  }
]
