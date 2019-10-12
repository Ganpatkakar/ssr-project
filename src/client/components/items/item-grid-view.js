import React, {Component} from 'react';
import PropTypes from "prop-types";
import RenderLikes from "./item-tile/item-likes";
import RenderFlag from "./item-tile/item-flag";
import "../../styles/items.css";
import RenderPrice from "./item-tile/item-price";

class ItemGridView extends Component {

  constructor(props) {
    super(props);
  }

  renderImage(image, id) {
    return (
      <img onClick={(e) => this.props.onClickImage(e, id)} className={"item-image"} src={image} alt={"item-image"}/>)
  }

  renderTitle(name) {
    return (<div className={"item-title"}>{name}</div>)
  }

  render() {
    const {
      id,
      name,
      like_count,
      price,
      is_sold_out,
      image
    } = this.props.item;
    return (
      <div key={id} className={"gridview-item col-md-3 col-sm-6"}>
        <div className={"item-container"}>
          <div className={"item-content"}>
            <div className={"item-image"}>
              {is_sold_out && <RenderFlag/>}
              {image && this.renderImage(image, id)}
            </div>
            <div className={"item-description"}>
              {name && this.renderTitle(name)}
              <div className={"row"}>
                {price && <div className={"col-md-8 col-sm-8"}>{RenderPrice(price)}</div>}
                {
                  like_count > 0 &&
                  <div className={"col-md-4 col-sm-4 text-right"}>
                    <div className={"items-likes"}>
                      <RenderLikes likeCount={like_count}/>
                    </div>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ItemGridView.propTypes = {
  item: PropTypes.object,
  onClickTitle: PropTypes.func,
  onClickImage: PropTypes.func,
  onClickLikes: PropTypes.func,
  onClickPrice: PropTypes.func,
  likeImg: PropTypes.string
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
  onClickLikes: () => {
  },
  onClickPrice: () => {
  }
};

export default ItemGridView;