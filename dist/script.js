const {
  dat: { GUI },
  React,
  React: { useEffect, useRef, useState, Fragment },
  ReactDOM: { render }
  // ScrollOut,
} = window;

const CONFIG = {
  COLOR: {
    HUE: 225,
    SATURATION: 40,
    LIGHTNESS: 65 },

  CARD: {
    BORDER: {
      WIDTH: 0,
      RADIUS: 10,
      ALPHA: 0.1 },

    SHADOW: {
      REACH: 30,
      BLUR: 60,
      ALPHA: 0.65 },

    SIZE: {
      HEIGHT: 200,
      WIDTH: 200 } },


  BUTTON: {
    BORDER: {
      WIDTH: 0,
      RADIUS: 10,
      ALPHA: 0.1 },

    SHADOW: {
      REACH: 5,
      BLUR: 10,
      ALPHA: 0.5 } },


  TEXT: {
    BORDER: {
      WIDTH: 2,
      RADIUS: 10,
      ALPHA: 0.1 },

    SHADOW: {
      REACH: 4,
      BLUR: 8,
      ALPHA: 0.5 } },


  RANGE: {
    BORDER: {
      RADIUS: 36 },

    SHADOW: {
      REACH: 4,
      BLUR: 8,
      ALPHA: 0.5 },

    TRACK: {
      ALPHA: 0.2 } },


  CHECKBOX: {
    BORDER: {
      RADIUS: 36 },

    SHADOW: {
      REACH: 4,
      BLUR: 8,
      ALPHA: 0.5 } },


  RADIO: {
    BORDER: {
      WIDTH: 0,
      RADIUS: 36 },

    SHADOW: {
      REACH: 4,
      BLUR: 8,
      ALPHA: 0.5 } } };




const BOUNDS = {
  COLOR: {
    HUE: [0, 360, 1],
    SATURATION: [0, 100, 1],
    LIGHTNESS: [0, 100, 1] },

  CARD: {
    BORDER: {
      WIDTH: [0, 10, 1],
      ALPHA: [0, 1, 0.01],
      RADIUS: [0, 50, 1] },

    SHADOW: {
      BLUR: [0, 100, 1],
      REACH: [0, 50, 1],
      ALPHA: [0.2, 1, 0.01] },

    SIZE: {
      HEIGHT: [50, 300, 1],
      WIDTH: [50, 300, 1] } },


  BUTTON: {
    BORDER: {
      WIDTH: [0, 10, 1],
      ALPHA: [0, 1, 0.01],
      RADIUS: [0, 50, 1] },

    SHADOW: {
      BLUR: [0, 100, 1],
      REACH: [0, 50, 1],
      ALPHA: [0.2, 1, 0.01] } },


  TEXT: {
    BORDER: {
      WIDTH: [0, 10, 1],
      RADIUS: [0, 40, 1],
      ALPHA: [0, 1, 0.01] },

    SHADOW: {
      REACH: [0, 20, 1],
      BLUR: [0, 40, 1],
      ALPHA: [0, 1, 0.1] } },


  RANGE: {
    BORDER: {
      RADIUS: [0, 36, 1] },

    SHADOW: {
      REACH: [0, 20, 1],
      BLUR: [0, 40, 1],
      ALPHA: [0, 1, 0.1] },

    TRACK: {
      ALPHA: [0, 1, 0.01] } },


  CHECKBOX: {
    BORDER: {
      RADIUS: [0, 36, 1] },

    SHADOW: {
      REACH: [0, 20, 1],
      BLUR: [0, 40, 1],
      ALPHA: [0, 1, 0.1] } },


  RADIO: {
    BORDER: {
      WIDTH: [0, 10, 1],
      RADIUS: [0, 36, 1] },

    SHADOW: {
      REACH: [0, 20, 1],
      BLUR: [0, 40, 1],
      ALPHA: [0, 1, 0.1] } } };




