import PropTypes from 'prop-types';
import React, { Component } from 'react';
// import s from '../Section/Section.module.css';

class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <section>
        <h2>{title}</h2>
        {children}
      </section>
    );
  }
}
Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
export default Section;
