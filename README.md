# Flocking MIDI Router

A very simple Node-based MIDI router, made with [Flocking](http://flockingjs.org/).  Routes all messages from one or
more inputs to one or more outputs.

## Installation

Before you can use this package, you will need to install its dependencies using a command like `npm install` or
`yarn install`.

## Usage

The easiest way to use flocking-midi-router is to install it globally by running `npm install -g flocking-midi-router`.  This will add a command named `flocking-midi-router` to your path.

Alternatively, if the router is installed as a local dependency of your project, you can run:

`node node_modules/.bin/flocking-midi-router`

Or, if you have cloned the repository and want to run it directly, use:

`node launcher.js`

If you launch any variation without any arguments (or with the `--help` option), usage information will be displayed.


### Listing Ports

To use this command, you will need to know part or all of the name of the attached input and output devices.  You can
display all detected inputs and outputs using a commmand like:

`flocking-midi-router -l`

A list of outputs like the following will be displayed:

```
{
    "inputs": [
        {
            "id": undefined,
            "name": "USB Oxygen 8 v2",
            "manufacturer": undefined,
            "state": undefined,
            "connection": undefined
        }
    ],
    "outputs": [
        {
            "id": undefined,
            "name": "USB Oxygen 8 v2",
            "manufacturer": undefined,
            "state": undefined,
            "connection": undefined
        },
        {
            "id": undefined,
            "name": "MIDI Monitor (Untitled)",
            "manufacturer": undefined,
            "state": undefined,
            "connection": undefined
        }
    ]
}
```

### Routing Ports

To route ports, pass in one or more inputs, and one or more outputs, as in the following, which uses partial names from
the above example:

```
flocking-midi-router -i Oxygen -o "MIDI Monitor"
```

Note the quotation marks around the output.  You can also pass in space-delimited arrays, as in the following example
(which assumes you have inputs named `input1` and `input 2`, and outputs named `output 1` and `output2`:

```
flocking-midi-router -i input1 "input 2" -o "output 1" output2
```
