// Browser environment sniffing
export const inBrowser = typeof window !== 'undefined'
export const UA = inBrowser && window.navigator.userAgent.toLowerCase()
export const PLATFORM = inBrowser && window.navigator.platform.toLowerCase()
export const isIE = UA && /msie|trident/.test(UA)
export const isEdge = UA && UA.indexOf('edge/') > 0
export const isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge
export const isFirefox = UA && /firefox\/\d+/.test(UA)
export const isAndroid = UA && UA.indexOf('android') > 0
export const isIOS = UA && /iphone|ipad|ipod|ios/.test(UA)
export const isWindows = PLATFORM && /win/.test(PLATFORM)
export const isMac = PLATFORM && /macintel/.test(PLATFORM)
export const isLinux = PLATFORM && /linux/.test(PLATFORM)
