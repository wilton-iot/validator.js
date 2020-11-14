/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define([
    "assert",
    "./lib/isAlphanumeric",
    "./test/sanitizers"
], function(assert, isAlphanumeric) {
    "use strict";

    assert(isAlphanumeric("foo42"));
    assert(!isAlphanumeric("foo42$"));

    print("test: validator");
});
