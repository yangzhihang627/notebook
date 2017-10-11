/**
 * @file component Deskmark
 * @author yangzhihang@le.com
 * @date 2017/10
 */
import './style.scss';
import React, { PropTypes } from 'react';
import List from '../List';
import ItemEditor from '../ItemEditor';
import ItemShowLayer from '../ItemShowLayer';

const propTypes = {
  actions: PropTypes.object.isRequired,
  state: PropTypes.object.isRequired
};

class Deskmark extends React.Component {
  componentDidMount() {
    this.props.actions.fetchEntryList();
  }

  render() {
    const { actions, state } = this.props;
    const { editing, selectId } = state.editor;
    const items = state.items;
    const item = items.find(({ id }) => id === selectId);
    const mainPart = editing
      ? <ItemEditor item={item} onSave={actions.saveEntry} onCancel={actions.cancelEdit} />
      : <ItemShowLayer item={item} onEdit={actions.editEntry} onDelete={actions.deleteEntry} />;
    return (
      <section className="deskmark-component">
        <div className="container">
          <div className="row">
            <List items={items} onSelect={actions.selectEntry} onCreate={actions.createNewEntry} />
            {mainPart}
          </div>
        </div>
      </section>
    );
  }
}

Deskmark.propTypes = propTypes;

export default Deskmark;
