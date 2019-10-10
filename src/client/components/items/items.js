import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {ItemsFetch} from '../../redux/actions'
import ItemGridView from "./item-grid-view";

export class Items extends Component {
  constructor(props){
    super(props);
  }

  static fetching({dispatch}) {
    return [dispatch(ItemsFetch())];
  }

  renderGridView = (item) => {
    return (
      <ItemGridView key={item.id} item={item}/>
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
      <Fragment>
        {items && this.gridContent(items)}
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  const {items_list : {data = {}} = {}} = state;
  return {
    items: data
  };
};

const mapDispatchToProps = {
  ItemsFetch,
};

export default connect(mapStateToProps, mapDispatchToProps)(Items)
