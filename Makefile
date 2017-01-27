.PHONY: check
check:
	yarn run flow-check

build: check
	yarn run flow-remove

.PHONY: test
test: build
	yarn run test
