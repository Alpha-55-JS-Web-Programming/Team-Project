export const toUploadView = () => {
    return `
    <div>
      <h2>Upload Images</h2>
    </div>
    <form method="post" enctype="multipart/form-data" id="upload-form">
    <div class="upload-header">
    <input type="file" class="upload-input-file" multiple="multiple" accept="image/*">
        <button id="upload-btn" type="submit">Upload</button>
    </div>
    <div id="status"></div>
  </form>
      `;
  };
  