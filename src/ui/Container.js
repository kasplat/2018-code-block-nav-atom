import React, {Component} from 'react';

export default class Container extends Component {
  render() {
    return <div>
      {React.Children.map(this.props.children, child => {
        return React.cloneElement(
          child,
          {
            ...child.props,
            onItemActivate: this.props.onItemActivate,
          },
          child.props.children,
        );
      })}
    </div>;
  }
}
