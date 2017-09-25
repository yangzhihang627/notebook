/**
 * @file component ItemEditor
 * @author yangzhihang@le.com
 * @date 2017/09
 */
import './style.scss';
import React,{PropTypes} from 'react';
// import marked from 'marked';

const propTypes = {
  item: PropTypes.object.isRequired
};

function ItemEditor({item}) {
  // if(!item || !item.id){
  //   return (
  //     <div className="col-md-8 item-show-layer-component">
  //       <div className="no-select">请选择左侧列表里面的文章</div>
  //     </div>
  //   );
  // }
  // let content = marked(item.content);
  return (
    <div className="col-md-8 item-show-layer-component">
      <div className="control-area">
        <button className="btn btn-primary">保存</button>
        <button className="btn btn-danger">取消</button>
      </div>
      <div className="edit-area">
        <input type="text" />
        <textarea placeholder="请填写内容" />
      </div>
    </div>
  );
}

ItemEditor.propTypes = propTypes;

export default ItemEditor;
