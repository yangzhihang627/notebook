/**
 * @file component List
 * @author yangzhihang@le.com
 * @date 2017/09
 */

import React,{PropTypes} from 'react';
import ListItem from '../ListItem';

const propTypes = {
  items: PropTypes.array.isRequired
};

function List ({items}) {
  items = items.map(
    item => (
      <ListItem
        item={item}
        key={item.id}
      />
    )
  );

  return (
    <div className="list-component col-md-4 list-group">
      {items}
    </div>
  );
}

List.propTypes = propTypes;

export default List;
