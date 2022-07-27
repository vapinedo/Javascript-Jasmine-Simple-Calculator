# Javascript Testing with Jasmine :: Simple Calculator

## Composition for Testing

1. Testing Structure
    1. Test Suite ( usually describe method)
    2. Spec or Test ( usually test, spec, method :: it's depends on each tool )

2. Asserting Library
    1. Expectation
        1. Expect
        2. Matcher ( toBe, toEqual, ToBeUndefined, ToBeDefined, ToBeNull, etc )
3. Test Launcher or Test Runner
    1. Karma
## Some Frameworks for unit and integration testing
    1. Jest 
    2. Jasmine
    2. Mocha 

## Some Libraries for unit and integration testing
    1. React Testing Library
    2. Chai ( Assertion Library )

# Code Samples

## Testing Structure
### Test Suite
```
@params
    first: test suite name ( string )
    second: callback fn wich will contains all specs or test for test suite

describe("TEST SUITE :: nameOfFileToTest.ext", () => {});

```
