import React, { Fragment } from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import {
  FF_NEWS_SANS_REG,
  FF_NEWS_SANS_BLD,
  FF_NEWS_SERIF_MDM,
  FF_NEWS_SERIF_MDM_ITAL,
  FF_NEWS_SANS_REG_ITAL,
  FF_NEWS_SANS_BLD_ITAL,
} from '../../lib/constants/styles';

const SansReg = styled.span`
  font-family: ${FF_NEWS_SANS_REG};
  font-weight: 700;
`;

const SansRegItal = styled.span`
  font-family: ${FF_NEWS_SANS_REG_ITAL};
`;

const SansRegFakeItal = styled.i`
  font-family: ${FF_NEWS_SANS_REG};
`;

const SansRegWeighted = styled.span`
  font-family: ${FF_NEWS_SANS_REG};
  font-weight: 700;
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

storiesOf('Text Comparisons', module)
  .add('Compare Reith Sans Bold with Reith Sans Regular weighted', () => (
    <Fragment>
      <SansBold>The quick brown fox jumped over the lazy dog.</SansBold> -- Sans
      Bold
      <br />
      <SansRegWeighted>
        The quick brown fox jumped over the lazy dog.
      </SansRegWeighted>{' '}
      -- Sans Regular Weighted
    </Fragment>
  ))
  .add(
    'Compare Reith Serif Medium Italics to Reith Serif Medium with italic formatting',
    () => (
      <Fragment>
        <SerifMediumItal>
          The quick brown fox jumped over the lazy dog.
        </SerifMediumItal>{' '}
        -- Serif Medium Italics
        <br />
        <SerifMediumFakeItal>
          The quick brown fox jumped over the lazy dog.
        </SerifMediumFakeItal>{' '}
        -- Serif Medium Faux Italics
      </Fragment>
    ),
  )
  .add(
    'Compare Reith Sans Regular Italics to Reith Sans Regular with italic formatting',
    () => (
      <Fragment>
        <SansRegItal>The quick brown fox jumped over the lazy dog.</SansRegItal>{' '}
        -- Sans Regular Italics
        <br />
        <SansRegFakeItal>
          The quick brown fox jumped over the lazy dog.
        </SansRegFakeItal>{' '}
        -- Sans Regular Faux Italics
      </Fragment>
    ),
  )
  .add(
    'Compare Reith Sans Bold Italics to Reith Sans Bold with italic formatting',
    () => (
      <Fragment>
        <SansBoldItal>
          The quick brown fox jumped over the lazy dog.
        </SansBoldItal>{' '}
        -- Sans Bold Italics
        <br />
        <SansBoldFakeItal>
          The quick brown fox jumped over the lazy dog.
        </SansBoldFakeItal>{' '}
        -- Sans Bold Faux Italics
      </Fragment>
    ),
  )
  .add(
    'Show Reith Serif Medium, Reith Sans Regular and Reith Sans Bold next to each other',
    () => (
      <Fragment>
        <SerifMedium>The quick brown fox jumped over the lazy dog.</SerifMedium>{' '}
        -- Serif Medium
        <br />
        <SansReg>The quick brown fox jumped over the lazy dog.</SansReg> -- Sans
        Regular
        <br />
        <SansBold>The quick brown fox jumped over the lazy dog.</SansBold> --
        Sans Bold
      </Fragment>
    ),
  );
