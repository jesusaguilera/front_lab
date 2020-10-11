import {useState, useEffect} from "react";

const useBrowserDetect = () => {

  // Get browsers type
  //
  const getBrowsers = () => {
    // Opera 8.0+
    var isOpera = (!!window.opr && !!window.opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

    // Firefox 1.0+
    var isFirefox = typeof InstallTrigger !== 'undefined';

    // Safari 3.0+ "[object HTMLElementConstructor]" 
    var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof window['safari'] !== 'undefined' && window['safari'].pushNotification));

    // Internet Explorer 6-11
    var isIE = /*@cc_on!@*/false || !!document.documentMode;

    // Edge 20+
    var isEdge = !isIE && !!window.StyleMedia;

    // Chrome 1 - 79
    var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

    // Edge (based on chromium) detection
    var isEdgeChromium = isChrome && (navigator.userAgent.indexOf("Edg") != -1);

    // Blink engine detection
    var isBlink = (isChrome || isOpera) && !!window.CSS;

    return {
      isOpera,
      isFirefox,
      isSafari,
      isIE,
      isEdge,
      isEdgeChromium,
      isChrome,
    };
  }

  // useState
  const [browsers, setBrowsers] = useState(null);

  // Set browsers
  const checkBrowsers = () => {
    setBrowsers(getBrowsers);
  }

  // useEffect
  useEffect(()=> {
    checkBrowsers();
  }, [])

  return browsers;
}

export default useBrowserDetect;
