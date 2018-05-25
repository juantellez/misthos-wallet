install:
	yarn install
	node_modules/.bin/bsb -make-world

dev:
	yarn start

test-unit:
	node_modules/.bin/jest --clearCache
	yarn test --testPathIgnorePatterns "/integration/"

test:
	node_modules/.bin/jest --clearCache
	./scripts/start_bitcoind.sh
	yarn test

bsb:
	node_modules/.bin/bsb -clean-world
	node_modules/.bin/bsb -make-world -w

build:
	rm -rf ./node_modules/uri-js/dist/esnext
	rm -rf build
	yarn build

ci:
	node_modules/.bin/bsb -make-world
	node_modules/.bin/jest --clearCache
	./scripts/start_bitcoind.sh
	CI=true yarn test --runInBand
	./scripts/stop_bitcoind.sh

.PHONY: ci build
