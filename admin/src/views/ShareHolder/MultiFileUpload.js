import React, { Component } from 'react'
import Files from 'react-files'
export default class MultiFileUpload extends Component {
  onFilesChange = files => {
    console.log(files)
  }
  onFilesError = (error, file) => {
    console.log('error code ' + error.code + ': ' + error.message)
  }

  render() {
    return (
      <div className = 'files'>
        <Files
          className='files-dropzone'
          onChange={this.onFilesChange}
          onError={this.onFilesError}
          accepts={['image/png', '.pdf', 'audio/*']}
          multiple
          maxFiles={3}
          maxFileSize={10000000}
          minFileSize={0}
          clickable
        >
          Drop files here or click to upload
        </Files>
      </div>
    )
  }
}
