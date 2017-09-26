/**
 * @file component CreateBar
 * @author yangzhihang@le.com
 * @date 2017/09
 */

import React, { PropTypes } from 'react';

const propTypes = {
  onClick: PropTypes.func.isRequired
};

function CreateBar({ onClick }) {
  return (
    <a onClick={onClick} href="#" className="list-group-item create-bar-component">
      + 创建新文章
    </a>
  );
}

CreateBar.propTypes = propTypes;

export default CreateBar;
