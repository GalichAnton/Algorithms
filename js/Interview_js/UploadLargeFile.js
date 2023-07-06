function uploadFileInChunks(file, options, callback) {
  const { maxChunks, chunkSize } = options;
  const fileSize = file.size;
  const chunkCount = Math.min(maxChunks, Math.ceil(fileSize / chunkSize));
  let uploadedChunks = 0;

  for (let i = 0; i < chunkCount; i++) {
    const start = i * chunkSize;
    const end = Math.min(start + chunkSize, fileSize);
    const chunk = file.slice(start, end);
    const formData = new FormData();
    formData.append('chunk', chunk);
    formData.append('chunkIndex', i);
    formData.append('totalChunks', chunkCount);

    fetch('/upload', {
      method: 'POST',
      body: formData
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to upload chunk ${i}`);
        }
        uploadedChunks++;
        if (uploadedChunks === chunkCount) {
          callback(null, 'File uploaded successfully');
        }
      })
      .catch((error) => {
        callback(error, null);
      });
  }
}

function upload(file, options, callback) {
  const {maxChuncks, chunkSize, adress} = options
  const fileSize = file.size
  const chunkCount = Math.min(maxChuncks, Math.ceil(fileSize / chunkSize))
  let uploaded = 0

  for(let i = 0; i < chunkCount; i++) {
    const start = i * chunkSize
    const end = Math.min(start + chunkSize, fileSize)
    const chunk = file.slice(start,end) 
    const formData = new FormData()
    formData.append('chunk', chunk)
    formData.append('chunkIndex', i)
    formData.append('totalChunks', chunkCount)

    fetch(adress, {
      method: 'POST',
      body: formData
    })
      .then((res) => {
        if(!res.ok) {
          throw new Error(`Failed to upload chunk ${i}`);
        }
        uploaded++
        if(uploaded === chunkCount) {
          callback();
        }
      })
      .catch((error) => {
        callback(error, null);
      });
  }

}