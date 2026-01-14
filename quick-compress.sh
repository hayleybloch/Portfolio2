#!/bin/bash

# Simple Media Compression Script
# Usage: ./quick-compress.sh <file_path>
# Compresses images and videos in-place with sensible defaults
# Examples:
#   ./quick-compress.sh image.jpg
#   ./quick-compress.sh video.mp4
#   ./quick-compress.sh ./public/images/TTrexRobot/final-ttrex.jpeg

if [ $# -eq 0 ]; then
  echo "❌ Usage: $0 <file_path>"
  echo ""
  echo "Examples:"
  echo "  $0 image.jpg"
  echo "  $0 video.mp4"
  echo "  $0 ./public/images/TTrexRobot/final-ttrex.jpeg"
  exit 1
fi

FILE="$1"

if [ ! -f "$FILE" ]; then
  echo "❌ File not found: $FILE"
  exit 1
fi

EXTENSION="${FILE##*.}"
EXTENSION_LOWER=$(echo "$EXTENSION" | tr '[:upper:]' '[:lower:]')
FILENAME="${FILE%.*}"

# Get file size before compression
SIZE_BEFORE=$(du -h "$FILE" | cut -f1)
echo "📦 Compressing: $FILE"
echo "   Size before: $SIZE_BEFORE"

# Compress based on file type
case "$EXTENSION_LOWER" in
  jpg|jpeg)
    # JPEG compression with quality 5
    ffmpeg -i "$FILE" -q:v 5 "${FILENAME}-compressed.jpg" -y 2>&1 | grep -E "error|Error" || true
    if [ -f "${FILENAME}-compressed.jpg" ]; then
      mv "${FILENAME}-compressed.jpg" "$FILE"
      SIZE_AFTER=$(du -h "$FILE" | cut -f1)
      echo "   ✓ Compressed to: $SIZE_AFTER"
    else
      echo "   ❌ Compression failed"
      exit 1
    fi
    ;;
  png)
    # PNG compression with quality 5
    ffmpeg -i "$FILE" -q:v 5 "${FILENAME}-compressed.png" -y 2>&1 | grep -E "error|Error" || true
    if [ -f "${FILENAME}-compressed.png" ]; then
      mv "${FILENAME}-compressed.png" "$FILE"
      SIZE_AFTER=$(du -h "$FILE" | cut -f1)
      echo "   ✓ Compressed to: $SIZE_AFTER"
    else
      echo "   ❌ Compression failed"
      exit 1
    fi
    ;;
  mp4|mov|avi|mkv|webm)
    # Video compression with H.264
    ffmpeg -i "$FILE" -c:v libx264 -crf 28 -c:a aac -b:a 128k "${FILENAME}-compressed.mp4" -y 2>&1 | grep -E "frame=|error|Error" || true
    if [ -f "${FILENAME}-compressed.mp4" ]; then
      mv "${FILENAME}-compressed.mp4" "$FILE"
      SIZE_AFTER=$(du -h "$FILE" | cut -f1)
      echo "   ✓ Compressed to: $SIZE_AFTER"
    else
      echo "   ❌ Compression failed"
      exit 1
    fi
    ;;
  *)
    echo "❌ Unsupported file type: $EXTENSION_LOWER"
    echo "   Supported: jpg, jpeg, png, mp4, mov, avi, mkv, webm"
    exit 1
    ;;
esac

echo "✅ Done!"
