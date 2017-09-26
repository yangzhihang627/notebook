/**
 * @file component List
 * @author yangzhihang@le.com
 * @date 2017/09
 */

import React, { PropTypes } from 'react';
import ListItem from '../ListItem';
import CreateBar from '../CreateBar';

const propTypes = {
  items: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  onCreate: PropTypes.func.isRequired
};

function List({ items, onSelect, onCreate }) {
  const lists = items.map(
    item => (
      <ListItem item={item} key={item.id} onClick={() => onSelect(item.id)} />
    )
  );

  return (
    <div className="list-component col-md-4 list-group">
      <CreateBar onClick={onCreate} />
      {lists}
    </div>
  );
}

List.propTypes = propTypes;

export default List;
