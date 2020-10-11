import {useState, useEffect} from "react";

const useBrowserDetect = () => {

  // Get browsers type
  //
  const getBrowsers = () => {
    return {
      isOpera:
        (!!window.opr && !!window.opr.addons) ||
        !!window.opera ||
        navigator.userAgent.indexOf(" OPR/") >= 0,
      isFirefox: typeof InstallTrigger !== "undefined",
      isSafari:
        /constructor/i.test(window.HTMLElement) ||
        (function (p) {
          return p.toString() === "[object SafariRemoteNotification]";
        })(
          !window["safari"] ||
            (typeof window["safari"] !== "undefined" &&
              window["safari"].pushNotification)
        ),
      isIE: /*@cc_on!@*/ false || !!document.documentMode,
      isEdge: navigator.userAgent.indexOf("Edg") !== -1,
      isEdgeChromium:
        !!window.chrome &&
        (!!window.chrome.webstore || !!window.chrome.runtime) &&
        navigator.userAgent.indexOf("Edg") !== -1,
      isChrome:
        !!window.chrome &&
        (!!window.chrome.webstore || !!window.chrome.runtime),
      isBlink:
        ((!!window.chrome &&
          (!!window.chrome.webstore || !!window.chrome.runtime)) ||
          (!!window.opr && !!window.opr.addons) ||
          !!window.opera ||
          navigator.userAgent.indexOf(" OPR/") >= 0) &&
        !!window.CSS,
    };
  }

  // useState
  const [browsers, setBrowsers] = useState(null);

  // useEffect
  useEffect(()=> {
    setBrowsers(getBrowsers);
  }, [])

  return browsers;
}

export default useBrowserDetect;
