# Javascript Testing with Jasmine Testing Framework :: Simple Calculator App

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

Setup and teardown are jasmine lice cycle methods for the test suite ( describe method )

### Setup methods

This methods will be executed before the suites ( describe methods )

**1. beforeEach**

It will be executed before all specs on the test suite in which it's defined.

For example if you have 10 specs methods in your test suite, beforeEach method will
be executed 10 times. That means one time before each spec ( it or test ) execution.

**2. beforeAll**

It will be executed before all specs on the test suite in which it's defined, but
i will be executed just only one time.

For example if you have 10 specs methods in your test suite, beforeAll method will
be executed one time. That means there is not execution every time.

### Teardown methods

This methods will be executed after the suites ( describe methods )

**1. afterEach**

It will be executed after all specs on the test suite in which it's defined.

For example if you have 10 specs methods in your test suite, afterEach method will
be executed 10 times. That means one time after each spec ( it or test ) execution.


**2. afterAll**

It will be executed after all specs on the test suite in which it's defined, but
i will be executed just only one time.

For example if you have 10 specs methods in your test suite, afterAll method will
be executed one time. That means there is not execution every time.