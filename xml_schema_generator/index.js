WebAssembly.instantiateStreaming(fetch("xrsg.wasm"), importObject).then(
    (obj) => {
        var xmlTextarea = document.getElementById("xml_in");

        function handleInputChange() {
            var xmlContent = xmlTextarea.value;
            var result =obj.instance.exports.transform_xml(xmlContent);
            document.getElementById("schema_out").innerHTML = result;
        }

        xmlTextarea.addEventListener("input", handleInputChange);
        handleInputChange(); // just render something in the beginning
    },
);




