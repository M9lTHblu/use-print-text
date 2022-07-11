build:
	rm -rf dist
	npx rollup -c

test:
	npm run test

publish:
	npm publish

lint:
	npx eslint .

fixLint:
	npx eslint . --fix

.PHONY: test
