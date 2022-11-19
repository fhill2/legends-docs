STARTERS_SOURCES := $(shell find src/starters -type f -name '*.md')
STARTERS_TARGETS := $(patsubst src/starters/%.md,docs/starters/%.html,$(STARTERS_SOURCES))

# $(error   STARTERS_SOURCES is $(STARTERS_SOURCES))
# $(error   STARTERS_TARGETS is $(STARTERS_TARGETS))

all: assets docs/report.html $(STARTERS_TARGETS)


SRC_ASSETS := $(shell find assets -type f)
DST_ASSETS := $(patsubst assets/%,docs/%,$(SRC_ASSETS))
docs/% : assets/%
		@mkdir -p "$(dir $@)"
		cp "$<" "$@"
# .PHONY: assets
assets: $(DST_ASSETS)



SRC_REPORT := $(shell find src/report -type f -name '*.md')
# DST_REPORT := $(patsubst assets/%,docs/%,$(SRC_ASSETS))
# .PHONY: docs/report.html
docs/report.html: $(SRC_REPORT)
	tools/build_report.sh $(SRC_REPORT)


.PHONY: clean
clean:
	rm -rf docs


IN = $(wildcard src/starters/*.md)
OUT = $(subst src/starters/,docs/starters,$(IN))

docs/starters/%.html: src/starters/%.md
	# cp $< $@
	tools/build.sh "$<" "$@"

default:  $(OUT)


