/**
 * @file component Deskmark
 * @author yangzhihang@le.com
 * @date 2017/09
 */
import './style.scss';
import React from 'react';
import List from '../List';
import ItemEditor from '../ItemEditor';
import ItemShowLayer from '../ItemShowLayer';
import uuid from 'uuid';

// const propTypes = {
//   item: PropTypes.object.isRequired,
//   onClick: PropTypes.func.isRequired
// };

class Deskmark extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      selectId: null,
      editing: false
    };
    this.selectItem = this.selectItem.bind(this);
    this.saveItem = this.saveItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.createItem = this.createItem.bind(this);
    this.editItem = this.editItem.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
  }
  saveItem(item) {
    let items = this.state.items;
    const curItem = item;
    if (curItem.id) {
      let n;
      items.forEach((e, i) => {
        if (e.id === curItem.id) {
          n = i;
        }
      });
      items.splice(n, 1, curItem);
    } else {
      curItem.id = uuid.v4();
      curItem.time = new Date().getTime();
      items = [...items, curItem];
    }
    this.setState({
      items,
      selectId: curItem.id,
      editing: false
    });
  }
  selectItem(id) {
    if (id === this.state.selectId) {
      return;
    }
    this.setState({
      selectId: id,
      editing: false
    });
  }
  createItem() {
    this.setState({
      selectId: null,
      editing: true
    });
  }
  editItem(id) {
    this.setState({
      selectId: id,
      editing: true
    });
  }
  deleteItem(id) {
    this.setState({
      items: this.state.items.filter(
        result => result.id !== id
      )
    });
  }
  cancelEdit() {
    this.setState({
      editing: false
    });
  }
  render() {
    // const items =[
    //   {
    //     id: '1234567',
    //     title: 'hello world',
    //     content: '# testing markdown',
    //     time: '1458030208365'
    //   }
    // ];
    // const currentItem = items[0];
    const { items, selectId, editing } = this.state;
    let selected = selectId && items.find(item => item.id === selectId);
    let mainPart = editing
      ? <ItemEditor item={selected} onSave={this.saveItem} onCancel={this.cancelEdit} />
      : <ItemShowLayer item={selected} onEdit={this.editItem} onDelete={this.deleteItem} />;
    return (
      <section className="deskmark-component">
        <div className="container">
          <div className="row">
            <List items={items} onSelect={this.selectItem} onCreate={this.createItem} />
            {mainPart}
          </div>
        </div>
      </section>
    );
  }
}

// Deskmark.propTypes = propTypes;

export default Deskmark;
