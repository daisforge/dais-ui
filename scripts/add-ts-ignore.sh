#!/usr/bin/env bash

# Usage: ./scripts/add-ts-ignore.sh [directory]
# If no directory is provided, the current directory is used.

DIR="${1:-.}"

# Find all .ts and .tsx files recursively and prepend @ts-ignore if not already present at the first line.
find "$DIR" -type f \( -name "*.ts" -o -name "*.tsx" \) -print0 | while IFS= read -r -d '' file; do
  # Check if the first line already contains @ts-ignore to avoid duplicate insertion
  if head -n 1 "$file" | grep -q "@ts-ignore"; then
    echo "Skipping (already has @ts-ignore): $file"
  else
    sed -i '1i @ts-ignore' "$file"
    echo "Added @ts-ignore to: $file"
  fi
done

echo "Done."
