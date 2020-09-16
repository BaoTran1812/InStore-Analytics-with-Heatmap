import React, { Component } from "react";
import client from "../../api";

export default class File extends Component {
  constructor() {
    super();
    this.fileArray = []
    this.state = {
        file: ""
    };
    this.handleChangeFile = this.handleChangeFile.bind(this);
    this.save = this.save.bind(this)
  }
  handleChangeFile = (evt) => {
    var self = this;
    let array = []
    var reader = new FileReader();
    var file = evt.target.files[0];

    reader.onload = function (upload) {
        self.setState({
          file: upload.target.result,
        });
        array.push(upload.target.result)
        console.log(array)
    };
    reader.readAsDataURL(file);
    this.fileArray.push(array)
    console.log(this.fileArray)
  };

  save = evt => {
    client.post("/api/fileUpload", {
        fileArray : this.fileArray
    }
    )
    .then(response => {
      console.log(response.data)
    })
}

  render() {
    return (
      <div>
        <input
          type="file"
          onChange={this.handleChangeFile}
          className="file-position"
          name="fileUpload"
          required multiple
        />
        <button onClick = {this.save}>Submit</button>
      </div>
    );
  }
}
