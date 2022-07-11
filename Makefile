build:
	rm -rf dist
	npx rollup -c
test:
	npm run test
publish:
	npm publish
