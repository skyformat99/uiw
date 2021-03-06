import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style/index.less';

export class Card extends React.Component {
  render() {
    const { prefixCls, className, title, extra, footer, bordered, noHover, active, bodyStyle, bodyClassName, children, ...resetProps } = this.props;
    const cls = classnames(prefixCls, className, {
      [`${prefixCls}-bordered`]: bordered,
      [`${prefixCls}-no-hover`]: noHover,
      active,
    });

    return (
      <div {...resetProps} className={cls}>
        {(title || extra) && (
          <div className={`${prefixCls}-head`}>
            {title && <div className={`${prefixCls}-head-title`}>{title}</div>}
            {extra && <div className={`${prefixCls}-extra`}>{extra}</div>}
          </div>
        )}
        {children && <div className={classnames(`${prefixCls}-body`, bodyClassName)} style={bodyStyle}>{children}</div>}
        {footer && <div className={`${prefixCls}-footer`}>{footer}</div>}
      </div>
    );
  }
}

Card.propTypes = {
  prefixCls: PropTypes.string,
  bordered: PropTypes.bool,
  extra: PropTypes.node,
  footer: PropTypes.node,
  noHover: PropTypes.bool,
  active: PropTypes.bool,
  bodyStyle: PropTypes.object,
  bodyClassName: PropTypes.string,
};

Card.defaultProps = {
  prefixCls: 'w-card',
  bordered: true,
  noHover: false,
  active: false,
};
