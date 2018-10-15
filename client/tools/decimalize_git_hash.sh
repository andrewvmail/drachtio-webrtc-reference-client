#!/bin/bash

# https://gist.github.com/hborders/87eecb5874169f76cfacb26dc4223575#file-decimalize_git_hash-bash

printf "%d" 0x1"$(git rev-parse --short=7 HEAD)"
