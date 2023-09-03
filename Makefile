NTAG := $(shell git describe --abbrev=0 | awk '{print $$1"+0.1"}' | bc)

help:
	@echo "help          - napoveda"
	@echo "apk           - vytvori apk soubor"
	@echo "bundleupdate  - vytvoří bundle"
	@echo "tag           - vytvori novy tag"
	@echo "clean         - smaze generovane a stazene soubory"

apk:
	gradle assembleRelease

bundle:
	gradle bundle

tag:
	git tag -a -s -m "Verze $(NTAG)" $(NTAG)

clean:
	gradle clean
	rm -rf build .gradle
	rm -rf tmp

bundleupdate:
	bundle update

release:
	bundle exec fastlane deploy
