import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ItemsFetch} from '../../redux/actions'
import ItemGridView from "./item-grid-view";

export class Items extends Component {
  constructor(props) {
    super(props);
    if(!this.props.items.length) {
      this.props.ItemsFetch();
    }
  }

  static fetching(dispatch, url) {
    return [dispatch(ItemsFetch(url))];
  }

  onClickImage = (event, id = 1) => {
    event.preventDefault();
    const url = `/item/${id}`;
    this.props.history.push(url);
  };

  renderGridView = (item) => {
    return (
      <ItemGridView
        key={item.id}
        item={item}
        onClickImage={this.onClickImage}
      />
    )
  };

  gridContent = (items) => {
    const gridViewContent = [];
    items.map((item) => {
      gridViewContent.push(this.renderGridView(item));
    });
    return gridViewContent;
  };

  render() {
    const {items} = this.props;
    return (
      <div className={"items-result-gridview row"}>
        <div className="col-md-12">
          <h1>Items result</h1>
        </div>
        {items && this.gridContent(items)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const {items_list: {data = []} = {}} = state;
  return {
    items: data
  };
};

const mapDispatchToProps = {
  ItemsFetch,
};

export default connect(mapStateToProps, mapDispatchToProps)(Items)
