## Prerequisites

You need 3 language environments to be configured in your system
1. node.js [Node.js Installation Guide](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs)
2. python [Python Installation Guide](https://www.python.org/downloads/)
3. go [Go Installation Guide](https://go.dev/doc/install)

If you would found any troubles, please open an issue in this repo. We want make this comfortable experience for everyone.



## Tasks Overview

| Task                                                      | Success | It Took N Minutes | Quality | Usability |
|-----------------------------------------------------------|:-------:|:-----------------:|:-------:|:---------:|
| [Go Server Application Testing](tests-for-code/README.md) |         |                   |         |           |
| [Fibonacci Performance Improvement](improve/README.md)    |         |                   |         |           |
| [Tennis Scoring Refactoring](refactoring/README.md)       |         |                   |         |           |
| [Python Server Generation](code-for-test/README.md)       |         |                   |         |           |
| [Node.js to Python Transpilation](transpile/README.md)    |         |                   |         |           |
| Generate documentation                                    |         |                   |         |           |

#### Description of columns
**Success** - yes or no
**It Took N Minutes** - number of minutes you spent on this task
**Quality** - score from 0 to 5, how satisfied you are with the result
**Usability** - was it comfortable to perform these tasks with this tool

## Server Application Testing
- [ ] Write server.test.js for testing server.go.

## Fibonacci Performance Improvement
- [ ] Improve fibonacci.py calculation speed without specific implementation details.
- [ ] Improve fibonacci.py calculation speed with provided ideas (e.g., memoization).

## Tennis Scoring Refactoring
- [ ] Refactor tennis.js in a single file.
- [ ] Refactor tennis.js and separate some logic into helpers.js.

## Python Server Generation
- [ ] Generate server.py that will work with server.test.js.

## Node.js to Python Transpilation
- [ ] Transpile app.js to app.py using FastAPI or Flask.

## Generate documentation
- [ ] Ask code completion to generate documentation for two files in this repo, check quality of code generation 




# Example result of your research

## [Cursor](https://cursor.sh)

| Task                                                      | Success | It Took N Minutes | Quality | Usability |
|-----------------------------------------------------------|:-------:|:-----------------:|:-------:|:---------:|
| [Go Server Application Testing](tests-for-code/README.md) |  +      |        3           |   4     |    5     |
| [Fibonacci Performance Improvement](improve/README.md)    |  +      |        10          |   5     |    5     |
| [Tennis Scoring Refactoring](refactoring/README.md)       |  +      |        1           |   5     |    5     |
| [Python Server Generation](code-for-test/README.md)       |  +      |        3           |   4     |    5     |
| [Node.js to Python Transpilation](transpile/README.md)    |  +      |        3           |   4     |    5     |
| Generate documentation                                    |  +      |        10          |   3     |    3     |
