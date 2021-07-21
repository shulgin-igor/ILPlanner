import React from 'react';
import {EmptyStateContainer, EmptyStateText} from './EmptyState.styles';

export default class EmptyState extends React.Component<any, any> {
  render() {
    return (
      <EmptyStateContainer>
        <EmptyStateText>{this.props.text}</EmptyStateText>
      </EmptyStateContainer>
    );
  }
}
