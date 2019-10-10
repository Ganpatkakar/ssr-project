import React, {Component, Fragment} from 'react';
import PropTypes from "prop-types";

class ItemGridView extends Component {

  constructor(props){
    super(props);
  }

  renderFlag() {
    return(<div>Flag</div>)
  }

  renderImage() {
    return (<img src={this.props.item.image} />)
  }

  renderTitle() {
    return (<div>{this.props.item.name}</div>)
  }

  renderPrice() {
    return (<div>{this.props.item.price}</div>)
  }

  renderLikes() {
    return (<Fragment>
      <img src={""} />
      {this.props.item.like_count}
    </Fragment>)
  }

  render() {
    return (
      <div>
        ItemGrid view
      </div>
    );
  }
}

ItemGridView.propTypes = {
  item: PropTypes.bool,
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
  onClickTitle: () => {},
  onClickImage: () => {},
  onClickLike: () => {},
  onClickPrice: () => {},
};

export default ItemGridView;