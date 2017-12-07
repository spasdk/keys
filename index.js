/**
 * Global list of non-printable control key codes.
 *
 * @author Stanislav Kalashnik <darkpark.main@gmail.com>
 * @license GNU GENERAL PUBLIC LICENSE Version 3
 */

'use strict';

// public
module.exports = {
    backspace: 8,
    tab:       9,
    enter:     13,
    escape:    27,
    space:     32,
    pageUp:    33,
    pageDown:  34,
    end:       35,
    home:      36,
    left:      37,
    up:        38,
    right:     39,
    down:      40,
    insert:    45,
    del:       46   // not "delete" because of old browsers issue
};
