/**
 * @file melon/Button
 * @author leon<lupengyu@baidu.com>
 */

import React from 'react';
import {create} from 'melon-core/classname/cxBuilder';
import TouchRipple from './ripples/TouchRipple';

const cx = create('Button');

/* eslint-disable fecs-prefer-class */

/**
 * melon/Button
 *
 * @param {Object}  props           属性
 * @param {boolean} props.disabled  是否不可点击
 * @param {boolean} props.hasRipple 是否有ripple动画
 * @return {ReactElement}
 */
export default function Button(props) {

    const {
        hasRipple,
        label,
        children,
        disabled,
        ...others
    } = props;

    const className = cx(props)
        .addVariants({
            icon: React.Children.count(children) === 1
                && typeof children === 'object'
                && children.type.displayName === 'Icon',
            ripple: hasRipple && !disabled
        })
        .build();

    return (
        <button
            {...others}
            disabled={disabled}
            className={className}>
            {label || children}
            {hasRipple ? <TouchRipple /> : null}
        </button>
    );

}
/* eslint-enable fecs-prefer-class */

Button.defaultProps = {
    hasRipple: true,
    disabled: false
};

Button.propTypes = {
    hasRipple: React.PropTypes.bool,
    disabled: React.PropTypes.bool
};
