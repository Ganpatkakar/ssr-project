import React, {Component} from 'react';
import {connect} from "react-redux";
import {SingleItemFetch, SingleItemRemoveData} from "../../redux/actions";
import RenderLikes from "../items/item-tile/item-likes";
import RenderFlag from "../items/item-tile/item-flag";
import RenderPrice from "../items/item-tile/item-price";

class ItemPage extends Component {
  constructor(props) {
    super(props);

    if (!Object.keys(this.props.item).length) {
      const pathName = this.props.location.pathname;
      const pathSplit = pathName.split("/");
      const id = pathSplit[pathSplit.length - 1];
      this.props.SingleItemFetch(id);
    }
  }

  static fetching(dispatch, url) {
    let id = url.split("/");
    id = id[id.length - 1];
    return [dispatch(SingleItemFetch(id))];
  }

  componentWillUnmount() {
    this.props.SingleItemRemoveData();
  }

  render() {
    const {
      id,
      name,
      description,
      like_count,
      price,
      is_sold_out,
      shipping_fee,
      image
    } = this.props.item;
    return (
      <div key={id} className={"item-details-container"}>
        {name && <div className={"title-heading"}><h1>{name}</h1></div>}
        <div className={"row"}>
          <div className={"col-md-6 col-sm-12 carousal-container"}>
            <div className={"carousel-image"}>
              {is_sold_out && <RenderFlag/>}
              {image && <div><img alt="item-image" className={"item-image"} src={image}/></div>}
            </div>
          </div>
          <div className={"col-md-6 col-sm-12 description-container"}>
            {name && <p>{name}</p>}
            {like_count > 0 && <RenderLikes likeCount={like_count} likeButton={true}/>}
            {description && <p>{description}</p>}
            <div className={"order-container"}>
              <div className={"price-shipping"}>
                {price && RenderPrice(price)}
                {shipping_fee && <div className={"shipping-info"}>{shipping_fee}</div>}
              </div>
              <div className={"order-section"}>
                <button className={"btn add-to-cart"}>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {item = {}} = state;
  return {
    item
  };
};

const mapDispatchToProps = {
  SingleItemFetch,
  SingleItemRemoveData
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemPage);