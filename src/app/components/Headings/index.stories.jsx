import React, { Fragment } from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { Headline, SubHeading } from './index';
import {
  FF_NEWS_SERIF_MDM,
  FF_NEWS_SERIF_MDM_ITAL,
} from '../../lib/constants/styles';

const SerifMediumItal = styled.span`
  font-family: ${FF_NEWS_SERIF_MDM_ITAL};
`;

const SerifMediumFakeItal = styled.i`
  font-family: ${FF_NEWS_SERIF_MDM};
`;

storiesOf('Headline', module)
  .add('default', () => <Headline>This is my headline.</Headline>)
  /* eslint-disable react/no-unescaped-entities */
  .add('Italics Headline', () => (
    <Headline>
      Meet <SerifMediumItal>Homo sapiens'</SerifMediumItal> older cousin -{' '}
      <SerifMediumFakeItal>Homo erectus</SerifMediumFakeItal>
    </Headline>
  ))
  .add('Italics Headline Comparison', () => (
    <Fragment>
      <Headline>
        Meet <SerifMediumItal>Homo sapiens'</SerifMediumItal> older cousin -{' '}
        <SerifMediumItal>Homo erectus</SerifMediumItal>
      </Headline>
      <br />
      <Headline>
        Meet <SerifMediumFakeItal>Homo sapiens'</SerifMediumFakeItal> older
        cousin - <SerifMediumFakeItal>Homo erectus</SerifMediumFakeItal>
      </Headline>
    </Fragment>
  ));

storiesOf('SubHeading', module).add('default', () => (
  <SubHeading text="This is a SubHeading">This is a SubHeading</SubHeading>
));
