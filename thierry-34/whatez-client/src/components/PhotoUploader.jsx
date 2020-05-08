import React from "react";
import { createShot } from "../actions/shotsActions";
import { connect } from "react-redux";

class PhotoUploader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onFormSubmit(e) {
    e.preventDefault(); // Stop form submit
    const formData = new FormData();
    formData.append("file", this.state.file);

    this.props.createShot(formData, this.props.history);
    console.log(`PROPS HERE ARE:`, this.props);
    this.props.history.push('/player');
  }

  onChange(e) {
    this.setState({ file: e.target.files[0] });
  }

  render() {
    console.log("props", this.props);
    return (
      <div className='container'>
        <form onSubmit={this.onFormSubmit} method="POST" encType="multipart/form-data" className="white">
          <h5 className="grey-text text-darken-3">Upload Photo</h5>
          <h6 className="grey-text text-darken-3">On completion of text-extraction, you will be redirected to your chart automatically</h6>
          <div className="input-field">
            <input type="file" onChange={this.onChange} name="avatar"/>
          </div>
          <div className="input-field">
            <button type="submit" className="btn pink lighten-1 z-depth-0">Upload</button>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.user.user,
    shot: state.shot
  };
};
export default connect(mapStateToProps, { createShot })(PhotoUploader);