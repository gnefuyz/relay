/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @emails oncall+relay
 */

'use strict';

const transformerWithOptions = require('./transformerWithOptions');

const {generateTestsFromFixtures} = require('RelayModernTestUtils');

generateTestsFromFixtures(
  `${__dirname}/fixtures-modern-artifact-directory`,
  transformerWithOptions(
    {
      artifactDirectory: '/test/artifacts',
    },
    'production',
    '/testing/Container.js',
  ),
);
