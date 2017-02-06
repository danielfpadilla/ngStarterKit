'use strict';

/* Create module for chatbox directive */
angular.module('components.chatbox')

/*
    Usage:
        <chatbox></chatbox>
 */
.component('chatbox', {
    templateUrl: 'app/components/chatbox/chatbox.html',
    controller: [
        function ChatboxCtrl() {
            this.messages = [
                {
                    message: 'Hawda ninyo oi!',
                    author: 'James Reid'
                }
            ];
        }
    ]
});