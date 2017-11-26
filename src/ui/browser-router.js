/* eslint-env browser */
(function (fluid) {
    "use strict";
    var flock = fluid.registerNamespace("flock");
    fluid.registerNamespace("flock.midi.router.browser");

    flock.midi.router.browser.sendRaw = function (that, messageToRelay) {
        var outputConnection = fluid.get(that, "outputSelector.connection");
        if (outputConnection) {
            outputConnection.sendRaw(messageToRelay);
        }
    };

    fluid.defaults("flock.midi.router.browser", {
        gradeNames: ["fluid.viewComponent"],
        selectors: {
            midiInputSelector:  "#midiInputSelector",
            midiOutputSelector: "#midiOutputSelector",
            refresh:            ".refresh"
        },
        events: {
            onPortsChanged: null
        },
        invokers: {
            relayRaw: {
                funcName: "flock.midi.router.browser.sendRaw",
                args:     ["{that}", "{arguments}.0"]
            }
        },
        components: {
            inputSelector: {
                type: "flock.ui.midiConnector",
                container: "{that}.dom.midiInputSelector",
                options: {
                    portType: "input",
                    components: {
                        connection: {
                            options: {
                                listeners: {
                                    raw: {
                                        func: "{browser}.relayRaw",
                                        args: ["{arguments}.0.data"]
                                    }
                                },
                                sysex: true
                            }
                        }
                    }
                }
            },
            outputSelector: {
                type: "flock.ui.midiConnector",
                container: "{that}.dom.midiOutputSelector",
                options: {
                    portType: "output",
                    components: {
                        connection: {
                            options: {
                                sysex: true
                            }
                        }
                    }
                }
            }
        }
    });
})(fluid);
