/**
 * @file component ItemEditor
 * @author yangzhihang@le.com
 * @date 2017/09
 */
import './style.scss';
import React, { PropTypes } from 'react';

const propTypes = {
  item: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
};

class ItemEditor extends React.Component {
  render() {
    const { onSave, onCancel } = this.props;
    const item = this.props.item || {
      title: '',
      content: ''
    };
    let saveText;
    if (item.id) {
      saveText = '保存';
    } else {
      saveText = '创建';
      if (this.refs.title) {
        this.refs.title.value = '';
      }
      if (this.refs.content) {
        this.refs.content.value = '';
      }
    }
    let save = () => {
      onSave({
        ...item,
        title: this.refs.title.value,
        content: this.refs.content.value
      });
    };
    return (
      <div className="col-md-8 item-editor-component">
        <div className="control-area">
          <button onClick={save} className="btn btn-primary btn-success">{saveText}</button>
          <button onClick={onCancel} className="btn btn-danger">取消</button>
        </div>
        <div className="edit-area">
          <input ref="title" type="text" placeholder="请填写标题" defaultValue={item.title} />
          <textarea ref="content" placeholder="请填写内容" defaultValue={item.content} />
        </div>
      </div>
    );
  }

}

ItemEditor.propTypes = propTypes;

export default ItemEditor;
