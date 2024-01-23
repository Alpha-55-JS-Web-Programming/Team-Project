export const toUploadView = () => {
  return `
    <div>
      <h2>Upload Images</h2>
    </div>
    <div class="upload-header">
      <input type="file" class="upload-input-file" accept="image/*"/>
      <button class="upload-btn" type="submit">Upload</button>
    </div>
    <div id="status"></div>
      `;
};
