import testInfo = require('ember-cli-test-info');
import TestFrameworkDetector = require('../test-framework-detector');
import {BlueprintOptions} from "ember-cli/lib/models/blueprint";

export = TestFrameworkDetector.extend({
  description: 'Generates a serializer unit test.',

  locals: function(options: BlueprintOptions) {
    return {
      friendlyTestDescription: testInfo.description(options.entity.name, "Unit", "Serializer")
    };
  }
});
