// export const uploadFile = (filePath, accessToken) => {
//   // const request = window.gapi.client.request({
//   //   'path': 'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart',
//   //   'method': 'POST',
//   //   'params': {'uploadType': 'multipart'},
//   //   'headers': {
//   //     'Content-Type': 'multipart/related',
//   //     'boundary': 'foo_bar_baz'
//   //   },
//   //   'body': file
//   // });

//   token = req.body.token;
//   var formData = new FormData();
//   var fileMetadata = {
//     name: "sample.txt",
//   };
//   formData.append("metadata", JSON.stringify(fileMetadata), {
//     contentType: "application/json",
//   });
//   formData.append("data", fs.createReadStream(filePath), {
//     filename: "sample.txt",
//     contentType: "text/plain",
//   });
//   fetch("https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart", {
//     method: "POST",
//     body: formData,
//     headers: { Authorization: "Bearer " + accessToken },
//   })
//     .then((res) => res.json())
//     .then(console.log);
// };
