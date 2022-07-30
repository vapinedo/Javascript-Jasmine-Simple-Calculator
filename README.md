# Javascript Testing with Jasmine :: Simple Calculator

## 1. Composition for Testing

1. Testing Structure
    1. Test Suite ( usually describe method)
    2. Spec or Test ( usually test, spec, method :: it's depends on each tool )

2. Asserting Library
    1. Expectation
        1. Expect
        2. Matcher ( toBe, toEqual, ToBeUndefined, ToBeDefined, ToBeNull, etc ) throws boolean outputs
3. Test Launcher or Test Runner
    1. Karma
## 2. Some Frameworks for unit and integration testing
    1. Jest 
    2. Jasmine
    2. Mocha 

## 3. Some Libraries for unit and integration testing
    1. React Testing Library
    2. Chai ( Assertion Library )

## 4. Code Sample :: Testing Structure
### 1. Test Suite
```
@params
    first: test suite name ( string )
    second: ( function ) wich will contains all specs or test for test suite

describe("TEST SUITE :: nameOfFileToTest.ext", () => {});

```
### 2. Assertion Libary
```
    @params
    first: test or spec name ( string )
    seconnd: ( function ) to write expectation or expectations

  it("should subtract number from the total", () => {});

```
### 3. Expectation
```
    first: ( function ) expect
    second: ( function ) matcher

    expect(valueReturnByActualCoding).toBe(valueExpectedByUser);

```

## 5. Test Launcher :: Setup and Teardown

Setup and teardown are jasmine lice cycle methods 

### Setup methods

This methods will be executed before each and every specs ( it or test method ) in the suites ( describe methods )

**1. beforeEach**

**2. beforeAll**

