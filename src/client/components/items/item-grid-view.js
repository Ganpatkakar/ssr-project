import React, {Component, Fragment} from 'react';
import PropTypes from "prop-types";

class ItemGridView extends Component {

  constructor(props) {
    super(props);
  }

  renderFlag() {
    return (<div>Flag</div>)
  }

  renderImage(image) {
    return (<img src={image}/>)
  }

  renderTitle(name) {
    return (<div>{name}</div>)
  }

  renderPrice(price) {
    return (<div>{price}</div>)
  }

  renderLikes(likes) {

    return (<Fragment>
      <img src={""}/>
      {likes}
    </Fragment>)
  }

  render() {
    const {
      id,
      name,
      like_count,
      price,
      isSoldOut,
      image
    } = this.props.item;
    return (
      <div key={id} className={"grid-item"}>
        {isSoldOut && this.renderFlag()}
        {image && this.renderImage(image)}
        {name && this.renderTitle(name)}
        {price && this.renderPrice(price)}
        {like_count && this.renderLikes(like_count)}
      </div>
    );
  }
}

ItemGridView.propTypes = {
  item: PropTypes.object,
  onClickTitle: PropTypes.func,
  onClickImage: PropTypes.func,
  onClickLike: PropTypes.func,
  onClickPrice: PropTypes.func,
};

ItemGridView.defaultProps = {
  item: {},
  contentOrder: [
    "flag", "image", "title", "price", "likes"
  ],
  onClickTitle: () => {
  },
  onClickImage: () => {
  },
  onClickLike: () => {
  },
  onClickPrice: () => {
  },
};

export default ItemGridView;