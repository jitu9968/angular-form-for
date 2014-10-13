angular.module("formFor.bootstrapTemplates", []).run(["$templateCache", function($templateCache) {$templateCache.put("form-for/templates/checkbox-field.html","<div  class=\"field checkbox-field\"\n      ng-class=\"{disabled: disable || model.disabled, \'has-error\': model.error}\">\n\n  <field-error  error=\"model.error\"\n                left-aligned=\"true\"\n                uid=\"{{model.uid}}-error\">\n  </field-error>\n\n  <input  aria-manager\n          id=\"{{model.uid}}\"\n          type=\"checkbox\"\n          tabindex=\"{{tabIndex}}\"\n          ng-model=\"model.bindable\"\n          ng-disabled=\"disable || model.disabled\">\n\n  <field-label  ng-if=\"label\"\n                input-uid=\"{{model.uid}}\"\n                uid=\"{{model.uid}}-label\"\n                label=\"{{label}}\"\n                help=\"{{help}}\">\n  </field-label>\n</div>\n");
$templateCache.put("form-for/templates/collection-label.html","<div class=\"collection-label\" ng-class=\"{\'text-danger\': model.error}\">\n  <field-label  ng-if=\"label\"\n                label=\"{{label}}\"\n                help=\"{{help}}\"\n                required=\"{{model.required}}\">\n  </field-label>\n\n  <small ng-if=\"model.error\" class=\"text-danger\" ng-bind=\"model.error\"></small>\n</div>\n");
$templateCache.put("form-for/templates/field-error.html","<p  ng-if=\"error\"\n    id=\"{{uid}}\"\n    class=\"text-danger\"\n    ng-bind=\"error\">\n</p>\n");
$templateCache.put("form-for/templates/field-label.html","<label  id=\"{{uid}}\"\n        for=\"{{inputUid}}\">\n\n  <span ng-bind-html=\"bindableLabel\"></span>\n\n  <span ng-if=\"help\" class=\"fa-stack\"\n        popover=\"{{help}}\"\n        popover-trigger=\"mouseenter\"\n        popover-placement=\"right\">\n    <i class=\"fa fa-stack-2x fa-circle\"></i>\n    <i class=\"fa fa-stack-1x fa-inverse fa-question\"></i>\n  </span>\n\n  <span class=\"label label-default\" ng-if=\"requiredLabel\" ng-bind=\"requiredLabel\"></span>\n</label>\n");
$templateCache.put("form-for/templates/radio-field.html","<span class=\"field radio-field\"\n      ng-class=\"{disabled: disable || model.disabled, \'has-error\': model.error}\">\n\n  <field-error  ng-if=\"!hideErrorMessage\"\n                error=\"model.error\"\n                left-aligned=\"true\"\n                uid=\"{{uid}}-error\">\n  </field-error>\n\n  <input  aria-manager\n          id=\"{{uid}}\"\n          type=\"radio\"\n          name=\"{{attribute}}\"\n          tabindex=\"{{tabIndex}}\"\n          ng-model=\"model.bindable\"\n          ng-value=\"value\"\n          ng-disabled=\"disable || model.disabled\">\n\n  <field-label  ng-if=\"label\"\n                input-uid=\"{{uid}}\"\n                uid=\"{{uid}}-label\"\n                label=\"{{label}}\"\n                help=\"{{help}}\">\n  </field-label>\n</span>\n");
$templateCache.put("form-for/templates/select-field-loading-indicator.html","<i class=\"fa fa-circle-o-notch fa-spin\"></i>\nLoading...\n");
$templateCache.put("form-for/templates/select-field.html","<div  class=\"form-group\"\n      ng-class=\"{ \'disabled\': disable || model.disabled,\n                  \'has-error\': model.error }\">\n\n  <field-label  ng-if=\"label\"\n                input-uid=\"{{enableFiltering ? model.uid + \'-filter\' : model.uid}}\"\n                iud=\"{{model.uid}}-label\"\n                label=\"{{label}}\"\n                help=\"{{help}}\"\n                required=\"{{model.required}}\">\n  </field-label>\n\n  <field-error  error=\"model.error\"\n                uid=\"{{model.uid}}-error\">\n  </field-error>\n\n  <!-- Filtered dropdowns use a type-ahead style component -->\n  <div ng-show=\"enableFiltering\" class=\"input-group\">\n    <input  aria-manager\n            id=\"{{model.uid}}-filter\"\n            type=\"search\" class=\"form-control filter-text-input\"\n            tabindex=\"{{tabIndex}}\"\n            placeholder=\"{{placeholder}}\"\n            ng-disabled=\"disable || model.disabled\"\n            ng-model=\"filter\"\n            ng-click=\"filterTextClick($event)\"\n            ng-focus=\"open()\"\n            ng-keydown=\"keyDown($event)\">\n\n    <ul class=\"dropdown-menu\" ng-class=\"{show: isOpen}\">\n      <li ng-repeat=\"option in filteredOptions\"\n          ng-class=\"{active: option === selectedOption || $index === mouseOverIndex}\">\n\n        <a  ng-bind=\"option[labelAttribute]\"\n            ng-click=\"selectOption(option)\"\n            ng-mouseenter=\"mouseOver($index)\">\n        </a>\n      </li>\n    </ul>\n\n    <span class=\"input-group-addon\" ng-click=\"setFilterFocus()\">\n      <i class=\"caret\"></i>\n    </span>\n  </div>\n\n  <!-- Unfiltered dropdowns use a regular [Bootstrap] select -->\n  <select aria-manager\n          ng-if=\"!enableFiltering && filteredOptions.length\"\n          id=\"{{model.uid}}\"\n          class=\"form-control\"\n          tabindex=\"{{tabIndex}}\"\n          ng-disabled=\"disable || model.disabled\"\n          ng-model=\"model.bindable\"\n          ng-options=\"option[valueAttribute] as option[labelAttribute] for option in filteredOptions\">\n  </select>\n</div>\n");
$templateCache.put("form-for/templates/submit-button.html","<button ng-class=\"buttonClass || \'btn btn-default\'\"\n        ng-disabled=\"disable || model.disabled\"\n        tabindex=\"{{tabIndex}}\">\n\n  <i ng-if=\"icon\" ng-class=\"icon\"></i>\n\n  <span ng-bind-html=\"bindableLabel\"></span>\n</button>\n");
$templateCache.put("form-for/templates/text-field.html","<div  class=\"form-group\"\n      ng-class=\"{disabled: disable || model.disabled, \'has-error\': model.error}\">\n\n  <field-label  ng-if=\"label\"\n                input-uid=\"{{model.uid}}\"\n                iud=\"{{model.uid}}-label\"\n                label=\"{{label}}\"\n                help=\"{{help}}\"\n                required=\"{{model.required}}\">\n  </field-label>\n\n  <field-error  error=\"model.error\"\n                uid=\"{{model.uid}}-error\">\n  </field-error>\n\n  <div ng-class=\"{\'input-group\': iconBefore || iconAfter}\">\n    <span ng-if=\"iconBefore\" class=\"input-group-addon\"\n          ng-click=\"onIconBeforeClick()\">\n      <i class=\"text-field-icon\" ng-class=\"iconBefore\"></i>\n    </span>\n\n    <span ng-if=\"!multiline\" ng-include src=\"\'form-for/templates/text-field/_input.html\'\"></span>\n\n    <span ng-if=\"multiline\" ng-include src=\"\'form-for/templates/text-field/_textarea.html\'\"></span>\n\n    <span ng-if=\"iconAfter\" class=\"input-group-addon\"\n          ng-click=\"onIconAfterClick()\">\n      <i class=\"text-field-icon\" ng-class=\"iconAfter\"></i>\n    </span>\n  </div>\n</div>\n");
$templateCache.put("form-for/templates/text-field/_input.html","<input  aria-manager\n\n        id=\"{{model.uid}}\"\n        class=\"form-control\"\n        ng-disabled=\"disable || model.disabled\"\n\n        type=\"{{type}}\"\n        tabindex=\"{{tabIndex}}\"\n        placeholder=\"{{placeholder}}\"\n        ng-model=\"model.bindable\"\n        form-for-debounce=\"{{debounce}}\"\n        ng-click=\"onFocus()\"\n        ng-blur=\"onBlur()\" />\n");
$templateCache.put("form-for/templates/text-field/_textarea.html","<textarea aria-manager\n\n          id=\"{{model.uid}}\"\n          class=\"form-control\"\n          ng-disabled=\"disable || model.disabled\"\n\n          tabindex=\"{{tabIndex}}\"\n          placeholder=\"{{placeholder}}\"\n          ng-model=\"model.bindable\"\n          form-for-debounce=\"{{debounce}}\"\n          ng-click=\"onFocus()\"\n          ng-blur=\"onBlur()\">\n</textarea>\n");}]);