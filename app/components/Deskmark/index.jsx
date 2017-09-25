/**
 * @file component Deskmark
 * @author yangzhihang@le.com
 * @date 2017/09
 */
import './style.scss';
import React,{PropTypes} from 'react';
import List from '../List';
import ItemEditor from '../ItemEditor';
import ItemShowLayer from '../ItemShowLayer';

// const propTypes = {
//   item: PropTypes.object.isRequired,
//   onClick: PropTypes.func.isRequired
// };

class Deskmark extends React.Component {
  render() {
    const items =[
      {
        id: '1234567',
        title: 'hello world',
        content: '# testing markdown',
        time: '1458030208365'
      }
    ];
    const currentItem = items[0];
    return (
      <section className="deskmark-component">
        <div className="container">
          <div className="row">
            {/* <div className="col-md-4 list-group"> */}
            <List items={items} />
            {/* </div> */}
            {/* <ItemEditor item={currentItem} /> */}
            <ItemShowLayer item={currentItem} />
          </div>
        </div>
      </section>
    );
  }
}

// Deskmark.propTypes = propTypes;

export default Deskmark;
