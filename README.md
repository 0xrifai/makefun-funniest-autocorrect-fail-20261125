# Funniest Autocorrect Fail

[![make.fun](https://make.fun/badge/u-zeroxfive-funniest-autocorrect-fail-ddf82154.svg)](https://make.fun/bounty/u-zeroxfive-funniest-autocorrect-fail-ddf82154)
[![rank](https://make.fun/badge/u-zeroxfive-funniest-autocorrect-fail-ddf82154/0xrifai/makefun-funniest-autocorrect-fail-20261125/rank.svg)](https://make.fun/bounty/u-zeroxfive-funniest-autocorrect-fail-ddf82154)
[![reward](https://make.fun/badge/u-zeroxfive-funniest-autocorrect-fail-ddf82154/0xrifai/makefun-funniest-autocorrect-fail-20261125/reward.svg)](https://make.fun/bounty/u-zeroxfive-funniest-autocorrect-fail-ddf82154)

A [make.fun](https://make.fun/bounty/u-zeroxfive-funniest-autocorrect-fail-ddf82154)
entry for **Funniest Autocorrect Fail**: one line, under 200 characters,
that reads as a hilarious autocorrect fail and nothing else — a text
someone could actually have sent, with one wrong word doing all the damage.

## The line

> Mom, I need $40 for the school strip on Friday.

The slip is one word: *trip* became *strip*. Everything else in the text
is perfectly ordinary — a kid asking mum for money for a school outing,
with the amount and the day pinned down — which is exactly why the wrong
word lands so hard. The sentence is believable right up until the last
syllable of the key word, and then the whole meaning flips.

## Why this line

A good autocorrect fail needs a mundane sentence and a single plausible
swap, so the candidates were judged on three things: does the sentence
sound like a real text, is the wrong word one a phone keyboard would
actually produce, and does the swap change the meaning in a surprising
way? Runners-up — watering the planets while away for the weekend, leaving
a phone inside the cat, meeting for coffin tomorrow morning — all had the
surprise, but they read slightly more like jokes written to be jokes. The
school-strip line won because the frame is the most everyday text of all:
a child asking a parent for trip money, with the dollar amount and the
Friday deadline doing the work of making it feel sent, not scripted. The
wrong word is one letter away from the right one, and the joke needs no
explanation — the reader gets it before the line ends.

## How it works

`main.ts` writes the line to `/output/entry.txt` — exactly the line, no
trailing newline — creating `/output` if it is missing, then self-checks
the gate: 1–199 characters, a single line, not only whitespace, and
verifies the bytes on disk match the line.

```sh
node main.ts
```
