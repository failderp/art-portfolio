#!/usr/bin/env bash

# TESTING
# dir="public/images/gallery/doodles"

# find "$dir" -maxdepth 1 -type f -name '*.jpg' -print0 |
# while IFS= read -r -d '' old; do
#   tmp="${old}.__tmp_case_rename__"
#   new="${old%.jpg}.JPEG"
#   echo git mv -- "$old" "$tmp"
#   echo git mv -- "$tmp" "$new"
# done

# RUNNING

dir="public/images/gallery/doodles"

find "$dir" -maxdepth 1 -type f -name '*.jpg' -print0 |
while IFS= read -r -d '' old; do
  tmp="${old}.__tmp_case_rename__"
  new="${old%.jpg}.JPEG"

  # Two-step rename handles case-only changes on Windows filesystems
  git mv -- "$old" "$tmp"
  git mv -- "$tmp" "$new"
done