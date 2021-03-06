import React, { useRef, useState } from 'react';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
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

var css_248z = ".styles-module_container__KQYit .styles-module_uploadImages__1NlSy {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  background: #f2f2f2;\n  border: 2px dashed #dddddd;\n  padding: 2rem 1rem;\n  margin-bottom: 11.5px;\n  user-select: none;\n}\n.styles-module_container__KQYit .styles-module_uploadImages__1NlSy.styles-module_dragging__3kmn0 {\n  background: #ffffff;\n  border-color: #1174dc;\n}\n.styles-module_container__KQYit .styles-module_uploadImages__1NlSy:hover {\n  background: #ffffff;\n  border-color: #1174dc;\n}\n.styles-module_container__KQYit .styles-module_uploadImages__1NlSy .styles-module_icon__2gR9g {\n  margin-bottom: 12px;\n}\n.styles-module_container__KQYit .styles-module_uploadImages__1NlSy .styles-module_text__1FWlF {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 24px;\n  text-align: center;\n  color: #555555;\n}\n.styles-module_container__KQYit .styles-module_uploadImages__1NlSy .styles-module_text__1FWlF .styles-module_highlight__DWUY5 {\n  color: #1174dc;\n}\n.styles-module_container__KQYit .styles-module_uploadImages__1NlSy .styles-module_imageInput__32cMF {\n  display: none;\n}\n.styles-module_container__KQYit .styles-module_uploadedImages__1eE88 {\n  z-index: 2;\n  padding: 12px;\n  border: 1px solid #dddddd;\n  display: flex;\n  flex-wrap: wrap;\n  user-select: none;\n}\n.styles-module_container__KQYit .styles-module_uploadedImages__1eE88 .styles-module_image__16Nu3 {\n  margin: 0 4px 10px;\n  width: 80px;\n  height: 80px;\n  border: 1px solid #dddddd;\n  position: relative;\n}\n.styles-module_container__KQYit .styles-module_uploadedImages__1eE88 .styles-module_image__16Nu3 .styles-module_deleteImageIcon__2NgtQ {\n  cursor: pointer;\n  position: absolute;\n  right: 0;\n  transform: translate(5px, -5px);\n  background: #ffffff;\n  box-shadow: 0px 10px 31px rgba(0, 0, 0, 0.12);\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1;\n}\n.styles-module_container__KQYit .styles-module_uploadedImages__1eE88 .styles-module_image__16Nu3 .styles-module_deleteImageIcon__2NgtQ:hover {\n  background: #f1f0f0;\n}\n.styles-module_container__KQYit .styles-module_uploadedImages__1eE88 .styles-module_image__16Nu3 .styles-module_img__2J562 {\n  position: relative;\n  width: 80px;\n  height: 100%;\n  object-fit: cover;\n}\n.styles-module_container__KQYit .styles-module_uploadedImages__1eE88 .styles-module_image__16Nu3.styles-module_info__1_xH2 {\n  background: rgba(0, 0, 0, 0.06);\n  border-radius: 24px;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 11px;\n  line-height: 14px;\n  display: flex;\n  align-items: center;\n  color: #000000;\n  width: auto;\n  height: auto;\n  padding: 0.3125rem 0.4375rem;\n  padding-right: 22px;\n}\n.styles-module_container__KQYit .styles-module_uploadedImages__1eE88 .styles-module_image__16Nu3 .styles-module_removeFileIcon__2wjXX {\n  background: #FFFFFF;\n  box-shadow: 0px 10px 31px rgba(0, 0, 0, 0.12);\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n  position: absolute;\n  right: 2px;\n  transform: translate(0px, 0px);\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1;\n}\n.styles-module_container__KQYit .styles-module_uploadedImages__1eE88 .styles-module_image__16Nu3 .styles-module_removeFileIcon__2wjXX:hover {\n  background: #f1f0f0;\n}\n.styles-module_container__KQYit .styles-module_uploadedImages__1eE88 .styles-module_image__16Nu3 .styles-module_fileName__3W54a {\n  font-weight: 500;\n  margin-right: 0.45rem;\n}";
var styles = {"container":"styles-module_container__KQYit","uploadImages":"styles-module_uploadImages__1NlSy","dragging":"styles-module_dragging__3kmn0","icon":"styles-module_icon__2gR9g","text":"styles-module_text__1FWlF","highlight":"styles-module_highlight__DWUY5","imageInput":"styles-module_imageInput__32cMF","uploadedImages":"styles-module_uploadedImages__1eE88","image":"styles-module_image__16Nu3","deleteImageIcon":"styles-module_deleteImageIcon__2NgtQ","img":"styles-module_img__2J562","info":"styles-module_info__1_xH2","removeFileIcon":"styles-module_removeFileIcon__2wjXX","fileName":"styles-module_fileName__3W54a"};
styleInject(css_248z);

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }
var UploadIconSvg = (({
  styles = {},
  ...props
}) => /*#__PURE__*/React.createElement("svg", _extends$2({
  width: "21",
  height: "20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12.063 15c.507 0 .937-.39.937-.938V7.5h3.398a.77.77 0 00.547-1.328L11.008.234c-.274-.273-.781-.273-1.055 0L4.016 6.172A.77.77 0 004.562 7.5H8v6.563c0 .546.39.937.938.937h3.124zm8.437-.313a.95.95 0 00-.938-.937H14.25v.313c0 1.21-1.016 2.187-2.188 2.187H8.938a2.184 2.184 0 01-2.188-2.188v-.312H1.437a.925.925 0 00-.937.938v4.374c0 .547.39.938.938.938h18.125c.507 0 .937-.39.937-.938v-4.375zm-4.844 3.438c0 .43-.351.781-.781.781a.783.783 0 01-.781-.781c0-.43.351-.781.781-.781.43 0 .781.351.781.781zm2.5 0c0 .43-.351.781-.781.781a.783.783 0 01-.781-.781c0-.43.351-.781.781-.781.43 0 .781.351.781.781z",
  fill: "#1174DC"
})));

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }
var MinusIconSvg = (({
  styles = {},
  ...props
}) => /*#__PURE__*/React.createElement("svg", _extends$1({
  width: "9",
  height: "2",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8.078.36H.172A.17.17 0 000 .53v.688c0 .107.064.172.172.172h7.906a.17.17 0 00.172-.172V.53a.185.185 0 00-.172-.17z",
  fill: "#222"
})));

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var XIconSvg = (({
  styles = {},
  ...props
}) => /*#__PURE__*/React.createElement("svg", _extends({
  width: "6",
  height: "6",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M2.973 2.31L4.263.188h1.16L3.52 3.062 5.481 6H4.332L2.989 3.825 1.646 6H.492l1.96-2.938L.551.188H1.7L2.972 2.31z",
  fill: "#000"
})));

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}

