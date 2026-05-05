#!/usr/bin/env bash

# TESTING
# dir="public/images/gallery/mixed-media"

# find "$dir" -maxdepth 1 -type f -name '*.jpg' -print0 |
# while IFS= read -r -d '' old; do
#   tmp="${old}.__tmp_case_rename__"
#   new="${old%.jpg}.JPEG"
#   echo git mv -- "$old" "$tmp"
#   echo git mv -- "$tmp" "$new"
# done

# RUNNING

# dir="public/images/gallery/mixed-media"

# find "$dir" -maxdepth 1 -type f -name '*.jpg' -print0 |
# while IFS= read -r -d '' old; do
#   tmp="${old}.__tmp_case_rename__"
#   new="${old%.jpg}.jpg"

#   # Two-step rename handles case-only changes on Windows filesystems
#   git mv -- "$old" "$tmp"
#   git mv -- "$tmp" "$new"
# done

# dir="public/images/gallery/mixed-media"

# find "$dir" -maxdepth 1 -type f -name '*.JPEG.jpg' -print0 |
# while IFS= read -r -d '' old; do
#   new="${old%.JPEG.jpg}.jpg"
#   git mv -- "$old" "$new"
# done

# dir="public/images/gallery/mixed-media"

# find "$dir" -maxdepth 1 -type f \( -name '*.jpg' -o -name '*.JPG' \) -print0 |
# while IFS= read -r -d '' old; do
#   base="${old%.*}"
#   tmp="${base}.__tmp_case_rename__"
#   new="${base}.JPEG"

#   # Two-step rename avoids case-change issues on Windows filesystems
#   git mv -- "$old" "$tmp"
#   git mv -- "$tmp" "$new"
# done

dir="public/images/gallery/traditional"

find "$dir" -maxdepth 1 -type f \( -name '*.jpg' -o -name '*.JPG' \) -print0 |
while IFS= read -r -d '' old; do
  base="${old%.*}"
  tmp="${base}.__tmp_case_rename__"
  new="${base}.JPEG"

  # Two-step rename avoids case-change issues on Windows filesystems
  git mv -- "$old" "$tmp"
  git mv -- "$tmp" "$new"
done