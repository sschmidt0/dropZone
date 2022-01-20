// url2 = 'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart';

export const uploadFile = (document, accessToken) => {
  const url = 'https://www.googleapis.com/upload/drive/v3/files?uploadType=media';
  // const fileName = document.docPath;
  // const fileData = 'this is a sample data';
  // const contentType = document.docType;
  // const metadata = {
  //   'name': fileName,
  //   'mimeType': contentType
  // };

  // const bodyData = {

  // };

  // const request = window.gapi.client.request({
  //   'path': url,
  //   'method': 'POST',
  //   'params': {'uploadType': 'media'},
  //   'headers': {
  //     'Content-Type': contentType,
  //     'Content-Length': 10000
  //   },
  //   'body': fileData});
  // request.execute( console.log('done') );


  const formData = new FormData();

  const blob = new Blob([JSON.stringify(document, null, 2)], {type : 'application/json'});
  // const fileMetadata = {
  //   name: document.docName,
  //   path: document.docPath,
  //   type: document.docType
  // };

  // formData.append("metadata", JSON.stringify(fileMetadata), {
  //   contentType: "application/json",
  // });

  // formData.append("data", fs.createReadStream(document.docPath), {
  formData.append("data", blob, {
    filename: document.docName,
    filepath: document.docPath,
    contentType: document.docType,
  });

  fetch(url, {
    method: "POST",
    body: formData,
    headers: {
      'Authorization': "Bearer " + accessToken,
      'Content-Type': document.docType,
      'Content-Length': 10
    },
  })
    .then((res) => res.json())
    .then(console.log);
};