var onSelectFileToUpload = function (e, currentFiles, updateFiles, onError) {
    try {
        if (e.target.files !== null) {
            var files = e.target.files;
            var blobFile_1 = files[0];
            if (blobFile_1 === undefined) {
                onError('NO_FILE', blobFile_1);
                return;
            }
            var readerAsDataURL = new FileReader();
            readerAsDataURL.onload = function (e) {
                if (e && e.target !== null) {
                    var uploadFile = e.target.result;
                    if (currentFiles
                        .filter(function (i) { return i.isUploaded === false; })
                        .map(function (i) { return i.fileName; })
                        .includes(blobFile_1.name)) {
                        onError('EXISTED', blobFile_1);
                        return;
                    }
                    var newList = __spreadArray(__spreadArray([], currentFiles), [
                        {
                            fileName: blobFile_1.name,
                            file: uploadFile,
                            blob: blobFile_1,
                            isUploaded: false,
                        },
                    ]);
                    updateFiles(newList);
                }
            };
            readerAsDataURL.readAsDataURL(blobFile_1);
        }
    }
    catch (error) {
        console.log(error);
    }
};
var onSelectFilesToUpload = function (e, currentFiles, updateFiles, onError) {
    try {
        if (e.target.files !== null) {
            var files = e.target.files;
            var length_1 = files.length;
            var result_1 = [];
            var _loop_1 = function (idx) {
                var blobFile = files[idx];
                if (blobFile === undefined) {
                    onError('NO_FILE', blobFile);
                    return { value: void 0 };
                }
                var readerAsDataURL = new FileReader();
                readerAsDataURL.onload = function (e) {
                    if (e && e.target !== null) {
                        var uploadFile = e.target.result;
                        if (currentFiles
                            .filter(function (i) { return i.isUploaded === false; })
                            .map(function (i) { return i.fileName; })
                            .includes(blobFile.name)) {
                            onError('EXISTED', blobFile);
                        }
                        else {
                            result_1.push({
                                fileName: blobFile.name,
                                file: uploadFile,
                                blob: blobFile,
                                isUploaded: false,
                            });
                        }
                    }
                };
                readerAsDataURL.readAsDataURL(blobFile);
            };
            for (var idx = 0; idx < length_1; idx++) {
                var state_1 = _loop_1(idx);
                if (typeof state_1 === "object")
                    return state_1.value;
            }
            var sync_1 = function () {
                if (result_1.length === length_1) {
                    updateFiles(__spreadArray(__spreadArray([], currentFiles), result_1));
                }
                else {
                    setTimeout(function () {
                        sync_1();
                    }, 100);
                }
            };
            sync_1();
        }
    }
    catch (error) {
        console.log(error);
    }
};
var convertFileListToListOfFiles = function (fileList) {
    var length = fileList.length;
    // eslint-disable-next-line prefer-const
    var result = [];
    for (var i = 0; i < length; i++) {
        var file = fileList[i];
        result.push(file);
    }
    return result;
};
var onDropFileToUpload = function (files, currentFiles, updateFiles, onError) {
    try {
        var newFileModels_1 = [];
        if (files.length > 0) {
            files.forEach(function (blobFile) {
                if (currentFiles
                    .filter(function (i) { return i.isUploaded === false; })
                    .map(function (i) { return i.fileName; })
                    .includes(blobFile.name)) {
                    onError('EXISTED', blobFile);
                    return;
                }
                var reader = new FileReader();
                reader.readAsDataURL(blobFile);
                reader.onloadend = function () {
                    var base64data = reader.result;
                    newFileModels_1.push({
                        fileName: blobFile.name,
                        file: base64data,
                        blob: blobFile,
                        isUploaded: false,
                    });
                };
            });
        }
        var sync_2 = function () {
            if (newFileModels_1.length === files.length) {
                updateFiles(__spreadArray(__spreadArray([], currentFiles), newFileModels_1));
            }
            else {
                setTimeout(function () {
                    sync_2();
                }, 100);
            }
        };
        sync_2();
    }
    catch (error) {
        console.log(error);
    }
};
var getBlobFromUrl = function (url) {
    return new Promise(function (resolve, reject) {
        try {
            var request_1 = new XMLHttpRequest();
            request_1.open('GET', url, true);
            request_1.responseType = 'blob';
            request_1.onload = function () {
                resolve(request_1.response);
            };
            request_1.send();
        }
        catch (error) {
            reject(error);
        }
    });
};
var convertUrlToUploadFileModel$1 = function (input, defaultFileName, isUploaded) {
    if (defaultFileName === void 0) { defaultFileName = ''; }
    if (isUploaded === void 0) { isUploaded = false; }
    return new Promise(function (resolve, reject) {
        try {
            var reader_1 = new FileReader();
            var inputUrl = input + '';
            getBlobFromUrl(inputUrl).then(function (blobFile) {
                reader_1.readAsDataURL(blobFile);
                reader_1.onloadend = function () {
                    var _a;
                    var base64data = reader_1.result;
                    resolve({
                        fileName: (_a = blobFile.name) !== null && _a !== void 0 ? _a : defaultFileName + '',
                        file: base64data,
                        blob: blobFile,
                        isUploaded: isUploaded,
                    });
                };
            }).catch(function (err) {
                reject(err);
            });
        }
        catch (error) {
            reject(error);
        }
    });
};
var currentSetTimeoutId;
var orderedList = [];
var checkList = [];
var updateFileAsync$1 = function (fileUrl, onSuccess) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (currentSetTimeoutId) {
                    clearTimeout(currentSetTimeoutId);
                    currentSetTimeoutId = undefined;
                }
                if (!(fileUrl.length === 0)) return [3 /*break*/, 1];
                checkList.push({
                    fileUrl: fileUrl,
                    value: 123
                });
                orderedList.push({
                    fileUrl: fileUrl,
                    value: 123
                });
                return [3 /*break*/, 3];
            case 1:
                orderedList.push({
                    fileUrl: fileUrl,
                    value: 'HAS_VALUE'
                });
                return [4 /*yield*/, convertUrlToUploadFileModel$1(fileUrl)];
            case 2:
                result = _a.sent();
                checkList.push({
                    fileUrl: fileUrl,
                    value: result
                });
                _a.label = 3;
            case 3:
                currentSetTimeoutId = setTimeout(function () {
                    if (checkList.length > 0) {
                        var lastItem_1 = orderedList[orderedList.length - 1];
                        if (lastItem_1) {
                            var theActualLastItem = checkList.find(function (f) { return f.fileUrl === lastItem_1.fileUrl; });
                            if (theActualLastItem) {
                                if (typeof theActualLastItem.value === 'number') {
                                    onSuccess('HIDE');
                                }
                                else {
                                    onSuccess('SHOW', theActualLastItem.value);
                                }
                            }
                            else {
                                onSuccess('HIDE');
                            }
                        }
                        else {
                            onSuccess('HIDE');
                        }
                    }
                    else {
                        onSuccess('HIDE');
                    }
                    checkList = [];
                    clearTimeout(currentSetTimeoutId);
                    currentSetTimeoutId = undefined;
                    orderedList = [];
                }, 250);
                return [2 /*return*/];
        }
    });
}); };

