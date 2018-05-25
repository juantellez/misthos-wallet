#!/bin/bash

set -e

pushd deps
# make install
git log --pretty=format:'%h' -n 1 > gitref
popd

mv deps repo-with-deps

tar -zcvf "bundled-deps-$(cat repo-with-deps/gitref).tgz" repo-with-deps

mv ./*.tgz repo-with-deps
