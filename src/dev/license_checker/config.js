/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

export const LICENSE_WHITELIST = [
  'Elastic-License',
  '(BSD-2-Clause OR MIT OR Apache-2.0)',
  '(BSD-2-Clause OR MIT)',
  '(GPL-2.0 OR MIT)',
  '(MIT AND CC-BY-3.0)',
  '(MIT AND Zlib)',
  '(MIT OR Apache-2.0)',
  '(WTFPL OR MIT)',
  'AFLv2.1',
  'Apache 2.0',
  'Apache License, v2.0',
  'Apache License, Version 2.0',
  'Apache',
  'Apache*',
  'Apache, Version 2.0',
  'Apache-2.0',
  'BSD 3-Clause',
  'BSD New',
  'BSD',
  'BSD*',
  'BSD-2-Clause',
  'BSD-3-Clause AND MIT',
  'BSD-3-Clause OR MIT',
  'BSD-3-Clause',
  'BSD-like',
  'CC0-1.0',
  'CC-BY',
  'CC-BY-3.0',
  'CC-BY-4.0',
  'ISC',
  'MIT OR GPL-2.0',
  'MIT',
  'MIT*',
  'MIT/X11',
  'new BSD, and MIT',
  'OFL-1.1 AND MIT',
  'Public Domain',
  'Unlicense',
  'WTFPL OR ISC',
  'WTFPL',
];

export const LICENSE_OVERRIDES = {
  'scriptjs@2.5.8': ['MIT'], // license header appended in the dist
  'react-lib-adler32@1.0.1': ['BSD'], // adler32 extracted from react source

  // TODO can be removed once we upgrade past elasticsearch-browser@14.0.0
  'elasticsearch-browser@13.0.1': ['Apache-2.0'],

  // TODO can be removed once we upgrade past colors.js@1.0.0
  'colors@0.5.1': ['MIT'],

  // TODO can be removed once we upgrade past map-stream@0.5.0
  'map-stream@0.1.0': ['MIT'],
  'uglify-js@2.2.5': ['BSD'],
  'png-js@0.1.1': ['MIT'],
  'sha.js@2.4.11': ['BSD-3-Clause AND MIT'],
};
