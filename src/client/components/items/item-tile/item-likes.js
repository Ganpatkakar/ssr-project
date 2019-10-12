import React, {Fragment} from 'react';

class RenderLikes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likeCount: this.props.likeCount,
      activeLike: false
    }
  }

  onClickLikes = () => {
    const {likeCount} = this.state;
    if (!this.state.activeLike) {
      this.setState({
        activeLike: true,
        likeCount: likeCount + 1
      });
    } else {
      this.setState({
        activeLike: false,
        likeCount: likeCount - 1
      });
    }
  };

  // likeCount, activeLike, onClickLikes
  render() {
    const {likeCount, activeLike} = this.state;
    const {likeButton = false} = this.props;
    return (
      <Fragment>
        {!likeButton ?
          <div className={`like-icon ${activeLike ? "like-icon-active" : null}`} onClick={this.onClickLikes}/>
          :
          <button className={"like-button btn"} onClick={this.onClickLikes}>
            <span className={`like-icon ${activeLike ? "like-icon-active" : null}`}/>
            <span className={"like-text"}>Likes</span>
          </button>
        }
        {likeCount}
      </Fragment>
    )
  }
}

export default RenderLikes;

