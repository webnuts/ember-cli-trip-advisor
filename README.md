# ember-cli-trip-advisor

Plugin for ember-cli that makes trip-advisor component available.

## Installation

To install simply run:

```
npm install git+ssh://git@github.com:webnuts/ember-cli-trip-advisor.git --save-dev
```

## Usage

Once installed, you can use the plugin right away inside your template files:

```
{{trip-advisor locationId=1234567 uniq=1}}
```

## Configuration

### locationId

Set this value to the location ID on TripAdvisor.

### uniq

TripAdvisor needs a unique ID for each icon on the webpage, so if there are two TripAdvisor icons on the page, they need to have different uniq values.