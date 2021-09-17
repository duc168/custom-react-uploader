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

var css_248z = ".styles-module_container__KQYit .styles-module_uploadImages__1NlSy {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  background: #f2f2f2;\n  border: 2px dashed #dddddd;\n  padding: 2rem 1rem;\n  margin-bottom: 11.5px;\n  user-select: none;\n}\n.styles-module_container__KQYit .styles-module_uploadImages__1NlSy.styles-module_dragging__3kmn0 {\n  background: #ffffff;\n  border-color: #1174dc;\n}\n.styles-module_container__KQYit .styles-module_uploadImages__1NlSy:hover {\n  background: #ffffff;\n  border-color: #1174dc;\n}\n.styles-module_container__KQYit .styles-module_uploadImages__1NlSy .styles-module_icon__2gR9g {\n  margin-bottom: 12px;\n}\n.styles-module_container__KQYit .styles-module_uploadImages__1NlSy .styles-module_text__1FWlF {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 24px;\n  text-align: center;\n  color: #555555;\n}\n.styles-module_container__KQYit .styles-module_uploadImages__1NlSy .styles-module_text__1FWlF .styles-module_highlight__DWUY5 {\n  color: #1174dc;\n}\n.styles-module_container__KQYit .styles-module_uploadImages__1NlSy .styles-module_imageInput__32cMF {\n  display: none;\n}\n.styles-module_container__KQYit .styles-module_uploadedImages__1eE88 {\n  z-index: 2;\n  padding: 12px;\n  border: 1px solid #dddddd;\n  display: flex;\n  flex-wrap: wrap;\n  user-select: none;\n}\n.styles-module_container__KQYit .styles-module_uploadedImages__1eE88 .styles-module_image__16Nu3 {\n  margin: 0 4px 10px;\n  width: 80px;\n  height: 80px;\n  border: 1px solid #dddddd;\n  position: relative;\n}\n.styles-module_container__KQYit .styles-module_uploadedImages__1eE88 .styles-module_image__16Nu3 .styles-module_deleteImageIcon__2NgtQ {\n  cursor: pointer;\n  position: absolute;\n  right: 0;\n  transform: translate(5px, -5px);\n  background: #ffffff;\n  box-shadow: 0px 10px 31px rgba(0, 0, 0, 0.12);\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1;\n}\n.styles-module_container__KQYit .styles-module_uploadedImages__1eE88 .styles-module_image__16Nu3 .styles-module_deleteImageIcon__2NgtQ:hover {\n  background: #f1f0f0;\n}\n.styles-module_container__KQYit .styles-module_uploadedImages__1eE88 .styles-module_image__16Nu3 .styles-module_img__2J562 {\n  position: relative;\n  width: 80px;\n  height: 100%;\n  object-fit: cover;\n}";
var styles = {"container":"styles-module_container__KQYit","uploadImages":"styles-module_uploadImages__1NlSy","dragging":"styles-module_dragging__3kmn0","icon":"styles-module_icon__2gR9g","text":"styles-module_text__1FWlF","highlight":"styles-module_highlight__DWUY5","imageInput":"styles-module_imageInput__32cMF","uploadedImages":"styles-module_uploadedImages__1eE88","image":"styles-module_image__16Nu3","deleteImageIcon":"styles-module_deleteImageIcon__2NgtQ","img":"styles-module_img__2J562"};
styleInject(css_248z);

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }
var UploadIconSvg = (({
  styles = {},
  ...props
}) => /*#__PURE__*/React.createElement("svg", _extends$1({
  width: "21",
  height: "20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12.063 15c.507 0 .937-.39.937-.938V7.5h3.398a.77.77 0 00.547-1.328L11.008.234c-.274-.273-.781-.273-1.055 0L4.016 6.172A.77.77 0 004.562 7.5H8v6.563c0 .546.39.937.938.937h3.124zm8.437-.313a.95.95 0 00-.938-.937H14.25v.313c0 1.21-1.016 2.187-2.188 2.187H8.938a2.184 2.184 0 01-2.188-2.188v-.312H1.437a.925.925 0 00-.937.938v4.374c0 .547.39.938.938.938h18.125c.507 0 .937-.39.937-.938v-4.375zm-4.844 3.438c0 .43-.351.781-.781.781a.783.783 0 01-.781-.781c0-.43.351-.781.781-.781.43 0 .781.351.781.781zm2.5 0c0 .43-.351.781-.781.781a.783.783 0 01-.781-.781c0-.43.351-.781.781-.781.43 0 .781.351.781.781z",
  fill: "#1174DC"
})));

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var MinusIconSvg = (({
  styles = {},
  ...props
}) => /*#__PURE__*/React.createElement("svg", _extends({
  width: "9",
  height: "2",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8.078.36H.172A.17.17 0 000 .53v.688c0 .107.064.172.172.172h7.906a.17.17 0 00.172-.172V.53a.185.185 0 00-.172-.17z",
  fill: "#222"
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

function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}

var onSelectImageToUpload = function (e, currentImages, updateImages, onError) {
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
                    var uploadImage = e.target.result;
                    if (currentImages
                        .filter(function (i) { return i.isUploaded === false; })
                        .map(function (i) { return i.fileName; })
                        .includes(blobFile_1.name)) {
                        onError('EXISTED', blobFile_1);
                        return;
                    }
                    var newList = __spreadArray(__spreadArray([], currentImages), [
                        {
                            fileName: blobFile_1.name,
                            file: uploadImage,
                            blob: blobFile_1,
                            isUploaded: false,
                        },
                    ]);
                    updateImages(newList);
                }
            };
            readerAsDataURL.readAsDataURL(blobFile_1);
        }
    }
    catch (error) {
        console.log(error);
    }
};
var onSelectImagesToUpload = function (e, currentImages, updateImages, onError) {
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
                        var uploadImage = e.target.result;
                        if (currentImages
                            .filter(function (i) { return i.isUploaded === false; })
                            .map(function (i) { return i.fileName; })
                            .includes(blobFile.name)) {
                            onError('EXISTED', blobFile);
                        }
                        else {
                            result_1.push({
                                fileName: blobFile.name,
                                file: uploadImage,
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
                    updateImages(__spreadArray(__spreadArray([], currentImages), result_1));
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
var onDropImageToUpload = function (images, currentImages, updateImages, onError) {
    try {
        var newImageModels_1 = [];
        if (images.length > 0) {
            images.forEach(function (blobFile) {
                if (currentImages
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
                    newImageModels_1.push({
                        fileName: blobFile.name,
                        file: base64data,
                        blob: blobFile,
                        isUploaded: false,
                    });
                };
            });
        }
        var sync_2 = function () {
            if (newImageModels_1.length === images.length) {
                updateImages(__spreadArray(__spreadArray([], currentImages), newImageModels_1));
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

var UploadImages = function (_a) {
    var currentImages = _a.currentImages, updateCurrentImages = _a.updateCurrentImages, onError = _a.onError, _b = _a.acceptFiles, acceptFiles = _b === void 0 ? ["png", "jpg", "jpeg"] : _b, _c = _a.renderText, renderText = _c === void 0 ? function () {
        return (React.createElement("span", null,
            "Drag and drop jpg or png files here",
            React.createElement("br", null),
            " or",
            " ",
            " ",
            React.createElement("br", null),
            React.createElement("span", { className: styles.highlight }, "Click to select files from your device")));
    } : _c, _d = _a.multiple, multiple = _d === void 0 ? false : _d;
    var imageUploadInputRef = useRef(null);
    var _e = useState(false), isDragging = _e[0], setDraggingStatus = _e[1];
    var onClickUploadImages = function () {
        var _a;
        (_a = imageUploadInputRef.current) === null || _a === void 0 ? void 0 : _a.click();
    };
    var removeUploadImage = function (img) {
        updateCurrentImages(currentImages.filter(function (ui) { return ui.fileName !== img.fileName; }));
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
            onDropImageToUpload(convertFileListToListOfFiles(files), currentImages, updateCurrentImages, onError);
        }
    };
    return (React.createElement("div", { className: styles.container },
        React.createElement("div", { className: styles.uploadImages + " " + (isDragging ? styles.dragging : ""), onClick: onClickUploadImages, onDragEnter: onDragEnter, onDragLeave: onDragLeave, onDragOver: onDragOver, onDrop: onDrop },
            React.createElement("div", { className: styles.icon },
                React.createElement(UploadIconSvg, null)),
            React.createElement("div", { className: styles.text }, renderText()),
            multiple ?
                React.createElement("input", { ref: imageUploadInputRef, className: styles.imageInput, onChange: function (e) {
                        return onSelectImagesToUpload(e, currentImages, updateCurrentImages, onError);
                    }, type: "file", multiple: true, accept: acceptFiles.map(function (a) { return "." + a; }).join(", ") })
                :
                    React.createElement("input", { ref: imageUploadInputRef, className: styles.imageInput, onChange: function (e) {
                            return onSelectImageToUpload(e, currentImages, updateCurrentImages, onError);
                        }, type: "file", accept: acceptFiles.map(function (a) { return "." + a; }).join(", ") })),
        currentImages.length > 0 && (React.createElement("div", { className: styles.uploadedImages }, currentImages.map(function (ui) {
            var _a;
            return (React.createElement("div", { key: Math.random() * 8888 + "custom-react-uploader", className: styles.image },
                React.createElement("div", { className: styles.deleteImageIcon, onClick: function () { return removeUploadImage(ui); } },
                    React.createElement(MinusIconSvg, null)),
                React.createElement("img", { alt: "icon", className: styles.img, src: (_a = ui.file) !== null && _a !== void 0 ? _a : ui.url })));
        })))));
};

export { UploadImages as default };
//# sourceMappingURL=index.js.map
