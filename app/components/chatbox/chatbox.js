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
        '$mdDialog',
        function ChatboxCtrl($mdDialog) {
            var self = this;

            this.messages = [
                {
                    what: 'Brunch this weekend?',
                    who: 'Min Li Chan',
                    when: '3:08PM',
                    notes: " I'll be in your neighborhood doing errands"
                },
                {
                    what: 'Brunch this weekend?',
                    who: 'Min Li Chan',
                    when: '3:08PM',
                    notes: " I'll be in your neighborhood doing errands"
                },
                {
                    what: 'Brunch this weekend?',
                    who: 'Min Li Chan',
                    when: '3:08PM',
                    notes: " I'll be in your neighborhood doing errands"
                },
                {
                    what: 'Brunch this weekend?',
                    who: 'Min Li Chan',
                    when: '3:08PM',
                    notes: " I'll be in your neighborhood doing errands"
                },
                {
                    what: 'Brunch this weekend?',
                    who: 'Min Li Chan',
                    when: '3:08PM',
                    notes: " I'll be in your neighborhood doing errands"
                },
                {
                    what: 'Brunch this weekend?',
                    who: 'Min Li Chan',
                    when: '3:08PM',
                    notes: " I'll be in your neighborhood doing errands"
                },
                {
                    what: 'Brunch this weekend?',
                    who: 'Min Li Chan',
                    when: '3:08PM',
                    notes: " I'll be in your neighborhood doing errands"
                },
                {
                    what: 'Brunch this weekend?',
                    who: 'Min Li Chan',
                    when: '3:08PM',
                    notes: " I'll be in your neighborhood doing errands"
                },
                {
                    what: 'Brunch this weekend?',
                    who: 'Min Li Chan',
                    when: '3:08PM',
                    notes: " I'll be in your neighborhood doing errands"
                },
                {
                    what: 'Brunch this weekend?',
                    who: 'Min Li Chan',
                    when: '3:08PM',
                    notes: " I'll be in your neighborhood doing errands"
                },
                {
                    what: 'Brunch this weekend?',
                    who: 'Min Li Chan',
                    when: '3:08PM',
                    notes: " I'll be in your neighborhood doing errands"
                }
            ];

            this.addMessage = function($event) {
                // Appending dialog to document.body to cover sidenav in docs app
                var confirm = $mdDialog.prompt()
                    .title('Input new message')
                    .textContent('No bad words')
                    .placeholder('Message here')
                    .ariaLabel('message')
                    .initialValue('')
                    .targetEvent($event)
                    .ok('Submit')
                    .cancel('Cancel');

                $mdDialog
                    .show(confirm)
                    .then(function(result) {
                    var msg = {
                        what: 'General Message',
                        who: 'Daniel Padilla',
                        when: '4:00 PM',
                        notes: result
                    };

                    self.messages.splice(0, 0, msg);
                }, function() {
                    var status = 'You didn\'t name your dog.';
                });
            };
        }
    ]
});