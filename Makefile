set-up:
	yarn global add flow-remove-types
	yarn add flow-bin --dev
	yarn add flow-typed --dev
	touch .flowconfig

.PHONY: check
check:
	yarn run flow-check

build: check
	yarn run flow-remove

.PHONY: test
test: build
	yarn run test
