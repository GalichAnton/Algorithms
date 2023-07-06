function uploadFile(file, chunkSize, cb) {
  let fileSize = file.fileSize
  let chunksCount = Math.ceil(fileSize / chunkSize)
  let uploadedChunks = 0

  for(let i = 0; i < chunksCount; i++) {
    let startChunk = i * chunkSize
    let endChunk = Math.min(startChunk + chunkSize, fileSize)
    let chunk = file.size(startChunk,endChunk)

    const formData = new FormData()
    formData('chunk', chunk)
    formData('chunkCount', i)
    formData('totalChunks', chunksCount)

    fetch('/upload', {
      method: 'POST',
      body: formData
    }).then((res) => {
      if (!res.ok) {
        throw new Error(`Failed to upload chunk ${i}`);
      }
      uploadedChunks++
      if (uploadedChunks === chunksCount) {
        cb(null, 'File uploaded successfully');
      }
    }).catch((err) => {
      cb(err)
    })
  }
}