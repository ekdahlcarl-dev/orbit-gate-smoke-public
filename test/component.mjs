import assert from 'node:assert/strict';import {add} from '../src/server.mjs';assert.equal(add(2,3),5);assert.equal(add(-2,2),0);
