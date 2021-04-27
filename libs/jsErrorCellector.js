// #TODO: 增加扩展性
// #TODO: 兼容Safari
// #TODO: 封装主要功能
// #TODO: 兼容AMD、CMD、CommonJS规范
window.onerror = function (errorMessage, scriptURI, lineNumber, columnNumber, errorObj) {
    let params = '';
    let img = new Image();
    img.crossOrigin = 'Anonymous';

    params += 'm=' + encodeURIComponent(errorMessage) || '';
    params += '&su=' + encodeURIComponent(scriptURI) || '';
    params += '&ln=' + lineNumber || '';
    params += '&cn=' + columnNumber || '';
    params += '&s=' + (errorObj && encodeURIComponent(errorObj.stack));
    params += '&w=' + document.documentElement.clientWidth;
    params += '&h=' + document.documentElement.clientHeight;

    // img.src = 'http://localhost:8088/collect/e.gif?' + params;
    console.log('---onerror', ...arguments);
};
/**
 * window.onunhandledrejection 能够捕获到Promise未处理的rejection异常，
 * rejection异常并不会阻断页面运行，容易被很多小伙伴所遗忘。
 * @param {*} e 
 */
window.onunhandledrejection = function (e) {
    console.log('---onunhandledrejection', ...arguments);
    // let errorMsg = "";
    // let errorStack = "";
    // if (typeof e.reason === "object") {
    //   errorMsg = e.reason.message;
    //   errorStack = e.reason.stack;
    // } else {
    //   errorMsg = e.reason;
    //   errorStack = "";
    // }
    // 分类解析
    // siftAndMakeUpMessage("on_error", errorMsg, WEB_LOCATION, 0, 0, "UncaughtInPromiseError: " + errorStack);
}
// 重写console.error, 可以捕获更全面的报错信息
const oldError = console.error;
console.error = function (tempErrorMsg) {
    console.log('--console-error', ...arguments);

    // let errorMsg = (arguments[0] && arguments[0].message) || tempErrorMsg;
    // let lineNumber = 0;
    // let columnNumber = 0;
    // let errorObj = arguments[0] && arguments[0].stack;
    // if (!errorObj) {
    //     if (typeof errorMsg == "object") {
    //         try {
    //             errorMsg = JSON.stringify(errorMsg)
    //         } catch (e) {
    //             errorMsg = "错误无法解析"
    //         }
    //     }
    //     // siftAndMakeUpMessage("console_error", errorMsg, WEB_LOCATION, lineNumber, columnNumber, "CustomizeError: " + errorMsg);
    // } else {
    //     // 如果报错中包含错误堆栈，可以认为是JS报错，而非自定义报错
    //     // siftAndMakeUpMessage("on_error", errorMsg, WEB_LOCATION, lineNumber, columnNumber, errorObj);
    // }
    return oldError.apply(console, arguments);
};