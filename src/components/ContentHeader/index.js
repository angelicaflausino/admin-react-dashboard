import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

function ContentHeader({ title, navigation, size }) {
  return (
    <section className="content-header">
      <Container fluid={size}>
        <Row>
          <Col sm="6">
            <h1>{title}</h1>
          </Col>
          <Col sm="6">
            {navigation}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

ContentHeader.defaultProps = {
  title: 'Título Página',
  navigation: null,
  size: 'lg',
};

ContentHeader.propTypes = {
  title: PropTypes.string,
  navigation: PropTypes.element,
  size: PropTypes.string,
};

export default ContentHeader;
