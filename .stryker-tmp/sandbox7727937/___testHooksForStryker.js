
    (function (window) {
      
          var id = 0;
          window.__coverage__ = globalCoverage = { deviations: {} };
          beforeEach(function() {
      
if (!globalCoverage.baseline && window.__strykerCoverageCurrentTest__) {
  globalCoverage.baseline = clone(window.__strykerCoverageCurrentTest__);
}
    });
          afterEach(function() {
      
  globalCoverage.deviations[id] = coverageResult = {};
  id++;
  var coveragePerFile = window.__strykerCoverageCurrentTest__;
  if(coveragePerFile) {
    Object.keys(coveragePerFile).forEach(function (file) {
        var coverage = coveragePerFile[file];
        var baseline = globalCoverage.baseline[file];
        var fileResult = { s: {} };
        var touchedFile = false;
        for(var i in coverage.s){
          if(coverage.s[i] !== baseline.s[i]){
            fileResult.s[i] = coverage.s[i];
            touchedFile = true;
          }
        }
        if(touchedFile){
          coverageResult[file] = fileResult;
        }
    });
  }
    });
              
    function clone(source) {
        var result = source;
        if (Array.isArray(source)) {
            result = [];
            source.forEach(function (child, index) {
                result[index] = clone(child);
            });
        } else if (typeof source == "object") {
            result = {};
            for (var i in source) {
                result[i] = clone(source[i]);
            }
        }
        return result;
    };
      
    })((Function('return this'))());