const CARD_ID = '#cards';
const BUTTON_ID = '#buttons';
const TEXT_ID = '#texts';
const RANGE_ID = '#ranges';
const CHECKBOX_ID = '#checkboxes';
const RADIO_ID = '#radios';
const IDS = [CARD_ID, BUTTON_ID, TEXT_ID, RANGE_ID, CHECKBOX_ID, RADIO_ID];
const App = () => {
  const [model, setModel] = useState(0);
  const [active, setActive] = useState(window.location.hash || IDS[0]);
  const [next, setNext] = useState(IDS[IDS.indexOf(active) + 1]);
  const [prev, setPrev] = useState(IDS[IDS.indexOf(active) - 1]);
  const datRef = useRef(null);

  useEffect(() => {
    if (!datRef.current) {
      datRef.current = new GUI({ name: 'Neumorphic Playground' });
      const digest = (CONFIG_OBJECT, BOUNDS_OBJECT, FOLDER) => {
        for (const category in BOUNDS_OBJECT) {
          if (Array.isArray(BOUNDS_OBJECT[category])) {
            FOLDER.add(
            CONFIG_OBJECT,
            category,
            BOUNDS_OBJECT[category][0],
            BOUNDS_OBJECT[category][1],
            BOUNDS_OBJECT[category][2] ? BOUNDS_OBJECT[category][2] : 1).
            onChange(() => setModel(new Date().getTime()));
          } else {
            const NEW_FOLDER = FOLDER ?
            FOLDER.addFolder(category) :
            datRef.current.addFolder(category);
            digest(CONFIG_OBJECT[category], BOUNDS_OBJECT[category], NEW_FOLDER);
          }
        }
      };
      digest(CONFIG, BOUNDS);
    }
    // Set HSL on document
    document.documentElement.style.setProperty('--hue', CONFIG.COLOR.HUE);
    document.documentElement.style.setProperty(
    '--saturation',
    CONFIG.COLOR.SATURATION);

    document.documentElement.style.setProperty(
    '--lightness',
    CONFIG.COLOR.LIGHTNESS);

  }, [model]);

  // Set up scroll out
  useEffect(() => {
    ScrollOut({
      scrollingElement: document.querySelector('main'),
      targets: 'section',
      threshold: 0.9,
      onShown: element => {
        console.log(element);
        setActive(`#${element.getAttribute('id')}`);
      } });

  }, []);

  useEffect(() => {
    setNext(IDS[IDS.indexOf(active) + 1]);
    setPrev(IDS[IDS.indexOf(active) - 1]);
  }, [active]);

  return /*#__PURE__*/(
    React.createElement(Fragment, null, /*#__PURE__*/
    React.createElement("main", null, /*#__PURE__*/
    React.createElement("section", {
      id: "cards",
      style: {
        '--neumorphic-reach': CONFIG.CARD.SHADOW.REACH,
        '--neumorphic-blur': CONFIG.CARD.SHADOW.BLUR,
        '--neumorphic-intensity': CONFIG.CARD.SHADOW.ALPHA,
        '--border-width': CONFIG.CARD.BORDER.WIDTH,
        '--border-intensity': CONFIG.CARD.BORDER.ALPHA,
        '--border-radius': CONFIG.CARD.BORDER.RADIUS,
        '--height': CONFIG.CARD.SIZE.HEIGHT,
        '--width': CONFIG.CARD.SIZE.WIDTH } }, /*#__PURE__*/

    React.createElement("article", null), /*#__PURE__*/
    React.createElement("h1", null, "Card")), /*#__PURE__*/

    React.createElement("section", {
      id: "buttons",
      style: {
        '--neumorphic-reach': CONFIG.BUTTON.SHADOW.REACH,
        '--neumorphic-blur': CONFIG.BUTTON.SHADOW.BLUR,
        '--neumorphic-intensity': CONFIG.BUTTON.SHADOW.ALPHA,
        '--border-width': CONFIG.BUTTON.BORDER.WIDTH,
        '--border-intensity': CONFIG.BUTTON.BORDER.ALPHA,
        '--border-radius': CONFIG.BUTTON.BORDER.RADIUS,
        '--margin': Math.max(
        CONFIG.BUTTON.SHADOW.REACH,
        CONFIG.BUTTON.SHADOW.BLUR) } }, /*#__PURE__*/


    React.createElement("div", { className: "buttons" }, /*#__PURE__*/
    React.createElement("button", null, "Click"), /*#__PURE__*/
    React.createElement("button", null, "Click"), /*#__PURE__*/
    React.createElement("button", null, "Click")), /*#__PURE__*/

    React.createElement("h1", null, "Button")), /*#__PURE__*/

    React.createElement("section", {
      id: "texts",
      style: {
        '--neumorphic-reach': CONFIG.TEXT.SHADOW.REACH,
        '--neumorphic-blur': CONFIG.TEXT.SHADOW.BLUR,
        '--neumorphic-intensity': CONFIG.TEXT.SHADOW.ALPHA,
        '--border-width': CONFIG.TEXT.BORDER.WIDTH,
        '--border-intensity': CONFIG.TEXT.BORDER.ALPHA,
        '--border-radius': CONFIG.TEXT.BORDER.RADIUS,
        '--margin': 6 } }, /*#__PURE__*/

    React.createElement("div", { className: "texts" }, /*#__PURE__*/
    React.createElement("div", { className: "input" }, /*#__PURE__*/
    React.createElement("label", { htmlFor: "text-1" }, "Label"), /*#__PURE__*/
    React.createElement("input", { id: "text-1", type: "text" })), /*#__PURE__*/

    React.createElement("div", { className: "input" }, /*#__PURE__*/
    React.createElement("label", { htmlFor: "text-2" }, "Label"), /*#__PURE__*/
    React.createElement("input", { id: "text-2", type: "text" })), /*#__PURE__*/

    React.createElement("div", { className: "input" }, /*#__PURE__*/
    React.createElement("label", { htmlFor: "text-3" }, "Label"), /*#__PURE__*/
    React.createElement("input", { id: "text-3", type: "text" }))), /*#__PURE__*/


    React.createElement("h1", null, "Text")), /*#__PURE__*/

    React.createElement("section", {
      id: "ranges",
      style: {
        '--neumorphic-reach': CONFIG.RANGE.SHADOW.REACH,
        '--neumorphic-blur': CONFIG.RANGE.SHADOW.BLUR,
        '--neumorphic-intensity': CONFIG.RANGE.SHADOW.ALPHA,
        '--track-intensity': CONFIG.RANGE.TRACK.ALPHA,
        '--border-width': CONFIG.RANGE.BORDER.WIDTH,
        '--border-intensity': CONFIG.RANGE.BORDER.ALPHA,
        '--border-radius': CONFIG.RANGE.BORDER.RADIUS,
        '--margin': 15 } }, /*#__PURE__*/

    React.createElement("div", { className: "ranges" }, /*#__PURE__*/
    React.createElement("div", { className: "input" }, /*#__PURE__*/
    React.createElement("label", { htmlFor: "range-1" }, "Label"), /*#__PURE__*/
    React.createElement("input", {
      id: "range-1",
      type: "range",
      min: "0",
      max: "10",
      step: "1",
      defaultValue: "2" })), /*#__PURE__*/


    React.createElement("div", { className: "input" }, /*#__PURE__*/
    React.createElement("label", { htmlFor: "range-2" }, "Label"), /*#__PURE__*/
    React.createElement("input", {
      id: "range-2",
      type: "range",
      min: "0",
      max: "10",
      step: "1",
      defaultValue: "4" })), /*#__PURE__*/


    React.createElement("div", { className: "input" }, /*#__PURE__*/
    React.createElement("label", { htmlFor: "range-3" }, "Label"), /*#__PURE__*/
    React.createElement("input", {
      id: "range-3",
      type: "range",
      min: "0",
      max: "10",
      step: "1",
      defaultValue: "6" }))), /*#__PURE__*/



    React.createElement("h1", null, "Range")), /*#__PURE__*/

    React.createElement("section", {
      id: "checkboxes",
      style: {
        '--neumorphic-reach': CONFIG.CHECKBOX.SHADOW.REACH,
        '--neumorphic-blur': CONFIG.CHECKBOX.SHADOW.BLUR,
        '--neumorphic-intensity': CONFIG.CHECKBOX.SHADOW.ALPHA,
        '--border-width': CONFIG.CHECKBOX.BORDER.WIDTH,
        '--border-intensity': CONFIG.CHECKBOX.BORDER.ALPHA,
        '--border-radius': CONFIG.CHECKBOX.BORDER.RADIUS,
        '--margin': 15 } }, /*#__PURE__*/

    React.createElement("div", { className: "checkboxes" }, /*#__PURE__*/
    React.createElement("div", { className: "input" }, /*#__PURE__*/
    React.createElement("input", { id: "check-1", type: "checkbox" }), /*#__PURE__*/
    React.createElement("label", { htmlFor: "check-1" }, "Check")), /*#__PURE__*/

    React.createElement("div", { className: "input" }, /*#__PURE__*/
    React.createElement("input", { id: "check-2", type: "checkbox" }), /*#__PURE__*/
    React.createElement("label", { htmlFor: "check-2" }, "Check")), /*#__PURE__*/

    React.createElement("div", { className: "input" }, /*#__PURE__*/
    React.createElement("input", { id: "check-3", type: "checkbox" }), /*#__PURE__*/
    React.createElement("label", { htmlFor: "check-3" }, "Check"))), /*#__PURE__*/


    React.createElement("h1", null, "Checkbox")), /*#__PURE__*/

    React.createElement("section", {
      id: "radios",
      style: {
        '--neumorphic-reach': CONFIG.RADIO.SHADOW.REACH,
        '--neumorphic-blur': CONFIG.RADIO.SHADOW.BLUR,
        '--neumorphic-intensity': CONFIG.RADIO.SHADOW.ALPHA,
        '--border-width': CONFIG.RADIO.BORDER.WIDTH,
        '--border-intensity': CONFIG.RADIO.BORDER.ALPHA,
        '--border-radius': CONFIG.RADIO.BORDER.RADIUS,
        '--margin': 15 } }, /*#__PURE__*/

    React.createElement("div", { className: "radios" }, /*#__PURE__*/
    React.createElement("div", { className: "input radio" }, /*#__PURE__*/
    React.createElement("input", { id: "radio-1-1", type: "radio", name: "radio-one", checked: true }), /*#__PURE__*/
    React.createElement("label", { htmlFor: "radio-1-1" }, "Radio"), /*#__PURE__*/
    React.createElement("input", { id: "radio-1-2", type: "radio", name: "radio-one" }), /*#__PURE__*/
    React.createElement("label", { htmlFor: "radio-1-2" }, "Radio")), /*#__PURE__*/

    React.createElement("div", { className: "input radio" }, /*#__PURE__*/
    React.createElement("input", { id: "radio-2-1", type: "radio", name: "radio-two", checked: true }), /*#__PURE__*/
    React.createElement("label", { htmlFor: "radio-2-1" }, "Radio"), /*#__PURE__*/
    React.createElement("input", { id: "radio-2-2", type: "radio", name: "radio-two" }), /*#__PURE__*/
    React.createElement("label", { htmlFor: "radio-2-2" }, "Radio")), /*#__PURE__*/

    React.createElement("div", { className: "input radio" }, /*#__PURE__*/
    React.createElement("input", { id: "radio-3-1", type: "radio", name: "radio-three", checked: true }), /*#__PURE__*/
    React.createElement("label", { htmlFor: "radio-3-1" }, "Radio"), /*#__PURE__*/
    React.createElement("input", { id: "radio-3-2", type: "radio", name: "radio-three" }), /*#__PURE__*/
    React.createElement("label", { htmlFor: "radio-3-2" }, "Radio"))), /*#__PURE__*/


    React.createElement("h1", null, "Radio"))), /*#__PURE__*/


    React.createElement("footer", null,
    IDS.map(ID => {
      return /*#__PURE__*/(
        React.createElement("a", { href: ID, key: ID, className: `${active === ID && 'active'}` },
        `${ID.charAt(1).toUpperCase()}${ID.substr(2)}`));


    })), /*#__PURE__*/

    React.createElement("a", { href: next }, "Next", /*#__PURE__*/

    React.createElement("svg", { viewBox: "0 0 24 24" }, /*#__PURE__*/
    React.createElement("path", {
      fill: "currentColor",
      d: "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" }))), /*#__PURE__*/



    React.createElement("a", { href: prev }, "Prev", /*#__PURE__*/

    React.createElement("svg", { viewBox: "0 0 24 24" }, /*#__PURE__*/
    React.createElement("path", {
      fill: "currentColor",
      d: "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" })))));





};
render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));