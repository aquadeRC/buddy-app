import '@testing-library/jest-dom';
//import { TextEncoder } from 'node:util'

//global.TextEncoder = TextEncoder

global.TextEncoder = require('util').TextEncoder;
global.TextDecoder = require('util').TextDecoder;
global.TransformStream = require('stream').Transform;