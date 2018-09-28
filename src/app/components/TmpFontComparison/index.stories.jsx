import React, { Fragment } from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { node } from 'prop-types';
import {
  FF_NEWS_SANS_REG,
  FF_NEWS_SANS_BLD,
  FF_NEWS_SERIF_MDM,
  FF_NEWS_SERIF_MDM_ITAL,
  FF_NEWS_SANS_REG_ITAL,
  FF_NEWS_SANS_BLD_ITAL,
} from '../../lib/constants/styles';
import {
  T_MINION,
  T_TRAFALGAR,
  T_BREVIER,
  T_LONG_PRIMER,
  T_BODY_COPY,
  T_CANON,
} from '../../lib/constants/typography';

const SansReg = styled.span`
  font-family: ${FF_NEWS_SANS_REG};
`;

const SansRegItal = styled.span`
  font-family: ${FF_NEWS_SANS_REG_ITAL};
`;

const SansRegFakeItal = styled.i`
  font-family: ${FF_NEWS_SANS_REG};
`;

const SansRegWeighted = styled.span`
  font-family: ${FF_NEWS_SANS_REG};
  font-weight: 1000;
`;

const SansBold = styled.span`
  font-family: ${FF_NEWS_SANS_BLD};
`;

const SansBoldItal = styled.span`
  font-family: ${FF_NEWS_SANS_BLD_ITAL};
`;

const SansBoldFakeItal = styled.i`
  font-family: ${FF_NEWS_SANS_BLD};
`;

const SerifMedium = styled.span`
  font-family: ${FF_NEWS_SERIF_MDM};
`;

const SerifMediumItal = styled.span`
  font-family: ${FF_NEWS_SERIF_MDM_ITAL};
`;

const SerifMediumFakeItal = styled.i`
  font-family: ${FF_NEWS_SERIF_MDM};
`;

const Minion = styled.div`
  ${T_MINION};
`;

const Trafalgar = styled.div`
  ${T_TRAFALGAR};
`;

const Brevier = styled.div`
  ${T_BREVIER};
`;

const BodyCopy = styled.div`
  ${T_BODY_COPY};
`;

const Canon = styled.div`
  ${T_CANON};
`;

const LongPrimer = styled.div`
  ${T_LONG_PRIMER};
`;

const QuickBrown = () => (
  <Fragment>The quick brown fox jumped over the lazy dog.</Fragment>
);

const DifferSizes = ({ children }) => (
  <Fragment>
    <Minion>
      Minion
      <br />
      {children}
    </Minion>
    <br />
    <Brevier>
      Brevier
      <br />
      {children}
    </Brevier>
    <br />
    <LongPrimer>
      Long Primer
      <br />
      {children}
    </LongPrimer>
    <br />
    <BodyCopy>
      Body Copy
      <br />
      {children}
    </BodyCopy>
    <br />
    <Trafalgar>
      Trafalgar
      <br />
      {children}
    </Trafalgar>
    <br />
    <Canon>
      Canon
      <br />
      {children}
    </Canon>
  </Fragment>
);

DifferSizes.propTypes = {
  children: node.isRequired,
};

storiesOf('Text Comparisons', module)
  .add('Compare Reith Sans Bold with Reith Sans Regular weighted', () => (
    <DifferSizes>
      <SansBold>
        <QuickBrown />
      </SansBold>
      <br />
      <SansRegWeighted>
        <QuickBrown />
      </SansRegWeighted>
    </DifferSizes>
  ))
  .add(
    'Compare Reith Serif Medium Italics to Reith Serif Medium with italic formatting',
    () => (
      <DifferSizes>
        <SerifMediumItal>
          <QuickBrown />
        </SerifMediumItal>
        <br />
        <SerifMediumFakeItal>
          <QuickBrown />
        </SerifMediumFakeItal>
      </DifferSizes>
    ),
  )
  .add(
    'Compare Reith Sans Regular Italics to Reith Sans Regular with italic formatting',
    () => (
      <DifferSizes>
        <SansRegItal>
          <QuickBrown />
        </SansRegItal>
        <br />
        <SansRegFakeItal>
          <QuickBrown />
        </SansRegFakeItal>
      </DifferSizes>
    ),
  )
  .add(
    'Compare Reith Sans Bold Italics to Reith Sans Bold with italic formatting',
    () => (
      <DifferSizes>
        <SansBoldItal>
          <QuickBrown />
        </SansBoldItal>
        <br />
        <SansBoldFakeItal>
          <QuickBrown />
        </SansBoldFakeItal>
      </DifferSizes>
    ),
  )
  .add(
    'Show Reith Serif Medium, Reith Sans Regular and Reith Sans Bold next to each other',
    () => (
      <DifferSizes>
        <SerifMedium>
          <QuickBrown />
        </SerifMedium>
        <br />
        <SansReg>
          <QuickBrown />
        </SansReg>
        <br />
        <SansBold>
          <QuickBrown />
        </SansBold>
      </DifferSizes>
    ),
  );