var UploadImages = function (_a) {
    var currentFiles = _a.currentFiles, updateCurrentFiles = _a.updateCurrentFiles, onError = _a.onError, _b = _a.acceptFiles, acceptFiles = _b === void 0 ? ["png", "jpg", "jpeg"] : _b, _c = _a.onlyShowFileInfo, onlyShowFileInfo = _c === void 0 ? false : _c, _d = _a.renderText, renderText = _d === void 0 ? function () {
        return (React.createElement("span", null,
            "Drag and drop JPG or PNG files here",
            React.createElement("br", null),
            " ",
            React.createElement("i", null, "or"),
            " ",
            " ",
            React.createElement("br", null),
            React.createElement("span", { className: styles.highlight }, "Click to select files from your device")));
    } : _d, _e = _a.multiple, multiple = _e === void 0 ? false : _e;
    var fileUploadInputRef = useRef(null);
    var _f = useState(false), isDragging = _f[0], setDraggingStatus = _f[1];
    var onClickUploadFiles = function () {
        var _a;
        (_a = fileUploadInputRef.current) === null || _a === void 0 ? void 0 : _a.click();
    };
    var removeUploadFile = function (img) {
        updateCurrentFiles(currentFiles.filter(function (ui) { return ui.fileName !== img.fileName; }));
    };
    var onDragEnter = function (e) {
        e.preventDefault();
        e.stopPropagation();
        setDraggingStatus(true);
    };
    var onDragLeave = function (e) {
        e.preventDefault();
        e.stopPropagation();
        setDraggingStatus(false);
    };
    var onDragOver = function (e) {
        e.preventDefault();
        e.stopPropagation();
        setDraggingStatus(true);
        return false;
    };
    var onDrop = function (e) {
        e.preventDefault();
        e.stopPropagation();
        setDraggingStatus(false);
        var files = e.dataTransfer.files;
        if (files) {
            onDropFileToUpload(convertFileListToListOfFiles(files), currentFiles, updateCurrentFiles, onError);
        }
    };
    return (React.createElement("div", { className: styles.container },
        React.createElement("div", { className: styles.uploadImages + " " + (isDragging ? styles.dragging : ""), onClick: onClickUploadFiles, onDragEnter: onDragEnter, onDragLeave: onDragLeave, onDragOver: onDragOver, onDrop: onDrop },
            React.createElement("div", { className: styles.icon },
                React.createElement(UploadIconSvg, null)),
            React.createElement("div", { className: styles.text }, renderText()),
            multiple ?
                React.createElement("input", { ref: fileUploadInputRef, className: styles.imageInput, onChange: function (e) {
                        return onSelectFilesToUpload(e, currentFiles, updateCurrentFiles, onError);
                    }, type: "file", multiple: true, accept: acceptFiles.map(function (a) { return "." + a; }).join(", ") })
                :
                    React.createElement("input", { ref: fileUploadInputRef, className: styles.imageInput, onChange: function (e) {
                            return onSelectFileToUpload(e, currentFiles, updateCurrentFiles, onError);
                        }, type: "file", accept: acceptFiles.map(function (a) { return "." + a; }).join(", ") })),
        currentFiles.length > 0 && (React.createElement("div", { className: styles.uploadedImages }, currentFiles.map(function (ui) {
            var _a;
            return (React.createElement("div", { key: Math.random() * 8888 + "_custom-react-uploader", className: styles.image + " " + (onlyShowFileInfo ? styles.info : '') },
                onlyShowFileInfo ?
                    React.createElement("div", { className: styles.removeFileIcon, onClick: function () { return removeUploadFile(ui); } },
                        React.createElement(XIconSvg, null))
                    : React.createElement("div", { className: styles.deleteImageIcon, onClick: function () { return removeUploadFile(ui); } },
                        React.createElement(MinusIconSvg, null)),
                onlyShowFileInfo ? React.createElement("div", { className: styles.fileName }, ui.fileName) :
                    React.createElement("img", { alt: "icon", className: styles.img, src: (_a = ui.file) !== null && _a !== void 0 ? _a : ui.url })));
        })))));
};

var convertUrlToUploadFileModel = convertUrlToUploadFileModel$1;
var updateFileAsync = updateFileAsync$1;

export { convertUrlToUploadFileModel, UploadImages as default, updateFileAsync };
//# sourceMappingURL=index.js.map
