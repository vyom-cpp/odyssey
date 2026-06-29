#!/bin/bash
set -e

# About
mv components/about/About.tsx app/about/page.tsx
rm -rf components/about

# Contact
rm app/contact/page.tsx
mv components/contact/ContactPage.tsx app/contact/page.tsx
mv components/contact/contact.module.css app/contact/
mv components/contact/ContactCTA.tsx app/contact/
mv components/contact/ContactCTA.module.css app/contact/
rm -rf components/contact

# Shelf
rm app/shelf/page.tsx
mv components/shelf/ShelfPage.tsx app/shelf/page.tsx
mv components/shelf/ShelfPreview.tsx app/shelf/
mv components/shelf/ShelfPreview.module.css app/shelf/
mv components/shelf/photography app/shelf/
mv components/shelf/poetry app/shelf/
rm -rf components/shelf

# Work
rm app/work/page.tsx
mv components/work/WorkPage.tsx app/work/page.tsx
mv components/work/work.module.css app/work/
rm app/work/taskflow/page.tsx
mv components/work/taskflow/TaskflowPage.tsx app/work/taskflow/page.tsx
mv components/work/taskflow/* app/work/taskflow/ 2>/dev/null || true
rm -rf components/work

echo "Moved components to app directory successfully."
